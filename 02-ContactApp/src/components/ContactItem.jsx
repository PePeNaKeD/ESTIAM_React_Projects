function ContactItem({ contact, onDelete, onEdit }) {
  return (
    <div className="contact-card">
      <div>
        <strong>{contact.firstName} {contact.lastName.toUpperCase()}</strong>
        <p>📧 {contact.email} | 📞 {contact.phone}</p>
      </div>
      <div className="actions">
        <button onClick={() => onEdit(contact)} className="edit-btn">Modifier</button>
        <button onClick={() => onDelete(contact.id)} className="delete-btn">Supprimer</button>
      </div>
    </div>
  );
}

export default ContactItem;