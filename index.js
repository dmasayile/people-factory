const personForm = document.querySelector('#personForm')
const personAge = document.querySelector('#personAge')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const g = ev.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + ' is approximately ' 
    + g.personAge.value + ' years old. That sucks. One year closer to death.'
}

personForm.addEventListener('submit', handleSubmit)