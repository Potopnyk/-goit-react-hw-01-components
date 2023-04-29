import PropTypes from 'prop-types';
import css from './statistics.module.css';
import color from './randomColor';
import StatisticsEl from './StatisticsEl';

export default function StatisticsList({ stats, title }) {
    return (
        <div className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stat_list}>
                {stats.map(item => (
                    <li
                        key={item.id}
                        className={css.item}
                        style={{
                            backgroundColor: color(),
                        }}>
                    <StatisticsEl
                        stats={item}
                    />
                </li>
            ))}
            </ul>
        </div>
    )
}

StatisticsList.propTypes = {
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        parcentage: PropTypes.number.isRequired
    }),
    title: PropTypes.string
}