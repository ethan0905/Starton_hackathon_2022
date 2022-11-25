import { useState } from "react";

async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  return account;
}

export default function ConnectButton() {
  const [accountAddress, setAccountAddress] = useState("");

  const connectButtonOnClick = () => {
    console.log(window);
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      getAccount().then((response) => {
        setAccountAddress(response);
      });
    } else {
      console.log("error");
    }
  };

  return (
    <button onClick={connectButtonOnClick} className="bg-[#A5DFD5] text-[#282828] h-[2.5em] pl-[2em] pr-[2em] rounded-[10em] text-[16px] shadow-lg hover:bg-[#282828] hover:text-[#F4F1EE] transition ease-out delay-300 hover:translate-y-[-3px] last:mt-[2em]">
      {!!accountAddress ? accountAddress : "Connect"}
    </button>
  );
}