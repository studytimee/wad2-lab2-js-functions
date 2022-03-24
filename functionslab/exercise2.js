
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(todos => {
    
    //Use the same fetch statement as Exercise 1 to request a list (200) of todos.
    //In the body of the fetch, you are required to write the code that creates a new array (todoTitles) containing just the titles of all the todos and then displays the array.
})
.catch(function(err) { 
  console.log(err);
});
