import logo from '../assets/logo.png'

const navLeft = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Our Approach', 'approach'],
  ['Wellness Pathways', 'pathways'],
  ['Research at UNH BIC', 'research'],
]

const navRight = [
  ['Community', 'community'],
  ['Projects', 'projects'],
  ['Support Us', 'support'],
  ['Contact Us', 'contact'],
]

function NavLink({ label, route, currentRoute }) {
  return (
    <a href={`#/${route}`} className={currentRoute === route ? 'nav-link active' : 'nav-link'}>
      {label}
    </a>
  )
}

export default function SiteHeader({ currentRoute }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="nav nav-left">
          {navLeft.map(([label, route]) => (
            <NavLink key={route} label={label} route={route} currentRoute={currentRoute} />
          ))}
        </nav>

        <a href="#/home" className="brand">
          <img src={logo} alt="Liuli Society logo" className="brand-logo" />
          <div className="brand-text-wrap">
            <div className="brand-title">Liuli Society</div>
            <div className="brand-subtitle">OF AMERICA</div>
          </div>
        </a>

        <nav className="nav nav-right">
          {navRight.map(([label, route]) => (
            <NavLink key={route} label={label} route={route} currentRoute={currentRoute} />
          ))}
        </nav>
      </div>
    </header>
  )
}
