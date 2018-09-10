const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const config = require('./../config.js')

const toggleSignUp = function () {
  $('.sign-in').hide()
  $('.sign-up').show()
  $('.sign-up-status').empty()
  $('.sign-up-status').removeClass('fail')
  $('.sign-up').removeClass('border-danger')
  $('.sign-up').removeClass('border-success')
}

const toggleSignIn = function () {
  $('.sign-in').show()
  $('.sign-up').hide()
  $('.sign-in-status').removeClass('fail')
  $('.sign-in').removeClass('border-danger')
  $('.sign-in-status').empty()
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
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
    .catch(ui.changePasswordFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  logOut,
  changePassword,
  toggleSignIn,
  toggleSignUp
}
