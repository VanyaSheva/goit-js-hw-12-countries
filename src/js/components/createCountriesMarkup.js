import listMarkup from '../templates/countries.hbs';

export default function createCountriesMarkup(countriesList, items) {
  countriesList.insertAdjacentHTML(
    "afterbegin",
    items.map(item => listMarkup(item)).join("")
  );
}
