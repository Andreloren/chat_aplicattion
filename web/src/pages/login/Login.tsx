import React, { useEffect, useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Box, Paper, Snackbar } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import { label } from "../../shared/components/types";
import { MaskCpf, regexCpf } from "../../shared/components/regex/Masks";
import { Heading } from "../../shared/components/heading/Heading";
import { Button } from "../../shared/components/button/Button";

import {
  boxStyled,
  formBoxStyledReg,
} from "../../shared/components/box/BoxStyled";
import { paperStyledReg } from "../../shared/components/paper/PaperStyled";
import {
  InputPassword,
  InputRegistration,
} from "../../shared/components/input/Inputs";
import MaskedInput from "react-text-mask";
import { buttonStyled } from "../../shared/components/button";
import { Link, LinkStyled } from "../../shared/components/footer";
import { Logo } from "../../shared/components/logo";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import {
  getAllUsersLogged,
  getAllUsersLoggedAPI,
} from "../../store/modules/usersLogged/usersLoggedSlice";
import { UserLogged } from "../../interfaces";
import { getAllUsers } from "../../store/modules/users/usersSlice";
import { addUserLoggedAPI } from "../../store/modules/usersLogged/usersLoggedSlice";
import { getAllUsersAPI } from "../../store/modules/users/usersSlice";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Login: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const [messageCpf, setMessageCpf] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [cpfValid, setCpfValid] = useState(false);

  const [openSnackBarSucess, setOpenSnackBarSucess] = useState(false);
  const [openSnackBarError, setOpenSnackBarError] = useState(false);
  const [openSnackBarErrorLogged, setOpenSnackBarErrorLogged] = useState(false);

  const navigate = useNavigate();

  const usersLogged = useAppSelector(getAllUsersLogged);
  const users = useAppSelector(getAllUsers);
  const dispatch = useAppDispatch();

  const handleChangeInput = (value: string, key: label) => {
    switch (key) {
      case "Digite seu CPF":
        setCpf(value);
        break;

      case "Digite sua Senha":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (!cpf || !cpf.match(regexCpf)) {
      setCpfValid(false);
      setMessageCpf("Favor digitar 11 números.");
    } else {
      setCpfValid(true);
      setMessageCpf("");
    }
    if (!password || password.length < 7) {
      setPasswordValid(false);
      setMessagePassword("Mínimo de 7 caracteres.");
    } else {
      setPasswordValid(true);
      setMessagePassword("");
    }
  }, [cpf, password]);

  useEffect(() => {
    dispatch(getAllUsersLoggedAPI());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsersAPI());
  }, [dispatch]);

  const handleClickSnackBarSucess = () => {
    setOpenSnackBarSucess(true);
  };

  const handleClickSnackBarError = () => {
    setOpenSnackBarError(true);
  };

  const handleClickSnackBarErrorLogged = () => {
    setOpenSnackBarErrorLogged(true);
  };

  const handleCloseSnackBarSucess = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBarSucess(false);
  };

  const handleCloseSnackBarError = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBarError(false);
  };

  const handleCloseSnackBarErrorLogged = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBarErrorLogged(false);
  };

  const handleClickLogin = () => {
    const existingUser = users.find(
      (user) => user.cpf === cpf && user.password === password
    );

    if (!existingUser) {
      handleClickSnackBarError();
      return;
    }

    const userLogged = usersLogged.find((userLog) => userLog.cpf === cpf);

    if (userLogged) {
      handleClickSnackBarErrorLogged();
      return setTimeout(() => {
        navigate("/home");
      }, 2000);
    }

    const newUserLogged: UserLogged = {
      userLoggedId: existingUser.uid,
      name: existingUser.name,
      cpf: existingUser.cpf,
      username: existingUser.username,
      password: existingUser.password,
    };

    dispatch(addUserLoggedAPI(newUserLogged));
    handleClickSnackBarSucess();
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <Box sx={boxStyled}>
      <Paper elevation={3} sx={paperStyledReg}>
        <Logo />
        <Heading
          text="APPLICATION CHAT"
          psize="h5"
          sx={{ mx: 3, mt: 1, color: "#2473ce" }}
        />
        <Heading
          text="Faça login e comece a usar!"
          psize="h6"
          sx={{ mx: 3, mt: 1, color: "#2473ce" }}
        />
        <Box sx={formBoxStyledReg}>
          <InputRegistration
            required={true}
            error={!cpfValid}
            value={cpf}
            type="text"
            myOnChange={handleChangeInput}
            heightInput="medium"
            placeholder="Digite seu CPF"
            textHelp={messageCpf}
            color="primary"
            lengthInput="40ch"
            identificator="outlined-size-normal"
            propsInput={{
              inputComponent: MaskCpf,
              inputProps: { component: MaskedInput },
            }}
          />
          <InputPassword
            required={true}
            error={!passwordValid}
            value={password}
            myOnChange={handleChangeInput}
            color="primary"
            placeholder="Digite sua Senha"
            lengthInput="40ch"
            identificator="outlined-adornment-password"
            propsInput={{ maxLength: 10 }}
            text={messagePassword}
          />
          <Button
            iconButton={<LoginIcon />}
            sx={buttonStyled}
            text="Entrar na Plataforma"
            typeButton="button"
            color="primary"
            size="medium"
            variation="contained"
            myOnClick={handleClickLogin}
          ></Button>
          <Link
            sx={LinkStyled}
            link="/registration"
            text="Não possui conta? Crie uma agora!"
            style="hover"
          />
        </Box>
      </Paper>

      <Snackbar
        open={openSnackBarError}
        autoHideDuration={1500}
        onClose={handleCloseSnackBarError}
      >
        <Alert
          onClose={handleCloseSnackBarError}
          severity="error"
          sx={{ width: "100%" }}
        >
          CPF ou Senha Inválidos!!!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSnackBarErrorLogged}
        autoHideDuration={1500}
        onClose={handleCloseSnackBarErrorLogged}
      >
        <Alert
          onClose={handleCloseSnackBarErrorLogged}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Usuário já Logado!!!
          <br />
          Você será redirecionado para o chat.
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSnackBarSucess}
        autoHideDuration={1500}
        onClose={handleCloseSnackBarSucess}
      >
        <Alert
          onClose={handleCloseSnackBarSucess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Login Efetuado com Sucesso!!!
        </Alert>
      </Snackbar>
    </Box>
  );
};
