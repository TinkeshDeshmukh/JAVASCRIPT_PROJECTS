const head=document.getElementById("heads")
// const tail=document.getElementById("tails")
const flip_btn=document.getElementById("flip")
const coin=document.getElementById("coin");
const reset=document.getElementById("Reset")
const audio=document.getElementById("audio");
head.textContent="Flip "

// audio.src="D:\WEB_DEVELOPMENT\javascript projects\coin\coin-flip-88793"

flip_btn.addEventListener("click",()=>{
    audio.play()
 
    coin.style.animation="none";
    let i=Math.floor(Math.random()*10)
    if(i){
        setTimeout(()=>{
            coin.style.animation="heads-spin 1.5s forwards"
            if(i%2==0){
                console.log("yes");
                head.textContent="HEAD"
                

                
            }
            else{
                head.textContent="TAILS"
            }
        },50)
    }
})

reset.addEventListener("click",()=>{
    head.textContent=" Flip "
})
