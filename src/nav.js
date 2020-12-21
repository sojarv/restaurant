function addNavbar() {
    var nav = document.createElement('nav');
    var home = document.createElement('button');
    var menu = document.createElement('button');
    var about = document.createElement('button');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    about.innerHTML = 'About'
    home.id = 'home';
    menu.id = 'menu';
    about.id = 'about';

    nav.append(home, menu, about);

    document.body.prepend(nav);
}

export default addNavbar