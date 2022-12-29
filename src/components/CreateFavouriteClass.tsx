export default function CreateFavouriteClass(data: any, favourite: any): string {
  const isFavorited: any = favourite.some((fav: any) => {
    return fav.id === data.id;
  });
  if (isFavorited) {
    return "fa-solid fa-heart";
  } else {
    return "fa-regular fa-heart";
  }
}
