import type { Specimen, Stage } from './types'

const stages: Stage[] = ['Collection', 'Received', 'Processing', 'Slide Preparation', 'Review', 'Reporting']

const baseEvents = (assignee: string, current: Stage) => stages.map((title, index) => ({
  time: ['08:12 AM', '09:04 AM', '10:18 AM', '12:32 PM', '02:05 PM', '—'][index],
  title,
  person: index < 2 ? 'A. Nair, Technician' : assignee,
  note: index === 0 ? 'Specimen collected and labelled at source.' : index === 1 ? 'Accessioned; barcode and patient ID verified.' : index === 4 ? 'Queued for pathologist review.' : 'Workflow event recorded in laboratory system.',
  status: index < stages.indexOf(current) ? 'complete' : index === stages.indexOf(current) ? 'current' : 'pending',
})) as Specimen['events']

export const specimens: Specimen[] = [
  { id: 'PATH-004821', patientId: 'PT-220184', patient: 'Maya R.', type: 'Breast biopsy', priority: 'Urgent', stage: 'Review', status: 'At risk', collected: 'Today, 08:12', assignee: 'Dr. Kavya Mehta', eta: 'Today, 3:45 PM', risk: 'High', diagnosis: 'Invasive ductal carcinoma — pending final review', slides: [
    { id: 'SL-4821-A1', block: 'Block A', stain: 'H&E', status: 'In review', qc: 'Warning', score: 87, flags: ['Mild blur at 20×', 'Staining inconsistency'] },
    { id: 'SL-4821-A2', block: 'Block A', stain: 'ER IHC', status: 'Queued', qc: 'Pass', score: 96, flags: [] },
    { id: 'SL-4821-B1', block: 'Block B', stain: 'PR IHC', status: 'Queued', qc: 'Pass', score: 94, flags: [] },
  ], events: baseEvents('Dr. Kavya Mehta', 'Review') },
  { id: 'PATH-004820', patientId: 'PT-220179', patient: 'Rohan S.', type: 'Gastric biopsy', priority: 'Routine', stage: 'Processing', status: 'On track', collected: 'Today, 07:48', assignee: 'M. Shah, Histotech', eta: 'Today, 5:20 PM', risk: 'Low', diagnosis: 'Chronic gastritis — preliminary', slides: [{ id: 'SL-4820-A1', block: 'Block A', stain: 'H&E', status: 'Processing', qc: 'Pass', score: 98, flags: [] }], events: baseEvents('M. Shah, Histotech', 'Processing') },
  { id: 'PATH-004819', patientId: 'PT-220172', patient: 'Ishita D.', type: 'Cervical biopsy', priority: 'STAT', stage: 'Slide Preparation', status: 'At risk', collected: 'Today, 07:35', assignee: 'N. Thomas, Histotech', eta: 'Today, 2:30 PM', risk: 'Medium', diagnosis: 'Pending section review', slides: [{ id: 'SL-4819-A1', block: 'Block A', stain: 'H&E', status: 'Cutting', qc: 'Warning', score: 89, flags: ['Edge artifact detected'] }], events: baseEvents('N. Thomas, Histotech', 'Slide Preparation') },
  { id: 'PATH-004818', patientId: 'PT-220164', patient: 'Arjun P.', type: 'Skin excision', priority: 'Routine', stage: 'Reporting', status: 'On track', collected: 'Yesterday, 04:12', assignee: 'Dr. Sameer Rao', eta: 'Today, 1:15 PM', risk: 'Low', diagnosis: 'Seborrheic keratosis', slides: [{ id: 'SL-4818-A1', block: 'Block A', stain: 'H&E', status: 'Reviewed', qc: 'Pass', score: 99, flags: [] }], events: baseEvents('Dr. Sameer Rao', 'Reporting') },
  { id: 'PATH-004817', patientId: 'PT-220158', patient: 'Neha K.', type: 'Thyroid FNA cell block', priority: 'Urgent', stage: 'Received', status: 'Delayed', collected: 'Today, 06:58', assignee: 'R. Singh, Accessioning', eta: 'Today, 6:00 PM', risk: 'High', diagnosis: 'Pending processing', slides: [], events: baseEvents('R. Singh, Accessioning', 'Received') },
  { id: 'PATH-004816', patientId: 'PT-220151', patient: 'Kabir A.', type: 'Colon biopsy', priority: 'Routine', stage: 'Collection', status: 'On track', collected: 'Today, 10:15', assignee: 'Unassigned', eta: 'Tomorrow, 10:00 AM', risk: 'Low', diagnosis: 'Pending accessioning', slides: [], events: baseEvents('Unassigned', 'Collection') },
]

export const workflow = [
  { stage: 'Collection', count: 12, backlog: 2, tone: 'slate' },
  { stage: 'Received', count: 18, backlog: 4, tone: 'blue' },
  { stage: 'Processing', count: 31, backlog: 7, tone: 'violet' },
  { stage: 'Slide Prep', count: 22, backlog: 5, tone: 'amber' },
  { stage: 'Review', count: 27, backlog: 12, tone: 'rose' },
  { stage: 'Reporting', count: 16, backlog: 3, tone: 'teal' },
]
