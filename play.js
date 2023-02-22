let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let stops = document.getElementById('stop');

//link the song to the progress
song.onloadedmetadata = function(){
    progress.max =song.duration;
    progress.value = song.currentTime;
    song.pause();
    
}

//pause and play song
function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
      song.pause();
      ctrlIcon.classList.remove('fa-pause')  
      ctrlIcon.classList.add('fa-play')  
    }
    else{
        song.play();
        ctrlIcon.classList.add('fa-pause')  
      ctrlIcon.classList.remove('fa-play') 
    }
}
//make the slider moves as the song plays
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
//make the slider to play song at its position
progress.onchange = ()=>{
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-pause')  
      ctrlIcon.classList.remove('fa-play') 
}
//stop music
stops.addEventListener('click', ()=>{
    song.pause();
    song.currentTime = 0;
    ctrlIcon.classList.add('fa-play') 
}
)