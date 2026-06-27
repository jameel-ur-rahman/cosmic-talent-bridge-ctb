export default function Footer({ site }) {
  return (
    <footer id="contact" className="siteFooter">
      <div className="container footerGrid">
        <div>
          <h3>{site.brand}</h3>
          <p>{site.legalName}</p>
          <p>{site.location}</p>
          <p>{site.size}</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <a href={`tel:${site.phone}`}>{site.phone}</a>
          </p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Training readiness</p>
          <p>Role planning</p>
          <p>Hiring workflows</p>
          {/* TODO: attach backend API here */}
        </div>
      </div>
    </footer>
  )
}
