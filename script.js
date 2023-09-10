document.querySelectorAll('[remLee]').forEach(e => {
    e.hidden = true
})

document.querySelectorAll('[remMarg]').forEach(e => {
    e.hidden = true
})

function show(hurricaneName) {
    document.getElementById(`remCh${hurricaneName}`).innerHTML=='Show More' ?
        (
            document.getElementById(`remCh${hurricaneName}`).innerHTML='Show Less',
            document.querySelectorAll(`[rem${hurricaneName}]`).forEach(e => {
                e.hidden = false
            })
        ) :
        (
            document.getElementById(`remCh${hurricaneName}`).innerHTML='Show More',
            document.querySelectorAll(`[rem${hurricaneName}]`).forEach(e => {
                e.hidden = true
            })
        )
}

setTimeout(() => {
    document.body.hidden = false
    document.querySelector('html').style.backgroundImage = "none";
}, 400)