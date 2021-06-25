// Import Adoption contract
var Adoption = artifacts.require("Adoption");

module.exports = function (deployer) {
  deployer.deploy(Adoption);
};
