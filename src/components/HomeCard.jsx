export default function HomeCard({ image, title, text, buttonLabel, buttonClass = 'btn-gold', link, overlay = true }) {
  return (
    <article className="home-card">
      <img src={image} alt={title} className={overlay ? 'home-card-image tall' : 'home-card-image short'} />
      {overlay ? (
        <div className="home-card-overlay">
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link} className={`btn ${buttonClass}`}>{buttonLabel}</a>
        </div>
      ) : (
        <div className="home-card-content">
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link} className={`btn ${buttonClass}`}>{buttonLabel}</a>
        </div>
      )}
    </article>
  )
}
