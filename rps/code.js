function rock(){
  var comp=Math.floor((Math.random() * 3) + 1);
  
  if (comp==1){
    document.getElementById("win").innerHTML ="Rock--You Tie";
  }
  
  else if(comp==2){
     document.getElementById("win").innerHTML ="Paper--You Lose";
  }
  
  else if(comp==3){
     document.getElementById("win").innerHTML ="Scissors--You Win!!!";
	}
}

function paper(){
  var comp=Math.floor((Math.random() * 3) + 1);
  
  if (comp==1){
    document.getElementById("win").innerHTML ="Rock--You Win!!!";
  }
  
  else if(comp==2){
    document.getElementById("win").innerHTML ="Paper--You Tie";
  }
  
  else if(comp==3){
    document.getElementById("win").innerHTML ="Scissors--You Lose";
	}
}

function scissors(){
  var comp=Math.floor((Math.random() * 3) + 1);
  
  if (comp==1){
    document.getElementById("win").innerHTML ="Rock-- You Lose";
  }
  
  else if(comp==2){
    document.getElementById("win").innerHTML ="Paper--You Win!!!";
  }
  
  else if(comp==3){
    document.getElementById("win").innerHTML ="Scissors--Tie";
	}
}



function runCode(){
  alert("This Button Works")
}