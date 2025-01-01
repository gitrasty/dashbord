import React from 'react'
import Sidenav from './Sidenav/Sidenav'
import { Routes , Route , BrowserRouter } from 'react-router-dom'
 import About from './Pages/About'
import Home from './Pages/Home'
import Settings from './Pages/Settings'
import Products from './Pages/Products/Products'
 
const App = () => {
  return (
    <div>
<BrowserRouter>

<Routes>

<Route path='/' exact element={<Home/>}></Route>
<Route path='/about' exact element={<About/>}></Route>
<Route path='/settings' exact element={<Settings/>}></Route>
<Route path='/Products' exact element={<Products/>}></Route>

</Routes>
</BrowserRouter>
    </div>
  )
}

export default App