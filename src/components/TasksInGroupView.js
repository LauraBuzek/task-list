import React, { Component } from 'react';
import ListItemTask from './ListItemTask';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import '../css/App.css';

class TaskGroupPage extends Component {
  calculateTaskStatus = (tasks, tasksInGroup) => {
    var taskCompleteList = tasksInGroup.map(task => {
        var depIds = task.dependencyIds;
        var completed = (task.completedAt !== null);
        var allDependenciesComplete = tasks.filter(
          depTask => depIds.includes(depTask.id)
        ).every(
          dep => (dep.completedAt != null)
        )
        if (completed && allDependenciesComplete) {
          task['taskComplete'] = true
        } else if (!allDependenciesComplete) {
          task['taskComplete'] = null;
        } else {
          task['taskComplete'] = false;
        }
        return task;
      }
    )
    return taskCompleteList;
  }

  generateTasksInGroup = () => {
    var itemsInGroups = _.groupBy(this.props.taskGroupData, 'group')
    var tasksInGroup = itemsInGroups[this.props.whichTaskGroup]
    var tasksWithCompleteList = this.calculateTaskStatus(
                                      this.props.taskGroupData, tasksInGroup);
    var listItems = _.map(tasksWithCompleteList, taskInfo =>
      <ListItemTask 
        key={taskInfo.id} 
        taskInfo={taskInfo}
        taskComplete={taskInfo.taskComplete}
        updateTaskStatusFn={this.props.updateTaskStatusFn} 
      />
    )
    return listItems;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">Purchases</div>
          <Button 
            bsStyle="link" 
            className="App-link" 
            onClick={() => this.props.updateViewFn(true, null)}>
                ALL GROUPS
          </Button>
        </div>
        {this.generateTasksInGroup()}
      </div>
    );
  }
}

export default TaskGroupPage;