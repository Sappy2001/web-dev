console.log("Welcome to Sappic");

let songIndex=0;
let mpSongName=document.getElementById('mpSongName');
let masterplay=document.getElementById("mp");
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Let me Loove You" , filePath:"songs/1.mp3",coverPath:"covers/1.jpg" },
    {songName:"hi hukuhihuku" , filePath:"songs/2.mp3",coverPath:"covers/2.jpg" },
    {songName:"Let me f You" , filePath:"songs/3.mp3",coverPath:"covers/3.jpg" },
    {songName:"Let me s You" , filePath:"songs/4.mp3",coverPath:"covers/4.jpg" },
    {songName:"hula bula" , filePath:"songs/5.mp3",coverPath:"covers/5.jpg" },
    {songName:"The potty song" , filePath:"songs/6.mp3",coverPath:"covers/6.jpg" },
]
songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innertext=songs[i].songName;


})
let audioElement=new Audio('songs/2.mp3');
//audioElementplay()
//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.add("fa-play-circle");
        masterplay.classList.remove("fa-pause-circle");
        gif.style.opacity=0;

    }
})
//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    ////update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress+"%");
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('pbutton')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}

Array.from(document.getElementsByClassName("pbutton")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        mpSongName.innerHTML=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");}
)})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=6;
    }
    else{
    songIndex -=1;
}
console.log(songIndex);
audioElement.src=`songs/${songIndex}.mp3`;
mpSongName.innerHTML=songs[songIndex-1].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterplay.classList.remove("fa-play-circle");
masterplay.classList.add("fa-pause-circle");

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=1;
    }
    else{
    songIndex +=1;
}
console.log(songIndex);
audioElement.src=`songs/${songIndex}.mp3`;
mpSongName.innerHTML=songs[songIndex-1].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterplay.classList.remove("fa-play-circle");
masterplay.classList.add("fa-pause-circle");

})