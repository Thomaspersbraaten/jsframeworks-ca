import { useContext, useEffect, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { Link } from "react-router-dom";
import { API_URL } from "../constants/api";
import { FavouriteContext } from "../context/FavouriteContext";
import PublishedDate from "../moment/PublishedDate";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const [favourite, setFavourite] = useContext(FavouriteContext);
  const [myArray, updateMyArray] = useState([]);

  const url = API_URL + "/wp/v2/posts?categories=19&per_page=100";

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setPosts(json);
      } catch (error) {
        console.log(error);
        seterror(error.toString());
      } finally {
        setloading(false);
      }
    }
    getPosts();
  }, []);

  function toggleFavourite(data) {
    const favouritedPost = posts.filter((post) => {
      return post.id === data;
    });
    const thePost = favouritedPost[0];
    console.log(thePost);

    // updateMyArray((posts) => [...posts, thePost]);
  }

  return (
    <div className="post-container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Link to={`/posts/${post.slug}`} className="post__link">
            <div>{post.title.rendered}</div>
            <PublishedDate date={post.date} />
          </Link>

          <i className="fa-regular fa-heart" onClick={() => toggleFavourite(post.id)}></i>
        </div>
      ))}
    </div>
  );
}
