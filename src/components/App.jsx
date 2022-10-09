import user from './Profile/user.json';
import { ProfileInfo } from './Profile/Profile';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendsList/friends.json'
import FriendsList from './FriendsList/FriendsList';
import transactions from './TransactionHistory/transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <ProfileInfo
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />;

      <TransactionHistory items={transactions} />;
    </>
  );
};

