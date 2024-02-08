const request = require('request');

const apiURL = process.argv[2];

request(apiURL, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    
    const data = JSON.parse(body);
    const films = data.results;
    const count = films.filter(film => film.characters.includes("https://swapi-api.alx-tools.com/api/people/18/")).length;
    console.log(count);
});
