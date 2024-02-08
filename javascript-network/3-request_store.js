const request = require('request');
const fs = require('fs');

// Get the URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the URL
request.get({ url: url, encoding: 'utf-8' }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        console.log('Error fetching webpage content');
    } else {
        // Write the body response to the file
        fs.writeFile(filePath, body, 'utf-8', (err) => {
            if (err) {
                console.log('Error writing to file');
            } else {
                console.log(`Content successfully saved to ${filePath}`);
            }
        });
    }
});
