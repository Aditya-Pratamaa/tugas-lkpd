// Soal No 3

// Menerima input dari pengguna untuk total detik
var totalDetik = prompt("Masukkan total detik:");

// Menghitung jam, menit, dan detik
var jam = Math.floor(totalDetik / 3600);
var sisaDetik = totalDetik % 3600;
var menit = Math.floor(sisaDetik / 60);
var detik = sisaDetik % 60;

// Menampilkan hasil konversi
console.log(`${jam} jam ${menit} menit ${detik} detik`);
alert(`${jam} jam ${menit} menit ${detik} detik`);