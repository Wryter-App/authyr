import { Routes, Route } from 'react-router-dom'

import SignUp from './pages/auth/SignUp'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
    </Routes>
  )
}

export default App