const Total = (props) => {
  const { parts } = props.course;
  const { exercises: ex1 } = parts[0];
  const { exercises: ex2 } = parts[1];
  const { exercises: ex3 } = parts[2];
  return <p>Number of exercises {ex1 + ex2 + ex3}</p>;
};

export default Total;
