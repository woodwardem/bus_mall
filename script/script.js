console.log('hello world');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

img1.addEventListener('click', function(){
    console.log('I am img1')
})
   
img2.addEventListener('click', function(){
    console.log('I am img2')
})

img3.addEventListener('click', function(){
    console.log('I am img3')
})
function runFunctionImage() {
    console.log('I am in img1');
}