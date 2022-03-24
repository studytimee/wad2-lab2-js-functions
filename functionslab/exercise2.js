
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {
        const todoTitles = todos.map(todo => todo.title)
        console.log(todoTitles)
    })


    .catch(function (err) {
        console.log(err);
    });
