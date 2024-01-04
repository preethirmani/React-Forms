import { useState } from 'react'
import SignupForm from './components/SignupForm'
import Authenticate from './components/Authenticate'
import './App.css'

function App() {

    const [token, setToken] = useState(null);
  return (
    <>
      <SignupForm />
      <Authenticate />

    </>
  )
}

export default App
