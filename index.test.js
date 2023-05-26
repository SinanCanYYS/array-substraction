const arrayDiff = require('./index')

it('should return that string', () => {
  const str = arrayDiff([1,2,2,2,2,2,2,3,3,3,3,3,3,3,4],[1,2,3])
  expect(str).toBe([3,4])
})
