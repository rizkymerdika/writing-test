# React JS

## React Context
Dengan react 16.3 kita sekarang memiliki akses ke context API baru. Meskipun tidak dimaksudkan sebagai pengganti state management libraries seperti Redux atau MobX, context API memungkinkan cara mudah untuk berbagi data secara global di antara beberapa komponen tanpa harus meneruskannya sebagai props. Ini memecahkan masalah umum yang dikenal sebagai masalah prop-drilling dimana props perlu diturunkan ke beberapa komponen di tree untuk mencapai komponen yang membutuhkannya.

Untuk membuat context baru, gunakan function createContext:
```javascript
export const KeranjangCountContext = createContext()
```
Di sini kita juga bisa memberikan nilai default ke context, tetapi kita juga dapat menghilangkan nilai default ini jika mau. 

Fungsi createContext mengembalikan komponen Provider dan Consumer.

### Provider
Komponen Provider digunakan untuk membungkus komponen di tree yang akan membutuhkan akses ke value dari Context. Di sini mari kita buat komponen KeranjangCountProvider yang nantinya akan membungkus App dan menawarkan cara untuk mengubah nilai context lokal:
```javascript
import { createContext, useState } from "react"

export const KeranjangCountContext = createContext()

function KeranjangCountProvider({children}) {
    const [keranjangCount, setKeranjangCount] = useState(0)

  return (
    <KeranjangCountContext.Provider value={ {keranjangCount, setKeranjangCount} }>
      {children}
    </KeranjangCountContext.Provider>
  )
}

export default KeranjangCountProvider
```
Pada context value yang akan kita oper atau yang menjadi global state adalah keranjangCount dan setKeranjangCount.

Kita dapat menggunakan provider di App component:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import KeranjangCountProvider from './KeranjangCountProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <KeranjangCountProvider>
    <App />
  </KeranjangCountProvider>
)
```
App di sini akan dilempar ke KeranjangCountProvider sebagai props dan akan ditangkap pada props children.

### Consumer
Sekarang yang harus kita lakukan adalah mengakses nilai dari context menggunakan komponen Consumer. Di sini kita akan menggunakan useContext untuk mengakses nilai dari context:
```javascript
import { useContext, useState } from 'react'
import { KeranjangCountContext } from '../KeranjangCountProvider'

function Counter() {
    const [count, setCount] = useState(0)
    const {keranjangCount, setKeranjangCount} = useContext(KeranjangCountContext)

    function increment(){
        setCount(count + 1)
        setKeranjangCount(keranjangCount + 1)
    }

    function decrement(){
        setCount(count - 1)
        setKeranjangCount(keranjangCount - 1)
    }

  return (
    <>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </>
  )
}

export default Counter
```

### useReducer
Sebuah alternatif untuk useState. Memungkinkan custom state logic. Context bukan state management. Agar context menjadi state management kita bisa menggunakan useReducer. Konsepnya mirip seperti redux thunk, kita harus membuat reducer serta action.

useReducer menerima dua argument, yaitu reducer dan initialState. Fungsi reducer berisi custom logic state dan initialState dapat berupa nilai sederhana tetapi umumnya akan berisi objek. useReducer mengembalikan state saat ini dan dispatch method.

Berikut adalah contoh penggunaan useReducer pada counter app:
```javascript
import { createContext, useReducer } from "react"

export const CounterContext = createContext()

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const initialState = {
    count: 0
}

function reducer(state, action){
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

function CounterProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    function increment(){
        dispatch({
            type: INCREMENT
        })
    }
    function decrement(){
        dispatch({
            type: DECREMENT
        })
    }

  return (
    <CounterContext.Provider value={{state, increment, decrement}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
```
Kemudian pada component reducer kita ambil value yang dioper menggunakan useContext:
```javascript
import { useContext } from "react"
import { CounterContext } from "../CounterProvider"


function Counter() {
  const {state, increment, decrement} = useContext(CounterContext)

  return (
    <>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
    </>
  )
}

export default Counter
```

## React Testing

### Manual Testing vs Automation Testing
Manual testing adalah proses di mana kita melakukan pengujian satu per satu secara individual. Tujuan manual testing adalah untuk menangkap bug dan masalah fitur sebelum aplikasi dipublikasi. Saat menguji secara manual, penguji memvalidasi fitur utama aplikasi perangkat lunak. Analis menjalankan kasus uji dan mengembangkan summary error reports tanpa alat otomatisasi khusus. Manual testing sangat praktis. Ini membutuhkan seorang analyst dan QA engineer untuk terlibat dalam segala hal mulai dari pembuatan kasus uji hingga eksekusi pengujian yang sebenarnya.

Automation testing adalah proses di mana penguji menggunakan tools dan scripts untuk mengotomatisasi upaya pengujian.  Script adalah rangkaian instruksi yang harus dilakukan pada platform target untuk memvalidasi fitur atau hasil yang diharapkan.

Keduanya memiliki kekurangan dan kelebihan masing-masing. Manual testing itu lambat. Tetapi kelebihannya adalah lebih baik menangani skenario yang kompleks. Automation testing memerlukan pengkodean dan test maintenance. Tetapi sisi positifnya, ini jauh lebih cepat dan mencakup lebih banyak permutasi.

### Test Driven Development (TDD)
Test Driven Development (TDD) adalah praktik pengembangan perangkat lunak yang berfokus pada pembuatan kasus unit test sebelum mengembangkan kode yang sebenarnya. Ini adalah pendekatan berulang yang menggabungkan pemrograman, pembuatan unit tes, dan refactoring.

![TDD Lifecycle](https://appdevelopment.daffodilsw.com/hubfs/Imported_Blog_Media/Test-Driven-Development-How-Can-it-Benefit-Your-Business-In-Ensuring-Software-Quality.png)
Tiga fase dari Test Driven Development:<br>
1. Red: Developer perlu membuat unit test yang tepat untuk memverifikasi fungsionalitas fitur tertentu. Mereka harus memastikan bahwa pengujian dikompilasi sehingga dapat dieksekusi. Dalam kebanyakan kasus, tes pasti akan gagal. Ini adalah kegagalan yang berarti karena pengembang membuat pengujian ringkas berdasarkan asumsu mereka tentang bagaimana fitur akan berjalan.
2. Green: Setelah pengujian gagal, pengembang perlu membuat perubahan minimal yang diperlukan untuk memperbaiki code sehingga dapat berjalan dengan sukses saat dieksekusi kembali.
3. Refactor: Setelah pengujian berjalan sukses, periksa redudansi atau pengoptimalan code yang memungkinkan untuk meningkatkan kinerja secara keseluruhan. Pastikan bahwa refactor tidak memengaruhi external behavior dari program.

### Jest
Jest adalah javascript test runner, yaitu javascript library untuk membuat, menjalankan, dan menyusun test. Jest dikirimkan sebagai paket NPM, kita dapat menginstallnya di projek javascript apa pun. Jest adalah salah satu test runner paling populer saat ini dan pilihan default untuk projek React.

Seperti halnya setiap proyek JavaScript, kita memerlukan npm environtment. Buat folder baru dan inisialisasi project:
```
mkdir belajar-jest
cd belajar-jest
npm init -y
```
Selanjutnya kita harus menginstall jest:
```
npm install --save-dev jest
```
Mari kita juga mengkonfigurasi script npm untuk menjalankan test kita dari command line. Buka package.json dan konfigurasukan script bernama test untuk menjalankan Jest:
```
 "scripts": {
    "test": "jest"
  },
```
Mari kita mulai dengan menulis tes untuk fungsi hipotesis yang menjumlahkan dua nagka. Kita buat file sum.js:
```javascript
function sum(a, b){
    return a + b
}

module.exports = sum
```
Kemudian, buat file bernama sum.test.js. File ini akan berisi test yang sebenarnya:
```javascript
const sum = require('./sum')

test('menjumlahkan dua angka', () => {
    expect(sum(1, 2)).toBe(3)
})
```
Terakhir, jalankan npm test dan Jest akan mencetak pesan seperti ini:
```
PASS  ./sum.test.js
√ menjumlahkan dua angka (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.943 s
Ran all test suites.
```
Dan kita telah berhasil melakukan testing pertama.

### Using Matchers
Jest menggunakan "Matchers" untuk memungkinkan kita menguji nilai dengan cara yang berbeda. Cara paling sederhana untuk menguji suatu nilai adalah dengan exact equality.

toBe menggunakan Object.is untuk menguji kesetaraan yang tepat. Jika anda ingin memeriksa suatu nilai object, gunakan toEqual atau toStrictEqual.
```javascript
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```
Anda juga dapat menguji kebalikan dari matcher menggunakan not:
```javascript
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

a. Truthiness <br>
Dalam test, terkadang anda perlu membedakan antara undefined, null, dan false tetapi terkadang anda tidak ingin memperlakukannya secara berbeda. Jest mempunyai helpers yang memungkinkan anda secara eksplisit tentang apa yang anda inginkan.
- toBeNull hanya cocok dengan null
- toBeUndefined hanya cocok dengan undefined
- toBeDefined adalah kebalikan dari toBeUndefined
- toBeTruthy cocok dengan apa pun yang dianggap benar oleh pernyataan if
- toBeFalsy cocok dengan apa pun yang dianggap salah oleh pernyataan if

b. Numbers <br>
Sebagian besar cara membandingkan angka memiliki matcher yang setara.
```javascript
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

c. Strings <br>
Kita bisa memeriksa string terhadap regex dengan toMatch:
```javascript
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

d. Arrays dan iterable <br>
Kita dapat memeriksa apakah array atau iterable berisi item tertentu menggunakan toContain:
```javascript
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

### React Testing Library
React Testing Library adalah sekumpulan helper yang memungkinkan anda menguji komponen React tanpa bergantung pada detail implementasinya. React Testing Library dibangun di atas DOM Testing Library dengan menambahkan API untuk bekerja dengan komponen React. Project yang dibuat dengan Create React App memiliki dukungan siap pakai untuk React Testing Library. Jika belum anda bisa menambahkannya via npm:
```
npm install --save-dev @testing-library/react
```
React Testing Library adalah solusi yang sangat ringan untuk menguji komponen React. Ini menyediakan fungsi utilitas ringan di atas react-dom dan react-dom/test-utils, dengan cara yang mendorong praktik pengujian yang lebih baik.

Ketika anda baru membuat project dengan create-react-app, kalian bisa melihat ada file App.test.js. 
```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
Bisa dilihat bahwa RTL membutuhkan function render dan screen.

Render mengembalikan:
- Fungsi unmount untuk melepas komponen.
- Container reference ke DOM node dimana tempat komponen dipasang.
- Semua queries dari DOM Testing Library, terikat ke dokumen sehingga tidak perlu meneruskan node sebagai argumen pertama.

Queries yang dikembalikan dari render di React Testing Library sama denngan DOM Testing Library kecuali mereka memiliki argumen pertama yang terikat pada dokumen, jadi alih-alih getByText(node, 'text') lebih baik melakukan getByText('text').

1. Access by everyone
    - getByRole
    - getByLabelText
    - getByPlaceholderText
    - getByText 
2. Sematic Queries
    - getByAltText
    - getBytitle
3. test ID
    - getByTestId

Sekarang kita akan membuat counter kemudian akan kita lakukan test. Kita langsung saja buat counter di App:
```javascript
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
```
Selanjutnya kita buat test nya:
```javascript
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('render counter', () => {
  render(<App/>)
  const decrementBtn = screen.getByText("-")
  const count = screen.getByText("0")
  const incrementBtn = screen.getByText("+")

  expect(decrementBtn).toBeInTheDocument()
  expect(count).toBeInTheDocument()
  expect(incrementBtn).toBeInTheDocument()
})

test('increment button', () => {
  render(<App/>)
  const count = screen.getByText("0")
  const incrementBtn = screen.getByText("+")

  expect(count.textContent).toBe("0")

  fireEvent.click(incrementBtn) // fireEvent memicu DOM event.
  expect(count.textContent).toBe("1")
})
```