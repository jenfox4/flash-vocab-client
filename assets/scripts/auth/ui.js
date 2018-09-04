const store = require('./../store.js')
const config = require('./../config.js')


const signUpSuccess = function () {
  console.log('signed up')
}

const signInSuccess = function (response) {
  $('#sign-in-modal').modal('hide')
  $('input').val('')
  $('.flashcard').show()
  $('#menu').show()
  $('#register').hide()
  $('.login-buttons').hide()
  store.user = response.user
}

const changePasswordSuccess = function () {
  console.log('changePassword')
}

const logOutSuccess = function () {
  $('.flashcard').hide()
  $('#menu').hide()
  $('#register').show()
  $('.login-buttons').show()
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  logOutSuccess
}
