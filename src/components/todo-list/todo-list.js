import React, { Component } from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const elements = todos.map((el) => {
        const { id, ...itemProps } = el;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });
    return (
        <div>
            <ul className="list-group todo-list">{elements}</ul>
        </div>
    );
};
export default TodoList;
