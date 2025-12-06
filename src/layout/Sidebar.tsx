import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Badge,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import { COLORS } from "../theme/colors";

const icons = [
  { icon: <HomeOutlinedIcon />, badge: false },
  { icon: <NoteAddOutlinedIcon />, badge: false },
  { icon: <NotificationsActiveOutlinedIcon />, badge: false },
  { icon: <ForumOutlinedIcon />, badge: true },
  { icon: <LeaderboardOutlinedIcon />, badge: false },
];

const Sidebar: React.FC = () => (
  <Drawer
    variant="permanent"
    anchor="right"
    sx={{
      width: 50,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: 50,
        boxSizing: "border-box",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 5,
      },
    }}
  >
    <List sx={{ mt: 0 }}>
      {icons.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            sx={{
              justifyContent: "center",
              "&:hover": { backgroundColor: "#f0f0f0" },
              borderRadius: 2,
              width: 40,
              height: 40,
              p: 0,
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
              {item.badge ? (
                <Badge
                  badgeContent={4}
                  color="success"
                  overlap="circular"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{
                    "& .MuiBadge-badge": {
                      minWidth: 14,
                      height: 14,
                      fontSize: 10,
                      top: "10%",
                      left: -7,
                      transform: "translate(0, -50%)",
                      backgroundColor: COLORS.notification,
                      color: "white",
                      padding: 0,
                    },
                  }}
                >
                  {React.cloneElement(item.icon, {
                    sx: { fontSize: 28, color: "black" },
                  })}
                </Badge>
              ) : (
                React.cloneElement(item.icon, {
                  sx: { fontSize: 28, color: "black" },
                })
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar;
