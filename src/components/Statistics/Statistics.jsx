/* eslint-disable react/no-typos */

import PropTypes from "prop-types";

const Statistic = ({ stats }) => (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
      <li className="item">
        <span className="label">.docx</span>
        <span className="percentage">4%</span>
      </li>
    </ul>
  </section>
);

Statistic.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default Statistic;
