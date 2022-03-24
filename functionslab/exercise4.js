
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {

        // Use the same fetch statement as Exercise 1 to request a list (200) of todos.

        // In the body of the fetch, you are required to write the code that computes (and displays) the number of completed todos. Use the Array.reduce HOF in your solution.

    })
    .catch(function (err) {
        console.log(err);
    });
