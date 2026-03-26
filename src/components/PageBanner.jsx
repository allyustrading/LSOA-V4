export default function PageBanner({ image, title, text }) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-banner-overlay">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
