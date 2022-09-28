# JavaScript

## Looping
Looping adalah statement yang mengulang sebuah instruksi hingga kondisi terpenuhi atau jika kondisi stop atau berhenti tercapai.
- For Loop<br>
FOR LOOP merupakan instruksi pengulangan yang dapat kita berikan pada program yang kita kembangkan. Gunakan FOR LOOP jika kita tahu seberapa banyak nilai pasti untuk pengulangannya.
    ```javascript
    // Menampilkan urutan angka 1 - 10
    for(let i = 1; i <= 10; i++){
        console.log(i)
    }
    ```
- While Loop<br>
WHILE LOOP akan menjalankan instruksi pengulangan kondisi bernilai TRUE. Gunakan WHILE LOOP jika kita tidak mengetahui jumlah pasti pengulangan.
    ```javascript
    //Syntax 
    while(expression){
        statement
    }

    // Contoh
    let jumlahUser = 100
    let i = 1

    while(i <= jumlahUser){
        console.log("User ke " + i)
        i++
    }
    ```
- Do While Loop<br>
Do while loop akan menjalankan pengulangan 1 kali sebelum dilakukan pengecekan kondisi.
    ```javascript
    // Syntax
    do{
        statement
    } while(expression)

    //Contoh
    let bensin = 4

    do{
        console.log(bensin)
        bensin--
    } while(bensin > 0)
    ```
- Nested Loop<br>
Jika kita membuat looping didalam looping. Maka ini dinamakan Nested Loop. Looping pertama dianalogikan sebagai baris. Looping kedua dianalogikan sebagai kolom.
    ```javascript
    for(let i = 1; i <= 5; i++){
        for(let j = 1; j <= i; j++){
            console.log("Baris ke "+ i)
            console.log("Kolom ke "+ i)
        }
    }
    ```

## Scope
Scope adalah konsep dalam flow data variabel. Menentukan suatu variabel bisa diakses pada scope tertentu atau tidak. Ibaratnya seperti ruang kerja dari variabel.

- Blocks<br>
Blocks adalah code yang berada didalam curly braces {}. Conditional, function, dan  looping menggunakan blocks.
- Global Scope<br>
Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file. Agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar Blocks.
    ```javascript
    let myName = 'Rizky'

    function callName(){
        return myName // Rizky
    }

    console.log(myName) // Rizky
    ```
- Local Scope<br>
Local scope berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping. Maka variabel hanya bisa diakses didalam blocks saja. Tidak bisa diakses diluar blocks.
    ```javascript
    function callName(){
        let myName = 'Rizky'
        return myName // Rizky
    }

    console.log(callName()) // Rizky
    console.log(myName) // Uncaught ReferenceError: myName is not defined because local scope
    ```

## Function
Function adalah sebuah blok kode dalam sebuah grup untuk menyelesaikan 1 task atau 1 fitur. Saat kita membutuhkan fitur tersebut nantinya, kita bisa kembali menggunakannya.

- Membuat Function
    ```javascript
    // Cara ke-1
    function identifier(){
        statements
    }

    // Cara ke-2 dibuat jadi variabel
    let identifier = function(){
        statements
    }

    // Cara ke-3 menggunakan arrow function
    let identifier = () => {
        statements
    }
    ```
- Memanggil Function
    ```javascript
    identifier();
    console.log(identifier())
    ```
- Parameter Function<br>
Dengan parameter, function dapat menerima sebuah inputan data dan menggunakannya untuk melakukan task. Saat membuat function, kita harus tahu data-data yang dibutuhkan.
    ```javascript
    function penambahan(a, b){
        return a + b;
    }
    // a dan b merupakan parameter
    ```
- Argumen Function<br>
Argumen adalah nilai yang digunakan saat memanggil function. Jumlah argumen harus sama dengan jumlah parameternya.  Jika di function penambahan ada 2 parameter nilai saat membuat function, maka Saat memanggil function kita gunakan 2 buah nilai argumen.
    ```javascript
    function penambahan(a, b){
        return a + b;
    }

    console.log(penambahan(1, 2)) // Output 3

    // 1 dan 2 merupakan argumen
    ```
- Default Parameters<br>
Default paramaters digunakan untuk memberikan nilai awal/default pada parameter function. Default parameters bisa digunakan jika kita ingin menjaga function agar tidak error saat dipanggil tanpa argumen.
    ```javascript
    function greetOnWebsite(name = "Stranger"){
        return 'Hello ' + name
    }

    console.log(greetOnWebsite("Rizky")) // Output: 'Hello Rizky'
    console.log(greetOnWebsite()) // Output: 'Hello Stranger'
    ```
- Function Helper<br>
Kita bisa menggunakan function yang sudah dibuat pada function lain.
    ```javascript
    function perkalian(number){
        return number * (4/5)
    }
    function jumlah(total){
        return perkalian(total) + 10
    }

    console.log(jumlah(10)) //Output: 18
    ```

## Dynamic and Weak Typing
JavaScript adalah bahasa dinamis dengan tipe dinamis. Variabel dalam JavaScript tidak secara langsung terkait dengan tipe data tertentu, dan variabel apa pun dapat diberi (dan ditetapkan kembali) nilai dari semua tipe.
```javascript
let lorem = 42 // lorem adalah sebuah number
lorem = "Hello" // lorem sekarang sebuah string
lorem = true // lorem sekarang sebuah boolean
```
JavaScript juga merupakan bahasa yang weakly typed, yang berarti memungkinkan konversi tipe implisit saat operasi melibatkan tipe data yang tidak cocok, alih-alih melempar ke error.
```javascript
const lorem = 42 // lorem sebuah number
const result = lorem + "1" // JavaScript merubah lorem ke string, sehingga dapat digabungkan dengan operan lainnya

console.log(result) // 421
```

## Menentukan Tipe Data Variabel
Operator typeof dapat membantu untuk menemukan tipe data dari variabel.
```javascript
let a = 3
let b = 'ipsum'

typeof a // number
typeof b // string
```

## String
Tipe data yang mengandung grup karakter bisa terdiri dari huruf, angka, spasi, simbol, dan lainnya.
1. Properties
Satu-satunya properti pada string yaitu string length. Properti ini mengembalikan jumlah unit kode dalam string. JavaScript menggunakan UTF-16 encoding, dimana setiap karakter Unicode dapat dikodekan sebagai satu atau dua unit kode, jadi mungkin saja nilai yang dikembalikan menurut panjangnya tidak cocok dengan jumlah sebenarnya dari karakter Unicode dalam string.
    ```javascript
    const str = 'Life, the universe and everything';
    console.log(str.length) // Output 33

    const adlam = "𞤲𞥋𞤣𞤫";
    console.log(adlam.length); // 8
    ```
2. Method
    - toLowerCase()<br>
    Method toLowerCase () akan mengembalikan nilai string yang dikonversi ke huruf kecil.
        ```javascript
        let kalimat = "Aku Manusia Hebat"

        console.log(kalimat.toLowerCase()) // Output: 'aku manusia hebat'
        ```
    - toUpperCase()<br>
    Method toUpperCase () akan mengembalikan nilai string yang dikonversi ke huruf kapital.
        ```javascript
        let kalimat = "Aku Manusia Hebat"

        console.log(kalimat.toUpperCase()) // Output: 'AKU MANUSIA HEBAT'
        ```
    - charAt()<br>
     Method charAt() mengembalikan string baru yang terdiri dari unit kode UTF-16 tunggal yang terletak di index yang ditentukan ke dalam string.
        ```javascript
        // Syntax
        charAt(index)

        let kata = "Manusia"
        console.log(kata.charAt(3)) // Output: 'u'
        ```
    - includes()<br>
    Method includes() akan melakukan pencarian untuk menentukan apakah satu string dapat ditemukan di dalam string lain, mengembalikan nilai true atau false. Method includes() merupakan case-sensitive.
        ```javascript
        // Syntax
        str.include(searchString)

        let hewan = 'White Sharks'
        console.log(hewan.includes('White')) // True
        console.log(hewan.includes('white')) // False
        ```
    - split()<br>
    Method split() mengambil pola dan membagi sebuah String ke dalam daftar urutan substring dengan mencari pola, menempatkan substring ini ke dalam array, dan mengembalikan array.
        ```javascript
        // Syntax 
        split()
        split(separator)

        const str = 'The quick brown fox jumps over the lazy dog.';

        console.log(str.split(" "))
        // Output: (9) ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
        ```
    
## Number
Tipe data yang mengandung semua angka termasuk angka desimal.
1. Method
    - isNaN()<br>
    Metode Number.isNaN() menentukan apakah nilai yang diteruskan atau tipe data suatu variabel adalah NaN dan tipenya adalah Number. Jika nilai yang dikembalikan adalah false, maka variabel atau nilai tersebut adalah number. Jika dikembalikan true, maka variabel atau nilai tersebut bukan number.
        ```javascript
        // Syntax
        Number.isNaN()

        let angka = 420
        let kata = 'Halo123'
        console.log(isNaN(angka)) // false
        console.log(isNaN(kata)) // true
        console.log(isNaN('13')) // false
        ```
    - toString()<br>
    Metode toString() mengembalikan string yang mewakili objek Number.
        ```javascript
        // Syntax
        toString()

        const count = 20
        console.log(count.toString()) // Output: '10'

        console.log((17).toString()) // Output: '17'
        ```
    - toFixed()<br>
    Metode toFixed() memformat angka menggunakan notasi fixed-point. Nilai yang dikembalikan yaitu sebuah string yang mewakili nomor yang diberikan menggunakan notasi fixed-point.
        ```javascript
        // Syntax
        toFixed()
        toFixed(digits)

        const numObj = 12345.6789
        console.log(numObj.toFixed()) // '12346'
        console.log(numObj.toFixed(1)) // '12345.7'
        console.log(numObj.toFixed(3)) // '12345.679'
        ```

## Math
Math adalah objek bawaan javascript yang memiliki properti dan metode untuk konstanta dan fungsi matematika. Ini bukan function object.
1. Properties
    - Math.PI<br>
    Properti Math.PI mewakili rasio keliling lingkaran dengan diameternya, sekitar 3,14159.
        ```javascript
        console.log(Math.PI * 2) 
        // 6.283185307179586
        ```
    - Math.SQRT2<br>
    Properti Math.SQRT2 mewakili akar kuadrat dari 2, kira-kira 1,414.
        ```javascript
        console.log(Math.SQRT2)
        // 1.4142135623730951
        console.log(Math.SQRT2 * 3)
        // 4.242640687119286
        ```
2. Method
    - Math.abs()<br>
    Metode Math.abs() mengembalikan nilai absolut dari sebuah angka.
        ```javascript
        // Syntax
        Math.abs(x)

         console.log(Math.abs(-1)) // 1
         console.log(Math.abs('-1')) // 1
         console.log(Math.abs('halo')) // NaN
        ```
    - Math.sqrt()<br>
    Metode Math.sqrt() mengembalikan akar kuadrat dari sebuah angka.
        ```javascript
        // Syntax
        Math.sqrt(x)

        console.log(Math.sqrt(9)) // 3
        console.log(Math.sqrt(-1)) // NaN
        ```
    - Math.pow()<br>
    Metode Math.pow() mengembalikan nilai basis yang dipangkatkan.
        ```javascript
        // Syntax
        Math.pow(base, exponent)

        console.log(Math.pow(7,2)) // 49
        console.log(Math.pow(4,0.5)) // 2
        console.log(Math.pow(8,1/3)) // 2
        ```
    - Math.round()<br>
    Metode Math.round() mengembalikan nilai angka yang dibulatkan ke bilangan bulat terdekat.
        ```javascript
        // Syntax
        Math.round(x)

        console.log(Math.round(4.5)) // 5
        console.log(Math.round(4.4)) // 4
        console.log(Math.round(-4.7)) // -5
        ```
    - Math.floor()<br>
    Metode Math.floor() selalu membulatkan ke bawah dan mengembalikan bilangan bulat terbesar yang kurang dari atau sama dengan angka tertentu.
        ```javascript
        // Syntax
        Math.floor(x)

        console.log(Math.floor(4.5)) // 4
        console.log(Math.floor(4.4)) // 4
        console.log(Math.floor(-4.7)) // -5
        ```
    - Math.ceil()<br>
    Metode Math.ceil() selalu membulatkan dan mengembalikan bilangan bulat yang lebih kecil menjadi yang lebih besar dari atau sama dengan angka yang diberikan.
        ```javascript
        Math.ceil(x)

        console.log(Math.ceil(4.5)) // 5
        console.log(Math.ceil(4.4)) // 5
        console.log(Math.ceil(-4.7)) // -4
        ```
    - Math.random()<br>
    Metode Math.random() mengembalikan angka secara acak.
        ```javascript
        Math.random()

        console.log(Math.random())
        // Menampilkan angka secara acak
        console.log(Math.random() * 10)
        // Menampilkan angka secara acak dari 0 - 10
        ```
## JavaScript HTML DOM
DOM adalah jembatan supaya bahasa pemrograman dapat berinteraksi dengan dokumen HTML. Ketika halaman web dimuat, browser akan membuat sebuah Document Object Model (DOM) dari halaman web. Struktur HTML DOM direpresentasikan seperti ini:
![HTML DOM Tree Object](https://www.w3schools.com/js/pic_htmltree.gif)
Dengan adanya DOM ini, JavaScript diberi akses untuk membuat HTML menjadi dinamis, seperti:
- Mengubah element HTML pada halaman website.
- Mengubah attribute HTML pada halaman website.
- Mengubah CSS style pada halaman website.
- Menambah dan/atau menghapus element maupun attribute HTML.
- Menambah HTML event (contoh: efek klik pada mouse, hover pada mouse, dan lain-lain) pada halaman website.
- Berinteraksi dengan semua HTML event di website.

## Element vs Node
Ketika kita mengakses DOM, terdapat 2 jenis output yang akan didapatkan yaitu element dan node. Seperti yang kita tahu element adalah komponen yang dimulai dari opening tag hingga closing tag. Sedangkan node adalah setiap bagian terkecil di HTML, misalnya seperti text, comment, bentuk element juga termasuk node.
```html
<!-- Contoh Node -->
<a href = "#">Klik</a>
<!-- href merupakan node -->
<!-- text 'Klik' merupakan node -->
```

## Traversing Elements
Untuk mengakses element HTML dikategorikan menjadi 3, yaitu:<br>
1. Ke Bawah
    - getElementById(Id)<br>
    Kita bisa menggunakan getElementById untuk mengakses element HTML berdasarkan nilai id-nya.
        ```javascript
        <h1 id="title">Hallo</h1>

        let title = document.getElementById('title')
        console.log(title) 
        // Output: <h1 id="title">Hallo</h1>
        ```
    - getElementsByClassName(class)<br>
    Kita bisa menggunakan getElementByClassName untuk mengakses element HTML berdasarkan nilai class-nya.
        ```javascript
        <ul class="list">
            <li class="item">Satu</li>
            <li class="item">Dua</li>
            <li class="item">Tiga</li>
        </ul>

        let list = document.getElementsByClassName('list')
        console.log(list)
        // Output: HTMLCollection [ul.list]
        console.log(list[0])
        // Output: <ul class = 'title'>...</ul>
        console.log(list[0].children)
        // Output: HTMLCollection(3) [li.item, li.item, li.item]
        ```
    - getElementsByTagName()<br>
    Kita bisa menggunakan getElementByTagName untuk mengakses element HTML berdasarkan jenis tag-nya.
        ```javascript
        <ul class="list">
            <li class="item">Satu</li>
            <li class="item">Dua</li>
            <li class="item">Tiga</li>
        </ul>

        let item = document.getElementsByTagName('li')
        console.log(item)
        // Output: HTMLCollection(3) [li.item, li.item, li.item]
        console.log(item[1])
        //Output: <li class="item">Dua</li>
        ```
    - querySelector(cssSelector)<br>
    Untuk mengakses element-element HTML berdasarkan CSS Selector-nya HTML, kita bisa menggunakan querySelector.
        ```javascript
        <ul class="list">
            <li class="item">Satu</li>
            <li class="item">Dua</li>
            <li class="item">Tiga</li>
        </ul>

        let itemQuery = document.querySelector('.item')
        console.log(itemQuery)
        // Output: <li class="item">Satu</li>
        ```
    - querySelectorAll(cssSelector)<br>
    Untuk mengakses element-element HTML berdasarkan CSS Selector-nya HTML, kita juga bisa menggunakan querySelectorAll.
        ```javascript
        <ul class="list">
            <li class="item">Satu</li>
            <li class="item">Dua</li>
            <li class="item">Tiga</li>
        </ul>

        let itemQueryAll = document.querySelectorAll('.item')
        console.log(itemQueryAll)
        // Output: NodeList(3) [li.item, li.item, li.item]
        console.log(itemQueryAll[1])
        // Output: <li class="item">Dua</li>
        ```
2. Ke Atas
    - parentElement<br>
    Untuk mengakses parent dari element child.
        ```javascript
        <ul class="list">
            <li class="item">Satu</li>
            <li class="item">Dua</li>
            <li class="item">Tiga</li>
        </ul>

        let itemQuery = document.querySelector('.item')
        console.log(itemQuery) 
        // Output: <li class="item">Satu</li>
        console.log(itemQuery.parentElement)
        // Output: <ul class = 'title'>...</ul>
        ```
    - closest()<br>
    Untuk menemukan elemen terdekat yang cocok dengan CSS selector.
        ```javascript
        <div class="demo container"> Grandparent
            <div class="demo">Parent
                <div id="myElement" class="demo">The parent of this div element will be selected.</div>
            </div>
        </div>

        let element = document.getElementById("myElement");
        console.log(element.closest(".container"))
        // Output: <div class="demo container">...</div>
        ```
3. Ke Samping
    - nextElementSibling<br>
    Properti nextElementSibling digunakan untuk mengakses elemen berikutnya di tingkat yang sama.
        ```javascript
        <ul class="list">
            <li class="item">Satu</li>
            <li class="item">Dua</li>
            <li class="item">Tiga</li>
        </ul>

        let itemQuery = document.querySelector('.item')
        console.log(itemQuery.nextElementSibling)
        // Output: <li class="item">Dua</li>
        ```
    - previousElementSibling<br>
    Properti previousElementSibling digunakan untuk mengakses elemen sebelumnya di tingkat yang sama.
        ```javascript
        <ul class="list">
            <li class="item">Satu</li>
            <li class="item">Dua</li>
            <li class="item">Tiga</li>
        </ul>

        let itemQuery = document.querySelector('.item')
        console.log(itemQuery.previousElementSibling)
        //Output: null
        ```