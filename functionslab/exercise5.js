
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {

        // const uncompleteTodo = todos.filter(todo => !todo.completed).map(todo => ({
        //     userID: todo.userId, title: todo.title, Completed: todo.completed
        // }))
        // console.log(uncompleteTodo);

        //         In the fetch body, you are required to implement the exact requirement as Exercise 3 BUT replace the map-filter combination with the reduce HOF.

        // Hint: The initial value for the reducer's accumulator will be an empty array ( [] ).

    })
    .catch(function (err) {
        console.log(err);
    });
