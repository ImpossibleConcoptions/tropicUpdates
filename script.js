setTimeout(() => {
    document.body.hidden = false
    document.querySelector('html').style.backgroundImage = "none";
}, 0)

var passkeys = [
    "23FREE"
]
var passkey = location2.attributes["passkey"]

if (!passkeys.includes(passkey)) {
    document.body.innerHTML = 
    `
    <div last index storm>
        <div>
            <h1>You are not signed in</h1>
            <a href='./signin'>
                <button>Sign In</button>
            </a>
        </div>
    </div>
    `
}