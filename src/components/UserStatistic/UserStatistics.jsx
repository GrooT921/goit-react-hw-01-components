import PropTypes from "prop-types";
import css from './UserStatistic.module.css';
import { getRandomHexColor } from '../utils/randomColor';
export default function Statistics({ stats }) {
    return (
        <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

    <ul className={css.stat_list}>
        {stats.map(stat =>
        <li className={css.item} style={{backgroundColor: `#${getRandomHexColor()}`}} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
        </li>
       )}   
  
    </ul>
</section>
    )
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string,
        percentage: PropTypes.number,
        id: PropTypes.string,
    })),
};