import moment from "moment";

interface Property {
  date: Date;
}
export default function PublishedDate(props: Property): JSX.Element {
  const published: string = moment(props.date).format("MMM Do YY");
  return <p className="published">Published: {published}</p>;
}
