// Fungsi untuk mengganti warna latar belakang header secara acak
function changeHeaderColor() {
    const header = document.querySelector('header');
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#ffff33', '#33ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.backgroundColor = randomColor;
}

// Menambahkan event listener untuk mengubah warna header saat diklik
const header = document.querySelector('header');
header.addEventListener('click', changeHeaderColor);

// Fungsi untuk menampilkan alert saat salah satu tautan navigasi diklik
function showAlert() {
    alert("Anda mengklik tautan navigasi.");
}

// Menambahkan event listener ke setiap tautan navigasi
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
    link.addEventListener('click', showAlert);
});
