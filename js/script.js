

const songs = [ 
    { title: 'Walking  In My Shoes', artist: 'Depeche Mode', src: 'music/2.mp3', cover: 'img/cover1.jpg'},
    { title: 'Rhinestone Eyes', artist: 'Gorillaz', src: 'music/3.mp3', cover: 'img/cover2.jpeg'},
    { title: 'I Feel You', artist: 'Depeche Mode', src: 'music/1.mp3', cover: 'img/cover3.jpeg'}


];

let currentSongIndex = 0;
let isPlaying  = false;
let audio;


function playCurrentSong(){


    if (audio) {
        audio.stop();
    }

    audio = new Howl({



        src: [songs[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function(){

            playNextSong();
        }
    });

    updateSongInfo();
}


const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const  nextButton = document.getElementById('next');
const  prevButton = document.getElementById('prev');
const  volumeSlider = document.getElementById('volume');
const  songTitle = document.getElementById('songTittle');
const  songArtist = document.getElementById('songArtist');
const  albumCover = document.querySelector('.card-img-top ');



playButton.addEventListener('click', () => {

 isPlaying = true;
 playCurrentSong();

});


pauseButton.addEventListener('click', () => {

    isPlaying = false;
    audio.pause();

});


nextButton.addEventListener('click', () =>{


    playNextSong();
});

prevButton.addEventListener('click', () => {

    if (audio.seek() > 5) {
        audio.seek(0);
        
    }else{
        currentSongIndex = (currentSongIndex - 1 + songs.length)% songs.length;
        playCurrentSong();
    }
});

volumeSlider.addEventListener('input', () => {

    audio.volume(volumeSlider.value);
});



function updateSongInfo(){
    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCover.src = songs[currentSongIndex].cover;



}


function playNextSong(){


    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
}
playCurrentSong();

