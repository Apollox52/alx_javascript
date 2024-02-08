const request = require('request');

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Construct the URL with the provided movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the provided URL
request(url, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        console.log('Error fetching movie data');
    } else {
        // Parse the JSON response body
        const movie = JSON.parse(body);

        // Print each character name
        movie.characters.forEach(characterUrl => {
            request(characterUrl, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    const character = JSON.parse(body);
                    console.log(character.name);
                } else {
                    console.log('Error fetching character data');
                }
            });
        });
    }
});
