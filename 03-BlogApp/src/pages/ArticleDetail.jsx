import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthContext'

export default function ArticleDetail() {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    api.getArticle(id).then(setArticle).catch(console.error)
  }, [id])

  async function handleDelete() {
    if (!confirm('Supprimer cet article ?')) return
    await api.deleteArticle(id)
    navigate('/')
  }

  if (!article) return <p className="container">Chargement...</p>

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <p className="article-meta">Par {article.author} — {new Date(article.createdAt).toLocaleDateString()}</p>
      <p className="article-content">{article.content}</p>
      {user?._id === article.authorId && (
        <div className="article-actions">
          <Link to={`/edit/${article._id}`}>Modifier</Link>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      )}
    </div>
  )
}