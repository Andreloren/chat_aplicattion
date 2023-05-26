import React from "react";

import { Avatar, Grid } from "@mui/material";
import { UserLoggedMap } from "../../../interfaces";
import { useAppDispatch } from "../../../store/modules/hooks";

export const UserLogMap: React.FC<UserLoggedMap> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  username,
}) => {
  const dispatch = useAppDispatch();

  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}`.toUpperCase(),
    };
  }

  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
      <Avatar
        sx={{ bgcolor: "#2473ce", width: 30, height: 30 }}
        {...stringAvatar(`${username}`)}
      />
      {username}
    </Grid>
  );
};
