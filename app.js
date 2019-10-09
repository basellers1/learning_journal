'use strict';
function correctAnswers(){
  var numCorrect = 0;

  function welcomeName(){
    var userName = prompt('What is your name?').toLowerCase();
    alert('Welcome, ' + userName + '!');
    console.log('The user\'s name is ' + userName);
  }
  welcomeName();

  function initiate(){
    var hello = prompt('Do you want to play a game?').toLowerCase();
    if (hello === 'y' || hello === 'yes') {
      alert('That\'s fantastic! Let\'s get started');
      console.log('User wants to play');
    }
    else {
      alert('Maybe another day.');
      console.log('Maybe another day.');
    }
  }
  initiate();

  function school(){
    var userAnswer = prompt('I went to a private school in Hawaii, can you guess which one?').toUpperCase();
    if (userAnswer === 'UNIVERSITY OF HAWAII' || userAnswer === 'UH'){
      alert('Sorry, that is not correct. UH is a public University');
      console.log('User guessed UH');
    }
    else if (userAnswer === 'HAWAII PACIFIC UNIVERSITY' || userAnswer === 'HPU') {
      alert('Yes,that is the right answer.');
      numCorrect++;
      console.log('User got it right');

    } else {
      alert('Sorry, that is not correct.  That must be a new one.');
      console.log('Sorry, that is not correct.  That must be a new one.');
    }
  }
  school();

  function userAnswerTwo(){
    var userAnswer2 = prompt('Memorable jobs for me were at Holland America Line, Hyatt Regency Waikiki. Can you guess my Major? ');
    if (userAnswer2 === 'Travel'){
      alert('You are right!. I got my B.S.B.A. degree with a Travel Industry Management Major.');
      numCorrect++;
      console.log('User figured it out');

    } else {
      alert('Actually, I got my B.S.B.A. degree with a Travel Industry Management Major.');
      console.log('User guessed wrong');
    }
  }
  userAnswerTwo();

  function userAnswerThree(){
    var userAnswer3 = prompt('Do you know which forms of exercise I like?').toLowerCase();
    if (userAnswer3 === 'y' || userAnswer3 === 'yes' || userAnswer3 === 'yoga' ) {
      alert('Wow, that is a great guess!');
      numCorrect++;
      console.log('User answered yes or correct');

    } else {
      alert('I wouldn\'t expect you to.  I like yoga');
      console.log('User answered no');
    }
  }
  userAnswerThree();

  function userAnswerFour(){
    var userAnswer4 = prompt('Do you think I have pet?').toUpperCase();
    if (userAnswer4 === 'N' || userAnswer4 === 'NO') {
      alert('You are right!');
      numCorrect++;
      console.log('User guessed No');

    } else {
      alert('You are not correct, sorry');
      console.log('user guessed yes');
    }
  }
  userAnswerFour();

  function userAnswerFive(){
    var userAnswer5 = prompt('Do you think I like coding?').toUpperCase();
    if (userAnswer5 === 'Y' || userAnswer5 === 'YES') {
      alert('You are right!');
      numCorrect++;
      console.log('User guessed YES');

    } else {
      alert('You are not correct');
      console.log('user guessed NO');
    };
  }
  userAnswerFive;

  function userAnswerSix(){
    var correctAnswer = 9;
    for(var numGuess = 0; numGuess < 4; numGuess++){
      var userAnswer6 = parseInt(prompt('How many Pokeman did I catch yesterday?'));
      if(userAnswer6 === correctAnswer){
        alert('You are right');
        numCorrect++;
        console.log('User guessed right');
        break;
      } else {

        if(userAnswer6 < correctAnswer){
          alert('You guessed low. Try again');
          console.log('User guessed too low');
        }
        if(userAnswer6 > correctAnswer){
          alert('You guessed too high. Try again.');
          console.log('User guessed too high');
        }
      }
    }
  }
  userAnswerSix();

  function userAnswerSeven(){
    var Pokeman = ['BEEDRILL','BULBASAUR','CUBONE','DEWGONG','KRABBY','MEOWTH','ODDISH','JIGGLYPUFF','POLIWAG','TENTACOOL'];
    console.log(Pokeman.length);
    var numGuesses = 0;
    var guessing = true;

    while (guessing && numGuesses < 6){
      numGuesses++;
      var userAnswer7 = prompt('Can you guess one of my favorite Pokeman?').toUpperCase();
      for (var i = 0; i < Pokeman.length; i++){
        if(userAnswer7 === Pokeman[i]){
          alert('Yes, I like that one.');
          numCorrect++;
          guessing = false;
          break;
        }
      }
      if (guessing === true){
        alert('That Pokeman not on my list.');
        console.log('user guessed wrong');
      }
      numGuesses++;
      if (numGuesses >= 6){
        alert('You didn\'t guess any of my favorites');
        console.log('User didn\'t guess any');
        break;
      }
    }
    console.log('User got ' + numCorrect + ' right');
    alert('Congrats, you got ' + numCorrect + ' correct!');
  }
  userAnswerSeven();
}
correctAnswers();
