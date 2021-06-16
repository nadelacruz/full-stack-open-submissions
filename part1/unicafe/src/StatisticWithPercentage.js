const StatisticWithPercentage = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
  );
};

export default StatisticWithPercentage;
