import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendList/friends.json';
import transactions from './transactionHistory/transactions.json';
import css from './container.css'

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        key={user.tag}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics
          stats={data}
          title="Upload stats"
      />

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        props={transactions}
      />

    </div>
  )
}

