import React, { Component } from 'react';

import IconAdd from 'react-icons/lib/md/add';
import IconClose from 'react-icons/lib/md/close';

class Project extends Component {

  render(){
    const { project } = this.props;

    return (
      <div className="project-row section-row">
        <div className="project-label">{project}</div>
        <div className="hbox ai-fc jc-fe f-1">
          <button className="btn btn-sm" data-title="Remove Project">
            <span className="icon"><IconClose /></span>
          </button>
          <button className="btn btn-sm" data-title="Add Project">
            <span className="icon"><IconAdd /></span>
          </button>
        </div>
      </div>
    )
  }
}

export default Project;