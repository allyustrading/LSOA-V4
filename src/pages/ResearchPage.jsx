import PageBanner from '../components/PageBanner'
import bannerImage from '../assets/research-lab.jpg'

export default function ResearchPage() {
  return (
    <>
      <PageBanner image={bannerImage} title="Research at UNH BIC" text="Show seriousness, innovation, and nonprofit legitimacy." />
      <section className="shell page-section">
        <div className="three-col-grid">
          <article className="info-card"><h2>Why UNH BIC</h2><p>The innovation environment of UNH BIC provides a strong context for research-informed wellness education, exploratory development, and nonprofit legitimacy.</p></article>
          <article className="info-card"><h2>Research-Informed Wellness Innovation</h2><p>Liuli Society is building a nonprofit platform that connects education, innovation, and community value through a calm, credible, and research-informed approach.</p></article>
          <article className="info-card"><h2>Exploratory Development Areas</h2><p>Areas of interest include exploratory formulation design, wellness learning resources, education-centered tools, and responsible refinement.</p></article>
          <article className="info-card"><h2>Community Pilot Possibilities</h2><p>Liuli Society sees potential in community-centered pilot initiatives that connect research, education, and public-facing support.</p></article>
          <article className="info-card"><h2>Future Collaboration Opportunities</h2><p>We welcome thoughtful collaboration with educators, universities, researchers, and mission-aligned partners.</p></article>
        </div>
      </section>
    </>
  )
}
