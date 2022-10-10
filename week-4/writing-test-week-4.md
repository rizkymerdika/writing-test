# JavaScript

## Async and Await
Selain menggunakan callback dan promise, kita juga bisa menggunakan async/await untuk menggunakan asynchronous pada JavaScript. Sebenarnya async/await dan promise itu sama saja, namun hanya berbeda dari syntax dan cara penggunaannya. Dengan keyword async kita diberikan cara yang lebih sederhana untuk membuat kode asynchronous berbasis promise. Menambahkan async di awal function menjadikannya async function:
```javascript
async function myFunction() {
  // Ini adalah async function
}
```
Di dalam async function, kita dapat menggunakan keyword await sebelum melakukan call ke function yang mengembalikan promise. Ini membuat kode menunggu hingga promise diselesaikan, di mana nilai yang dipenuhi dari promise diperlakukan sebagai return value, atau rejected value dibuang.<br>
Sebuah async function bisa tidak berisi await sama sekali atau lebih dari satu await. Keyword await hanya bisa digunakan didalam async function, jika digunakan di luar async function maka akan terjadi error.
```javascript
// Dengan cara membuat function biasa
async function tesAsyncAwait(){
    return "Fullfilled"
}
console.log(tesAsyncAwait());

// Dengan menggunakan arrow function
let tesAsyncAwait2 = async () => {
    return "Fullfilled"
}
console.log(tesAsyncAwait2());
```
Kita juga bisa memberikan error handling pada async/await. Contoh lengkap penggunaan async/await:
```javascript
// Definisikan promise yang akan digunakan
let nonton = async (condition) => {
    if(condition){
        return "Nonton terpenuhi"
    } else{
        throw "Gagal nonton"
    }
}

// Membuat fungsi run menjadi asynchronous menggunakan async/await
async function run(condition){
    try{
        const message = await nonton(condition)
        console.log(message);
    } catch(error){
        console.log(error);
    }
}

run(true)
```

## JSON
JSON, kependekan dari JavaScript Object Notation, adalah format untuk berbagi data. Seperti namanya, JSON berasal dari bahasa pemrograman JavaScript, tetapi tersedia untuk digunakan oleh banyak bahasa termasuk Python, Ruby, PHP, dan Java. JSON juga dapat dibaca, ringan, menawarkan alternatif yang baik untuk XML, dan membutuhkan lebih sedikit pemformatan.<br>
JSON menggunakan ekstensi .json saat berdiri sendiri, dan saat didefinisikan dalam format file lain (seperti dalam .html), ekstensi tersebut dapat muncul di dalam tanda kutip sebagai string JSON, atau dapat berupa objek yang ditetapkan ke variabel. Format ini mentransmisikan antara server web dan klien atau browser. Objek JSON adalah format data nilai kunci yang biasanya dirender dalam kurung kurawal.<br>
Berikut adalah contoh objek JSON:
```javascript
{
  "first_name" : "Sammy",
  "last_name" : "Shark",
  "location" : "Ocean",
  "online" : true,
  "followers" : 987 
}
```

## Fetch
Fetch API menyediakan antarmuka JavaScript untuk mengakses dan memanipulasi bagian protokol, seperti request dan responses. Ini juga menyediakan metode fetch() global yang menyediakan cara mudah dan logis untuk mengambil sumber daya secara asinkron di seluruh jaringan.<br>
Contoh network request yang biasa kita lakukan:
- Mengirimkan data dari sebuah form.
- Mengambil data untuk ditampilkan dalam list/table.
- Mendapatkan notifikasi.

Proses melakukan fetch() adalah salah satu proses asynchronous di JavaScript sehingga kita perlu menggunakan salah satu di antara promise atau async/await.

Request fetch dasar itu sangat simpel menggunakan promise. Perhatikan kode berikut:
```javascript
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
```
Berikut ini contoh request data dengan fetch() menggunakan promise:
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) // untuk unboxing data
    .then(data => console.log(data))
    .catch(error => console.log(error))
```
Berikut contoh request data dengan fetch() menggunakan async/await:
```javascript
let testFetchAsync = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        response = await response.json() // untuk unboxing data
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
testFetchAsync()
```