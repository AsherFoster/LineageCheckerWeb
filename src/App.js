import React from 'react';
import * as data from './devices.json';

import './App.css';

import Search from './Search';
import SearchResults from './SearchResults';

const devices = data.devices;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      headerOpacity: 1
    };
  }

  handleSearch = (term) => {
    let results = devices.filter((device) =>
      device.name.toLowerCase().includes(term.toLowerCase().trim())
    );

    this.setState({
      results: results,
      hasSearched: true
    });
  };

  handleScroll = () => {
    let fadeStart = window.innerHeight * 0.2;
    let fadeSpeed = 200;


    let scroll = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);

    let opacity;

    if(scroll < fadeStart) opacity = 1;
    else opacity = 1 - ((scroll - fadeStart) / fadeSpeed);

    this.setState({
      headerOpacity: opacity
    })
  };

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div>
        <div id="App-backdrop" />
        <div id="App-header" style={{opacity: this.state.headerOpacity}}>
          <h1>Does it have Lineage</h1>
          <Search onSearch={this.handleSearch} />
        </div>
        {this.state.hasSearched && <SearchResults results={this.state.results} />}
      </div>
    );
  }
}

export default App;
