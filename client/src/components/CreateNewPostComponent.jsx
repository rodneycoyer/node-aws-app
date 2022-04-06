import React, { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography"
// icons
import Avatar from "@mui/material/Avatar";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

function CreateNewPost(props) {

  const [input, setInput] = useState("");

  return (
    <Card sx={{ pt: 3 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton>
            <Avatar
              src={"username"}
              alt={"username"}
            />
          </IconButton>
          <TextField
            value={input}
            onChange={event => setInput(event.target.value)}
            required
            name="create a post"
            label="create a post"
            multiline
            maxRows={2}
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
        <Stack direction="row" spacing={1} justifyContent="space-evenly">
          <InputFeedCardOptions Icon={InsertPhotoOutlinedIcon} title="photo" aria-label="upload-photo" color="primary" />
          <InputFeedCardOptions Icon={SmartDisplayIcon} title="video" aria-label="upload-video" color="success" />
          <InputFeedCardOptions Icon={InsertPhotoOutlinedIcon} title="event" aria-label="create-event" color="warning" />
          <InputFeedCardOptions Icon={CreateIcon} title="Post" color="error" aria-label="submit-post" onClick={props.handleCreatePost} />
        </Stack>
      </CardActionArea>
    </Card>
  );
}

// cardActionArea buttons
const InputFeedCardOptions = ({ Icon, title, color, clickEvent }) => {
  return (
    <Button color={color} onClick={clickEvent} >
      <Icon  />
      <Typography color="text.primary" ml={1}> {title} </Typography>
    </Button>
  );
}

export default CreateNewPost;