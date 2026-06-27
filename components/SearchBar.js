export default function SearchBar({ className = '', label = 'Search', placeholder = 'Find jobs, find talent...' }) {
  return (
    <form
      className={`searchBar ${className}`.trim()}
      role="search"
      aria-label={label}
      onSubmit={(event) => event.preventDefault()}
    >
      <input type="search" placeholder={placeholder} aria-label={placeholder} />
      <button type="submit" aria-label="Run search">
        Search
      </button>
    </form>
  )
}
