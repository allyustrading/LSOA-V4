import PageBanner from '../components/PageBanner'
import bannerImage from '../assets/about-meeting.jpg'

export default function ProjectsPage() {
  return (
    <>
      <PageBanner image={bannerImage} title="Projects" text="Project updates, educational articles, community events, research notes, and reflections on wellness design." />
      <section className="shell page-section">
        <div className="three-col-grid">
          <article className="info-card"><h2>Project Updates</h2><p>Share progress on nonprofit initiatives, pilot efforts, partnerships, and organizational milestones.</p></article>
          <article className="info-card"><h2>Educational Articles</h2><p>Publish educational writing that helps people better understand natural wellness, thoughtful design, and community support.</p></article>
          <article className="info-card"><h2>Community Events</h2><p>Highlight community events, workshops, and activities aligned with Liuli Society’s nonprofit mission.</p></article>
          <article className="info-card"><h2>Research Notes</h2><p>Provide non-technical research notes that communicate curiosity, responsible exploration, and thoughtful refinement.</p></article>
          <article className="info-card"><h2>Reflections on Wellness Design</h2><p>Document reflections on how wellness knowledge can be translated into more practical and humane support models.</p></article>
        </div>
      </section>
    </>
  )
}
