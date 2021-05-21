'use strict'

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
let clicks = 0;


function renderImages() {
for (let i=0; i<=2; i++) {
    let imgContainer = document.getElementById(`img${i}Container`);
    let img = document.createElement('img');
    imgContainer.appendChild(img);
    img.setAttribute('src', PRODUCTS_ARRAY[i].imgURL);
    img.setAttribute('id', PRODUCTS_ARRAY[i].HTMLid);
    img.setAttribute('class', 'item');

    PRODUCTS_ARRAY[i].totalViews++;
    console.log('total views: ', PRODUCTS_ARRAY[i].HTMLid, PRODUCTS_ARRAY[i].totalViews)
}


}

function handleClick(event) {
    clicks++;
    console.log('I was clicked, and my id is : ', event.target.id)
    let imageid = event.target.id;
    for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
        if ( imageid === PRODUCTS_ARRAY[i].HTMLid) {
         PRODUCTS_ARRAY[i].totalVotes++
         console.log('total votes' , PRODUCTS_ARRAY[i].totalVotes);
        }
    }
}

for ( let i=0; i<3; i++) {
    PRODUCTS_ARRAY.shift();
}
(function startApp() {

    //alert('poll has started');

    
    for (let i=0; i < 3; i++) {
        let imgContainer = document.getElementById(`img${i}Container`);
        imgContainer.addEventListener('click', handleClick);
    
}
    
renderImages();

})();