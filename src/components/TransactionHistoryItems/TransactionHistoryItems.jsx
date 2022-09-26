import PropTypes from "prop-types";
import {TransactionHistoryTable, TransactionHistoryTh, TransactionHistoryTr } from './TransactionHistoryItems.styled';
export default function TransactionHistory({ items }) {
    return (
        <TransactionHistoryTable>
        <thead >
            <tr>
                <TransactionHistoryTh>Type</TransactionHistoryTh>
                <TransactionHistoryTh>Amount</TransactionHistoryTh>
                <TransactionHistoryTh>Currency</TransactionHistoryTh>
            </tr>
        </thead>

        <tbody>
            {items.map(item =>
            <TransactionHistoryTr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </TransactionHistoryTr>
           )}
        </tbody>
        </TransactionHistoryTable>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    }))
};