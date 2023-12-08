import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userData } = useSelector((state) => state.signIn);
  const { username, lastName, image, gender, id, firstName, email } = userData;

  return (
    <StyledContainer key={id}>
      <StyledHeader>First Name: {firstName}</StyledHeader>
      <StyledPTag>Last Name: {lastName}</StyledPTag>
      <StyledPTag>Username: {username}</StyledPTag>
      <StyledImage src={image} alt="Profile" />
      <StyledPTag>Email: {email}</StyledPTag>
      <StyledPTag>Gender: {gender}</StyledPTag>
      <StyledSpan>ID: {id}</StyledSpan>
    </StyledContainer>
  );
};

export default Profile;

const StyledContainer = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  boxSizing: "border-box",
  textAlign: "center",
  gap: "15px",
});

const StyledPTag = styled("p")({
  margin: 0,
});

const StyledHeader = styled("h1")({
  fontSize: "24px",
  margin: 0,
});

const StyledSpan = styled("span")({
  fontWeight: "bold",
  fontSize: "16px",
});
const StyledImage = styled("img")({
  width: "150px",
  height: "150px",
  objectFit: "cover",
  borderRadius: "50%",
  border: "2px solid #fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});
