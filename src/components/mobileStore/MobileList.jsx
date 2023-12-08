import React from "react";
import MobileItem from "./MobileItem";
import { styled } from "@mui/material";

const MobileList = ({ mobiles }) => {
  return (
    <StyledConteiner>
      {mobiles?.map((mobile) => (
        <MobileItem {...mobile} key={mobile.id} />
      ))}
    </StyledConteiner>
  );
};

export default MobileList;

const StyledConteiner = styled("ul")({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "7rem",
  marginBottom: "3rem",
});
