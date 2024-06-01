import { useDispatch } from "react-redux";
import { authRequest } from "./request";

const dispatch = useDispatch();

export const loginRequest = (email) => {
  dispatch(authRequest(email));

  return null;
};
