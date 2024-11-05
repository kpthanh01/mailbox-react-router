import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
  boxHolder: '',
  boxSize: ''
}

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addMails(formData)
    setFormData(initialState)
    navigate('/mailboxes')
  }
  return (
    <div>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Box Holder:</label>
        <input type="text" name="boxHolder" id="boxHolder" onChange={handleChange} />
        <label htmlFor="boxSize">Box Size</label>
        <select name="boxSize" id="boxSize" onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default MailboxForm