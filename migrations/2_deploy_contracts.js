const SteezCoin = artifacts.require("SteezCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(SteezCoin);
};
