import PageBanner from '../components/PageBanner'
import bannerImage from '../assets/hero-lake.jpg'

export default function PathwaysPage() {
  return (
    <>
      <PageBanner image={bannerImage} title="Wellness Pathways" text="The Liuli wellness framework is organized into nine pathways. These pathways reflect everyday life scenarios, natural care experiences, and areas for education, exploration, and future innovation." />
      <section className="shell page-section">
        <div className="three-col-grid">
          <article className="info-card"><h2>Comfort & Circulation Support</h2><p>Supporting everyday physical comfort, movement, and a sense of ease through gentle wellness approaches.</p></article>
          <article className="info-card"><h2>Daily Natural Skin Wellness</h2><p>Exploring natural practices that support healthy, balanced, and cared-for skin in daily life.</p></article>
          <article className="info-card"><h2>Special Skin Care Support</h2><p>Developing gentle care pathways for individuals with more sensitive or specialized skin needs.</p></article>
          <article className="info-card"><h2>Light Balance & Clean Living</h2><p>Encouraging daily habits and wellness routines that help people feel lighter, clearer, and more balanced.</p></article>
          <article className="info-card"><h2>Calm & Rest Support</h2><p>Creating supportive routines for relaxation, stillness, and more restful living.</p></article>
          <article className="info-card"><h2>Emotional Ease & Mood Balance</h2><p>Supporting emotional comfort, inner ease, and a more balanced everyday mood.</p></article>
          <article className="info-card"><h2>Better Living Rituals</h2><p>Promoting thoughtful daily rituals that enhance wellbeing, rhythm, and quality of life.</p></article>
          <article className="info-card"><h2>Focus & Clarity Support</h2><p>Supporting clearer attention, mental freshness, and more intentional daily engagement.</p></article>
          <article className="info-card"><h2>Space Purification & Atmosphere</h2><p>Enhancing living and working spaces through natural environmental support and thoughtful atmosphere design.</p></article>
        </div>
      </section>
    </>
  )
}
