import Part from "./Part";

const Content = (props) => {
  const { parts } = props.course;
  const { name: part1, exercises: exercises1 } = parts[0];
  const { name: part2, exercises: exercises2 } = parts[1];
  const { name: part3, exercises: exercises3 } = parts[2];
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};

export default Content;
