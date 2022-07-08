//containers
//pages
//views
//routes

import React, { useEffect, useState, useReducer } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";
import { Typography } from "@mui/material";

import ToDoReducer from "../reducers/ToDoReducer";

const initialTodos = [
  { id: 1, name: "Review DOM", isCompleted: true },
  { id: 2, name: "Belajar nge-React", isCompleted: false },
  { id: 3, name: "Belajar Component React", isCompleted: false },
];

const ToDo = () => {
  const [todos, dispatch] = useReducer(ToDoReducer, initialTodos);

  // const [todos, setTodos] = useState([
  //   { id: 1, name: "Review DOM", isCompleted: true },
  //   { id: 2, name: "Belajar nge-React", isCompleted: false },
  //   { id: 3, name: "Belajar Component React", isCompleted: false },
  // ]);

  // function to add todos
  const addTodos = (newTodoName) => {
    //   const newId = todos[todos.length - 1].id + 1;

    //   const objNewTodo = {
    //     id: newId,
    //     name: newTodoName,
    //     isCompleted: false,
    //   };

    //   const newTodos = [...todos, objNewTodo];

    //   setTodos(newTodos);
    dispatch({
      type: "add",
      name: newTodoName,
    });
  };

  const completedTodos = (idTodo) => {
    //   const newTodo = todos.map((todo) => {
    //     if (todo.id === idTodo) {
    //       todo.isCompleted = true;
    //     }

    //     return todo;
    //   });

    //   setTodos(newTodo);
    dispatch({
      type: "completed",
      id: idTodo,
    });
  };

  //useEffect to manipulate DOM directly
  useEffect(
    () => {
      // update DOM
      let titleTulisan = `Todos ${todos.length}`;
      console.log(titleTulisan);
      // manual update
      document.title = titleTulisan;
    },
    // add dependency from list
    [todos]
  );

  return (
    <>
      <Typography variant="h5" component="div">
        Aplikasi ToDo
      </Typography>
      <ToDoForm addTodos={addTodos} />
      {/* send todos to table */}
      <ToDoTable todos={todos} completedTodos={completedTodos} />
    </>
  );
};

export default ToDo;
