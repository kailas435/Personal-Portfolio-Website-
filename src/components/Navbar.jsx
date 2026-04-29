const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Certifications', 'certifications'],
  ['Blog', 'blog'],
  ['Contact', 'contact']
];

import { profile } from '../data/portfolioData';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-lg font-bold text-brand-500">{profile.fullName}</a>
        <ul className="hidden gap-5 text-sm md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a className="text-slate-300 transition hover:text-brand-500" href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
