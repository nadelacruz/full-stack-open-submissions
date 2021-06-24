const Header = (props) => {
  const { name: course } = props.course;
  return <h2>{course}</h2>;
};

export default Header;
