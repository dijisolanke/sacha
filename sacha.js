var cart = document.querySelectorAll('.add-cart');

var products =[
  {
    name:'Töms',
    price: 30,
    tag: 'toms',
    inCart: 0
  },
  {
    name:'Rîc',
    price: 30,
    tag:'ric',
    inCart: 0
  },
  {
    name: 'Alï',
    price: 30,
    tag:'ali',
    inCart: 0
  },
  {
    name:'Diñi',
    price: 30,
    tag:'dini',
    inCart: 0
  },
  {
    name:'Ræ',
    price: 30,
    tag:'rae',
    inCart: 0
  },
  {
    name:'Bruce',
    price: 30,
    tag:'bruce',
    inCart: 0
  },
  {
    name: 'Zedd',
    price: 30,
    tag:'zedd',
    inCart: 0
  },
  {
    name:'Wil ø',
    price: 30,
    tag:'wilo',
    inCart: 0,
  },
  {
    name:'Loui',
    price: 30,
    tag:'loui',
    inCart: 0
  },
  {
    name:'Chø',
    price: 30,
    tag:'cho',
    inCart: 0,
  },
  {
    name:'Ryú',
    price: 30,
    tag:'ryu',
    inCart: 0
  },
  {
    name:'Nelø',
    price: 30,
    tag:'nelo',
    inCart: 0
  },
  {
    name: 'Omï',
    price: 30,
    tag: 'omi',
    inCart: 0
  },
  {
    name:'Huė',
    price: 30,
    tag:'hue',
    inCart: 0
  },
  {
    name: 'Svēn',
    price: 30,
    tag:'sven',
    inCart: 0
  },
  {
    name:'Ola',
    price: 30,
    tag:'ola',
    inCart: 0
  },
  {
    name:'Drû',
    price: 30,
    tag:'dru',
    inCart: 0
  },
  {
    name:'loui',
    price: 30,
    tag:'loui',
    inCart: 0
  },
  {
    name:'Ell',
    price: 30,
    tag:'elle',
    inCart: 0
  },
  {
    name: 'Monå',
    price: 30,
    tag:'mona',
    inCart: 0
  },
  {
    name: 'Moyo',
    price: 30,
    tag:'moyo',
    inCart: 0
  }
];

for(var i = 0; i < cart.length; i++){
  cart[i].addEventListener('click', () =>{
    cartNumber(products[i]);
  })
}

function onLoadCartNumber(){
  var numberOfItems = localStorage.getItem('cartNumber');

  if( numberOfItems ){
    document.querySelector('.cart span').textContent = numberOfItems;
  }

}

function cartNumber(products){
  console.log('the product clicked is', products)
  var numberOfItems = localStorage.getItem('cartNumber');

  numberOfItems = parseInt(numberOfItems);

  if( numberOfItems ){
    localStorage.setItem("cartNumber", numberOfItems + 1);
    document.querySelector('.cart span').textContent = numberOfItems + 1;

  } else{
    localStorage.setItem("cartNumber", 1);
    document.querySelector('.cart span').textContent = 1;
  }

}



onLoadCartNumber();









// THIS BIT WORKS (LINE 32 TILL LINE 45)

























// page1 main image below

imgCycle();
function imgCycle(){
  var picture = $('.topPic');
  var pos = 0;
  var runCycle = setInterval(frame, 20);


  function frame(){
    if(pos == 40){
      clearInterval(runCycle);
    }else {
      pos++;
      picture.css('marginTop', pos + 'px');
    }
  };
};



moveUp();
function moveUp(){
  var picture = $('.glassTopPic');
  var pos = 0;
  var runCycle = setInterval(frame, 15);

  function frame(){
    if (pos == -30){
      clearInterval(runCycle);
    } else {
      pos--;
      picture.css('top', pos + 'px');
    }
  }

}


albumPics();
function albumPics(){
  var set = [
    $('.glassFrame')
  ]
  console.log(set);
  function lineUp(){
    set.css('top', 1500 + 'px')
  }

}




















//sldk
