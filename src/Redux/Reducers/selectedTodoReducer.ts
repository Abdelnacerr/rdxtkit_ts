import { ActionType } from "../action-types-constants";
import { Action } from "../actions";

const selectedTodoReducer = (state: string | null = null, action: Action) => {
	switch (action.type) {
		case ActionType.SELECT_TODO: {
			const { payload } = action;
			return payload.id;
		}
		default: {
			return state;
		}
	}
};

export default selectedTodoReducer;
