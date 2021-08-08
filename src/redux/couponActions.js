import { getOdds, getuserCoupon } from "./couponReducers";
export const GET_ODDS = "GET_ODDS";
export const ADD_GAME = "ADD_GAME";
export const GET_COUPONS = "GET_COUPONS";
export const REMOVE_GAME = "REMOVE_GAME";

export const getGames = () => async (dispatch) => {
  const games = await getOdds();

  if (games instanceof Error) {
    return;
  }
  dispatch({
    type: GET_ODDS,
    payload: {
      games: games.data,
    },
  });
};

export const getCoupon = () => async (dispatch) => {
  const coupon = await getuserCoupon();

  if (coupon instanceof Error) {
    return;
  }
  dispatch({
    type: GET_COUPONS,
    payload: {
      coupon: coupon.data,
    },
  });
};

export const addGameToCoupon = (data) => ({
  type: ADD_GAME,
  payload: {
    game: data,
  },
});

export const removeGameFromCoupon = (data) => ({
  type: REMOVE_GAME,
  payload: {
    game: data,
  },
});
