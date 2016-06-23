var health = 100;
var y=['','oof!!','ouch!!','gahh!!','not pleasent!!','really!?!','thats going to hurt tomorrow...','was that necessary!!?'];

function damage(x){
  health=health-x;
  var n=Math.floor((Math.random() * 7) + 1  );
  if(health>0){
    document.getElementById("health").innerHTML= health;
    document.getElementById("sound").innerHTML= y[n].toUpperCase();
  }
  else{
    alert("Awww Bummer You Died".toUpperCase());
    document.getElementById("health").innerHTML="0";
    document.getElementById("dummy").className="dummyhalf"
  }
}


function restart(){
  health=100;
  document.getElementById("health").innerHTML= health;
}
