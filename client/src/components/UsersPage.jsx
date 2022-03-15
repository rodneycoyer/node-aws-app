import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`/users`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => alert(err));
  }, []);

  const listUsers = [users].map(user => {
    if (loading === true) {
      return <div> loading items </div>
    }
    return (
      <Grid item key={user._id}>
        <Card data={user}>
          {user}
        </Card>
      </Grid>
    );
  });

  return (
    <Container>
      <h1> Users Page </h1>
        {listUsers}
    </Container>
  );
}

export default Users;