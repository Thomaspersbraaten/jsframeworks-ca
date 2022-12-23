import moment from "moment";
export default function PublishedDate({ date }) {
  const published = moment(date).format("MMM Do YY");
  return <p className="published">Published: {published}</p>;
}
