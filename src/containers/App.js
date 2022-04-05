import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Form from '../components/Form';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      robots: [],
      searchfield: '',
      inputName: '',
      inputEmail: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
  }  

  handleSearch(event){
    this.setState({
      searchfield: event.target.value
    });
  }

  handleName(event){
    this.setState({
      inputName: event.target.value
    });
  }

  handleEmail(event){
    this.setState({
      inputEmail: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
          robots: [...state.robots,{
                  id: state.robots.length+1,
                  name: event.target.name.value,
                  email: event.target.email.value}],
          inputName: '',
          inputEmail: ''
    }))
  }

  handleDelete(event){
    this.setState(state => ({
          robots: [...this.state.robots]
                  .filter(robot => robot['id'] !== Number(event.target.id.value))
    }))
  }

  render(){
    const {robots, searchfield } = this.state;
    const filteredRobots = robots
    .filter(robot => {
                      return(robot.name
                        .toLowerCase()
                        .includes(searchfield.toLowerCase()))
                    });
    if(robots.length === 0){
      return <h1 className='tc'> Hold up </h1>
    }
    else{
        return (
        <div className='tc'  style={{overflow: 'hidden'}}>
          <h1 className='f1'>Robo Friends</h1>
          <SearchBox searchChange={this.handleSearch}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}
                        handleDelete={this.handleDelete} />
            </ErrorBoundary>
          </Scroll>
          <Form nameChange={this.handleName} 
                emailChange={this.handleEmail}
                formSubmit={this.handleSubmit}
                inputName={this.state.inputName}
                inputEmail={this.state.inputEmail} />
        </div>
      );
    }
  }
}

export default App;