// ====== ISI DATA DIRI KAMU DI SINI ======
const namaSaya = "Kaysha syafiqa sitorus";
const kelasSaya = "SI-3D";

// Mengambil elemen menu (nav) berdasarkan id
const menuHome = document.getElementById("menu-home");
const menuMahasiswa = document.getElementById("menu-mahasiswa");
const menuKelas = document.getElementById("menu-kelas");
const menuAktifitas = document.getElementById("menu-aktifitas");
const menuStatistik = document.getElementById("menu-statistik");
const menuDokumen = document.getElementById("menu-dokumen");

// Mengambil elemen yang akan berubah
const namaMhs = document.getElementById("nama-mhs");
const kelasMhs = document.getElementById("kelas-mhs");
const bagianStatistik = document.getElementById("bagian-statistik");
const bagianProgres = document.getElementById("bagian-progres");
const bagianAktifitas = document.getElementById("bagian-aktifitas");
const bagianLampiran = document.getElementById("bagian-lampiran");

// Mengambil semua menu yang ada di nav (berdasarkan class)
const semuaMenu = document.querySelectorAll(".menu");

// Fungsi untuk mengembalikan tampilan ke awal (hapus class "aktif")
function resetWarna() {
    bagianStatistik.classList.remove("aktif");
    bagianProgres.classList.remove("aktif");
    bagianAktifitas.classList.remove("aktif");
    bagianLampiran.classList.remove("aktif");
}

// Setiap menu yang diklik -> tampilan dikembalikan ke awal dulu
semuaMenu.forEach(function(menu) {
    menu.addEventListener("click", function(e) {
        e.preventDefault();
        resetWarna();

        // menu lain dilepas dari tampilan "dipilih", lalu menu ini yang dipilih
        semuaMenu.forEach(function(m) {
            m.classList.remove("menu-aktif");
        });
        menu.classList.add("menu-aktif");
    });
});

// Klik Home (nav) -> nama dan kelas kembali seperti tampilan awal
menuHome.addEventListener("click", function() {
    namaMhs.textContent = "Nama Mahasiswa";
    kelasMhs.textContent = "Kelas SI-3X";
});

// Klik Mahasiswa (nav) -> nama saya muncul di Selamat Datang
menuMahasiswa.addEventListener("click", function() {
    namaMhs.textContent = namaSaya;
});

// Klik Kelas (nav) -> kelas saya muncul di Selamat Datang
// dan section Progres Kelas menyala
menuKelas.addEventListener("click", function() {
    kelasMhs.textContent = "Kelas " + kelasSaya;
    bagianProgres.classList.add("aktif");
});

// Klik Aktifitas (nav) -> section Aktifitas Selanjutnya menyala
menuAktifitas.addEventListener("click", function() {
    bagianAktifitas.classList.add("aktif");
});

// Klik Statistik (nav) -> aside Statistik menyala
menuStatistik.addEventListener("click", function() {
    bagianStatistik.classList.add("aktif");
});

// Klik Dokumen (nav) -> bergulir ke Lampiran di bawah dan Lampiran menyala
menuDokumen.addEventListener("click", function() {
    bagianLampiran.classList.add("aktif");
    bagianLampiran.scrollIntoView({ behavior: "smooth" });
});