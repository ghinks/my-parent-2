const tap = require("tap")
const myFunc = require("./index")

tap.test( tap => {
  const testValue = "abcdefg12345"
  tap.equal(myFunc(), testValue)
  tap.end()
})
