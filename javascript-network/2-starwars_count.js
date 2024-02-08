const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        console.log('Error fetching data from API');
    } else {
        // Parse the JSON response
        const films = JSON.parse(body);

        // Initialize a counter for movies where Wedge Antilles is present
        let count = 0;

        // Iterate through each film
        films.forEach(film => {
            // Check if Wedge Antilles is present in the characters array of the film
            if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
                count++;
            }
        });

        // Print the count of movies where Wedge Antilles is present
        console.log(count);
    }
});
