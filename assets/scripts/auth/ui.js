const store = require('./../store.js')
const config = require('./../config.js')

const signUpSuccess = function () {
  console.log('signed up')
  $('#sign-up-modal').modal('hide')
  $('input').val('')
  $('.login-message').html('<h4> You are now signed up! Log in to start studying </h4>')
}

const signInSuccess = function (response) {
  $('.sign-in-message').empty()
  $('#sign-in-modal').modal('hide')
  $('input').val('')
  $('.flashcard').show()
  $('.card-stack').show()
  $('.to-stack').show()
  $('#menu').show()
  $('.glyphicon-arrow-right').show()
  $('#register').hide()
  $('.login-buttons').hide()
  $('.login-message').empty()
  $('img').hide()
  store.user = response.user
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('.modal-body .message').html('<h5> Your password has been changed! </h5>')
}

const logOutSuccess = function () {
  $('.flashcard').hide()
  $('.to-stack').hide()
  $('#menu').hide()
  $('#register').show()
  $('.login-buttons').show()
  $('.card-stack').text('GRE Flashcard Stack')
  $('.card-stack').hide()
  $('.glyphicon-arrow-right').hide()
  $('img').show()
}

const loginFail = function () {
  $('.sign-in-message').text("We couldn't find you in our database! Make sure you enter the right username and password.")
  $('input').val('')
}

const signupFail = function (response) {
  console.log(response.responseText)
  if (response.responseText === '{"email":["has already been taken"]}') {
    $('.sign-up-message').text('Looks like you already have an account! Go ahead and sign-in!')
  } else {
    $('.sign-up-message').text('We are having trouble signing you up right now. Try again later.')
  }
  $('input').val('')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  logOutSuccess,
  loginFail,
  signupFail
}
