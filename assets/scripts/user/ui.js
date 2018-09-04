const store = require('./../store.js')
const config = require('./../config.js')

const flipFlashcard = function () {
  $('.front').toggle()
  $('.back').toggle()
}

const nextFlashcard = function (response) {
  $('.front').show()
  $('.back').hide()
  const word = response.flashcard.word
  const definition = response.flashcard.definition
  $('.word').text(word)
  $('.definition').text(definition)
  console.log(response)
}

const saveToMyflashcards = function () {
  $('.to-stack').text('remove from my stack')
  $('.sentence').toggle()
}

const allMyCards = function (response) {
  $('.card-stack').text('Your Personal Flashcard Stack')
  $('.sentence').show()
  for (let i = 0; i < response.myflashcards.length; i++) {
    store.arrayOfMyFlashcards.push(response.myflashcards[i].id)
  }
  store.stackMode = 'mycards'
  $('.to-stack').text('remove from my stack')
}

const nextMyFlashcard = function (response) {
  $('.front').show()
  $('.back').hide()
  const word = response.myflashcard.flashcard.word
  const definition = response.myflashcard.flashcard.definition
  $('.word').text(word)
  $('.definition').text(definition)
}

module.exports = {
  flipFlashcard,
  nextFlashcard,
  saveToMyflashcards,
  allMyCards,
  nextMyFlashcard

}
