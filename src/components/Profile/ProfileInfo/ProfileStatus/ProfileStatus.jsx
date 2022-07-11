import React from 'react'
import s from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  disableEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <div className={s.profile__status}>
          {!this.state.editMode &&
            <div className="">
              <p className={s.profile__text}
                onDoubleClick={this.activateEditMode}>
                {this.props.status || 'No status'}
              </p>
            </div>
          }
          {this.state.editMode &&
            <div className={s.input}>
              <input className={s.profile__input}
                onChange={this.onStatusChange}
                value={this.state.status}
                onBlur={this.disableEditMode}
                autoFocus={true}
                />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ProfileStatus;
