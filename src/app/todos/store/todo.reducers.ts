import { createReducer, on } from '@ngrx/store';
import {
  deleteToDoAction,
  deleteToDosAlreadyDoneAction,
  modifyToDoAction,
  newToDoAction,
  setAllToDosStatus,
} from './todo.actions';
import { ToDo } from '../models/todo.model';

export const initialTodosState: ToDo[] = [];

export const toDosReducers = createReducer(
  initialTodosState,
  on(newToDoAction, (state, { id, title, done }) => [
    ...state,
    new ToDo(id, title, done),
  ]),
  on(modifyToDoAction, (state, { id, title, done }) => {
    return state.map((todo: ToDo) => {
      if (todo.id === id) {
        const toDoModified = new ToDo(id, title, done);
        return toDoModified;
      } else {
        return todo;
      }
    });
  }),

  on(setAllToDosStatus, (state, { done }) => {
    return state.map((todo: ToDo) => {
      const toDoModified = new ToDo(todo.id, todo.title, done);
      return toDoModified;
    });
  }),
  on(deleteToDoAction, (state, { id }) =>
    state.filter((todo: ToDo) => todo.id !== id)
  ),
  on(deleteToDosAlreadyDoneAction, (state) =>
    state.filter((todo: ToDo) => todo.done === false)
  )
);
