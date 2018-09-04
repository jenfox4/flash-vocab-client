const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const config = require('./../config.js')

const flipFlashcard = function (event) {
  event.preventDefault()
  ui.flipFlashcard()
}


const nextGREFlashcard = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const flashcardId = (Math.floor((Math.random() * 2326) + 1))
  store.currentFlashcardId = flashcardId
  console.log(store.currentFlashcard)
  api.nextFlashcard(data, flashcardId)
    .then(ui.nextFlashcard)
    .catch(ui.fail)
}

const saveToMyflashcards = function (event) {
  event.preventDefault()
  const flashcardId = store.currentFlashcardId
  console.log(flashcardId)
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

const nextMyFlashcard = function (event) {
  event.preventDefault()
  console.log(store.arrayOfMyFlashcards)
  const length = store.arrayOfMyFlashcards.length
  console.log(length)
  const index = (Math.floor((Math.random() * (4) + 1)))
  console.log(index)
  const myFlashcardId = store.arrayOfMyFlashcards[index]
  api.nextMyFlashcard(myFlashcardId)
    .then(ui.nextMyFlashcard)
    .catch(ui.fail)
}

const nextFlashcard = function (event) {
  if (store.stackMode === 'gre') {
    nextGREFlashcard(event)
  } else if (store.stackMode === 'mycards') {
    nextMyFlashcard(event)
  }
}

module.exports = {
  flipFlashcard,
  nextGREFlashcard,
  saveToMyflashcards,
  allMyCards,
  nextMyFlashcard,
  nextFlashcard
}
