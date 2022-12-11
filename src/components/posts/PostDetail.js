import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants/api";
import FetchError from "../feedback/FetchError";

function PostDetail() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const { id } = useParams();
  const { slug } = useParams();

  // const url = API_URL + "/wp/v2/posts/" + id + "?_embed";
  const url = API_URL + "/wp/v2/posts?slug=" + slug + "&_embed";

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setPost(json[0]);
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
        <div>The post is loading</div>
      </>
    );
  }
  if (error) {
    return <FetchError variant="danger" message={error} />;
  }
  function createMarkup() {
    return { __html: `${post.content.rendered}` };
  }

  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <div className="details-post">
      <h1 className="details-post__header">{post.title.rendered}</h1>
      <img src={post._embedded["wp:featuredmedia"][0].source_url} className="details-post__image" />
      <MyComponent />

      <div>
        <p>Published:</p>
        {/* <FormatDate /> */}
      </div>
    </div>
  );
}

export default PostDetail;
