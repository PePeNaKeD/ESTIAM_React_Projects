import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import ArticleCard from '../components/ArticleCard'

export default function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    api.getArticles().then(setArticles).catch(console.error)
  }, [])

  return (
    <div className="container">
      <h1>Tous les articles</h1>
      <div className="articles-grid">
        {articles.map(a => <ArticleCard key={a._id} article={a} />)}
      </div>
    </div>
  )
}