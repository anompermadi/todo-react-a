import React from "react";
import { Box, Typography } from "@mui/material";
import Section from "../components/NestedComponentSection";
import Heading from "../components/NestedComponentHeader";

const NestedComponent = () => {
  return (
    <Box>
      <Typography variant="h5">NestedComponent (Non-Context)</Typography>

      <Section>
        <Heading level={1}>Title</Heading>
        <Section>
          <Heading level={2}>Header 2</Heading>
          <Heading level={2}>Header 2</Heading>
          <Heading level={2}>Header 2</Heading>
          <Section>
            <Heading level={3}>Header 3</Heading>
            <Heading level={3}>Header 3</Heading>
            <Heading level={3}>Header 3</Heading>
          </Section>
        </Section>
      </Section>
    </Box>
  );
};

export default NestedComponent;
