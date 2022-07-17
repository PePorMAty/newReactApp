import React, { useEffect, useState } from 'react'
import s from "./ProfileStatus.module.css"


export const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      <div className={s.profile__status}>
        {!editMode &&
          <div className="">
            <p className={s.profile__text} onDoubleClick={activateEditMode}>
              {props.status || 'No status'}
            </p>
          </div>
        }
        {editMode &&
          <div className={s.input}>
            <input className={s.profile__input}
              autoFocus={true}
              onChange={onStatusChange}
              onBlur={deactivateEditMode}
              value={status}
            />
          </div>
        }
      </div>
    </div>
  )
}


export default ProfileStatus;
