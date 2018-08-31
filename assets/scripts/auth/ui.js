const store = require('./../store.js')
const config = require('./../config.js')


const signUpSuccess = function () {
  console.log('signed up')
}

const signInSuccess = function () {
  console.log('signed in')
}

module.exports = {
  signUpSuccess,
  signInSuccess
}
