export default function Heading({ size, children, color = "black", className = "" }) {
  const VariableHeading = `h${size}`;
  const colorStyle = {
    color: { color },
  };

  return (
    <VariableHeading style={colorStyle} className={className}>
      {children}
    </VariableHeading>
  );
}
