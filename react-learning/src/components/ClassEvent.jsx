import { Component } from "react";
class ClassEvnet extends Component{
  handleClick() {
    console.log('class based event handling')
  }
  render() {
    return (
    <div>
        This is a class Based component 2
        <button onClick={this.handleClick}>ClickMe</button>
      </div>
    )
  }
}
export default ClassEvnet;