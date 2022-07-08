import React, { useContext } from "react";
import { Box } from "@mui/material";

import { LevelContext } from "../contexts/LevelContext";

const NestedComponentSection = (props) => {
  const level = useContext(LevelContext);
  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderRadius: "10px",
      }}
    >
      <LevelContext.Provider value={level + 1}>
        {props.children}
      </LevelContext.Provider>
    </Box>
  );
};

export default NestedComponentSection;
