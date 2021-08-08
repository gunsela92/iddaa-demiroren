import React, { useMemo, useCallback } from "react";
import GameService from "../../Services/game-services";
import { useDispatch } from "react-redux";
import {
  addGameToCoupon,
  removeGameFromCoupon,
} from "../../redux/couponActions";
import uuid from "react-uuid";

const Odds = React.memo((props) => {
  const dispatch = useDispatch();
  const userCoupons = useMemo(() => props.coupons, [props.coupons]);
  const games = useMemo(() => props.games, [props.games]);

  const getRandomNumber = useCallback(() => {
    return Math.floor(Math.random() * (41 - 26) + 26);
  }, []);

  const randomNumber = useMemo(getRandomNumber, [getRandomNumber]);

  const playBet = async (object, value, name) => {
    try {
      if (name === "H") {
        return;
      }
      let isPlayed = userCoupons.find((e) => e.gameId === object.id);
      if (!isPlayed) {
        let data = {
          gameId: object.id,
          game: object.game,
          betValue: value,
          betName: name,
          date: object.date,
          id: uuid(),
        };
        const res = await GameService.BET_GAME(data);
        if (res.status) {
          dispatch(addGameToCoupon(data));
        }
      } else {
        const res = await GameService.DELETE_COUPON(isPlayed.id);
        if (res.status) {
          dispatch(removeGameFromCoupon(isPlayed.id));
        }
      }
    } catch (e) {
      return e;
    }
  };

  function getOdds(object, data) {
    let isPlayed = userCoupons.find((e) => e.gameId === object.id);
    return Object.entries(data).map(([name, value], index) => {
      let element = (
        <div
          key={index}
          className={
            isPlayed
              ? isPlayed.betName === name
                ? "odds odd-active"
                : "odds"
              : "odds"
          }
          onClick={() => playBet(object, value, name)}
        >
          {!isNaN(value) ? value.toFixed(2) : value}
        </div>
      );
      return element;
    });
  }

  return (
    <React.Fragment>
      <div className="game-bets">
        {games &&
          games.map((e) => (
            <div key={e.id} className="game-grid">
              <div className="favorite">
                <button title="Favorilere Ekle" type="button"></button>
              </div>
              <div className="betMandatory">
                <div>{e.id}</div>
              </div>
              <div className="game-time">18:00</div>
              <div className="game-league">İngiltere 1. Ligi</div>
              <div className="game-teams">{e.game}</div>
              {getOdds(e, e.MS)}
              {getOdds(e, e.FH)}
              {getOdds(e, e.HANDICAP)}
              {getOdds(e, e.UPDOWN)}
              {getOdds(e, e.KG)}
              <button className="load-more">+{randomNumber}</button>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
});

export default Odds;
