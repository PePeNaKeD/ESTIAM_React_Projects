import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p className="article-meta">Par {article.author} — {new Date(article.createdAt).toLocaleDateString()}</p>
      <p>{article.content?.slice(0, 150)}...</p>
      <Link to={`/article/${article._id}`}>Lire la suite</Link>
    </div>
  )
}