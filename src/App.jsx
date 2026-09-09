import React, { useState, useEffect } from 'react'
import './App.css'

// ─── TOP ANNOUNCEMENT BAR ───────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="tb-content">
          <span className="top-bar-badge">Admissions 2026–27</span>
          <span className="top-bar-text">CA • CS • CMA Coaching Kolkata</span>
        </div>
        <a 
          href="https://wa.me/918420692258?text=Hello%20Sudhir%20Rai%20Classes,%20I%20am%20interested%20in%20admissions." 
          target="_blank" 
          rel="noreferrer" 
          className="top-bar-link"
        >
          📞 Helpline: +91 84206 92258
        </a>
      </div>
    </div>
  )
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Courses', id: 'courses' },
  { label: 'About', id: 'why-us' },
  { label: 'Centres', id: 'centres' },
  { label: 'Contact', id: 'contact' }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <button type="button" className="nav-logo" onClick={() => scrollTo("home")} aria-label="Sudhir Rai Classes Homepage">
          <div className="logo-img-wrapper">
            <img src="/images/logo.jpeg" alt="Sudhir Rai Classes - Best CA CS CMA Classes in Kolkata" />
          </div>
          <div className="logo-text">
            <span className="logo-title">Sudhir Rai Classes</span>
            <span className="logo-subtitle">Best CA • CS • CMA Coaching Kolkata</span>
          </div>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button key={item.id} className="nav-item-btn" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
          <a
            className="nav-cta-btn"
            href="https://wa.me/918420692258?text=Hello%20Sudhir%20Rai%20Classes,%20I%20want%20to%20enroll%20in%20CA%2FCS%2FCMA%20classes."
            target="_blank"
            rel="noreferrer"
          >
            💬 Enroll Now
          </a>
        </nav>

        <button 
          className="mobile-hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  )
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-glow glow-1" />
        <div className="hero-glow glow-2" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="container hero-content-grid">
        <div className="hero-text-block">
          <div className="hero-pill-badge">
            <span className="pulse-dot" />
            Top-Ranked CA, CS & CMA Coaching Institute in Kolkata
          </div>

          <h1 className="hero-heading">
            Best Offline Classes for <span className="highlight-gradient">CA • CS • CMA</span> in Kolkata
          </h1>

          <p className="hero-subtext">
            Guided by <strong>Prof. Sudhir Rai</strong> (20+ Years Teaching Experience). 
            Specializing in <strong>CA Foundation, Inter & Final</strong>, <strong>CS Executive & Professional</strong>, 
            and <strong>CMA Foundation, Inter & Final</strong> across 3 offline centres at <strong>Girish Park (Vivekananda Rd)</strong>, 
            <strong>Dum Dum</strong>, and <strong>Tollygunge</strong>.
          </p>

          <div className="hero-location-pills">
            <span className="loc-tag">📍 Girish Park Metro</span>
            <span className="loc-tag">📍 Dum Dum Station Area</span>
            <span className="loc-tag">📍 Tollygunge South Kolkata</span>
            <span className="loc-tag">🎓 2500+ Rankers Taught</span>
          </div>

          <div className="hero-cta-group">
            <a
              href="https://wa.me/918420692258?text=Hello%20Prof.%20Sudhir%20Rai,%20I%20want%20information%20on%20CA%2FCS%2FCMA%20batches."
              target="_blank"
              rel="noreferrer"
              className="btn-primary-wa"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire on WhatsApp
            </a>

            <button 
              className="btn-secondary-outline" 
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore CA CS CMA Batches ↓
            </button>
          </div>

          <div className="hero-stats-row">
            <div className="stat-card">
              <span className="stat-value">2500+</span>
              <span className="stat-label">Students Mentored</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">20+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">3</span>
              <span className="stat-label">Kolkata Centres</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">4.9/5</span>
              <span className="stat-label">Google Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-block">
          <div className="glass-card main-hero-card">
            <div className="faculty-avatar-circle">
              <img 
                src="/images/photo.webp" 
                onError={(e) => { e.target.onerror = null; e.target.src = "/photo.webp"; }} 
                alt="Prof. Sudhir Rai - Master Educator CA CS CMA Kolkata" 
                className="faculty-hero-img" 
              />
            </div>
            <h3>Prof. Sudhir Rai</h3>
            <p className="fac-tagline">Master Educator for CA • CS • CMA in Kolkata</p>

            <div className="feature-bullets">
              <div className="bullet-item">
                <span className="check-icon">✓</span>
                <span>Direct Tax, Indirect Tax (GST) & Corporate Law Specialist</span>
              </div>
              <div className="bullet-item">
                <span className="check-icon">✓</span>
                <span>Cost Accounting & Financial Management Expert</span>
              </div>
              <div className="bullet-item">
                <span className="check-icon">✓</span>
                <span>Weekly Surprise Mock Tests & Class Drills</span>
              </div>
            </div>

            <div className="hero-badge-footer">
              <span>Trusted Commerce Coaching Institute Since 2006</span>
            </div>
          </div>

          <div className="floating-card float-1">
            <span className="fl-emoji">🏆</span>
            <div>
              <div className="fl-title">Top Rankers Choice</div>
              <div className="fl-sub">ICAI / ICSI / ICMAI Exam Prep</div>
            </div>
          </div>

          <div className="floating-card float-2">
            <span className="fl-emoji">📍</span>
            <div>
              <div className="fl-title">Girish Park • Dum Dum • Tollygunge</div>
              <div className="fl-sub">Offline Classroom Batches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── INTERACTIVE COURSES SECTION ──────────────────────────────────────────────
const courseData = [
  {
    id: 'ca',
    title: 'CA Coaching (Chartered Accountancy)',
    subtitle: 'ICAI Exam Preparation • CA Foundation, CA Intermediate & CA Final',
    icon: '📘',
    color: '#FF6B1A',
    description: 'Premier offline classroom coaching for ICAI CA Foundation, CA Intermediate, and CA Final exams in Kolkata. Complete mastery of Direct & Indirect Taxation, Corporate Laws, Costing, Auditing, and Advanced Accounting.',
    levels: [
      { name: 'CA Foundation Classes', subjects: ['Accounting', 'Business Laws', 'Quantitative Aptitude', 'Business Economics'] },
      { name: 'CA Intermediate Classes (Group 1 & 2)', subjects: ['Advanced Accounting', 'Corporate & Other Laws', 'Taxation (Direct Tax & GST)', 'Cost & Management Accounting', 'Auditing & Ethics', 'Financial Management & Strategic Management'] },
      { name: 'CA Final Preparation', subjects: ['Financial Reporting', 'Advanced Financial Management (AFM)', 'Advanced Auditing', 'Direct Tax Laws & International Taxation', 'Indirect Tax Laws (GST)'] }
    ],
    features: ['100% ICAI Study Material Coverage', 'Weekly Surprise Mock Test Series', 'Formula Memory Drills & Section Tricks', 'Individual Doubts Clearance']
  },
  {
    id: 'cs',
    title: 'CS Coaching (Company Secretary)',
    subtitle: 'ICSI Exam Preparation • CS Executive & CS Professional',
    icon: '⚖️',
    color: '#D4A017',
    description: 'Specialized coaching for ICSI Company Secretary examinations in Kolkata. Deep conceptual breakdown of Corporate Laws, Securities Laws, Company Secretarial Practice, ESG, Governance, and Tax Laws.',
    levels: [
      { name: 'CS Executive Modules 1 & 2', subjects: ['Jurisprudence, Interpretation & General Laws (JIGL)', 'Company Law & Practice', 'Setting Up of Business Entities & Closure', 'Corporate Accounting & Financial Management', 'Tax Laws & Practice', 'Securities Laws & Capital Markets'] },
      { name: 'CS Professional Modules 1 & 2', subjects: ['Environmental, Social & Governance (ESG)', 'Drafting, Pleading & Appearances', 'Compliance Management, Audit & Due Diligence', 'Corporate Restructuring, Insolvency & Liquidation', 'Corporate Dispute Resolution'] }
    ],
    features: ['Clause-by-Clause Law Explanation', 'Drafting & Case Law Mastery', 'Previous 10 Year Question Solves', 'Daily Revision Drills']
  },
  {
    id: 'cma',
    title: 'CMA Coaching (Cost & Management Accountant)',
    subtitle: 'ICMAI Exam Preparation • CMA Foundation, CMA Inter & CMA Final',
    icon: '📊',
    color: '#2D7DD2',
    description: 'In-depth coaching for ICMAI CMA Foundation, Intermediate, and Final exams. Focus on Cost Accounting, Direct & Indirect Tax, Strategic Performance Management, and Corporate Financial Reporting.',
    levels: [
      { name: 'CMA Foundation Coaching', subjects: ['Fundamentals of Business Laws & Ethics', 'Fundamentals of Financial Accounting', 'Fundamentals of Business Mathematics & Statistics', 'Fundamentals of Business Economics'] },
      { name: 'CMA Intermediate Coaching (Group 1 & 2)', subjects: ['Business Laws & Ethics', 'Financial Accounting', 'Direct & Indirect Taxation', 'Cost Accounting', 'Operations & Strategic Management', 'Corporate Accounting & Auditing', 'Financial Management'] },
      { name: 'CMA Final Coaching', subjects: ['Corporate & Economic Laws', 'Strategic Financial Management (SFM)', 'Direct Tax Laws & International Tax', 'Strategic Cost Management (SCM)', 'Cost & Management Audit', 'Corporate Financial Reporting'] }
    ],
    features: ['Practical Numerical Costing Drills', 'Tax Law Case Studies & Computations', 'Full Length ICMAI Mock Tests', 'Individual Student Progress Tracking']
  },
  {
    id: 'intl',
    title: 'International Finance Certifications',
    subtitle: 'Global Finance & Accounting Credentials (CFA, CPA, ACCA, CMA US)',
    icon: '🌍',
    color: '#10B981',
    description: 'Foundational coaching support for top global professional certifications including CFA (US), CPA (US), ACCA (UK), CMA (US), and FRM.',
    levels: [
      { name: 'CFA & FRM Foundation Support', subjects: ['Financial Statement Analysis', 'Corporate Issuers', 'Equity & Fixed Income', 'Quantitative Methods', 'Risk Analytics'] },
      { name: 'CPA & ACCA Preparation Support', subjects: ['Financial Accounting & Reporting (FAR)', 'Auditing & Attestation (AUD)', 'Regulation (REG)', 'Financial Management'] }
    ],
    features: ['Global Curriculum Alignment', 'Conceptual Problem Solving', 'Flexible Learning Guidance', 'Exam Strategy Mentorship']
  }
]

function CoursesSection() {
  const [activeTab, setActiveTab] = useState('ca')
  const activeCourse = courseData.find(c => c.id === activeTab) || courseData[0]

  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Targeted Programmes</span>
          <h2 className="section-title">
            Our Top <span className="accent">CA, CS & CMA Courses</span> in Kolkata
          </h2>
          <p className="section-subtitle">
            Tailored offline classroom programs for CA, CS, and CMA aspirants with conceptual depth, weekly mock exams, and individual attention.
          </p>
        </div>

        <div className="course-tabs-nav">
          {courseData.map((course) => (
            <button
              key={course.id}
              className={`course-tab-btn ${activeTab === course.id ? 'active' : ''}`}
              onClick={() => setActiveTab(course.id)}
              style={{ '--tab-color': course.color }}
            >
              <span className="tab-icon">{course.icon}</span>
              <span className="tab-text">{course.title.split(' ')[0]} {course.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        <div className="course-detail-card" style={{ borderTopColor: activeCourse.color }}>
          <div className="cdc-header">
            <div className="cdc-header-main">
              <span className="cdc-badge-icon" style={{ background: activeCourse.color }}>{activeCourse.icon}</span>
              <div>
                <h3 className="cdc-title">{activeCourse.title}</h3>
                <span className="cdc-subtitle">{activeCourse.subtitle}</span>
              </div>
            </div>
            <a
              href={`https://wa.me/918420692258?text=Hello%20Sudhir%20Rai%20Classes,%20I%20want%20information%20about%20${encodeURIComponent(activeCourse.title)}.`}
              target="_blank"
              rel="noreferrer"
              className="cdc-wa-btn"
            >
              Enquire Batch Details →
            </a>
          </div>

          <p className="cdc-desc">{activeCourse.description}</p>

          <div className="cdc-body-grid">
            <div className="cdc-levels-column">
              <h4 className="column-heading">Detailed Syllabus & Level Breakdown</h4>
              <div className="levels-accordion">
                {activeCourse.levels.map((lvl) => (
                  <div key={lvl.name} className="level-box">
                    <h5 className="lvl-name">📌 {lvl.name}</h5>
                    <div className="lvl-subjects">
                      {lvl.subjects.map((sub) => (
                        <span key={sub} className="sub-tag">{sub}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cdc-features-column">
              <h4 className="column-heading">Why Sudhir Rai Classes?</h4>
              <ul className="cdc-feature-list">
                {activeCourse.features.map((feat) => (
                  <li key={feat}>
                    <span className="f-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="centre-avail-box">
                <span className="cab-title">Available Offline Centres in Kolkata:</span>
                <div className="cab-tags">
                  <span>📍 Girish Park (Vivekananda Rd)</span>
                  <span>📍 Dum Dum Station Area</span>
                  <span>📍 Tollygunge (South Kolkata)</span>
                </div>
                <p className="cab-note">* Morning & Evening offline classroom batches available for college & working students.</p>
              </div>

              <a
                href="https://wa.me/918420692258?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20for%20CA%2FCS%2FCMA."
                target="_blank"
                rel="noreferrer"
                className="btn-demo-class"
              >
                Book Free Demo Session on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WHY CHOOSE US ─────────────────────────────────────────────────────────────
const PILLARS_DATA = [
  {
    icon: '👨‍🏫',
    title: '20+ Years Direct Faculty Expertise',
    desc: 'All classes are personally taught by Prof. Sudhir Rai, offering deep mastery across Direct & Indirect Taxation, Corporate Law, Costing, and Advanced Accounting.'
  },
  {
    icon: '🧠',
    title: 'Concept-First Pedagogy',
    desc: 'No mechanical memorization. Every section of Corporate Law and every formula in Tax or Costing is explained conceptually.'
  },
  {
    icon: '❓',
    title: 'Daily Random Class Drills',
    desc: 'Students are asked random questions during class to test active memory, build confidence, and keep formulas fresh.'
  },
  {
    icon: '📝',
    title: 'Weekly Surprise Mock Tests',
    desc: 'Surprise tests simulate actual exam conditions (ICAI/ICSI/ICMAI patterns), sharpening exam time management.'
  },
  {
    icon: '🔁',
    title: 'Continuous Syllabus Revision',
    desc: 'Multiple revision cycles before examinations ensure case laws, section numbers, and tax amendments remain crystal clear.'
  },
  {
    icon: '🏫',
    title: '3 Strategic Kolkata Offline Centres',
    desc: 'Convenient offline learning at Girish Park (Vivekananda Rd), Dum Dum, and Tollygunge with flexible batch timings.'
  }
]

function WhyUsSection() {
  return (
    <section id="why-us" className="section why-us-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Proven Pedagogy</span>
          <h2 className="section-title">
            Why Choose <span className="accent">Sudhir Rai Classes?</span>
          </h2>
          <p className="section-subtitle">
            Syllabus completion alone does not ensure ranker results. Our disciplined methodology turns effort into top scores.
          </p>
        </div>

        <div className="pillars-grid">
          {PILLARS_DATA.map((p) => (
            <div key={p.title} className="pillar-card">
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── GEO COMPARISON MATRIX & SYLLABUS TABLE ───────────────────────────────────
function SyllabusMatrixSection() {
  return (
    <section id="syllabus" className="section syllabus-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">At A Glance</span>
          <h2 className="section-title">
            CA, CS & CMA <span className="accent">Course Comparison</span>
          </h2>
          <p className="section-subtitle">
            Structured comparison of professional commerce courses offered at Sudhir Rai Classes in Kolkata.
          </p>
        </div>

        <div className="table-responsive-wrapper">
          <table className="geo-table">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Governing Body</th>
                <th>Course Levels</th>
                <th>Key Core Subjects</th>
                <th>Kolkata Offline Centres</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CA (Chartered Accountancy)</strong></td>
                <td>ICAI (Institute of Chartered Accountants of India)</td>
                <td>Foundation, Intermediate, Final</td>
                <td>Direct Tax, Indirect Tax (GST), Corporate Law, Advanced Accounting, Auditing & Ethics, AFM</td>
                <td>Girish Park, Dum Dum, Tollygunge</td>
              </tr>
              <tr>
                <td><strong>CS (Company Secretary)</strong></td>
                <td>ICSI (Institute of Company Secretaries of India)</td>
                <td>Executive, Professional</td>
                <td>Company Law, Securities Law, JIGL, Corporate Restructuring, ESG, Tax Laws, Compliance Audit</td>
                <td>Girish Park, Dum Dum, Tollygunge</td>
              </tr>
              <tr>
                <td><strong>CMA (Cost Accountant)</strong></td>
                <td>ICMAI (Institute of Cost Accountants of India)</td>
                <td>Foundation, Intermediate, Final</td>
                <td>Cost Accounting, Direct & Indirect Tax, Strategic Cost Management, Financial Management, Corporate Laws</td>
                <td>Girish Park, Dum Dum, Tollygunge</td>
              </tr>
              <tr>
                <td><strong>International Certifications</strong></td>
                <td>CFA, AICPA, ACCA UK, IMA US</td>
                <td>Professional Designations</td>
                <td>Financial Statement Analysis, US GAAP, IFRS, Global Taxation, Audit, Risk Analytics</td>
                <td>Girish Park, Dum Dum, Tollygunge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ─── CENTRES SECTION ──────────────────────────────────────────────────────────
const CENTRES_DATA = [
  {
    name: "Girish Park Centre (Head Centre)",
    badge: "🏛️ Central & North Kolkata Hub",
    address: "3rd Floor, 79/1B, Vivekananda Road, Girish Park, Kolkata - 700007",
    landmark: "Opposite Commercial Hub / 2 Mins Walk from Girish Park Metro Gate 2",
    timings: "Mon – Sat: 7:00 AM – 8:00 PM | Sun: 9:00 AM – 1:00 PM",
    phone: "+91 84206 92258",
    hubUrl: "/centres/girish-park-north-kolkata.html",
    mapUrl: "https://www.google.com/maps/place/Sudhir+Rai+classes/@0,-0.1400757,12z/data=!4m7!1m2!2m1!1ssudhir+rai+classes!3m3!1s0xd2782f7f3f3947b:0x5103ad4fad5096a2!15sChJzdWRoaXIgcmFpIGNsYXNzZXOSAQ9jb2FjaGluZ19jZW50ZXLgAQA!16s%2Fg%2F11yz619zs4",
    courses: ["CA Foundation & Inter", "CS Executive & Prof", "CMA Foundation & Final", "Direct Tax & Law"]
  },
  {
    name: "Dum Dum Centre",
    badge: "🚆 North Suburbs & Airport Corridor",
    address: "Sudhir Rai Classes, Dum Dum Station Area, Kolkata - 700028",
    landmark: "2 Mins Walking Distance from Dum Dum Junction Railway Station & Metro",
    timings: "Mon – Sat: 7:00 AM – 7:30 PM | Sun: 9:00 AM – 1:00 PM",
    phone: "+91 84206 92258",
    hubUrl: "/centres/dum-dum-station.html",
    mapUrl: "https://www.google.com/maps/place/Sudhir+Rai+Classes/@22.6316168,88.2543661,12z/data=!4m10!1m2!2m1!1ssudhir+rai+classes!3m6!1s0x39f89d841349aded:0xb0df0065f2e25d80!8m2!3d22.6316168!4d88.3944418!15sChJzdWRoaXIgcmFpIGNsYXNzZXNaFCISc3VkaGlyIHJhaSBjbGFzc2VzkgEPY29hY2hpbmdfY2VudGVy4AEA!16s%2Fg%2F11yr9gn_h1",
    courses: ["CA Inter & Final", "CS Executive Modules", "CMA Costing & DT", "Regular & Weekend Batches"]
  },
  {
    name: "Tollygunge Centre",
    badge: "🚇 South Kolkata Hub",
    address: "Sudhir Rai Classes, Tollygunge, South Kolkata - 700033",
    landmark: "Direct Access via Tollygunge / Mahanayak Uttam Kumar Metro Station",
    timings: "Mon – Sat: 7:00 AM – 7:30 PM | Sun: 9:00 AM – 1:00 PM",
    phone: "+91 84206 92258",
    hubUrl: "/centres/tollygunge-south-kolkata.html",
    mapUrl: "https://www.google.com/maps/place/Sudhir+Rai+Classes/@22.4843678,88.213167,12z/data=!4m10!1m2!2m1!1ssudhir+rai+classes!3m6!1s0x3a0271f52b7d8a5b:0x29a9df1dad861ba0!8m2!3d22.4843678!4d88.3532427!15sChJzdWRoaXIgcmFpIGNsYXNzZXNaFCISc3VkaGlyIHJhaSBjbGFzc2VzkgEPY29hY2hpbmdfY2VudGVy4AEA!16s%2Fg%2F11ys8wthyp",
    courses: ["CA Foundation & Inter", "CS Executive", "CMA Inter & Final", "Personal Mentoring"]
  }
]

function CentresSection() {
  return (
    <section id="centres" className="section centres-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Offline Learning Hubs</span>
          <h2 className="section-title">
            Our Classroom <span className="accent">Centres in Kolkata</span>
          </h2>
          <p className="section-subtitle">
            Experience face-to-face mentorship with Prof. Sudhir Rai across 3 prime metro-connected hubs in Kolkata.
          </p>
        </div>

        <div className="centres-grid">
          {CENTRES_DATA.map((c) => (
            <div key={c.name} className="centre-card">
              <div className="centre-card-header">
                <div className="centre-badge-row">
                  <span className="centre-type-badge">{c.badge}</span>
                </div>
                <h3 className="centre-name">{c.name}</h3>
              </div>

              <div className="centre-info-list">
                <p className="ci-item"><strong>📍 Address:</strong> {c.address}</p>
                <p className="ci-item"><strong>🚇 Landmark:</strong> {c.landmark}</p>
                <p className="ci-item"><strong>⏰ Timings:</strong> {c.timings}</p>
                <p className="ci-item"><strong>📞 Helpline:</strong> {c.phone}</p>
              </div>

              <div className="centre-course-pills">
                {c.courses.map((course) => (
                  <span key={course} className="cc-pill">{course}</span>
                ))}
              </div>

              <div className="centre-card-footer">
                <a
                  href={c.hubUrl}
                  className="btn-centre-hub"
                >
                  Explore Centre Guide & Batches →
                </a>
                <a
                  href={c.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-view-map"
                >
                  🗺️ Google Maps Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── KOLKATA GEO & COLLEGE TRANSIT HUB ─────────────────────────────────────────
const TOP_KOLKATA_COLLEGES = [
  {
    name: "Goenka College of Commerce & Business Administration",
    locality: "Bowbazar / College Street",
    nearestCentre: "Girish Park Centre (10 mins by Metro / Auto)",
    idealBatches: "Early Morning (7:00 AM) & Evening (5:30 PM)",
    highlight: "Aligned with CU B.Com Hons semester exams"
  },
  {
    name: "St. Xavier's College (Autonomous)",
    locality: "Park Street",
    nearestCentre: "Girish Park / Tollygunge Centre (Direct Metro from Park St)",
    idealBatches: "Morning Batches & Weekend Intensive Slots",
    highlight: "Specially tailored for CA Foundation & CS Executive students"
  },
  {
    name: "The Bhawanipur Education Society College (BESC)",
    locality: "Bhawanipore / Elgin Road",
    nearestCentre: "Tollygunge Centre (8 mins via Netaji Bhavan Metro)",
    idealBatches: "Morning (7:00 AM - 9:00 AM) & Afternoon slots",
    highlight: "Popular for CS Executive Corporate Laws & CMA Costing"
  },
  {
    name: "Umesh Chandra College",
    locality: "Surya Sen Street / Central Kolkata",
    nearestCentre: "Girish Park Centre (5 mins walk / 1 Metro stop)",
    idealBatches: "Evening Batches after morning college classes",
    highlight: "Zero travel wastage for Central Kolkata commerce students"
  },
  {
    name: "Scottish Church College",
    locality: "Hedua / North Kolkata",
    nearestCentre: "Girish Park Centre (Direct walking distance)",
    idealBatches: "Morning & Weekend Special Revision batches",
    highlight: "Complete coverage of CA Inter Taxation & Law"
  },
  {
    name: "Seth Anandram Jaipuria College",
    locality: "Sovabazar / North Kolkata",
    nearestCentre: "Girish Park & Dum Dum Centres (1 Metro stop)",
    idealBatches: "Flexible morning & afternoon slots",
    highlight: "Extensive practice with daily random class questions"
  }
]

const LOCALITIES_DATA = [
  "Girish Park Metro Area", "Dum Dum Station", "Tollygunge South Kolkata", "Shyambazar",
  "Sovabazar", "Bidhannagar / Salt Lake", "Howrah Station Area", "Sealdah & Rajabazar",
  "Jadavpur & Dhakuria", "Garia & Naktala", "Park Street & Camac St", "Kankurgachi & Ultadanga",
  "Hazra & Kalighat", "Burrabazar & MG Road", "Behala & New Alipore", "Nagerbazar & Belgharia"
]

const LONG_TAIL_QUERIES = [
  "Best CA Inter taxation coaching institute in Girish Park Kolkata",
  "CS Executive company law classes in Dum Dum Kolkata",
  "CMA Final costing tuition near Girish Park metro station",
  "Prof Sudhir Rai commerce classes contact number & fees",
  "Best CA Foundation offline coaching classes in Tollygunge",
  "Top CS Professional corporate law faculty in Kolkata",
  "CMA Intermediate direct tax & GST coaching in North Kolkata",
  "Best CA coaching institute near Dum Dum station",
  "Top commerce tuition for CA CS CMA in South Kolkata",
  "Offline CA Inter Advanced Accounting batch in Girish Park"
]

function KolkataGeoHubSection() {
  const [activeTab, setActiveTab] = useState('colleges')

  return (
    <section id="geo-hub" className="section geo-hub-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Kolkata Geo & College Transit Hub</span>
          <h2 className="section-title">
            Studying in Kolkata? <span className="accent">Connect With Your Nearest Centre</span>
          </h2>
          <p className="section-subtitle">
            Direct Blue Line Metro & suburban rail connectivity ensure students from all major Kolkata commerce colleges and neighborhoods reach class effortlessly.
          </p>
        </div>

        <div className="geo-tabs-nav">
          <button
            className={`geo-tab-btn ${activeTab === 'colleges' ? 'active' : ''}`}
            onClick={() => setActiveTab('colleges')}
          >
            🎓 Top Commerce Colleges Connect
          </button>
          <button
            className={`geo-tab-btn ${activeTab === 'transit' ? 'active' : ''}`}
            onClick={() => setActiveTab('transit')}
          >
            🚇 Metro & Transit Network
          </button>
          <button
            className={`geo-tab-btn ${activeTab === 'localities' ? 'active' : ''}`}
            onClick={() => setActiveTab('localities')}
          >
            📍 Localities & Popular Searches
          </button>
        </div>

        {activeTab === 'colleges' && (
          <div className="colleges-grid">
            {TOP_KOLKATA_COLLEGES.map((col) => (
              <div key={col.name} className="college-card">
                <div className="college-card-top">
                  <span className="college-icon">🏛️</span>
                  <div>
                    <h3 className="college-name">{col.name}</h3>
                    <span className="college-locality">📍 {col.locality}</span>
                  </div>
                </div>
                <div className="college-details">
                  <p><strong>Nearest Centre:</strong> {col.nearestCentre}</p>
                  <p><strong>Batch Compatibility:</strong> {col.idealBatches}</p>
                  <div className="college-highlight-tag">
                    ✨ {col.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'transit' && (
          <div className="transit-overview-grid">
            <div className="transit-box">
              <div className="tb-header">
                <span className="tb-icon">🚇</span>
                <h3>Kolkata Blue Line Metro Network</h3>
              </div>
              <p>All 3 centres are directly on the Blue Line Metro corridor (North-South):</p>
              <ul className="transit-list">
                <li><strong>Girish Park Centre:</strong> 2 mins walk from Girish Park Metro Station (Gate 2).</li>
                <li><strong>Dum Dum Centre:</strong> 2 mins walk from Dum Dum Metro & Suburban Interchange.</li>
                <li><strong>Tollygunge Centre:</strong> Steps from Mahanayak Uttam Kumar / Netaji Metro.</li>
              </ul>
            </div>

            <div className="transit-box">
              <div className="tb-header">
                <span className="tb-icon">🚆</span>
                <h3>Suburban Railway & Howrah / Sealdah</h3>
              </div>
              <p>Hassle-free daily commute for suburban students:</p>
              <ul className="transit-list">
                <li><strong>From Howrah Station:</strong> 15 mins via MG Road / Vivekananda Road buses & autos to Girish Park.</li>
                <li><strong>From Sealdah Main:</strong> Direct suburban train to Dum Dum (8 mins) or auto to Girish Park (10 mins).</li>
                <li><strong>From Barrackpore / Barasat:</strong> Direct local trains arriving at Dum Dum platform.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'localities' && (
          <div className="localities-tab-content">
            <div className="locality-pills-wrap">
              {LOCALITIES_DATA.map((loc) => (
                <span key={loc} className="locality-pill-badge">
                  📍 {loc} CA CS CMA Classes
                </span>
              ))}
            </div>

            <h4 style={{ margin: '28px 0 14px', textAlign: 'center', color: 'var(--navy-dark)', fontSize: '1.1rem' }}>
              Trending High-Intent Kolkata Search Queries
            </h4>

            <div className="longtail-queries-grid">
              {LONG_TAIL_QUERIES.map((query) => (
                <div key={query} className="query-card">
                  <span className="query-icon">🔍</span>
                  <span className="query-text">"{query}"</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── BLOGS & AEO GUIDES SECTION ───────────────────────────────────────────────
const BLOGS_DATA = [
  {
    id: 'ca-inter',
    title: "How to Master CA Inter Taxation & Corporate Law: Guide by Prof. Sudhir Rai",
    desc: "Proven strategy to score 70+ in ICAI CA Intermediate Taxation and Corporate Laws with expert guidance in Kolkata.",
    tag: "CA Intermediate",
    link: "/blogs/how-to-prepare-for-ca-inter-taxation-law-kolkata.html",
    icon: "📘"
  },
  {
    id: 'cs-exec',
    title: "CS Executive Examination Strategy: Module 1 & 2 Passing Plan",
    desc: "Comprehensive guide to clearing ICSI CS Executive Company Law, JIGL, Securities Laws, and Tax Laws in first attempt.",
    tag: "CS Executive",
    link: "/blogs/best-cs-executive-coaching-strategy-kolkata.html",
    icon: "⚖️"
  },
  {
    id: 'cma-final',
    title: "CMA Final & Intermediate Costing & Taxation Strategy for 70+ Marks",
    desc: "In-depth ICMAI exam roadmap for Marginal Costing, Standard Costing, Direct & Indirect Taxation by Prof. Sudhir Rai.",
    tag: "CMA Final & Inter",
    link: "/blogs/cma-final-costing-taxation-preparation-tips.html",
    icon: "📊"
  },
  {
    id: 'institute-feature',
    title: "Why Sudhir Rai Classes is Kolkata's Top Commerce Institute",
    desc: "Comprehensive review of Sudhir Rai Classes in Kolkata offering offline coaching across Girish Park, Dum Dum & Tollygunge.",
    tag: "Institute Feature",
    link: "/blogs/top-ca-cs-cma-coaching-centres-girish-park-dum-dum-tollygunge.html",
    icon: "🏫"
  },
  {
    id: 'ca-foundation',
    title: "CA Foundation 90-Day Passing Strategy & Study Plan",
    desc: "Comprehensive subject-wise study roadmap for Accounting, Business Laws, Quantitative Aptitude & Economics to score 300+ marks.",
    tag: "CA Foundation",
    link: "/blogs/ca-foundation-preparation-strategy-study-plan-kolkata.html",
    icon: "🎯"
  },
  {
    id: 'course-comparison',
    title: "CA vs CS vs CMA: Which Course is Best After 12th & Graduation?",
    desc: "Complete career roadmap comparing Chartered Accountancy, Company Secretary, and Cost & Management Accountancy in Kolkata.",
    tag: "Career Guide",
    link: "/blogs/ca-vs-cs-vs-cma-course-comparison-career-guide.html",
    icon: "🌐"
  },
  {
    id: 'gst-exemption',
    title: "How to Score 70+ (Exemption) in GST & Indirect Taxes",
    desc: "Master Input Tax Credit (Sec 16 & 17(5)), supply valuation, and Customs assessable value calculations for CA, CS & CMA.",
    tag: "GST & Tax Laws",
    link: "/blogs/how-to-score-exemption-in-gst-and-indirect-taxation-kolkata.html",
    icon: "💡"
  },
  {
    id: 'costing-handbook',
    title: "CA Inter Cost & Management Accounting: Formulas & Strategy",
    desc: "Essential formula sheet and problem-solving blueprint for Marginal Costing, Standard Costing Variances, and Process Costing.",
    tag: "Costing Guide",
    link: "/blogs/ca-inter-cost-and-management-accounting-formula-handbook-strategy.html",
    icon: "📈"
  },
  {
    id: 'ca-final-dt',
    title: "CA Final Direct Tax & International Taxation: Exemption Plan",
    desc: "Comprehensive masterplan covering Corporate Taxation, MAT (Sec 115JB), Transfer Pricing (Sec 92), and DTAA Relief.",
    tag: "CA Final DT",
    link: "/blogs/ca-final-direct-tax-international-taxation-roadmap-kolkata.html",
    icon: "📕"
  },
  {
    id: 'bcom-balance',
    title: "How to Balance B.Com (Calcutta Univ / St. Xavier's) with CA/CS/CMA",
    desc: "Daily timetable and syllabus overlap strategy for students balancing college attendance with professional coaching in Kolkata.",
    tag: "College Guide",
    link: "/blogs/bcom-with-ca-cs-cma-study-balance-guide-kolkata-colleges.html",
    icon: "🎓"
  }
]

function BlogsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedBlogs = showAll ? BLOGS_DATA : BLOGS_DATA.slice(0, 6)

  return (
    <section id="blogs" className="section blogs-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">AEO Knowledge Hub</span>
          <h2 className="section-title">
            Exam Guides & <span className="accent">Preparation Blogs</span>
          </h2>
          <p className="section-subtitle">
            In-depth subject strategies, section-wise exam tips, and passing plans authored by Prof. Sudhir Rai.
          </p>
        </div>

        <div className="blogs-grid">
          {displayedBlogs.map((b) => (
            <div key={b.id} className="blog-card-item">
              <div className="bci-top">
                <span className="bci-icon">{b.icon}</span>
                <span className="bci-tag">{b.tag}</span>
              </div>
              <h3 className="bci-title">{b.title}</h3>
              <p className="bci-desc">{b.desc}</p>
              <a href={b.link} className="bci-read-btn">
                Read Full Article →
              </a>
            </div>
          ))}
        </div>

        {BLOGS_DATA.length > 6 && (
          <div className="blogs-toggle-container">
            <button
              className="blogs-toggle-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Top Articles ↑" : `View All Articles (${BLOGS_DATA.length}) ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── TESTIMONIALS SECTION ─────────────────────────────────────────────────────
const reviews = [
  {
    name: "Prithis Roy",
    role: "CA Student",
    review: "Prof. Sudhir Rai sir is very polite and jolly in nature. He gives personal attention to every student in class and makes complex Taxation & Law concepts exceptionally easy to understand.",
    stars: 5,
    location: "Girish Park Centre"
  },
  {
    name: "Mohammad Aquib Khan",
    role: "CS Executive Student",
    review: "Sir teaches CS subjects with a strong focus on memory formulas and practical clause interpretations. The daily random class questions keep us active and well-prepared.",
    stars: 5,
    location: "Dum Dum Centre"
  },
  {
    name: "Black Clover",
    role: "CMA Student",
    review: "He possesses strong teaching skills. Formulas and practical cost accounting problems are easily mastered in his sessions. Highly recommended for CA, CS, and CMA aspirants in Kolkata!",
    stars: 5,
    location: "Tollygunge Centre"
  },
  {
    name: "Monkey D. Luffy",
    role: "CA Inter Achiever",
    review: "Teacher is very polite and helpful. Weekly surprise mock tests boosted my confidence for ICAI exams. The best commerce teacher in Kolkata!",
    stars: 5,
    location: "Girish Park Centre"
  },
  {
    name: "Sudhir Roy",
    role: "Commerce Aspirant",
    review: "One master faculty having complete mastery over multiple subjects continuously across all three centres in Kolkata. Truly inspiring leadership.",
    stars: 5,
    location: "Dum Dum Centre"
  },
  {
    name: "Ananya Sharma",
    role: "CA Foundation Student",
    review: "Joined Sudhir Rai Classes on recommendation of my seniors. The clarity in Accounting and Law is unmatched. Mock tests prepared me thoroughly.",
    stars: 5,
    location: "Tollygunge Centre"
  }
]

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Student Achievers</span>
          <h2 className="section-title">
            What Our <span className="accent">Students Say</span>
          </h2>
          <p className="section-subtitle">
            Authentic reviews from CA, CS, and CMA rankers and students across Kolkata.
          </p>
        </div>

        <div className="reviews-carousel-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <div className="rc-stars">{'★'.repeat(r.stars)}</div>
              <p className="rc-text">"{r.review}"</p>
              <div className="rc-author">
                <div className="rc-avatar">{r.name.charAt(0)}</div>
                <div>
                  <h4 className="rc-name">{r.name}</h4>
                  <span className="rc-role">{r.role} • {r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── AEO & GEO FAQ SECTION (KNOWLEDGE BASE WITH LONG-TAIL QUESTIONS) ─────────
const faqs = [
  {
    question: "Which is the best coaching institute for CA, CS, and CMA in Kolkata?",
    answer: "Sudhir Rai Classes is widely recognized as Kolkata's top coaching institute for CA (Foundation, Inter, Final), CS (Executive, Professional), and CMA exams. Founded in 2006 by Prof. Sudhir Rai with 20+ years of expert teaching experience, the institute operates three offline centres at Girish Park, Dum Dum, and Tollygunge, having successfully mentored over 2,500 students."
  },
  {
    question: "Where can I find the best CA Inter taxation and law offline classes near Girish Park metro?",
    answer: "Sudhir Rai Classes Head Centre is located at 3rd Floor, 79/1B, Vivekananda Road, Girish Park, Kolkata (just a short walk from Girish Park Metro Station). It offers specialized offline coaching for CA Inter Taxation (Direct & Indirect Tax) and Corporate Laws."
  },
  {
    question: "Which institute offers top CMA Final costing and strategic financial management coaching in Dum Dum?",
    answer: "Sudhir Rai Classes at Dum Dum Station Area provides comprehensive offline coaching for ICMAI CMA Final and Intermediate subjects including Strategic Cost Management, Direct Tax Laws, and Financial Accounting with regular mock tests."
  },
  {
    question: "Who is the best faculty for CA, CS, and CMA corporate law and taxation in Kolkata?",
    answer: "Prof. Sudhir Rai is highly rated in Kolkata with 20+ years of dedicated teaching experience. He personally teaches core scoring subjects across CA, CS, and CMA through conceptual clarity, memory formulas, and daily random class questions."
  },
  {
    question: "What are the batch timings for offline CA Foundation and CS Executive coaching at Tollygunge centre?",
    answer: "At the Tollygunge Centre, offline classroom batches operate Monday to Saturday from 7:00 AM to 8:00 PM and Sundays from 9:00 AM to 1:00 PM, offering both morning and evening slots suited for college and professional students."
  },
  {
    question: "How do I enroll in upcoming CA, CS, or CMA batches at Sudhir Rai Classes?",
    answer: "You can enroll by contacting us via WhatsApp or Phone at +91 84206 92258, or by visiting any of our offline centres at Girish Park, Dum Dum, or Tollygunge for personalized counseling and batch selection."
  },
  {
    question: "Do you offer coaching for global finance courses like CFA, CPA, or ACCA in Kolkata?",
    answer: "Yes, we provide foundational conceptual coaching and strategy guidance for global finance credentials including CFA, CPA (US), ACCA (UK), CMA (US), and FRM."
  }
]

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Answer Hub (AEO)</span>
          <h2 className="section-title">
            Frequently Asked <span className="accent">Questions (FAQ)</span>
          </h2>
          <p className="section-subtitle">
            Get instant answers regarding CA, CS, and CMA classes, batch timings, locations, and admission guidelines in Kolkata.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className={`faq-item ${openIdx === idx ? 'open' : ''}`}>
              <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                <span className="faq-q-text">❓ {faq.question}</span>
                <span className="faq-icon">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT & ADMISSION ENQUIRY SECTION ─────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    course: 'CA Coaching (Foundation/Inter/Final)',
    centre: 'Girish Park Centre',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hello Sudhir Rai Classes!%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Course Interested:* ${encodeURIComponent(form.course)}%0A*Preferred Centre:* ${encodeURIComponent(form.centre)}%0A*Message:* ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/918420692258?text=${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-info-block">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Start Your Journey with <span className="accent">Sudhir Rai Classes</span>
          </h2>
          <p className="contact-desc">
            Have questions about upcoming batch timings, course fees, or syllabus coverage? Reach out directly via WhatsApp or phone.
          </p>

          <div className="contact-detail-items">
            <div className="cd-row">
              <span className="cd-icon">📞</span>
              <div>
                <strong>Call / WhatsApp Helpline:</strong>
                <div>+91 84206 92258</div>
              </div>
            </div>

            <div className="cd-row">
              <span className="cd-icon">✉️</span>
              <div>
                <strong>Email Address:</strong>
                <div>sudhirroyclasses@gmail.com</div>
              </div>
            </div>

            <div className="cd-row">
              <span className="cd-icon">📍</span>
              <div>
                <strong>Main Head Centre:</strong>
                <div>3rd Floor, 79/1B, Vivekananda Road, Girish Park, Kolkata - 700007</div>
              </div>
            </div>

            <div className="cd-row">
              <span className="cd-icon">⏰</span>
              <div>
                <strong>Classroom Hours:</strong>
                <div>Mon – Sat: 7:00 AM – 8:00 PM | Sun: 9:00 AM – 1:00 PM</div>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/918420692258?text=Hello%20Sudhir%20Rai%20Classes,%20I%20want%20to%20enquire%20about%20admissions."
            target="_blank"
            rel="noreferrer"
            className="btn-wa-full"
          >
            💬 Direct Chat with Admissions Team on WhatsApp
          </a>
        </div>

        <div className="contact-form-block">
          <div className="form-card-glass">
            <h3 className="form-heading">Send Admission Enquiry</h3>
            <p className="form-subheading">Fill out your details for instant WhatsApp counseling.</p>

            {submitted && (
              <div className="form-alert-success">
                ✅ Redirecting to WhatsApp… Thank you for contacting Sudhir Rai Classes!
              </div>
            )}

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-group">
                <label htmlFor="enquiry-name">Full Name *</label>
                <input
                  id="enquiry-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  aria-label="Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-phone">WhatsApp Number *</label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  aria-label="WhatsApp Number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-course">Course Interested In *</label>
                <select
                  id="enquiry-course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  aria-label="Course Interested In"
                  required
                >
                  <option value="CA Coaching (Foundation/Inter/Final)">CA Coaching (Foundation / Inter / Final)</option>
                  <option value="CS Coaching (Executive/Professional)">CS Coaching (Executive / Professional)</option>
                  <option value="CMA Coaching (Foundation/Inter/Final)">CMA Coaching (Foundation / Inter / Final)</option>
                  <option value="International Courses (CFA/CPA/ACCA/CMA US)">International Courses (CFA / CPA / ACCA / CMA US)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-centre">Preferred Kolkata Centre *</label>
                <select
                  id="enquiry-centre"
                  name="centre"
                  value={form.centre}
                  onChange={handleChange}
                  aria-label="Preferred Kolkata Centre"
                  required
                >
                  <option value="Girish Park Centre">Girish Park Centre (Vivekananda Road)</option>
                  <option value="Dum Dum Centre">Dum Dum Centre</option>
                  <option value="Tollygunge Centre">Tollygunge Centre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-message">Additional Message / Query</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ask about batch timings, fees, or demo classes..."
                  aria-label="Additional Message or Query"
                />
              </div>

              <button type="submit" className="btn-submit-enquiry">
                Submit Enquiry via WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top-grid">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src="/images/logo.jpeg" alt="Sudhir Rai Classes Logo" />
            <span className="fl-name">Sudhir Rai Classes</span>
          </div>
          <p className="footer-desc">
            Kolkata's premier commerce coaching institute since 2006. Specializing in CA, CS, and CMA offline classroom coaching under the personal mentorship of Prof. Sudhir Rai.
          </p>
          <div className="footer-socials">
            <a href="https://wa.me/918420692258" target="_blank" rel="noreferrer" title="WhatsApp">💬 WhatsApp</a>
            <a href="https://sudhirraiclasses.in" title="Website">🌐 Official Site</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Navigation</h4>
          <ul className="footer-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">CA CS CMA Courses</a></li>
            <li><a href="#why-us">Why Sudhir Rai Classes</a></li>
            <li><a href="#centres">Centres & Locations</a></li>
            <li><a href="#geo-hub">Kolkata College & Transit Hub</a></li>
            <li><a href="#blogs">AEO Guides & Blogs</a></li>
            <li><a href="#faq">AEO Knowledge Base</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Kolkata Centres Hubs</h4>
          <ul className="footer-menu">
            <li><a href="/centres/girish-park-north-kolkata.html">📍 Girish Park Head Centre</a></li>
            <li><a href="/centres/dum-dum-station.html">📍 Dum Dum Station Centre</a></li>
            <li><a href="/centres/tollygunge-south-kolkata.html">📍 Tollygunge South Hub</a></li>
            <li>⏰ Mon – Sat: 7 AM – 8 PM</li>
            <li>📞 +91 84206 92258</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Long-Tail SEO Searches</h4>
          <p className="seo-tags-paragraph">
            best CA coaching in Girish Park Kolkata | CA Inter taxation classes Dum Dum | CS Executive company law classes Tollygunge | CMA Final costing tuition Kolkata | Prof Sudhir Rai commerce classes contact | CA Foundation coaching near Girish Park metro | CS Professional corporate law classes Kolkata.
          </p>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container fbb-inner">
          <p>© {new Date().getFullYear()} Sudhir Rai Classes. All Rights Reserved. CA • CS • CMA Coaching Kolkata.</p>
          <p>
            Designed & Developed by{' '}
            <a href="https://theroyalsvalley.in/" target="_blank" rel="noreferrer">
              The Royals Valley
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── FLOATING WHATSAPP BUTTON ────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918420692258?text=Hello%20Sudhir%20Rai%20Classes,%20I%20want%20to%20enquire%20about%20CA%2FCS%2FCMA%20admissions."
      target="_blank"
      rel="noreferrer"
      className="floating-wa-btn"
      title="Chat on WhatsApp with Sudhir Rai Classes"
      aria-label="Chat on WhatsApp"
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="wa-float-badge">Admissions Active</span>
    </a>
  )
}

// ─── MAIN APP ENTRY ───────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app-main-wrapper">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <CoursesSection />
        <WhyUsSection />
        <SyllabusMatrixSection />
        <CentresSection />
        <KolkataGeoHubSection />
        <BlogsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
