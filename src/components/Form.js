import { Component } from 'react';

class Form extends Component{
	render() {
	return (
	  <div className='tc pa2'>
	  	<h1 > Add Robo Friends </h1>
	    <form onSubmit={this.props.formSubmit}>
	    	<div className='pa2'>
			    <label>
			    <span className='f4 w-20'>Name: </span> 
			      <input
			      	type='text'
			      	placeholder="Enter Robo Friend's Name"
			      	name='name'
			        value={this.props.inputName}
			        onChange={this.props.nameChange} 
			        className='pa3 ba b--green bg-lightest-blue w-50'
			        required/>
		        </label>
        	</div>

	        <br />
        	<div className='pa2'>
	        <label>
		    <span className='f4 w-20'>Email: </span>  
		      <input
		      	type='email'
		      	placeholder="Enter Robo Friend's Email"
		      	name='email'
		        value={this.props.inputEmail}
		        onChange={this.props.emailChange} 
		        className='pa3 ba b--green bg-lightest-blue w-50'
		        required/>
	        </label>
	        </div>

	        <br />

	        <div className='pa2'>
	      	<button type='submit' className='f4 br4 b--light-purple bg-green w-20 grow'>Add Friend</button>
	      	</div>

	    </form>
	    {/*<h1>{this.state.name}</h1>
	    	<h1>{this.state.email}</h1>
			*/}
	  </div>
	);
	}
};

export default Form;