const HypeToken = artifacts.require('HypeToken.sol')

contract('HypeToken', (accounts) => {
  let hypeToken
  const name = 'HypeToken'
  const symbol = 'HYPE'
  before(async () => {
    hypeToken = await HypeToken.new()
  })

  it(`should be deployed with name ${name} and symbol ${symbol}`, async () => {
    const deployedName = await hypeToken.name()
    const deployedSymbol = await hypeToken.symbol()
    assert(deployedName == name)
    assert(deployedSymbol == symbol)
  })
})
