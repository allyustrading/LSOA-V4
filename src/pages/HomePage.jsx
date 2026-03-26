import heroImage from '../assets/hero-lake.jpg'
import aboutImage from '../assets/about-meeting.jpg'
import approachImage from '../assets/forest-path.jpg'
import pathwaysImage from '../assets/hero-lake.jpg'
import communityImage from '../assets/community-group.jpg'
import researchImage from '../assets/research-lab.jpg'
import supportImage from '../assets/research-plant.jpg'
import HomeCard from '../components/HomeCard'

export default function HomePage() {
  const pathways = [
    'Comfort & Circulation Support',
    'Daily Natural Skin Wellness',
    'Special Skin Care Support',
    'Light Balance & Clean Living',
    'Calm & Rest Support',
    'Emotional Ease & Mood Balance',
    'Better Living Rituals',
    'Focus & Clarity Support',
    'Space Purification & Atmosphere',
  ]

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h1>Building a Research-Informed Natural Wellness Platform at UNH BIC</h1>
          <p>
            Liuli Society is a U.S. 501(c)(3) nonprofit organization advancing wellness education,
            thoughtful product innovation, and companion-centered community support through a research-informed approach.
          </p>
          <div className="hero-actions">
            <a href="#/about" className="btn btn-gold">About Liuli Society</a>
            <a href="#/approach" className="btn btn-green">Explore Our Approach</a>
            <a href="#/contact" className="btn btn-outline">Connect With Us</a>
          </div>
        </div>
      </section>

      <section className="trust-bar shell">
        <div className="trust-item">U.S. 501(c)(3) Nonprofit</div>
        <div className="trust-item">Research-Informed Approach</div>
        <div className="trust-item">Community-Centered Mission</div>
        <div className="trust-item">Innovation Environment at UNH BIC</div>
      </section>

      <section className="shell content-block mission-block">
        <h2>Our Mission</h2>
        <p>
          We are committed to advancing natural wellness through education, research-informed design, and community-based support.
          Our mission is to make healthy living more understandable, more accessible, and more humane for individuals, families, and communities.
        </p>
      </section>

      <section className="shell content-block">
        <h2>Three Core Pillars</h2>
        <div className="three-col-grid">
          <article className="info-card">
            <h3>Health Knowledge System</h3>
            <p>We translate wellness knowledge into practical, understandable guidance for daily life.</p>
          </article>
          <article className="info-card">
            <h3>Thoughtful Product Design</h3>
            <p>Our design process begins with real-life wellness needs and a deeper understanding of health support.</p>
          </article>
          <article className="info-card">
            <h3>Companion Support Service</h3>
            <p>We believe trust grows through follow-up, listening, education, and long-term support.</p>
          </article>
        </div>
      </section>

      <section className="shell two-col-grid">
        <HomeCard
          image={aboutImage}
          title="About"
          text="Explain who Liuli Society is, why it exists, and why it is structured as a nonprofit."
          buttonLabel="About Us"
          buttonClass="btn-gold"
          link="#/about"
        />
        <HomeCard
          image={approachImage}
          title="Our Approach"
          text="Our approach begins not with selling, but with understanding."
          buttonLabel="Learn about our approach"
          buttonClass="btn-green"
          link="#/approach"
        />
      </section>

      <section className="shell two-col-grid second-row">
        <HomeCard
          image={pathwaysImage}
          title="Wellness Pathways"
          text="Our wellness framework is organized into nine pathways that reflect everyday needs, natural care experiences, and future areas of research and education."
          buttonLabel="Explore the 9 Pathways"
          buttonClass="btn-green"
          link="#/pathways"
          overlay={false}
        />
        <HomeCard
          image={communityImage}
          title="Community Impact"
          text="We aim to build a model that does more than offer products. By integrating education, thoughtful design, and human-centered follow-through, we hope to create a healthier and more supportive experience for the communities we serve."
          buttonLabel="Community"
          buttonClass="btn-gold"
          link="#/community"
          overlay={false}
        />
      </section>

      <section className="shell content-block">
        <h2>Wellness Pathways</h2>
        <p>Our wellness framework is organized into nine pathways that reflect everyday needs, natural care experiences, and future areas of research and education.</p>
        <div className="chip-list">
          {pathways.map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </div>
      </section>

      <section className="shell research-grid">
        <article className="research-feature" style={{ backgroundImage: `url(${researchImage})` }}>
          <div className="research-overlay">
            <h2>Research and Innovation at UNH BIC</h2>
            <p>
              Within the innovation environment of UNH BIC, Liuli Society is developing a nonprofit platform
              for wellness education, exploratory formulation design, community-centered pilot initiatives,
              and long-term mission-driven growth.
            </p>
            <ul>
              <li>Early-stage wellness innovation</li>
              <li>Education-centered pilot models</li>
              <li>Community-facing initiatives</li>
              <li>Responsible exploration and refinement</li>
            </ul>
            <a href="#/research" className="btn btn-gold">Research at UNH BIC</a>
          </div>
        </article>
        <article className="research-side">
          <img src={supportImage} alt="Supporting wellness research and regenerative growth" />
        </article>
      </section>

      <section className="shell callout-block split-callout">
        <div>
          <h2>Support Our Mission</h2>
          <p>
            As a 501(c)(3) nonprofit organization, Liuli Society welcomes mission-aligned partnerships,
            educational collaborations, and future support opportunities that help expand community wellness impact.
          </p>
        </div>
        <div className="callout-actions">
          <a href="#/support" className="btn btn-gold">Partner With Us</a>
          <a href="#/support" className="btn btn-green">Support the Mission</a>
        </div>
      </section>

      <section className="shell callout-block centered-callout">
        <h2>Let’s Build a Better Wellness Future Together</h2>
        <p>
          We welcome conversations with educators, researchers, community partners, and supporters who believe in a more thoughtful approach to natural wellness.
        </p>
        <a href="#/contact" className="btn btn-gold">Contact Us</a>
      </section>
    </>
  )
}
