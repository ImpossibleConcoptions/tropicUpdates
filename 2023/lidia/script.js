function reload(element) {
    var lastsrc = element.src; element.src = ''; setTimeout(() => {element.src = lastsrc}, 1000)
}