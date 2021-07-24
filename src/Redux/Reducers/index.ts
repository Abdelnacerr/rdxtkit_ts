import { combineReducers } from "redux";

import selectedTodoReducer from "../Reducers/selectedTodoReducer";
import todosReducer from "../Reducers/ToDoReducer";
import counterReducer from "../Reducers/counterReducer";

const allReducers = combineReducers({
	selectedTodo: selectedTodoReducer,
	todos: todosReducer,
	counter: counterReducer,
});

export default allReducers;
export type State = ReturnType<typeof allReducers>;
