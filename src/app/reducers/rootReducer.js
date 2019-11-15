import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../features/TestArea/TestReducer";
import eventReducers from "../../features/event/eventReducers";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducers
});

export default rootReducer;
