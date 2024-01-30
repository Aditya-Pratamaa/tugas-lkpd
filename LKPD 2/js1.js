var namaKaryawan = prompt(" Masukkan nama karyawan: ");
var gajiPokokKaryawan = parseFloat(prompt(" Masukkan gaji pokok karyawan: "));

// HItung tunjangan (20% dari gaji pokok)
var tunjangan = 0.2 * gajiPokokKaryawan;

// Hitung pajak (15% dari gaji pokok ditambah tunjangan)
var pajak = 0.15 * (gajiPokokKaryawan + tunjangan);

// Hitung gaji bersih (gaji pokok + tunjangan - pajak)
var gajiBersih = gajiPokokKaryawan + tunjangan - pajak;

// Tampilkan Hasil
console.log("Nama Karyawan:", namaKaryawan);
console.log("Tunjangan:", tunjangan);
console.log("Pajak:", pajak);
console.log("Gaji Bersih:", gajiBersih);  