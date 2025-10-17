// Memastikan semua kode dijalankan setelah dokumen HTML dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. MODAL (POP-UP GAMBAR ZOOM) LOGIC
  // ==========================================

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  // Dapatkan tombol tutup dengan penanganan error yang lebih baik
  const closeBtn = document.querySelector(".close-button");
  const imageBoxes = document.querySelectorAll(".image-box");

  // 1.1 FUNGSI UNTUK MEMBUKA MODAL
  imageBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Dapatkan elemen gambar di dalam kotak yang diklik
      const image = this.querySelector("img");

      // Tampilkan modal
      modal.style.display = "block";

      // Set sumber gambar dan alt text modal
      modalImg.src = image.src;
      modalImg.alt = image.alt;
    });
  });

  // 1.2 FUNGSI UNTUK MENUTUP MODAL (klik tombol X)
  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  // 1.3 FUNGSI UNTUK MENUTUP MODAL (klik di luar gambar)
  // Menggunakan event listener pada modal itu sendiri (lebih spesifik)
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // ===========================================
  // 2. SCROLL ANIMATION LOGIC (Menggunakan Intersection Observer)
  // ===========================================

  // Dapatkan semua elemen yang perlu dianimasikan
  const sectionsToAnimate = document.querySelectorAll(".content-container");

  // Definisikan Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Cek apakah elemen sudah masuk ke dalam viewport
        if (entry.isIntersecting) {
          // Tambahkan class 'is-visible' untuk memicu animasi CSS
          entry.target.classList.add("is-visible");
          // Berhenti mengamati elemen setelah animasi pertama dipicu
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // threshold: 0.1 berarti observer akan dipicu ketika 10% elemen terlihat
      // rootMargin: '-100px 0px -100px 0px' dapat digunakan jika ingin memicu lebih awal/terlambat
      threshold: 0.1,
    }
  );

  // Amati setiap section
  sectionsToAnimate.forEach((section) => {
    observer.observe(section);
  });

  // Catatan: Dengan Intersection Observer, kita tidak lagi memerlukan window.addEventListener("scroll")
  // atau window.addEventListener("load") untuk animasi scroll karena performanya sudah diurus oleh observer.
});
