import { GET_ALL_EQUIPE } from "../action/type";
export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_EQUIPE:
      return action.payload;
    default:
      return state;
  }
};
