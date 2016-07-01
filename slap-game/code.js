var damageValue= 0;
var coins = 0;
var monsterHealth=100


function damage(x){
  totalDamage=x+damageValue;
  monsterHealth=monsterHealth-totalDamage ;
  if(monsterHealth>0){
    document.getElementById("damagePoints").innerHTML= "Damage: "+ (totalDamage);
    document.getElementById("monsterHealth").innerHTML="Health: "+(monsterHealth)
  }
  else{
    coins=coins+5
    //  alert("In a stunning turn of events you managed to kill the Monster!")
     document.getElementById("img").innerHTML= '<img height="200px" src="death.png">'
     document.getElementById("monsterHealth").innerHTML="Health: 0"
     document.getElementById("coins").innerHTML="Coins: "+ coins
     alert("In a stunning turn of events you managed to kill the Monster!")
  }
}

function reset(){
  damageValue= 0;
  coins = 0;
  monsterHealth = 100;
  document.getElementById("monsterHealth").innerHTML="Health: "+(monsterHealth)

}
reset()