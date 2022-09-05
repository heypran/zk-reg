## ZK-Registry

### Getting started

#### Pre-Requisite

- Install [rust](https://www.rust-lang.org/tools/install)
- Install [circom](https://docs.circom.io/getting-started/installation/)
- Install [nodejs](https://nodejs.org/en/download/)

#### Frontend / UI

Run the following command on your local environment:

```
git clone https://github.com/heypran/zk-reg.git

cd zk-reg/ui

yarn install

```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open http://localhost:3000 in the browser.

### Backend ( Smart Contracts & Circuits)

Create a file `private.json` ( refer `private.example.json` ) inside `backend` folder and add your private key.

##### Install deps

```
cd zk-reg/backend
yarn install
```

##### Compile contracts

`yarn compile`

##### Compile cicuits

- Using groth16

`yarn compile:circuits`

Please do not use this to compile circuits for production. Proper ceremony is required.

##### Run tests

`yarn test`

##### Deploy Contract

Select network - `chain.ts` contains network configuration. Network selected for deployment is mentioned in `hardhat.config.ts` file. Default is "polygon".

Run below command to deploy

`yarn deploy:agecheck --network testnet`
