// Import the request module
const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Define the character ID for Wedge Antilles
const characterId = '18';

// Make a GET request to the provided API URL
request(apiUrl, (error, response, body) => {
    // Parse the JSON response body
    const films = JSON.parse(body).results;

    // Initialize a counter for the number of movies with Wedge Antilles
    let movieCount = 0;

    // Loop through each movie in the results
    films.forEach(movie => {
        // Check if the characters array includes Wedge Antilles
        if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
            // Increment the movie count if Wedge Antilles is present
            movieCount++;
        }
    });

    // Print the number of movies with Wedge Antilles
    console.log(movieCount);
});
