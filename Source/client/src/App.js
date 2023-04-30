import { Route, Routes } from 'react-router-dom'

import { Home, Login, Register, Public } from './page/public'


function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/*' element={<Public />} >
          <Route path='home' element={<Home />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
