import PropTypes from 'prop-types';
import {
  ListItem,
  StatusOnline,
  StatusOffline,
  Avatar,
  Name,
} from './FriendsListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      {isOnline ? (
        <StatusOnline></StatusOnline>
      ) : (
        <StatusOffline></StatusOffline>
      )}
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};