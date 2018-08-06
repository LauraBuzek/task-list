import React, { Component } from 'react';
import TaskGroupListItem from './TaskGroupListItem';
import _ from 'lodash';
import '../css/App.css';


class AllTaskGroupsView extends Component {

  generateTaskGroups() {
    var tasksInGroups = _.groupBy(this.props.taskGroupData, 'group')
    var taskGroups = Object.keys(tasksInGroups).map((name) => {
        var tasksInGroup = tasksInGroups[name]
        var count = tasksInGroup.length
        var done = tasksInGroup.filter(task =>
          task["completedAt"] != null
        ).length
        return([name, count, done])
      }
    )
    return ( taskGroups.map(taskData => 
      <TaskGroupListItem 
        key={taskData[0]}
        taskGroupName={taskData[0]} 
        count={taskData[1]}
        done={taskData[2]}
        updateViewFn={this.props.updateViewFn}
      />
    ))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">Things To Do</div>
        </div>
        {this.generateTaskGroups()}
      </div>
    );
  }
}

export default AllTaskGroupsView;
