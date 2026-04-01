const songs = ["Lagu A", "Lagu B", "Lagu C"];


const songList = document.getElementById("songList");
const menu = document.getElementById("menu");
const player = document.getElementById("player");
const title = document.getElementById("title");


function openPlayer(song) {
  title.innerText = song;

  menu.classList.remove("active");
  player.classList.add("active");
}


songs.forEach((song) => {
  const div = document.createElement("div");
  div.className = "song";
  div.innerText = song;

  div.onclick = () => {
    openPlayer(song);
  };

  songList.appendChild(div);
});


document.getElementById("back").onclick = () => {
  player.classList.remove("active");
  menu.classList.add("active");
};


document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.9)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 100);
  });
});
