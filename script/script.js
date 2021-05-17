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


let bagObject = {
    HTMLid : 'bag',
    imgURL: './assets/bag.jpg',
    totalViews: 0,
    totalVoices: 0
}

let PRODUCTS_ARRAY = [
{HTMLid : 'bag', imgURL: './assets/bag.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'banana', imgURL: './assets/banana.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'bathroom', imgURL: './assets/bathroom.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'boots', imgURL: './assets/boots.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'breakfast', imgURL: './assets/breakfast.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'bubblegum', imgURL: './assets/bubblegum.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'chair', imgURL: './assets/chair.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'cthulhu', imgURL: './assets/cthulhu.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'dog-duck', imgURL: './assets/dog-duck.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'dragon', imgURL: './assets/dragon.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'pen', imgURL: './assets/pen.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'pet-sweep', imgURL: './assets/pet-sweep.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'scissors', imgURL: './assets/scissors.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'shark', imgURL: './assets/shark.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'sweep', imgURL: './assets/sweep.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'tauntaun', imgURL: './assets/tauntaun.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'unicorn', imgURL: './assets/unicorn.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'water-can', imgURL: './assets/water-can.jpg', totalViews: 0, totalVoices: 0},
{HTMLid : 'wine-glass', imgURL: './assets/wine-glass.jpg', totalViews: 0, totalVoices: 0},

]