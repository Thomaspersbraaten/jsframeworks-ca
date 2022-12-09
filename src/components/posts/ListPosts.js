import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../constants/api";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  const url = API_URL + "/wp/v2/posts";

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
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

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          {post.title.rendered}
        </Link>
      ))}
    </div>
  );
}
