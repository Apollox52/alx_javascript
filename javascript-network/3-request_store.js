const request = require('request');
const fs = require('fs');

// Define the URLs
const urls = [
    "http://localhost:5050/route_0",
    "http://localhost:5050/route_1",
    "http://localhost:5050/route_2"
];

// Function to handle the request for each URL
function fetchContent(url, callback) {
    request(url, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            callback(null);
        } else {
            callback(body.trim());
        }
    });
}

// Function to determine the correct output based on the content
function determineOutput(content) {
    if (!content) {
        return "empty text";
    } else if (content.length <= 20) {
        return "small text";
    } else {
        return "big text";
    }
}

// Function to process each URL
function processURL(url) {
    fetchContent(url, (content) => {
        const output = determineOutput(content);
        console.log(`Correct output - ${output} - ${url}`);
    });
}

// Process each URL
urls.forEach(processURL);
