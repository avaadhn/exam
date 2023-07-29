let URL=" https://api.adviceslip.com/advice/";
var btn=document.querySelector("button");
var h1=document.querySelector(".advice");
var id=document.querySelector("span");
function randNumber(){
    return Math.floor(Math.random()*100)}

    fetch(URL+randNumber()).then(Response=>{
        return Response.json()
})
    .then(data=>{
        console.log(data)
        h1.innerHTML=data.slip.advice
        id.innerHTML=data.slip.id
    })
btn.addEventListener('click',function(){
    fetch(URL+randNumber()).then(Response=>{
        return Response.json()
})
    .then(data=>{
        console.log(data)
        h1.innerHTML=data.slip.advice
        id.innerHTML=data.slip.id
    })
})