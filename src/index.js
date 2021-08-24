import './sass/main.scss';
import './js/fetchCountries';

import { error } from '../node_modules/@pnotify/core/dist/PNotify.js';

error({
    text: 'Too many matches found!'
      });
