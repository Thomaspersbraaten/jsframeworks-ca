import ListPosts from "../../posts/ListPosts";
import Heading from "../../Heading";
function Home() {
  document.title = "Home";
  return (
    <div>
      <Heading size="1">Welcome to the home page</Heading>
      <ListPosts />
    </div>
  );
}

export default Home;
