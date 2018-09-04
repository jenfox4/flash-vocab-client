const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const config = require('./../config.js')


const flipCard = function (event) {
  event.preventDefault()
  ui.flipFlashcard()
}

module.exports = {
  flipCard
}
