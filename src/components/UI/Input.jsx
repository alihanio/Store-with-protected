import {TextField} from "@mui/material";

import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <TextField ref={ref} {...props} />;
});

export default Input;

