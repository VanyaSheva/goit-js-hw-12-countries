import PNotify from '../../../node_modules/pnotify/dist/es/PNotify.js';

export default function error() {
  PNotify.error({
    title: 'Oh No!',
    text: 'Too many matches found. Please enter more specific query',
    delay: 2000
  });
}
