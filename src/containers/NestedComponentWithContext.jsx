import React from "react";
import { Box, Typography } from "@mui/material";
import Section from "../components/NestedComponentSection";
import Heading from "../components/NestedComponentHeader";

const NestedComponentWithContext = () => {
  return (
    <Box>
      <Typography variant="h5">NestedComponent (Non-Context)</Typography>

      {/* useContext => level 1 */}
      <Section>
        <Heading>Title</Heading>
        {/* useContext => level 1 + 1 */}
        <Section>
          <Heading>Header 2</Heading>
          <Heading>Header 2</Heading>
          <Heading>Header 2</Heading>
          {/* useContext => level 2 + 1 */}
          <Section>
            <Heading>Header 3</Heading>
            <Heading>Header 3</Heading>
            <Heading>Header 3</Heading>
            <Section>
              <Heading>Header 4</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </Box>
  );
};

export default NestedComponentWithContext;
