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

## React Router
React router adalah library routing paling populer di react. Untuk menggunakan react router di react kita harus menginstall terlebih dahulu react routernya.
```
npm install react-router-dom
```

### Configuring The Router
Langkah termudah untuk menyetting router yaitu kita perlu mengimport router khusus yaitu BrowserRouter dan membungkusnya ke seluruh app di router tersebut. Umumnya kita hanya perlu mengimport BrowserRouter di file index.js dan bungkus komponen App dengan router.
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```
Langkah selanjutnya adalah menentukan route. Mendefinisikan route semudah mendefinisikan satu komponen route untuk setiap route dalam aplikasi anda dan kemudian menempatkan semua komponen route tersebut dalam satu komponen route. Setiap kali URL anda berubah, react router akan melihat route yang ditentukan dalam komponen routes dan itu akan merender konten di element prop dari route yang memiliki jalur yang cocok dengan URL.
```javascript
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </>
  )
}
```

### Handling Navigation
Biasanya dalam sebuah aplikasi Anda akan menavigasi dengan tag anchor, tetapi React Router menggunakan komponen Link untuk menangani navigasi.
```javascript
<nav>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
</nav>
```

### Dynamic Routing
Fitur canggih yang paling sederhana dan paling umum di React Router adalah menangani route dinamis. Route terakhir pada contoh di bawah adalah route dinamis yang memiliki parameter dinamis :id.
```javascript
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/detail/:id' element={<DetailPage/>}/>
</Routes>
```
Ketika Anda memiliki route dinamis seperti ini, Anda ingin mengakses nilai dinamis dalam komponen Anda yang merupakan tempat useParams masuk. useParams tidak mengambil parameter dan akan mengembalikan objek dengan key yang cocok dengan parameter dinamis di route Anda. Dalam kasus ini, parameter dinamis kami adalah :id sehingga hook useParams akan mengembalikan objek yang memiliki key id dan nilai key itu akan menjadi id aktual di URL kami.
```javascript
import {useParams} from 'react-router-dom'

import {useParams} from 'react-router-dom'

function DetailPage() {
  const { id } = useParams()
  const detailInfo = [
    {
      id: 1,
      nama: "Rizky",
      alamat: "Bandung",
      hobi: "Main Game"
    },
    {
      id: 2,
      nama: "Alief",
      alamat: "Bandung",
      hobi: "Ngewibu"
    },
    {
      id: 3,
      nama: "Amanda",
      alamat: "Purwakarta",
      hobi: "Musik"
    }
  ]
  return (
    <>
        {
          detailInfo.filter((el) => el.id === +id).map((el, index) => {
            return(
              <div key={index}>
                <h2>Nama: {el.nama}</h2>
                <h2>Alamat: {el.alamat}</h2>
                <h2>Hobi: {el.hobi}</h2>
              </div>
            )
          })
        }
    </>
  )
}

export default DetailPage
```

### Nested Routes
Nested route cukup sederhana untuk dilakukan. Yang perlu anda lakukan adalah membuat route parent yang memiliki path yang disetel ke path bersama untuk semua komponen child anda. Kemudian di dalam route parent anda dapat meletakkan semua komponen route child.
```javascript
<Route path='/about' element={<AboutPage/>}>
    <Route path='student' element={<AboutStudent/>}/>
    <Route path='teacher' element={<AboutTeacher/>}/>
    <Route index element={<AboutSchool/>}/>
</Route>
```
Bisa dilihat pada route child tidak lagi menyertakan path /about. Dan juga route untuk /about diganti dengan komponen route yang tidak memiliki path, tetapi memiliki index. Artinya path dari index route itu sama dengan parent route.

Kemudian kita harus menambahkan komponen Outlet pada element parent route. Komponen Outlet pada dasarnya adalah komponen placeholder yang akan merender apa pun konten halaman kita saat ini.
```javascript
import {Outlet, Link} from 'react-router-dom'

function AboutPage() {
  return (
    <>
        <Link to={"student"}>About Student</Link>
        <Link to={"teacher"}>About Teacher</Link>
        <Outlet/>
    </>
  )
}

export default AboutPage
```

### useNavigation Hook
useNavigation adalah hook yang sangat sederhana yang tidak menggunakan parameter dan mengembalikan fungsi navigasi tunggal yang dapat Anda gunakan untuk mengarahkan pengguna ke halaman tertentu.
```javascript
import {useNavigate} from 'react-router-dom'

function HomePage() {
  const navigation = useNavigate()
  const data = [
    {
      id: 1,
      nama: "Rizky"
    },
    {
      id: 2,
      nama: "Alief"
    },
    {
      id: 3,
      nama: "Amanda"
    }
  ]

  const handleDetail = (id) => {
    navigation(`/detail/${id}`)
  }

  return (
    <>
        <h1>Ini Home Page</h1>
        {
          data.map((el, index) => {
            return(
              <div key={index}>
                <h2>Nama: {el.nama}</h2>
                <button onClick={() => handleDetail(el.id)}>Detail</button>
              </div>
            )
          })
        }
    </>
  )
}

export default HomePage
```

## React Redux
Redux adalah state container yang dapat diprediksi untuk javascript apps dan tools yang sangat berharga untuk mengatur application state. Ini adalah library populer untuk mengatur state di react. Dalam pengantar singkat untuk Redux ini, kita akan membahas konsep utama: reducers, actions, action creators, dan store.

### Reducer
Reducer adalah fungsi yang mengambil state sebelumnya dan sebuah action sebagai argument dan mengembalikan state baru. Actions adalah sebuah objek dengan type dan payload (optional).
```javascript
const initialState = {
    count: 0
}

function counterReducer(state = initialState, action){
    switch (action.type) {     
        default: return state
    }
}

export default counterReducer
```
Reducer menentukan bagaimana state aplikasi berubah sebagai respons terhadap tindakan yang dikirim ke store.

### Action
Action adalah objek javascript yang mewakili muatan informasi yang mengirimkan data dari aplikasi ke store. Action memiliki type dan payload opsional. Action sering dikirim (dispatched) menggunakan action creator. Action creator adalah sebuah fungsi yang mengembalikan object action. Action object yang dikembalikan dari action creator dikirim ke semua reducers berbeda di app.

Bergantung pada action nya, reducers dapat memilih untuk mengembalikan versi baru dari statusnya. Bagian state yang baru dikembalikan kemudian disalurkan ke state app, yang kemudian disalurkan kembali ke aplikasi react, yang kemudian menyebabkan semua komponen dirender ulang.

Berikut adalah contoh action creator:
```javascript
export function increment(){
    return {
        type: INCREMENT
    }
}
```
Dan ini adalah simpel reducer yang berhubungan dengan action type INCREMENT:
```javascript
function counterReducer(state = initialState, action){
    switch (action.type) {     
        case INCREMENT:
            return {
                count: state.count + 1
            }   
        case DECREMENT:
            return {
                count: state.count - 1
            }
        default: return state
    }
}
```

### Store
Store mengacu kepada objek yang menyatukan actions (yang mewakili apa yang terjadi) dan reducers (yang memperbarui state sesuai dengan tindakan tersebut). Hanya boleh ada satu store dalam aplikasi redux.
```javascript
import {createStore} from 'redux'
import counterReducer from '../reducer/counterReducer'

const store = createStore(counterReducer)

export default store
```
Jika kita memiliki dua reducers, maka gunakan combineReducers.
```javascript
import {createStore} from 'redux'
import counterReducer from '../reducer/counterReducer'
import todoReducer from '../reducer/todoReducer'

const allReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
})
const store = createStore(allReducer)

export default store
```

### Provider Component
Kita akan menggunakan komponen Provider dari React Redux untuk membungkus komponen App dan membuat redux store dapat diakses dari komponen manapun di bawah pohon komponen react.
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
```

### useSelector
Untuk mengakses item di redux store, gunakan hook yang disebut useSelector. useSelector mengambil fungsi selector sebagai argumen. Fungsi selector akan menerima state dari store sebagai argument yang akan digunakan untuk mengembalikan bidang yang diinginkan. Karena useSelector adalah Hook khusus, komponen akan dirender ulang setiap kali Hook dipanggil.
```javascript
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/action/counterAction"


function Counter() {
    const {count} = useSelector(state => state)

  return (
    <>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
    </>
  )
}

export default Counter
```

### useDispatch
Hook ini mengembalikan referensi ke fungsi dispatch dari redux store. Anda dapat menggunakannya untuk mengirimkan actions sesuai kebutuhan.
```javascript
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/action/counterAction"


function Counter() {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)

  return (
    <>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
    </>
  )
}

export default Counter
```

## Redux Thunk
Secara default, redux action dikirim secara synchronous, yang merupakan masalah bagi non-trivial app yang perlu berkomunikasi dengan API eksternal atau melakukan side effect. Redux juga memungkinkan middleware yang berada di antara action yang dikirim dan action yang mencapai reducers. Salah satu middleware library yang sangat populer yang memungkinkan side effects dan asynchronous action adalah redux thunk.

Thunk adalah konsep pemrograman di mana function digunakan untuk menunda atau mendelay evaluasi atau kalkulasi dari operasi.

Redux Thunk adalah middleware yang memungkinkan kita memanggil action creators yang mengembalikan function alih-alih sebuah action object. Fucntion tersebut menerima metode dispatch store, yang kemudian digunakan untuk dispatch action synchronous reguler di dalam function's body setelah operasi asynchronous selesai.

Pertama, gunakan terminal untuk menavigasi ke direktori proyek dan menginstal paket redux-thunk di proyek Anda:
```
npm install redux-thunk
```
Sekarang terapkan middleware saat membuat store app Anda menggunakan applyMiddleware dari Redux. Diberikan aplikasi React dengan redux dan react-redux, file index.js Anda mungkin terlihat seperti ini:
```javascript
import {combineReducers, createStore, applyMiddleware} from 'redux'
import todoReducer from '../reducer/todoReducer'
import thunk from 'redux-thunk'

const allReducer = combineReducers({
    todo: todoReducer
})
const store = createStore(allReducer, applyMiddleware(thunk))

export default store
```
Kasus penggunaan yang paling umum untuk Redux Thunk adalah untuk berkomunikasi secara asinkron dengan API eksternal untuk mengambil atau menyimpan data. Redux Thunk memudahkan pengiriman action yang mengikuti lifecycle dari permintaan ke API eksternal.
```javascript
// File action
import axios from 'axios'

export const GET_TODO = "GET_TODO"
export const FETCH_START = "FETCH_START"
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO"

function fetchStart (){
    return {
        type: FETCH_START
    }
}

function successGetTodo (data){
    return{
        type: SUCCESS_GET_TODO,
        payload: data
    }
}

export const getTodo = () => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.get("https://63478a450484786c6e82998f.mockapi.io/todo")
        dispatch(successGetTodo(result.data))
    }
}
```
Untuk kelengkapan, berikut adalah contoh tampilan todo reducer untuk menangani lifecycle of the request:
```javascript
// File reducer
import { FETCH_START, SUCCESS_GET_TODO } from "../action/todoAction"

const initialState = {
    todos: [],
    isLoading: false,
    err: null
}

function todoReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_START:
            return{
                ...state,
                isLoading: true
            }
        case SUCCESS_GET_TODO:
            return{
                ...state,
                todos: action.payload,
                isLoading: false
            }
        default: 
            return state
    }
}

export default todoReducer
```