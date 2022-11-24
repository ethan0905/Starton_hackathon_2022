<div align="center">

  <img src="readme/payconsent.png" alt="logo" width="200" height="auto" />
  <h1>PayConsent 🤝</h1>
  <p>A B2B payement protocol, secured using smartcontract</p>

</div>

## 🤏 Pitch
We are 4 students from 42 school and we have been experiencing issues with our client payement (deadline, terms of contract, ...).  
We thought that using blockchain technology to solve this problem was an interesting idea.  
 
## Sommaire

 - [❗ Problem](#Problem)
 - [Comment fonctionne GIT](#comment-fonctionne-git)
 - [Sécurité](#sécurité)
 - [Inscription GitLab](#inscription)
 - [Créer un projet](#créer-un-projet)
 - [Fourcher (forker) un projet](#fourcher-forker-un-projet)
 - [Gestion des fichiers](#gestion-des-fichiers)
 - [Demandes de fusion](#demandes-de-fusion)
 - [Le format Markdown](#am%C3%A9liorer-ses-textes-avec-le-format-markdown)
 - [Gestion des issues](#les-issues)
 - [FAQ](#faq)
 - [Liens](#liens)
 - [Glossaire](#glossaire)
 
## ❗ Problem
#### What problem does your project solve? 
1. Contract falsification  
2. Deadline for payement not respected  
3. Terms of contract not respected  
  
#### How does it fit into the theme "Building a Decentralized Future"?  
The solution is independant, self governing.  
    
## ✅ Solution
#### How did you resolve this issue?  
1. We decided to solve this issue, by creating an easy to use and decentralized payement protocol service that protect the 2 users during transaction (service-for-money).  
2. For each mission, we create a unique smart contract that is not editable and not replicable.  
3. We store the documents on decentralised database (IPFS).
  
We create a climate of trust for every users (Open Trust Framework Model).  
  
#### What technologies did you use?
- Escalidraw for project diagram  
- Figma to design and prototype the website  
- Trello to manage the project development  
- TailwindCSS and ReactJS for frontend and backend  
- Starton API for the smart contracts managements
- IPFS for the decentralised datastorage  
  
#### What was your biggest technical challenge and how does your solution solve it?
We never worked on Web3 before, so the biggest technical challenge was to give user the ability to write his own smart contract without knowledge.  
Our solution solve it by creating a form interface that write directly into our smart contract.  

## ⚙️ How to run the project ? 
  
1. Clone the repository:  
`https://github.com/ethan0905/hackathon_merge.git`  
  
2. Run at the root of repository, the following bash commands:  
`docker-compose up --build`
  
3. Then go to the following url on internet:  
`localhost:3000`  
  
## 📈 Business model

For each contract, we take a pourcentage of the total amount (6%)  

pas besoin de bcp de personnes (peu couteux)  
ajout differents type de contracts -> toucher une plus grande audience  

## 🧭 Roadmap

- [x] Docker installation
- [x] Metamask wallet connection
- [ ] Smart contract
    - [x] Write our own contract
    - [ ] Use of Starton API to create Smart contract from bytecode
    - [ ] Use of Starton API to calls Smart contract located at {address} on {network}
    - [ ] Deletes Smart contract located at {address} on {network}
- [x] Add image uploader on IPFS
- [ ] Form:
    - [ ] Interaction with Smart contract at {address} on {network}

## 🖥️ Development perspective
Create a DAO,  
Create our coin, the more user is holding, the less the additionnal fees gonna be 

## ⚠️ License
Distributed under the MIT License. See `LICENSE.txt` for more information.  
