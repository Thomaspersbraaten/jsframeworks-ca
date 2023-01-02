import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants/api";
import FetchError from "../feedback/FetchError";
import Heading from "../Heading";
import Loader from "../Loader";
import PublishedDate from "../moment/PublishedDate";

function PostDetail() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  const url = API_URL + "/wp/v2/posts?slug=" + slug + "&_embed";

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setPost(json[0]);
        } else {
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
    return <Loader message="The post is loading...." />;
  }
  if (error) {
    return <FetchError variant="danger" message={error} />;
  }
  function createMarkup() {
    return { __html: `${post.content.rendered}` };
  }

  function MyComponent() {
    useEffect(() => {
      document.title = `Envposts | ${post.title.rendered}`;
    }, []);
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <div className="details-post">
      <Heading size="1">{post.title.rendered}</Heading>
      <img src={post._embedded["wp:featuredmedia"][0].source_url} className="details-post__image" alt={post._embedded["wp:featuredmedia"][0].alt_text} />
      <MyComponent />
      <div>
        <PublishedDate />
      </div>
    </div>
  );
}

export default PostDetail;
