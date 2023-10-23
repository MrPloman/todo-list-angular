import { createAction, props } from '@ngrx/store';
import { Filters } from './filter.reducers';

export const setFilter = createAction(
  '[Set Filter]',
  props<{ filter: Filters }>()
);
