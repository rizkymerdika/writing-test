# React JS

## PropTypes
Kita dapat mengirimkan sebuah data dalam tipe apapun sebagai props. Tapi bagaimana jika kasusnya kita membutuhkan props yang wajib menggunakan tipe data tertentu ? Solusinya adalah menggunakan PropTypes. PropTypes adalah sebuah lib yang dapat membantu kita untuk memeriksa data props yang kita kirim agar sesuai dengan ekspektasi. Jika tidak sesuai, maka akan muncul pesan error.

Untuk menggunakan PropTypes kita harus menginstallnya terlebih dahulu.
```javascript
npm install prop-types
```
Contoh penggunaan PropTypes:
```javascript
import PropTypes from "prop-types" {/* Harus import terlebih dahulu */}

function StudentInfo({name, age}){
    return(
        <>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </>
    )
}

StudentInfo.propTypes = {
    name: PropTypes.string.isRequired, {/* name harus berupa string */}
    age: PropTypes.number.isRequired {/* age harus berupa number*/}
}
```
Ada banyak lagi tipe data yang bisa digunakan.
```javascript
// Tipe data Array
PropTypes.array

// Value dari array dengan tipe data tertentu
PropTypes.arrayOf(PropTypes.number)

// Tipe data apapun
PropTypes.any

// Memberikan opsi untuk tipe data
PropTypes.oneOfType([PropTypes.string, PropTypes.number])

// Tipe data object
PropTypes.shape
PropTypes.exact // Yang dikirim oleh props dengan yang didekalarasi dalam exact harus sama persis

// Kombinasi arrayOf dan oneOfType
PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
```