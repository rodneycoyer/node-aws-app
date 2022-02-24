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
import { useFormik } from "formik";
import * as yup from "yup";
import logo from "../styles/logo.svg";
import NavBar from "./NavBar/NavBarComponent";


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

  const validationSchema = yup.object({
    email: yup
      .string("Enter a valid email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const submitHandler = async value => {
    console.log(value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: submitHandler,
  });

  return (
    <React.Fragment>
      <NavBar />
    <Container component="main" maxWidth="sm">
      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={formik.handleSubmit}>
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
          <Typography component="h1" variant="h4" mb={4}> Sign-in or Register </Typography>
          <TextField
            id="email"
            name="email"
            label="email"
            variant="filled"
            autoFocus
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="password"
            variant="filled"
            type="password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
            <pre>
              {JSON.stringify(formik.values, null, 2)}
            </pre>
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
        </form>
      <Copyright sx={{ mt: 6, mb: 8 }}/>
      </Container>
      </React.Fragment>
  );
};

export default SignIn;