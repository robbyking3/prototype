import React, { Component } from 'react';

import IconAdd from 'react-icons/lib/md/add';
import IconAttach from 'react-icons/lib/md/attach-file';
import IconCalendar from 'react-icons/lib/md/today';
import IconCheck from 'react-icons/lib/md/check';
import IconClose from 'react-icons/lib/md/close';
import IconComments from 'react-icons/lib/md/chat-bubble-outline';
import IconList from 'react-icons/lib/md/list';
import IconPerson from 'react-icons/lib/md/person';
import IconThumb from 'react-icons/lib/md/thumb-up';
import IconKebab from 'react-icons/lib/md/keyboard-control';
import IconArrow from 'react-icons/lib/md/keyboard-arrow-right';

import Button from './components/button.js';
import Subtask from './components/subtask.js';
import Project from './components/project.js';
import Comment from './components/comment.js';

import sampleData from './sampledata.js';
import avatarimage from './images/morty.gif';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="task-pane">
        <section className="task-toolbar">
          
          <Button icon={<IconPerson />} btnText="Unassigned" />
          <Button icon={<IconCalendar />} btnText="Due Date" />
          <Button icon={<IconThumb />} tooltip="Like" />
          <Button icon={<IconList />} tooltip="Add Subtasks" />
          <Button icon={<IconAttach />} tooltip="Attachments" />
          <Button icon={<IconKebab />} tooltip="More" />

          <button className="btn btn-close btn-sm">
            <span className="icon"><IconClose /></span>
          </button>
        </section>
        
        <section className="task-projects">
          {sampleData.projects.map((item, index) => {
            return <Project key={index} project={item} />
          })}
        </section>

        <section className="task-details">
          <div className="section-row ai-fs">
            <div className="task-btn-col hbox jc-c">
              <Button icon={<IconCheck />} tooltip="Complete Task" />
            </div>
            <div className="f-1">
              <input className="task-name" defaultValue={sampleData.name} />
              <textarea className="task-description" defaultValue={sampleData.description}>
              </textarea>
            </div>
          </div>
          <div className="sub-task-section">
            {sampleData.subtasks.map((item, index) => {
              return <Subtask key={index} subtask={item} />
            })}
          </div>
        </section>
        <section className="task-meta">
          <div className="hbox">
            <div className="task-btn-col hbox jc-c">
            </div>
            <div className="f-1">
              <ul className="task-meta-items">
                {sampleData.taskmeta.map((item, index) => {
                  return <li key={index}> {item} </li>
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="task-comments">
          {sampleData.comments.map((item, index) => {
            return <Comment key={index} comment={item.comment} user={item.user} time={item.time} />
          })}
        </section>
        <section className="task-new-comment">
          <div className="section-row ai-fs">
            <div className="task-btn-col hbox jc-c">
              <div className="avatar" style={{ backgroundImage :  'url(' + avatarimage + ')'  }}>
              </div>
            </div>
            <div className="f-1 task-comment-wrap">
              <input className="task-new-comment-input" placeholder="Comment" />
            </div>
          </div>
        </section>
        <section className="task-followers">
          <div className="hbox ai-c jc-sb">
            <div className="hbox ai-c">
              <div className="task-followers-label">Followers</div>
              <div className="avatar avatar-sm mrm" style={{ backgroundImage :  'url(' + avatarimage + ')'  }}>
              </div>
              <button className="btn btn-sm" data-title="Add Project">
                <span className="icon"><IconAdd /></span>
              </button>
            </div>
            <div className="task-following-label">Following</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;