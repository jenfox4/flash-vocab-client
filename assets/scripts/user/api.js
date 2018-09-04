// api interactions with authentication process
const config = require('../config.js')
const store = require('../store.js')

const nextFlashcard = function (data, flashcardId) {
  return $.ajax({
    url: config.apiUrl + '/flashcards/' + flashcardId,
    method: 'GET',
    data
  })
}

const allMyCards = function () {
  return $.ajax({
    url: config.apiUrl + '/myflashcards/',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const nextMyFlashcard = function (myFlashcardId) {
  return $.ajax({
    url: config.apiUrl + '/myflashcards/' + myFlashcardId,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}


const saveToMyflashcards = function (flashcardId) {
  return $.ajax({
    url: config.apiUrl + '/myflashcards/',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      myflashcard: {
        user_id: store.user.id,
        flashcard_id: flashcardId,
        sentence: null
      }
    }
  })
}

module.exports = {
  nextFlashcard,
  saveToMyflashcards,
  allMyCards,
  nextMyFlashcard
}
