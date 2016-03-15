import React from 'react';
import {render} from 'react-dom';
import BuildGame from './BuildGame.jsx';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
		<div className="tableTop">
			<BuildGame />
		</div>
	);
  }
}

render(<App/>, document.getElementById('app'));