import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SectionTitle from './components/SectionTitle';
import {
  achievements,
  blogPosts,
  certifications,
  currentLearning,
  journey,
  profile,
  projects,
  skills,
  whyDataScience
} from './data/portfolioData';

function Home() {
  return (
    <>
      <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-brand-500">Hello, I am</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-white md:text-5xl">{profile.fullName}</h1>
          <p className="mt-4 text-xl text-slate-200">{profile.role}</p>
          <p className="mt-4 max-w-xl text-slate-300">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">View Projects</a>
            <a href="#contact" className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-500 hover:text-brand-500">Contact Me</a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <p className="text-sm text-slate-400">Focused on applying AI and analytics to practical product and business challenges.</p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="About" title="About Me" subtitle="A profile overview and learning story." />
        <div className="grid gap-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:grid-cols-[220px_1fr]">
          <img src={profile.imageUrl} alt={profile.fullName} className="h-52 w-52 rounded-full object-cover" />
          <div>
            <h3 className="text-2xl font-bold">{profile.fullName}</h3>
            <p className="mt-3 text-slate-300">{profile.shortBio}</p>
            <div className="mt-5 grid gap-2 text-sm text-slate-300">
              <p><span className="font-semibold text-slate-100">Location:</span> {profile.location}</p>
              <p><span className="font-semibold text-slate-100">Education:</span> {profile.education}</p>
              <p><span className="font-semibold text-slate-100">Domain:</span> {profile.domain}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h4 className="text-lg font-semibold">Journey</h4>
            <p className="mt-2 text-sm text-slate-300">{journey}</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h4 className="text-lg font-semibold">Why Data Science</h4>
            <p className="mt-2 text-sm text-slate-300">{whyDataScience}</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h4 className="text-lg font-semibold">Current Learning</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-300">
              {currentLearning.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="Skills" title="Technical Skillset" />
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(skills).map(([category, list]) => (
            <article key={category} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h4 className="text-lg font-semibold">{category}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {list.map((skill) => <span key={skill} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="Projects" title="Featured Data Science Projects" subtitle="End-to-end projects designed to solve real problems." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <details key={project.title} className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-brand-500">
              <summary className="cursor-pointer list-none">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{project.problem}</p>
              </summary>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p><strong>Dataset:</strong> {project.dataset}</p>
                <p><strong>Approach:</strong> {project.approach}</p>
                <p><strong>Model:</strong> {project.model}</p>
                <p><strong>Results:</strong> {project.results}</p>
                <p><strong>Key Learnings:</strong> {project.learnings}</p>
                <a className="inline-block pt-2 text-brand-500 hover:text-brand-600" href={project.github} target="_blank" rel="noreferrer">GitHub Repository ↗</a>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="Courses" title="Certifications & Courses" />
        <div className="space-y-4">
          {certifications.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-brand-500">{item.platform}</p>
              <p className="mt-2 text-sm text-slate-300">{item.takeaway}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="Achievements" title="Highlights" />
        <ul className="grid gap-3 md:grid-cols-3">
          {achievements.map((item) => <li key={item} className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300">{item}</li>)}
        </ul>
      </section>

      <section id="blog" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="Blog" title="Learning Notes" />
        <div className="grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h4 className="font-semibold">{post.title}</h4>
              <p className="mt-2 text-sm text-slate-300">{post.summary}</p>
              <a href={post.link} className="mt-3 inline-block text-sm text-brand-500 hover:text-brand-600" target="_blank" rel="noreferrer">Read more ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="Contact" title="Let’s Connect" subtitle="Open to internships, collaborations, and research opportunities." />
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-3 text-sm text-slate-300">
            <a href={`mailto:${profile.email}`} className="hover:text-brand-500">Email: {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-500">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-brand-500">GitHub</a>
          </div>
          <form className="mt-6 grid gap-3 md:grid-cols-2">
            <input className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Your name" />
            <input className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Your email" type="email" />
            <textarea className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm" rows="4" placeholder="Message" />
            <button type="button" className="w-fit rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold hover:bg-brand-600">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
