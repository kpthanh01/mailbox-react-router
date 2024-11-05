import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/new-mailbox' element={<MailboxForm />} />
        <Route path='/mailboxes' element={<MailboxList />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
        <Route path='*' element={<h1>Error</h1>} />

      </Routes>
    </>
  )
}

export default App
