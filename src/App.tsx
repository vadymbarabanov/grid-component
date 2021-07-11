import React from "react";
import Box from "./components/Box/Box";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <div>
      <Grid container gap="lg">
        <Grid item cols={3}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item>
          <Box>Box 2</Box>
        </Grid>

        <Grid item>
          <Box>Box 3</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
