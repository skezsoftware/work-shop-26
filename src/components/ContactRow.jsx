



export default function ContactRow({ contact, setSelectedContactId }) {
    return (
        <tr className="baseball" onClick={() => setSelectedContactId(contact.id)}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}