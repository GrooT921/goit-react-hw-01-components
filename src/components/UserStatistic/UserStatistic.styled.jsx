import styled from '@emotion/styled'

export const SectionUploadStats = styled.section`
    padding: 40px 0 40px;
`;

export const UploadStatsTitle = styled.h2`
    text-align: center;
    margin: 0 0 20px;
`;

export const StatList = styled.ul`
    display: flex;
    text-align: center;
`;

export const StatListItem = styled.li`
    width: 5%;
    padding: 15px;
    flex-basis: calc((100% - 5 * 15px) / 5);
    background-color: ${p => p.bgKek};
`;

export const StatLabel = styled.span`
    display: block;
    margin: 0 0 5px;
`;

export const StatPercentage = styled.span`
    display: block;
`;