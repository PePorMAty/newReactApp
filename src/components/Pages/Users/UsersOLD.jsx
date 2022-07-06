/* import s from "./Users.module.css"
import * as axios from "axios"
import antonImg from "../../../images/Anton.jpg"
import lenaImg from "../../../images/Lena.jpg"

const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items)
        });
    }
  }
  

  return (
    <div>
      <div className={s.top}>
        <p className={s.title}>Users</p>
        <button className={s.userBtn} onClick={getUsers}>Get Users</button>
      </div>
      {props.users.map(u => <div key={u.id}>
        <div className={s.inner}>
          <div className={s.avatar}>
            <img className={s.img} src={
              u.photos.small != null ? u.photos.small : antonImg 
            } alt="" />
            <div className={s.name}>{u.name}</div>
            <div className={s.buttons}>
              {u.followed
                ? <button className={s.btn} 
                onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button className={s.btn} 
                onClick={() => { props.follow(u.id) }}>Follow</button>
              }
            </div>
          </div>
          <div className={s.user__info}>
            <div className={s.status}>{u.status != null ? u.status: 'Нет статуса'}</div>
            <div className={s.user__location}>
              <div className={s.user__country}>country: <span>Russia</span></div>
              <div className={s.user__city}>city: <span>Novosibirsk</span></div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default Users;
 */
/* [
  {
    id: 1, followed: true, fullName: "Anton Z.", status: "I am hungry:(", userImg: antonImg,
    location: {
      city: "Novosibirsk", country: "Russia"
    }
  },
  {
    id: 2, followed: true, fullName: "Elena K.", status: "I am funny:)", userImg: lenaImg,
    location: {
      city: "Minsk", country: "Belarus"
    }
  },
] */