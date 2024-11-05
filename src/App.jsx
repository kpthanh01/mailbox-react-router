import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'

const initialData = [
  {
    _id: 1,
    boxHolder: 'Kevin',
    boxSize: 'Large'
  },
  {
    _id: 2,
    boxHolder: 'Abby',
    boxSize: 'Small'
  }
]

function App() {
  const [mails, setMails] = useState(initialData)

  const addMails = (newMail) => {
    newMail._id = mails.length + 1
    setMails([...mails, newMail])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/new-mailbox' element={<MailboxForm addMails={addMails} />} />
        <Route path='/mailboxes' element={<MailboxList mails={mails} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mails={mails} />} />
        <Route path='*' element={<h1>Error</h1>} />

      </Routes>
    </>
  )
}

export default App
