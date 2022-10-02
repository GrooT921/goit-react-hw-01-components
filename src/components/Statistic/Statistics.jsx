import PropTypes from "prop-types";
import { SectionUploadStats, UploadStatsTitle, StatList, StatListItem, StatLabel, StatPercentage } from './UserStatistic.styled';
import { getRandomHexColor } from '../../utils/randomColor';
export default function Statistics({title=null, stats }) {
    return (
        <SectionUploadStats>
            
            
            { title !== null && <UploadStatsTitle> {title}</UploadStatsTitle>}

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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    })),
};