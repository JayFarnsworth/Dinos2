import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileContainer from './components/ProfileContainer';


class App extends Component {
  state = {
    dinosaurs: [],
    id:[1,2,3,4],
    selectedProfile: null,
    expandedSkills: {}
  }

  componentDidMount(){
    this.getListings();
  }

  getListings = () => {
    return fetch('./dinosaurs.json')
      .then(response => response.json())
      .then(dinosaurs => this.setState({dinosaurs}))
  }

  expandDetails = (name) => {
    this.setState({selectedProfile: name})
    console.log(this.state.selectedProfile)
  }

  expand = (name) => {
    const expandedSkills = this.state.expandedSkills
    if (expandedSkills[name]) {
      expandedSkills[name] = false
    } else {
      expandedSkills[name] = true
    }
    this.setState({ expandedSkills: expandedSkills })
  }

  render() {
    return (
      <div className='root'>
        <Header />
        <ProfileContainer 
          expand={this.expand} 
          expandedSkills={this.state.expandedSkills} 
          selectedProfile={this.state.selectedProfile} 
          expandDetails={this.expandDetails} 
          dinosaurs={this.state.dinosaurs} />
        <Footer />
      </div>
    );
  }
}

export default App;
