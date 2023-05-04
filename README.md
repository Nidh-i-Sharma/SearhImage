# SearhImage
 use this API, you will need the following:

Node.js (version 14 or later)
NPM (the Node.js package manager)
A Pixabay API key (sign up for a free account at https://pixabay.com/accounts/register/)


Installation
Clone this repository to your local machine.
Install dependencies using npm install.
Create a .env file in the root directory of the project, and add your Pixabay API key as follows: PIXABAY_API_KEY=your-api-key.
Start the server using npm start.
Usage
The API has two endpoints:

/search/:query: Returns a list of image hits for the given search query.
/search/category/:category: Returns a list of image hits for the given image category.
Both endpoints return a JSON response in the following format:

json
Copy code
{
  "totalHits": 100,
  "hits": [
    {
      "id": 123456,
      "previewURL": "https://...",
      "webformatURL": "https://...",
      "tags": "beach, ocean, sunset"
    },
    {
      "id": 654321,
      "previewURL": "https://...",
      "webformatURL": "https://...",
      "tags": "mountain, snow, sky"
    }
  ]
}
To use the API, send a GET request to one of the endpoints using a tool like cURL or Postman. For example:

bash
Copy code
curl http://localhost:3000/search/beach
bash
Copy code
curl http://localhost:3000/search/category/nature

