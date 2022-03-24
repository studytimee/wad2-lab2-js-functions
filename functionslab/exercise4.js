
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {
        const totalCompleted = todos.reduce((count, todo) => (todo.completed? count + 1 : count),0
        )
        console.log(totalCompleted);

    })
    .catch(function (err) {
        console.log(err);
    });
