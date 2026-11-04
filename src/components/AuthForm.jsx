import { useState } from 'react'
import { Link } from 'react-router-dom'
import { validateAuth } from '../utils/validateAuth'

function AuthForm({ isRegister = false }) {
  const [values, setValues] = useState({ email: '', password: '', confirmPassword: '' })
  const [feedback, setFeedback] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    setFeedback(null)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const error = validateAuth(values, isRegister)
    if (error) {
      setFeedback({ type: 'error', message: error })
      return
    }
    setFeedback({ type: 'success', message: isRegister
      ? '¡Registro validado con éxito! Los datos cumplen los requisitos.'
      : '¡Inicio de sesión validado con éxito! Los datos cumplen los requisitos.' })
    setValues({ email: '', password: '', confirmPassword: '' })
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="auth-title">
        <p className="auth-eyebrow">Pizzería Mamma Mía</p>
        <h1 id="auth-title">{isRegister ? 'Crea tu cuenta' : 'Inicia sesión'}</h1>
        <p className="auth-description">{isRegister
          ? 'Regístrate para dar el primer paso hacia tu próxima pizza favorita.'
          : '¡Qué gusto verte de nuevo! Ingresa tus datos para continuar.'}</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="tu@correo.cl" value={values.email} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" autoComplete={isRegister ? 'new-password' : 'current-password'} aria-describedby="password-help" minLength={6} value={values.password} onChange={handleChange} required />
            <small id="password-help">Debe tener al menos 6 caracteres.</small>
          </div>
          {isRegister && (
            <div className="form-field">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
              <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" minLength={6} value={values.confirmPassword} onChange={handleChange} required />
            </div>
          )}
          {feedback && <p className={`form-message ${feedback.type}`} role={feedback.type === 'error' ? 'alert' : 'status'}>{feedback.message}</p>}
          <button className="button-dark auth-submit" type="submit">{isRegister ? 'Registrarse' : 'Ingresar'}</button>
        </form>
        <p className="auth-switch">
          {isRegister ? '¿Ya tienes una cuenta?' : '¿Todavía no tienes cuenta?'}{' '}
          <Link to={isRegister ? '/login' : '/register'}>{isRegister ? 'Inicia sesión' : 'Regístrate aquí'}</Link>
        </p>
        <p className="auth-note">Demostración del Hito 2: se validan los datos del formulario, sin crear cuentas ni conectarse a un servidor.</p>
      </section>
    </main>
  )
}

export default AuthForm
