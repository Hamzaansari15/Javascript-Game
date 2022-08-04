var count = 250;
window.onkeydown = function () {
  console.log(event.keyCode);
  var character = document.getElementById("player1");
  var character2 = document.getElementById("player2");
  if (event.keyCode === 68 ) {
    character.src = "image/kyo-run.gif";
    character.src = "image/kyo1.gif";
    count = count + 50;
    console.log(count);
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "image/kyo-run.gif";
      character.src = "image/kyo1.gif";
    }, 100);
  }
  if (event.keyCode === 65) {
    character.src = "image/kyo-run.gif";
    count = count - 20;
    console.log(count);
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "image/kyo1.gif";
    },
 100);
  }
  
  if (event.keyCode === 83) {

    character.src = "image/kyo-down.gif";
    setTimeout(function () {
      character.src = "image/kyo1.gif";
    }, 1000);
  }
    
  if (event.keyCode === 87) {

    character.src = "image/kyo-jump.gif";
    setTimeout(function () {
      character.src = "image/kyo1.gif";
    }, 1000);
  }

  if (event.keyCode === 74) {

    character.src = "image/kyo-a.gif";
    character2.src = "image/iro-dam.gif";
    setTimeout(function () {
      character.src = "image/kyo1.gif";
      character2.src = "image/iori-1.gif";
   
    }, 1000);
  }

  if (event.keyCode === 75) {

    character.src = "image/kyo-s.gif";
    setTimeout(function () {
      character.src = "image/kyo1.gif";

    }, 2800);
  }
  if (event.keyCode === 76) {

    character.src = "image/kyo-d.gif";
    setTimeout(function () {
      character.src = "image/kyo1.gif";

    }, 2800);
  }
  if (event.keyCode === 77 ) {
    character.src = "image/kyo-f.gif";
    setTimeout(function () {
      character.src = "image/kyo1.gif";
    }, 1000);
  }


  if (event.keyCode === 75) {

    character.src = "image/kyo-s.gif";
    character2.src = "image/iro-dam.gif";
    setTimeout(function () {
      character.src = "image/kyo1.gif";
      character2.src = "image/iori-1.gif";

    }, 2800);
  }
  if (event.keyCode === 76) {

    character.src = "image/kyo-d.gif";
    character2.src = "image/iro-dam.gif";
    setTimeout(function () {
      character.src = "image/kyo1.gif";
      character2.src = "image/iori-1.gif";

    }, 2800);
  }


  if (event.keyCode === 37 ) {
    character2.src = "image/2.gif";
    count = count + 50;
    console.log(count);
    character2.style.right = count + "px";
    setTimeout(function () {
      character2.src = "image/2.gif";
      character2.src = "image/iori-1.gif";
    }, 100);
  }


  if (event.keyCode === 39) {
    character2.src = "image/3.gif";
    count = count - 20;
    console.log(count);
    character2.style.right = count + "px";
    setTimeout(function () {
      character2.src = "image/3.gif";
      character2.src = "image/iori-1.gif";
    },
 100);
  }
  
  if (event.keyCode === 38) {

    character2.src = "image/iori-jump.gif";
    setTimeout(function () {
      character2.src = "image/iori-1.gif";
    }, 1000);
  }
    
  if (event.keyCode === 40) {

    character2.src = "image/iori-4.gif";
    setTimeout(function () {
      character2.src = "image/iori-1.gif";
    }, 1000);
  }

  if (event.keyCode === 96) {

    character2.src = "image/attack.gif";
    character.src = "image/kyo-dam.gif";
    setTimeout(function () {
      character2.src = "image/iori-1.gif";
      character.src = "image/kyo1.gif";
   
    }, 1000);
  }

 
  if (event.keyCode === 97) {

    character2.src = "image/attack-2.gif";
    character.src = "image/kyo-dam.gif";
    setTimeout(function () {
      character2.src = "image/iori-1.gif";
      character.src = "image/kyo1.gif";

    }, 4800);
  }
  if (event.keyCode === 98) {

    character2.src = "image/attack-3.gif";
    character.src = "image/kyo-dam.gif";
    setTimeout(function () {
      character2.src = "image/iori-1.gif";
      character.src = "image/kyo1.gif";

    }, 5800);
  }







}