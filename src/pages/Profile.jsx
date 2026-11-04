function Profile() {
  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="profile-title">
        <p className="auth-eyebrow">Mi cuenta</p>
        <h1 id="profile-title">Perfil de usuario</h1>
        <p>Correo electrónico: <strong>usuario@ejemplo.cl</strong></p>
        <button type="button" className="button-dark">Cerrar sesión</button>
        <p className="auth-note">Perfil de demostración: el correo y el botón de cierre de sesión son estáticos en este hito.</p>
      </section>
    </main>
  )
}

export default Profile
