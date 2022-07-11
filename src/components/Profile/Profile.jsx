import s from "./Profile.module.css";
import MashaImg from "../../images/Masha.jpg";
import AntonImg from "../../images/Anton.jpg"
import { Friends } from "./Friends/Friends";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Preloader } from "../common/Preloader/Preloader";

export const Profile = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.profile}>
        <img className={s.profile__bg} src="https://i.pinimg.com/originals/47/3a/67/473a67058d5406cbe0c1bf0e1035a1d2.jpg" alt="" />
        <div className={s.profile__inner}>
          <div className={s.profile__box}>
            <img className={s.profile__img} src={
              props.profile.userId === 24674 ? MashaImg : AntonImg &&
                props.profile.photos.large != null ? props.profile.photos.large : AntonImg
            } alt="" />
            <Friends />
          </div>
          <div className={s.profile__info}>
            <ProfileInfo
              profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus} />
            <MyPostsContainer />
          </div>
        </div>

      </div>
    </div>
  )
}