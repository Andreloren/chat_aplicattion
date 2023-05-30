import React from "react";

import { Avatar, Grid } from "@mui/material";
import { UserLoggedMap } from "../../../interfaces";

export const UserLogMap: React.FC<UserLoggedMap> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  username,
}) => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 30,
        height: 30,
        // marginTop: "10px",
      },
      children: `${name.split(" ")[0][0]}`.toUpperCase(),
    };
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="flex-start"
      sx={{ gap: 1 }}
    >
      <Avatar {...stringAvatar(`${username}`)} />
      {username.toUpperCase()}
    </Grid>
  );
};
