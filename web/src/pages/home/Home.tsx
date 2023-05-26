import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import {
  deleteUserLoggedAPI,
  getAllUsersLogged,
  getAllUsersLoggedAPI,
} from "../../store/modules/usersLogged/usersLoggedSlice";
import { Box, Grid, Input } from "@mui/material";

import { boxChatStyled } from "../../shared/components/box/BoxStyled";
import { Heading } from "../../shared/components/heading/Heading";
import { UserLogMap } from "../../shared/components/grid/UserLogMap";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Button,
  ButtonIcon,
  buttonStyled,
} from "../../shared/components/button";
import { LogoutStyled } from "../../shared/components/logout/LogoutStyle";
import { cleanUserLocal } from "../../store/modules/userLocal/userLocalSlice";
import { socket } from "../login/Login";

export const Home: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const navigate = useNavigate();

  const userLog = useAppSelector((state) => state.userLocal);
  const usersLogged = useAppSelector(getAllUsersLogged);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivHTMLDivElement | undefined>();

  useEffect(() => {
    dispatch(getAllUsersLoggedAPI());
  }, [dispatch]);

  useEffect((): any => {
    socket.on("receive_message", (data) => {
      setMessageList((messages): any => [...messages, data]);
    });
    return () => socket.off("receive_message");
  }, [socket]);

  useEffect(() => {
    const navigateLogin = () => {
      navigate("/");
    };

    if (!userLog) {
      navigateLogin();
    }
  }, [userLog, navigate]);

  const handleRemoveUserLogged = () => {
    const user = usersLogged.find((u) => u.username === userLog);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(deleteUserLoggedAPI(user!.cpf));
    dispatch(cleanUserLocal());
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleSubmitChat = () => {
    socket.emit("message", message);
    clearInput();
    focusInput();
    scrollDown();
  };

  const getEnterKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmitChat();
    }
  };

  const scrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const clearInput = () => {
    setMessage("");
  };

  return (
    <>
      <ButtonIcon
        size="large"
        myOnClick={handleRemoveUserLogged}
        children={<LogoutIcon />}
        sx={LogoutStyled}
        text="Logout"
      />
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
            {messageList.map((message: any, index) => (
              <p key={index}>
                {message.author}:{message.text}
              </p>
            ))}
            <div ref={scrollRef}></div>
          </Grid>
          <Input
            onKeyDown={(e: any) => getEnterKey(e)}
            inputRef={inputRef}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button
            sx={buttonStyled}
            text="Enviar"
            typeButton="button"
            color="primary"
            size="medium"
            variation="contained"
            myOnClick={handleSubmitChat}
          />
        </Grid>
      </Box>
    </>
  );
};
