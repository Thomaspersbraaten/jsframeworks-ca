import ListPosts from "../posts/ListPosts";

function Home() {
  document.title = "Home";
  return (
    <div>
      Home
      <ListPosts />
    </div>
  );
}

export default Home;
