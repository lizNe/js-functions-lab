fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    
    // Filter uncompleted todos
    const uncompleted = json.filter(todo => !todo.completed).map(todo => ({userId: todo.userId,title: todo.title,}));
    // Display the uncompleted array
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });
