import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { socket } from "../login/Login";

import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import {
  deleteUserLoggedAPI,
  getAllUsersLogged,
  getAllUsersLoggedAPI,
} from "../../store/modules/usersLogged/usersLoggedSlice";
import { cleanUserLocal } from "../../store/modules/userLocal/userLocalSlice";

import { Box, Grid, Input, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";

import {
  boxChatStyled,
  boxInputChatStyled,
} from "../../shared/components/box/BoxStyled";
import { Heading } from "../../shared/components/heading/Heading";
import { UserLogMap } from "../../shared/components/grid/UserLogMap";
import { ButtonIcon, buttonChatStyled } from "../../shared/components/button";
import { LogoutStyled } from "../../shared/components/logout/LogoutStyle";
import { ChatGridStyled, ChatUsersStyled } from "../../shared/components/grid";
import {
  HeadingChatStyled,
  HeadingChatUsersStyled,
} from "../../shared/components/heading";

export const Home: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const navigate = useNavigate();

  const userLog = useAppSelector((state) => state.userLocal);
  const usersLogged = useAppSelector(getAllUsersLogged);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
    dispatch(getAllUsersLoggedAPI());
  }, [dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEffect((): any => {
    socket.on("receive_message", (data) => {
      setMessageList((messages): any => [...messages, data]);
    });
    return () => socket.off("receive_message");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  // eslint-disable-next-line react-hooks/exhaustive-deps

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
    socket.disconnect();
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

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const scrollDown = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clearInput = () => {
    setMessage("");
  };

  const author: any = messageList.find((user: any) => user.author === userLog);

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
          <Grid container direction="column" xs={3} sx={ChatUsersStyled}>
            <Heading
              text="USUÁRIOS LOGADOS"
              psize="h6"
              sx={HeadingChatUsersStyled}
            />

            {usersLogged.map((user) => (
              <UserLogMap
                key={user.userLoggedId}
                username={user.username}
                userLoggedId={user.userLoggedId}
              />
            ))}
          </Grid>

          <Grid item xs={8} sx={ChatGridStyled}>
            <Heading
              text="MENSAGENS DO CHAT"
              psize="h6"
              sx={HeadingChatStyled}
            />

            {messageList.map((message: any, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    message.author === author?.author
                      ? "flex-start"
                      : "flex-end",
                }}
              >
                <Typography
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems:
                      message.author === author?.author
                        ? "flex-start"
                        : "flex-end",
                    justifyContent:
                      message.author === author?.author
                        ? "flex-start"
                        : "flex-end",
                    textAlign:
                      message.author === author?.author ? "left" : "right",
                    backgroundColor:
                      message.author === author?.author
                        ? "rgb(19, 228, 217, 0.3)"
                        : "rgb(133, 119, 151,0.3)",
                    padding: "10px",
                    marginTop: "10px",
                    width: "200px",
                    borderRadius: "5px",
                  }}
                >
                  {message.text}
                </Typography>
                <Typography
                  sx={{
                    textAlign:
                      message.author === author?.author ? "left" : "right",
                    marginTop: "5px",
                  }}
                >
                  {message.author}
                </Typography>
              </Box>
            ))}
            <div ref={bottomRef}></div>
            <Box sx={boxInputChatStyled}>
              <Input
                placeholder="Digite sua Mensagem"
                sx={{ width: "20rem", marginTop: 1 }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onKeyDown={(e: any) => getEnterKey(e)}
                inputRef={inputRef}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <ButtonIcon
                children={<SendIcon fontSize="small" />}
                sx={buttonChatStyled}
                size="small"
                myOnClick={handleSubmitChat}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
