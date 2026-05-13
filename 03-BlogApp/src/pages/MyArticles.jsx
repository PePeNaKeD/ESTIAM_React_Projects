import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthContext'
import ArticleCard from '../components/ArticleCard'

export default function MyArticles() {
  const { user } = useAuth()
  const [articles, setArticles] = useState([])

  useEffect(() => {
    api.getArticles()
      .then(data => setArticles(data.filter(a => a.authorId === user?._id)))
      .catch(console.error)
  }, [])

  return (
    <div className="container">
      <h1>Mes articles</h1>
      {articles.length === 0 ? (
        <p>Vous n'avez pas encore d'articles.</p>
      ) : (
        <div className="articles-grid">
          {articles.map(a => <ArticleCard key={a._id} article={a} />)}
        </div>
      )}
    </div>
  )
}