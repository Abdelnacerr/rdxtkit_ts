import { ActionType } from "../action-types-constants";
import { v1 as uuid } from "uuid";

export const createTodoActionCreator = ({ desc }: { desc: string }) => {
	return {
		type: ActionType.CREATE_TODO,
		payload: {
			id: uuid(),
			desc,
			isComplete: false,
		},
	};
};

export const EditTodoActionCreator = ({
	id,
	desc,
}: {
	id: string;
	desc: string;
}) => {
	return {
		type: ActionType.EDIT_TODO,
		payload: { id, desc },
	};
};

export const toggleTodoActionCreator = ({
	id,
	isComplete,
}: {
	id: string;
	isComplete: boolean;
}) => {
	return {
		type: ActionType.TOGGLE_TODO,
		payload: { id, isComplete },
	};
};

export const deleteTodoActionCreator = ({ id }: { id: string }) => {
	return {
		type: ActionType.DELETE_TODO,
		payload: { id },
	};
};

export const selectTodoActionCreator = ({ id }: { id: string }) => {
	return {
		type: ActionType.SELECT_TODO,
		payload: { id },
	};
};
