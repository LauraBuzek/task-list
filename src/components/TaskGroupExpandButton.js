import React, { Component } from 'react';
import Arrow from "../images/Group.svg";
import '../css/ListItem.css';

class TaskGroupExpandButton extends Component {

  render() {
    return (
      <div className="ListItem-unexpand"> 
        <img 
          src={Arrow}
          alt="Expand Task Group"
          onClick={() =>
               this.props.updateViewFn(false, this.props.taskGroupName)}
        />
      </div>
    );
  }
}

export default TaskGroupExpandButton;