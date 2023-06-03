import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import Register from './pages/Register/Register'
import Habits from './pages/Habits/Habits'
import Today from './pages/Today/Today'
import Historic from './pages/Historic/Historic'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DatasContext from './pages/components/DatasContext'

function App() {

  const [dataUser, setDataUser] = useState({});

  return (
    <DatasContext.Provider value={{dataUser, setDataUser}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/habitos' element={<Habits />} />
          <Route path='/hoje' element={<Today />} />
          <Route path='/historico' element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </DatasContext.Provider>
  )
}

export default App
