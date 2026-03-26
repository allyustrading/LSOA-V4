import logo from '../assets/logo.png'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <a href="#/home" className="brand footer-brand">
            <img src={logo} alt="Liuli Society logo" className="brand-logo footer-logo" />
            <div className="brand-text-wrap">
              <div className="brand-title footer-title">Liuli Society</div>
              <div className="brand-subtitle footer-subtitle">OF AMERICA</div>
            </div>
          </a>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Main Navigation</h4>
            <a href="#/home">Home</a>
            <a href="#/about">About</a>
            <a href="#/approach">Our Approach</a>
            <a href="#/pathways">Wellness Pathways</a>
            <a href="#/research">Research at UNH BIC</a>
          </div>
          <div className="footer-col">
            <h4>Engage</h4>
            <a href="#/community">Community</a>
            <a href="#/projects">Projects</a>
            <a href="#/support">Support Us</a>
            <a href="#/contact">Contact Us</a>
          </div>
          <div className="footer-col">
            <h4>Organization Status</h4>
            <p>Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>info@liulisociety.org</p>
            <p>Harmony, NH 02834</p>
            <p>University, research, community, education, and partnership inquiries welcome.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
