import { useState } from 'react'

export default function ArticleForm({ onSubmit, initial = {} }) {
  const [title, setTitle] = useState(initial.title || '')
  const [content, setContent] = useState(initial.content || '')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({ title, content })
  }

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <label>Titre</label>
      <input value={title} onChange={e => setTitle(e.target.value)} required />
      <label>Contenu</label>
      <textarea value={content} onChange={e => setContent(e.target.value)} rows={8} required />
      <button type="submit">Enregistrer</button>
    </form>
  )
}