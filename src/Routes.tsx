import {Routes, Route} from 'react-router-dom'
import { Register } from './pages/Register'
import { Signin } from './pages/SignIn'

export function AppRoutes() {
   return (
      <Routes>
         <Route path='/' element={<Signin />} />
         <Route path='/register' element={<Register />} />
      </Routes>
   )
}