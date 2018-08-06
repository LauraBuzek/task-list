import React, { Component } from 'react';
import TaskGroupExpandButton from './TaskGroupExpandButton';
import '../css/ListItem.css';

class TaskGroupListItem extends Component {

  render() {
    return (
      <div className="ListItem">
        <TaskGroupExpandButton 
          updateViewFn={this.props.updateViewFn}
          taskGroupName={this.props.taskGroupName}
        />
        <div className="ListItem-titles">
          <p className="ListItem-title">
              {this.props.taskGroupName}
          </p>
          <p className="ListItem-subtitle">
              {this.props.done} OF {this.props.count} TASKS COMPLETE
          </p>
        </div>
      </div>
    );
  }
}

export default TaskGroupListItem;