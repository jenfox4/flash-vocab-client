#!/bin/bash

curl "http://flashvocab.herokuapp.com/myflashcards/" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
