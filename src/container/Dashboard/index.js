import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoActions } from "../../store/actions/index";
import { TextField, Paper, RaisedButton } from 'material-ui';
import './styles.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            todo: ""
        }
    }

    componentDidMount() {
        this.props.getTodos();
    }

    componentWillReceiveProps(np) {
        console.log(np);
    }

    handleAddTodo = () => {
        if (this.state.todo.trim() !== "") {
            this.props.addTodo(this.state.todo);
            return false;
        }
        this.setState({ todo: "" });
    }
    render() {
        return (
            <div className="todo-container">
                <Paper zDepth={2} className="paper-container">
                    <div className="add-todo">
                        <TextField
                            fullWidth={true}
                            value={this.state.todo}
                            floatingLabelText="Enter Todo"
                            onChange={(e, val) => this.setState({ todo: val })}
                        />
                        <div className="btn-container">
                            <RaisedButton primary={true} label="Add" onClick={this.handleAddTodo} />
                        </div>
                    </div>

                    <div className="display-todo">
                        {
                            this.props.todoObj.todos && this.props.todoObj.todos.map((d, ind) => {
                                return (
                                    <div key={ind}>
                                        <button onClick={() => this.props.deleteTodo(ind)}>Delete</button>
                                        {d}
                                    </div>
                                )
                            })
                        }
                    </div>
                </Paper>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        todoObj: state.TodoReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => dispatch(TodoActions.getTodosSuccess()),
        addTodo: (todo) => dispatch(TodoActions.addTodosSuccess(todo)),
        updateTodo: () => dispatch(TodoActions.updateTodosSuccess()),
        deleteTodo: (ind) => dispatch(TodoActions.deleteTodosSuccess(ind)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);