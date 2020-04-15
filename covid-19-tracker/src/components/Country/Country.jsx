import React, { useState, useEffect } from 'react';
import { NativeSelect } from '@material-ui/core';
import { fetchCountryList } from '../../api';
import styles from './Country.module.css';

const Country = ({ updateCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountryList());
    };

    fetchAPI();
  }, []);

  return (
      <NativeSelect className = {styles.nativeSelect} onChange={(e) => updateCountry(e.target.value)}>
        <option>Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
  );
};

export default Country;