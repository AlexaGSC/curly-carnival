import React from "react";

export const UserCard = props => {
  console.log(props);
  return (
    <li>
      <img src={props.user.avatar}></img>
      {props.user.fullName}
      <a href={`mailto:${props.user.email}`}>{props.user.email}</a>
    </li>
  );
};
