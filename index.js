var rock = document.querySelector('.rock')
var paper = document.querySelector('.paper')
var scissors = document.querySelector('.scissors')
var compchoice = document.querySelector('.comp')
var userwin = document.querySelector('.userwin')
var compwin = document.querySelector('.compwin')
var tied = document.querySelector('.tied')
var gif = document.querySelector('.gif')
var container = document.querySelector('.container')
var compWin = 0
var userWin = 0
var tieds = 0
var arr = ['r','p','s']

setTimeout(function () {
   gif.style.display='none'
   container.style.display='flex'
},2300)

rock.onclick=function(){
var index =  Math.floor(Math.random()*arr.length)
   rock.classList.add('selected')
   paper.classList.remove('selected')
   scissors.classList.remove('selected')
   if(arr[index]=='p'){
    compWin++
    compwin.innerText = compWin
    compchoice.classList.add('pselected')
    compchoice.classList.remove('sselected')
    compchoice.classList.remove('rselected')
   }
   else if(arr[index]=='s'){
    userWin++
    userwin.innerText= userWin
    compchoice.classList.remove('pselected')
    compchoice.classList.add('sselected')
    compchoice.classList.remove('rselected')
   }
   else{
    tieds++
    tied.innerText=tieds
    compchoice.classList.remove('pselected')
    compchoice.classList.remove('sselected')
    compchoice.classList.add('rselected')
   }
}
paper.onclick=function(){
    var index =  Math.floor(Math.random()*arr.length)
       rock.classList.remove('selected')
       paper.classList.add('selected')
       scissors.classList.remove('selected')
       if(arr[index]=='s'){
        compWin++
        compwin.innerText = compWin
        compchoice.classList.remove('pselected')
        compchoice.classList.add('sselected')
        compchoice.classList.remove('rselected')
       }
       else if(arr[index]=='r'){
        userWin++
        userwin.innerText= userWin
        compchoice.classList.remove('pselected')
        compchoice.classList.remove('sselected')
        compchoice.classList.add('rselected')
       }
       else{
        tieds++
        tied.innerText=tieds
        compchoice.classList.add('pselected')
        compchoice.classList.remove('sselected')
        compchoice.classList.remove('rselected')
       }
    }
scissors.onclick=function(){
        var index =  Math.floor(Math.random()*arr.length)
           rock.classList.remove('selected')
           paper.classList.remove('selected')
           scissors.classList.add('selected')
           if(arr[index]=='r'){
            compWin++
            compwin.innerText = compWin
            compchoice.classList.remove('pselected')
            compchoice.classList.remove('sselected')
            compchoice.classList.add('rselected')
           }
           else if(arr[index]=='p'){
            userWin++
            userwin.innerText= userWin
            compchoice.classList.add('pselected')
            compchoice.classList.remove('sselected')
            compchoice.classList.remove('rselected')
           }
           else{
            tieds++
            tied.innerText=tieds
            compchoice.classList.remove('pselected')
            compchoice.classList.add('sselected')
            compchoice.classList.remove('rselected')
           }
        }
     