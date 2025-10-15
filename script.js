// script.js

// --- MODAL (POP-UP) LOGIC ---

// Dapatkan elemen modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
// Dapatkan tombol tutup, pastikan elemennya ada sebelum mengakses index [0]
const closeBtn = document.getElementsByClassName("close-button")[0];

// Dapatkan semua elemen kotak gambar (image-box)
const imageBoxes = document.querySelectorAll(".image-box");

// 1. FUNGSI UNTUK MEMBUKA MODAL
imageBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    // Dapatkan elemen gambar di dalam kotak yang diklik
    const image = this.querySelector("img"); // Tampilkan modal

    modal.style.display = "block"; // Set sumber gambar modal menjadi sumber gambar yang diklik

    modalImg.src = image.src;
  });
});

// 2. FUNGSI UNTUK MENUTUP MODAL (klik tombol X)
if (closeBtn) {
  // Pastikan tombol ada sebelum menjalankan fungsi
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}

// 3. FUNGSI UNTUK MENUTUP MODAL (klik di luar gambar)
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// --- SCROLL ANIMATION LOGIC ---

// Dapatkan semua elemen section (yang memiliki class content-container, termasuk main, section 2, 3, 4)
const sectionsToAnimate = document.querySelectorAll(".content-container");

// Fungsi untuk memeriksa apakah elemen terlihat di viewport
function checkVisibility() {
  sectionsToAnimate.forEach((section) => {
    // Mendapatkan posisi elemen relatif terhadap viewport
    const rect = section.getBoundingClientRect();

    // Cek apakah elemen ada di dalam area pandang (viewport)
    // Kita gunakan 150px dari bawah agar animasi muncul sedikit lebih awal
    if (rect.top < window.innerHeight - 150 && rect.bottom > 0) {
      section.classList.add("is-visible");
    }
    // Note: Baris 1/main content biasanya langsung visible, jadi kita tidak perlu menyembunyikannya
  });
}

// Tambahkan event listener untuk menjalankan fungsi saat scroll dan saat load
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// Panggil sekali saat awal agar Baris 1 terlihat dan memicu pengecekan awal
checkVisibility();
