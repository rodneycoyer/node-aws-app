import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import SignIn from "./components/SignInComponent";
import FeedPage from "./components/FeedPageComponent";
import Users from "./components/UsersComponent";

// todo:
// Layout template - UserProfile, UserTable, Listings, ListingID
// nested routes - usersID, ListingsID
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
            <Route path="/FeedPage" element={<FeedPage />}>
              <Route path=":FeedPage" element={<FeedPage />} />
            </Route>
            <Route path="*" element={ "*" ? <SignIn /> : <FeedPage /> } />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;