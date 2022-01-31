import s from "./FriendListItem.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={s.item}>
    <span className={isOnline ? s.active : s.disabled}></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

export default FriendListItem;
