const HypeToken = artifacts.require('HypeToken')

module.exports = function (deployer) {
  deployer.deploy(HypeToken)
}
