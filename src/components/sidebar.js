import React from 'react';
import CloseBtn from './shared/closeBtn';

class Sidebar extends React.Component {
  constructor (props) {
    super (props);
    this.state = { visible: false };
  }

  componentDidMount() {
    let openBtn = document.getElementById('menu-btn');
    let closeBtn = document.getElementById('close-sidebar');
    let sidebar = document.getElementsByClassName('sidebar')[0];
    openBtn.addEventListener('click', () => {
      sidebar.style.transform = 'translateX(0px)';
    });
  }

  close() {
    let sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.style.transform = 'translate(-255px)';
  }

  execute(command) {
    this.close();
    console.log('executing ', command);
    let event = new Event(command);
    document.dispatchEvent(event);
  }


  render () {
    return <div className="sidebar">
      <CloseBtn onClose={ this.close } />
      <br />
      <br />
      <img className="my-img" src="img/me.jpg"/>
      <h2>Anshul Malik</h2>
      <p>Love helping, hacking, playing basketball :)</p>

      <a className="tag" href="mailto:malikanshul29@gmail.com">Contact Me</a>
      <a className="tag" href="#" onClick={ this.execute.bind(this, 'ls') }>Projects</a>
      <a className="tag" href="#" onClick={ this.execute.bind(this, 'skills') }>Skills</a>
    </div>;
  }

}

export default Sidebar;
