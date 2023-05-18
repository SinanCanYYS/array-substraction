function arrayDiff(a, b) {
    for (let i = a.length - 1; i >= 0; i--) {
      if (b.includes(a[i])) {
        a.splice(i, 1)
      }
    }
    return a
  }
  module.exports = arrayDiff