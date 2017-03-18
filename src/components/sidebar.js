import React from 'react';

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

    closeBtn.addEventListener('click', () => {
      sidebar.style.transform = 'translate(-255px)';
    });
  }

  render () {
    return <div className="sidebar">
      <img id="close-sidebar" className="close-img" src="../img/close.png" />
      <br />
      <br />
      <img className="my-img" src="../img/me.jpg"/>
      <h2>Anshul Malik</h2>
      <p>Love helping, hacking, playing basketball :)</p>
    </div>;
  }

}

export default Sidebar;
