import PNotify from '../../../node_modules/pnotify/dist/es/PNotify.js';

export default function errorNotFoundQuery() {
  PNotify.error({
    title: 'Oh No!',
    text: 'No matches found with such query. Please, try to fill up another name of the country',
    delay: 2000
  });
}
