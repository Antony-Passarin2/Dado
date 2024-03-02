function rollDice(dice) {
    var dice = document.getElementById(dice);
    var faces = dice.getElementsByClassName('face');
    var randomNumber = Math.floor(Math.random() * 6);
    
    for (var i = 0; i < faces.length; i++) {
      faces[i].classList.remove('show');
    }
    
    setTimeout(function() {
      faces[randomNumber].classList.add('show');
    }, 500); // Delay para simular o rolamento do dado
    
    dice.style.animation = 'roll 1s forwards'; // Adiciona a animação de rolagem
    setTimeout(function() {
      dice.style.animation = ''; // Remove a animação após a rolagem
    }, 1000); // Tempo da animação de rolagem
  }
  function rollDice(diceId) {
    var dice = document.getElementById(diceId);
    var faces = dice.getElementsByClassName('face');
    var randomNumber = Math.floor(Math.random() * 6);
    
    for (var i = 0; i < faces.length; i++) {
      faces[i].classList.remove('show');
    }
    
    setTimeout(function() {
      faces[randomNumber].classList.add('show');
    }, 500); // Delay para simular o rolamento do dado
    
    dice.style.animation = 'roll 1s forwards'; // Adiciona a animação de rolagem
    setTimeout(function() {
      dice.style.animation = ''; // Remove a animação após a rolagem
    }, 1000); // Tempo da animação de rolagem
  }
    