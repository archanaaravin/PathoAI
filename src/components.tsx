import type { ReactNode } from 'react'
import type { QCStatus, Priority, ReportStatus, Specimen } from './types'

export const Icon = ({ name, size = 18 }: { name: string; size?: number }) => {
  const paths: Record<string, ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    flask: <><path d="M9 3h6M10 3v6l-5.4 9.1A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.7-2.9L14 9V3"/><path d="M8 15h8"/></>,
    flow: <><circle cx="5" cy="6" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="18" r="2"/><path d="m7 7 10 4M7 17l10-4"/></>,
    slides: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></>,
    chart: <><path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 5-6"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    search: <><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    spark: <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    alert: <><path d="M10.3 3.9 2.5 18a2 2 0 0 0 1.8 3h15.4a2 2 0 0 0 1.8-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{paths[name]}</svg>
}

export const StatusBadge = ({ value }: { value: string | Priority | QCStatus | ReportStatus }) => {
  const slug = value.toLowerCase().replaceAll(' ', '-')
  return <span className={`badge badge-${slug}`}><i />{value}</span>
}

export const KpiCard = ({ label, value, detail, trend, tone = 'blue' }: { label: string; value: string; detail: string; trend?: string; tone?: string }) => (
  <article className={`kpi-card ${tone}`}>
    <p>{label}</p><div className="kpi-value">{value}{trend && <span>{trend}</span>}</div><small>{detail}</small>
  </article>
)

export const Panel = ({ children, className = '' }: { children: ReactNode; className?: string }) => <section className={`panel ${className}`}>{children}</section>

export const Avatar = ({ name, small = false }: { name: string; small?: boolean }) => <span className={`avatar ${small ? 'avatar-small' : ''}`}>{name.split(' ').map(x => x[0]).slice(0, 2).join('')}</span>

export const CaseRow = ({ specimen, onOpen }: { specimen: Specimen; onOpen: (id: string) => void }) => (
  <button className="case-row" onClick={() => onOpen(specimen.id)}>
    <span><strong>{specimen.id}</strong><small>{specimen.type}</small></span>
    <span className="row-stage">{specimen.stage}<small>{specimen.assignee}</small></span>
    <StatusBadge value={specimen.status} />
    <Icon name="chevron" size={16} />
  </button>
)
