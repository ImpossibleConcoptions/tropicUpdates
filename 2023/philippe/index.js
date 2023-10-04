var where = document.getElementById('where')
var result = document.getElementById('result')

var data = {
    'USVI' : `
    Conditions for the USVI:<br/><br/>
    
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
    Please Be More Specific (Use State Name)
    `
}

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