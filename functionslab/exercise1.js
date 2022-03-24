
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(todos => {
  //Filtering json data 
  const completed = todos.filter((todo) => todo.completed)
  //For loop
  completed.forEach( (todo, index) => {
    console.log(`${todo.title} - ${todo.completed}`)
  })
})
.catch(function(err) { 
  console.log(err);
});
