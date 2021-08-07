import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CouponFooter from "./coupon-footer"
import GameService from "../../Services/game-services";
import { removeGameFromCoupon } from "../../redux/couponActions";

const CouponMenu = (props) => {
  const dispatch = useDispatch();
  const userCoupons = useSelector((e) => e.coupon.userCoupons);
  const [selectedPrice, setSelectedPrice] = useState(3);
  const isActive = props.active;

  function multiply(arr) {
    var sum = 1;
    for (var i = 0; i < arr.length; i++) {
      sum = sum * arr[i].betValue;
    }
    return sum.toFixed(2);
  }

  function getOptions() {
    let options = [];
    for (let index = 3; index <= 100; index++) {
      options.push(index);
    }
    return options;
  }

  const handlePrice = (e) => {
    setSelectedPrice(parseInt(e.target.value))
  }

  const removeGame = async (id) => {
    try {
      const res = await GameService.DELETE_COUPON(id);
        if (res.status) {
          dispatch(removeGameFromCoupon(id));
        }
    } catch (e) {
      return e;
    }
  }

  return (
    <div className={!isActive ? "coupons-wrapper" : "coupons-wrapper active"}>
      <header className={!isActive ? "coupon-menu-header" : "coupon-menu-header active"} onClick={() => props.changeMenuState()}>
        <div className="mini-details">
          <h6>Kuponum</h6>
          <p>T.Oran: {multiply(userCoupons)}</p>
        </div>
        <div className="match-count">{userCoupons.length} Maç</div>
        <button></button>
      </header>
      <section className="match-list">
        {userCoupons.map((e) => (
          <div className="match-grid">
            <div className="match-row">
              <div className="slip">B</div>
              <p>
                {e.game}
                <time>{e.date}</time>
              </p>
              <div className="remove-game" onClick={() => removeGame(e.id)}></div>
            </div>
            <div className="match-row">
              <div className="match-mbs">
                <span>3</span>
              </div>
              <div className="odd-name">{e.betName}</div>
              <div className="odd-value">
                <p>{e.betValue.toFixed(2)}</p>
              </div>
              <svg></svg>
            </div>
          </div>
        ))}
      </section>
      <section className="coupon-rates">
        <div className="option-line">
          <div>
            <label>Sistem</label>
            <select className="system">
              <option value="A">Seçiniz</option>
            </select>
          </div>

          <div>
            <label>Kupon Adedi</label>
            <select className="system">
              <option value="A">1</option>
            </select>
          </div>

          <div>
            <label>Misli</label>
            <select className="system" onChange={event => handlePrice(event)}>
              {getOptions().map(o => (
                <option value={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="odd-line">
          <div>Kolon :</div>
          <div>1</div>
        </div>
        <div className="odd-line">
          <div>Kupon Bedeli :</div>
          <div>{selectedPrice},00 TL</div>
        </div>
        <div className="odd-line">
          <div>Toplam Oran :</div>
          <div>{multiply(userCoupons)}</div>
        </div>
        <div className="odd-line">
          <div>Maksimum Kazanç :</div>
          <div className="amount">{(selectedPrice * multiply(userCoupons)).toFixed(2)} TL</div>
        </div>

        <div className="odd-line">
          <button className="play">HEMEN OYNA</button>
        </div>
        <div className="odd-line">
          <button className="short-code">Kısa Kod ile Oyna</button>
        </div>
      </section>
      <CouponFooter />
    </div>
  );
};

export default CouponMenu;
