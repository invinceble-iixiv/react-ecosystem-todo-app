import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem.js";
import NewTodoForm from "./NewTodoForm.js";
import { removeTodo, markCompleteTodo } from "./actions";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovePressed, onMarkCompletePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onMarkCompletePressed={onMarkCompletePressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkCompletePressed: (text) => dispatch(markCompleteTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
