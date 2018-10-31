import {
  ADD_TODO,
  REMOVE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  ABORT_FETCHING_TODO,
  TOGGLE_TODO
} from './actionTypes';

const todoReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_TODO:
      return [...state, payload];
    case TOGGLE_TODO:
      return [
        ...state.slice(0, payload),
        Object.assign(state[payload], {
          completed: !state[payload].completed
        }),
        ...state.slice(payload + 1)
      ];
    case REMOVE_TODO:
      return state.filter(t => t.id !== payload);
    case REQUEST_TODOS:
      return [...state, { id: 'fetchingTodoItem', isFetching: true }];
    case RECEIVE_TODOS:
      return [...state.filter(e => e.id !== 'fetchingTodoItem'), ...payload];
    case ABORT_FETCHING_TODO:
      return [...state.filter(e => e.id !== 'fetchingTodoItem')];
    default:
      return state;
  }
};

export default todoReducer;
