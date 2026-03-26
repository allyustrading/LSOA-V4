import PageBanner from '../components/PageBanner'
import bannerImage from '../assets/community-group.jpg'

export default function CommunityPage() {
  return (
    <>
      <PageBanner image={bannerImage} title="Community" text="Liuli Society exists not only to explore wellness ideas, but to make them more accessible and supportive for real communities." />
      <section className="shell page-section">
        <div className="three-col-grid">
          <article className="info-card"><h2>Community Education</h2><p>We aim to make wellness ideas more understandable and accessible through educational activities and public-facing learning.</p></article>
          <article className="info-card"><h2>Small-Group Experiences</h2><p>Small-group experiences create more human-centered settings for reflection, learning, and community support.</p></article>
          <article className="info-card"><h2>Wellness Learning Circles</h2><p>Learning circles help connect knowledge, dialogue, and daily practice in ways that feel more approachable and more supportive.</p></article>
          <article className="info-card"><h2>Volunteer Opportunities</h2><p>We welcome people who want to support mission-aligned education, community work, and nonprofit development.</p></article>
          <article className="info-card"><h2>Long-Term Community Support Vision</h2><p>Our long-term vision is to create healthier and more supportive experiences for the communities we serve.</p></article>
        </div>
      </section>
    </>
  )
}
