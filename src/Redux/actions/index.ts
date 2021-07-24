import { ActionType } from "../action-types-constants";
import { Todo } from "../type";

interface createToDoAction {
    type: typeof ActionType.CREATE_TODO
    payload: Todo
}

interface EditTodoActionType {
    type: typeof ActionType.EDIT_TODO
    payload: {id: string, desc: string}
}

interface ToggleTodoActionType {
  type: typeof ActionType.TOGGLE_TODO;
  payload: { id: string; isComplete: boolean };
}

interface DeleteTodoActionType {
  type: typeof ActionType.DELETE_TODO;
  payload: { id: string };
}

interface SelectTodoActionType {
  type: typeof ActionType.SELECT_TODO;
  payload: { id: string };
}

export type Action = createToDoAction | EditTodoActionType  | ToggleTodoActionType | DeleteTodoActionType | SelectTodoActionType