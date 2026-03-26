import PageBanner from '../components/PageBanner'
import bannerImage from '../assets/research-plant.jpg'

export default function SupportPage() {
  return (
    <>
      <PageBanner image={bannerImage} title="Support Us" text="Even if donations are not the current priority, this page builds nonprofit credibility and prepares for future growth." />
      <section className="shell page-section">
        <div className="three-col-grid">
          <article className="info-card"><h2>Why Support Liuli Society</h2><p>Support helps Liuli Society expand community wellness impact through education, research-informed innovation, and nonprofit mission growth.</p></article>
          <article className="info-card"><h2>Partnership Opportunities</h2><p>We welcome mission-aligned partnerships with educators, researchers, communities, and supporters.</p></article>
          <article className="info-card"><h2>Educational Collaboration</h2><p>Educational collaboration is a meaningful way to strengthen research-informed learning and community-facing initiatives.</p></article>
          <article className="info-card"><h2>Future Donations</h2><p>Liuli Society is building a structure that can support future giving and long-term nonprofit development.</p></article>
          <article className="info-card"><h2>Tax-Deductible Giving Statement</h2><p>Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.</p></article>
        </div>
      </section>
    </>
  )
}
