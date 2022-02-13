import { createReducer, on } from '@ngrx/store';
import { setFilter, filtersValid } from './filter.actions';

export const initialState: string = 'all';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, action) => {
    return action.filterType;
  })
);

export function filterReducer(state: string | undefined, action: any) {
  return _filterReducer(state, action);
}
