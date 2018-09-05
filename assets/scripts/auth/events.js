const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const config = require('./../config.js')


const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signupFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.loginFail)
}

const logOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.logOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFail)
}

const changePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.fail)
}

module.exports = {
  onSignUp,
  onSignIn,
  logOut,
  changePassword
}
