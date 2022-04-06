import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// icons
import Avatar from "@mui/material/Avatar"
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import logo from "../styles/logo192.png";


const NavBarOptions = ({ Icon, avatar }) => {
  return (
    <IconButton >
      <Badge badgeContent={1} overlap="circular" color="error">
        {Icon && <Icon/>}
        {avatar && <Avatar />}
      </Badge>
    </IconButton>
  );
}

function NavBar() {
  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger}>
      <AppBar position="sticky" color="default">
        <Container sx={{ flexGrow: 1, width: 1}}>
          <Toolbar disableGutters>
            <Link
              to="/"
              variant="button"
            >
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="home button"
                sx={{ mr: 2, ml: 5 }}
              >
                <img src={logo} alt="react logo" width="40" />
              </IconButton>
            </Link>
            <TextField
              id="navbar-search"
              label="search"
              variant="outlined"
              size="small"
              sx={{ width: "20ch", mr: 5}}
            />
            <Box sx={{ display: { md: 'flex' }, ml: "auto" }}>
              <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3 }}>
                <NavBarOptions Icon={SupervisorAccountIcon} />
                <NavBarOptions Icon={WorkIcon} />
                <NavBarOptions Icon={NotificationsIcon} />
                <NavBarOptions Icon={MessageIcon} />
                <Badge
                  variant="dot"
                  overlap="circular"
                  color="success"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <NavBarOptions Icon={AccountCircle} />
                </Badge>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default NavBar;