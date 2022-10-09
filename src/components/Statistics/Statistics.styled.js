import styled from 'styled-components';
import color from 'random-hex-color'

export const StatisticsWrapper = styled.section`
background-color: #fff;
width: 300px;
border: 2px solid #CBC1C1;

`
export const StatisticsTitle= styled.h2`
  padding: 20px;
  text-align: center;
  font-size: large;
  text-transform: uppercase;
  color: #908989;
  
`;

export const StatisticsList= styled.ul`

  display: flex;
  justify-content: space-between;
  text-align: center;
  color: white;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  background-color: ${color};

  width: 60px;
  padding: 10px;
`;

export const DownloadFormat = styled.span`
  color: white;
  margin-bottom: 8px
`;

export const DownloadQuantity = styled.span`
  color: grey;
  font-size: large;
  font-weight: 600;
`;