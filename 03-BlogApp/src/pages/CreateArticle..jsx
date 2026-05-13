import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import ArticleForm from '../components/ArticleForm'

export default function CreateArticle() {
  const navigate = useNavigate()

  async function handleSubmit(data) {
    await api.createArticle(data)
    navigate('/')
  }

  return (
    <div className="container">
      <h1>Créer un article</h1>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  )
}