// Import the request module
const request = require('request');

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Construct the URL with the provided movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the provided URL
request(url, (error, response, body) => {
    // Parse the JSON response body
    const movie = JSON.parse(body);

    // Check if there was an error or the response status code is not 200
    if (error || response.statusCode !== 200) {
        console.log('Error fetching movie details');
    } else {
        // Print the title of the movie
        console.log(movie.title);
    }
});
