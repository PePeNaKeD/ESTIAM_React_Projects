import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete, onEdit, searchTerm }) {
  // Filtrage par recherche + Tri par nom (Bonus)
  const filteredContacts = contacts
    .filter(c => 
      c.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.lastName.localeCompare(b.lastName));

  return (
    <div className="contact-list">
      {filteredContacts.map(contact => (
        <ContactItem 
          key={contact.id} 
          contact={contact} 
          onDelete={onDelete} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
}

export default ContactList;