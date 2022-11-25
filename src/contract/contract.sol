pragma solidity >= 0.8.7;

contract PayConsent{

    enum user_type{
        sender,
        receiver
    }

    enum status{
        notsigned,
        signed,
        complete,
        disagreement
    }

    struct user{
        user_type t_user;
        status  status_user;
        address other_side;
    }

    uint     public   transactionAmount;
    uint     private   timestamp_signature;
    string[2] public  urls;
    status   private  contract_status;
    mapping (address => user) users;
    address   public  owner;

    modifier    isSender{
        require(users[msg.sender].other_side != address(0) && users[msg.sender].t_user == user_type.sender , "You are not the sender");
        _;
    }

    modifier    isReceiver{
        require(users[msg.sender].other_side != address(0) && users[msg.sender].t_user == user_type.receiver , "You are not the receiver");
        _;
    }

    modifier    isAllowed{
        require(users[msg.sender].other_side != address(0) && (users[msg.sender].t_user == user_type.sender || users[msg.sender].t_user == user_type.receiver), "You are not allowed to use contract");
        _;
    }

    modifier    pay_and_sign_condition_sender{
        // require(address(this).balance < transactionAmount, "Is pay");
        require(users[msg.sender].other_side != address(0) && users[msg.sender].t_user == user_type.sender , "You are not the sender");
        require(users[msg.sender].status_user < status.signed, "the contract has already signed");
        require(users[users[msg.sender].other_side].status_user == status.signed, "the contract of other side is not sign");
        require(msg.value == transactionAmount, "Is not good amount");
        _;
    }

    modifier    cancel_condition{
        _;
    }

    modifier    sign_condition_receiver{
        require(users[msg.sender].other_side != address(0) && users[msg.sender].t_user == user_type.receiver , "You are not the receiver");
        require(users[msg.sender].status_user == status.notsigned, "the contract is already signed");
        _;
    }

    modifier    validation_condition{
        require(contract_status == status.signed, "Status contract is not sign or already validate");
        require(users[msg.sender].status_user == status.signed, "Already validate");
        _;
    }

    constructor (user_type t_creator_user, user_type t_other_user, address creator_user, address other_user, uint _transactionAmount, string[] memory _urls){
        owner = msg.sender;
        users[creator_user] = user(t_creator_user, status.notsigned, other_user);
        users[other_user] = user(t_other_user, status.notsigned, creator_user);
        transactionAmount = _transactionAmount;
        contract_status = status.notsigned;
        urls[0] = _urls[0];
        urls[1] = _urls[1];
    }

    function getUsersInfo() isAllowed external view returns (uint,address, status, user memory, status){
        return (address(this).balance, msg.sender,contract_status,users[msg.sender], users[users[msg.sender].other_side].status_user);
    }

    function cancelContract() isAllowed external{
        require(contract_status <= status.signed, "cannot cancel a complete contract");
        if (contract_status == status.notsigned || (contract_status == status.signed && (timestamp_signature + 2) < block.timestamp)){
            if (users[msg.sender].t_user == user_type.sender)
                selfdestruct(payable(msg.sender));
            else
                selfdestruct(payable(users[msg.sender].other_side));
        }
    }
    function getStatusContract() external view returns(status){
        return (contract_status);
    }
    
    function    signContract() sign_condition_receiver public{
        users[msg.sender].status_user = status.signed;
    }

    function    payAndSign() pay_and_sign_condition_sender external payable{
        users[msg.sender].status_user = status.signed;
        contract_status = status.signed;
        timestamp_signature = block.timestamp;
    }

    function ValidateContract() isAllowed validation_condition external{
        users[msg.sender].status_user = status.complete;
        if (users[users[msg.sender].other_side].status_user == status.complete)
            contract_status = status.complete;
    }

    function ClaimMoney() isReceiver external payable{
        require(contract_status == status.complete, "Contract is not completed");
        selfdestruct(payable(msg.sender));
    }

}