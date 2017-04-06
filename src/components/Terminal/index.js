import React from 'react';
import Output from './output';
import Input from './input';
import TerminalHeader from './header';
import MiniProjects from '../Projects/mini';
import Skills from '../skills';

const invalidCommandMsg = <div><br /><span className="red">Oops</span> Command not found!</div>;
const helpMsg = <div><br />
Commands available:<br />
  <table>
    <tbody>
      <tr>
        <td><strong>help</strong> </td>
        <td>Show help</td>
      </tr>
      <tr>
        <td><strong>ls</strong></td>
        <td>List projects</td>
      </tr>
      <tr>
        <td><strong>skills </strong></td>
        <td> Skills I have</td>
      </tr>
      <tr>
        <td><strong>clear</strong></td>
        <td>To clear the console</td>
      </tr>
    </tbody>
  </table>
</div>;

const commands = {
  clear: () => '',
  help: (prev) => [...prev, helpMsg],
  ls: (prev) => [...prev, MiniProjects],
  skills: (prev) => [...prev, Skills]
};


class Terminal extends React.Component {
  constructor (props) {
    super (props);
    this.state = { output: [helpMsg] };
    this.execute = this.execute.bind(this);
  }

  execute(command) {
    let output = this.state.output;
    if(commands[command]) {
      // Valid command
      output = commands[command](output);
    }
    else {
      output = [...output, invalidCommandMsg];
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
