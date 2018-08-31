#!/bin/bash

curl "https://flashvocab.herokuapp.com/lashcards/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
