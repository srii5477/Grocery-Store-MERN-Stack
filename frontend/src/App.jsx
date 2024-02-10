import React from 'react'
import {Routes, Route} from 'react-router-dom';
import CreateGrocery from './pages/CreateGrocery';
import DeleteGrocery from './pages/DeleteGrocery';
import EditGrocery from './pages/EditGrocery';
import Home from './pages/Home';
import ShowGrocery from './pages/ShowGrocery';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/grocery' element={<CreateGrocery />}></Route>
      <Route path='/allgroceries' element={<ShowGrocery/ >}></Route>
      <Route path='/grocery/delete/:id' element={<DeleteGrocery />}></Route>
      <Route path='/grocery/edit/:id' element={<EditGrocery />}></Route>
    </Routes>
  )
}

export default App