import PropTypes from 'prop-types';
import css from './StatisticsStyles.module.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.statistics}>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
