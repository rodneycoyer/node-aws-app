import React, { Children } from "react";
import NavBar from "./NavBar/NavBarComponent";

// convert to layout component wrapper
// navBar
// footer

function Layout(props) {

  return (
    <React.Fragment>
      <NavBar />
        {props.children}
    </React.Fragment>
  );
}

export default Layout;