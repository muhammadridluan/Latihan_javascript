// Shopping Time!

// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000
// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

// Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
// Contoh jika inputan memberId: '324193hDew2' dan money: 700000

// maka output:

// { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

const objBarang = [
  {
    namaBarang : "Sepatu Brand Stacattu",
    hargaBarang : 1500000 
  },
  {
    namaBarang : "Barang 2",
    hargaBarang : 500000
  },
  {
    namaBarang : "Barang 3",
    hargaBarang : 250000 
  },
  {
    namaBarang : "Barang 4",
    hargaBarang : 175000 
  },
  {
    namaBarang : "Barang 5",
    hargaBarang : 50000 
  },
  
] 

// console.log(objBarang[0].namaBarang)

function getBarang(money) {
  let barangTerpilih = []
  let sisaMoney = money
  objBarang.forEach(element => {
    if(money - element.hargaBarang > 0) {
      barangTerpilih.push(`${element.namaBarang}`)
      sisaMoney = sisaMoney - element.hargaBarang;
    }
    // console.log(`${element.namaBarang} ${element.hargaBarang}`)
  });

  return {listPurchased : barangTerpilih, changeMoney : sisaMoney};
}


// console.log(getBarang(1000000))

function shoppingTime(memberId, money) {
  let ini;
  if (memberId == null || memberId == 0 || memberId == undefined) {
    // you can only write your code here!
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup"
  } else{
    // getBarang(money)
    ini = getBarang(money)
    let listPurchased = ini.listPurchased
    let changeMoney = ini.changeMoney
    
    return {memberId : memberId , money : money, listPurchased, changeMoney}
  }
  
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 1000000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja