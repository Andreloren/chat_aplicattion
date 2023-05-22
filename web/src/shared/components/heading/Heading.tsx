import React from "react";
import { textVariant } from "../types";
import { Box, SxProps, Typography } from "@mui/material";

interface HeadingProps {
  text: string;
  psize: textVariant;
  sx?: SxProps;
}

export const Heading: React.FC<HeadingProps> = ({ text, psize, sx }) => {
  return (
    <Box sx={sx}>
      <Typography variant={psize}>{text}</Typography>
    </Box>
  );
};
