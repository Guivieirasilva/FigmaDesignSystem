import './styles/global.css'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'

export function App() {

  return (
    <div className='w-screen h-screen text-gray-100 bg-gray-900 flex flex-col items-center justify-center'>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </div>
  )
}
