import { styled } from "@mui/material";
import React from "react";

const MobileItem = ({ title, images, discountPercentage, price }) => {
  return (
    <StyledCard>
      <StyledImage src={images[0]} alt="" />
      <StyledTitle>{title}</StyledTitle>
      <StyledPrice>{price} $</StyledPrice>
      <StyledPromotion>-{discountPercentage}% </StyledPromotion>
    </StyledCard>
  );
};

export default MobileItem;

const StyledCard = styled("li")({
  boxShadow: " 0px 4px 14px 8px rgba(34, 60, 80, 0.2)",
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",
  padding: "12px",
  width: "16.96625rem",
  height: "21.5625rem",
  zIndex: "1",
  textAlign: "start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  cursor: "pointer",
  "&:hover": {
    boxShadow: " none",
    border: "1px solid rgba(34, 60, 80, 0.2)",
    transition: " box-shadow 0.4s ease-in, border 0.3s ease-in",
  },
});

const StyledImage = styled("img")({
  width: "14rem",
  height: "13rem",
  transition: " all 0.5s ease-in-out",
  verticalAlign: "middle",
  maxHeight: " 90%",
  maxWidth: "90%",
  margin: "0 auto",
});
const StyledTitle = styled("p")({
  lineHeight: "21px",
  verticalAlign: "middle",
  display: "inline-block",
  fontSize: "1rem",
});
const StyledPrice = styled("h3")({
  fontFamily: "robotobold",
  fontSize: "18px",
  display: "block",
  marginBottom: "12px",
});

const StyledPromotion = styled("p")({
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  fontSize: "11px",
  backgroundColor: "#f61f8c",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
});
