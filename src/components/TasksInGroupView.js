import React, { Component } from 'react';
import ListItemTask from './ListItemTask';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import '../css/App.css';

class TaskGroupPage extends Component {
  constructor() {
    super();

  }
  calculateTaskStatus = (tasks, tasksInGroup) => {
    return (
      _.map(tasksInGroup, task => {
          var depIds = task.dependencyIds;
          var taskId = task.id;
          var completed = (task.completedAt !== null);
          var dependencyTasks = _.filter(tasks, depTask => {
              depIds.includes(depTask.id)
            }
          )
          var allDependenciesComplete = _.reduce(dependencyTasks, (accum, dep) => {
              accum && (dep.completedAt != null)
            }
          )
          /*if (completed && allDependenciesComplete) {
            return ({[taskId]: true});
          } else if (!allDependenciesComplete) {
            return ({[taskId]: null});
          } else {
            return ({[taskId]: false});
          }*/
          return allDependenciesComplete
        }
      )
    )
    // var statusDict = []
    // for(var i = 0; i < this.props.tasksInGroup.length; i++) {
    //   var ourItem = this.props.tasksInGroup[i];
    //   var dependencyIds = ourItem.dependencyIds;
    //   var id = ourItem.id;
    //   var completed = false;
    //   var allDependenciesComplete = true;
    //   var itemStatus = null;
    //   for (var j = 0; j < dependencyIds.length; j++) {
    //     var currDependency = dependencyIds[i];
    //     var indexCurrDependency = 1;
    //     if (this.props.tasksInGroup[indexCurrDependency].completedAt == null){
    //       allDependenciesComplete = false;
    //     }
    //   }
    //   if (allDependenciesComplete && completed) {
    //     itemStatus = null;
    //   }
    //   statusDict[id] = ourItem;
    // }
    // return null;
  }

  generateTasksInGroup = () => {
    var itemsInGroups = _.groupBy(this.props.taskGroupData, 'group')
    var tasksInGroup = itemsInGroups[this.props.whichTaskGroup]
    var taskStatusList = this.calculateTaskStatus(this.props.taskGroupData, tasksInGroup);
    return (
      _.map(tasksInGroup, taskInfo =>
        <ListItemTask key={taskInfo.id} taskInfo={taskInfo} taskComplete={taskStatusList}/>
      )
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">Purchases</div>
          <Button bsStyle="link" className="App-link" 
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