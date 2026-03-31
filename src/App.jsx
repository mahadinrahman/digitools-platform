import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner'
import Nav from './components/Nav'
import Rating from './components/Rating'
import Products from './components/Products'

const cardPromise=fetch('data.json').then(res=>res.json());

function App() {
  
  const [selected,setSelected]=useState([]);
  return (
    <>
      <div className='border-b-2 border-gray-300'>
      <Nav selected={selected} setSelected={setSelected}></Nav>
      </div>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense fallback={<span className="loading loading-spinner text-primary "></span>}>
        <Products  cardPromise={ cardPromise} selected={selected} setSelected={setSelected}></Products>
      </Suspense>

    </>
  )
}

export default App
