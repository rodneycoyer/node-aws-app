import React from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "./NavBar/NavBarComponent";
import StartPost from "./PostComponent";
import Sidebar from "./SidebarComponent";

// render cards
// list cards
// create ListingID page

function FeedPage() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`/listings`)
      .then((response) => {
        setData(response.data)
      })
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={1} mt={2}>
          <Grid item sm={4}>
            <Sidebar />
          </Grid>
          <Grid item sm={8}>
              <h1> Main Feed Page </h1>
              <p> {!data ? "... is Loading" : data} </p> <br />
            <StartPost />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default FeedPage;