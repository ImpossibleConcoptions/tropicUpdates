setTimeout(() => {
    document.body.hidden = false
    document.querySelector('html').style.backgroundImage = "none";
}, 0)


var threats = [
    [
        []
    ],
    {
        "Philippe" : []
    }
]

var username = location2.attributes["usrnm"]
var loc = location2.attributes["loc"]

if (username != undefined && loc != undefined) {
    loc = loc.replaceAll("+", " ")
    var threatsToLoc = 0
    threats[0].forEach(stormthreats => {
        threatsToLoc += (stormthreats.includes(loc) ? 1 : 0) 
    })

    document.querySelectorAll("[usrloc]").forEach(elm => {
        elm.innerHTML = elm.innerHTML.toString()
            .replaceAll("--username--", username)
            .replaceAll("--threats--", threatsToLoc)
            .replaceAll("--location--", loc)
            // .replaceAll("--phillipeIsThreat--", (threats[1].Philippe.includes(loc) ? `Threat to ${loc}` : `No Threat To ${loc}`))
    })
} else {
    document.body.innerHTML = "<div storm index last><div><h1>You are not signed in </h1><a href='./signin'><button>Sign In</button><br><br><a href='./newhere'>New Here? Click Here!</a></div></div>"
}