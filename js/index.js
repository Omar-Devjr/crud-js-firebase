window.addEventListener('DOMContentLoaded', => () {

})

const taksForm = document.getElementById('task-form')

taksForm.addEventListener('submit', (e) => { 
e.preventDefaul()
console.log('submitted')
})