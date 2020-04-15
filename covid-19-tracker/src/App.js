import React from 'react';
import './App.css';
import {fetchData} from './api';
import { Cards, Country, PieChart } from './components';

class App extends React.Component {
  
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  updateCountry = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Cards data = { data } />
        <div className="date">Data Last Updated: {new Date(data.lastUpdate).toDateString()}</div>
        <Country updateCountry = { this.updateCountry } />
        <div class="foo">
          <span class="letter">Covid-19</span>
        </div>
        <PieChart data = { data } />
      </div>
    );
  }
}

export default App;