import './styles/index.css';
import js_iamge from './assets/js.png';

const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

const img = document.createElement('img');
img.src = js_iamge;

body.insertAdjacentElement('afterBegin', h1);
body.insertAdjacentElement('beforeEnd', img);


