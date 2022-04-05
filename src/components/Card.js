import React, { Component } from 'react';



class Card extends Component{
  render(){
    return (
    <div className='tc bg-light-green br3 ma2 pa3 grow bw2 shadow-5 dib'>
    {/*tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-100 w-80-m w-25-l*/}
      <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt={`robo version of ${this.props.name}`} />
    {/* src={`https://robohash.org/set_setany/${this.props.id}?size=200x200`} alt={`robo version of ${this.props.name}`} */}
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
      <form className='pa2' onSubmit={this.props.handleDelete}>
          <input name='id' type='hidden' value={this.props.id} />
          <button type='submit' className='f5 br2 b--light-blue bg-green w-100 dim'>Remove Friend</button>
      </form>
    </div>
  );
  }  
}

export default Card;