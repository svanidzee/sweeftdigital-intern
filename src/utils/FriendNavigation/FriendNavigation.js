import { createContext, useCallback, useMemo, useState } from "react";

const FriendNavigationContext = createContext([]);

export default FriendNavigationContext;

export const FriendNavigationProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  const setNextFriend = useCallback((user) => {
    setFriends((list) => [...list, user]);
  }, []);

  const contextValue = useMemo(
    () => ({
      friends,
      setNextFriend,
    }),
    [friends]
  );

  return (
    <FriendNavigationContext.Provider value={contextValue}>
      {children}
    </FriendNavigationContext.Provider>
  );
};
