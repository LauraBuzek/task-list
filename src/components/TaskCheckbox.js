import React, { Component } from 'react';
import Checked from "../images/Completed.svg";
import Unchecked from "../images/Incomplete.svg";
import Locked from "../images/Locked.svg";
import '../css/ListItem.css';

class TaskCheckbox extends Component {
    renderCheckboxStatus = () => {
    if(this.props.taskComplete) {
      return (
        <img src={Checked} alt="Expand tasks" 
            onClick={
              () => this.props.updateTaskStatusFn(this.props.id, null)
            } />
      );
    } else if (this.props.taskComplete === false) {
      var currTimestamp = new Date();
      return (
        <img src={Unchecked} alt="Expand tasks" 
            onClick={
              () => this.props.updateTaskStatusFn(this.props.id, currTimestamp)
            } />
      );
    } else {
      return (
        <img src={Locked} alt="Expand tasks" />
      );
    }
  }

  render() {
    return(
      <div>
        {this.renderCheckboxStatus()}
      </div>
    );
  }
}

export default TaskCheckbox;