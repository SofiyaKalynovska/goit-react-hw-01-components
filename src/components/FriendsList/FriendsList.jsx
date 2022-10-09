import { FriendList } from "./FriendsList.styled"
import FriendListItem from "./FriendsListItem"

export default function FriendsList({ friends }) {
  return (
    <FriendList>
      {friends.map(friend => 
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      )}
    </FriendList>
  )
}