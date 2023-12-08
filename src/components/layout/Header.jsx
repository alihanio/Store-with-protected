import React from "react";
import Button from "../UI/Button";
import { styled } from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import Person2Icon from "@mui/icons-material/Person2";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const profileBtn = () => {
    navigate("/profile");
  };

  return (
    <StyledHeader>
      <StyledText>Store</StyledText>
      <StyledInput type="text" placeholder="Search 🔍" />
      <StyledButtonConteiner>
        <StyledButton>
          <AddIcCallIcon style={IconStyle} />
        </StyledButton>
        <StyledButton>
          <MarkUnreadChatAltIcon style={IconStyle} />
        </StyledButton>
        <StyledButton onClick={profileBtn}>
          <Person2Icon />
        </StyledButton>
      </StyledButtonConteiner>
    </StyledHeader>
  );
};

export default Header;

const IconStyle = {
  color: "white",
};

const StyledButton = styled(Button)({
  backgroundColor: "transparent",
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
});

const StyledButtonConteiner = styled("div")({
  display: "flex",
  gap: "1rem",
  marginRight: "3rem",
});

const StyledInput = styled("input")({
  width: "30rem",
  height: "2rem",
  borderRadius: "1rem",
  backgroundColor: "white",
  padding: "0.1rem 2rem",
  border: "none",
});

const StyledHeader = styled("header")({
  backgroundColor: "#000000",
  color: "white",
  width: "100%",
  height: "4rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: "0",
  zIndex: "100",
});

const StyledText = styled("h1")({
  marginLeft: "3rem",
  fontFamily: "Helvetica",
});
