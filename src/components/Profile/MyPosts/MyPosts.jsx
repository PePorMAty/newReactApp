import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import React from "react"

export const MyPosts = (props) => {

  let postsELements = props.postsData.map((post) =>
    <Post message={post.message} key = {post.id}/>
  )

  let newPostElement = React.createRef();

  let onAddPost = () => {

    let text = newPostElement.current.value;

    if (newPostElement.current.value === '') {
      text = null;
    } else {
      props.addPost();
    }
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div>
      <div className={s.profile__post}>
        <textarea
        
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
          className={s.profile__textarea}
          placeholder="Send post">
        </textarea>
        <button className={s.profile__btn} onClick={onAddPost}>Send</button>
      </div>
      {postsELements}
    </div>
  )
}