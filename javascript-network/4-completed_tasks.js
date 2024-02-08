const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        console.log('Error fetching data from API');
    } else {
        // Parse the JSON response body
        const todos = JSON.parse(body);

        // Initialize an object to store the count of completed tasks for each user
        const completedTasksByUser = {};

        // Loop through each todo
        todos.forEach(todo => {
            // Check if the todo is completed
            if (todo.completed) {
                // Increment the count of completed tasks for the user
                if (completedTasksByUser[todo.userId]) {
                    completedTasksByUser[todo.userId]++;
                } else {
                    completedTasksByUser[todo.userId] = 1;
                }
            }
        });

        // Print the count of completed tasks for each user
        console.log(completedTasksByUser);
    }
});
