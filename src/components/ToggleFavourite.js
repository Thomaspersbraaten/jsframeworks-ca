// interface Posts {
//   data: string[];
//   favourite: string[];
// }

export default function ToggleFavourite(data, favourite) {
  const isAlreadyFavourite = favourite.some((post) => {
    return post.id === data.id;
  });
  if (isAlreadyFavourite) {
    const newArray = favourite.filter((postToRemove) => {
      return postToRemove.id !== data.id;
    });
    console.log(newArray);
    return newArray;
  } else {
    return [...favourite, data];
  }
}
