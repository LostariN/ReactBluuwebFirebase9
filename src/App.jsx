
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import NotFound from './routes/NotFound'
import Navbar from './components/Navbar'
import RequireAuth from './components/RequireAuth'
import Register from './routes/Register'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import LayoutPrimary from './components/LayoutPrimary'


const App = () => {
  const { user } = useContext(UserContext)

  if (user === false) {
    return <p> Loading...</p>
  }

  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path="/" element={<LayoutPrimary />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
