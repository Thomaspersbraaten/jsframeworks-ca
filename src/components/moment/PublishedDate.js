import moment from "moment";

export default function PublishedDate(props) {
  const published = moment(props.date).format("MMM Do YY");
  return <p className="published">Published: {published}</p>;
}
