import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouriteContext } from "../../context/FavouriteContext";
import Heading from "../../Heading";
import PublishedDate from "../../moment/PublishedDate";
import NoFavourites from "./NoFavourites";

export default function FavouriteList() {
  const [favourite, setFavourite] = useContext(FavouriteContext);

  console.log(favourite);

  function toggleFavourite(data) {
    const isAlreadyFavourite = favourite.some((post) => {
      return post.id === data.id;
    });
    if (isAlreadyFavourite) {
      const newArray = favourite.filter((postToRemove) => {
        return postToRemove.id !== data.id;
      });
      setFavourite(newArray);
    } else {
      setFavourite([...favourite, data]);
    }
  }
  function createFavouriteClass(data) {
    const isFavorited = favourite.some((fav) => {
      return fav.id === data.id;
    });

    if (isFavorited) {
      return "fa-solid fa-heart";
    } else {
      return "fa-regular fa-heart";
    }
  }
  if (favourite.length === 0) {
    return <NoFavourites variant="info" />;
  } else {
    return (
      <div className="post-container">
        {favourite.map((post) => (
          <div className="post" key={post.id}>
            <Link to={`/detail/${post.slug}`} className="post__link">
              {/* <div>{post.title.rendered}</div> */}
              <Heading size="2">{post.title.rendered}</Heading>

              <PublishedDate date={post.date} />
            </Link>

            <i className={createFavouriteClass(post)} onClick={() => toggleFavourite(post)}></i>
          </div>
        ))}
      </div>
    );
  }
}
