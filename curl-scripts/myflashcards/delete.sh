#!/bin/bash

curl "http://flashvocab.herokuapp.com/myflashcards/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
