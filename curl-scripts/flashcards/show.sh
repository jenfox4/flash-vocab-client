#!/bin/bash

curl "https://flashvocab.herokuapp.com/flashcards/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
