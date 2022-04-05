import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchfield: '',
      number: null,
      trivia: {},
      math: {},
      date: {},
      year: {}
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchRandom = this.fetchRandom.bind(this);
    this.fetchNumber = this.fetchNumber.bind(this);
  }

  // Fetch a random trivia, math, date and year fact
  fetchRandom = () => { 
    const parameters = ['trivia', 'math', 'date', 'year'];
    const run = async () => {        
      const  [trivia, math, date, year] = await Promise.all(parameters
        .map(item => `http://numbersapi.com/random/${item}?json`) //Create the urls
        .map(async function(url, index) {
          const response = await fetch(url); // Fetch the urls
          return response.json();
        }));
      await this.setState({
        trivia: trivia,
        math: math,
        date: date,
        year: year});
    };
    run();
  }

  // Fetch a trivia, math, date and year fact for specific number
  fetchNumber = (number) => { 
    const parameters = ['trivia', 'math', 'date', 'year'];
    const run = async () => {        
      const  [trivia, math, date, year] = await Promise.all(parameters
        .map(item => `http://numbersapi.com/${number}/${item}?json`) //Create the urls
        .map(async function(url, index) {
          const response = await fetch(url); // Fetch the urls
          return response.json();
        }));
      await this.setState({
        trivia: trivia,
        math: math,
        date: date,
        year: year});
    };
    run();
  }


  componentDidMount(){
    this.fetchRandom();
  }  

  handleSearch(event){
    this.setState({
      searchfield: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      searchfield: '',
      number: Number(state.searchfield)
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.number !== prevState.number) {
      if(!isNaN(Number(this.state.number))){
        this.fetchNumber(this.state.number);
      } 
      else {
        this.fetchRandom();
        this.setState({
        number: null
        });
      }      
    } 
  }

  render(){    
    const {trivia,  math, date, year} = this.state;

    // Prints message if the data is not fetched properly
    if(trivia.length === 0 || math.length === 0 || date.length === 0 || year.length === 0){
      return <h1 className='tc'> Something went wrong </h1>
    }
    else{
        return (
        <div className='tc'>
          <h1 className='f1'>{this.props.appName}</h1>
          <SearchBox searchChange={this.handleSearch} searchfield={this.state.searchfield} />
          <div className='pa2'>
            <input type='button' onClick={this.handleSubmit} value='Get Fact' className='pa2 ma2 br4 b--light-purple bg-green'/>
            <input type='button' onClick={this.fetchRandom} value='Random Facts' className='pa2 ma2 br4 b--light-purple bg-green'/>
          </div>
          <ErrorBoundary>
            <CardList 
                trivia={[trivia.number, trivia.text, trivia.type]}
                math={[math.number, math.text, math.type]}
                date={[date.number, date.text, date.type]}
                year={[year.number, year.text, year.type]}
                       />
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default App;