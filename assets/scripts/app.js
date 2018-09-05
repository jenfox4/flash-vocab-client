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
  $('.glyphicon-repeat').on('click', userEvents.flipFlashcard)
  $('.glyphicon-arrow-right').on('click', userEvents.nextFlashcard)
  $('.to-stack').on('click', userEvents.saveToMyflashcards)
  $('.my-cards').on('click', userEvents.allMyCards)
  $('.all-cards').on('click', userEvents.allGreCards)
  $('.remove-stack').on('click', userEvents.deleteMyFlashcard)
  $('textarea').on('blur', userEvents.saveMyflashcardSentence)
})
