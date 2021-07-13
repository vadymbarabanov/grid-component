import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Grid from "./Grid";
import Box from "../Box/Box";
import GridRuler from "../GridRuler/GridRuler";

export default {
  title: "Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Basic: ComponentStory<typeof Grid> = () => {
  return (
    <div style={{ position: "relative" }}>
      <Grid container gap="sm" style={{ height: "100%" }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export const WithRuler: ComponentStory<typeof Grid> = () => {
  return (
    <div style={{ position: "relative" }}>
      <GridRuler gap={"sm"} />
      <Grid container gap={"sm"} style={{ height: "100%" }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export const Interavite: ComponentStory<typeof Grid> = ({
  gap,
  xs,
  sm,
  md,
  lg,
  ...args
}) => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <GridRuler gap={gap} />
      <Grid container gap={gap} style={{ height: "100%" }} {...args}>
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};
