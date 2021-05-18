'use strict'

let img0Container = document.getElementById('img0Container');
let img1Container = document.getElementById('img1Container');
let img2Container = document.getElementById('img2Container');

img1Container.addEventListener('click', function(){
    console.log('I am img1Container')
})
   
img2Container.addEventListener('click', function(){
    console.log('I am img2Container')
})

img3Container.addEventListener('click', function(){
    console.log('I am img3Container')
})
function runFunctionImage() {
    console.log('I am in img1Container');
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


function renderImages() {
 
 for ( let i=0; i<=2; i++)
 
    //1. get element from html that we wnat to attatch to the image
    //2. create an image element
    // set src property of the image to the image url property of the item
    // 4. append the image to the div element
 let imgContainer = document.getElementById('img1Container');
}