import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>404</h1>
      <p>Cette page n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  )
}