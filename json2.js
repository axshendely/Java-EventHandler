document.body.classList.add('blue-background');
const mybutton = document.getElementById('mybutton alert');
mybutton.addEventListener('click', function (ev) {
    alert("button clicked")});

const mybutton2 = document.getElementById('mybutton2 change')
mybutton2.addEventListener("click", function (ec){
    document.body.classList.toggle('red-background');
    alert('Color Has Been Changed')});
