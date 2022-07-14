import { NavLink } from "react-router-dom";
import antonImg from "../../../images/Anton.jpg"
import s from "./Users.module.css"

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={s.top}>
        <p className={s.title}>Users</p>
        <div className={s.pagination}>
          {pages.map(p => {     
            return (       
              <p className={
                props.currentPage === p ? s.pagination__active : s.pagination__number
              }
                onClick={(e) => { props.onPageChanged(p) }}> {p}
              </p>
            )
          })}
        </div>
      </div>
      {props.users.map(u => <div key={u.id}>
        <div className={s.inner}>
          <div className={s.avatar}>
            <NavLink to={'/profile/' + u.id}>
              <img className={s.img} src={
                u.photos.small != null ? u.photos.small : antonImg
              } alt="" />
            </NavLink>
            <div className={s.name}>{u.name}</div>
            <div className={s.buttons}>
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.btn}
                  onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.btn}
                  onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </div>
          <div className={s.user__info}>
            <div className={s.status}>{u.status != null ? u.status : 'Нет статуса'}</div>
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