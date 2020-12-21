function about() {
    var content = document.getElementById('content')
    content.innerHTML = ''

    var words = document.createElement('p');
    var title = document.createElement('h2');
    var opening = document.createElement('h3');
    var hours = document.createElement('p');

    title.innerHTML = 'About us'
    opening.innerHTML = 'Opening hours:'
    hours.innerHTML = 'Everyday from 8.00 - 13.30'
    words.innerHTML = 'We are offering fruits for everybody!'

    content.append(title, opening, hours, words)
}

export default about