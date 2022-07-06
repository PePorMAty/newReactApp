import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../redux/messagesReducer";
import { connect } from "react-redux";
import { Messages } from "./Messages";

const mapStateToProps = (state) => {
  return {
    peoplesData: state.messagesPage.peoplesData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (messageText) => {
      dispatch(updateNewMessageTextActionCreator(messageText))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages)