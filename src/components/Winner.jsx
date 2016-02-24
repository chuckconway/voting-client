import React from 'react';

export default class Winner extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render = () => {
		return <div className="winner">
			Winner is {this.props.winner}
			</div>;
	}

}
