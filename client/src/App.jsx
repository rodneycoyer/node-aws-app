import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import SignIn from "./components/SignInPage";
import MainPage from "./components/MainPage";
import Register from "./components/RegisterComponent";
import Users from "./components/UsersPage";

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
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />}>
              <Route path=":userId" element={<Users />} />
            </Route>
            <Route path="/posts" element={<MainPage />}>
              <Route path=":postId" element={<MainPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;