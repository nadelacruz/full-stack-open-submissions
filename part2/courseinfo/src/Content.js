import Part from "./Part";

const Content = (props) => {
  const { parts } = props.course;

  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        );
      })}
    </>
  );
};

export default Content;
