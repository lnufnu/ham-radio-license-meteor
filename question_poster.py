import json
import os
import requests


jsonfile = "questions.json"
json_filepath = jsonfile

endpoint = "http://127.0.0.1:3000/api/questions"

with open(json_filepath, "r") as f:
    raw_string = f.readline()
    questions = json.loads(raw_string)
    for i, question in enumerate(questions):
        response = requests.post(endpoint, json=question)
        print "{0}/{1} - {2}".format(i, len(questions), response.status_code)
