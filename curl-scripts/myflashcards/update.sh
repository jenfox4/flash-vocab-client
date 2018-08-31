#!/bin/bash

curl "http://flashvocab.herokuapp.com/myflashcards/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "myflashcard": {
      "sentence": "'"${SEN}"'"
    }
  }'
