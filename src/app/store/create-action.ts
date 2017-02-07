import {Action} from '@ngrx/store';

export function createAction(type: string, payload?: any): Action {
  return { type, payload };
}
