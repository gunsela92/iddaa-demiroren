import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames, getCoupon } from "../redux/couponActions";
import Options from "./options";
import OddHeaders from "./odd-headers";
import Header from "./header";
import Odds from "./odd";
import CouponMenu from "./CouponMenu/coupon-menu";

const Games = () => {
  const dispatch = useDispatch();
  const stats = useSelector((e) => e.coupon);
  const games = stats.games;
  const userCoupons = stats.userCoupons;
  const [couponMenuActive, setcouponMenuActive] = useState(false);

  useEffect(() => {
    dispatch(getGames());
    dispatch(getCoupon())
  }, []);

  const changeMenuState = () => {
    setcouponMenuActive(!couponMenuActive);
  };

  return (
    <div className="wrapper">
      <Options />
      <Header />
      <OddHeaders />
      <Odds games={games} coupons={userCoupons}/>
      <CouponMenu active={couponMenuActive} changeMenuState={changeMenuState} />
    </div>
  );
};

export default Games;
