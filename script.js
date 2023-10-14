setTimeout(() => {
    document.body.hidden = false
    document.querySelector('html').style.backgroundImage = "none";
}, 0)


var threats = [
    [
        [],
        [],
        ["USVI"],
        []
    ],
    {
        "Sean": [],
        "92C": [],
        "94L": ["USVI"],
        "99W": ["Vietnam"]
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
            .replaceAll("--are_is--", (threatsToLoc == 1 ? "is" : "are"))
            .replaceAll("--s_--", (threatsToLoc == 1 ? "" : "s"))
            .replaceAll("--92cThreat--", (threats[1]["92C"].includes(loc) ? `Threat to ${loc}` : `No Threat To ${loc}`))
            .replaceAll("--94lThreat--", (threats[1]["94L"].includes(loc) ? `Threat to ${loc}` : `No Threat To ${loc}`))
            .replaceAll("--99wThreat--", (threats[1]["99W"].includes(loc) ? `Threat to ${loc}` : `No Threat To ${loc}`))
            .replaceAll("--seanThreat--", (threats[1].Sean.includes(loc) ? `Threat to ${loc}` : `No Threat To ${loc}`))
    })
} else {
    document.body.innerHTML = 
    `
    <div last index storm>
        <div>
            <h1>You are not signed in</h1>
            <a href='./signin'>
                <button>Sign In</button>
                <br><br>
            </a>
            <h3>
                We do not store ANY information, we only get the data though the url at <br> ?usrnm=[[YOUR NAME WILL SHOW HERE]]&loc=[[WHERE YOU LIVE WILL SHOW HERE]]
            </h3>
            <a href='./newhere'>New Here? Click Here!</a>
        </div>
    </div>
    `
}

function reload(element) {
    element.src += '&'
}