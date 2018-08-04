import React, { Component } from 'react';
import Checked from "../images/Completed.svg";
import Unchecked from "../images/Incomplete.svg";
import Locked from "../images/Locked.svg";
import '../css/ListItem.css';

class ListItemTask extends Component {
  chooseTaskStatusImage() {
    if(this.props.isCompleted) {
      return Checked;
    } else if (this.props.isCompleted === false) {
      return Unchecked;
    } else {
      return Locked;
    }
  }

  render() {
    return (
      <div className="ListItem">
        <div className="ListItem-unexpand"> 
          <img src={this.chooseTaskStatusImage()} alt="Expand tasks" href="#"/>
        </div>
        <div className="ListItem-titles" id="task">
          <p className="ListItem-title">{this.props.taskInfo.task}</p>
        </div>
      </div>
    );
  }
}

export default ListItemTask;