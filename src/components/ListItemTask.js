import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import Checked from "../images/Completed.svg";
import Unchecked from "../images/Incomplete.svg";
import Locked from "../images/Locked.svg";
import '../css/ListItem.css';

class ListItemTask extends Component {
  chooseTaskState() {
    return Checked
  }

  render() {
    return (
      <div className="ListItem">
        <div className="ListItem-unexpand"> 
          <img src={Checked} alt="Expand tasks" href="#"/>
        </div>
        <div className="ListItem-titles" id="task">
          <p className="ListItem-title">{this.props.taskName}</p>
        </div>
      </div>
    );
  }
}

export default ListItemTask;