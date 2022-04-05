import React, { Component } from 'react';



class SearchBox extends Component{
  render(){
    return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='Search Robo Friends'
        onChange={this.props.searchChange}
        value={this.props.searchfield} 
      />
    </div>
  );
  }  
}

export default SearchBox;