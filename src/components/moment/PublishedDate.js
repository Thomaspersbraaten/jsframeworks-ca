import moment from "moment";
export default function PublishedDate({ date }) {
  const published = moment(date).format("MMM Do YY");
  return <div className="published">Published: {published}</div>;
}
