import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants/api";
import FetchError from "../feedback/FetchError";

function PostDetail() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const url = API_URL + "/wp/v2/posts/" + id;

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          console.log(response);
          setError("Please try again");
        }
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, [url]);
  if (loading) {
    return (
      <>
        <Spinner />
        <div>Posts are loading</div>
      </>
    );
  }
  if (error) {
    return <FetchError variant="danger" message={error} />;
  }
  return <div>PostDetail {post.id}</div>;
}

export default PostDetail;
