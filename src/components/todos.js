import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import styled, { css } from "styled-components";

import {
  addTodo,
  removeTodo,
  fetchTodos,
  abortfetchTodos,
  toggleTodo
} from "../redux/actions";

const Todos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  margin-block-end: 20px;
  margin-block-start: 20px;

  > button {
    background-color: #338723;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    width: 200px;
  }
`;

const Todo = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 10px 0;
  border-top: 1px solid #0002;
  :last-child {
    border-bottom: 1px solid #0002;
  }
  > * {
    margin: 0 5px;
  }
  > .done-btn > i {
    border: 1px solid #338723;
    border-radius: 50%;
    color: #338723;
  }
  > .delete-btn {
    margin-left: auto;

    > i {
      color: tomato;
    }
  }
  > button {
    background-color: transparent;
    border: none;
    outline: none;
    :hover {
      cursor: pointer;
    }
  }

  ${props =>
    props.completed &&
    css`
      color: #666;
      text-decoration: line-through;

      > .done-btn > i {
        color: #fff;
        background-color: #338723;
        border-radius: 50%;
      }
    `};
  ${props =>
    props.centered &&
    css`
      justify-content: center;
  `}
`;

class todos extends Component {
  handleAddTodo = () => {
    const text = this.input.value;
    const id = uuid();
    const todo = {
      text,
      id,
      completed: false
    };
    this.props.addTodo(todo);
    this.input.value = "";
  };

  removeTodo = () => {};

  render() {
    const {
      todos,
      removeTodo,
      fetchTodos,
      abortfetchTodos,
      toggleTodo
    } = this.props;
    return (
      <Todos>
        <h1>TODOS</h1>
        <div>
          <input type={"text"} ref={node => (this.input = node)} />
          <button onClick={this.handleAddTodo}>Add Todo</button>
        </div>
        <ul>
          {todos.length === 0 ? (
            <Todo centered>No Todos</Todo>
          ) : (
            todos.map((t, i) => (
              <Todo key={t.id} completed={t.completed}>
                {t.id !== "fetchingTodoItem" ? (
                  <>
                    <button
                      className={"done-btn"}
                      onClick={() => toggleTodo(i)}
                    >
                      <i className={"material-icons"}>done</i>
                    </button>
                    <span>{t.text}</span>
                    <button
                      className={"delete-btn"}
                      onClick={() => removeTodo(t.id)}
                    >
                      <i className={"material-icons"}>delete</i>
                    </button>
                  </>
                ) : (
                  <>
                    Loading more...
                    <button onClick={abortfetchTodos}>Cancel</button>
                  </>
                )}
              </Todo>
            ))
          )}
        </ul>
        <button onClick={fetchTodos}> Fetch More Todos </button>
      </Todos>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, fetchTodos, abortfetchTodos, toggleTodo }
)(todos);
