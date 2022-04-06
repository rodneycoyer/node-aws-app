import React from "react";
import axios from "axios";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Sidebar from "./SidebarComponent";
import PostCard from "./PostCardComponent";
import CreateNewPost from "./CreateNewPostComponent";

// export
function FeedPage() {

  const [posts, setPosts] = React.useState([]);
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    axios.get(`/posts`)
      .then(response => {
        setPosts(response.data)
        console.log(response.data)
      })
      .catch(err => alert(err));
  }, []);

  // render feed list
  const feedList = posts.map(post => {
    return (
      <Grid item key={post._id} mt={2}>
        <PostCard
          username={post.username}
          title={post.title}
          text={post.text}
          media={post.media}
          subheader={post.userInfo}
        />
      </Grid>
    );
  });

  // create new post
  const handleCreatePost = (event) => {
    event.preventDefault();

    const textFieldData = new FormData();
    textFieldData.append("text", input) // key pairs
    // add other pairs here

    const postContent = {
      text: input,
      media: "",
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    axios.post(`/posts`, postContent)
      .then(response => {
        console.log(response);
        setPosts([...posts, response.data])
        setInput("")
      })
      .catch(err => alert(err));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={3} >
        <Grid item sm={4}>
          <Sidebar />
        </Grid>
        <Grid item sm={8} md={7}>
          <Grid item >
            <CreateNewPost />
          </Grid>
          {feedList}
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeedPage;