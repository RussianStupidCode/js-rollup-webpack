import './css/index.css';
import js_image from './assets/js.png';

const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

const img = document.createElement('img');
img.src = js_image;

body.insertAdjacentElement('afterBegin', h1);
body.insertAdjacentElement('beforeEnd', img);


