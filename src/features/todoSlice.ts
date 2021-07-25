import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";

import { Todo } from "../type";

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

const todosSlice = createSlice({
	name: "todos",
	initialState: todosInitialState,
	reducers: {
		create: {
			reducer: (
				state,
				{
					payload,
				}: PayloadAction<{ id: string; desc: string; isComplete: boolean }>
			) => {
				state.push(payload);
			},
			prepare: ({ desc }: { desc: string }) => ({
				payload: {
					id: uuid(),
					desc,
					isComplete: false,
				},
			}),
		},
		edit: (state, { payload }: PayloadAction<{ id: string; desc: string }>) => {
			const todoToEdit = state.find((todo) => todo.id === payload.id);
			if (todoToEdit) {
				todoToEdit.desc = payload.desc;
			}
		},
		toggle: (
			state,
			{ payload }: PayloadAction<{ id: string; isComplete: boolean }>
		) => {
			const todoToToggle = state.find((todo) => todo.id === payload.id);
			if (todoToToggle) {
				todoToToggle.isComplete = payload.isComplete;
			}
		},
		remove: (state, { payload }: PayloadAction<{ id: string }>) => {
			const index = state.findIndex((todo) => todo.id === payload.id);
			if (index !== -1) {
				state.splice(index, 1);
			}
		},
	},
});

export const counterSlice = createSlice({
	name: "counter",
	initialState: 0,
	reducers: {},
	extraReducers: {
		[todosSlice.actions.create.type]: (state) => state + 1,
		[todosSlice.actions.edit.type]: (state) => state + 1,
		[todosSlice.actions.toggle.type]: (state) => state + 1,
		[todosSlice.actions.remove.type]: (state) => state + 1,
	},
});

export const {
	create: createTodoActionCreator,
	edit: editTodoActionCreator,
	toggle: toggleTodoActionCreator,
	remove: deleteTodoActionCreator,
} = todosSlice.actions;

export default todosSlice.reducer;
