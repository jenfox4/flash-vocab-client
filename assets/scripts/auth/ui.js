const store = require('./../store.js')
const config = require('./../config.js')

const signUpSuccess = function () {
  $('.sign-up-status').removeClass('fail')
  $('.sign-up').removeClass('border-danger')
  $('.sign-up-status').empty()
  $('input').val('')
  $('.sign-up-status').html('<h4> You are now signed up! Log in to start studying </h4>')
  $('.sign-up').addClass('border-success')
}

const signUpFail = function (response) {
  if (response.responseText === '{"email":["has already been taken"]}') {
    $('.sign-up-status').text('Looks like you already have an account! Go ahead and sign-in!')
  } else {
    $('.sign-up-status').text('We are having trouble signing you up right now. Try again later.')
  }
  $('input').val('')
  $('.sign-up-status').addClass('fail')
  $('.sign-up').addClass('border-danger')
}

const signInSuccess = function (response) {
  $('.sign-up-status').empty()
  $('.sign-up-status').removeClass('fail')
  $('.sign-up').removeClass('border-danger')
  $('.sign-up').removeClass('border-success')
  $('.sign-in-status').removeClass('fail')
  $('.sign-in').removeClass('border-danger')
  $('.sign-in-status').empty()
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

const signInFail = function () {
  $('.sign-in-status').addClass('fail')
  $('.sign-in').addClass('border-danger')
  $('.sign-in-status').text("We couldn't find you in our database! Make sure you enter the right username and password.")
  $('input').val('')
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('.modal-body .message').addClass('success')
  $('.modal-body .message').removeClass('fail')
  $('.modal-body .message').html('<h5> Your password has been changed! </h5>')
}

const changePasswordFail = function () {
  $('input').val('')
  $('.modal-body .message').addClass('fail')
  $('.modal-body .message').removeClass('success')
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

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  logOutSuccess,
  signInFail,
  signUpFail,
  logOutFail,
  changePasswordFail
}
