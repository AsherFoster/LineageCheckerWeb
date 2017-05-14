/**
 * Created by asher on 8/05/17.
 */
import React from "react";
import DeviceResult from './DeviceResult';
import HasResult from './HasResult';

import "./SearchResults.css";

class SearchResults extends React.Component {
  render(){
    let results = this.props.results.map(result => <DeviceResult device={result} key={result.codename} />);
    let hasResults = results.length > 0;
    return (
        <div id="SearchResults">
          <HasResult hasResult={hasResults} />
          {hasResults && <h3>Devices Matching Search:</h3>}
          <div id="SearchResultsList">
            {results}
          </div>
        </div>
    )
  }
}

export default SearchResults;