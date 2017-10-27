import React, { Component } from 'react';

class Button extends Component {

  render() {
    const { btnText, icon, tooltip } = this.props;
    return (
      <button className={btnText ? ('btn unset') : ('btn')} data-title={tooltip} >
        <span className="icon">{icon}</span>
        {btnText ? (
          <span className="btn-text">{btnText}</span>
          )
        :
        ('')
      }
      </button>
    )
  }
}

export default Button;