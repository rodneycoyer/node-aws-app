import React from "react";
import axios from "axios";
import { Container } from "@mui/material";
import NavBar from "./NavBar/NavBarComponent";
import StartPost from "./PostComponent";

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
      <Container>
        <h1> Listings Page </h1>
        <p> {!data ? "... is Loading" : data} </p>

        <StartPost />
      </Container>
    </React.Fragment>
  );
}

export default FeedPage;