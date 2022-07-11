import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../redux/messagesReducer";
import { connect } from "react-redux";
import { Messages } from "./Messages";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    peoplesData: state.messagesPage.peoplesData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
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

export const MessagesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages)