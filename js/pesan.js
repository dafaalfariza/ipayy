  const translations = {
    en: {
      title: "Dear Crush,",
      text: `
        &emsp; I've been keeping this in for a while, but I think today is the perfect time to say it—you’re the reason my days feel brighter. Every little moment with you means more than I can put into words. Your smile, your laughter, the way you make everything feel lighter—it all makes my heart race in the best way possible.
        <br><br>
        &emsp; So, here I am… I love you so much. We’ve known each other for so long. I just want you to know how special you are to me. You’ve warmed my heart in ways I never expected, and for that, I am grateful. I promise to make every day feel special to you—to cherish you, to make you smile, and to remind you of how much you mean to me. Thank you for accepting me for who I am.
      `
    },
    id: {
      title: "Sayangku,",
      text: `
        &emsp; Aku sudah menyimpan perasaan ini cukup lama, tapi menurutku hari ini adalah waktu yang tepat untuk mengungkapkannya—kamulah alasan hariku terasa lebih cerah. Setiap momen kecil bersamamu itu sangat berarti lebih dari yang bisa kuungkapkan dengan kata-kata. Senyummu, tawamu, caramu membuat segalanya terasa ringan—semuanya membuat jantungku berdebar lebih kencang dengan cara terbaik.
        <br><br>
        &emsp; Jadi, inilah aku… Aku sangat mencintaimu. Kita sudah mengenal satu sama lain. Aku hanya ingin kamu tahu betapa spesialnya dirimu bagiku. Kamu telah menghangatkan hatiku dengan cara yang tak pernah kuduga, dan untuk itu, aku bersyukur. Aku janji akan membuat setiap hari terasa seperti hari spesial untukmu—menyayangimu, membuatmu tersenyum, dan mengingatkanmu betapa berartinya kamu bagiku. Terima kasih kamu sudah mau meenerima aku apa adanya.
      `,
    }
  };

  document.getElementById("languageSwitcher").addEventListener("change", function () {
    const lang = this.value;
    document.getElementById("dearTitle").innerText = translations[lang].title;
    document.getElementById("confessionText").innerHTML = translations[lang].text;
  });

document.getElementById("backBtn").addEventListener("click", function() {
      // Pindah ke halaman lain (contohnya ke 'pesan.html')
      window.location.href = "../pages/main.html";
    });