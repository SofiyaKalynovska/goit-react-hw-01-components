import PropTypes from 'prop-types';
import { FriendList } from './FriendsList.styled';
import FriendListItem from './FriendsListItem';

export default function FriendsList({ friends }) {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </FriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};