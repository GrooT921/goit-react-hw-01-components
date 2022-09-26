import PropTypes from "prop-types";
import { SectionUploadStats, UploadStatsTitle, StatList, StatListItem, StatLabel, StatPercentage } from './UserStatistic.styled';
import { getRandomHexColor } from '../utils/randomColor';
export default function Statistics({ stats }) {
    return (
    <SectionUploadStats>
        <UploadStatsTitle>Upload stats</UploadStatsTitle>

        <StatList>
            {stats.map(stat =>
            <StatListItem key={stat.id} bgKek={getRandomHexColor()}>
                <StatLabel>{stat.label}</StatLabel>
                <StatPercentage>{stat.percentage}%</StatPercentage>
            </StatListItem>
            )}   
  
        </StatList>
    </SectionUploadStats>
    )
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string,
        percentage: PropTypes.number,
        id: PropTypes.string,
    })),
};