import React from "react";
import axios from "axios";
import { Container } from "@mui/material";

function Users() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`/users`)
      .then((response) => {
        setData(response.data);
      })
  })

  return (
    <Container>
      <h1> Users Page </h1>
        <p> {!data ? "... is Loading" : data} </p>
    </Container>
  );
}

export default Users;