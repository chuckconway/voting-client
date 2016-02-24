import React from 'react';
import Winner from './Winner';
import Vote from './Vote';


export default class Voting extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render = () => {
		return <div>
			{
				this.props.winner ?
				<Winner ref="winner" winner={this.props.winner} /> :
				<Vote {...this.props} />
			}
		</div>;
	}
}
