import { useContext } from "react";
import CoffeContext from "../context/CoffeProvider";

export default function useCoffe() {
    return useContext(CoffeContext)
}