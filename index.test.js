const arrayDiff = require('./index')

it('should return a string', () => {
  const str = mumbling('SinanCan')
  expect(str).toBe('S-Ii-Nnn-Aaaa-Nnnnn-Cccccc-Aaaaaaa-Nnnnnnnn')
})
