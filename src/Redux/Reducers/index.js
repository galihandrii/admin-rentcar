import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { listcarReduceer } from "./listcarReducer";

const rootReducer = combineReducers({
auth:authReducer,
listCar: listcarReduceer,
})

export default rootReducer;