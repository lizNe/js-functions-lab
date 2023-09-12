fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

    // Use Array.reduce to count completed todos
    const completedCount = json.reduce((count, todo) => {
        if (todo.completed === true) {
          return count + 1;
        }
        return count;
      }, 0);


      console.log(`Number of completed todos: ${completedCount}`);

     const completed = json.filter(todo => todo.completed === true); // Filter completed todos
     completed.forEach((todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });

