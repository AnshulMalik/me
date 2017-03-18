import React from 'react';
import Cursor from './cursor';

class Terminal extends React.Component {
  constructor (props) {
    super (props);
    this.state = { text: '' };
    this.history = [];
    this.historyPointer = -1;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.executeCommand = this.executeCommand.bind(this);
  }

  executeCommand () {
    this.props.execute(this.state.text);
    this.history.push(this.state.text);
    this.historyPointer = this.history.length;
    this.setState({ text: ''});
  }

  goBackInThePast() {
    if(this.historyPointer > 0) {
      this.setState({ text: this.history[--this.historyPointer]});
    }
  }

  moveAheadInTheFuture() {
    if(this.historyPointer < this.history.length - 1) {
      this.setState({ text: this.history[++this.historyPointer]});
    }
    else {
      this.historyPointer = this.history.length;
      this.setState( { text: '' });
    }
  }

  handleKeyDown (e) {
    let key = e.key;
    let text = this.state.text;

    if(key === 'Enter') {
      return this.executeCommand();
    }
    if(key === 'ArrowUp') {
      return this.goBackInThePast();
    }
    if(key === 'ArrowDown') {
      return this.moveAheadInTheFuture();
    }

    if(key === 'Backspace') {
      text = text.substr(0, text.length - 1);
    }

    if(key.length === 1)
      if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || (key >= '0' && key <= '9') || key === ' ') {
        text += e.key;
      }

    this.setState({ text });
  }

  componentWillMount () {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  render () {
    return <div className="input">
      <span className="light-text">[Anshul]:~ root$&nbsp;</span>
      { this.state.text }
      <Cursor />
    </div>;
  }

}

export default Terminal;
