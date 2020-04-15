import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let urlForSpecificCountry = url;

  if (country) {
    urlForSpecificCountry = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(urlForSpecificCountry);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchCountryList = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};