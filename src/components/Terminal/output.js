import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class Output extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return <div className="output">
      <Scrollbars
        >
          <div dangerouslySetInnerHTML = {{ __html: this.props.text }}></div>
        </Scrollbars>
      </div>;
  }

}

export default Output;
