import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import {
  deleteUserLoggedAPI,
  getAllUsersLogged,
  getAllUsersLoggedAPI,
  getUserLoggedByCpf,
} from "../../store/modules/usersLogged/usersLoggedSlice";
import { Box, Grid } from "@mui/material";

import { boxChatStyled } from "../../shared/components/box/BoxStyled";
import { Heading } from "../../shared/components/heading/Heading";
import { UserLogMap } from "../../shared/components/grid/UserLogMap";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const userLog = useAppSelector((estado) => estado.userLogged.entities);
  const usersLogged = useAppSelector(getAllUsersLogged);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsersLoggedAPI());
  }, [dispatch]);

  useEffect(() => {
    const navigateLogin = () => {
      navigate("/");
    };

    if (!userLog) {
      navigateLogin();
    }
  }, [userLog, navigate]);

  return (
    <>
      <Box sx={boxChatStyled}>
        <Grid container spacing={2}>
          <Grid
            container
            direction="column"
            alignItems="center"
            xs={2}
            sx={{ gap: 2, border: "1px solid black", marginTop: 2 }}
          >
            <Heading
              text="USUÁRIOS LOGADOS"
              psize="body2"
              sx={{ marginTop: 2 }}
            />

            {usersLogged.map((user) => (
              <UserLogMap
                key={user.userLoggedId}
                username={user.username}
                userLoggedId={user.userLoggedId}
              />
            ))}
          </Grid>
          <Grid item xs={10} sx={{ border: "1px solid black", marginTop: 2 }}>
            <Heading
              text="MENSAGENS DO CHAT"
              psize="body2"
              sx={{ textAlign: "center" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
