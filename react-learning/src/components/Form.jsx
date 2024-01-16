import { Component } from "react";
class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    age: "",
  };
  handleFirstNameChange = (event) => {
    this.setState({
      firstname: event.target.value
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value
    });
  };
  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fname: this.state.firstname,
      lname: this.state.lastname,
      age: this.state.age
    });
  };
  render() {
    return (
      <div>
        Form
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleFirstNameChange}
            type="text"
            value={this.state.firstname}>
          </input>
              <br/>
          <input
            onChange={this.handleLastNameChange}
            type="text"
            value={this.state.lastname}>
          </input>
          <br />
          <input
            onChange={this.handleAgeChange}
            type="text"
            value={this.state.age}
          >
          </input>
          <br/>
          <button type="submit" name="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;