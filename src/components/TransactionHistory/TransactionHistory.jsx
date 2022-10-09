// import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TransactionsTableHeaders,
  TransactionsTableItem,
  TransactionsTableData,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionsTable>
      <TransactionsTableHeaders>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionsTableHeaders>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionsTableItem key={id}>
            <TransactionsTableData>{type}</TransactionsTableData>
            <TransactionsTableData>{amount}</TransactionsTableData>
            <TransactionsTableData>{currency}</TransactionsTableData>
          </TransactionsTableItem>
        ))}
      </tbody>
    </TransactionsTable>
  );
}
