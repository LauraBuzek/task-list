
import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import Arrow from "../images/Group.svg";
import '../css/ListItem.css';

class ListItemWithHeader extends Component {
  render() {
    return (
      <div className="ListItem">
        <div className="ListItem-unexpand"> 
          <img src={Arrow} alt="Expand tasks" href="#"/>
        </div>
        <div className="ListItem-titles">
          <p className="ListItem-title">{this.props.taskGroupName}</p>
          <p className="ListItem-subtitle">{this.props.done} OF {this.props.count} TASKS COMPLETE</p>
        </div>
      </div>
    );
  }
}

export default ListItemWithHeader;