import PageBanner from '../components/PageBanner'
import bannerImage from '../assets/forest-path.jpg'

export default function ApproachPage() {
  return (
    <>
      <PageBanner image={bannerImage} title="Our Approach" text="Present Liuli’s foundational logic clearly and professionally." />
      <section className="shell page-section">
        <div className="three-col-grid">
          <article className="info-card"><h2>Why Knowledge Comes First</h2><p>Our approach begins not with selling, but with understanding.</p></article>
          <article className="info-card"><h2>From Understanding to Design</h2><p>We translate insight into design by beginning with real-life wellness needs and a deeper understanding of health support.</p></article>
          <article className="info-card"><h2>From Design to Daily Support</h2><p>Design becomes meaningful when it helps guide daily routines, practical learning, and more supportive living.</p></article>
          <article className="info-card"><h2>The Role of Companion Support</h2><p>We believe trust grows through follow-up, listening, education, and long-term support.</p></article>
          <article className="info-card"><h2>Long-Term Trust Model</h2><p>Liuli Society values a long-term trust model in which education, relationship, and thoughtful follow-through matter more than one-time interaction.</p></article>
        </div>
      </section>
    </>
  )
}
