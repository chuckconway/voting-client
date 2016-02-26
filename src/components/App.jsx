import React from 'react';
import {List} from 'immutable';

export default class App extends React.Component{
  constructor (props){
		super(props);
	}

  render = () => {
    return this.props.children;
  }
}
