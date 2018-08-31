const store = require('./../store.js')
const config = require('./../config.js')


const signUpSuccess = function () {
  console.log('signed up')
}

const signInSuccess = function (response) {
  console.log('signed in')
  store.user = response.user
}

const changePasswordSuccess = function () {
  console.log('changePassword')
}

const logOutSuccess = function () {
  console.log('log out success')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  logOutSuccess
}
