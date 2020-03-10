import countryMarkup from '../templates/country.hbs';

export default function createMarkup(countryContainer, item) {
  countryContainer.insertAdjacentHTML('beforeend', countryMarkup(item));
}
