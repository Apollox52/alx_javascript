// Import the request module
const request = require('request');

// Get the URL from the command line argument
const url = process.argv[2];

// Make a GET request to the provided URL
request(url, (error, response, body) => {
    // Check if there was an error or the status code is not 200
    if (error || response.statusCode !== 200) {
        // Print the error or the status code
        console.log(`code: ${response ? response.statusCode : 'Error'}`);
    } else {
        // Print the status code
        console.log(`code: ${response.statusCode}`);
    }
});
