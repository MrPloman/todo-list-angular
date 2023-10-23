import { createAction, props } from '@ngrx/store';

export const newToDoAction = createAction(
  '[Create ToDo]',
  props<{ id: number; title: string; done: boolean }>()
);
export const modifyToDoAction = createAction(
  '[Modify ToDo]',
  props<{ id: number; title: string; done: boolean }>()
);
export const setAllToDosStatus = createAction(
  '[Set all Done ToDo]',
  props<{ done: boolean }>()
);
export const deleteToDoAction = createAction(
  '[Delete ToDo]',
  props<{ id: number }>()
);
export const deleteToDosAlreadyDoneAction = createAction(
  '[Delete ToDos Already Done]'
);
