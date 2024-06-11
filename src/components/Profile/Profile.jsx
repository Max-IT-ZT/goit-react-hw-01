import css from "./Profile.module.css";
export default function Profile(props) {
  return (
    <div className={css.container}>
      <div className={css.profileCard}>
        <img className={css.profileImg} src={props.image} alt={props.name} />
        <p className={css.profileName}>{props.name}</p>
        <p className={css.profileTag}>@{props.tag}</p>
        <p className={css.profileLocation}>{props.location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileText}>Followers</span>
          <span className={css.profileNumbers}>{props.stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileText}>Views</span>
          <span className={css.profileNumbers}>{props.stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileText}>Likes</span>
          <span className={css.profileNumbers}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
