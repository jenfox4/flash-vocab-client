const store = require('./../store.js')
const config = require('./../config.js')

const flipFlashcard = function () {
  $('.front').toggle()
  $('.back').toggle()
}

module.exports = {
  flipFlashcard

}
