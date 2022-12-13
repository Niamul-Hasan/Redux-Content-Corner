import { ADD_TO_DB } from "../ActionTypes/actionTypes";

const initialState = {
    contents: [],
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DB:
            return {
                ...state,
                contents: [...state.contents, action.payload]

            }

        default:
            return { ...state }
    }

}

export default contentReducer;