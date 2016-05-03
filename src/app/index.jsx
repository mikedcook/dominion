import React from 'react';
import {render} from 'react-dom';
import selectCardsInPlayFactory from './SelectCardsInPlay.jsx';

const SelectCards = selectCardsInPlayFactory({ React });

const App = function(props) {
	return{
		props,
		render () {
			return (
				<div className="tableTop">
					<h2 deckName='TheDeckName'>{ props.deckName }</h2>
					<SelectCards />
				</div>
			)
		}
	}
}

render(<App deckName='TheDeckName'/>, document.getElementById('app'));