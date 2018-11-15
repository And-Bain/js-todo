var form = document.getElementById('add-item')
var input = document.getElementById('input')
var list = document.getElementById('list')

function addItem(e) {
    e.preventDefault()
    var item = input.value 
    console.log('btn clicked')
    list.innerHTML += "<li>" + item + "</li>"
}


form.addEventListener('submit', addItem)
