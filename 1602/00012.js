// Pasangan Angka Terbesar

// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
// Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
// Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

function pasanganTerbesar(num) {
  // you can only write your code here!

  var numStr = num.toString(); // ubah angka menjadi string
  var pasanganTerbesar = 0; // deklarasi variabel untuk menyimpan pasangan terbesar

  for (var i = 0; i < numStr.length - 1; i++) { // perulangan sebanyak jumlah digit angka dikurangi satu
    var pasanganAngka = parseInt(numStr[i] + numStr[i+1]); // ambil dua digit angka berurutan
    if (pasanganAngka > pasanganTerbesar) { // jika pasanganAngka lebih besar dari pasanganTerbesar sebelumnya
      pasanganTerbesar = pasanganAngka; // maka update pasanganTerbesar dengan pasanganAngka
    }
  }

  return pasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99