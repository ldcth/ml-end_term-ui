import { IconButton, Avatar } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Gear } from "phosphor-react";
import { Box, Stack } from "@mui/material";

const NavbarHeader = (props) => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      borderRight="solid 1px rgba(0, 0, 0, 0.12)"
    >
      <Stack direction="column">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            // navigate(`/chat`);
          }}
        >
          <QuestionAnswerIcon />
        </IconButton>
      </Stack>
      <Stack direction="column">
        <IconButton>
          <Gear />
        </IconButton>
        <IconButton>
          <AppsIcon
            onClick={() => {
              //   navigate(`/build-data`);
            }}
          />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </Stack>
    </Stack>
  );
};
// const mapStateToProps = (state) => ({});
// export default connect(mapStateToProps)(NavbarHeader);
export default NavbarHeader;
