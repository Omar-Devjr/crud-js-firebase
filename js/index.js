import { saveTask } from "./firebase.js"

window.addEventListener('DOMContentLoaded', () => {

})

const taksForm = document.getElementById('task-form')

taksForm.addEventListener('submit', (e) => { 
e.preventDefault()

const title = taksForm['task-title']
const description = taksForm['task-description']

saveTask(title.value, description.value)


})


