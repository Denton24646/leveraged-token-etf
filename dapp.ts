import { Dharma, Web3 } from "@dharmaprotocol/dharma.js";

const host = "http://localhost:8545";
const provider = new Web3.providers.HttpProvider(host);
const dharma = new Dharma(provider);
const { LoanRequest } = Dharma.Types;

//create Loan Request with DAI/WETH parameters
const loanRequest = async() => await LoanRequest.create(dharma, {
    principalAmount: 100,
    principalToken: "DAI",
    collateralAmount: 10,
    collateralToken: "WETH",
    interestRate: 3.5,
    termDuration: 3,
    termUnit: "months",
    expiresInDuration: 1,
    expiresInUnit: "weeks",
});

//Sign load request (default account is considered the debtor)
(async function () { 
    await loanRequest.signAsDebtor();
})();