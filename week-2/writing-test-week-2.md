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
        console.log("Nyalakan Mesin!")
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
    console.log(myName // Uncaught ReferenceError: myName is not defined because local scope
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