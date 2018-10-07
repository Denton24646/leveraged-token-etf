pragma solidity ^0.4.24;

/**@title Interface for core Leverage contract */

contract ILeverage {
    function makeInitialDeposit() external payable;
    function createLoanRequest(string, uint, uint, uint) external payable;
    function buyLeveragedSet(string) external;
    function returnUserSet() internal;
}