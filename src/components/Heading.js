export default function Heading({ size, children, color = "black" }) {
  const VariableHeading = `h${size}`;
  const colorStyle = {
    color: { color },
  };

  return <VariableHeading style={colorStyle}> {children}</VariableHeading>;
}
