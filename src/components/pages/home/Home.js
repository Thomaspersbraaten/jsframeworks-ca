import ListPosts from "../../posts/ListPosts";
import Heading from "../../Heading";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    document.title = "Envposts | Home";
  }, []);
  return (
    <div>
      <Heading size="1">Welcome to the home page</Heading>
      <Heading size="2">Our lates posts</Heading>
      <ListPosts />
    </div>
  );
}

export default Home;
