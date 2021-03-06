'use strict'

let PRODUCTS_ARRAY = [
{HTMLid: 'bag', imgURL: './assets/bag.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'banana', imgURL: './assets/banana.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'bathroom', imgURL: './assets/bathroom.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'boots', imgURL: './assets/boots.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'breakfast', imgURL: './assets/breakfast.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'bubblegum', imgURL: './assets/bubblegum.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'chair', imgURL: './assets/chair.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'cthulhu', imgURL: './assets/cthulhu.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'dog-duck', imgURL: './assets/dog-duck.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'dragon', imgURL: './assets/dragon.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'pen', imgURL: './assets/pen.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'pet-sweep', imgURL: './assets/pet-sweep.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'scissors', imgURL: './assets/scissors.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'shark', imgURL: './assets/shark.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'sweep', imgURL: './assets/sweep.png', totalViews: 0, totalVotes: 0},
{HTMLid: 'tauntaun', imgURL: './assets/tauntaun.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'unicorn', imgURL: './assets/unicorn.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'water-can', imgURL: './assets/water-can.jpg', totalViews: 0, totalVotes: 0},
{HTMLid: 'wine-glass', imgURL: './assets/wine-glass.jpg', totalViews: 0, totalVotes: 0},

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
     if (clicks !== 25) {
         for (let i=0; i<3; i++) {
         let random = Math.floor(Math.random() * PRODUCTS_ARRAY.length -1 );



             let item = PRODUCTS_ARRAY.shift();
             PRODUCTS_ARRAY.splice(PRODUCTS_ARRAY.length -1 , 0, item );
         }
         for ( let i=0; i<3; i++) {
             let parent = document.getElementById(`img${i}Container`);
             parent.removeChild(parent.lastChild);
     }
console.log('clicks: ', clicks);
renderImages();


}else {
    let divs = document.getElementById('rightdiv');
    for(let i=1; i<divs.length - 1; i++) {
        divs[i].removeEventListener('click', handleClick);
    }
    console.log('you have reached 25 clicks')


    renderResults();
}


  
}
function renderResults() {
    let resultSection = document.getElementById('resultSection');
    let div = document.createElement('div');
    div.setAttribute('id', 'result');
    resultSection.appendChild(div);


    let h3 = document.createElement('ol');
    div.appendChild(h3);

    let ol = document.createElement('ol');
    div.appendChild(ol);





    for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
        let listItem = document.createElement('li');
    listItem.textContent =`${PRODUCTS_ARRAY[i].HTMLid} has ${PRODUCTS_ARRAY[i].totalVotes}`
        ol.appendChild(listItem);
    }
    
}
    function renderChart() {
        console.log('renderChart was called')
        const barData = {
          type: 'bar',
          data: {
            labels : [],
            datasets : [
              {
                data: [],
                backgroundColor: 'rgb(64, 211, 191',
                borderColor: 'rbb(46, 146, 133',
                pointBackgroundColor: 'rgb(46, 135, 100',
              }
            ]
          },
          options: {
            scales: {
              xAxes: [{
                maxBarThickness: 30,
              }],
              yAxes: [{
                gridLines: {
                  offsetGridLines: false,
                },
                ticks: {stepSize: 1},
                maintainAspectRatio: false,
              }]
            },
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Final Vote Data'
            }
          }
        };
      let container = document.getElementById('graph');
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      container.appendChild(canvas);
      for (let i=0; i< PRODUCTS_ARRAY.length; i++) {
        barData.data.labels.push(PRODUCTS_ARRAY[i].HTMLid)
        barData.data.datasets[0]['data'].push(PRODUCTS_ARRAY[i].totalVotes);
      }
    new Chart(ctx, barData);
    renderChart();
    }
      


  
    

(function startApp() {


    
    for (let i=0; i < 3; i++) {
       let imgContainer = document.getElementById(`img${i}Container`);
       imgContainer.addEventListener('click', handleClick);
    }
    renderImages();
    })();
