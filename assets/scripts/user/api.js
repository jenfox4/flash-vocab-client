// api interactions with authentication process
const config = require('../config.js')
const store = require('../store.js')

// next flashcard in whole GRE deck
const nextFlashcard = function (flashcardId) {
  let url = null
  if (store.stackMode === 'gre') {
    url = '/flashcards/'
  } else {
    url = '/myflashcards/'
  }
  return $.ajax({
    url: config.apiUrl + url + flashcardId,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
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

const deleteMyFlashcard = function (myFlashcardId) {
  return $.ajax({
    url: config.apiUrl + '/myflashcards/' + myFlashcardId,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const addSentence = function (myFlashcardId, sentence) {
  return $.ajax({
    url: config.apiUrl + '/myflashcards/' + myFlashcardId,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      myflashcard: {
        sentence: sentence
      }
    }
  })
}

module.exports = {
  nextFlashcard,
  saveToMyflashcards,
  allMyCards,
  deleteMyFlashcard,
  addSentence
}
