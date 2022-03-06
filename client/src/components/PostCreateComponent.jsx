import React, { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// icons
import Avatar from "@mui/material/Avatar";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

// footer buttons
function FooterOptions({ Icon, title, color, clickEvent }) {
  return (
    <Button color={color} onClick={clickEvent}>
      {Icon && <Icon />}
      <Typography variant="button" color="text.primary" ml={1}> {title} </Typography>
    </Button>
  );
}

/**
 * export create new post
 */

function CreateNewPost(props) {

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }

  // post created post
  const handleSubmit = (event) => {
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
        console.log(response)
      })
      .catch(err => console.log(err));
  }

  return (
    <Card sx={{ pt: 3 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton>
            <Avatar
              src={props.userImage}
              alt={props.username}
            />
          </IconButton>
          <TextField
            value={input}
            onChange={handleChange}
            required
            name="create a post"
            label="create a post"
            multiline
            maxRows={3}
            variant="outlined"
            size="large"
            sx={{ width: "90%" }}
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <CreateIcon color="error" />
                </InputAdornment>
            }}
          />
        </Stack>
      </CardContent>
      <CardActionArea sx={{ pt: 1, pb: 1 }}>
        <Stack direction="row" spacing={1} justifyContent="space-around">
          <FooterOptions Icon={InsertPhotoOutlinedIcon} title="photo" color="primary" />
          <FooterOptions Icon={SmartDisplayIcon} title="video" color="success" />
          <FooterOptions Icon={InsertPhotoOutlinedIcon} title="event" color="warning" />
          <FooterOptions Icon={CreateIcon} title="Post" color="error" clickEvent={handleSubmit}/>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default CreateNewPost;