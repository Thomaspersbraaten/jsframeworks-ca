export default function CreateFavouriteClass(data, favourite) {
  const isFavorited = favourite.some((fav) => {
    return fav.id === data.id;
  });
  if (isFavorited) {
    return "fa-solid fa-heart";
  } else {
    return "fa-regular fa-heart";
  }
}
