$bouton = document.getElementById("bouton");
$affichage = document.getElementById("affichage");
$multiplicateur = document.getElementById("multiplicateur");
$compte=document.getElementById("compte");
$prix = document.getElementById("prix");


var score = 198;
var compteur = 1;
var prix = 50;

function scoreUp(){
  score = score+1*compteur;
  $affichage.innerHTML = score;
}

function incrementer(){
  if (score<prix){
  	score = score
  }
  else{
  compteur++;
  score = score-prix;
  prix = prix*2;
  $affichage.innerHTML = score;
  $compte.innerHTML = compteur;
  $prix.innerHTML = prix;
  }
}

function autoClick(){
    if (score>=200){
  score = score-200;
  setIntervall(function(){
  	scoreUp();
  },1000);
  }
  $affichage.innerHTML = score;
}

$bouton.onclick = scoreUp;
$multiplicateur.onclick = incrementer;
$autoclick.onclick = autoClick;
