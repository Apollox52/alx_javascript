const request = require('request');
const fs = require('fs');

// Define the URL for the API
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        console.log('Error fetching data from API');
    } else {
        // Parse the JSON response
        const todos = JSON.parse(body);

        // Initialize objects to store completed tasks for each user
        const completedTasksByUser = {};

        // Iterate over each todo item
        todos.forEach(todo => {
            // Check if the task is completed
            if (todo.completed) {
                // Increment the count of completed tasks for the user
                if (completedTasksByUser[todo.userId]) {
                    completedTasksByUser[todo.userId]++;
                } else {
                    completedTasksByUser[todo.userId] = 1;
                }
            }
        });

        // Print the number of completed tasks for each user
        console.log(completedTasksByUser);
    }
});
