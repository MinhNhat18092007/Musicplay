let  allMusic = [
    {
        name: "Khuất lối",
        artist: "--H Kray--",
        img: "song1",
        src: "music/song1.mp3",
        idMusic: "song1"
    },
    {
        name: "Sao Cũng Được",
        artist: "--Thành Đạt--",
        img: "song2",
        src: "music/song2.mp3",
        idMusic: "song2"
    },
    {
        name: "Cuối Cùng Thì",
        artist: "--Jack--",
        img: "song3",
        src: "music/song3.mp3",
        idMusic: "song3"
    },
    {
        name: "Tiếng Pháo Tiễn Người",
        artist: "--Hùng Quân--",
        img: "song4",
        src: "music/song4.mp3",
        idMusic: "song4"
    },
    {
        name: "Thay Tôi Yêu Cô Ấy",
        artist: "--Thanh Hưng--",
        img: "song5",
        src: "music/song5.mp3",
        idMusic: "song5"
    },
    {
        name: "Yêu Khác Thương Hại",
        artist: "--Thanh Hưng--",
        img: "song6",
        src: "music/song6.mp3",
        idMusic: "song6"
    },
    {
        name: "Ai Đợi Mình Được Mãi",
        artist: "--Thanh Hưng--",
        img: "song7",
        src: "music/song7.mp3",
        idMusic: "song7"
    },
    {
        name: "Chạnh Lòng Thương Cô",
        artist: "--Huy Vạc ft Non Hanta--",
        img: "song9",
        src: "https://dl36.dlmate04.online/?file=M3R4SUNiN3JsOHJ6WWRQNXNPUFN2cFdxRVJIOGxQdGh2WVIvNVRGbUlQcENyc1lEa3Nmelp1c2RJS0JFK1lMbk1vZ1IxMjZkVW9iT0VWNkhzZE1GQjFEU3N2UnA4aHpHNFk4NUV2dDBXeC9nMEsyTGd5Zzl2MExRTDUzdk5QMTNQSFF3cFZRby9TbWRoOW5WdHdINStEYURyd2ltUFdFb2szNHFiUGFieFkwTjhEaU9UZGFoOGJKT255T1M2NElDK1BHT3AwclZocGR2L2Y1WEcyWWxjTnR3bkwra210THQ0R1pJanBGUzExMzM3K1N2Q3BzS0RLU0tjV28xYkFRUTV2cjdTUmtiaW5jNDlYenRzLzBENkNWYlYvWkI3V09qMXRuZVZpMnBNTS9tSE5lREwrZmdrT3UvNStGeHRsUEVzdXJLbWNjUndGL3pFSnFwRklOYjkxdzEvS2VCdHc9PQ%3D%3D",
        idMusic: "song9"
    },
    {
        name: "Thằng Hầu (Lo-fi Ver.)",
        artist: "--Nhật Phong--",
        img: "song10",
        src: "https://dl255.dlmate03.online/?file=M3R4SUNiN3JsOHJ6WWRQNXNPUFN2cFdxRVJIOGcvdGh2WVIvNVRGbUkvcENvY1lIa3NIeFp1dHVhNFpZMk1HT0h0aGR2Z2pkWTV2QUhnZk1rOGxqWUZMRTF2SXA4Zy9IL0lBbkV1WmpYeGoyME1tbGtEaDFnQWI1TU5YZFJ2NVFaSHQrbkZCaXh5N09pYVB5b0JydHAyaXZvZ2pSU2lrYTRYNVpHNnlWbzdsOCtIR1NaY2U5K0xnbWhHaVM4c2tQM2ZXUzZUZlloYmNtcU5WblcxQjlmcFVBaU15aWk2aWU4eFZBMU44UHpCQ2dxN1Ay",
        idMusic: "song10"
    },
    {
        name: "Em Khác Gì Hoa",
        artist: "--Lil Zpoet x Quanvrox--",
        img: "song11",
        src: "https://dl223.dlmate03.online/?file=M3R4SUNiN3JsOHJ6WWRQNXNPUFN2cFdxRVJIOGt2NXZzOTEvNUVObUlQcFA3YXBxOUxmbEF1b0VCcWdPaHNHT0dOSWZ6eTdYZE1UQUtFUzRvNWtvVkdHTzc1MTJsVERKK3NWckV1Vm9SQi83MEsyUmx5aCtqQW5tY2RYSVc3VkdQakY5cWt4bTdEYVMyUG1KL0VmZXFuSzRzMWlCYVdGWWxEWWJickNDMTVvTmgwLzdlZm5tMWNJWG5RKzMyOVJFeXFQYnN3VDVub1FRL3RsdFRrMW1kb1JVMUorb2pxYWI4UjlMMXNwSWp3dTN2NytpQk1jPQ%3D%3D",
        idMusic: "song11"
    },
    {
        name: "Thu Cuối [Slowed + Reverb]",
        artist: "--Mr.T ft Yanbi & Hằng Bingboong--",
        img: "song12",
        src: "",
        idMusic: "song12"
    },
    {
        name: "Chắc Vì Mình Chưa Tốt",
        artist: "--Thanh Hưng--",
        img: "song8",
        src: "music/song8.mp3",
        idMusic: "song8"
    }
    

]

const wrapper = document.querySelector(".wrapper")
imgMusic = wrapper.querySelector('.img-music')
musicImg = wrapper.querySelector(".img-music img")
musicName = wrapper.querySelector(".name-music .name")
musicArtist = wrapper.querySelector(".name-music .artist")
progress = wrapper.querySelector('.progress')
progressbar = wrapper.querySelector(".progress-bar")
play = wrapper.querySelector('#play');
prev = wrapper.querySelector('#prev');
next = wrapper.querySelector('#next');

let musicIndex = 0;
let autoplay = 0;
let timer = 0;
let play_song = false;
let songAudio = document.createElement('audio');

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    playLiMusic();
    autoplay_song();
})
function loadMusic(index){
    reset_music();
    autoplay_song();
    musicName.innerText = allMusic[index].name;
    musicArtist.innerText = allMusic[index].artist;
    musicImg.src = `image/${allMusic[index].img}.jpg`;
    songAudio.src = allMusic[index].src;
    songAudio.load();

    timer = setInterval(range_slider , 1000);
}
loadMusic(musicIndex);
function musicPlay(){
    if(play_song == false){
        playsong();
    }
    else{
        pausesong();
    }
}
function playsong(){
    songAudio.play();
    play_song = true;
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pausesong(){
    songAudio.pause();
    play_song = false;
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
}

// ---------next Music----------
function nextMusic(){
    if(musicIndex < allMusic.length -1){
        musicIndex++;
        loadMusic(musicIndex);
        playsong();
        playLiMusic();
    }else{
        musicIndex = 0;
        loadMusic(musicIndex);
        playsong();
        playLiMusic();
    }
}
// ---------prev Music----------
function prevMusic(){
    if(musicIndex > 0){
        musicIndex--;
        loadMusic(musicIndex);
        playsong();
    }else{
        musicIndex = allMusic.length -1;
        loadMusic(musicIndex);
        playsong();
    }
}
next.addEventListener("click", ()=> {
    nextMusic();
})

prev.addEventListener("click", ()=> {
    prevMusic();
})

// -------------update progress-------
songAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime/duration)*100;
    progressbar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current")
    let musicDuration = wrapper.querySelector(".duration")
    songAudio.addEventListener("loadeddata", ()=>{
        let audioduration = songAudio.duration;
        let totalMusicmin = Math.floor(audioduration/60);
        let totalMusicsec = Math.floor(audioduration%60);
        if(totalMusicsec < 10){
            totalMusicsec = `0${totalMusicsec}`;
        }
        musicDuration.innerText = `${totalMusicmin}:${totalMusicsec}`;
    });
    let currentMusicmin = Math.floor(currentTime/60);
    let currentMusicsec = Math.floor(currentTime%60);
        if(currentMusicsec < 10){
            currentMusicsec = `0${currentMusicsec}`;
        }
        musicCurrentTime.innerText = `${currentMusicmin}:${currentMusicsec}`;

});

// -----------tua nhạc-------
progress.addEventListener("click", (e)=>{
    let progressWidthval = progress.clientWidth;
    let clickOffsetX = e.offsetX;
    let songDuration = songAudio.duration;
    songAudio.currentTime = (clickOffsetX / progressWidthval) * songDuration
    playsong();
})

// --------tự chuyển bài----------
function autoplay_song(){
    if(autoplay==1){
        autoplay=0;
    }else{
        autoplay=1;
    }
}
function range_slider(){
    if(songAudio.ended){
        play.innerHTML = `<i class="fa-solid fa-play"></i>`;
        if(autoplay==1){
            nextMusic();
            loadMusic(musicIndex);
            playsong();
        }
    }
}
// --------reset music---------
function reset_music(){
    progressbar.value = 0;
}



// --------Volume--------

let recent_volume = wrapper.querySelector('#volume')  
function volume_change(){
    songAudio.volume = recent_volume.value / 100;
}

recent_volume.addEventListener("input", ()=> {
    volume_change();
})

// --------danh sách nhạc----------

const showMusic = document.querySelector("#fa-list")
const downloadMusic = document.querySelector("#fa-download")
const closeMusic = document.querySelector(".fa-close")
const listMusic = document.querySelector(".list-music")
const ulMusic = wrapper.querySelector("ul")

showMusic.addEventListener("click", function(){
    listMusic.classList.add("show")
})
downloadMusic.addEventListener("click", function(){
    window.open(songAudio.src, "_blank");
});


closeMusic.addEventListener("click", function(){
    listMusic.classList.remove("show")
})

for (let i=0; i< allMusic.length; i++){
    let liMusic = `<li Musicindex="${i}">
                        <div class="song-title">
                            <span>${allMusic[i].name}</span>
                            <p>${allMusic[i].artist}</p>
                        </div>
                        <audio class="${allMusic[i].idMusic}" src="${allMusic[i].src}"></audio>
                        <span id="${allMusic[i].idMusic}" class="audio-duration">3:04</span>
                    </li>`;
    ulMusic.insertAdjacentHTML("beforeend", liMusic);
    let liAudioDuration = ulMusic.querySelector(`#${allMusic[i].idMusic}`)
    let liAudioTag = ulMusic.querySelector(`.${allMusic[i].idMusic}`)

// -------hiển thị thời gian bài hát------------
    liAudioTag.addEventListener("loadeddata", ()=>{
        let audioDuration = liAudioTag.duration;
        let totalMusicmin = Math.floor(audioDuration/60);
        let totalMusicsec = Math.floor(audioDuration%60);
        if(totalMusicsec < 10){
            totalMusicsec = `0${totalMusicsec}`;
        }
        liAudioDuration.innerText = `${totalMusicmin}:${totalMusicsec}`;
    });

}
// -----------------------------------------------

const allLiMusic = ulMusic.querySelectorAll("li");
function playLiMusic(){
    for (let j = 0; j < allLiMusic.length; j++) {
        if(allLiMusic[j].classList.contains("playMusic")){
            allLiMusic[j].classList.remove("playMusic")
        }
        if(allLiMusic[j].getAttribute("Musicindex") == musicIndex){
            allLiMusic[j].classList.add("playMusic");
        }
        allLiMusic[j].setAttribute("onclick", "clicked(this)");
    }
}

function clicked(index){
    let getLiIndex = index.getAttribute("Musicindex");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playsong();
    playLiMusic();
}

const yourDate = new Date("2022-05-25T00:00:00");

function showDate(){
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music1/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}

showDate()