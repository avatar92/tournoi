import axios from "axios";
import { GET_ALL_EQUIPE } from "./type";

export const getAllEquipe = () => dispatch => {
  axios
    .get("api/all")
    .then(res => dispatch({ type: GET_ALL_EQUIPE, payload: res.data }));
};
