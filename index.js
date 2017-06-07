const personForm = document.querySelector('#personForm')
const personAge = document.querySelector('#personAge')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const g = ev.target
    const details = document.querySelector('#details')
    const name = f.personName.value

    const boldedName = document.createElement('strong')
    boldedName.textContent = name
    
    details.appendChild(boldedName)  
    
    // heading.textContent = f.personName.value + ' is approximately ' 
    // + g.personAge.value + ' years old. That sucks. One year closer to death.'
}

personForm.addEventListener('submit', handleSubmit)