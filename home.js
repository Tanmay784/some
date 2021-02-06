function getage() {
    let dob=prompt("enter DOB in this format day/month/year (example 2/4/1990);
    let lis=dob.split('/')
    var birthyear=parseInt(lis[2]);
    var birthmonth=parseInt(lis[1]);
    var birthday=parseInt(lis[0])
    let days1=(2020-birthyear);
    let days2=13-birthmonth;
    let days=35-birthday;
    if(days>29){
        var u=days-30;
        days=days+u;
        days2++;
        if(days==30){
            days=0;
        }
}
    var h1=document.createElement('h1');
    var answer=document.createTextNode("you are "+days1+" years "+days2+" month "+days+" days old");
    h1.setAttribute('id','getage1');
    h1.appendChild(answer);
    document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
    document.getElementById("getage1").remove();
}

// cat generator
function catgen(){
    var image=document.createElement('img');
    var div=document.getElementById('cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
//rock paper sissor
function humanrps(yourchoice){
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=numberget(randomrpsint());
    result=decideWinner(humanchoice,botchoice);
    console.log(result);
    message=finalmeassage(result);
    rpsfrontend(yourchoice.id,botchoice,message);
}
function randomrpsint() {
    return Math.floor(Math.random()*3);
}
function numberget(number) {
    return ['rock','papper','scissor'][number];
}
function decideWinner(yourchoice,computerchoice) {
    var rpsdatabase={
        'rock':{'scissor':1,'rock':0.5,'papper':0},
        'papper':{'rock':1,'scissor':0,'papper':0.5},
        'scissor':{'scissor':0.5,'rock':0,'papper':1}
    };
    var yourscore=rpsdatabase[yourchoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][yourchoice];
    return [yourscore,computerscore];
}
function finalmeassage([yourscore,computerscore]) {
    if(yourscore==0){
        return {'message':"you lost!",'color':'red'}
    }
    else if(yourscore===0.5){
        return {'message':"you tied!",'color':'yellow'}
    }
    else{        
        return{'message':"you won!",'color':'green'}
    }
}


function rpsfrontend(humanimagechoice,botimmagechoice,finalmessage) {
    var imagedatabase={
        'rock':document.getElementById('rock').src,
        'papper':document.getElementById('papper').src,
        'scissor':document.getElementById('scissor').src,
    }
    //lets remove everything
    document.getElementById('rock').remove();
    document.getElementById('papper').remove();
    document.getElementById('scissor').remove();

    var humandiv=document.createElement('div');
    var botdiv=document.createElement('div');
    var messagediv=document.createElement('div');
    humandiv.innerHTML="<img src='"+imagedatabase[humanimagechoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px blue;'>"
    messagediv.innerHTML="<h1 style='color: "+ finalmessage['color']+"; font-size:60px; padding:30px;'>"+finalmessage['message']+"</h1>"
    botdiv.innerHTML="<img src='"+imagedatabase[botimmagechoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px red;'>"
    document.getElementById("flex-rps").appendChild(humandiv);
 
    document.getElementById("flex-rps").appendChild(messagediv);

    document.getElementById("flex-rps").appendChild(botdiv);

}
