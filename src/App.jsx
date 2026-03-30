import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner'
import Nav from './components/Nav'
import Rating from './components/Rating'
import Products from './components/Products'


const cardPromise=fetch('data.json').then(res=>res.json());

function App() {
  
  return (
    <>
      <div className='border-b-2 border-gray-300'>
      <Nav></Nav>
      </div>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense fallback={<span className="loading loading-spinner text-primary "></span>}>
        <Products  cardPromise={ cardPromise}></Products>
      </Suspense>

    </>
  )
}

export default App
