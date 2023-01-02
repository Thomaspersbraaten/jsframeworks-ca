import { useEffect } from "react";
import Heading from "../../Heading";
import FavouriteList from "./FavouriteList";

export default function Favourites() {
  useEffect(() => {
    document.title = "Envposts | Your favourites";
  }, []);
  return (
    <>
      <Heading size="1">List of your favourites posts</Heading>
      <FavouriteList />
    </>
  );
}
