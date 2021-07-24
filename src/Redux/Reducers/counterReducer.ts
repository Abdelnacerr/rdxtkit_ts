import { ActionType } from "../action-types-constants";
import { Action } from "../actions";

const counterReducer = (state: number = 0, action: Action) => {
	switch (action.type) {
		case ActionType.CREATE_TODO: {
			return state + 1;
		}
		case ActionType.EDIT_TODO: {
			return state + 1;
		}
		case ActionType.TOGGLE_TODO: {
			return state + 1;
		}
		case ActionType.DELETE_TODO: {
			return state + 1;
		}
		default: {
			return state;
		}
	}
};

export default counterReducer;
