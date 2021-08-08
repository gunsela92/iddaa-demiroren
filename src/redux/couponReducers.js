import { GET_ODDS, ADD_GAME, GET_COUPONS, REMOVE_GAME } from "./couponActions";
import GameService from "../Services/game-services";
const initialState = {
  games: [],
  userCoupons: [],
};

export const getOdds = async () => {
  const response = await GameService.LOAD_GAMES();
  if (response) {
    return response;
  }
};

export const getuserCoupon = async () => {
  const response = await GameService.GET_COUPON();
  if (response) {
    return response;
  }
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ODDS:
      return {
        ...state,
        games: action.payload.games,
      };
    case ADD_GAME:
      return {
        ...state,
        userCoupons: [...state.userCoupons, action.payload.game],
      };
    case GET_COUPONS:
      return {
        ...state,
        userCoupons: action.payload.coupon,
      };
    case REMOVE_GAME:
      return {
        ...state,
        userCoupons: state.userCoupons.filter(
          (e) => e.id !== action.payload.game
        ),
      };
    default:
      return state;
  }
};

export default couponReducer;
