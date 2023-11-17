setTimeout(() => {
    document.body.hidden = false
    document.querySelector('html').style.backgroundImage = "none";
}, 0)

// add # to keys!
var passkeys = [
    "23FREE#"
]
var passkey = location2.attributes["passkey"]

if (!passkeys.includes(passkey)) {
    document.body.innerHTML = 
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sign In – LHW Hurricane Headquarters</title>
    <style>
        * {
            font-family: Arial, Helvetica, sans-serif;
        }

        [storm] {
            background-color: rgba(0, 68, 255, 0.75);
            margin: 10px;
            overflow: hidden;
            color: rgb(255, 255, 255);
            padding: 1rem;
            border-radius: 8px;
            z-index: 1;
            position: relative;
            display: flex;
        }

        [index] {
            background-color: rgba(66, 116, 255, 0.75);
            align-items: center;
        }

        body {
            background-image: hsl(0, 39%, 70%);
            margin: 0 auto;
        }

        footer {
            background-color: rgb(24, 255, 86);
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
            z-index: 1;
        }

        [hazard] {
            color: rgb(255, 151, 151);
        }

        [tdcl] {
            color:rgb(255, 255, 255);
        }

        th, td {
            padding: 5px;
        }

        [NOW] {
            font-weight: 900;
            text-decoration: underline;
        }

        [CAT] {
            font-weight: 900;
            color: white;
            text-align: center;
        }

        [OS] {
            color:black;
            text-decoration: underline;
        }

        [TD] {
            background-color: greenyellow;
            color: black;
        }
        
        [TS] {
            background-color: green;
        }

        [H1],[H2] {
            background-color: orange;
        }

        [H3],[H4] {
            background-color: orangered;
        }

        [H5] {
            background-color: darkred;
        }

        [title] {
            display: flex;
        }

        [src="./recentStorm.png"] {
            padding-left: 20px;
            width: 40px;
            height: 40px;
        }
        
        [p2m] {
            padding-left: 200px;
        }

        input {
            background-color: black;
            color: white;
        }

        [bold] {
            font-weight: 900;
        }

        h2 {
            font-weight: 400;
        }

        [seeDetails] {
            background-color: rgb(255, 106, 0);
            border: none;
            font-size: 20px;
            padding: 10px;
            border-radius: 10px;
            color: white;
        }

        [seeDetails]:hover {
            cursor: pointer;
            background-color: rgba(255, 106, 0, 0.95);
        }

        [last] {
            margin-bottom: 50px;
        }

        [bodied] {
            margin: 10px;
        }

        [shml], button {
            border: none;
            font-size: 20px;
            padding: 7px;
            border-radius: 10px;
            margin-left: 10px;
        }

        [shml]:hover, button:hover {
            cursor: pointer;
            background-color: rgba(255, 203, 165, 0.95);
        }
        
        a {
            text-decoration: none;
            color: inherit;
        }

        a:hover {
            color: white;
        }

        img {
            border-radius: 20px;
        }

        [under] {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div storm index last>
        <div>
            <h1>If you would like a passkey, please <a under href="tel:+1 (713) 264-1913">contact me</a></h1>
            <form action="#">
                <label for="usrnm">Passkey:</label><br>
                <input type="text" name="passkey"/><br><br>
                <input type="submit" value="Open Page">
            </form>
        </div>
    </div>
    <footer>
        Made with ❤️ by Leonard Lamparter <a href="tel:+1 (713) 264-1913">(Contact Me)</a>
    </footer>
</body>
</html>
    `
}