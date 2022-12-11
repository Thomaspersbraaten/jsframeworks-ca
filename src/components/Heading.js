export default function Heading(props) {
  const VariableHeading = `h${props.size}`;
  return <VariableHeading>{props.children}</VariableHeading>;
}
