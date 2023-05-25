import React, { useEffect } from "react";

import { Avatar, Grid } from "@mui/material";
import { UserLoggedMap } from "../../../interfaces";
import { useAppDispatch, useAppSelector } from "../../../store/modules/hooks";
import {
  deleteUserLoggedAPI,
  getAllUsersLogged,
  getAllUsersLoggedAPI,
} from "../../../store/modules/usersLogged/usersLoggedSlice";
import { ButtonIcon } from "../button";
import LogoutIcon from "@mui/icons-material/Logout";

export const UserLogMap: React.FC<UserLoggedMap> = ({
  userLoggedId,
  username,
}) => {
  const dispatch = useAppDispatch();
  const userLogged = useAppSelector((log) => log.userLogged);
  const usersLogged = useAppSelector(getAllUsersLogged);

  const handleRemoveUserLogged = () => {
    dispatch(deleteUserLoggedAPI(userLoggedId));
  };

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
      <ButtonIcon
        size="small"
        myOnClick={handleRemoveUserLogged}
        children={<LogoutIcon />}
        sx={{ color: "#2473ce" }}
      />
    </Grid>
  );
};
