import React, { useState, useEffect } from "react";
import { UserCard } from "./UserCard";
import styles from "./RemoteConsumer.module.css";

function toFullName(rawUser) {
  return rawUser.first_name + " " + rawUser.last_name;
}
function toUserModelList(userResponse) {
  return userResponse.data.map(rawUser => ({
    id: rawUser.id,
    avatar: rawUser.avatar,
    email: rawUser.email,
    fullName: toFullName(rawUser)
  }));
}

export const RemoteConsumer = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState();
  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(userResponse => {
        setUserList(toUserModelList(userResponse));
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [props.url]);

  if (isLoading) {
    return <div>{props.url} - Loading...</div>;
  }
  if (!userList) {
    return <div>No users found!</div>;
  }
  return (
    <div className={styles.container}>
        <h1 className={styles.top}>User List</h1>
      <ul className={styles.list}>
        {userList.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
