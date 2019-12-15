import React from "react";
import styles from "./RemoteConsumer.module.css";

export const UserCard = props => {
  console.log(props);
  return (
    <li>
      <img src={props.user.avatar} className={styles.photo}></img><br/>
      {props.user.fullName}<br/>
      <a href={`mailto:${props.user.email}`}>{props.user.email}</a><br/>
    </li>
  );
};
