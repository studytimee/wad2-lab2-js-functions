
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {

        //The Array HOFs can be combined, for example, map over the array produced from the filter function:

        // const finalResult = sourceArray.filter(……).map(…….)

        // The input array for the map is the output array produced by the filter.

        // Create a new file in functionslab, called exercise3.js. Use the same fetch statement as Exercise 1 to request a list of todos.

        // In the body of the fetch, you are required to write the code that creates an array of uncompleted todo objects, where an object contains a userID and todo title. It then displays the array:

        

    })


    .catch(function (err) {
        console.log(err);
    });
