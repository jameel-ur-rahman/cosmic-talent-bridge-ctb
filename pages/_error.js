export default function ErrorPage({ statusCode }) {
  const code = statusCode || 500

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
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Something went wrong</h1>
        <p style={{ marginTop: '0.6rem' }}>Error code: {code}</p>
      </div>
    </main>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}