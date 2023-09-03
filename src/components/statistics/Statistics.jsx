import PropTypes from 'prop-types';
import css from './Statistics.styled.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}

      <ul className={css['stat-list']}>
        {stats.map(element => (
          <li className={css.item} key={element.id}>
            <span className={css.label}>{elem.label}</span>
            <span className={css.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};