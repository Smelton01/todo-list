import React, { Component } from 'react';

 class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#f3f3f3",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ?  "line-through" : "none"
        };
    };

    componentDidMount = (props) => {
        console.log(this.props.todo);
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {" "}
                    {title}
                    <button style={btnStyle} onClick={this.props.delete.bind(this, id)}>
                        x
                    </button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "4px 8px",
    borderRadius: "70%",
    float: "right",
    cursor: "pointer"
}

export default TodoItem

