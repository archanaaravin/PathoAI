export type Priority = 'Routine' | 'Urgent' | 'STAT'
export type Stage = 'Collection' | 'Received' | 'Processing' | 'Slide Preparation' | 'Review' | 'Reporting' | 'Complete'
export type QCStatus = 'Pass' | 'Warning' | 'Requires Review'
export type ReportStatus = 'Draft' | 'Under Review' | 'Approved'

export interface Slide {
  id: string
  block: string
  stain: string
  status: string
  qc: QCStatus
  score: number
  flags: string[]
}

export interface Event {
  time: string
  title: string
  person: string
  note: string
  status: 'complete' | 'current' | 'pending'
}

export interface Specimen {
  id: string
  patientId: string
  patient: string
  type: string
  priority: Priority
  stage: Stage
  status: 'On track' | 'At risk' | 'Delayed' | 'Complete'
  collected: string
  assignee: string
  eta: string
  risk: 'Low' | 'Medium' | 'High'
  diagnosis: string
  slides: Slide[]
  events: Event[]
}
