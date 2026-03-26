import PageBanner from '../components/PageBanner'
import bannerImage from '../assets/about-meeting.jpg'

export default function ContactPage() {
  return (
    <>
      <PageBanner image={bannerImage} title="Contact Us" text="We welcome educators, researchers, community partners, and supporters to engage in dialogue with us to advance deeper natural health models." />
      <section className="shell page-section">
        <div className="three-col-grid">
          <article className="info-card"><h2>University / Research Collaboration</h2><p>Connect with us about university partnerships, research-informed exploration, and collaborative learning opportunities.</p></article>
          <article className="info-card"><h2>Community Partnership</h2><p>We welcome mission-aligned community partners interested in public-facing wellness education and support.</p></article>
          <article className="info-card"><h2>Education Inquiry</h2><p>Reach out with questions related to wellness education, public learning, and nonprofit initiatives.</p></article>
          <article className="info-card"><h2>Volunteer Interest</h2><p>We welcome people who want to contribute to Liuli Society’s mission through time, care, and service.</p></article>
          <article className="info-card"><h2>General Mission-Aligned Partnership</h2><p>Use this page to begin a conversation about research, education, community, or support.</p></article>
        </div>
      </section>
    </>
  )
}
