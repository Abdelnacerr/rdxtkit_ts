import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "../features/todoSlice.ts";
import selectedTodoSlice from "../features/selectedTodoSlice.ts";

export const store = configureStore({
	reducer: {
		todos: todosSlice,
		selectedTodo: selectedTodoSlice,
	},
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch