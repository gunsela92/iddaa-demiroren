import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames, getCoupon } from "../../redux/couponActions";
import Options from "../Headers/options";
import OddHeaders from "../Headers/odd-headers";
import Header from "../Headers/header";
import Odds from "./odd";
import CouponMenu from "../CouponMenu/coupon-menu";

const Games = () => {
  const dispatch = useDispatch();
  const stats = useSelector((e) => e.coupon);
  const games = stats.games;
  const userCoupons = stats.userCoupons;
  const [couponMenuActive, setcouponMenuActive] = useState(false);

  const fetchInfo = useCallback(() => {
    dispatch(getGames());
    dispatch(getCoupon());
  }, []);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  const changeMenuState = () => {
    setcouponMenuActive(!couponMenuActive);
  };

  return (
    <div className="wrapper">
      <Options />
      <Header />
      <OddHeaders />
      <Odds games={games} coupons={userCoupons} />
      <CouponMenu active={couponMenuActive} changeMenuState={changeMenuState} />
    </div>
  );
};

export default Games;
