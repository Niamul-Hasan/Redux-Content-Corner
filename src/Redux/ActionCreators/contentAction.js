import { ADD_TO_DB } from "../ActionTypes/actionTypes"

export const addToDB = (content) => {
    return {
        type: ADD_TO_DB,
        payload: content,
    }
};
