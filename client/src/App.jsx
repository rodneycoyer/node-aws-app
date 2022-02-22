import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import SignIn from "./components/SignInComponent";
import Listings from "./components/ListingsComponent";
import Users from "./components/UsersComponent";

// todo:
// nested routes - usersID, ListingsID
// Layout template - UserProfile, UserTable, Listings, ListingID
// redirect to SignIn


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" />
            <Route path="/users" element={<Users />}>
              <Route path=":userId" element={<Users />} />
            </Route>
            <Route path="/listings" element={<Listings />}>
              <Route path=":listingId" element={<Listings />} />
            </Route>
            <Route path="*" element={ "*" ? <SignIn /> : <Listings /> } />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;