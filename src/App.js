import React, { Component } from 'react';
import TasksInGroupView from './components/TasksInGroupView';
import ThingsToDoView from './components/ThingsToDoView';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import './css/App.css';

class App extends Component {
  constructor() {
    super()
    this.taskGroupData = [
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
    this.state = {
      isThingsToDo: false,
      whichTaskGroup: "Purchases"
    }
  }

  chooseAView(){
    if(this.state.isThingsToDo) {
      return (<ThingsToDoView state={this.taskGroupData} />)
    } else {
      var itemsInGroups = _.groupBy(this.taskGroupData, 'group')
      var tasksInGroup = itemsInGroups[this.state.whichTaskGroup]
      return (<TasksInGroupView taskData={tasksInGroup} />)
    }
  }

  render() {
    return (
      <div className="App">
        {this.chooseAView()}
      </div>
    );
  }
}

export default App;
