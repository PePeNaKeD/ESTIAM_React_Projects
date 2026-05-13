import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthContext'
import ArticleForm from '../components/ArticleForm'

export default function EditArticle() {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    api.getArticle(id).then(data => {
      if (user?._id !== data.authorId) navigate('/')
      setArticle(data)
    }).catch(console.error)
  }, [id])

  async function handleSubmit(data) {
    await api.updateArticle(id, data)
    navigate(`/article/${id}`)
  }

  if (!article) return <p className="container">Chargement...</p>

  return (
    <div className="container">
      <h1>Modifier l'article</h1>
      <ArticleForm onSubmit={handleSubmit} initial={article} />
    </div>
  )
}