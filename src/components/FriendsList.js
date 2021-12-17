import React from "react";

const FriendsList = ({ friends, isLoading }) => {
  if (friends === undefined) {
    return <div>Loading</div>;
  }

  return <div>bee</div>;
};

export default FriendsList;
