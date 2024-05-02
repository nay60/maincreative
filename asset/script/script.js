var text = "Main Creative vous propose de la retouche comme de la création de vêtements.";
var i = 0;
var speed = 100; // Vitesse d'écriture en millisecondes

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(function() {
      document.getElementById("typed-text").innerHTML = "";
      i = 0;
      typeWriter();
    }, 10000);
  }
}

if (document.getElementById("typed-text")) {
  typeWriter();
}

window.onload = function() {
  document.querySelector('.allnav img').addEventListener('click', function() {
      window.location.href = 'index.html';
  });
}


var exp = document.querySelectorAll('.experiences div');
var currentExp = 0;

exp[currentExp].classList.add('activeexp');

document.querySelector('.nextexp').addEventListener('click', function() {
    exp[currentExp].classList.remove('activeexp');
    currentExp = (currentExp + 1) % exp.length;
    exp[currentExp].classList.add('activeexp');
})


var image = document.querySelectorAll('.carousel img');
image = Array.from(image);
image.splice(3,1);
var currentimg = 0;

image[currentimg].classList.add('active');

document.querySelector('.next').addEventListener('click', function() {
    image[currentimg].classList.remove('active');
    currentimg = (currentimg + 1) % image.length;
    image[currentimg].classList.add('active');
})
