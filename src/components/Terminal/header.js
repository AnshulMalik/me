import React from 'react';

class TerminalHeader extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return <div className = "terminal-header">
      <div className="terminal-buttons">
        <div className="terminal-btn close-btn"></div>
        <div className="terminal-btn min-btn"></div>
        <div className="terminal-btn max-btn"></div>
      </div>
      <span>Profile</span>
    </div>;
  }

}

export default TerminalHeader;
