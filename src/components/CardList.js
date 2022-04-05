import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component{
  render(){
    const {trivia, math, date, year} = this.props
    // console.log(trivia)
    return (
    <div className='flex flex-wrap pa2 ma2 justify-center'>
          <Card 
          number={trivia[0]}
          text={trivia[1]}
          type={trivia[2]}/>

          <Card 
          number={math[0]}
          text={math[1]}
          type={math[2]}/>

          <Card 
          number={date[0]}
          text={date[1]}
          type={date[2]}/>

          <Card 
          number={year[0]}
          text={year[1]}
          type={year[2]}/>
    </div>
  );
  }  
}

export default CardList;