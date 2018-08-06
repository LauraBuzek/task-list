import React, { Component } from 'react';
import TasksInGroupView from './components/TasksInGroupView';
import AllTaskGroupsView from './components/AllTaskGroupsView';
import './css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      taskGroupData: initialTaskState,
      isThingsToDo: true,
      whichTaskGroup: ""
    }
  }

  updateView = (isThings, whichGroup) => {
    this.setState({ 
      isThingsToDo: isThings,
      whichTaskGroup: whichGroup
    });
  }

  updateTaskStatus = (id, newStatus) => {
    var currTaskData = this.state.taskGroupData;
    var updatedTaskData = currTaskData.map(task => {
        if(task.id === id) {
          task['completedAt'] = newStatus;
        }
        return task;
      }
    );
    this.setState({
        taskGroupData: updatedTaskData
    });
    return updatedTaskData;
  }

  renderAView = () => {
    if(this.state.isThingsToDo) {
      return (
        <AllTaskGroupsView 
            taskGroupData={this.state.taskGroupData} 
            updateViewFn={this.updateView}
        />
      )
    } else {
      return (
        <TasksInGroupView 
          taskGroupData={this.state.taskGroupData}
          whichTaskGroup={this.state.whichTaskGroup}
          updateViewFn={this.updateView}
          updateTaskStatusFn={this.updateTaskStatus}
        />
      )
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderAView()}
      </div>
    );
  }
}

export default App;

var initialTaskState = [
  {
    id: 1,
    group: "Purchases",
    task: "Go to the bank",
    dependencyIds: [],
    completedAt: null,
  },
  {
    id: 2,
    group: "Purchases",
    task: "Buy hammer",
    dependencyIds: [1],
    completedAt: null,
  },
  {
    id: 3,
    group: "Purchases",
    task: "Buy wood",
    dependencyIds: [1],
    completedAt: null,
  },
  {
    id: 4,
    group: "Purchases",
    task: "Buy nails",
    dependencyIds: [1],
    completedAt: null,
  },
  {
    id: 5,
    group: "Purchases",
    task: "Buy paint",
    dependencyIds: [1],
    completedAt: null,
  },
  {
    id: 6,
    group: "Build Airplane",
    task: "Hammer nails into wood",
    dependencyIds: [2, 3, 4],
    completedAt: null,
  },
  {
    id: 7,
    group: "Build Airplane",
    task: "Paint wings",
    dependencyIds: [5, 6],
    completedAt: null,
  },
  {
    id: 8,
    group: "Build Airplane",
    task: "Have a snack",
    dependencyIds: [],
    completedAt: null,
  }
]
