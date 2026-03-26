import PageBanner from '../components/PageBanner'
import bannerImage from '../assets/about-meeting.jpg'

export default function AboutPage() {
  return (
    <>
      <PageBanner image={bannerImage} title="About" text="Explain who Liuli Society is, why it exists, and why it is structured as a nonprofit." />
      <section className="shell page-section">
        <div className="three-col-grid">
          <article className="info-card"><h2>Who We Are</h2><p>Liuli Society is a U.S. nonprofit organization recognized as tax-exempt under Section 501(c)(3) of the Internal Revenue Code. We are committed to advancing wellness education, research-informed innovation, and community-based initiatives that support healthier everyday living.</p></article>
          <article className="info-card"><h2>Our Mission</h2><p>We are committed to advancing natural wellness through education, research-informed design, and community-based support. Our mission is to make healthy living more understandable, more accessible, and more humane for individuals, families, and communities.</p></article>
          <article className="info-card"><h2>Our Vision</h2><p>Liuli Society is building a research-informed, education-centered, and community-oriented natural wellness platform.</p></article>
          <article className="info-card"><h2>Organization Status</h2><p>Liuli Society is structured as a nonprofit organization so that mission, education, research, and public value remain central to its work.</p></article>
          <article className="info-card"><h2>Why This Model</h2><p>The nonprofit model supports trust, credibility, and long-term growth while serving universities, donors, and communities.</p></article>
          <article className="info-card"><h2>Our Values</h2><p>We value education, clarity, responsible exploration, thoughtful design, compassion, and community-centered support.</p></article>
        </div>
      </section>
    </>
  )
}
