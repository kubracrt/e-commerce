
import { useSelector } from "react-redux";
import { selectUserId } from "./index";
import { selectProductsDesc } from "../CartSlice";


export const useUser = () => useSelector((state) => state.auth.user);
export const useUserId = () => useSelector(selectUserId);
export const useProductsDescription=()=>useSelector(selectProductsDesc);
