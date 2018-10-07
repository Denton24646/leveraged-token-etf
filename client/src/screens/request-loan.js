import React from 'react'
import { Dharma, Web3 } from "@dharmaprotocol/dharma.js";

export default class RequestLoan extends React.Component {

  constructor() {
    super()
    this.state = {
      principalAmount: 1,
      principalToken: "WETH",
      collateralAmount: 20,
      collateralToken: "REP",
      interestRate: 3.5,
      termDuration: 3,
      termUnit: "months",
      expiresInDuration: 1,
      expiresInUnit: "weeks",
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async () => {

    try {
      console.log("ahhhhh")

      const host = "http://localhost:8545";
      const provider = new Web3.providers.HttpProvider(host);
          console.log(provider)
  
      const dharma = new Dharma(provider);
      console.log(dharma)
  
      const { LoanRequest } = Dharma.Types;
  
      const loanRequest = await LoanRequest.create(dharma, {
        ...this.state
      });
      await loanRequest.signAsDebtor();

      console.log(loanRequest)
    } catch (e) {
      console.log(e)
    }
    

  }

  render() {
    let { principalAmount, principalToken, collateralAmount, collateralToken,
      interestRate, termDuration, termUnit, expiresInDuration, expiresInUnit } = this.state
    return (
      <div className="mt-12 flex justify-center">
        <div className="shadow w-2/5 p-12 border-t-4 border-green-light rounded">
          <h3 className="mb-6">Apply for a Loan</h3>
          <label className="my-3 text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Principal Amount
          </label>
          <input
            className=" appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="principalAmount"
            type="text"
            value={principalAmount}
            onChange={this.onChange}
            placeholder="1"
          />
          <label className="mt-3 text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Principal Token
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="principalToken"
            value={principalToken}
            type="text"
            onChange={this.onChange}
            placeholder="WETH"
          />
          <label className="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Collatoral Amount
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="collatoralAmount"
            value={collateralAmount}
            type="text"
            onChange={this.onChange}
            placeholder="20"
          />
          <label className="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Collatoral Token
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="collatoralToken"
            value={collateralToken}
            type="text"
            onChange={this.onChange}
            placeholder="REP"
          />
          <label className="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Interest Rate
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="interestRate"
            value={interestRate}
            type="text"
            onChange={this.onChange}
            placeholder="3.5"
          />
          <label className="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Term Duration
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="termDuration"
            type="text"
            value={termDuration}
            onChange={this.onChange}
            placeholder="3"
          />
          <label className="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Term Unit
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="termUnit"
            type="text"
            value={termUnit}
            onChange={this.onChange}
            placeholder="months"
          />
          <label className="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Expires In Duration
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="expiresInDuration"
            type="text"
            value={expiresInDuration}
            onChange={this.onChange}
            placeholder="1"
          />
          <label className="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Expires In Unit
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            name="expiresInUnit"
            value={expiresInUnit}
            type="text"
            onChange={this.onChange}
            placeholder="weeks"
          />
          <button
            className="py-6 rounded w-full bg-green-light my-6 text-white"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    )

  }
}