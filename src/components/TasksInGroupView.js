import React, { Component } from 'react';
import ListItemTask from './ListItemTask';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import '../css/App.css';

class TaskGroupPage extends Component {

  generateTasksInGroup() {
    return (
      _.map(this.props.taskData, taskInfo =>
        <ListItemTask key={taskInfo.id} taskInfo={taskInfo} />
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