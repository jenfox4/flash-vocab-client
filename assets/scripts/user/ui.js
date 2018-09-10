const store = require('./../store.js')
const config = require('./../config.js')

// crud actions for all flashcards

const flipFlashcard = function () {
  if ($('.flashcard').attr('class') === 'flashcard') {
    $('.flashcard').addClass('flip')
  } else {
    $('.flashcard').removeClass('flip')
  }
}

// show the next flashcard in deck when arrow button is pressed
const nextFlashcard = function (response) {
  $('.fail-message').removeClass('fail')
  $('.fail-message').empty()
  store.flashcard = response
  $('.flashcard-container').show()
  $('.flashcard').removeClass('flip')
  $('.glyphicon-arrow-right').show()
  let word = null
  let definition = null
  let sentence = null
  if (store.stackMode === 'gre') {
    word = response.flashcard.word
    definition = response.flashcard.definition
    $('.sentence').hide()
    $('.to-stack').show()
    $('.remove-stack').hide()
  } else {
    word = response.myflashcard.flashcard.word
    definition = response.myflashcard.flashcard.definition
    sentence = response.myflashcard.sentence
    $('.to-stack').hide()
    $('.sentence').show()
    $('.remove-stack').show()
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

const failNextFlashcard = function () {
  $('.fail-message').addClass('fail')
  $('.fail-message').text('We are having trouble finding the next card. Try again in a moment')
}

// save card to personal flashcard deck
const saveToMyflashcards = function () {
  $('.fail-message').removeClass('fail')
  $('.fail-message').empty()
  $('.to-stack').hide()
}

const failSaveToMyFlashcards = function () {
  $('.fail-message').addClass('fail')
  $('.fail-message').text("There's a problem saving your card to the stack. Try again!")
}

// switch to my personal flashcard deck
const allMyCards = function (response) {
  $('.flashcard').removeClass('flip')
  $('.sentence').hide()
  $('.fail-message').removeClass('fail')
  $('.fail-message').empty()
  $('.card-stack').text('Your Personal Flashcard Stack')
  if (response.myflashcards.length === 0) {
    noCards()
  } else {
    for (let i = 0; i < response.myflashcards.length; i++) {
      store.arrayOfMyFlashcards.push(response.myflashcards[i].id)
    }
    store.stackMode = 'mycards'
    $('.sentence').show()
    $('.to-stack').hide()
    $('.remove-stack').show()
    $('.word').text('Welcome to your flashcard stack!')
    $('.definition').text('Click the arrow to go through your stack')
    $('.no-sentence').hide()
    $('.glyphicon-pencil').hide()
  }
}

const failShowAllMyCards = function () {
  $('.fail-message').addClass('fail')
  $('.fail-message').text('Uh oh! We lost your flashcards...maybe we will find them later....')
}

// show all GRE cards
const allGreCards = function () {
  $('.fail-message').removeClass('fail')
  $('.fail-message').empty()
  $('.card-stack').text('GRE Flashcard Stack')
  $('.sentence').toggle()
  $('.to-stack').show()
  $('.remove-stack').hide()
}

// delete a flashcard from my flashcards
const deleteSuccess = function (response) {
  $('.fail-message').removeClass('fail')
  $('.fail-message').empty()
  $('.remove-stack').hide()
  $('#delete').modal('toggle')
  $('.sentence').hide()
  const index = store.arrayOfMyFlashcards.indexOf(store.flashcard.myflashcard.id)
  store.arrayOfMyFlashcards.splice(index, 1)
  if (store.arrayOfMyFlashcards.length === 0) {
    noCards()
  }
}

const failDeleteFlashcard = function () {
  $('.fail-message').addClass('fail')
  $('.fail-message').text("We can't remove it from the deck at the moment. Are you sure you want to delete it anyway?")
}

const noCards = function () {
  $('.flashcard-container').hide()
  $('.card-stack').append("</br> </br> You haven't added any cards to your stack. Go back to the GRE stack and add some cards to study.")
  $('.to-stack').hide()
  $('.remove-stack').hide()
  $('.glyphicon-arrow-right').hide()
}

const addSentence = function (response) {
  $('.message').removeClass('fail')
  $('.message').empty()
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
  failNextFlashcard,
  saveToMyflashcards,
  failSaveToMyFlashcards,
  failShowAllMyCards,
  allMyCards,
  allGreCards,
  deleteSuccess,
  failDeleteFlashcard,
  addSentence,
  fail,
  noCards
}
