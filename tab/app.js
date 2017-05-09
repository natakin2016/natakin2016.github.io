setInterval(function(){
    var date=new Date
    var hour=date.getHours().toString()
    var min=date.getMinutes().toString()
    var sec=date.getSeconds().toString()
    var month=date.getMonth().toString()
    var day=date.getDate().toString()
    var year=date.getFullYear().toString()
    var week=date.getDay().toString()
    if(hour.length<2){
        hour='0'+hour
    }
      if(min.length<2){
        min='0'+min
    }
      if(sec.length<2){
        sec='0'+sec
    }

        if(week=1){
        week='Mon'
    }
    else if(week=2){
        week='Tues'
    }
    else if(week=3){
        week='Wed'
    }
    else if(week=4){
        week='Thurs'
    }
    else if(week=5){
        week='Fri'
    }
    else if(week=6){
        week='Sat'
    }
    else if(week=7){
        week='Sun'
    }

    $('#clock').text(`${hour}:${min}`)
    $('#date').text(`${week}, ${month}.${day}.${year}`)
},10000)
function clock(){
      var date=new Date
    var hour=date.getHours().toString()
    var min=date.getMinutes().toString()
    var sec=date.getSeconds().toString()
    var month=date.getMonth().toString()
    var day=date.getDate().toString()
    var year=date.getFullYear().toString()
    var week=date.getDay().toString()
    if(hour.length<2){
        hour='0'+hour
    }
      if(min.length<2){
        min='0'+min
    }
      if(sec.length<2){
        sec='0'+sec
    }
    if(week=1){
        week='Mon'
    }
    else if(week=2){
        week='Tues'
    }
    else if(week=3){
        week='Wed'
    }
    else if(week=4){
        week='Thurs'
    }
    else if(week=5){
        week='Fri'
    }
    else if(week=6){
        week='Sat'
    }
    else if(week=7){
        week='Sun'
    }


    $('#clock').text(`${hour}:${min}`)
    $('#date').text(`${week}, ${month}.${day}.${year}`)
}
clock()

//quote

    function quote(){
    	var quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	    {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	name:"Isaac Asimov"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"Don Marquis"
	    },
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"Ellen DeGeneres"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Atheism is a non-prophet organization.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }

	];
    var quotenum=0;
        for(var i=0;i<=quoteSource.length;i++){
            quotenum=quotenum+1
        }
        console.log(quotenum)
        var randomnumber=Math.floor(Math.random()*quotenum)
        $('#quote').append(`<h1>${quoteSource[randomnumber].quote}<h3>-${quoteSource[randomnumber].name}</h3>`)
    }
    quote()
//Firebase Creation
    var config = {
    apiKey: "AIzaSyBgskY_4NPcS9zDhKqc2kKitt-EXPZvuEk",
    authDomain: "newtab-3a411.firebaseapp.com",
    databaseURL: "https://newtab-3a411.firebaseio.com",
    projectId: "newtab-3a411",
    storageBucket: "newtab-3a411.appspot.com",
    messagingSenderId: "787390182154"
  };
    firebase.initializeApp(config);
    var db = firebase.database()
    var newTabRef = firebase.database().ref('nat')
    var id = 0
    var snapshot;
    var newTab='no change'
    function updateDataList() {
        newTabRef.on('value', function (snap) {
        var snapshot = snap.val()
        localStorage.setItem('snapshot', JSON.stringify(snapshot))
        })
        newTab = JSON.parse(localStorage.getItem('snapshot'))
     }
    updateDataList()

//To Do List
    //draw
        function drawToDoList(){
             $('#list').text('')
            for(var key in newTab['todo'] ){
                console.log(newTab['todo'][`${key}`].content)
                $('#list').append(`<h3 id=${key}>${newTab['todo'][`${key}`]} <span onclick="removeItem(${key})"
                style="color:red;">&times;</span></h3><br>`)
            }
        }
        drawToDoList()
    //add
    function TodoListItem(value){
        this.content=value
    }
    function addItemToDoList(value){
        var id=new Date
        id=id.valueOf()
        firebase.database().ref('nat/todo').child(`${id}`).set(value)
        $('#todoListAdd').val('')
        updateDataList()
        drawToDoList()
    
    }
    $('#todoListAdd').keypress(function(e){
        var key=e.which
        console.log(key)
        if(key==13){
             e.preventDefault();
          addItemToDoList($('#todoListAdd').val())
        }
    })

    //removeItem
    function removeItem(key){
        for(var id in newTab['todo'] ){
            if(id==key){
                 firebase.database().ref('nat/todo').child(`${id}`).remove()
                 updateDataList()
                 drawToDoList()
            }
        }
    }
