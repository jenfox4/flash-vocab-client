const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')
const config = require('./../config.js')


const flipFlashcard = function (event) {
  event.preventDefault()
  ui.flipFlashcard()
}

const nextFlashcard = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.nextFlashcard(data)
    .then(ui.nextFlashcard)
    .catch(ui.fail)
}

module.exports = {
  flipFlashcard,
  nextFlashcard
}
