const fetch = require('node-fetch');

const apiURL = process.argv[2];

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const films = data.results;
        const count = films.filter(film => film.characters.includes("https://swapi-api.alx-tools.com/api/people/18/")).length;
        console.log(count);
    })
    .catch(error => console.error('Error:', error));

