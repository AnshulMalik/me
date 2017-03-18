import React from 'react';
import Output from './output';
import Input from './input';
import TerminalHeader from './header';
import MiniProjects from '../Projects/mini';

const invalidCommandMsg = '<span class="red">Oops</span> Command not found!';
const helpMsg = '<br />\
Commands available:<br />\
<table>\
  <tr>\
    <td><strong>help</strong> </td>\
    <td>Show help</td>\
  </tr>\
  <tr>\
    <td><strong>ls</strong></td>\
    <td>List projects</td>\
  <tr>\
    <td><strong>clear</strong></td>\
    <td>To clear the console</td>\
  </tr>\
</table>';

const commands = {
  clear: () => '',
  help: (prev) => prev + helpMsg,
  ls: (prev) => prev + MiniProjects,
  skills: () => {}
};


class Terminal extends React.Component {
  constructor (props) {
    super (props);
    this.state = { output: helpMsg };
    this.execute = this.execute.bind(this);
  }

  execute(command) {
    let output = this.state.output;
    if(commands[command]) {
      // Valid command
      output = commands[command](output);
    }
    else {
      output += '<br />' + invalidCommandMsg;
    }

    this.setState({output});
  }

  render () {
    return <div className="terminal">
      <TerminalHeader />
      <Output text = { this.state.output }/>
      <Input execute = { this.execute }/>
    </div>;
  }

}

export default Terminal;
