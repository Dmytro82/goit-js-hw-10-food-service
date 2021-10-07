import menuMarkup from '../templates/menuTemplate.hbs';
import menuJson from '../menu.json';

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', menuMarkup(menuJson));
