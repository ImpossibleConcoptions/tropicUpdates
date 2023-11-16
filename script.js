setTimeout(() => {
    document.body.hidden = false
    document.querySelector('html').style.backgroundImage = "none";
}, 0)

var username = location2.attributes["usrnm"]

if (username != undefined) {
    document.querySelectorAll("[usrloc]").forEach(elm => {
        elm.innerHTML = elm.innerHTML.toString().replaceAll("--username--", username)
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
                We do not store ANY information
            </h3>
        </div>
    </div>
    `
}