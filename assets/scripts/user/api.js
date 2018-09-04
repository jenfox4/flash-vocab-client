// api interactions with authentication process
const config = require('../config.js')
const store = require('../store.js')

// creates new user in api
const flipFlashcard = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {

}
