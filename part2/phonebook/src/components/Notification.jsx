import PropTypes from "prop-types";

const getStyle = (isErrorMessage) => {
  const commonStyle = {
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  return isErrorMessage
    ? { ...commonStyle, color: "red" }
    : { ...commonStyle, color: "green" };
};

const Notification = ({ message, isErrorMessage }) => {
  if (message === null) {
    return null;
  }

  return <div style={getStyle(isErrorMessage)}>{message}</div>;
};

Notification.defaultProps = {
  message: null,
};

Notification.propTypes = {
  message: PropTypes.string,
  isErrorMessage: PropTypes.bool.isRequired,
};

export default Notification;
