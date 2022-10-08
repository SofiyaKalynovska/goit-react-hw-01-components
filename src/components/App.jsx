import user from './Profile/user.json';
import { ProfileInfo } from './Profile/Profile';

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
    </>
  );
};

