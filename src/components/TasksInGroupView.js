import React, { Component } from 'react';
import ListItemTask from './ListItemTask';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import '../css/App.css';

class TaskGroupPage extends Component {
    calculateTaskStatus = () => {
    var statusDict = []
    for(var i = 0; i < this.props.tasksInGroup.length; i++) {
      var ourItem = this.props.tasksInGroup[i];
      // var dependencyIds = ourItem.dependencyIds;
      var id = ourItem.id;
      // var completed = ourItem.completedAt;
      // var allDependenciesComplete = true;
      // var itemStatus = null;
      // for (var j = 0; j < dependencyIds.length; j++) {
      //   var currDependency = dependencyIds[i];
      //   if (this.props.tasksInGroup[currDependency].completedAt == null){
      //     allDependenciesComplete = false;
      //   }
      // }
      // if (allDependenciesComplete && completed) {
      //   itemStatus = null;
      // }
      statusDict[id] = ourItem;
    }
    return null;
  }

  generateTasksInGroup() {
    var taskStatusList = this.calculateTaskStatus();
    return (
      _.map(this.props.tasksInGroup, taskInfo =>
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