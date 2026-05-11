import { useState, useEffect } from 'react';

function ContactForm({ onSave, editingContact, cancelEdit }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingContact) setForm(editingContact);
    else setForm({ firstName: '', lastName: '', email: '', phone: '' });
  }, [editingContact]);

  const validate = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.phone) return "Tous les champs sont requis";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Email invalide";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validate();
    if (errorMsg) return setError(errorMsg);

    onSave(form);
    setError('');
    setForm({ firstName: '', lastName: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>{editingContact ? 'Modifier le contact' : 'Ajouter un contact'}</h3>
      {error && <p className="error">{error}</p>}
      <input type="text" placeholder="Prénom" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
      <input type="text" placeholder="Nom" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
      <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      <input type="text" placeholder="Téléphone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
      <button type="submit">{editingContact ? 'Mettre à jour' : 'Ajouter'}</button>
      {editingContact && <button type="button" onClick={cancelEdit}>Annuler</button>}
    </form>
  );
}

export default ContactForm;