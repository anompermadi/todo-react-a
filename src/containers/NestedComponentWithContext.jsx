import React from "react";
import { Box, Typography } from "@mui/material";
import Section from "../components/NestedComponentSection";
import Heading from "../components/NestedComponentHeader";

const NestedComponentWithContext = () => {
  return (
    <Box>
      <Typography variant="h5">NestedComponent (Non-Context)</Typography>

      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Header 2</Heading>
          <Heading>Header 2</Heading>
          <Heading>Header 2</Heading>
          <Section level={3}>
            <Heading>Header 3</Heading>
            <Heading>Header 3</Heading>
            <Heading>Header 3</Heading>
          </Section>
        </Section>
      </Section>
    </Box>
  );
};

export default NestedComponentWithContext;
