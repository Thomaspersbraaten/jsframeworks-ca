import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../constants/api";
import { FavouriteContext } from "../context/FavouriteContext";
import FetchError from "../feedback/FetchError";
import Heading from "../Heading";
import Loader from "../Loader";
import PublishedDate from "../moment/PublishedDate";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const [favourite, setFavourite] = useContext(FavouriteContext);
  // const [myArray, updateMyArray] = useState(favourite);

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
          console.log(json);
          setPosts(json);
        } else {
          seterror("an error occured");
        }
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
    const isAlreadyFavourite = favourite.some((post) => {
      return post.id === data.id;
    });
    if (isAlreadyFavourite) {
      const newArray = favourite.filter((postToRemove) => {
        return postToRemove.id !== data.id;
      });
      setFavourite(newArray);
    } else {
      setFavourite([...favourite, data]);
    }
  }

  function createFavouriteClass(data) {
    const isFavorited = favourite.some((fav) => {
      return fav.id === data.id;
    });

    if (isFavorited) {
      return "fa-solid fa-heart";
    } else {
      return "fa-regular fa-heart";
    }
  }
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
              {/* <div>{post.title.rendered}</div> */}
              <Heading className="post__heading" size="2">
                {post.title.rendered}
              </Heading>
              <PublishedDate date={post.date} />
            </Link>
            <i className={createFavouriteClass(post)} onClick={() => toggleFavourite(post)}></i>
          </div>
        ))}
      </div>
    );
  }
}

// function toggleFavourite(data) {
//   const favouritedPost = posts.filter((post) => {
//     return post.id === data;
//   });
//   // console.log(post);
//   const thePost = favouritedPost[0];
//   // const isAlreadyFavourite = favourite.some((post) => {
//   //   return post.id === thePost.id;
//   // });
//   // console.log(data);
//   const isAlreadyFavourite = favourite.some((post) => {
//     return post.id === data;
//   });
//   // console.log(isAlreadyFavourite);
//   if (isAlreadyFavourite) {
//     // for now, remove from favourite later
//     const newArray = favourite.filter((postToRemove) => {
//       return postToRemove.id !== data;
//     });
//     // const toBeRemoved = removedFromFavourites[0];

//     updateMyArray(newArray);
//     setFavourite(newArray);
//   } else {
//     updateMyArray([...myArray, thePost]);
//     setFavourite([...myArray, thePost]);
//   }
//   // createFavouriteClass(data);
// }
// function toggleFavourite(data) {
//   const isAlreadyFavourite = favourite.some((post) => {
//     return post.id === data.id;
//   });
//   if (isAlreadyFavourite) {
//     const newArray = favourite.filter((postToRemove) => {
//       return postToRemove.id !== data.id;
//     });
//     updateMyArray(newArray);
//     setFavourite(newArray);
//   } else {
//     updateMyArray([...myArray, data]);
//     setFavourite([...myArray, data]);
//   }
// }
// return (
//   <div className="post-container">
//     {posts.map((post) => (
//       // <PostListCard post={post} key={post.id} />
//       <div className="post" key={post.id}>
//         <Link to={`/detail/${post.slug}`} className="post__link">
//           <div>{post.title.rendered}</div>
//           <PublishedDate date={post.date} />
//         </Link>

//         {/* <i className="fa-regular fa-heart" onClick={() => toggleFavourite(post.id)}></i> */}
//         <i
//           className={() => {
//             const isFavorited = favourite.find((fav) => {
//               return parseInt(fav.id) === post.id;
//             });
//             console.log(isFavorited);
//           }}
//           onClick={() => toggleFavourite(post.id)}
//         ></i>
//       </div>
//     ))}
//   </div>
// );
