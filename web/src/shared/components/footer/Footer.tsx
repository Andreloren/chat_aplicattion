import * as React from "react";
import Box from "@mui/material/Box";
import { SxProps, Link as TextLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { linkStyle } from "../types";

interface LinkLogProps {
  sx?: SxProps;
  text: string;
  link: string;
  style?: linkStyle;
}

export const Link: React.FC<LinkLogProps> = ({ text, sx, link, style }) => {
  return (
    <Box sx={sx}>
      <TextLink underline={style} component={RouterLink} to={link}>
        {text}
      </TextLink>
    </Box>
  );
};
