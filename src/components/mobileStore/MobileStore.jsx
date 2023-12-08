import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMobileData } from "../../store/slices/mobileStore-slice";
import Header from "../layout/Header";
import MobileList from "./MobileList";
const MobileStore = () => {
  const { mobiles, status } = useSelector((state) => state.mobileStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMobileData());
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? <p>loading</p> : ""}
      <Header />
      <MobileList mobiles={mobiles} />
    </>
  );
};

export default MobileStore;
