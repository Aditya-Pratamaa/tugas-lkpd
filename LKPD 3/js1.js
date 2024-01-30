// SOAL NO 1

// Harga barang per kg
var hargaPerKg = 5000;

// Input berat jeruk dari pembeli
var beratJeruk = +prompt("Masukkan berat jeruk (kg):");

// Hitung total harga sebelum diskon
var totalHargaSebelumDiskon = beratJeruk * hargaPerKg;

// Hitung diskon (5% dari total harga sebelum diskon)
var diskon = 0.05 * totalHargaSebelumDiskon;

// Hitung total harga setelah diskon
var totalHargaSetelahDiskon = totalHargaSebelumDiskon - diskon;

// Menampilkan hasil
console.log(
  "Total Harga Sebelum Diskon: " + totalHargaSebelumDiskon + " rupiah"
);
console.log("Diskon: " + diskon + " rupiah");
console.log(
  "Total Harga Setelah Diskon: " + totalHargaSetelahDiskon + " rupiah"
);