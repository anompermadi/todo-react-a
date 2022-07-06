import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const ToDoTable = ({ todos, completedTodos }) => {
  return (
    <Table sx={{ maxWidth: 700 }}>
      <TableHead>
        <TableRow>
          <TableCell>ToDo Id</TableCell>
          <TableCell>ToDo Name</TableCell>
          <TableCell>ToDo Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* loop props todos to print data */}
        {todos.map((todo) => {
          return (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.name}</TableCell>
              {/* isCompleted is boolean, to display it need to change into string using conditional/ternary*/}
              <TableCell>
                {todo.isCompleted ? "Selesai" : "Belum Selesai"}
              </TableCell>
              {/* if Belum Selesai then will avalaible button */}
              <TableCell>
                {todo.isCompleted ? (
                  ""
                ) : (
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      completedTodos(todo.id);
                    }}
                  >
                    Selesaikan
                  </Button>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ToDoTable;
