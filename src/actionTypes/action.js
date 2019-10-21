import {RESTORE_NAME, CHANGE_NAME, GET_USERS} from "../actionTypes/actionTypes"

export const changeName = val => {
    return {
      type: CHANGE_NAME,
      name: val
    }
}

export const restoreName = val => {
    return {
      type: RESTORE_NAME,
      name: val
    }
}

export const getUsers = data => {
  return {
    type: GET_USERS,
    payload: data
  }
}