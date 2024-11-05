import { Link } from "react-router-dom"

const MailboxList = (props) => {
  const { mails } = props
  return (
    <div>
      <h1>Mailbox List</h1>
      <ul>
        {mails.map((item) => (
          <li key={item.boxHolder}>
            <Link to={`/mailboxes/${item._id}`}>Mailbox {item._id}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MailboxList