import Statistic from "./Statistic";
import StatisticWithPercentage from "./StatisticWithPercentage";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all !== 0) {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <StatisticWithPercentage text="positive" value={positive} />
        </tbody>
      </table>
    );
  }
  return <div>No feedback given</div>;
};

export default Statistics;
