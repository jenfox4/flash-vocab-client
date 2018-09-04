const store = require('./../store.js')
const config = require('./../config.js')


const signUpSuccess = function () {
  console.log('signed up')
  $('#sign-up-modal').modal('hide')
  $('input').val('')
  $('.login-message').html('<h4> You are now signed up! Log in to start studying </h4>')
}

const signInSuccess = function (response) {
  $('#sign-in-modal').modal('hide')
  $('input').val('')
  $('.flashcard').show()
  $('#menu').show()
  $('#register').hide()
  $('.login-buttons').hide()
  $('.login-message').empty()
  store.user = response.user
}

const changePasswordSuccess = function () {
  console.log('changePassword')
  $('input').val('')
  $('.modal-body .message').html('<h5> Your password has been changed! </h5>')
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
