import React from "react";
import axios from "axios";

function Users() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`/users`)
      .then((response) => {
        setData(response.data);
      })
  })

  return (
    <div>
      <h1> Users Page </h1>
      <p> {!data ? "... is Loading" : data} </p>
    </div>
  );
}

export default Users;