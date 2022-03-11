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
function FooterOptions({ Icon, title, color, clickEvent }) {
  return (
    <Button color={color} onClick={clickEvent} >
      {Icon && <Icon />}
      <Typography variant="button" color="text.primary" ml={1}>
        {title}
      </Typography>
    </Button>
  );
}

function PostFeedCard(props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Box sx={{ xs:3 }}>
            <IconButton>
              <Avatar
                src={props.username}
                alt={props.username}
              />
            </IconButton>
          </Box>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={props.username}
        subheader={props.author}
      />
      <CardContent sx={{ mb: 2 }}>
        <Typography variant="p"> {props.title} </Typography>
        <Typography variant="p"> {props.text} </Typography>
      </CardContent>
      <CardMedia> {props.media} </CardMedia>
      <Divider />
      <CardActionArea sx={{ pt: 1, pb: 1 }}>
        <Stack direction="row" spacing={1} ml={2} justifyContent="start">
          <FooterOptions Icon={ThumbUpOutlinedIcon} title="like" color="primary" />
          <FooterOptions Icon={CommentOutlinedIcon} title="comment" color="secondary" />
          <FooterOptions Icon={ShareOutlinedIcon} title="share" color="success" />
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default PostFeedCard;