import { useState } from 'react'

function AuthPage({ onLogin, onRegister, error }) {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (mode === 'login') {
      await onLogin({ email, password })
    } else {
      await onRegister({ name, email, password })
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-panel">
        <h1>{mode === 'login' ? 'Sign in' : 'Create account'}</h1>
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <label>
              Name
              <input value={name} onChange={(event) => setName(event.target.value)} />
            </label>
          )}
          <label>
            Email
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button className="primary-button" type="submit">
            {mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
        <button className="ghost-button" type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'Create a new account' : 'Back to login'}
        </button>
      </section>
    </main>
  )
}

export default AuthPage
