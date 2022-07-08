export default function ToDoReducer(todos, action) {
  switch (action.type) {
    case "add":
      const newId = todos[todos.length - 1].id + 1;

      //   assume receive props action with name to assign new todo name
      const objNewTodo = {
        id: newId,
        name: action.name,
        isCompleted: false,
      };

      const newTodos = [...todos, objNewTodo];
      // there is no setState in reducer, return in reducer mean setState
      return newTodos;

    case "completed":
      const newTodo = todos.map((todo) => {
        // assume props action with id
        if (todo.id === action.id) {
          todo.isCompleted = true;
        }

        return todo;
      });

      return newTodo;
  }
}
