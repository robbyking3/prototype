import React, { Component } from 'react';
import IconThumb from 'react-icons/lib/md/thumb-up';
import avatarimage from '../images/morty.gif';

class Comment extends Component {
  render() {
    const { comment, user, time } = this.props;

    return(
      <div className="section-row ai-fs mbl">
        <div className="task-btn-col hbox jc-c">
          <div className="avatar" style={{ backgroundImage :  'url(' + avatarimage + ')'  }}>
          </div>
        </div>
        <div className="f-1 task-comment-wrap">
          <div>
            <span className="task-comment-user">{user}</span>
            <span className="task-comment-time">Today at {time}</span>
          </div>
          <div className="task-comment">
            {comment}
          </div>
        </div>
        <button className="btn btn-sm clear" data-title="Like">
          <span className="icon"><IconThumb /></span>
        </button>
      </div>
    )
  }
}

export default Comment;