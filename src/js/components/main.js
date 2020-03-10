import fetchCountries from './fetchCountries';
import _ from '../../../node_modules/lodash';
import createCountriesMarkup from './createCountriesMarkup';
import createCountryMarkup from './createCountryMarkup';
import cleanMarkup from './cleanMarkup';
import success from './success';
import error from './error';
import errorNotFoundQuery from './errorNotFound';


const search = document.querySelector('.input-search');
const list = document.querySelector('.countries-list');
const countryWrapper = document.querySelector('.country');

search.addEventListener('input', _.debounce(searchFetchQuery, 500));


function searchFetchQuery (e){
  e.preventDefault();
  if(search.value === ''){
    cleanMarkup(list, countryWrapper);
    return;
  }
  const value = search.value;
  fetchCountries(value).then(data => {
    console.log(data);
    if(data.length >= 2 && data.length <= 10){
      cleanMarkup(list, countryWrapper);
      createCountriesMarkup(list, data);
      success();
    }
    else if (data.length === 1){
      cleanMarkup(list, countryWrapper);
      createCountryMarkup(countryWrapper, data[0]);
      success();
    }
    else if (data.length >= 11){
        error();
    }
    else {
      errorNotFoundQuery();
    }
  }).catch(error => console.log(error));
}


