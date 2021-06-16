const Header = (props) => {
  const { name: course } = props.course;
  return <h1>{course}</h1>;
};

export default Header;
