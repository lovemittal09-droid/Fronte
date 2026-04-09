import { useEffect, useRef, useState } from 'react'
import darwixLogo from './assets/Darwixh.png'
import handPhoneImage from './assets/hand_phone.png'

const navItems = [
  'Home',
  'Products',
  'Industries',
  'Customer Stories',
  'Know Us',
  'Resources',
]

const metrics = [
  { icon: '◎', label: '50+ Global Clients' },
  { icon: '↯', label: '22+ Languages' },
  { icon: '▣', label: 'Millions of Conversations' },
]

const logos = [
  'GIVA',
  'kreedo',
  'BRIGADE',
  'mashreq',
  'mokobara',
  'duroflex',
  'POONAWALLA FINCORP',
  'ADITYA BIRLA CAPITAL',
  'APACFIN',
]

const enterpriseFeatures = [
  'Enterprise-Grade, Secure Infrastructure',
  'Custom-Built AI Application Stack',
  'Tailored to Your Industry, Not Just Tech',
]

const analyticsPoints = [
  {
    title: 'Conversation Insights by Channel & Topic:',
    text: 'Break down interactions across voice, chat, email, and social platforms by category (e.g., complaints, sales inquiries)',
  },
  {
    title: 'Performance Metrics per Agent/Team:',
    text: 'Track KPIs such as average response time, resolution rate, sentiment trends, and escalation frequency.',
  },
  {
    title: 'Real-Time Alerts & Trends:',
    text: 'Get notified when conversations show negative sentiment spikes, SLA breaches, or emerging customer pain points.',
  },
]

const tabs = [
  'GenAI Powered Agent Analytics',
  'Agent Assist & Scoring',
  'Agent Automation',
]

const founderTestimonials = [
  {
    brand: 'ADITYA BIRLA CAPITAL',
    quote: 'Darwix AI helped us ramp up the output of our sales teams in a variety of frontline roles.',
    name: 'Sameer Jadhav',
    role: 'EVP - Aditya Birla Capital',
  },
  {
    brand: 'Refrens',
    quote: 'Anyone who now comes to me to enable revenue teams, I tell them to get onboard Darwix AI as we did.',
    name: 'Naman Sarawagi',
    role: 'Founder - Refrens',
  },
  {
    brand: 'GIVA',
    quote: 'Darwix AI transformed our retail operations productivity, streamlining content creation.',
    name: 'Anirudh Kudva',
    role: 'SVP - Offline, Giva',
  },
]

const caseStudies = [
  {
    title: 'Powering Omni-Channel CX for India’s Leading D2C Jewelry Brand',
    text: 'As one of India’s fastest-growing D2C jewelry brands scaled across 150+ stores and digital platforms, it faced growing customer escalations and declining service quality. Darwix AI enabled real-time agent assist...',
    stats: [
      ['15%', 'Decrease in Manual Resolution Efforts'],
      ['12%', 'Increase in agent productivity'],
    ],
  },
  {
    title: 'Accelerating Credit Approvals for a Leading UAE BFSI with Darwix AI',
    text: 'A top BFSI institution in the UAE partnered with Darwix AI to streamline credit approvals and enhance sales productivity. By leveraging real-time conversational intelligence and multilingual smart assist, the company...',
    stats: [
      ['7%', 'Decrease in Credit Approval Turnaround Time (TAT)'],
      ['5%', 'Reduction in False Rejection Rate'],
    ],
  },
]

const articles = [
  {
    title: 'Why LLM-Integrated Workflows Will Replace SaaS Tools',
    date: 'June 16, 2025',
    text: 'Beyond Tools, Into Action! Darwix AI trains agents that understand your workflows and act on them seamlessly and smartly.',
    art: 'workflow',
  },
  {
    title: 'Building a Brand Voice in the Age of GenAI',
    date: 'June 16, 2025',
    text: 'Whether you’re a playful D2C brand or a serious enterprise product, your voice matters. Darwix AI ensures it’s not just heard but understood and replicated across every channel.',
    art: 'brand',
  },
]

const investors = [
  ['rebalance', 'India’s only fund focused on diverse founders'],
  ['INFLECTION', 'India’s most active VC investor for 3 years'],
  ['Growth91', 'Leading jewelry house backed family office'],
  ['RESOLUTE', 'Backed by 3 key legacy unicorn LPs'],
  ['JITO', 'Shaping growth opportunities for start-ups'],
]

const angels = [
  ['Suhas Motwani', 'Founder & CEO', 'THE PRODUCT FOLKS'],
  ['Nikhil Jois', 'Head Of Growth', 'Bureau'],
  ['Amit Kulkarni', 'Senior Director', 'Aumke & Marsal'],
]

const pressLogos = [
  'The Economic Times',
  'PTR',
  'indianstartuptimes',
  'YOURSTORY',
  'ENTRACKR',
  'VCCIRCLE',
]

const productCards = [
  {
    icon: '◉',
    title: 'Voice Automation',
    text: 'AI-powered analytics that unlock insights from every customer interaction with real-time intelligence.',
  },
  {
    icon: '✎',
    title: 'Physical AI',
    text: 'Physical AI brings Generative AI out of the cloud and into everyday spaces living on devices, kiosks, and surfaces people.',
  },
  {
    icon: '⌘',
    title: 'Agent Assist',
    text: 'Empower agents with intelligent real-time assistance and automated response suggestions.',
  },
  {
    icon: '⚙',
    title: 'Agent Automation',
    text: 'Streamline processes with intelligent automation that delivers personalized experiences.',
  },
  {
    icon: '◔',
    title: 'GenAI Scoring',
    text: 'AI-powered analytics that unlock insights from every customer interaction with real-time intelligence.',
  },
]

const footerLinks = ['About Us', 'Privacy Policy', 'Terms & Conditions']

const industriesCards = [
  {
    icon: '▦',
    title: 'BFSI',
    text: 'Boost approvals, cut errors, and stay compliant with real-time AI and guided assistance.',
  },
  {
    icon: '⌂',
    title: 'Real Estate',
    text: 'Enable smarter interactions, qualify leads, and recommend properties with intelligent automation.',
  },
  {
    icon: '🛒',
    title: 'Retail',
    text: 'Deliver personalized shopping and boost agent productivity across stores and digital channels.',
  },
]

const knowUsCards = [
  {
    icon: '☷',
    title: 'About Us',
    text: 'Building an agent-led future to elevate customer conversations across omni-channel sales teams',
  },
  {
    icon: '◈',
    title: 'Trust Central',
    text: 'Trust built in. Data secured. Conversations elevated - powered by Generative AI',
  },
]

const resourcesCards = [
  {
    icon: '✒',
    title: 'Blogs',
    text: 'Stay updated with industry insights, best practices, and the latest trends in AI-driven customer engagement.',
  },
  {
    icon: '✣',
    title: 'Partnerships',
    text: 'Join our expanding partner ecosystem to unlock revenue, enhance engagement, and earn industry-leading margins.',
  },
  {
    icon: '✦',
    title: 'Hackathons',
    text: 'Solve real-world problems at Darwix AI. Experience our work, collaborate with the team, and if it fits, walk out with an offer.',
  },
]

const menuContent = {
  Products: {
    title: 'Supercharge Your\nRevenue Intelligence\nwith AI',
    description:
      'Darwix brings AI Assist, Workflow Automation, and Intelligent Scoring to accelerate your outcomes.',
    panelTitle: 'Our Products',
    cards: productCards,
    panelClassName: 'menu-products',
  },
  Industries: {
    title: 'AI-Powered\nTransformation for\nYour Industry',
    description:
      'From BFSI to Real Estate to Retail, Darwix delivers AI Assist, Workflow Automation, and Intelligent Scoring to boost compliance, conversions, and customer experiences',
    panelTitle: 'Industries we serve',
    cards: industriesCards,
    panelClassName: 'menu-industries',
  },
  'Know Us': {
    title: 'Transform\nconversations into\nconversions with AI',
    description:
      'Building the agent led future to level up customer conversations for omni-channel sales teams across the world',
    panelTitle: 'Inside Darwix AI',
    cards: knowUsCards,
    panelClassName: 'menu-know-us',
  },
  Resources: {
    title: 'Resources &\nIntegrations Hub',
    description:
      'Explore our latest blogs, expert insights, and partner integrations all in one place. Stay informed and discover how our ecosystem empowers your growth.',
    panelTitle: 'Insights & Tools to Accelerate Your Growth',
    cards: resourcesCards,
    panelClassName: 'menu-resources',
  },
}

function App() {
  const [openMenu, setOpenMenu] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!navRef.current?.contains(event.target)) {
        setOpenMenu(null)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setOpenMenu(null)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <img className="brand-mark" src={darwixLogo} alt="Darwix AI logo" />
          <div className="brand-name">Darwix AI</div>
        </div>

        <nav className="nav" ref={navRef}>
          {navItems.map((item, index) => (
            menuContent[item] ? (
              <div key={item} className="nav-item-with-panel">
                <button
                  type="button"
                  className={openMenu === item ? 'nav-link nav-button open' : 'nav-link nav-button'}
                  onClick={() => setOpenMenu((current) => (current === item ? null : item))}
                  aria-expanded={openMenu === item}
                  aria-haspopup="true"
                >
                  {item}
                  <span className="caret">⌄</span>
                </button>

                {openMenu === item ? (
                  <div className="nav-panel-shell">
                    <div className={`products-panel ${menuContent[item].panelClassName}`}>
                      <div className="products-panel-feature">
                        <h3>
                          {menuContent[item].title.split('\n').map((line) => (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </h3>
                        <p>{menuContent[item].description}</p>
                      </div>

                      <div className="products-panel-grid-wrap">
                        <h3>{menuContent[item].panelTitle}</h3>
                        <div className="products-panel-grid">
                          {menuContent[item].cards.map((product) => (
                            <article key={product.title} className="product-tile">
                              <div className="product-icon">{product.icon}</div>
                              <h4>{product.title}</h4>
                              <p>{product.text}</p>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                key={item}
                className={index === 0 ? 'nav-link active' : 'nav-link'}
                href="/"
                onClick={(event) => event.preventDefault()}
              >
                {item}
                {index !== 0 && item !== 'Customer Stories' ? <span className="caret">⌄</span> : null}
              </a>
            )
          ))}
        </nav>
      </header>

      <main className="hero">
        <div className="hero-overlay" />
        <div className="hero-grid">
          <section className="hero-copy">
            <div className="eyebrow">⚡ Transform conversations into conversions with AI</div>
            <h1>Transforming Omni-Channel Sales Conversations for Global Enterprises</h1>
            <p>
              The only global GenAI-powered Omni-Channel platform for analyzing, assisting, and
              automating sales conversations at enterprise scale
            </p>

            <div className="metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric">
                  <span className="metric-icon">{metric.icon}</span>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="hero-visual" aria-hidden="true">
            <div className="ai-core">AI</div>
            <div className="ring ring-one" />
            <div className="ring ring-two" />
            <div className="ring ring-three" />
            <div className="particle-field" />
          </section>
        </div>
      </main>

      <section className="trust-strip">
        <h2><div style={{fontSize:"40px"}}>Trusted by Top Enterprises Globally</div></h2>
        <div className="logo-row">
          {logos.map((logo) => (
            <div key={logo} className="logo-pill">
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="enterprise-section">
        
        <h2 className="section-heading">
          Empower Your Revenue Teams to Close Faster,
          <br />
          Smarter, and at Global Scale
        </h2>

        <div className="enterprise-card">
          <div className="enterprise-copy">
            <h3>
              Personalized enterprise LLMs for intelligent, interactions across voice, chat &
              digital channels
            </h3>
            <p>
              Deliver smarter customer engagement, improve conversion rates, and scale your
              business with confidence - powered by Darwix AI.
            </p>

            <div className="feature-list">
              {enterpriseFeatures.map((feature) => (
                <div key={feature} className="feature-row">
                  <span className="feature-star">★</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="enterprise-panels">
            <div className="mini-panel mint">
              <div className="mini-panel-tag">✔ Up-Sell</div>
              <div className="mini-panel-body">
                <div className="mini-panel-title">Unlock Advanced AI Engagement</div>
                <ul>
                  <li>Boost conversions with personalized LLMs</li>
                  <li>Scale smarter with Darwix AI&apos;s enterprise-grade features</li>
                </ul>
                <div className="mini-panel-bar" />
              </div>
            </div>

            <div className="mini-panel blue">
              <div className="mini-panel-tag">✔ Cross-Sell</div>
              <div className="mini-panel-body">
                <div className="mini-panel-title">Enhance Your Solution Stack</div>
                <ul>
                  <li>Integrate with your existing tools instantly</li>
                  <li>Seamless voice, chat & digital channel support</li>
                </ul>
                <div className="mini-panel-bar" />
              </div>
            </div>
          </div>
        </div>

        <div className="phone-showcase" aria-hidden="true">
          <div></div>
        </div>
      </section>

      <section className="platform-section" style={{paddingBottom: "0rem"}}>
        <div className="platform-inner" style={{paddingTop: "5rem"}}>
          <img className="phone-showcase-image" src="https://cdn.prod.website-files.com/676fc1b20e9771077431aa16/6870b389b5ea7c47268ca946_Home%20Agent%20Automation.png" alt="" />

          <div className="platform-copy">
            <h2>Everything on One Unified Platform</h2>
            <p>
              From industry-tailored competency frameworks to advanced analytics and a full suite
              of enablement tools <strong>Transform+</strong> brings it all together. Empower your
              sales teams with the simplicity, speed, and intelligence of a single, integrated
              platform.
            </p>
            <a href="/" className="cta-button" onClick={(event) => event.preventDefault()}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <section className="analytics-section">
        <div className="analytics-shell">
          <h2>Accelerate Revenue Outcomes with Generative AI</h2>

          <div className="tab-row">
            {tabs.map((tab, index) => (
              <button key={tab} className={index === 0 ? 'tab active' : 'tab'} type="button">
                {tab}
              </button>
            ))}
          </div>

          <div className="analytics-grid">
            <div className="analytics-copy">
              <h3>GenAI Powered Agent Analytics</h3>
              <p>
                Granular view of all conversations with custom dashboards to monitor team
                performance and progress in real time.
              </p>

              <div className="analytics-points">
                {analyticsPoints.map((point) => (
                  <div key={point.title} className="analytics-point">
                    <span className="feature-star">★</span>
                    <div>
                      <strong>{point.title}</strong>
                      <p>{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="analytics-visual" aria-hidden="true">
              <img class="phone-showcase-image" src="/src/assets/audio_image.png" alt=""/>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Trusted by Founders and Business Leaders Across Industries</h2>
        <div className="testimonial-row">
          {founderTestimonials.map((item, index) => (
            <article key={item.name} className="testimonial-card">
              <div className={`testimonial-brand brand-${index}`}>{item.brand}</div>
              <p className="testimonial-quote">"{item.quote}"</p>
              <div className="testimonial-person">
                <div className="person-avatar">{item.name.charAt(0)}</div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="section-arrows" aria-hidden="true">
          <span>‹</span>
          <span>›</span>
        </div>
      </section>

      <section className="stories-section">
        <div className="stories-shell">
          <h2>Views from the Forefront of AI Revolution</h2>
          <div className="story-grid">
            {caseStudies.map((study) => (
              <article key={study.title} className="story-card">
                <h3>{study.title}</h3>
                <p>{study.text}</p>
                <div className="story-stats">
                  {study.stats.map(([value, label]) => (
                    <div key={value + label} className="story-stat">
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <a href="/" className="story-button" onClick={(event) => event.preventDefault()}>
                  Read Full Story
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-mark" aria-hidden="true" />
        <h2>Data-Driven Intelligence. Real Revenue Impact.</h2>
        <div className="article-grid">
          {articles.map((article) => (
            <article key={article.title} className="article-card">
              <div className={`article-art ${article.art}`}>
                <img class="phone-showcase-image" src="https://cdn.prod.website-files.com/676fc1b20e9771077431a9e9/684ff09e0d74b0081c4dbee6_Your%20paragraph%20text%20(3)%20(1)-p-1600.png" alt=""/>
              </div>
              <div className="article-copy">
                <h3>{article.title}</h3>
                <div className="article-date">▦ {article.date}</div>
                <p>{article.text}</p>
                <a href="/" onClick={(event) => event.preventDefault()}>
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="investors-section">
        <div className="investors-shell">
          <h2>Investors</h2>
          <p>We are backed by leading institutional investors</p>

          <div className="investor-grid">
            {investors.map(([name, desc]) => (
              <article key={name} className="investor-card">
                <div className="investor-logo">{name}</div>
                <span>{desc}</span>
              </article>
            ))}
          </div>

          <h3>We are also loved and backed by 50+ angel investors who represent the best in industry</h3>
          <div className="angel-row">
            {angels.map(([name, title, company]) => (
              <article key={name} className="angel-card">
                <div className="angel-avatar">{name.charAt(0)}</div>
                <div>
                  <strong>{name}</strong>
                  <span>{title}</span>
                  <em>{company}</em>
                </div>
              </article>
            ))}
          </div>

          <div className="investor-footer">
            <div className="dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span className="active" />
            </div>
            <div className="big-arrow" aria-hidden="true">›</div>
          </div>
        </div>
      </section>

      <section className="press-section" style={{paddingTop:"2rem"}}>
        <h2>We&apos;ve been in the News!</h2>
        <div className="press-row">
          {pressLogos.map((logo, index) => (
            <div key={logo} className={`press-logo press-${index}`}>
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-shell">
          <div className="partner-copy">
            <h2>Partner with us</h2>
            <div className="partner-line" />
            <p>
              Share your contact details and explore how our transformative solutions can help you
              get to the next level.
            </p>
          </div>

          <form className="partner-form">
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Your Business Email" />
            <input type="tel" placeholder="Enter Your Phone Number" />
            <div className="partner-form-row">
              <input type="text" placeholder="Designation" />
              <input type="text" placeholder="Company" />
            </div>
            <input type="url" placeholder="Website" />
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-block">
            <div className="brand footer-brand">
              <img className="brand-mark" src={darwixLogo} alt="Darwix AI logo" />
              <div className="brand-name">Darwix AI</div>
            </div>

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-icon">◎</span>
                <div>
                  <strong>India Office</strong>
                  <p>
                    7th Floor, Imperia MindSpace, Golf Course Ext Rd, Sector 62,
                    <br />
                    Gurugram, Haryana 122001
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <span className="footer-icon">✉</span>
                <a href="mailto:hr@darwix.co.in">transform@darwix.co.in</a>
              </div>
            </div>

            <div className="footer-badges">
              <img class="footer-badge" src="/src/assets/iso.png" alt=""/>
              <img class="footer-badge" src="/src/assets/soc.png" alt=""/>
            </div>
          </div>

          <div className="footer-links-block">
            <h3>COMPANY</h3>
            {footerLinks.map((link) => (
              <a key={link} href="/" onClick={(event) => event.preventDefault()}>
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <a
            className="linkedin-badge"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>
          <p>© 2025 by Darwix AI, CUR8 Ventures Pvt.Ltd. All rights reserved, all wrongs reversed! ✌</p>
        </div>
      </footer>
    </div>
  )
}

export default App
