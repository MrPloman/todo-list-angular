import { createReducer, on } from '@ngrx/store';

import { setFilter } from './filter.actions';
export type Filters = 'all' | 'completed' | 'active';

export const initialFilterState: string = 'all';

export const filtersReducer = createReducer(
  initialFilterState,
  on(setFilter, (state, { filter }) => (state = filter))
);
