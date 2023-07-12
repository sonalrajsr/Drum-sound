let drums = document.querySelectorAll(".drums")

window.addEventListener("keydown", hello);

for (let index = 0 ; index < drums.length ; index++){
    drums[index].addEventListener("click", hello);
    
}
function hello(event){

    if (this == drums[0] || event.key == "w" ){
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        key.innerHTML = event.key;
    }
    else if (this == drums[1]|| event.key == "a"){
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        key.innerHTML = event.key;
    }
    else if (this == drums[2]|| event.key == "s"){
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
        key.innerHTML = event.key;
    }
    else if (this == drums[3] || event.key == "d"){
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        key.innerHTML = event.key;
    }
    else if (this == drums[4] || event.key == "j"){
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        key.innerHTML = event.key;
    }
    else if (this == drums[5]|| event.key == "k"){
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        key.innerHTML = event.key;
    }
    else if (this == drums[6]|| event.key == "l"){
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        key.innerHTML = event.key;
    }
    else{
        key.innerHTML = "Not a valid key";
    }
}
const key = document.getElementById("key");
// console.log(key);

