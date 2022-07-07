import React from "react";
import { Box } from "@mui/material";

const NestedComponentSection = (props) => {
  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderRadius: "10px",
      }}
    >
      {props.children}
    </Box>
  );
};

export default NestedComponentSection;
