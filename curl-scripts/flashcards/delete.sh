#!/bin/bash

curl "https://flashvocab.herokuapp.com/flashcards/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
