const Scan = artifacts.require("Scan");

module.exports = function(deployer) {
  deployer.deploy(Scan);
};