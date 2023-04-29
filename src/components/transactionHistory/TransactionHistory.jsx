import PropTypes from 'prop-types'
import css from './transactionHistory.module.css'


function TransactionHistory({ props }) {
    return (
        <table className={css.transaction__history}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {props.map(el => (
                    <tr key={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.protoTypes = {
    items: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
}

export default TransactionHistory