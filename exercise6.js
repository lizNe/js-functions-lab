fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    // Use Array.reduce to compute the number of completed todos per user
    const completedTodosByUser = json.reduce((accumulator, todo) => {
      if (todo.completed) {
        if (!accumulator[todo.userId]) {
          accumulator[todo.userId] = 0;
        }
        accumulator[todo.userId]++;
      }
      return accumulator;
    }, {});

    // Display the result with user IDs as keys
    console.log("Completed Todos Per User:");
    console.log(completedTodosByUser);
  })
  .catch(function(err) { 
    console.log(err);
  });
