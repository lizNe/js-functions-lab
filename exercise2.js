fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter(todo => todo.completed === true); // Filter completed todos
     const todoTitles = completed.map(todo => todo.title)
     completed.forEach((todo, index) => {
      console.log(todoTitles)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });

