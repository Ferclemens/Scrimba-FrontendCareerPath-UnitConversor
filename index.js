
//references
const inputEl = document.getElementById('input-el')
const btnEl = document.getElementById('btn-el')
const conversionEl = document.getElementById('conversion-box')
const themeBtnEl = document.getElementById('btn-theme')

//listeners
btnEl.addEventListener('click',function() {
    const units = inputEl.value
    render(units)
    inputEl.textContent = ''
})

//functions
/*  
    1 meter = 3.281 feet  
    1 liter = 0.264 gallon 
    1 kilogram = 2.204 pound 
*/

const unit = [3.281, 0.264, 2.204]

// render conversion results in html.
function render(number) {
    const results = unitsConversion(number)
    conversionEl.innerHTML = results
    
}

// change theme between dark and light.
function changeTheme() {
    if(themeBtnEl.textContent === '🌜') {
        themeBtnEl.textContent = '🌞'
        conversionEl.classList.add('dark')
    } else {
        themeBtnEl.textContent = '🌜'
        conversionEl.classList.remove('dark')
    }
}

//conversion of units.
function unitsConversion(units) {
    let results = [] 
    let divisionResult = null
    let multiplyResult = null

    for(let i = 0; i < unit.length; i++) {
        if(i === 0) {
            divisionResult = (units / unit[i]).toFixed(3)
            multiplyResult = (units * unit[i]).toFixed(3)
            results += `
                <div class="conversion-description">
                    <h2>Length (Meter/Feet)</h2>
                    <p>${units} meters = ${multiplyResult} feet | ${units} feet = ${divisionResult} meters</p>
                </div>
            `
        } else if(i === 1) {
            divisionResult = (units / unit[i]).toFixed(3)
            multiplyResult = (units * unit[i]).toFixed(3)
            results += `
                <div class="conversion-description">
                    <h2>Volume (Liters/Gallons)</h2>
                    <p>${units} liters = ${multiplyResult} gallons | ${units} gallons = ${divisionResult} liters</p>
                </div>
            `
        } else if(i === 2) {
            divisionResult = (units / unit[i]).toFixed(3)
            multiplyResult = (units * unit[i]).toFixed(3)
            results += `
                <div class="conversion-description">
                    <h2>Mass (Kilograms/Pounds)</h2>
                    <p>${units} kilos = ${multiplyResult} pounds | ${units} pounds = ${divisionResult} kilos</p>
                </div>
            `
        }

    }  
    //console.log(results);
    return results
    
}