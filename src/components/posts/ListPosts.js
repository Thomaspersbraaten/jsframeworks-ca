import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../constants/api";
import { FavouriteContext } from "../context/FavouriteContext";
import FetchError from "../feedback/FetchError";
import Heading from "../Heading";
import Loader from "../Loader";
import PublishedDate from "../moment/PublishedDate";
import CreateFavouriteClass from "../CreateFavouriteClass";
import ToggleFavourite from "../ToggleFavourite";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const [favourite, setFavourite] = useContext(FavouriteContext);

  // If favourite is null\false, set to empty array.
  if (!favourite) {
    setFavourite([]);
  }

  const url = API_URL + "/wp/v2/posts?categories=19&per_page=100";

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          seterror("an error occured");
        }
      } catch (error) {
        seterror(error.toString());
      } finally {
        setloading(false);
      }
    }
    getPosts();
  }, []);

  if (loading) {
    return <Loader message="The posts are loading...." />;
  }
  if (error) {
    return <FetchError variant="danger" message={error} />;
  } else {
    return (
      <div className="post-container">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <Link to={`/detail/${post.slug}`} className="post__link">
              <Heading className="post__heading" size="2">
                {post.title.rendered}
              </Heading>
              <PublishedDate date={post.date} />
            </Link>
            <i
              className={CreateFavouriteClass(post, favourite)}
              onClick={() => {
                const updatedFavourites = ToggleFavourite(post, favourite);
                setFavourite(updatedFavourites);
              }}
            ></i>
          </div>
        ))}
      </div>
    );
  }
}
