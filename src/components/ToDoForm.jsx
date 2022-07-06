import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const ToDoForm = ({ addTodos }) => {
  // local state
  const [inputData, setInputData] = useState("");

  // function to change input
  const inputOnchangeHandler = (event) => {
    setInputData(event.target.value);
  };

  // function to form submit
  const formSubmitHandler = (event) => {
    // to prevent refresh or browser load
    event.preventDefault();
    addTodos(inputData);
    setInputData("");
  };

  return (
    <form style={{ margin: "0.5em 0em" }} onSubmit={formSubmitHandler}>
      <TextField
        type="text"
        name="todo-baru"
        id="todoBaru"
        style={{ marginRight: "0.5em" }}
        label="input kerjaan baru"
        value={inputData}
        onChange={inputOnchangeHandler}
        size="small"
        variant="filled"
      />
      <Button type="submit" variant="contained" size="large">
        Tambah kerjaan
      </Button>
    </form>
  );
};

export default ToDoForm;
