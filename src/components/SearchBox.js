import React, { Component } from 'react';



class SearchBox extends Component{
  render(){
    return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='number' 
        placeholder='Enter a number'
        onChange={this.props.searchChange}
        value={this.props.searchfield} 
      />
    </div>
  );
  }  
}

export default SearchBox;