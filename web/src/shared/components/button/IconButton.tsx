/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { Stack, IconButton, SxProps } from "@mui/material";

import { buttonSize } from "../types";

interface ButtonIconPropos {
  myOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  size: buttonSize;
  children: React.ReactNode;
  sx?: SxProps;
}

export const ButtonIcon: React.FC<ButtonIconPropos> = ({
  myOnClick,
  size,
  children,
  sx,
}) => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" size={size} onClick={myOnClick} sx={sx}>
        {children}
      </IconButton>
    </Stack>
  );
};
