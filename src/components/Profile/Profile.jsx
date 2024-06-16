import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.profileCard}>
        <img className={css.profileImg} src={image} alt={name} />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileText}>Followers</span>
          <span className={css.profileNumbers}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileText}>Views</span>
          <span className={css.profileNumbers}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileText}>Likes</span>
          <span className={css.profileNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
