let  score = JSON.parse(localStorage.getItem('score')) ||
{
  wins : 0,
  lose : 0,
  tie : 0

};

updateScore();



 let isAutoPlaying = false; 
 let interval;

function autoPlay(){
        if(!isAutoPlaying){
          
       interval =    setInterval(function(){
            const autoMove = pickComputerMove();
            playerGame(autoMove);
          }, 1000);

          isAutoPlaying = true;
        }
        else{
               
           clearInterval(interval);
           isAutoPlaying = false;

        }

 
 
}





function playerGame(move){
const  computerMove = pickComputerMove();
  if(move === 'rock')
  {
  if(computerMove === 'rock')
      result= 'tie';
 else if( computerMove === 'scissors')
      result = 'you win';
 else if(computerMove === 'paper')
      result = 'you loose';
  }
 
else if(move === 'paper' )
{
  
      if(computerMove === 'rock')
          result= 'you win';
      else if( computerMove === 'scissors')
          result = 'you loose';
      else if(computerMove === 'paper')
          result = 'tie';
}

else  if(move === 'scissors'){
        

  if(computerMove === 'rock')
          result= 'you loose';
 
   else if( computerMove === 'scissors')
          result = 'tie';

   else 
          result = 'you win';
}


if (result === 'you win'){
  score.wins += 1;
}

else if (result === 'you loose'){
   score.lose += 1;
}

else if(result ==='tie'){
  score.tie += 1;
}

localStorage.setItem('score',JSON.stringify(score));

    
      
    

    document.querySelector('.Js-move').innerHTML
    = `You:
    <img  src="images/${move}-emoji.png" 
    class="move-icon">

    <img src="images/${computerMove}-emoji.png"
    class="move-icon">
    computer:`;

    updateScore();


    document.querySelector('.Js-result').innerHTML 
    = result;
 
     
  }
  function updateScore(){
      
document.querySelector(".Js-id").innerHTML = 
`Wins :   ${score.wins}  Loses:   ${score.lose}   Ties:    ${score.tie}`;
  }


document.querySelector('.add-listener-button').addEventListener('click', () => {
  playerGame('scissors');
});

document.querySelector('.add-listener-rock').addEventListener('click', () => {
  playerGame('rock');
});

document.querySelector('.add-listener-paper').addEventListener('click', ()=> {
  playerGame('paper');
});


document.body.addEventListener('keydown', (event) => {
 if (event.key === 'r'){
  playerGame('rock');
  } else if(event.key === 'p'){
    playerGame('paper');
  }else if( event.key === 's'){
    playerGame('scissors');
  }

 });








  function pickComputerMove(){
      
      const randomMove = Math.random();

      
      if ( randomMove >= 0 && randomMove < 1/3){
               computerMove =  'rock';
      }
      else if ( randomMove >= 1/3 && randomMove < 2/3){
               computerMove = 'scissors';
      }
      else if( randomMove >= 2/3 && randomMove < 1){
               computerMove = 'paper';
      }
       
      return computerMove;
  }