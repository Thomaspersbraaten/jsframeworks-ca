import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavouriteContext = createContext([null, () => {}]);
export const FavouriteProvider = (props) => {
  const [favourite, setFavourite] = useLocalStorage("favourite", null);
  return <FavouriteContext.Provider value={[favourite, setFavourite]}>{props.children}</FavouriteContext.Provider>;
};
