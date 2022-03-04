import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

function PostList() {
  return (
    <Container>
      <Grid container>
        <CreateNewPost />
        { postListDirectory }
      </Grid>
    </Container>
  );
}

export default PostList;