var DAIMock = artifacts.require("./DAIMock.sol");
var KyberMock = artifacts.require("./KyberMock.sol");
var ZeroExMock = artifacts.require("./ZeroExMock.sol");
 

module.exports = function(deployer) {
  deployer.deploy(DAIMock);
  deployer.deploy(KyberMock);
  deployer.deploy(ZeroExMock);
};
