import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Suspense } from 'react'
import { Gallery } from './pages/gallery/Gallery'
function App() {


  return (
    <>
     <Suspense fallback={<Home />}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
       </Routes>
       </Suspense>
    </>
  )
}

export default App
