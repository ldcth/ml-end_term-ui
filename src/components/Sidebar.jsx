import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Stack } from "@mui/material";
import { ImageSquare, TextAa, ClockCounterClockwise } from "phosphor-react";
import { connect } from "react-redux";

import { changeOpenPage } from "../redux/action";

const drawerWidth = 229;

const Sidebar = (props) => {
  const { page, changeOpenPage } = props;
  useEffect(() => {
    if (!!!page) {
      changeOpenPage("photo");
    }
  });
  return (
    <Box
      sx={{
        // display: "flex",
        height: "100vh",
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <CssBaseline />

      <Stack
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {["Guess by photo", "Guess by text", "Guess by both"].map(
            (text, index) => (
              <ListItem
                key={text}
                disablePadding
                onClick={() => {
                  changeOpenPage(
                    text.toLowerCase().split(" ")[
                      text.toLowerCase().split(" ").length - 1
                    ]
                  );
                }}
              >
                <ListItemButton
                  selected={
                    page ===
                    text.toLowerCase().split(" ")[
                      text.toLowerCase().split(" ").length - 1
                    ]
                  }
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <ImageSquare size={24} />
                    ) : index === 1 ? (
                      <TextAa size={24} />
                    ) : (
                      <ClockCounterClockwise size={24} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
          {/* <ListItem key={"Guess by photo"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Guess by photo"} />
            </ListItemButton>
          </ListItem> */}
        </List>
        <Divider />
      </Stack>
    </Box>
  );
};
const mapStateToProps = (state) => ({
  page: state.reducer.page,
});

const mapDispatchToProps = {
  changeOpenPage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
