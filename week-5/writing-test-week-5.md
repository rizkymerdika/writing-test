# React JS

## Intro to React JS
React JS adalah framework javascript library yang digunakan untuk membangun user interfaces pada website. React JS dibuat oleh tim engineer Facebook. Facebook menggunakan React JS pada sisi front-end. React JS masih unggul di antara framework javascript lainnya seperti vue dan angular menurut Google Trends.

Kenapa menggunakan React JS ?
- React JS is FAST. React JS membuat aplikasi front-end menjadi lebih cepat walaupun harus menghandle berbagai data.
- React JS is MODULAR. Kita dapat menerapkan konsep Modular javascript pada React JS membagi 1 tampilan pada website menjadi komponen-komponen kecil.
- React JS is SCALABLE. React JS dapat digunakan pada aplikasi berskala kecil hingga besar dan kompleks.
- React JS is POPULAR. Komunitas React JS di seluruh dunia sangat besar. Kebanyakan perusahaan teknologi sudah menggunakan React JS.

## Instalasi React JS
1. Install Node JS. Kita mengunduh Node JS pada link https://nodejs.org.
2. Gunakan library create-react-app. 
    ```
    npx create-react-app my-app
    cd my-app
    npm start
    ```
    Jika berhasil terinstal, maka akan terbuat folder atau project baru, kemudian ketika menjalankan start akan otomatis terbuka pada browser.

## Buat UI Element dengan React JS
Kita akan coba membuat Hello World. Pertama edit pada file App.js.
```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return ( // hanya bisa me-return 1 elemen saja
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```
Kemudian kita panggil function App di index.js.
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## JSX
Kenapa ada elemen HTML di dalam javascript ? Ya itu adalah JSX. JavaScript XML atau JSX adalah syntax extension untuk javascript. JSX dikembangkan untuk digunakan pada React JS. JSX perlu dicompile untuk menjadi javascript. Dengan JSX kita dapat menggunakan elemen HTML di dalam file javascript.

Setiap JSX hanya bisa memiliki 1 parent element.
```javascript
// Benar
function App() {
  return (
// Pada JSX attribut class di tag elemen HTML harus menggunakan className.
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

// Salah
function App() {
  return ( 
    <h1>Hello World</h1>
    <p>Selamat Datang</p>
  );
}

// Benar
function App() {
  return ( 
    <div>
        <h1>Hello World</h1>
        <p>Selamat Datang</p>
    </div>
  );
}
```
Kita bisa menggunakan syntax javascript di dalam element HTML dengan curly braces.
```javascript
function App() {
  return (
    <div className="App">
      <h1>{2 + 3}</h1> // 5
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>2 + 3</h1> // 2 + 3
    </div>
  );
}
```
Gunakan curly braces untuk akses variabel pada JSX. Kita juga bisa menggunakan method javascript pada HTML.
```javascript
let name = Rizky

function App() {
  return (
    <div className="App">
      <h1>{name.toLowerCase()}</h1>

    </div>
  );
}
```

## Virtual DOM
DOM merupakan core dari javascript. Dengan DOM kita dapat berinteraksi seperti mengupdate data di halaman web. React JS mempunyai fitur virtual DOM. Virtual DOM adalah duplikasi dari real DOM yang sebenarnya.
![Virtual DOM](https://qph.cf2.quoracdn.net/main-qimg-e815ea8eee3becaa862907d2e61b78ef-pjlq)
Misalnya kita mempunyai 2 komponen UI dalam 1 halaman. Jika kita melakukan perubahan pada 1 komponen, maka React JS hanya melakukan render ulang pada komponen tersebut. Virtual DOM ini membuat React JS menjadi lebih cepat dalam performance.