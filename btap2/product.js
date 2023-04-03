function changeProductList(type, element) {
    // console.log(element)
    let tags = document.getElementsByClassName('tab-item')
    for(i = 0; i < tags.length; i++) {
        tags[i].style.backgroundColor = '#b14c38'
    }
    element.style.backgroundColor = '#ee4d2d'

    document.getElementById(type).style.display = 'inline-block'
    switch(type) {
        case 'trend' :
            document.getElementById('new').style.display = 'none'
            document.getElementById('best-sell').style.display = 'none'
            break;

        case 'new' :
        document.getElementById('trend').style.display = 'none'
        document.getElementById('best-sell').style.display = 'none'
        break;

        case 'best-sell' :
        document.getElementById('new').style.display = 'none'
        document.getElementById('trend').style.display = 'none'
        break;
    }
}