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
// return success or error messages
// redirect to sign-in

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

/**
 * export registration form
 */

function Register() {

  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
  });

  // store textField value
  const handleFormChange = (event) => {
    event.preventDefault();
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  // register new user
  const handleRegister = (event) => {
    event.preventDefault();
    // store key pairs
    const loginFieldData = new FormData();
    loginFieldData.append("firstname", formValue.firstname);
    loginFieldData.append("lastname", formValue.lastname);
    loginFieldData.append("email", formValue.email);
    loginFieldData.append("username", formValue.username);
    loginFieldData.append("password", formValue.password);

    // registration payload
    const userToRegister = {
      firstname: formValue.firstname,
      lastname: formValue.lastname,
      email: formValue.email,
      username: formValue.username,
      password: formValue.password
    }
    // POST method to server
    axios({
      method: "POST",
      data: userToRegister,
      url: `/users/signup`,
    })
    .then(response => {
      alert(response.data.status);
      window.location.href = "/login"
    })
    .catch(err => alert(err));
  }

  return (
    <Container component="main" maxWidth="md" align="center">
      <img src={logo} className="App-logo" alt="logo" width={350} />
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
        <Typography component="h1" variant="h4" mb={4}> New User Sign-up </Typography>
          <TextField
            id="firstname"
            name="firstname"
            label="firstname"
            variant="outlined"
            autoFocus
            required
            value={formValue.firstname}
            onChange={handleFormChange}
          />
          <TextField
            id="lastname"
            name="lastname"
            label="lastname"
            variant="outlined"
            required
            value={formValue.lastname}
            onChange={handleFormChange}
          />
          <TextField
            id="email"
            name="email"
            label="email"
            variant="outlined"
            required
            value={formValue.email}
            onChange={handleFormChange}
          />
          <TextField
            id="username"
            name="username"
            label="username"
            variant="outlined"
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
          <Stack direction="row" spacing={1}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              size="large"
              type="submit"
              sx={{ pt: 2, pb: 2, borderRadius: "25px"}}
              onClick={handleRegister}
            >
              <Typography> register </Typography>
            </Button>
          </Stack>
        </Box>
      <Copyright sx={{ mt: 6, mb: 8 }}/>
    </Container>
  );
};

export default Register;