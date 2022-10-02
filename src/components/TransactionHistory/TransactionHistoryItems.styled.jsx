import styled from '@emotion/styled'

export const TransactionHistoryTable = styled.table`
    width: 100%;
    text-align:center; 
`;

export const TransactionHistoryTr = styled.tr`
    :nth-of-type(even) {
        background: #ebf3f9;
    }
`;

export const TransactionHistoryTh = styled.th`
    font-weight: 500;
    padding: 5px;
    color: aliceblue;
    background-color: cornflowerblue;
`;
