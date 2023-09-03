import PropTypes from 'prop-types';
import css from './FriendList.styled.css';
// import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          online={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}

export default function FriendListItem({ avatar, name, online }) {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${online && css.online}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="40" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
