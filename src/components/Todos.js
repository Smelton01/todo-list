import React, { Component } from 'react';
import TodoItem from "./TodoItem";
// import {useTransition, animated} from "react-spring";

 class Todos extends Component {
    render() {
        return this.props.todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delete={this.props.delete}/>
            )
        );
    }
}

export default Todos