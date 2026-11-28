# Keenan-Radinka-Gamma-frontend-omahti
Identitas :
1. Keenan Radinka Gamma
2. 26/586091/PA/24654

Fitur :
1. Sticky Navbar & Smooth Scrolling dengan Offset
   - Navbar tetap menempel di bagian atas layar saat halaman di-scroll (position: sticky; top: 0).
   - Klik pada tautan navigasi (About, Portofolio, Testimonial, FAQ, Contact) menggulir halaman secara halus ke section terkait dengan memperhitungkan tinggi navbar agar judul section tidak tertutup.
   - Tombol Sign In dan Sign Up diarahkan ke portal SSO UGM dan registrasi SIMASTER UGM.

2. Portfolio Expandable Grid (Show More / Show Less)
   - Menekan tombol Show More menampilkan baris kartu portofolio kedua dan mengubah tombol menjadi Show Less dengan ikon panah menghadap ke atas.
   - Kartu pada baris kedua secara otomatis menyesuaikan ukuran lebarnya secara merata menggunakan Flexbox sehingga total panjang baris tetap sejajar dengan 4 kartu pada baris pertama.
 
3. Testimonial Carousel Interaktif
   - Kartu testimonial dapat digeser satu per satu menggunakan tombol panah kiri dan kanan (tersedia 6 kartu, dengan 4 kartu tampil awal di desktop dan kartu tambahan di sisi kanan).
   - Tombol panah kiri atau kanan otomatis disembunyikan apabila sudah tidak ada kartu yang dapat digeser ke arah tersebut, dan posisi slide disesuaikan ulang saat ukuran layar berubah.
4. FAQ Accordion Interaktif
   - Setiap item pertanyaan dapat diklik untuk membuka atau menutup panel jawaban secara dinamis (hanya satu jawaban yang terbuka pada satu waktu) disertai perubahan arah ikon panah (› / ⌄).
5. Desain Responsif
   - Penyesuaian tata letak untuk layar tablet dan mobile (900px, 768px, dan 520px), mencakup penyusunan ulang hero section, jumlah kolom portofolio, jumlah kartu testimonial yang tampil (4 -> 2 -> 1 kartu), serta tata letak form kontak dan footer.


Penggunaan AI : 
1. Pembuatan Aset Logo & Ikon SVG Inline (index.html)
   - Logo FE (Hero Section): Penyusunan koordinat <svg> secara manual untuk membentuk huruf F dan E bersudut membulat (rx="14"), lengkap dengan 3 lapisan efek bayangan 3D, aksen titik dan bintang merah di sudut, serta garis horizontal merah di bagian bawah.
   - Logo Atap OmahFE / OmahTI (Footer): Pembuatan poligon <svg> atap dua warna (#4B4B4B dan #FF2600) yang diposisikan di atas tulisan OmahFE.
   - Ikon Media Sosial & Kontrol UI: Pembuatan path <svg> kustom bergaya outline dalam kotak membulat untuk ikon Facebook, **Instagram**, Twitter/X, dan LinkedIn (di bagian atas Tentang Kami dan Footer), serta ikon panah pada tombol Show More/Show Less, tombol carousel (< / >), dan ikon pesawat kertas pada tombol Send.
2. Penambahan & Penyusunan Logika Fitur Spesifik (style.css & script.js)
   - Background Lengkung Menyatu (about-backdrop): Teknik pelapisan radial-gradient dan linear-gradient di dalam satu container melengkung (border-top-left-radius dan border-top-right-radius: 50% 170px) agar transisi warna dari lengkung atas ke area Tentang Kami menyatu tanpa garis batas.
   - Kalkulasi Carousel Testimonial (getCarouselMetrics() & updateCarouselPosition()): Logika JavaScript untuk menghitung lebar kartu ditambah jarak (gap), menentukan jumlah kartu terlihat terhadap lebar layar (maxIndex), menggeser track dengan translateX, serta mengatur visibilitas tombol panah kiri/kanan otomatis (.is-hidden) termasuk saat event resize.
   - Penyesuaian Lebar Baris Portofolio & Scroll Offset: Pengaturan Flexbox (flex: 1 1 0) agar jumlah kartu yang berbeda pada baris tambahan tetap mengisi lebar penuh seperti baris di atasnya, serta perhitungan offsetTop - navHeight pada event listener smooth scroll.
