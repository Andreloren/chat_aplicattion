import * as React from "react";

import { Button as ButtonLog, Stack, SxProps } from "@mui/material";

import { buttonColor, buttonSize, buttonType, buttonVariant } from "../types";

interface ButtonProps {
  variation: buttonVariant;
  typeButton: buttonType;
  text: string;
  color: buttonColor;
  size: buttonSize;
  sx?: SxProps;
  iconButton?: React.ReactNode;
  myOnClick: React.MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variation,
  typeButton,
  text,
  color,
  size,
  sx,
  iconButton,
  myOnClick,
  disable,
}) => {
  return (
    <Stack direction="row" spacing={2}>
      <ButtonLog
        sx={sx}
        type={typeButton}
        variant={variation}
        startIcon={iconButton}
        color={color}
        size={size}
        onClick={myOnClick}
        disabled={disable}
      >
        {text}
      </ButtonLog>
    </Stack>
  );
};
