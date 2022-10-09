import styled from 'styled-components';


export const TransactionsTable = styled.table`
  width: 600px;
  box-shadow: 1px 5px 8px 3px #888888;
  margin-left: 30px;
`;
export const TransactionsTableHeaders = styled.thead`
  font-size: large;
  font-weight: 700;
  height: 50px;
  color: white;
  background-color: #47C2D0;
`;

export const TransactionsTableItem = styled.tr`
  height: 50px;
  text-transform: capitalize;
  :nth-child(odd){
    background-color: #F3F2F2;
}
`;

export const TransactionsTableData = styled.td`
  width: 200px;
  padding-left: 70px;
  border: 1px solid #E8E5E5;
`;

