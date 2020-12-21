import addNavbar from './nav'
import home from './home'
import about from './about'
import menu from './menu'

addNavbar();
home();

document.getElementById('about').addEventListener('click', about)
document.getElementById('home').addEventListener('click', home)
document.getElementById('menu').addEventListener('click', menu)