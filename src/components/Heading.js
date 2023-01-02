// export default function Heading({ size, children, color = "black", className = "" }: Properties): JSX.Element {
//   const VariableHeading = `h${size}`;
//   const colorStyle = {
//     color: { color },
//   };

//   return (
//     <VariableHeading style={colorStyle} className={className}>
//       {children}
//     </VariableHeading>
//   );
// }

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
