import axios from "axios";

const API_URL = "http://localhost:3004";

axios.defaults.headers.common["Content-Type"] = "application/json";

const LOAD_GAMES = () => {
  return axios.get(API_URL + "/games");
};

const BET_GAME = (data) => {
  return axios.post(API_URL + "/userCoupon", data);
}

const GET_COUPON = () => {
  return axios.get(API_URL + "/userCoupon")
}

const DELETE_COUPON = (data) => {
  return axios.delete(API_URL + "/userCoupon/" + data)
}

export default {
  LOAD_GAMES,
  BET_GAME,
  GET_COUPON,
  DELETE_COUPON
};
