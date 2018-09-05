const store = require('./../store.js')
const config = require('./../config.js')

// crud actions for all flashcards

const flipFlashcard = function () {
  $('.front').toggle()
  $('.back').toggle()
}

const nextFlashcard = function (response) {
  store.flashcard = response
  $('.front').show()
  $('.back').hide()
  let word = null
  let definition = null
  let sentence = null
  if (store.stackMode === 'gre') {
    word = response.flashcard.word
    definition = response.flashcard.definition
    $('.sentence').hide()
  } else {
    word = response.myflashcard.flashcard.word
    definition = response.myflashcard.flashcard.definition
    sentence = response.myflashcard.sentence
    if (sentence === '') {
      $('.no-sentence').show()
      $('.my-sentence').hide()
      $('.glyphicon-pencil').hide()
    } else {
      $('.my-sentence').text(sentence)
      $('.my-sentence').show()
      $('.glyphicon-pencil').show()
      $('.no-sentence').hide()
    }
  }
  $('.word').text(word)
  $('.definition').text(definition)
}

// crud actions for my flashcards

const saveToMyflashcards = function () {
  $('.to-stack').hide()
  $('.remove-stack').show()
  $('.sentence').toggle()
}

const allMyCards = function (response) {
  $('.card-stack').text('Your Personal Flashcard Stack')
  $('.sentence').show()
  for (let i = 0; i < response.myflashcards.length; i++) {
    store.arrayOfMyFlashcards.push(response.myflashcards[i].id)
  }
  store.stackMode = 'mycards'
  $('.to-stack').hide()
  $('.remove-stack').show()
}

const allGreCards = function () {
  $('.card-stack').text('GRE Flashcard Stack')
  $('.sentence').toggle()
  $('.to-stack').show()
  $('.remove-stack').hide()
}

const deleteSuccess = function (response) {
  $('#delete').modal('toggle')
}

const addSentence = function (response) {
  $('.my-sentence').text($('textarea').val())
  $('.my-sentence').show()
  $('.glyphicon-pencil').show()
  $('.no-sentence').hide()
  $('textarea').val('')
}

const fail = function () {
  $('.message').addClass('fail')
  $('.fail').html("<h4 style='color:red'> hmm...something didn't go right. Try that again.")
}

module.exports = {
  flipFlashcard,
  nextFlashcard,
  saveToMyflashcards,
  allMyCards,
  allGreCards,
  deleteSuccess,
  addSentence,
  fail
}
