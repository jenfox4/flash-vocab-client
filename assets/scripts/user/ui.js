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
}

module.exports = {
  flipFlashcard,
  nextFlashcard

}
