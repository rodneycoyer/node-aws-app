import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// icons
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// footer buttons
function PostOptions({ Icon, title, color, clickEvent }) {
  return (
    <Button color={color} onClick={clickEvent} >
      {Icon && <Icon />}
      <Typography variant="button" color="text.primary" ml={1}>
        {title}
      </Typography>
    </Button>
  );
}

/**
 * export Post Card
 */

function PostCard({text, media, username}) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Box sx={{ xs:3 }}>
            <IconButton>
              <Avatar
                src={"userImage"}
                alt={"username"}
              />
            </IconButton>
          </Box>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={"username"}
        subheader={"subheader or email"}
      />
      <CardContent sx={{ mb: 2 }}>
        <Typography variant="p"> {text} </Typography>
        <CardMedia> {media} </CardMedia>
      </CardContent>
      <Divider />
      <CardActionArea sx={{ pt: 1, pb: 1 }}>
        <Stack direction="row" spacing={1} ml={2} justifyContent="start">
          <PostOptions Icon={ThumbUpOutlinedIcon} title="like" color="primary" />
          <PostOptions Icon={CommentOutlinedIcon} title="comment" color="secondary" />
          <PostOptions Icon={ShareOutlinedIcon} title="share" color="success" />
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default PostCard;