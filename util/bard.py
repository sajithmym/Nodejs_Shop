import requests

# The URL of the Bard AOI API
API_URL = "https://bard.googleapis.com/v1/generate"

# The prompt that you want the Bard API to generate text from
prompt = "What is the capital of France?"

# The maximum length of the generated text
max_length = 100

# The temperature controls the creativity of the generated text
temperature = 0.7

# The top_p controls the diversity of the generated text
top_p = 0.9

# The headers for the request
headers = {
  "Authorization": "Bearer YOUR_API_KEY",
}

# The request body
body = {
  "prompt": prompt,
  "max_length": max_length,
  "temperature": temperature,
  "top_p": top_p
}

# Make the request
response = requests.post(API_URL, headers=headers, data=body)

# Check the response status code
if response.status_code == 200:
  # The request was successful
  response_json = response.json()
  generated_text = response_json["generated_text"]
  print(generated_text)
else:
  # The request failed
  print("Request failed with status code:", response.status_code)
