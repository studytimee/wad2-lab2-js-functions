
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {
        const todosCompletedByUser = todos.reduce((acc, todo) => {
            todo.completed
                ? acc
                : acc.push({ userId: todo.userId, title: todo.title, completed: todo.completed});
            return acc;
        }, []);
        console.log(todosCompletedByUser)

    })
    .catch(function (err) {
        console.log(err);
    });
