const store = require('./../store.js')
const config = require('./../config.js')

const signUpSuccess = function () {
  console.log('signed up')
  $('input').val('')
  $('.login-message').html('<h4> You are now signed up! Log in to start studying </h4>')
}

const signInSuccess = function (response) {
  $('input').val('')
  $('.flashcard-container').show()
  $('.sentence').hide()
  $('.card-stack').show()
  $('.to-stack').show()
  $('#menu').show()
  $('.glyphicon-arrow-right').show()
  $('.sign-in').hide()
  $('img').hide()
  $('.content').css('flex-direction', 'column')
  store.user = response.user
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('.modal-body .message').html('<h5> Your password has been changed! </h5>')
}

const changePasswordFail = function () {
  $('input').val('')
  $('.modal-body .message').html('<h5> Uh oh! No can do. Try entering your old password again. </h5>')
}

const logOutSuccess = function () {
  $('.flashcard-container').hide()
  $('.to-stack').hide()
  $('.remove-stack').hide()
  $('#menu').hide()
  $('#register').show()
  $('.card-stack').text('GRE Flashcard Stack')
  $('.card-stack').hide()
  $('.glyphicon-arrow-right').hide()
  $('img').show()
  $('.message').empty()
  $('.sign-in').show()
}

const logOutFail = function () {
  $('.message').addClass('fail')
  $('.fail').html("<h4 style='color:red'> hmm...something didn't go right. Try that again.")
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
  signupFail,
  logOutFail,
  changePasswordFail
}
