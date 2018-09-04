'use strict'

const authEvents = require('./auth/events.js')
const userEvents = require('./user/events.js')

$(() => {
  // AUTHENTICATION HANDLERS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#log-out').on('click', authEvents.logOut)
  $('#change-password').on('submit', authEvents.changePassword)
  $('.modal').on('blur', function () {
    $('.message').empty()
})
$('.glyphicon-repeat').on('click', userEvents.flipCard)
})
