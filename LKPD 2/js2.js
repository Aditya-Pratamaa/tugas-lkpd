var jam = prompt('Masukkan jumlah jam');
var menit = prompt('Masukkan jumlah menit');
var detik = prompt('Masukkan jumlah detik');

var totalDetik = jam * 3600 + menit * 60 + detik * 1;

console.log('Total detik '+ totalDetik + ' detik' );