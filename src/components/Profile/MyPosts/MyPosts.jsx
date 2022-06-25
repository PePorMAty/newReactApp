import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import React from "react"
import { 
  addPostActionCreator, 
  updateNewPostTextActionCreator 
} from "../../../redux/state"


export const MyPosts = (props) => {

  let postsELements = props.postsData.map((post) =>
    <Post message={post.message} />
  )

  let newPostElement = React.createRef();

  let addPost = () => {

    let text = newPostElement.current.value;

    if (newPostElement.current.value == '') {
      text = null;
    } else {
      //props.addPost(text);
      props.dispatch(addPostActionCreator());
    }
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text)
    /* let action ={
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text
    } */
    props.dispatch(updateNewPostTextActionCreator(text))
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
        <button className={s.profile__btn} onClick={addPost}>Send</button>
      </div>
      {postsELements}
    </div>
  )
}