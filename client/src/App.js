import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import { Dharma, Web3 } from "@dharmaprotocol/dharma.js";

import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";

import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state =  {
      storageValue: 0, web3: null, accounts: null, contract: null
    }

    this.darma = null;
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(SimpleStorageContract);
      Contract.setProvider(web3.currentProvider);
      this.darma = new Dharma(web3.currentProvider);
      console.log(this.darma)
      //create Loan Request with DAI/WETH parameters


      const instance = await Contract.deployed();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  loanRequest = async () => {
    console.log(this.darma)
    // const { LoanRequest } = Dharma.Types;


    // await LoanRequest.create(dharma, {
    //   principalAmount: 100,
    //   principalToken: "DAI",
    //   collateralAmount: 10,
    //   collateralToken: "WETH",
    //   interestRate: 3.5,
    //   termDuration: 3,
    //   termUnit: "months",
    //   expiresInDuration: 1,
    //   expiresInUnit: "weeks",
    // });

    // //Sign load request (default account is considered the debtor)
    // await loanRequest.signAsDebtor();

  }


  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.set(5, { from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.get();

    // Update state with the result.
    this.setState({ storageValue: response.toNumber() });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 37</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
