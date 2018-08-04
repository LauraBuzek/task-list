import React, { Component } from 'react';
import Arrow from "../images/Group.svg";
import '../css/ListItem.css';

class ListItemTaskGroup extends Component {

  render() {
    return (
      <div className="ListItem">
        <div className="ListItem-unexpand"> 
          <img src={Arrow} alt="Expand Task Group" 
              onClick={
                () => this.props.updateViewFn(
                  false, this.props.taskGroupName)
              }
          />
        </div>
        <div className="ListItem-titles">
          <p className="ListItem-title">
              {this.props.taskGroupName}
          </p>
          <p className="ListItem-subtitle">
              {this.props.done} OF {this.props.count} TASKS COMPLETE
          </p>
        </div>
      </div>
    );
  }
}

export default ListItemTaskGroup;