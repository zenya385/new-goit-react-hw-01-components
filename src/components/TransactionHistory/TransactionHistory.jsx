// import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <div className={s.wrapper}>
    <h2>TRANSACTIONS</h2>
    <table className={s.transaction}>
      <thead>
        <tr className={s.tead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={s.row} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// TransactionHistory.PropTypes = {};
export default TransactionHistory;
