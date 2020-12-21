function menu() {
    var content = document.getElementById('content')
    content.innerHTML = ''

    var pear = document.createElement('img');
    pear.src = './src/pear.jpg'

    var blueberry = document.createElement('img');
    blueberry.src = './src/blueberry.jpg'

    content.append(pear, blueberry)
}

export default menu