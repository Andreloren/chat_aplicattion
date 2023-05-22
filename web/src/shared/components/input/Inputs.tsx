import React, { useState, InputHTMLAttributes } from "react";
import { inputLabel, inputSize, label, textFieldColor } from "../types";

import {
  Box,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
  InputAdornment,
  TextField,
  FormHelperText,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: label;
  value?: string;
  textHelp?: React.ReactNode;
  color: textFieldColor;
  lengthInput: string;
  identificator: string;
  myOnChange: (value: string, key: label) => void;
  error?: boolean;
  required?: boolean;
  type?: string;
  heightInput?: inputSize;
  sizeLabel?: inputLabel;
  sizeInput?: inputSize;
  propsInput: object;
  text?: string;
}

//INPUT NOME, CPF E USERNAME
export const InputRegistration: React.FC<InputProps> = ({
  placeholder,
  value,
  textHelp,
  color,
  lengthInput,
  identificator,
  heightInput,
  myOnChange,
  error,
  type,
  required,
  sizeInput,
  sizeLabel,
  propsInput,
  text,
  ...props
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: lengthInput },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          {...props}
          error={error}
          onChange={(ev) => myOnChange(ev.target.value, placeholder)}
          size={heightInput}
          helperText={textHelp}
          label={placeholder}
          id={identificator}
          value={value}
          color={color}
          type={type}
          required={required}
          InputProps={propsInput}
        />
      </div>
    </Box>
  );
};

//INPUT SENHA
interface State {
  password?: string;
  showPassword?: boolean;
}

export const InputPassword: React.FC<InputProps> = ({
  placeholder,
  color,
  lengthInput,
  identificator,
  sizeInput,
  sizeLabel,
  error,
  myOnChange,
  value,
  required,
  propsInput,
  text,
}) => {
  const [values, setValues] = useState<State>({ showPassword: false });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl sx={{ m: 1, width: lengthInput }} variant="outlined">
          <InputLabel
            required={required}
            error={error}
            htmlFor="outlined-adornment-password"
            size={sizeLabel}
          >
            {placeholder}
          </InputLabel>
          <OutlinedInput
            required={required}
            error={error}
            size={sizeInput}
            color={color}
            id={identificator}
            inputProps={propsInput}
            type={values.showPassword ? "text" : "password"}
            value={value}
            onChange={(ev) => myOnChange(ev.target.value, placeholder)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={placeholder}
          />
          <FormHelperText error={error}>{text}</FormHelperText>
        </FormControl>
      </div>
    </Box>
  );
};
