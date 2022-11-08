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