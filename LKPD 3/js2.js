// SOAL NO 2

var bilangan = prompt("Masukkan sebuah bilangan bulat:");

      // Mengambil digit sesuai posisi
      var satuan = bilangan % 10;
      var puluhan = Math.floor(bilangan / 10) % 10;
      var ratusan = Math.floor(bilangan / 100);

      // Menampilkan hasil
      console.log("Bilangan", bilangan, "mempunyai:");
      console.log("Nilai", ratusan, "Adalah Ratusan");
      console.log("Nilai", puluhan, "Adalah Puluhan");
      console.log("Nilai", satuan, "Adalah Satuan");