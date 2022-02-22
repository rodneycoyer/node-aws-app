import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import logo from "../logo.svg"


function SignIn() {

  return (
    <Container component="main" maxWidth="sm">
      <img src={logo} className="App-logo" alt="logo" />
      <Box
        component="form"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          '& > :not(style)': { m: 1.5, width: '25ch' },
        }}
      >
        <Typography variant="h4" mb={4}> Sign-in or Register </Typography>
        <TextField id="email" label="email" variant="filled" />
        <TextField id="password" label="password" variant="filled" />
        <Stack direction="row" spacing={1}>
          <Button color="error" variant="outlined" fullWidth> register </Button>
          <Button color="error" variant="outlined" fullWidth> sign in </Button>
        </Stack>
        <Divider>
          <Typography variant="h5">
            OAuth 2.0 with Google
          </Typography>
        </Divider>
        <Box>
          <Button size="large" variant="contained" color="warning" fullWidth> Login with Google </Button>
        </Box>
      </Box>

    </Container>
  );
};

export default SignIn;