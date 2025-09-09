const text = `Hari ini tanggal 10 September 2025,
dan seseorang ada yang bertambah usia yang ke-16.
Hai kamu yang orang yang sangat spesial 💖

Hari ini adalah hari yang istimewa,
karena seseorang yang sangat berarti
telah bertambah usia 🎂

Aku cuma mau bilang...
Terima kasih karena telah menjadi sosok
yang selalu membuat hariku lebih cerah.

Semoga semua impianmu tercapai,
jadi anak yang sholehah,
bisa membanggakan orang tua,
dan harimu selalu penuh senyum 😄

Selamat ulang tahun Syifa Audrey Syahfitri Saragih!
Dari seseorang yang mengagumimu. 💌`;

let i = 0;
const speed = 50;
const target = document.getElementById("text");

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  typeWriter();
  startEmojiRain(); // ganti dengan fungsi baru
};

document.getElementById("musicBtn").onclick = () => {
  const music = document.getElementById("bgMusic");
  music.muted = !music.muted;
  document.getElementById("musicBtn").innerText = music.muted
    ? "🔈 Nyalakan Musik"
    : "🔊 Matikan Musik";
};

    document.getElementById("pesanBtn").addEventListener("click", function() {
      // Pindah ke halaman lain (contohnya ke 'pesan.html')
      window.location.href = "../pages/pesan.html";
    });

    document.getElementById("weBtn").addEventListener("click", function() {
      // Pindah ke halaman lain (contohnya ke 'pesan.html')
      window.location.href = "../pages/we.html";
    });

        document.getElementById("ForUBtn").addEventListener("click", function() {
      // Pindah ke halaman lain (contohnya ke 'pesan.html')
      window.location.href = "../flowers-for-someone-main/index.html";
    });

            document.getElementById("galleryBtn").addEventListener("click", function() {
      // Pindah ke halaman lain (contohnya ke 'pesan.html')
      window.location.href = "../pages/gallery.html";
    });

    document.getElementById("gameBtn").addEventListener("click", function() {
      // Pindah ke halaman lain (contohnya ke 'pesan.html')
      window.location.href = "../pages/game.html";
    });

// --- Fungsi Emoji Rain (hati & bintang) ---
function startEmojiRain() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const emojis = ["❤️", "✨", "💖", "🌟"];
  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 30 + 20,
    speed: Math.random() * 2 + 1,
    emoji: emojis[Math.floor(Math.random() * emojis.length)]
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px serif";

    particles.forEach(p => {
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.emoji, p.x, p.y);
    });

    update();
  }

  function update() {
    particles.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) {
        p.y = -40;
        p.x = Math.random() * canvas.width;
        p.emoji = emojis[Math.floor(Math.random() * emojis.length)];
      }
    });
  }

  setInterval(draw, 40);
}
