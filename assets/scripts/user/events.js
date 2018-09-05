const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const config = require('./../config.js')

const flipFlashcard = function (event) {
  event.preventDefault()
  ui.flipFlashcard()
}

const saveToMyflashcards = function (event) {
  event.preventDefault()
  const flashcardId = store.currentFlashcardId
  api.saveToMyflashcards(flashcardId)
    .then(ui.saveToMyflashcards)
    .catch(ui.fail)
}

const allMyCards = function (event) {
  event.preventDefault()
  api.allMyCards()
    .then(ui.allMyCards)
    .catch(ui.fail)
}

const allGreCards = function (event) {
  event.preventDefault()
  store.stackMode = 'gre'
  ui.allGreCards()
  nextFlashcard()
}

const nextFlashcard = function (event) {
  let flashcardId = null
  console.log('stack mode', store.stackMode)
  if (store.stackMode === 'gre') {
    flashcardId = (Math.floor((Math.random() * 2326) + 1))
  } else if (store.stackMode === 'mycards') {
    const length = store.arrayOfMyFlashcards.length - 1
    const index = (Math.floor((Math.random() * (length) + 1)))
    flashcardId = store.arrayOfMyFlashcards[index]
  }
  store.currentFlashcardId = flashcardId
  console.log(flashcardId)
  api.nextFlashcard(flashcardId)
    .then(ui.nextFlashcard)
    .catch(ui.fail)
}

const deleteMyFlashcard = function (event) {
  api.deleteMyFlashcard(store.flashcard.myflashcard.id)
    .then(ui.deleteSuccess)
    .catch(ui.fail)
}

const saveMyflashcardSentence = function (event) {
  console.log($('textarea').val())
  const sentence = $('textarea').val()
  console.log('sentence', sentence)
  const myFlashcardId = store.flashcard.myflashcard.id
  api.addSentence(myFlashcardId, sentence)
    .then(ui.addSentence)
    .catch(ui.fail)
}

module.exports = {
  flipFlashcard,
  saveToMyflashcards,
  allMyCards,
  nextFlashcard,
  deleteMyFlashcard,
  allGreCards,
  saveMyflashcardSentence
}