import { createAction, props } from '@ngrx/store';

export type filtersValid = 'all' | 'active' | 'completed';

export const setFilter = createAction(
  '[Filter] All',
  props<{ filterType: filtersValid }>()
);
