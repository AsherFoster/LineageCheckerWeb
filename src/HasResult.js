/**
 * Created by asher on 10/05/17.
 */
import React from "react";

import "./HasResult.css";

class HasResult extends React.Component {
  render(){
    if(this.props.hasResult)
      return (
          <div id="HasResult">
            <div id="HasResultIcon">
              <i className="material-icons">check</i>
            </div>
            <div id="HasResultText">
              <h2>Found a matching build</h2>
            </div>
          </div>
      );
    else
      return (
          <div id="HasResult">
            <div id="HasResultIcon">
              <i className="material-icons">warning</i>
            </div>
            <div id="HasResultText">
              <h2>No matching build found</h2>
            </div>
          </div>
      )
  }
}


export default HasResult;