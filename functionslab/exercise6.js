
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {

        // In the body of the fetch, you are required to write the code that computes the number of completed todos per user. A user with no completed todos should not appear in the output. Use the Array.reduce HOF in your solution.
    })
    .catch(function (err) {
        console.log(err);
    });
