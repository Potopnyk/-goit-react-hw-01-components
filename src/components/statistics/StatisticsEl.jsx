import css from './statistics.module.css'
import PropTypes from 'prop-types';

export default function StatisticsEl(props) {
    const {
        stats
    } = props
    return (
    <div>
        <span className={css.label}>{stats.label} </span>
        <br></br>
        <span className={css.percentage}>{stats.percentage}%</span>
    </div>
    )
}


StatisticsEl.propTypes = {
stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
})
}