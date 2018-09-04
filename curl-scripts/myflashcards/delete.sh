#!/bin/bash

curl "http://localhost:4741/myflashcards/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
