import { ActionType } from "../action-types-constants";
import { Action } from "../actions";
import { Todo } from "../type";
import { v1 as uuid } from "uuid";

const todosInitialState: Todo[] = [
	{
		id: uuid(),
		desc: "Learn React",
		isComplete: true,
	},
	{
		id: uuid(),
		desc: "Learn Redux",
		isComplete: true,
	},
	{
		id: uuid(),
		desc: "Learn Redux-ToolKit",
		isComplete: false,
	},
];

const todosReducer = (state: Todo[] = todosInitialState, action: Action) => {
	switch (action.type) {
		case ActionType.CREATE_TODO: {
			const { payload } = action;
			return [...state, payload];
		}
		case ActionType.EDIT_TODO: {
			const { payload } = action;
			return state.map((todo) =>
				todo.id === payload.id ? { ...todo, desc: payload.desc } : todo
			);
		}
		case ActionType.TOGGLE_TODO: {
			const { payload } = action;
			return state.map((todo) =>
				todo.id === payload.id
					? { ...todo, isComplete: payload.isComplete }
					: todo
			);
		}
		case ActionType.DELETE_TODO: {
			const { payload } = action;
			return state.filter((todo) => todo.id !== payload.id);
		}
		default: {
			return state;
		}
	}
};

export default todosReducer;
