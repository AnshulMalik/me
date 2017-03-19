import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class Output extends React.Component {
  constructor (props) {
    super (props);
  }

  componentDidUpdate() {
    this.refs.scrollbars.scrollToBottom();
  }
  render () {
    return <div className="output">
      <Scrollbars
      ref = 'scrollbars'
        >
          { this.props.text }
          </Scrollbars>
      </div>;
  }

}

//           <div dangerouslySetInnerHTML = {{ __html: this.props.text }}></div>


export default Output;
