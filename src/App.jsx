import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home1 from './Routers1/Rcomponents/Home1';
import Nav1 from './Routers1/Rcomponents/Nav1';
import Signup1 from './Routers1/Rcomponents/Signup1';



const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home1/>}></Route>
            <Route path='/Nav' element={<Nav1></Nav1>}></Route>
            <Route path='/sign' element={<Signup1></Signup1>}></Route>

        </Routes>
    </Router>

  )
}

export default App