import React from "react"
import { Route, Routes } from "react-router-dom";

import Layout from "./LayoutComponent";
import FeedPage from "./FeedPage";
import SignIn from "./SignInPage";
import Register from "./RegisterComponent";
import Users from "./UsersPage";

class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<FeedPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<FeedPage />} />
        </Routes>
      </Layout>
    );
  }
}

export default Main;