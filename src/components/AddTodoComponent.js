import React from "react";
import withContext from '../context/withContext';

class AddTodoComponent extends React.Component {
  state = {
    userInput: "",
  };

  onClickHandler = () => {
    this.props.context.addTodo(this.state.userInput);
    this.setState({userInput:""})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button onClick={this.onClickHandler}>
          Add
        </button>
      </div>
    );
  }
}

export default withContext(AddTodoComponent);
