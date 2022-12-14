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

## Component
Component adalah salah satu core dari React JS. Component membagi UI dalam satuan-satuan kecil. Dalam 1 page ada beberapa component yang bisa kita buat. Kita akan membuat component jika component tersebut reusable code. Pada sebuah project, buatlah component jika component tersebut akan dibutuhkan pada page lain.

Ada 2 cara membuat component:
- Gunakan function
- Gunakan class

Kebanyakan kasus dan dokumentasi resmi React JS merekomendasikan menggunakan function. Pertama, kita perlu membuat project react. Setelah itu buat folder component. Di sini kita akan coba membuat component MemberInfo. Buat file MemberInfo.css dan MemberInfo.js. Nama folder, file, dan function component harus menggunakan huruf besar di awal dan kata selanjutnya.
```javascript
function MemberInfo(){
    return(
        <div className="member-info">
            <div>
                <img src={"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"} alt="" />
            </div>
            <div>
                <p>Nama</p>
                <p>Umur</p>
                <p>Track</p>
            </div>
        </div>
    )
}

export default MemberInfo;

// Di dalam App.js
import React from 'react'
import MemberInfo from './component/MemberInfo/MemberInfo';

function App() {
  return (
    <>
      <MemberInfo/>
    </>
  );
}

export default App;
```

## Styling pada React JS
Untuk melakukan styling pada React JS, kita bisa melakukannya seperti biasanya menggunakan CSS. Jika kita lihat, penamaan class di React berbeda. Pada react penamaan class menggunakan className. Kemudian kita panggil class tersebut pada MemberInfo.css dan lakukan styling. Setelah itu file MemberInfo.css akan kita import pada file App.js.
```javascript
// Di dalam file MemberInfo.css
.member-info{
    display: flex;
}
.member-info img{
    width: 100px;
    height: 100px;
}

// Kita import file MemberInfo.css ke App.js
import React from 'react'
import MemberInfo from './component/MemberInfo/MemberInfo';
import './component/MemberInfo/MemberInfo.css';

function App() {
  return (
    <>
      <MemberInfo/>
    </>
  );
}

export default App;
```
Kita juga memberikan styling dengan cara inline css.
```javascript
function MemberInfo(){
    return(
        <div className="member-info">
            <div>
                <img src={"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"} alt="" />
            </div>
            <div>
                <p style={{color: 'red'}}>Nama</p>
                <p>Umur</p>
                <p>Track</p>
            </div>
        </div>
    )
}

export default MemberInfo;
```
Kita juga bisa menggunakan bootstrap pada React JS. Untuk menggunakan bootstrap pada React kita melakukan instalasi bootstrap atau menggunakan CDN.
```javascript
// Install bootstrap dengan npm
npm install bootstrap@5.2.2

// Install bootstrap dengan yarn
yarn add bootstrap@5.2.2

// Via CDN disematkan pada file index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
```
Contoh menggunakan bootstrap. Tidak lupa untuk atribut class menggunakan className.
```javascript
import React from 'react'
import MemberInfo from './component/MemberInfo/MemberInfo';
import './component/MemberInfo/MemberInfo.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
```

## State & Props
State & props adalah hal yang berhubungan dengan Stateless & Stateful Component. Stateless berarti tidak memiliki state, dia hanya memiliki props. Stateful berarti memiliki state dan bisa mengirim state tersebut ke component.
```javascript
// Di dalam file MemberInfo.js
function MemberInfo({name, age, track}){ {/*name, age, dan track merupakan props, mirip seperti parameter pada function*/}
    return(
        <div className="member-info">
            <div>
                <img src={"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>{age}</p>
                <p>{track}</p>
            </div>
        </div>
    )
}

export default MemberInfo;

// Di dalam file App.js
import React from 'react'
import MemberInfo from './component/MemberInfo/MemberInfo';
import './component/MemberInfo/MemberInfo.css';

function App() {
  {/*Variabel name, age, dan track merupakan state*/}
  let name = "Rizky Merdika Agusta"
  let age = 21
  let track = "Front-End Web Development"

  return (
    <>
      <MemberInfo {/*Mengirim data ke props*/}
        name={name}
        age={age}
        track={track}
      />
    </>
  );
}

export default App;
```
Jadi state adalah data lokal. Props digunakan agar component memiliki data yang dinamis yang dikirim dari component lain atau state.

## useState
useState adalah React Hook yang memungkinkan kita untuk menambahkan variabel state ke component. useState digunakan ketika kita membutuhkan data yang dinamis.
```javascript
const [state, setState] = useState(initialState)
```
Contoh penggunaan useState:
```javascript
function MemberInfo(){
    const [name, setName] = useState("Rizky")
    const [age, setAge] = useState(21)
    const [track, setTrack] = useState("Front-End")

    return(
        <div className="member-info">
            <div>
                <img src={"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"} alt="" />
            </div>
            <div>
                <p>{name}</p> {/* Rizky */}
                <p>{age}</p> {/* 21 */}
                <p>{track}</p> {/* Front-End */}
            </div>
        </div>
    )
}
```

## Handling Events
Handling events menggunakan React sangat mirip dengan menangani event pada DOM elements. React events dinamai menggunakan camelCase. Dengan JSX kita melempar function sebagai event handler.

Sebagai contoh:
```javascript
<button onclick={activateLasers}> {/*Menggunakan Curly Braces*/}
  Activate Lasers
</button>
```
Di sini kita akan coba membuat counter. Pertama-tama kita buat component counter.
```javascript
function Counter(){
    const [count, setCount] = useState(0)

    function increment(){ {/*Fungsi untuk increment*/}
        setCount(count + 1) {/*Count ditambah satu*/}
    }
    function decrement(){ {/*Fungsi untuk decrement*/}
        if(count == 0){ {/*Jika count sama dengan nol, maka nilai count tetap nol. Agar nilai count tidak mines*/}
            setCount(count)
        }else{
            setCount(count - 1)  {/*Count dikurang satu*/}
        }
    }

    return(
        <>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    )
}
```
Tidak hanya onClick masih banyak lagi event handler yang bisa digunakan seperti onMouseOver , onFocus, dan lain-lain.

Melempar argumen ke event handler.
```javascript
function MemberInfo(){
    const [name, setName] = useState('Alief')
    function changeName(fullName){
        setName(fullName)
    }

    return(
        <div className="member-info">
            <div>
                <button onClick={() => changeName('Rizky Merdika')}>Change Name</button>
                <p>{name}</p>
            </div>
        </div>
    )
}
```

## Conditional Rendering
Di React, kita dapat membuat komponen berbeda yang merangkum perilaku yang kita butuhkan. Kemudian, kita hanya dapat merender beberapa component di antaranya, bergantung pada status aplikasi Anda. Conditional Rendering di React bekerja dengan cara yang sama seperti conditional di JavaScript. Di react, kita dapat merender JSX secara kondisional menggunakan syntax javascript seperti if, &&, dan ternary operator.

Contoh:
```javascript
function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      <button onClick={() => setIsLogin(true)}>Login</button> {/*isLogin diset bernilai true*/}
      
      {isLogin ? <Counter/> : <span>Login dulu cuy</span>}
      {/*Initial value dari isLogin false, sehingga component Counter tidak ditampilkan melainkan yang ditampilkan adalah span. Jika isLogin bernilai true, maka component Counter ditampilkan.*/}
    </>
  );
}
```

## Hooks
Hooks adalah fitur baru yang dikenalkan react js pada tahun 2018. Inti dari hooks adalah untuk memudahkan penggunaan functional components agar bisa menggunakan state dan lifecycle lainnya. Sebelumnya state dan lifecycle hanya bisa digunakan di class component, namun dengan hooks kita bisa menggunakannya juga di functional component. Dengan menggunakan functional component dan menggunakan hooks, maka code akan terlihat lebih clean, pendek, dan mudah dimengerti.

## useEffect
useEffect merupakan hooks yang bisa digunakan untuk menggunakan lifecycle pada functional component dengan mudah. lifeCycle yang ada di dalam hooks, hanya menggunakan useEffect yang menyatukan componentDidMount, componentDidUpdate, dan componentWillUnmount.

lifeCycle structure:
![lifeCycle Structure](https://miro.medium.com/max/1400/1*IrFfI3bAU6Gz8Pfv1CHulg.png)

Penggunaan useEffect bisa dimasukan sebelum melakukan render, useEffect sendiri biasanya ditempatkan dibawah useState.

Cara penggunaan useEffect:
```javascript
import React, { useEffect } from 'react'
import { useState } from "react"

function App() {
  const [nama, setNama] = useState(true)
  const [changed, setChanged] = useState(0)

  useEffect(() => {
    console.log("Ada perubahan");
    setChanged(changed + 1)
  }, [nama])

  return (
    <>
      <h1>Perubahan : {changed}</h1>
      <button onClick={() => setNama(!nama)}>Ubah</button>
    </>
  );
}
```
useEffect biasanya akan digunakan saat kamu membuat suatu call api, karen api akan selalu dipanggil saat komponen terbentuk, maka call api bisa dilakukan di dalam useEffect. Kita akan coba melakukan call api menggunakan axios. Sebelum itu kita install terlebih dahulu axios nya.
```
npm install axios
```
```javascript
import React, { useEffect } from 'react'
import { useState } from "react"
import axios from "axios"

function App() {
  const [digimons, setDigimons] = useState([])

  useEffect(() => {
    axios("https://digimon-api.vercel.app/api/digimon").then((res) => {
      setDigimons(res.data)
    })
  }, [])

  return (
    <>
      {
        digimons.map((item, index) => (
          <div key={index}>
            <img src={item.img} />
            <h2>{item.name}</h2>
          </div>
        ))
      }
    </>
  );
}
```

## Form
Elemen form bekerja sedikit berbeda dari elemen DOM lainnya di react, karena elemen form secara alami menyimpan beberapa internal state. Dalam HTML, elemen form seperti input, textarea, dan select biasanya mempertahankan statenya sendiri dan memperbaruinya berdasarkan input pengguna. Di React, state yang dapat diubah biasanya disimpan di properti state komponen, dan hanya diperbarui dengan setState(). Selain itu form pada react harus menggunakan event handler onChange yang fungsinya untuk menangkap data inputan dari user.
```javascript
import { useState } from "react"

function App() {
  const [name, setName] = useState("") {/* Menampung value name */}
  const [address, setAddress] = useState("") {/* Menampung value address */}
  const [data, setData] = useState({}) {/* Sebagai object yang nantinya menampung name dan address */}

  function handleSubmit(e){
    e.preventDefault()
    setData({name, address}) {/* Push name dan address ke data */}
    setName("") {/* Membuat input kembali kosong setelah submit */}
    setAddress("") {/* Membuat input kembali kosong setelah submit */}
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> {/* e.target.value untuk mengambil value dari inputan user */}
        <label htmlFor="">Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
```