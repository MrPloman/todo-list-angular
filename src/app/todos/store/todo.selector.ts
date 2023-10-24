import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../app.state';

const selectIAppState = createFeatureSelector<IAppState>('todos');

export const selectToDos = createSelector(selectIAppState, (state) => state);
