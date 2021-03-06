import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import logo from "../styles/logo.svg";
import axios from "axios";


// todo:
// handle OAuth
// handle forgot password

function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {`copyright`}{" "}
      <Link color="inherit" href="#" underline="none">
        © rodneycoyer.com {new Date().getFullYear()}
      </Link>
    </Typography>
  );
}

const SignIn = () => {

  const [formValue, setFormValue] = useState({
    password: "",
    username: "",
  });

  const handleFormChange = (event) => {
    event.preventDefault();
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  // login
  const handleLogin = (event) => {
    event.preventDefault();
    // store key pairs
    const loginFieldData = new FormData();
    loginFieldData.append("username", formValue.username)
    loginFieldData.append("password", formValue.password)
    // login payload
    const login = {
      username: formValue.username,
      password: formValue.password,
    }
    // POST method --> passport local strategy
    axios({
      method: "POST",
      data: login,
      url: `/users/login`
    })
    .then(response => {
      console.log(response.data);
      alert(response.data.status);
      window.location.href = "/posts";
    })
    .catch(err => console.log(err));
  }

  return (
    <Container component="main" maxWidth="md" align="center">
      <img src={logo} className="App-logo" alt="logo" width={500} />
        <Box
          component="form"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            '& > :not(style)': { m: 1.5, width: '50ch' },
          }}
        >
          <Typography component="h1" variant="h4" mb={4}> Sign-in or Register </Typography>
          <TextField
            id="username"
            name="username"
            label="username"
            variant="outlined"
            autoFocus
            required
            value={formValue.username}
            onChange={handleFormChange}
          />
          <TextField
            id="password"
            name="password"
            label="password"
            variant="outlined"
            type="password"
            required
            value={formValue.password}
            onChange={handleFormChange}
          />
          <Stack spacing={3}>
              <Button
                color="info"
                variant="contained"
                fullWidth
                size="large"
                type="submit"
                onClick={handleLogin}
                sx={{ pb: 2, pt: 2, borderRadius: "25px"}}
              >
                sign in
              </Button>
              <Button
                size="large"
                variant="contained"
                color="warning"
                fullWidth
                sx={{ pb: 2, pt: 2, borderRadius: "25px"}}
              >
                sign in with google
              </Button>
              <Button
                color="success"
                variant="contained"
                fullWidth
                size="large"
                href={"/register"}
                sx={{ pb: 2, pt: 2, borderRadius: "25px"}}
              >
                register here
              </Button>
            </Stack>
            <Box sx={{ pt: 8 }}>
              <Link href="#" variant="body2" underline="none">
                Forgot password?
              </Link>
            </Box>
          </Box>
      <Copyright sx={{ mt: 6, mb: 8 }}/>
    </Container>
  );
};

export default SignIn;