import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import MetarList from '../containers/metar_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MetarList />
      </div>
    );
  }
}
