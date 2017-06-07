const personForm = document.querySelector('#personForm')
const personAge = document.querySelector('#personAge')

function renderColor(color) {
    const div = document.createElement('div')
    div.style.backgroundColor = color
    div.style.width = '100px'
    div.style.height = '50px'
    
    return div 
}

function renderListItem(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: ${value}`

    return item
}

function renderList(personData) {
    const list = document.createElement('ul')

    // ['name', 'favoriteColor', 'age']
    Object.keys(personData).map(function(label) {
        const item = renderListItem(label, personData[label])
        list.appendChild(item)
    })
    return list
}

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const g = ev.target
    const details = document.querySelector('#details')

    const favoriteColor = f.favoriteColor.value
    const age = f.age.value

    const person = {
        name: f.personName.value,
        favoriteColor: f.favoriteColor.value,
        age: f.age.value,
    }

    const colorDiv = `
    <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
    `
    const list = renderList(person)

    // const boldedName = document.createElement('strong')
    // boldedName.textContent = name
    // details.appendChild(boldedName) 
    
    // const list = document.createElement('ul')
    // list.appendChild(nameItem)
    // list.appendChild(colorItem)
    // list.appendChild(ageItem)

    details.appendChild(list)    
    
    // heading.textContent = f.personName.value + ' is approximately ' 
    // + g.personAge.value + ' years old. That sucks. One year closer to death.'
}

personForm.addEventListener('submit', handleSubmit)