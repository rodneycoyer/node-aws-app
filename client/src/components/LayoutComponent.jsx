import React, { Children } from "react";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import NavBar from "./NavBarComponent";

// footer
const Copyright = (props) => {
  return (
    <Stack spacing={1} sx={{ mt: 8, mb: 4, alignItems: "center" }}>
      <Typography variant="body2" align="center">
        Built with: React, Node/Express, MongoDB <br />
        AWS Services: CloudFront, Beanstalk, EC2, S3 <br />
        CI/CD: Github, Docker
      </Typography>
      <Typography variant="button">
        {`copyright`}{" "}
        <Link color="inherit" href="#" underline="none">
          © rodneycoyer.com {new Date().getFullYear()}
        </Link>
      </Typography>
    </Stack>
  );
}

export default function Layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
      <Copyright />
    </React.Fragment>
  );
}