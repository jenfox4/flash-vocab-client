#!/bin/bash

curl "http://localhost:4741/myflashcards/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "myflashcard": {
      "user_id": "'"${USER}"'",
      "flashcard_id": "'"${VOCAB}"'",
      "sentence": "'"${SEN}"'"
    }
  }'
