import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const mail = props.mails.find((item) => item._id === Number(mailboxId))
  return mail ? (
    <div>
      <h1>Mailbox {mail._id}</h1>
      <h4>Details</h4>
      <p>Boxholder: {mail.boxHolder}</p>
      <p>Box Size: {mail.boxSize}</p>
    </div>
  ) : (<h1>Mailbox Not Found!</h1>)
} 

export default MailboxDetails