import uuid from 'uuid/v4';

import {
  ADD_TODO,
  REMOVE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  ABORT_FETCHING_TODO,
  TOGGLE_TODO
} from './actionTypes';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};

const requestTodos = () => ({
  type: REQUEST_TODOS
});

const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  payload: todos
});

let controller = null;
const initAbortController = () => {
  return new AbortController();
};

export const fetchTodos = () => {
  return (dispatch, getState) => {
    controller = initAbortController();
    const { signal } = controller;
    // eslint-disable-next-line no-console
    signal.addEventListener('abort', () => {
      dispatch({
        type: ABORT_FETCHING_TODO
      });
    });
    dispatch(requestTodos());
    fetch('https://jsonplaceholder.typicode.com/todos', { signal })
      // fetch('/fakeWaiter', { signal })
      .then(
        response => response.json(),
        // eslint-disable-next-line no-console
        error => console.log('Error: ', error)
      )
      // eslint-disable-next-line no-console
      .then(json => {
        const todosFromState = getState().todos;
        let currentTodosLength = todosFromState.length;
        if (
          todosFromState[currentTodosLength - 1] &&
          todosFromState[currentTodosLength - 1].id === 'fetchingTodoItem'
        ) {
          currentTodosLength--;
          const todos = json
            .slice(currentTodosLength, currentTodosLength + 5)
            .map(key => ({
              text: key.title,
              id: uuid(),
              completed: false
            }));
          // eslint-disable-next-line no-console
          console.log({ todos, currentTodosLength });
          dispatch(receiveTodos(todos));
        }
      });
  };
};

export const abortfetchTodos = () => {
  controller.abort();
};
