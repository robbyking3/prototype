import React, { Component } from 'react';

import IconCalendar from 'react-icons/lib/md/today';
import IconCheck from 'react-icons/lib/md/check';
import IconComments from 'react-icons/lib/md/chat-bubble-outline';
import IconPerson from 'react-icons/lib/md/person';


class Subtask extends Component {
  render() {
    const { subtask } = this.props;
    return (
      <div className="sub-task">
        <div className="hbox">
          <div className="task-btn-col hbox jc-c">
            <button className="btn btn-sm" data-title="Complete Sub task">
              <span className="icon"><IconCheck /></span>
            </button>
          </div>
          <div className="sub-task-description f-1">
            {subtask}
          </div>
          <button className="btn btn-sm unset action-hidden mrs" data-title="Sub Task Due Date">
            <span className="icon"><IconCalendar /></span>
          </button>
          <button className="btn btn-sm unset action-hidden mrs" data-title="Sub Task Assignee">
            <span className="icon"><IconPerson /></span>
          </button>
          <button className="btn btn-sm action-hidden clear" data-title="Sub Task Comments">
            <span className="icon"><IconComments /></span>
          </button>
        </div>
      </div>
    )
  }
}

export default Subtask;