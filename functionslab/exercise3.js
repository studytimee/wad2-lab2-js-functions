
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {

        const uncompleteTodo = todos.filter(todo => !todo.completed).map(todo => ({
            userID: todo.userId, title: todo.title, Completed: todo.completed
        }))
        console.log(uncompleteTodo);

    })
    .catch(function (err) {
        console.log(err);
    });
