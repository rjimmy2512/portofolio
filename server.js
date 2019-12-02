'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  };
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));


app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

// Function for images sliding
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName('mySlides');
//   var dots = document.getElementsByClassName('dot');
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1;}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex-1].style.display = 'block';
//   dots[slideIndex-1].className += ' active';
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

var i = 0; //start point;
var images = [];
var time = 3000;

//Image list
images[0] = 'code.jpg';
images[1] = 'programming.jpg';
images[2] = 'reference.jpg';

//Change image function
function changeImg() {
  document.pic_slideshow.src = images[i];
  if(i < images.length -1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg(), time);
}

('index.html').onload = changeImg();
