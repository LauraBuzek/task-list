import React, { Component } from 'react';
import ListItemTaskGroup from './ListItemTaskGroup';
import _ from 'lodash';
import '../css/App.css';


class ThingsToDoView extends Component {

  generateTaskGroups() {
    var itemsInGroups = _.groupBy(this.props.taskGroupData, 'group')
    var taskGroups = Object.keys(itemsInGroups).map((name) => {
        var itemsInGroup = itemsInGroups[name]
        var count = itemsInGroup.length
        var done = _.filter(itemsInGroup, (vals) =>
          vals["completedAt"] != null
        ).length
        return([name, count, done])
      }
    )
    return ( _.map(taskGroups, (vals) => 
      <ListItemTaskGroup key={vals[0]} taskGroupName={vals[0]} 
        count={vals[1]} done={vals[2]} />
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

export default ThingsToDoView;
