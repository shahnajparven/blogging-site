import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Suspense } from 'react'
function App() {


  return (
    <>
     <Suspense fallback={<Home />}>
    <Routes>
      <Route path='/' element={<Home/>}/>
       </Routes>
       </Suspense>
    </>
  )
}

export default App
