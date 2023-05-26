import {
    Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>{/* <ContentCut fontSize="small" /> */}</ListItemIcon>
            <ListItemText>Cut</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘X
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              {/* <ContentCopy fontSize="small" /> */}
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘C
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              {/* <ContentPaste fontSize="small" /> */}
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘V
            </Typography>
          </MenuItem>
          <Divider/>
          <MenuItem>
            <ListItemIcon>
              {/* <Cloud fontSize="small" /> */}
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </Grid>
    <Grid item xs={9}>
      {children}
    </Grid>
  </Grid>
);
