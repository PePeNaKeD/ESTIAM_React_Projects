import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = await api.register({ email, password })
      login(data.user, data.token)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container form-page">
      <h1>Inscription</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Mot de passe</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">S'inscrire</button>
      </form>
      <p>Déjà un compte ? <Link to="/login">Se connecter</Link></p>
    </div>
  )
}