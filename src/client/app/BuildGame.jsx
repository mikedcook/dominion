'use strict';

import React from 'react';

class BuildGame extends React.Component {

	constructor(props) {
		super(props);
		let self = this;
		this.state = {
			deck: {},
			cards: {
				'default': {
					'copper': {
						'id': 1,
						'type': 'treasure',
						'cost': 0,
						'value': 1
					},
					'silver': {
						'id': 2,
						'type': 'treasure',
						'cost': 3,
						'value': 2
					},
					'gold': {
						'id': 3,
						'type': 'treasure',
						'cost': 6,
						'value': 3
					},
					'estate': {
						'id': 4,
						'type': 'victory',
						'cost': 2,
						'points': 1
					},
					'duchy': {
						'id': 5,
						'type': 'victory',
						'cost': 5,
						'points': 3
					},
					'province': {
						'id': 6,
						'type': 'victory',
						'cost': 8,
						'points': 6
					}
				},
				'optional': {
					'adventurer': {
						'id': 7,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'cellar': {
						'id': 8,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'chancellor': {
						'id': 9,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'chapel': {
						'id': 10,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'councilroom': {
						'id': 11,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'feast': {
						'id': 12,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'festival': {
						'id': 13,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'laboratory': {
						'id': 14,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'library': {
						'id': 15,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'market': {
						'id': 16,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'mine': {
						'id': 17,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'moneylender': {
						'id': 18,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'remodel': {
						'id': 19,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'smithy': {
						'id': 20,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'throneroom': {
						'id': 21,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'village': {
						'id': 22,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'woodcutter': {
						'id': 23,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'workshop': {
						'id': 24,
						'type': 'action',
						'sub-type': 'standard',
						'cost': 1
					},
					'bureaucrat': {
						'id': 25,
						'type': 'action',
						'sub-type': 'attack',
						'cost': 1
					},
					'militia': {
						'id': 26,
						'type': 'action',
						'sub-type': 'attack',
						'cost': 1
					},
					'spy': {
						'id': 27,
						'type': 'action',
						'sub-type': 'attack',
						'cost': 1
					},
					'thief': {
						'id': 28,
						'type': 'action',
						'sub-type': 'attack',
						'cost': 1
					},
					'witch': {
						'id': 29,
						'type': 'action',
						'sub-type': 'attack',
						'cost': 1
					},
					'moat': {
						'id': 30,
						'type': 'action',
						'sub-type': 'reaction',
						'cost': 1
					},
					'curse': {
						'id': 31,
						'type': 'curse',
						'cost': 1,
						'points': -1
					},
					'gardens': {
						'id': 32,
						'type': 'victory',
						'cost': 1,
						'points': 0
					}
				},
				'chosen': {

				}
			}
		};
		this.addToDeck = this.addToDeck.bind(this);
		self.selectCard = this.selectCard.bind(this);
	}

	addToDeck () {
		console.log(this.state.deck);
		this.setState({
			deck: this.state.deck.concat('market')
		});
		console.log(this.state.deck);
	}

	selectCard() {
		console.log('card clicked');
	}

	render() {
		return (
			<div>
				<div className='deck'>
					<div className='deckCat'>
						<h2>Default Cards</h2>
						<div className="deckFlex">
							{Object.keys(this.state.cards.default).map(function(card, i){
								return <div className='card'>
									<img key={i} src={'./images/' + card + '.jpg'} />
								</div>
							})}
						</div>
					</div>
					<div className='deckCat selectCards'>
						<h2>Optional Cards</h2>
						<h3>Please select 10 cards to add to your game.</h3>
						<div className="deckFlex">
							{Object.keys(this.state.cards.optional).map(function(card, i){
								return <div className='card'>
									<img key={i} src={'./images/' + card + '.jpg'} onClick={self.selectCard} />
								</div>
							})}
						</div>
					</div>
				</div>
				<div><button onClick={this.addToDeck}>Add one to the deck.</button></div>
			</div>
		);
	}

}

export default BuildGame;