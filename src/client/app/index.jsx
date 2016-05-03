import React from 'react';
import {render} from 'react-dom';
import BuildGame from './BuildGame.jsx';

const App = function(props) {
	return{
		props,
		render () {
			return (
				<div className="tableTop">
					<h2  deckName='TheDeckName'>{ props.deckName }</h2>
					<BuildGame />
				</div>
			)
		}
	}
}

render(<App deckName='TheDeckName'/>, document.getElementById('app'));