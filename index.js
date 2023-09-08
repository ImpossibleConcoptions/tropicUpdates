var where = document.getElementById('where')
var result = document.getElementById('result')

var data = {
    'USVI' : `
    Conditions for the USVI:<br/><br/>
    <span non_hazard>💨 Wind: Low</span><br/>
    <span mod_hazard>🌧 Rain: Moderate</span><br/>
    <span bold hazard>Rip Tides: Life-theatening</span><br/>
    <span hazard>🌊Waves: High</span><br/>
    <span mod_hazard>🪨 Erosion: Yes, Mostly sand</span><br/><br/>
    <span bold hazard>STAY AWAY FROM WATER</span>
    `,
    'Virgin Islands' : `
    Conditions for the USVI:<br/><br/>
    <span non_hazard>💨 Wind: Low</span><br/>
    <span mod_hazard>🌧 Rain: Moderate</span><br/>
    <span bold hazard>Rip Tides: Life-theatening</span><br/>
    <span hazard>🌊Waves: High</span><br/>
    <span mod_hazard>🪨 Erosion: Yes, Mostly sand</span><br/><br/>
    <span bold hazard>STAY AWAY FROM WATER</span>
    `,
    'US' : `
    Conditions for the US:<br/><br/>
    Please Be More Specific (Use State Name)
    `
}

var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

var statesDan = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Jersey','New Mexico','New York','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Dakota','Tennessee','Texas','Utah','Vermont','Washington','West Virginia','Wisconsin','Wyoming']

statesDan = statesDan.filter(v => !states.includes(v))
console.log(statesDan)

for (var i=0; i<states.length; i++) {
    data[states[i]] = `
    Conditions for ${states[i]}:<br/><br/>
    <span bold hazard>NO HAZARD FOR ${states[i].toUpperCase()}</span>
    `
}

for (var i=0; i<country_list.length; i++) {
    data[country_list[i]] = `
    Conditions for ${country_list[i]}:<br/><br/>
    <span bold hazard>NO HAZARD FOR ${country_list[i].toUpperCase()}</span>
    `
}

for (var i=0; i<statesDan.length; i++) {
    data[statesDan[i]] = `
    Conditions for the ${statesDan[i]}:<br/><br/>
    <span non_hazard>💨 Wind: Low</span><br/>
    <span mod_hazard>🌧 Rain: Low</span><br/>
    <span bold mod_hazard>Rip Tides: High</span><br/>
    <span hazard>🌊Waves: High</span><br/>
    <span non_hazard>🪨 Erosion: No</span><br/><br/>
    <span bold hazard>STAY AWAY FROM WATER</span>
    `
}

function update() {
    result.innerHTML = (
        data[where.value.replace('UK', 'United Kingdom')]==undefined ? "<span bold>Loading...</span>" : data[where.value.replace('UK', 'United Kingdom')]
    )
}

setInterval(update, 1000)