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

const nextFlashcard = function (response) {
  $('.message').removeClass('fail')
  $('.message').empty()
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

// crud actions for my flashcards

const saveToMyflashcards = function () {
  $('.message').removeClass('fail')
  $('.message').empty()
  $('.to-stack').hide()
}

const allMyCards = function (response) {
  $('.message').removeClass('fail')
  $('.message').empty()
  $('.card-stack').text('Your Personal Flashcard Stack')
  console.log(response.myflashcards)
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
  }
}

const allGreCards = function () {
  $('.message').removeClass('fail')
  $('.message').empty()
  $('.card-stack').text('GRE Flashcard Stack')
  $('.sentence').toggle()
  $('.to-stack').show()
  $('.remove-stack').hide()
}

const deleteSuccess = function (response) {
  $('.message').removeClass('fail')
  $('.message').empty()
  $('#delete').modal('toggle')
  const index = store.arrayOfMyFlashcards.indexOf(store.flashcard.myflashcard.id)
  store.arrayOfMyFlashcards.splice(index, 1)
  if (store.arrayOfMyFlashcards.length === 0) {
    noCards()
  }
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
  saveToMyflashcards,
  allMyCards,
  allGreCards,
  deleteSuccess,
  addSentence,
  fail,
  noCards
}
