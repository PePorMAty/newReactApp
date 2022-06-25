import s from "./Profile.module.css";
import postImg from "../../images/Masha.jpg";
import { MyPosts } from "./MyPosts/MyPosts";
import { Friends } from "./Friends/Friends";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
export const Profile = (props) => {

  return (
    <div>
      <div className={s.profile}>
        <img className={s.profile__bg} src="https://i.pinimg.com/originals/47/3a/67/473a67058d5406cbe0c1bf0e1035a1d2.jpg" alt="" />
        <div className={s.profile__inner}>
          <div className={s.profile__box}>
            <img className={s.profile__img} src={postImg} alt="" />
            <Friends />
          </div>
          <div className={s.profile__info}>
            <ProfileInfo />
            <MyPosts 
            postsData={props.profilePage.postsData}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
            />
          </div>
        </div>
        
      </div>
    </div>
  )
}