import PropTypes, { objectOf } from 'prop-types';
import {
  Wrapper,
  UserDiscription,
  Avatar,
  DiscriptionItem,
  UserName,
  PageStatistic,
  StatisticItem,
  StatisticQuantity,
  StatisticName,
} from './Profile.styled';

export const ProfileInfo = ({ avatar, tag, username, location, stats }) => {
  return (
    <Wrapper>
      <UserDiscription>
        <Avatar src={avatar} alt={username} className="avatar" />
        <UserName>{username}</UserName>
        <DiscriptionItem className="tag">@{tag}</DiscriptionItem>
        <DiscriptionItem className="location">{location}</DiscriptionItem>
      </UserDiscription>

      <PageStatistic>
        <StatisticItem>
          <StatisticName className="label">Followers</StatisticName>
          <StatisticQuantity className="quantity">
            {stats.followers}
          </StatisticQuantity>
        </StatisticItem>

        <StatisticItem>
          <StatisticName className="label">Views</StatisticName>
          <StatisticQuantity className="quantity">
            {stats.views}
          </StatisticQuantity>
        </StatisticItem>

        <StatisticItem>
          <StatisticName className="label">Likes</StatisticName>
          <StatisticQuantity className="quantity">
            {stats.likes}
          </StatisticQuantity>
        </StatisticItem>
      </PageStatistic>
    </Wrapper>
  );
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: objectOf(PropTypes.number),
};
