import React, { Component } from 'react';
import TaskCheckbox from './TaskCheckbox';
import '../css/ListItem.css';
import Checked from "../images/Completed.svg";
import Unchecked from "../images/Incomplete.svg";
import Locked from "../images/Locked.svg";

class ListItemTask extends Component {


  render() {
    return (
      <div className="ListItem">
        <div className="ListItem-unexpand">
          <TaskCheckbox updateTaskStatusFn={this.props.updateTaskStatusFn}
              id={this.props.taskInfo.id} taskComplete={this.props.taskComplete}/>
        </div>
        <div className="ListItem-titles" id="task">
          <p className="ListItem-title">{this.props.taskInfo.task}</p>
        </div>
      </div>
    );
  }
}

export default ListItemTask;


/*<TaskCheckbox updateTaskStatusFn={this.props.updateTaskStatusFn}
              id={this.props.taskInfo.id} taskComplete={this.props.taskComplete}/>
          <img src={Checked} alt="Expand tasks" 
            onClick={
              () => this.props.updateTaskStatusFn(1, new Date())
            } />*/