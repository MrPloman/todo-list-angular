import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../app.state';

const selectIIAppState = createFeatureSelector<IAppState>('todos');

export const selectToDos = createSelector(selectIIAppState, (state) => state);
