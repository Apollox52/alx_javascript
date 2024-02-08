const request = require('request');

// Define the URLs of the local servers
const urls = [
    'http://localhost:5050/route_0',
    'http://localhost:5050/route_10'
];

// Function to fetch content from a given URL
function fetchContent(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject(`Error fetching content from ${url}`);
            } else {
                resolve(body);
            }
        });
    });
}

// Function to determine the correct output based on the content size
function determineOutput(content) {
    if (!content) {
        return 'empty text';
    } else if (content.length <= 20) {
        return 'small text';
    } else {
        return 'big text';
    }
}

// Function to process each URL
async function processURL(url) {
    try {
        const content = await fetchContent(url);
        const output = determineOutput(content);
        console.log(`Correct output - ${output} - ${url}`);
    } catch (error) {
        console.log(error);
    }
}

// Process each URL
urls.forEach(processURL);
