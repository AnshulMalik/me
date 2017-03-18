import React from 'react';

class Cursor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      interval: 500,
      visible: true
    };

    this.showCursor = this.showCursor.bind(this);
    this.hideCursor = this.hideCursor.bind(this);
  }

  showCursor () {
    this.setState({ visible: true });
    setTimeout(this.hideCursor, this.state.interval);
  }

  hideCursor () {
    this.setState({ visible: false });
    setTimeout(this.showCursor, this.state.interval);
  }

  componentDidMount () {
    this.hideCursor();
  }

  render () {
    if(this.state.visible) {
      return <span className="cursor">&nbsp;</span>;
    }
    else {
      return <span></span>;
    }
  }
}

export default Cursor;
