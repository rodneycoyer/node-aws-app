import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import logo from "../styles/logo.svg";


// todo:
// react form validation - email/password
// handle sign-in
// handle registration
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
            id="email"
            name="email"
            label="email"
            variant="filled"
            autoFocus
            required
          />
          <TextField
            id="password"
            name="password"
            label="password"
            variant="filled"
            type="password"
            required
          />
          <Stack direction="row" spacing={1}>
            <Button
              color="error"
              variant="outlined"
              fullWidth
            >
              register
            </Button>
            <Button
              color="error"
              variant="outlined"
              fullWidth
              type="submit"
            >
              sign in
            </Button>
          </Stack>
          <Divider>
            <Typography variant="h5">
              OAuth 2.0 with Google
            </Typography>
          </Divider>
          <Box>
            <Button
              size="large"
              variant="contained"
              color="warning"
              fullWidth
            >
              Login with Google
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" underline="none">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          </Box>
      <Copyright sx={{ mt: 6, mb: 8 }}/>
    </Container>
  );
};

export default SignIn;