export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-2 max-w-3xl text-slate-300">{subtitle}</p>}
    </div>
  );
}
