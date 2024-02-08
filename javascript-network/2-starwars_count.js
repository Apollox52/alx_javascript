const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18';

request(apiUrl, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        console.log('Error fetching movie data');
    } else {
        const films = JSON.parse(body).results;
        let movieCount = 0;

        films.forEach(movie => {
            if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
                movieCount++;
            }
        });

        console.log(movieCount);
    }
});
