import s from "./Post.module.css";
import postImg from "../../../../images/Masha.jpg";
export const Post = (props) => {
  return (
    <div>

      <div className={s.post}>
        <img className={s.post__img} src={postImg} alt="" />
        <p className={s.post__text}>
          {props.message}
        </p>
      </div>
      
    </div>
  )
}