let x=Math.floor(Math.random()*6+1);
//console.log(x);
let link="./images/"+"dice"+x+".png";
let y=Math.floor(Math.random()*6+1);
let link1="./images/"+"dice"+y+".png";
let p=document.querySelectorAll("img");
let q=document.querySelector("h1");

if(x>y){
   q.innerHTML="Player 1 Wins!";
   p[0].setAttribute("src",link);
   p[1].setAttribute("src",link1);
}
else if(x===y){
    q.innerHTML="BARABAR H DONO";
    p.setAttribute("src",link);
}
else{
    q.innerHTML="Player 2 Wins!";
    p[0].setAttribute("src",link);
    p[1].setAttribute("src",link1);
}
