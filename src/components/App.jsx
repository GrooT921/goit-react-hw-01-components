import Profile from './UserCard/UserCard';
import Statistics from './UserStatistic/UserStatistics';
import FriendList from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistoryItems/TransactionHistoryItems';
import user from '../user.json';
import data from '../data.json';
import friends from "../friends.json";
import transactions from "../transactions.json";
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics
        stats={data}
      />

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />
    </div>

  );
};
