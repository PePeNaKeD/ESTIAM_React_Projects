import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const API_URL = 'http://localhost:5000/contacts'; // URL typique d'un backend Node

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Charger les contacts (READ)
  const fetchContacts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setContacts(data);
    } catch (err) {
      console.error("Erreur backend : Assurez-vous que Node est lancé", err);
    }
  };

  useEffect(() => { fetchContacts(); }, []);

  // 2. Ajouter ou Modifier (CREATE / UPDATE)
  const saveContact = async (contactData) => {
    const method = editingContact ? 'PUT' : 'POST';
    const url = editingContact ? `${API_URL}/${editingContact.id}` : API_URL;

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });
      setEditingContact(null);
      fetchContacts();
    } catch (err) { console.error(err); }
  };

  // 3. Supprimer (DELETE)
  const deleteContact = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchContacts();
    } catch (err) { console.error(err); }
  };

  return (
    <div className="container">
      <h1>Gestionnaire de Contacts</h1>
      
      <input 
        type="text" 
        placeholder="Rechercher un contact..." 
        className="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ContactForm 
        onSave={saveContact} 
        editingContact={editingContact} 
        cancelEdit={() => setEditingContact(null)} 
      />

      <ContactList 
        contacts={contacts} 
        onDelete={deleteContact} 
        onEdit={setEditingContact} 
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;