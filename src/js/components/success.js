import PNotify from '../../../node_modules/pnotify/dist/es/PNotify.js';

export default function success() {
  PNotify.success({
    title: 'Success!',
    text: 'That thing that you were trying to do worked.',
    delay: 1000
  });
}
