import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component{
  render(){
    return (
    <div className='flex flex-wrap pa2 ma2 justify-center'>
      {
        this.props.robots.map((user) => {
        return (<Card 
          key={user.id}
          id={user.id} 
          name={user.name} 
          email={user.email} 
          handleDelete={this.props.handleDelete}/>)})
      }
    </div>
  );
  }  
}

export default CardList;