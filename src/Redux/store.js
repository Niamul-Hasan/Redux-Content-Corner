import { createStore } from "redux";
import contentReducer from "./Reducers/ContentReducer";

export const store = createStore(contentReducer);