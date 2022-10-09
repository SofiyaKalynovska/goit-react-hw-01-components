// import PropTypes from 'prop-types'
import {StatisticsWrapper, StatisticsTitle, StatisticsList, StatisticsListItem, DownloadFormat, DownloadQuantity } from "./Statistics.styled";

export default function Statistics({ title, stats}) {
  return (
    <StatisticsWrapper>
      {title ? <StatisticsTitle>{title}</StatisticsTitle> : ''}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsListItem key={stat.id}>
            <DownloadFormat>{stat.label}</DownloadFormat>
            <DownloadQuantity>{stat.percentage}%</DownloadQuantity>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsWrapper>
  );
};