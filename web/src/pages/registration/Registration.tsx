import React, { useEffect, useState, forwardRef } from "react";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Box, Paper, Snackbar } from "@mui/material";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

import { Heading } from "../../shared/components/heading/Heading";
import {
  boxStyled,
  formBoxStyledReg,
} from "../../shared/components/box/BoxStyled";
import { paperStyledReg } from "../../shared/components/paper/PaperStyled";
import {
  InputPassword,
  InputRegistration,
} from "../../shared/components/input/Inputs";
import { Button } from "../../shared/components/button/Button";
import { LinkStyled, Link } from "../../shared/components/footer";

import {
  regexCpf,
  regexName,
  MaskCpf,
} from "../../shared/components/regex/Masks";
import MaskedInput from "react-text-mask";

import { label } from "../../shared/components/types";
import { buttonStyled } from "../../shared/components/button";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Registration: React.FC = () => {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);

  const [cpf, setCpf] = useState("");
  const [cpfValid, setcpfValid] = useState(false);

  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);

  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordRepValid, setPasswordRepValid] = useState(false);

  const [openSnackBarSucess, setOpenSnackBarSucess] = useState(false);
  const [openSnackBarError, setOpenSnackBarError] = useState(false);

  const [messageName, setMessageName] = useState("");
  const [messageCpf, setMensagemCpf] = useState("");
  const [messageUsername, setMessageUsername] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageRepPassword, setMessageRepPassword] = useState("");

  useEffect(() => {
    if (!name || !name.match(regexName)) {
      setNameValid(false);
      setMessageName("Digite no mínimo nome e sobrenome.");
    } else {
      setNameValid(true);
      setMessageName("");
    }
    if (!cpf || !cpf.match(regexCpf)) {
      setcpfValid(false);
      setMensagemCpf("Favor digitar 11 números.");
    } else {
      setcpfValid(true);
      setMensagemCpf("");
    }
    if (!username || username.length < 5) {
      setUsernameValid(false);
      setMessageUsername("Mínimo de 5 caracteres.");
    } else {
      setUsernameValid(true);
      setMessageUsername("");
    }
    if (!password || password.length < 7) {
      setPasswordValid(false);
      setMessagePassword("Mínimo de 7 caracteres.");
    } else {
      setPasswordValid(true);
      setMessagePassword("");
    }
    if (password !== repPassword || !repPassword) {
      setPasswordRepValid(false);
      setMessageRepPassword("Senhas não conferem");
    } else {
      setPasswordRepValid(true);
      setMessageRepPassword("");
    }
  }, [password, repPassword, username, cpf, name]);

  const handleChangeInput = (value: string, key: label) => {
    switch (key) {
      case "Digite seu Nome e Sobrenome":
        setName(value.toUpperCase());
        break;

      case "Digite seu CPF":
        setCpf(value);
        break;

      case "Digite seu Username":
        setUsername(value.toLowerCase());
        break;

      case "Digite sua Senha":
        setPassword(value.toLowerCase());
        break;

      case "Confirmação de Senha":
        setRepPassword(value.toLowerCase());
        break;

      default:
        break;
    }
  };

  const handleClickSnackBarSucess = () => {
    setOpenSnackBarSucess(true);
  };

  const handleClickSnackBarError = () => {
    setOpenSnackBarError(true);
  };

  const handleCloseSnackBarSucess = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBarSucess(false);
  };

  const handleCloseSnackBarError = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBarError(false);
  };

  const clearInputs = () => {
    setName("");
    setCpf("");
    setUsername("");
    setPassword("");
    setRepPassword("");
  };

  const handleClickRegistration = () => {
    ("");
  };

  return (
    <Box sx={boxStyled}>
      <Paper sx={paperStyledReg} elevation={3}>
        <Heading
          text="CADASTRE SEU USUÁRIO"
          psize="h5"
          sx={{ mx: 3, mt: 1, color: "#2473ce" }}
        />
        <Box sx={formBoxStyledReg}>
          <InputRegistration
            required={true}
            error={!nameValid}
            heightInput="small"
            placeholder="Digite seu Nome e Sobrenome"
            value={name}
            textHelp={messageName}
            color="primary"
            type="text"
            lengthInput="40ch"
            identificator="outlined-size-small"
            propsInput={{ maxLength: 33 }}
            myOnChange={handleChangeInput}
          />

          <InputRegistration
            required={true}
            error={!cpfValid}
            heightInput="small"
            placeholder="Digite seu CPF"
            value={cpf}
            textHelp={messageCpf}
            color="primary"
            type="text"
            lengthInput="40ch"
            identificator="outlined-size-small"
            myOnChange={handleChangeInput}
            propsInput={{
              inputComponent: MaskCpf,
              inputProps: { component: MaskedInput },
            }}
          />

          <InputRegistration
            required={true}
            error={!usernameValid}
            heightInput="small"
            placeholder="Digite seu Username"
            value={username}
            textHelp={messageUsername}
            color="primary"
            type="text"
            lengthInput="40ch"
            identificator="outlined-size-small"
            propsInput={{ maxLength: 15 }}
            myOnChange={handleChangeInput}
          />

          <InputPassword
            required={true}
            sizeInput="small"
            value={password}
            sizeLabel="small"
            color="primary"
            placeholder="Digite sua Senha"
            lengthInput="40ch"
            identificator="outlined-adornment-password"
            myOnChange={handleChangeInput}
            propsInput={{ maxLength: 10 }}
            error={!passwordValid}
            text={messagePassword}
          />

          <InputPassword
            required={true}
            sizeInput="small"
            value={repPassword}
            sizeLabel="small"
            color="primary"
            placeholder="Confirmação de Senha"
            lengthInput="40ch"
            identificator="outlined-adornment-password"
            myOnChange={handleChangeInput}
            propsInput={{ maxLength: 10 }}
            error={!passwordRepValid}
            text={messageRepPassword}
          />

          <Button
            iconButton={<ForumOutlinedIcon />}
            sx={buttonStyled}
            text="Cadastrar Usuário"
            typeButton="button"
            color="primary"
            size="medium"
            variation="contained"
            myOnClick={handleClickRegistration}
            disable={
              !nameValid ||
              !cpfValid ||
              !usernameValid ||
              !passwordValid ||
              !passwordRepValid
            }
          ></Button>
          <Link
            sx={LinkStyled}
            link="/"
            text="Já possui cadastro? Voltar a página de Login!"
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
          Usuário já cadastrado!!
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
          Cadastro Efetuado com Sucesso!!!
        </Alert>
      </Snackbar>
    </Box>
  );
};
