// api interactions with authentication process
const config = require('../config.js')
const store = require('../store.js')

const nextFlashcard = function (data) {
  return $.ajax({
    url: config.apiUrl + '/flashcards/' + (Math.floor((Math.random() * 2326) + 1)),
    method: 'GET',
    data
  })
}

module.exports = {
  nextFlashcard
}
