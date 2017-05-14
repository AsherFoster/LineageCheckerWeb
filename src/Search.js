/**
 * Created by asher on 4/05/17.
 */
import React from "react";

import "./Search.css";

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ""};
  }

  handleChange = (event) => {
    this.setState({text: event.target.value});
  };

  handleSubmit = (event) => {
    this.props.onSearch && this.props.onSearch(this.state.text);

    event.preventDefault();
  };

  render(){
    return (
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search Here..." onChange={this.handleChange} value={this.state.text} />
            <input type="submit" />
          </form>
        </div>
    );
  }
}

export default Search;
