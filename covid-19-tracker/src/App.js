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
    if(country !== "Global") {
      const data = await fetchData(country);
      this.setState({ data, country: country });
    }
    else {
      const data = await fetchData(); 
      this.setState({ data, country: country });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Cards data = { data } />
        <div className="date">Data Last Updated: {new Date(data.lastUpdate).toDateString()}</div>
        <Country updateCountry = { this.updateCountry } />
        <br /><br /><br /><br />
        <PieChart data = { data } />
      </div>
    );
  }
}

export default App;