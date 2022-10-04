# JavaScript

## Array
Array adalah tipe data list order yang dapat menyimpan tipe data apapun di dalamnya. Di javascript array dapat menyimpan berbagai tipe data seperti String, Number, Boolean, dan lainnya. <br>
Contoh:
```javascript
// Array didefinisikan menggunakan square brackets
let randomData = ["Alief", 100, true]
console.log(randomData)
```
Array pada javascript dihitung dari index data ke-0. Data pertama adalah index ke-0. Cara memanggil array:
```javascript
let siswa = ["Alief", "Bagus", "Rizky"]
console.log(siswa[1]) // Bagus
```
Kita juga bisa mengupdate atau mengubah data pada array, bahkan jika dideklarasikan menggunakan const.
```javascript
const siswa = ["Alief", "Bagus", "Rizky"]
siswa[1] = "Fernanda"
console.log(siswa[1]) // Fernanda
```
Salah satu properties pada array yaitu .length. Properties ini akan mengembalikan nilai dari jumlah panjang data suatu array.
```javascript
const siswa = ["Alief", "Bagus", "Fernanda", "Rizky"]
console.log(siswa.length) // 4
```

## Array Method
Array memiliki method atau biasa disebut built-in methods. Artinya Javascript sudah memudahkan kita dengan menyediakan function atau method umum yang bisa kita gunakan.
- .push()<br>
.push() adalah method untuk menambahkan item array pada index yang paling akhir.
    ```javascript
    let siswa = ["Alief", "Bagus", "Fernanda", "Rizky"]
    siswa.push("Wulan")
    console.log(siswa)
    // (5) ['Alief', 'Bagus', 'Fernanda', 'Rizky', 'Wulan']
    ```
- .pop()<br>
.pop() adalah method untuk menghapus item array pada index yang paling akhir.
    ```javascript
    let siswa = ["Alief", "Bagus", "Fernanda", "Rizky"]
    siswa.pop()
    console.log(siswa)
    // (3) ['Alief', 'Bagus', 'Fernanda']
    ```
- .unshift()<br>
.unshift() adalah method untuk menambahkan item array pada index pertama.
    ```javascript
    let siswa = ["Alief", "Bagus", "Fernanda", "Rizky"]
    siswa.unshift("Abil")
    console.log(siswa)
    // (3) ['Abil', 'Alief', 'Bagus', 'Fernanda', 'Rizky']
    ```
- .shift()<br>
.shift() adalah method untuk menghapus item array pada index pertama.
    ```javascript
    let siswa = ["Alief", "Bagus", "Fernanda", "Rizky"]
    siswa.shift()
    console.log(siswa)
    // (3) ['Bagus', 'Fernanda', 'Rizky']
    ```

## Looping pada Array
Array memiliki built in methods untuk melakukan looping yaitu .map() dan .forEach().
- .forEach()<br>
.forEach() adalah method untuk melakukan looping pada setiap elemen array.
    ```javascript
    let cars = ['Honda', 'Toyota', 'Nissan']
    cars.forEach(element => {
        console.log(element)
        // 'Honda', 'Toyota', 'Nissan'
    })
    ```
- .map()<br>
map() melakukan perulangan/looping dengan membuat array baru.
    ```javascript
    let number = [1, 2, 3, 4]
    let doubled = number.map(element => {
        return element *2
    })
    console.log(doubled)
    // (4) [2, 4, 6, 8]
    ```
Kita bisa lihat bahwa .map() dan forEach() sama-sama melakukan looping dan mengembalikan nilai baru dari operasi yang dilakukan. Perbedaannya adalah .forEach tidak dapat membuat array baru dari hasil operasi yang ada dalam looping. Jadi, gunakan .forEach() jika hanya memerlukan looping untuk menampilkan saja atau menyimpan ke database. Gunakan .map() jika akan melakukan operasi pada array seperti yang dapat mengubah nilai array sebelumnya.

## Multidimensional Array
Multidimensional Array bisa dianalogikan dengan array of array atau ada array di dalam array. Bayangkan multidimensional ini seperti tabel. Baris pada tabel itu menunjukan jumlah array. Column pada tabel itu menunjukan isi dari tiap array.
![Ilustrasi Multidimensional Array](img-1.png)
```javascript
let inventory = [
    ['Simpati', 10],
    ['IM3', 18],
    ['Axis', 5],
    ['XL', 21]
]
console.log(inventory)
// 0 : ['Simpati', 10]
// 1 : ['IM3', 18]
// 2 : ['Axis', 5]
// 3 : ['XL', 21]

// Cara mengakses multidimensional array
console.log(inventory[0][1]) // 10
```
Sama seperti array satu dimensi, multidimensional array juga dapat menggunakan Property dan Method built-in Array.
```javascript
let inventory = [
    ['Simpati', 10],
    ['IM3', 18],
    ['Axis', 5],
    ['XL', 21]
]
inventory.push(['Smartfren', 12])
console.log(inventory)
// ['Simpati', 10]
// ['IM3', 18]
// ['Axis', 5]
// ['XL', 21]
// ['Smartfren', 12]

let inventory = [
    ['Simpati', 10],
    ['IM3', 18],
    ['Axis', 5],
    ['XL', 21]
]
let a = inventory.map(dataInven => {
    let terjual = 100 - dataInven[1]
    return terjual
})
console.log(a)
```

## Object
Object adalah sebuah tipe data pada variabel yang menyimpan properti/key dan value/fungsi (method). Properti adalah data lengkap dari sebuah object. Method adalah action dari sebuah object. Apa saja yang dapat dilakukan dari suatu object. Object termasuk tipe data non-primitive. Object dapat diassign kedalam sebuah variabel. Sama seperti array, didalam object kita dapat menyimpan properti dengan tipe data apapun.
```javascript
let buku = {
    judul: 'Cantik itu Luka',
    penulis: 'Eka Kurniawan',
    tahun: 2002,
}
```

## Mengakses Object dan Property Object
```javascript
let buku = {
    judul: 'Cantik itu Luka',
    penulis: 'Eka Kurniawan',
    tahun: 2002,
}

// Mengakses seluruh object
console.log(buku)
```
Untuk mengakses properti object ada dua cara:
- Dot Notation
    ```javascript
    let buku = {
        judul: 'Cantik itu Luka',
        penulis: 'Eka Kurniawan',
        tahun: 2002,
    }  

    // Memanggil variabel dengan properti
    console.log(buku.judul) // Cantik itu Luka
    ```
- Bracket Notation
    ```javascript
    let buku = {
        judul: 'Cantik itu Luka',
        penulis: 'Eka Kurniawan',
        "tahun terbit": 2002,
    }  

    console.log(buku['tahun terbit']) // 2002
    ```

## Update Object
Kita dapat melakukan update pada variabel dengan tipe data Object. Object dapat mengupdate value dari key yang sudah tersedia. Object juga dapat menambahkan key dan value baru.
```javascript
let buku = {
    judul: 'Cantik itu Luka',
    penulis: 'Eka Kurniawan',
    "tahun terbit": 2002,
}  

buku.penulis = "Eka Fuzianti"
buku.penerbit = "Gramedia"


console.log(buku)
// judul: "Cantik itu Luka"
// penerbit: "Gramedia"
// penulis: "Eka Fuzianti"
// tahun terbit: 2002
```
Jika menggunakan const pada variable object, kita tidak bisa mengganti seluruh data object dengan object yang baru. Akan tetapi jika mengganti value dari key masih bisa.
```javascript
const buku = {
    judul: 'Cantik itu Luka',
    penulis: 'Eka Kurniawan',
    "tahun terbit": 2002,
}  

buku = {
    title: 'Earth'
}

console.log(buku) // Uncaught TypeError: Assignment to constant variable.
```
Jadi jika membutuhkan untuk update seluruh data object gunakan ‘let’ pada saat deklarasi variabel.

## Delete Object Property
Kita dapat menghapus properti dari object menggunakan delete operator.
```javascript
let buku = {
    judul: 'Cantik itu Luka',
    penulis: 'Eka Kurniawan',
    "tahun terbit": 2002,
} 

delete buku.penulis

console.log(buku)
// judul: "Cantik itu Luka"
// tahun terbit: 2002
```

## Method Object
Jika value yang kita masukkan pada property berupa function, maka itu disebut method. Kita bisa membuat method custom untuk kita gunakan sesuai kebutuhan.
```javascript
let greeting = {
    welcome: function(){
        return "Hai, selamat datang"
    }
}

console.log(greeting.welcome()) // "Hai, selamat datang"
```

## Nested Object
Pada real application nanti kalian pasti menemukan data object yang kompleks. Object yang berasal dari turunan object lainnya. Atau simpelnya adalah object di dalam object.
```javascript
let buku = {
    judul: "Intro to Data Mining",
    tahun: "2018",
    penulis: {
        penulis1:{
            nama: "Eka Kurniawan",
            umur: 20
        },
        penulis2:{
            nama: "Fauzan Al-Haq",
            umur: 21
        }
    }
}

console.log(buku.penulis.penulis1.nama)
// "Eka Kurniawan"
```

## Looping Object
Jika kita ingin menampilkan seluruh object properti. Kita bisa menggunakan looping. Jadi tidak perlu mengakses secara manual memanggil setiap propertinya. Caranya menggunakan for...in.
```javascript
let buku = {
    judul: "Intro to Data Mining",
    tahun: "2018",
    penulis: {
        penulis1:{
            nama: "Eka Kurniawan",
            umur: 20
        },
        penulis2:{
            nama: "Fauzan Al-Haq",
            umur: 21
        }
    }
}

for(let data in buku){
    console.log(buku[data])
    // Intro to Data Mining
    // 2018
    // {penulis1: {…}, penulis2: {…}} 
}

for(let data in buku.penulis.penulis2){
    console.log(buku.penulis.penulis2[data]);
    // Fauzan Al-Haq
    // 21
}
```

## Array of Object
Object sama seperti Array yang bisa menyimpan banyak data. Kita dapat menggunakan array untuk menyimpan banyak object.
```javascript
let siswa = [
    {
        nama: 'Rizky',
        umur: 17,
        isVerified: true
    },
    {
        nama: 'Fauzan',
        umur: 16,
        isVerified: true
    },
    {
        nama: 'Abi',
        umur: 18,
        isVerified: true
    }
]

// Gunakan forEach jika object berada di dalam array
siswa.forEach((listSiswa) =>{
    console.log(listSiswa)
    // {nama: 'Rizky', umur: 17, isVerified: true}
    // {nama: 'Fauzan', umur: 16, isVerified: true}
    // {nama: 'Abi', umur: 18, isVerified: true}
})
```