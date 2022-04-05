import React, { Component } from 'react';



class Card extends Component{
  render(){
    return (
    <div className='tc card br3 ma2 pa3 grow bw2 shadow-5 dib w-third'>
      <img src={`https://avatars.dicebear.com/api/personas/${this.props.number}.svg`} alt={`A dice bear saying ${this.props.number}`} />
      <div>
        <h2>A {this.props.type} fact about {this.props.number} is </h2>
        <p>{this.props.text}</p>
      </div>
    </div>
  );
  }  
}

export default Card;