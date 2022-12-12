// import { Link } from "react-router-dom";
// import PublishedDate from "../moment/PublishedDate";

// export default function PostListCard({ post }) {
//   // const [posts, setPosts] = useState([]);
//   // const [favourite, setFavourite] = useContext(FavouriteContext);
//   // const [myArray, updateMyArray] = useState([]);
//   // function toggleFavourite(data) {
//   //   const favouritedPost = posts.filter((post) => {
//   //     return post.id === data;
//   //   });
//   //   const thePost = favouritedPost[0];
//   //   console.log(thePost);

//   //   // updateMyArray((posts) => [...posts, thePost]);
//   //   updateMyArray([...myArray, thePost]);
//   //   setFavourite([...myArray, thePost]);

//   //   console.log(myArray);
//   // }
//   return (
//     <div className="post">
//       <Link to={`/detail/${post.slug}`} className="post__link">
//         <div>{post.title.rendered}</div>
//         <PublishedDate date={post.date} />
//       </Link>
//       <i className="fa-regular fa-heart" onClick={() => toggleFavourite(post.id)}></i>
//     </div>
//   );
// }
