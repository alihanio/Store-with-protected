import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMobileData } from "../../store/slices/mobileStore-slice";
import Header from "../layout/Header";
import MobileList from "./MobileList";
import { styled } from "@mui/material";

const MobileStore = () => {
  const { mobiles, status } = useSelector((state) => state.mobileStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMobileData());
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? <StyledLoading>loading...</StyledLoading> : ""}
      <Header />
      <MobileList mobiles={mobiles} />
    </>
  );
};

export default MobileStore;

const StyledLoading = styled("p")({
  fontSize: "2rem",
  position: "absolute",
  top: "50%",
  left: "50%",
});
