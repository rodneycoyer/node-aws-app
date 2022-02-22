import React from "react";
import axios from "axios";

// render cards
// create ListingID page

function Listings() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`/listings`)
      .then((response) => {
        setData(response.data)
      })
  }, []);

  return (
    <div>
      <h1> Listings Page </h1>
      <p> {!data ? "... is Loading" : data} </p>
    </div>
  );
}

export default Listings;