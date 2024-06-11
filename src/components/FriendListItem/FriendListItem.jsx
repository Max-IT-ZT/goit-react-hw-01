import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p className={css.avatar}>{name}</p>
      <span>
        {isOnline ? (
          <p className={css.statusOn}>Online</p>
        ) : (
          <p className={css.statusOf}>Offline</p>
        )}
      </span>
    </li>
  );
}
