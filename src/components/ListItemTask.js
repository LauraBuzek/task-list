import React, { Component } from 'react';
import TaskCheckbox from './TaskCheckbox';
import '../css/ListItem.css';

class ListItemTask extends Component {
  render() {
    return (
      <div className="ListItem">
        <TaskCheckbox 
          updateTaskStatusFn={this.props.updateTaskStatusFn}
          id={this.props.taskInfo.id}
          taskComplete={this.props.taskComplete}
        />
        <div className="ListItem-titles" id="task">
          <p className="ListItem-title">{this.props.taskInfo.task}</p>
        </div>
      </div>
    );
  }
}

export default ListItemTask;