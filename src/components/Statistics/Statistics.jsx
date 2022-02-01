import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistic = ({ title, stats }) => (
  <section className={s.statistics}>
    {title.length && <h2 className="title">{title}</h2>}

    <ul className={s.statList}>
      {stats.map((stat) => (
        <li key={stat.id} className={s.item}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistic;
