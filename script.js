// 1. DATA
const songs = ["Lagu A", "Lagu B", "Lagu C"];

// 2. ELEMENT
const songList = document.getElementById("songList");
const menu = document.getElementById("menu");
const player = document.getElementById("player");
const title = document.getElementById("title");

// 3. FUNCTION
function openPlayer(song) {
  title.innerText = song;

  menu.classList.remove("active");
  player.classList.add("active");
}

// 4. RENDER
songs.forEach((song) => {
  const div = document.createElement("div");
  div.className = "song";
  div.innerText = song;

  div.onclick = () => {
    openPlayer(song);
  };

  songList.appendChild(div);
});

// 5. EVENT
document.getElementById("back").onclick = () => {
  player.classList.remove("active");
  menu.classList.add("active");
};

// 6. ANIMASI
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.9)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 100);
  });
});
