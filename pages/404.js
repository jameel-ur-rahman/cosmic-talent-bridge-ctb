export default function Custom404() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Page not found</h1>
        <p style={{ marginTop: '0.6rem' }}>The page you requested does not exist.</p>
      </div>
    </main>
  )
}
