import {Component} from 'react';
// React,


class Scroll extends Component{
	// constructor(props){
	// 	super(props);
	// }
	render(){
		// console.log(this.props.children);
		return (
			<div style={{
						overflowY: 'scroll', 
						borderTop:'3px solid purple',
						height: '800px'
					}}>
				{this.props.children}
			</div>
		);
	}
};

export default Scroll;