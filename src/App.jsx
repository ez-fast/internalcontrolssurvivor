import React, { useMemo, useState } from 'react';

// =========================================
// INTERNAL CONTROLS SURVIVOR — PROSCOPEO
// =========================================

export default function InternalControlsSurvivor() {
const sound = {
click: '[https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3](https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3)',
success: '[https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3](https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3)',
fail: '[https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3](https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3)',
};

const play = (type) => {
const audio = new Audio(sound[type]);
audio.volume = 0.3;
audio.play().catch(() => {});
};

const categoryComic = {
PROCUREMENT: '/assets/comics/executive-chaos.png',
PAYROLL: '/assets/comics/payroll-disaster.png',
'IT ACCESS': '/assets/comics/intern-admin.png',
TRAVEL: '/assets/comics/terrified-office-dog.png',
GRANTS: '/assets/comics/executive-chaos.png',
FINANCIAL: '/assets/comics/payroll-disaster.png',
PROPERTY: '/assets/comics/intern-admin.png',
BUDGET: '/assets/comics/executive-chaos.png',
CYBER: '/assets/comics/intern-admin.png',
REPORTING: '/assets/comics/payroll-disaster.png',
};

const shuffle = (array) => {
const copy = [...array];
for (let i = copy.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[copy[i], copy[j]] = [copy[j], copy[i]];
}
return copy;
};

const makeScenario = ({ title, agency, badge, story, executive, dog, question, choices }) => ({
id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
title,
agency,
badge,
comic: categoryComic[badge] || '/assets/comics/executive-chaos.png',
story,
spouse: executive,
dog,
question,
choices,
});

const scenarios = useMemo(() => [
makeScenario({
title: 'Internal Controls Survivor — Procurement Chaos',
agency: 'Department of Extremely Important Purchasing',
badge: 'PROCUREMENT',
story: `
A contracting officer approves a $4.2 million invoice.

Three minutes later someone notices:
• the vendor name is misspelled
• the invoice already appeared last month
• the approving official is currently on vacation in Aruba

Meanwhile, your Deputy CFO quietly whispers:
"Please tell me someone reviewed this."
`,
executive: 'The fictional agency director begins stress-eating trail mix directly from the container.',
dog: 'The office support dog senses audit risk and leaves the room immediately.',
question: 'Which control would BEST reduce this risk?',
choices: [
{ text: 'Independent invoice review and 3-way match before payment approval', correct: true, assertion: 'Accuracy / Occurrence' },
{ text: 'Allow approvers to verbally certify invoices', correct: false, assertion: 'No meaningful control activity' },
{ text: 'Increase motivational posters in Accounts Payable', correct: false, assertion: 'Absolutely not COSO compliant' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Payroll Nightmare',
  agency: 'Bureau of Administrative Turbulence',
  badge: 'PAYROLL',
  story: `
```

An employee appears on payroll records despite retiring 14 months ago.

Oddly, they also received:
• three retention bonuses
• two travel reimbursements
• access to the building gym

Nobody is entirely sure who owns payroll reconciliation responsibilities.
`,
executive: 'The HR Director stares silently into the distance like a scary flashback just started.',
dog: 'The office dog refuses direct eye contact with Accounting.',
question: 'Which assertion is MOST at risk?',
choices: [
{ text: 'Presentation', correct: false, assertion: 'Incorrect assertion' },
{ text: 'Occurrence / Validity', correct: true, assertion: 'Occurrence' },
{ text: 'Color coordination', correct: false, assertion: 'Not recognized by GAO' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Access Control Disaster',
  agency: 'Federal Office of Questionable Technology Decisions',
  badge: 'IT ACCESS',
  story: `
```

An intern accidentally receives administrator access to a financial reporting system.

Nobody notices for six weeks.

The intern mainly uses the power responsibly except for renaming several production servers after Marvel characters.
`,
executive: 'The CIO begins using phrases like “career limiting event.”',
dog: 'The office dog barks every time someone says “shared password.”',
question: 'What is the BEST preventive control?',
choices: [
{ text: 'Hope nobody notices', correct: false, assertion: 'Weak control environment' },
{ text: 'Give everyone admin access equally', correct: false, assertion: 'Chaos framework' },
{ text: 'Role-based access approvals with quarterly reviews', correct: true, assertion: 'Authorization' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Travel Voucher Incident',
  agency: 'National Administration of Reimbursable Activities',
  badge: 'TRAVEL',
  story: `
```

A travel voucher claims:
• $942 for airport snacks
• $611 for taxi rides
• one receipt simply labeled “emotional support burrito”

The approving official signs everything in under seven seconds.
`,
executive: 'The finance office collectively enters the bargaining stage of grief.',
dog: 'The office dog hears the word reimbursement and hides under a desk.',
question: 'Which control activity is MOST appropriate?',
choices: [
{ text: 'Approve faster to improve morale', correct: false, assertion: 'Material weakness' },
{ text: 'Detailed supervisory review of supporting documentation', correct: true, assertion: 'Accuracy' },
{ text: 'Replace receipts with handwritten promises', correct: false, assertion: 'Catastrophically noncompliant' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Phantom Vendor',
  agency: 'Office of Strategic Snack Procurement',
  badge: 'PROCUREMENT',
  story: `
```

A vendor called "Strategic Excellence Partners LLC" receives 11 payments.

Nobody remembers selecting the vendor.

The address matches an employee’s cousin’s garage.
`,
executive: 'The Procurement Director whispers, “This feels like a finding with extra steps.”',
dog: 'The office dog growls at the vendor master file.',
question: 'Which control is MOST relevant?',
choices: [
{ text: 'Independent vendor creation review and approval', correct: true, assertion: 'Occurrence / Authorization' },
{ text: 'Let vendors self-certify legitimacy', correct: false, assertion: 'Fraud risk' },
{ text: 'Rename the vendor to sound more official', correct: false, assertion: 'Still a bad idea' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Duplicate Payment Rodeo',
  agency: 'Bureau of Very Busy Accounts Payable',
  badge: 'PROCUREMENT',
  story: `
```

Two invoices with slightly different invoice numbers are paid for the same service.

One says INV-1008.
The other says INV-1008-FINAL-REAL.

The vendor says both are probably fine.
`,
executive: 'The CFO begins rubbing their temples with professional intensity.',
dog: 'The office dog refuses to fetch duplicate invoices.',
question: 'What control would best prevent this?',
choices: [
{ text: 'Duplicate invoice detection before payment release', correct: true, assertion: 'Accuracy / Occurrence' },
{ text: 'Pay both invoices to maintain vendor happiness', correct: false, assertion: 'Overpayment risk' },
{ text: 'Sort invoices by vibes', correct: false, assertion: 'No control' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Year-End Spending Sprint',
  agency: 'Department of Last-Minute Obligations',
  badge: 'BUDGET',
  story: `
```

It is September 29.

A program office submits 47 purchase requests labeled:
“URGENT OR FUNDS EXPIRE.”

One item is a tactical fog machine.
`,
executive: 'The Budget Officer says, “Please do not make me explain this to anyone.”',
dog: 'The office dog hides behind the continuing resolution binder.',
question: 'Which control best addresses this?',
choices: [
{ text: 'Pre-obligation review for bona fide need and funding availability', correct: true, assertion: 'Authorization / Cutoff' },
{ text: 'Approve everything because it is year-end', correct: false, assertion: 'Budget execution risk' },
{ text: 'Create a new object class called “miscellaneous panic”', correct: false, assertion: 'Nope' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unsupported Journal Entry',
  agency: 'National Spreadsheet Administration',
  badge: 'FINANCIAL',
  story: `
```

A $19.8 million manual journal entry is posted at 11:58 PM.

The support file is named:
“adjustment_final_final_REALLY_final.xlsx”

The preparer is on leave.
`,
executive: 'The Controller silently closes their laptop and reopens it, hoping reality changes.',
dog: 'The office dog stares at the spreadsheet like it is haunted.',
question: 'What is the best control?',
choices: [
{ text: 'Independent review and approval of manual journal entries with support', correct: true, assertion: 'Accuracy / Completeness' },
{ text: 'Accept late-night entries as a tradition', correct: false, assertion: 'Control failure' },
{ text: 'Print the spreadsheet and hope it becomes evidence', correct: false, assertion: 'Insufficient documentation' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Stale Reconciliation',
  agency: 'Office of Perpetual Backlogs',
  badge: 'REPORTING',
  story: `
```

The cash reconciliation has not been completed in eight months.

The analyst says:
“I was waiting for the numbers to settle emotionally.”
`,
executive: 'The Deputy CFO asks whether “emotionally settled” is in the policy manual.',
dog: 'The office dog begins gently whining near the bank statement.',
question: 'Which control is missing?',
choices: [
{ text: 'Monthly reconciliations reviewed by an independent supervisor', correct: true, assertion: 'Completeness / Accuracy' },
{ text: 'Annual reconciliation celebration party', correct: false, assertion: 'Too late' },
{ text: 'Let unreconciled differences mature naturally', correct: false, assertion: 'Terrible' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Ghost Employee',
  agency: 'Human Capital Harmony Bureau',
  badge: 'PAYROLL',
  story: `
```

A payroll report includes an employee no one has seen since 2021.

Their timecard is still approved every pay period.

Their supervisor says:
“I thought they were remote.”
`,
executive: 'HR quietly removes “trust but verify” from the wall poster.',
dog: 'The office dog sniffs the org chart suspiciously.',
question: 'What control is most effective?',
choices: [
{ text: 'Periodic payroll-to-HR roster reconciliation', correct: true, assertion: 'Occurrence' },
{ text: 'Assume everyone is remote now', correct: false, assertion: 'Invalid payroll' },
{ text: 'Send a calendar invite and see if they accept', correct: false, assertion: 'Not sufficient' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Excess Overtime',
  agency: 'Federal Bureau of Tired Employees',
  badge: 'PAYROLL',
  story: `
```

One employee records 42 hours of overtime every week.

Their timesheet comments say:
“vibes were intense.”

Nobody has reviewed overtime trends in months.
`,
executive: 'The Payroll Manager says, “I am choosing not to blink.”',
dog: 'The office dog falls asleep on the overtime policy.',
question: 'Which control is best?',
choices: [
{ text: 'Supervisory overtime approval with trend review', correct: true, assertion: 'Accuracy / Authorization' },
{ text: 'Approve overtime because morale matters', correct: false, assertion: 'Unsupported cost' },
{ text: 'Rename overtime as “enthusiasm hours”', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Terminated User Access',
  agency: 'Federal Office of Password Archaeology',
  badge: 'IT ACCESS',
  story: `
```

A terminated employee still has active access to the financial system.

They left six months ago.

Their account recently logged in from a beach resort.
`,
executive: 'The CIO says, “That is suboptimal,” which everyone understands as panic.',
dog: 'The office dog barks at the access review report.',
question: 'What control should have prevented this?',
choices: [
{ text: 'Timely termination access removal tied to HR separation events', correct: true, assertion: 'Authorization' },
{ text: 'Wait for the former employee to be polite', correct: false, assertion: 'Unauthorized access' },
{ text: 'Change the wallpaper and move on', correct: false, assertion: 'No control' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Shared Password Club',
  agency: 'Department of Collaborative Login Practices',
  badge: 'IT ACCESS',
  story: `
```

The finance team uses one shared account called FINANCE_MASTER.

The password is taped under a keyboard.

The keyboard is labeled “password keyboard.”
`,
executive: 'The Security Officer makes a sound normally associated with deflating balloons.',
dog: 'The office dog refuses to sit near the keyboard.',
question: 'Which control is most appropriate?',
choices: [
{ text: 'Unique user IDs with access monitoring and password controls', correct: true, assertion: 'Authorization / Accountability' },
{ text: 'Use a stronger sticky note', correct: false, assertion: 'Still bad' },
{ text: 'Move the password under a different keyboard', correct: false, assertion: 'No control' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Grant Drawdown Panic',
  agency: 'Bureau of Grant Optimization',
  badge: 'GRANTS',
  story: `
```

A recipient draws down $2.7 million two days before quarter-end.

Support includes:
• one invoice
• three screenshots
• a sticky note saying “approved probably”
`,
executive: 'The Grants Director whispers, “Please let this be a drill.”',
dog: 'The office dog hides behind the grant agreement.',
question: 'Which control is best?',
choices: [
{ text: 'Drawdown review against approved budget and support before reimbursement', correct: true, assertion: 'Accuracy / Allowability' },
{ text: 'Approve because the recipient seems confident', correct: false, assertion: 'Unsupported costs' },
{ text: 'Replace support with a positive attitude', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Subrecipient Monitoring Mystery',
  agency: 'Office of Helpful Pass-Through Funding',
  badge: 'GRANTS',
  story: `
```

A subrecipient has not submitted monitoring reports for a year.

They continue receiving funds.

Their last email said:
“updates coming soon-ish.”
`,
executive: 'The Program Manager asks whether “soon-ish” is legally binding.',
dog: 'The office dog paws at the monitoring checklist.',
question: 'What control is needed?',
choices: [
{ text: 'Documented subrecipient monitoring and follow-up procedures', correct: true, assertion: 'Compliance / Monitoring' },
{ text: 'Assume no news is good news', correct: false, assertion: 'Monitoring failure' },
{ text: 'Send a thumbs-up emoji', correct: false, assertion: 'Not sufficient' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Missing Equipment',
  agency: 'National Office of Expensive Laptops',
  badge: 'PROPERTY',
  story: `
```

Inventory records show 37 laptops assigned to employees who retired years ago.

One laptop is listed as:
“possibly in conference room, emotionally.”
`,
executive: 'The Property Officer briefly considers moving to a cabin.',
dog: 'The office dog sits on the asset inventory report.',
question: 'What assertion is most impacted?',
choices: [
{ text: 'Existence', correct: true, assertion: 'Existence' },
{ text: 'Cutoff', correct: false, assertion: 'Less relevant' },
{ text: 'Graphic design', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Warehouse Surprise',
  agency: 'Federal Storage and Mystery Boxes Agency',
  badge: 'PROPERTY',
  story: `
```

A warehouse count finds 500 extra tablets not recorded in the asset system.

Nobody knows who bought them.

The receiving log says:
“big box day.”
`,
executive: 'The Warehouse Manager suddenly becomes very interested in retirement eligibility.',
dog: 'The office dog sniffs the mystery tablets and sneezes.',
question: 'Which control would address this?',
choices: [
{ text: 'Receiving controls with timely asset recording and physical inventory reconciliation', correct: true, assertion: 'Completeness / Existence' },
{ text: 'Keep extra assets as office surprises', correct: false, assertion: 'Incomplete records' },
{ text: 'Hide them behind toner', correct: false, assertion: 'Terrible idea' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Phishing Payment',
  agency: 'Cyber Bureau of Almost Secure Finance',
  badge: 'CYBER',
  story: `
```

The CFO receives an email that appears to be from the agency head.

It requests an urgent wire transfer.

The email address is:
[agencyheaddefinitelyreal@freemail.example](mailto:agencyheaddefinitelyreal@freemail.example)
`,
executive: 'The CFO says, “I had a bad feeling when it used six exclamation points.”',
dog: 'The office dog barks at the phishing email.',
question: 'Which control is best?',
choices: [
{ text: 'Out-of-band verification for payment changes and wire requests', correct: true, assertion: 'Authorization / Occurrence' },
{ text: 'Reply “are you real?”', correct: false, assertion: 'Weak verification' },
{ text: 'Approve because urgency equals authenticity', correct: false, assertion: 'Fraud risk' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Bank Account Change',
  agency: 'Office of Vendor Banking Adventures',
  badge: 'PROCUREMENT',
  story: `
```

A vendor emails new banking instructions.

The email has no letterhead.

The AP clerk updates the vendor record because the message says:
“please hurry.”
`,
executive: 'The Treasurer begins pacing in professionally measured circles.',
dog: 'The office dog chews gently on the fraud awareness brochure.',
question: 'What control is strongest?',
choices: [
{ text: 'Independent callback verification using known vendor contact information', correct: true, assertion: 'Authorization' },
{ text: 'Trust all emails with polite greetings', correct: false, assertion: 'Fraud risk' },
{ text: 'Update the account then check later', correct: false, assertion: 'Too late' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Cutoff Confusion',
  agency: 'Department of Fiscal Year Acrobatics',
  badge: 'REPORTING',
  story: `
```

Invoices for next year are recorded in the current year.

The analyst says:
“We were just getting ahead.”

The auditor quietly circles the word cutoff.
`,
executive: 'The Controller says, “Please stop being ahead incorrectly.”',
dog: 'The office dog lies down beside the accounting standards.',
question: 'Which assertion is most impacted?',
choices: [
{ text: 'Cutoff', correct: true, assertion: 'Cutoff' },
{ text: 'Existence', correct: false, assertion: 'Less direct' },
{ text: 'Office morale', correct: false, assertion: 'Not an assertion' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Accrual Amnesia',
  agency: 'Federal Bureau of Forgotten Obligations',
  badge: 'FINANCIAL',
  story: `
```

Services were received before year-end.

No accrual was recorded.

The program office says:
“We remembered emotionally, not financially.”
`,
executive: 'The Accounting Chief stares into the middle distance.',
dog: 'The office dog nudges the unrecorded invoice.',
question: 'Which assertion is most at risk?',
choices: [
{ text: 'Completeness', correct: true, assertion: 'Completeness' },
{ text: 'Rights and obligations', correct: false, assertion: 'Not primary' },
{ text: 'Decorative accuracy', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unauthorized Purchase Card',
  agency: 'Agency for Tiny Emergency Purchases',
  badge: 'PROCUREMENT',
  story: `
```

A purchase card statement includes:
• gaming chairs
• novelty mugs
• 14 subscriptions to “Leadership Eagle Monthly”

The cardholder says it was for team building.
`,
executive: 'The Purchase Card Coordinator removes their glasses dramatically.',
dog: 'The office dog circles the statement twice and leaves.',
question: 'Which control is most appropriate?',
choices: [
{ text: 'Monthly purchase card review with receipts and approving official certification', correct: true, assertion: 'Accuracy / Authorization' },
{ text: 'Assume cardholders know their truth', correct: false, assertion: 'Unsupported spending' },
{ text: 'Classify everything as morale', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Missing Contract Approval',
  agency: 'Federal Office of Verbal Authorization',
  badge: 'PROCUREMENT',
  story: `
```

A program office begins work with a contractor before contract approval.

The justification says:
“Leadership nodded in a hallway.”
`,
executive: 'The Contracting Officer develops a thousand-yard stare.',
dog: 'The office dog refuses to enter the acquisition office.',
question: 'What control is needed?',
choices: [
{ text: 'Documented contracting approval before work begins', correct: true, assertion: 'Authorization / Obligations' },
{ text: 'Treat hallway nods as binding authority', correct: false, assertion: 'Unauthorized commitment' },
{ text: 'Backdate everything neatly', correct: false, assertion: 'Absolutely not' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Budget Object Class Roulette',
  agency: 'Office of Creative Coding',
  badge: 'BUDGET',
  story: `
```

Training costs are coded as equipment.

Equipment is coded as travel.

Travel is coded as “miscellaneous destiny.”
`,
executive: 'The Budget Analyst whispers, “The chart of accounts deserved better.”',
dog: 'The office dog sits beside the wrong object class.',
question: 'Which control best addresses this?',
choices: [
{ text: 'Budgetary coding review before obligation and payment', correct: true, assertion: 'Classification / Accuracy' },
{ text: 'Let the accounting system discover itself', correct: false, assertion: 'Misclassification' },
{ text: 'Use one object class for everything', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Management Override',
  agency: 'Department of Executive Urgency',
  badge: 'FINANCIAL',
  story: `
```

A senior official directs staff to bypass normal approval workflows.

The email subject line says:
“Do not slow this down with controls.”
`,
executive: 'Everyone in Internal Control simultaneously feels a disturbance in the Force.',
dog: 'The office dog hides behind the ethics poster.',
question: 'What is the key risk?',
choices: [
{ text: 'Management override of controls', correct: true, assertion: 'Control Environment' },
{ text: 'Too much documentation', correct: false, assertion: 'No' },
{ text: 'Excessive efficiency', correct: false, assertion: 'Wrong direction' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — No Evidence Review',
  agency: 'Office of Invisible Documentation',
  badge: 'REPORTING',
  story: `
```

A reviewer says they reviewed the reconciliation.

There is no signature.
No timestamp.
No comments.
No evidence.

Just confidence.
`,
executive: 'The Audit Liaison says, “Confidence is not a workpaper.”',
dog: 'The office dog places a paw on the blank review field.',
question: 'What is missing?',
choices: [
{ text: 'Documented evidence of supervisory review', correct: true, assertion: 'Monitoring / Accuracy' },
{ text: 'A nicer font', correct: false, assertion: 'Not enough' },
{ text: 'A verbal “looks good”', correct: false, assertion: 'Insufficient evidence' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Spreadsheet Link Apocalypse',
  agency: 'National Spreadsheet Dependency Center',
  badge: 'REPORTING',
  story: `
```

A financial report depends on 19 linked spreadsheets.

One file is named:
“DO_NOT_DELETE_BUT_OLD.xlsx”

Someone deletes it.
`,
executive: 'The reporting team briefly considers communicating only through sighs.',
dog: 'The office dog barks at broken formulas.',
question: 'Which control is best?',
choices: [
{ text: 'Spreadsheet change control, version control, and review procedures', correct: true, assertion: 'Accuracy' },
{ text: 'Hope Excel forgives everyone', correct: false, assertion: 'Spreadsheet risk' },
{ text: 'Rename all files “final”', correct: false, assertion: 'Worse' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Inventory Count Surprise',
  agency: 'Bureau of Tangible Confusion',
  badge: 'PROPERTY',
  story: `
```

Physical inventory finds fewer items than recorded.

The custodian says:
“Some assets may have gone on a journey.”
`,
executive: 'The Property Director asks whether the journey was authorized.',
dog: 'The office dog sniffs the empty shelf.',
question: 'Which control matters most?',
choices: [
{ text: 'Periodic physical inventory counts reconciled to property records', correct: true, assertion: 'Existence' },
{ text: 'Assume assets are spiritually present', correct: false, assertion: 'Missing property' },
{ text: 'Stop counting to avoid surprises', correct: false, assertion: 'No control' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Improper Advance Payment',
  agency: 'Office of Premature Payments',
  badge: 'PROCUREMENT',
  story: `
```

A vendor receives payment before goods are delivered.

The receiving report says:
“anticipated receipt vibes strong.”
`,
executive: 'The AP Supervisor asks whether vibes are auditable.',
dog: 'The office dog refuses to approve the receiving report.',
question: 'Which control prevents this?',
choices: [
{ text: 'Match invoice to purchase order and receiving evidence before payment', correct: true, assertion: 'Occurrence / Accuracy' },
{ text: 'Pay first and manifest delivery later', correct: false, assertion: 'Improper payment' },
{ text: 'Use the vendor’s optimism as support', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unsupported Cost Allocation',
  agency: 'Bureau of Confident Cost Sharing',
  badge: 'GRANTS',
  story: `
```

Shared costs are allocated across grants using a spreadsheet.

The allocation basis says:
“seemed fair at the time.”
`,
executive: 'The Grants Accountant quietly opens the regulation binder.',
dog: 'The office dog paws at the cost allocation plan.',
question: 'Which control is best?',
choices: [
{ text: 'Documented cost allocation methodology reviewed for allowability', correct: true, assertion: 'Accuracy / Allowability' },
{ text: 'Allocate based on strongest feelings', correct: false, assertion: 'Unsupported allocation' },
{ text: 'Split everything evenly forever', correct: false, assertion: 'May be inaccurate' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Improper Grant Match',
  agency: 'Office of Matching Fund Mysteries',
  badge: 'GRANTS',
  story: `
```

A grantee claims matching funds.

Support includes:
• old volunteer hours
• donated snacks
• a promise from someone named Gary
`,
executive: 'The Program Officer says, “Gary is not a control.”',
dog: 'The office dog drops the grant file and walks away.',
question: 'What should be verified?',
choices: [
{ text: 'Eligibility, valuation, and documentation of matching contributions', correct: true, assertion: 'Compliance / Accuracy' },
{ text: 'Gary’s confidence level', correct: false, assertion: 'Not sufficient' },
{ text: 'Snack quality', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Cash Receipt Lag',
  agency: 'Federal Collections Processing Unit',
  badge: 'FINANCIAL',
  story: `
```

Cash receipts are deposited two weeks after receipt.

The clerk says:
“I was batching for efficiency.”

The safe is labeled “temporary-ish.”
`,
executive: 'The Cash Manager begins audibly counting internal controls.',
dog: 'The office dog guards the deposit bag better than the humans.',
question: 'Which control is best?',
choices: [
{ text: 'Timely deposit requirements with supervisory monitoring', correct: true, assertion: 'Completeness / Safeguarding' },
{ text: 'Deposit whenever the safe feels full', correct: false, assertion: 'Safeguarding risk' },
{ text: 'Hide the safe label', correct: false, assertion: 'No control' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Refund Error',
  agency: 'Department of Overenthusiastic Refunds',
  badge: 'FINANCIAL',
  story: `
```

A customer refund is issued twice.

The second refund was approved because the first one was “hard to see in the system.”
`,
executive: 'The Revenue Manager makes the face of someone seeing preventable pain.',
dog: 'The office dog lies down beside the duplicate refund.',
question: 'Which control applies?',
choices: [
{ text: 'Refund approval review against prior payments and customer account history', correct: true, assertion: 'Accuracy / Occurrence' },
{ text: 'Refund until morale improves', correct: false, assertion: 'Duplicate payment' },
{ text: 'Ask the customer if they feel refunded', correct: false, assertion: 'Not a control' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unrecorded Liability',
  agency: 'Office of Quiet Obligations',
  badge: 'REPORTING',
  story: `
```

Legal counsel reports a probable settlement.

Finance does not record it because:
“bad news should not be rushed.”
`,
executive: 'The CFO slowly reaches for the disclosure checklist.',
dog: 'The office dog whimpers near the contingent liability file.',
question: 'Which assertion is affected?',
choices: [
{ text: 'Completeness / Valuation', correct: true, assertion: 'Completeness / Valuation' },
{ text: 'Existence only', correct: false, assertion: 'Incomplete answer' },
{ text: 'Positive thinking', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Inactive Approver',
  agency: 'Federal Approval Chain Museum',
  badge: 'IT ACCESS',
  story: `
```

Workflow approvals still route to a retired supervisor.

The system auto-approves after five days.

Everyone calls this “efficient.”
`,
executive: 'The Process Owner says “oh no” with unusual clarity.',
dog: 'The office dog barks at the approval matrix.',
question: 'What control is needed?',
choices: [
{ text: 'Periodic workflow role review and timely update of approver tables', correct: true, assertion: 'Authorization' },
{ text: 'Let retired staff approve spiritually', correct: false, assertion: 'Invalid approval' },
{ text: 'Shorten auto-approval to two days', correct: false, assertion: 'Worse' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — System Change Gone Wild',
  agency: 'Office of Production Surprises',
  badge: 'CYBER',
  story: `
```

A developer pushes a change directly to production.

The change accidentally removes payment limits.

The release note says:
“minor cleanup.”
`,
executive: 'The CIO makes a noise that sounds like a printer jam.',
dog: 'The office dog refuses to accept the release note.',
question: 'Which control is missing?',
choices: [
{ text: 'Change management with testing, approval, and segregation of duties', correct: true, assertion: 'IT General Controls' },
{ text: 'Hope developers remember everything', correct: false, assertion: 'Change control failure' },
{ text: 'Call all changes minor cleanup', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Disaster Recovery Theater',
  agency: 'National Continuity Confidence Office',
  badge: 'CYBER',
  story: `
```

The disaster recovery plan has not been tested in three years.

The owner says:
“We all remember the general idea.”
`,
executive: 'The Risk Officer laughs once and then stops.',
dog: 'The office dog sits on the recovery plan binder.',
question: 'Which control is appropriate?',
choices: [
{ text: 'Periodic disaster recovery testing with documented results and remediation', correct: true, assertion: 'Availability / Monitoring' },
{ text: 'Trust institutional memory', correct: false, assertion: 'Untested recovery risk' },
{ text: 'Store the plan in someone’s desk', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Material Weakness Foreshadowing',
  agency: 'Office of Repeated Findings',
  badge: 'REPORTING',
  story: `
```

The same reconciliation finding appears for the fourth year.

Management response says:
“training will be provided.”

No training occurs.
`,
executive: 'The Audit Committee Chair begins highlighting aggressively.',
dog: 'The office dog has memorized the finding.',
question: 'What COSO component is most implicated?',
choices: [
{ text: 'Monitoring Activities', correct: true, assertion: 'Monitoring' },
{ text: 'Office Decorations', correct: false, assertion: 'Not COSO' },
{ text: 'Holiday Party Planning', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Policy Exists, Nobody Knows',
  agency: 'Bureau of Secret Procedures',
  badge: 'REPORTING',
  story: `
```

A control policy exists.

It is stored on a shared drive.

The folder is named:
“old stuff maybe useful.”
`,
executive: 'The Policy Owner says, “At least it exists,” which helps no one.',
dog: 'The office dog cannot locate the policy either.',
question: 'Which COSO component is weakest?',
choices: [
{ text: 'Information and Communication', correct: true, assertion: 'Information & Communication' },
{ text: 'Physical Inventory', correct: false, assertion: 'Not primary' },
{ text: 'Desk cleanliness', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — No Risk Assessment',
  agency: 'Department of Surprised Leadership',
  badge: 'REPORTING',
  story: `
```

Leadership says fraud risk is low.

No fraud risk assessment has been performed.

Their rationale:
“everyone seems nice.”
`,
executive: 'The Internal Control Officer stares at the ceiling for support.',
dog: 'The office dog growls softly at the word “nice.”',
question: 'Which COSO component is affected?',
choices: [
{ text: 'Risk Assessment', correct: true, assertion: 'Risk Assessment' },
{ text: 'Control Activities only', correct: false, assertion: 'Incomplete' },
{ text: 'Vibes Assessment', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Segregation Disaster',
  agency: 'Office of One-Person Processes',
  badge: 'PROCUREMENT',
  story: `
```

One employee can:
• create vendors
• approve invoices
• release payments
• modify bank details

Their title is “efficiency champion.”
`,
executive: 'The CFO says, “Efficiency has betrayed us.”',
dog: 'The office dog blocks the payment button.',
question: 'Which deficiency exists?',
choices: [
{ text: 'Lack of segregation of duties', correct: true, assertion: 'Authorization / Fraud Risk' },
{ text: 'Too many employees involved', correct: false, assertion: 'Opposite problem' },
{ text: 'Insufficient snacks', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Approval Threshold Bypass',
  agency: 'Bureau of Convenient Splitting',
  badge: 'PROCUREMENT',
  story: `
```

A $95,000 purchase is split into five $19,000 orders.

The approval threshold is $20,000.

Nobody is suspicious except everyone.
`,
executive: 'The Procurement Lead says, “That math has motive.”',
dog: 'The office dog barks at the purchase order sequence.',
question: 'Which control is best?',
choices: [
{ text: 'Review for split purchases and threshold circumvention', correct: true, assertion: 'Authorization / Compliance' },
{ text: 'Celebrate small purchase efficiency', correct: false, assertion: 'Threshold bypass' },
{ text: 'Lower the threshold until it disappears', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Misstated Useful Life',
  agency: 'Federal Depreciation Guessing Office',
  badge: 'PROPERTY',
  story: `
```

A system with a 3-year useful life is recorded as 30 years.

The accountant says:
“It felt durable.”
`,
executive: 'The Controller whispers, “That asset will outlive us all.”',
dog: 'The office dog naps beside the depreciation schedule.',
question: 'Which assertion is impacted?',
choices: [
{ text: 'Valuation / Accuracy', correct: true, assertion: 'Valuation / Accuracy' },
{ text: 'Occurrence', correct: false, assertion: 'Not primary' },
{ text: 'Durability vibes', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Bad Estimate Review',
  agency: 'Office of Wild Assumptions',
  badge: 'FINANCIAL',
  story: `
```

An allowance estimate changes by $14 million.

The support says:
“Management judgment.”

No assumptions are documented.
`,
executive: 'The CFO says, “Judgment needs receipts.”',
dog: 'The office dog paws at the estimate model.',
question: 'What control is needed?',
choices: [
{ text: 'Documented management review of assumptions and methodology', correct: true, assertion: 'Valuation' },
{ text: 'Trust the round number', correct: false, assertion: 'Unsupported estimate' },
{ text: 'Use last year plus panic', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Interface Failure',
  agency: 'Office of Systems That Almost Talk',
  badge: 'IT ACCESS',
  story: `
```

The procurement system sends data to the accounting system nightly.

The interface failed for nine days.

Nobody noticed until the auditor asked why obligations vanished.
`,
executive: 'The Systems Owner whispers, “Define vanished.”',
dog: 'The office dog sits between the two systems.',
question: 'Which control is best?',
choices: [
{ text: 'Automated interface monitoring and exception review', correct: true, assertion: 'Completeness / Accuracy' },
{ text: 'Assume systems are on speaking terms', correct: false, assertion: 'Completeness risk' },
{ text: 'Email screenshots manually forever', correct: false, assertion: 'Weak control' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Suspense Account Swamp',
  agency: 'National Office of Accounting Purgatory',
  badge: 'FINANCIAL',
  story: `
```

A suspense account contains $8.6 million.

Some items are two years old.

The analyst says:
“We were giving them time to identify themselves.”
`,
executive: 'The Accounting Director asks if transactions have names now.',
dog: 'The office dog refuses to enter the suspense account swamp.',
question: 'What control is needed?',
choices: [
{ text: 'Aging review and timely clearing of suspense account items', correct: true, assertion: 'Accuracy / Classification' },
{ text: 'Let balances mature naturally', correct: false, assertion: 'Misstatement risk' },
{ text: 'Rename suspense to confidence', correct: false, assertion: 'Still suspense' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unsupported Interagency Agreement',
  agency: 'Department of Friendly Transfers',
  badge: 'BUDGET',
  story: `
```

An interagency agreement is recorded without signed support.

The program office says:
“We talked about it on Teams.”
`,
executive: 'The Budget Officer asks whether Teams chat is now contract law.',
dog: 'The office dog sits on the missing agreement checklist.',
question: 'Which control is most relevant?',
choices: [
{ text: 'Require executed agreement documentation before recording obligation', correct: true, assertion: 'Rights / Obligations' },
{ text: 'Accept meeting vibes as support', correct: false, assertion: 'Unsupported obligation' },
{ text: 'Screenshot the chat and hope', correct: false, assertion: 'Usually insufficient' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Incomplete Population',
  agency: 'Office of Sample Selection Surprises',
  badge: 'REPORTING',
  story: `
```

Internal control testing uses a population extract.

Later, someone realizes an entire region was excluded.

The tester says:
“That region is usually chill.”
`,
executive: 'The Audit Liaison says, “Population completeness is not optional.”',
dog: 'The office dog nudges the missing region report.',
question: 'Which risk is present?',
choices: [
{ text: 'Incomplete population used for control testing', correct: true, assertion: 'Completeness' },
{ text: 'Excessive testing quality', correct: false, assertion: 'No' },
{ text: 'Regional chillness', correct: false, assertion: 'Not a control attribute' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Control Performed Late',
  agency: 'Federal Bureau of Eventually Reviewed Things',
  badge: 'REPORTING',
  story: `
```

A monthly review control is performed five months late.

The reviewer signs all five months on the same day.

The pen is still warm.
`,
executive: 'The Process Owner says, “Technically performed” and regrets it immediately.',
dog: 'The office dog side-eyes the review dates.',
question: 'What is the issue?',
choices: [
{ text: 'Control not performed timely', correct: true, assertion: 'Monitoring / Timeliness' },
{ text: 'Excellent penmanship', correct: false, assertion: 'No' },
{ text: 'Too much evidence', correct: false, assertion: 'Wrong' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Reviewer Lacks Competence',
  agency: 'Office of Rubber Stamp Excellence',
  badge: 'REPORTING',
  story: `
```

A complex actuarial estimate is reviewed by someone who says:
“I do not know what an actuarial is, but the spreadsheet opened.”
`,
executive: 'The CFO says, “Opening the file is not review.”',
dog: 'The office dog appears more qualified.',
question: 'Which control attribute is weak?',
choices: [
{ text: 'Competence and precision of review', correct: true, assertion: 'Review Control Effectiveness' },
{ text: 'Spreadsheet brightness', correct: false, assertion: 'No' },
{ text: 'File opening speed', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Missing Evidence Retention',
  agency: 'National Records Maybe Center',
  badge: 'REPORTING',
  story: `
```

A control was performed.

Everyone remembers it.

The evidence was deleted during a shared drive cleanup called:
“spring vibes.”
`,
executive: 'Records Management enters the room carrying disappointment.',
dog: 'The office dog retrieves nothing, because nothing exists.',
question: 'Which control is needed?',
choices: [
{ text: 'Evidence retention procedures for key controls', correct: true, assertion: 'Documentation / Monitoring' },
{ text: 'Rely on fond memories', correct: false, assertion: 'No audit evidence' },
{ text: 'Name folders more emotionally', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Inaccurate Performance Data',
  agency: 'Office of Metrics That Seem Fine',
  badge: 'REPORTING',
  story: `
```

A performance report says 98% of payments were timely.

The calculation excludes late payments because:
“they were outliers and emotionally negative.”
`,
executive: 'The Performance Officer says, “Please stop excluding reality.”',
dog: 'The office dog paws at the excluded data tab.',
question: 'Which assertion is most affected?',
choices: [
{ text: 'Accuracy / Completeness', correct: true, assertion: 'Accuracy / Completeness' },
{ text: 'Presentation only', correct: false, assertion: 'Incomplete' },
{ text: 'Good vibes', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unapproved System Access Role',
  agency: 'Agency for Role Explosion',
  badge: 'IT ACCESS',
  story: `
```

A new access role called SUPER_APPROVER is created.

Nobody approved it.

It can approve payments, edit vendors, and export audit logs.
`,
executive: 'The System Owner whispers, “That role sounds illegal emotionally.”',
dog: 'The office dog sits firmly on the access request form.',
question: 'Which control applies?',
choices: [
{ text: 'Formal role creation approval and access rights review', correct: true, assertion: 'Authorization' },
{ text: 'Trust role names that sound powerful', correct: false, assertion: 'Excessive access' },
{ text: 'Only use the role on Fridays', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Improper Revenue Recognition',
  agency: 'Department of Optimistic Collections',
  badge: 'FINANCIAL',
  story: `
```

Revenue is recorded before eligibility criteria are met.

The analyst says:
“It was basically earned in spirit.”
`,
executive: 'The Revenue Chief asks if spirit revenue appears in the accounting manual.',
dog: 'The office dog refuses to recognize the revenue.',
question: 'Which assertion is most impacted?',
choices: [
{ text: 'Occurrence / Cutoff', correct: true, assertion: 'Occurrence / Cutoff' },
{ text: 'Existence of furniture', correct: false, assertion: 'No' },
{ text: 'Dog approval', correct: false, assertion: 'Not GAAP' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Incomplete Disclosure',
  agency: 'Federal Notes to Financial Statements Bureau',
  badge: 'REPORTING',
  story: `
```

A major accounting change is implemented.

The financial statement disclosure says:
“minor update, probably not important.”
`,
executive: 'The Reporting Director reaches slowly for the disclosure checklist.',
dog: 'The office dog sighs near the footnotes.',
question: 'Which assertion is affected?',
choices: [
{ text: 'Presentation and Disclosure', correct: true, assertion: 'Presentation and Disclosure' },
{ text: 'Existence', correct: false, assertion: 'Not primary' },
{ text: 'Font selection', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Improper User Provisioning',
  agency: 'Office of Access Request Adventures',
  badge: 'IT ACCESS',
  story: `
```

A new employee gets financial system access before supervisor approval.

The access ticket says:
“needed ASAP, trust me.”
`,
executive: 'The Access Manager says, “ASAP is not an approval control.”',
dog: 'The office dog blocks the provisioning queue.',
question: 'What control is needed?',
choices: [
{ text: 'Supervisor-approved access request before provisioning', correct: true, assertion: 'Authorization' },
{ text: 'Provision first and ask questions never', correct: false, assertion: 'Unauthorized access' },
{ text: 'Let new employees pick roles from a menu', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unreviewed Exception Report',
  agency: 'Bureau of Ignored Red Flags',
  badge: 'REPORTING',
  story: `
```

An exception report identifies 142 unusual transactions.

Nobody reviews it.

The report is automatically emailed to a shared mailbox called:
“later.”
`,
executive: 'The Risk Manager asks who owns “later.” Nobody answers.',
dog: 'The office dog barks at the exception report.',
question: 'What control activity is missing?',
choices: [
{ text: 'Timely review and resolution of exception reports', correct: true, assertion: 'Monitoring / Accuracy' },
{ text: 'Archive exceptions for future generations', correct: false, assertion: 'No remediation' },
{ text: 'Change mailbox name to “eventually”', correct: false, assertion: 'Still bad' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Grant Closeout Delay',
  agency: 'Office of Never-Ending Awards',
  badge: 'GRANTS',
  story: `
```

A grant ended 18 months ago.

Closeout is still pending.

The file includes a note:
“waiting for final final report final.”
`,
executive: 'The Grants Officer looks personally betrayed by the word final.',
dog: 'The office dog falls asleep on the closeout checklist.',
question: 'Which control is best?',
choices: [
{ text: 'Grant closeout tracking with escalation for overdue items', correct: true, assertion: 'Compliance / Monitoring' },
{ text: 'Wait until the grant closes itself', correct: false, assertion: 'Noncompliance' },
{ text: 'Add another final to the filename', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Travel Approval After Travel',
  agency: 'National Office of Reverse Authorization',
  badge: 'TRAVEL',
  story: `
```

A travel authorization is approved three days after the trip ends.

The traveler says:
“I knew future me would approve it.”
`,
executive: 'The Travel Manager closes their eyes for two full business days.',
dog: 'The office dog refuses to reimburse time travel.',
question: 'Which control was bypassed?',
choices: [
{ text: 'Pre-travel authorization approval', correct: true, assertion: 'Authorization' },
{ text: 'Post-travel emotional validation', correct: false, assertion: 'No' },
{ text: 'Retroactive confidence review', correct: false, assertion: 'Not a control' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unsupported Training Expense',
  agency: 'Bureau of Professional Development Surprises',
  badge: 'TRAVEL',
  story: `
```

A training voucher includes a conference in a beach resort.

The agenda has one session:
“Leadership Energy Alignment.”

It starts at 10 and ends at lunch.
`,
executive: 'The Training Coordinator says, “I can feel the questioned cost forming.”',
dog: 'The office dog chews on the agenda.',
question: 'Which control applies?',
choices: [
{ text: 'Review training expenses for business purpose and supporting documentation', correct: true, assertion: 'Allowability / Accuracy' },
{ text: 'Approve because beaches improve leadership', correct: false, assertion: 'Questioned cost' },
{ text: 'Call it mandatory wellness', correct: false, assertion: 'Unsupported' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Receivable Aging Ignored',
  agency: 'Office of Collect Eventually',
  badge: 'FINANCIAL',
  story: `
```

Accounts receivable aging shows balances over 720 days old.

Management response:
“We are giving them space.”
`,
executive: 'The Revenue Manager asks whether collections can have boundaries.',
dog: 'The office dog sits beside the aging schedule.',
question: 'Which control is best?',
choices: [
{ text: 'Periodic aging review and collection follow-up', correct: true, assertion: 'Valuation / Collectability' },
{ text: 'Let receivables find themselves', correct: false, assertion: 'Valuation risk' },
{ text: 'Stop aging the report', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Improper Write-Off',
  agency: 'Federal Office of Disappearing Balances',
  badge: 'FINANCIAL',
  story: `
```

A $3.1 million receivable is written off.

Approval support says:
“too hard to collect.”
`,
executive: 'The CFO asks whether “too hard” has delegated authority.',
dog: 'The office dog places a paw over the write-off button.',
question: 'Which control is required?',
choices: [
{ text: 'Authorized write-off approval with documented basis', correct: true, assertion: 'Authorization / Valuation' },
{ text: 'Write off anything emotionally burdensome', correct: false, assertion: 'Unauthorized adjustment' },
{ text: 'Delete the aging report', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Unsupported Estimate Change',
  agency: 'Bureau of Accounting Guesswork',
  badge: 'REPORTING',
  story: `
```

Management changes a significant estimate days before reporting.

The explanation says:
“new leadership preference.”
`,
executive: 'The Controller says, “Preference is not methodology.”',
dog: 'The office dog growls at the estimate memo.',
question: 'What control is needed?',
choices: [
{ text: 'Review and approval of estimate changes with documented rationale', correct: true, assertion: 'Valuation' },
{ text: 'Let leadership choose the number they like', correct: false, assertion: 'Bias risk' },
{ text: 'Round everything to the nearest million', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Noncompliant Purchase',
  agency: 'Office of Regulation Optional Procurement',
  badge: 'PROCUREMENT',
  story: `
```

A program office buys specialized equipment without required competition.

The justification says:
“we liked this vendor’s energy.”
`,
executive: 'The Contracting Officer starts stress-sorting clauses.',
dog: 'The office dog barks at the sole-source memo.',
question: 'Which control matters most?',
choices: [
{ text: 'Procurement review for competition requirements and documented justification', correct: true, assertion: 'Compliance / Authorization' },
{ text: 'Select vendors based on energy', correct: false, assertion: 'Noncompliance' },
{ text: 'Call it research', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Control Owner Confusion',
  agency: 'Department of Everyone Thought Someone Else Did It',
  badge: 'REPORTING',
  story: `
```

A key control fails.

Three offices say they thought another office owned it.

The RACI chart is blank.
`,
executive: 'Leadership asks if accountability can be crowdsourced. It cannot.',
dog: 'The office dog drags over the empty RACI chart.',
question: 'What is needed?',
choices: [
{ text: 'Clearly assigned control ownership and documented responsibilities', correct: true, assertion: 'Control Environment' },
{ text: 'Hope ownership emerges organically', correct: false, assertion: 'Governance failure' },
{ text: 'Make the dog control owner', correct: false, assertion: 'Tempting but no' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Evidence Does Not Match Control',
  agency: 'Office of Almost Relevant Support',
  badge: 'REPORTING',
  story: `
```

Testing asks for evidence of supervisory review.

The process owner provides:
• a meeting invite
• a pizza receipt
• a screenshot of a folder
`,
executive: 'The Auditor says, “None of this proves the control operated.”',
dog: 'The office dog accepts the pizza receipt but not the evidence.',
question: 'What is the issue?',
choices: [
{ text: 'Evidence does not demonstrate control operation', correct: true, assertion: 'Control Evidence' },
{ text: 'Pizza was not itemized', correct: false, assertion: 'Not the core issue' },
{ text: 'Folder screenshot lacks vibes', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Improper Capitalization',
  agency: 'Federal Bureau of Expense Identity Crisis',
  badge: 'PROPERTY',
  story: `
```

Routine maintenance costs are capitalized as assets.

The explanation says:
“They felt important.”
`,
executive: 'The Property Accountant whispers, “Importance is not capitalization criteria.”',
dog: 'The office dog sits on the capitalization policy.',
question: 'Which assertion is impacted?',
choices: [
{ text: 'Valuation / Classification', correct: true, assertion: 'Valuation / Classification' },
{ text: 'Existence only', correct: false, assertion: 'Incomplete' },
{ text: 'Maintenance enthusiasm', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Untested Service Organization Controls',
  agency: 'Office of Outsourced Confidence',
  badge: 'IT ACCESS',
  story: `
```

A key financial process relies on a service provider.

Nobody reviewed the SOC report.

The vendor says:
“trust us.”
`,
executive: 'The Vendor Manager repeats “SOC report” like a protective spell.',
dog: 'The office dog sniffs the vendor contract.',
question: 'Which control is needed?',
choices: [
{ text: 'Review of service organization control report and user control considerations', correct: true, assertion: 'Monitoring / ITGC' },
{ text: 'Accept vendor confidence as assurance', correct: false, assertion: 'Third-party risk' },
{ text: 'Ignore outsourced processes', correct: false, assertion: 'No' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Untimely Corrective Action',
  agency: 'Bureau of Findings That Age Gracefully',
  badge: 'REPORTING',
  story: `
```

A corrective action plan has been open for 34 months.

Status says:
“in progress.”

The same status appeared in the last seven updates.
`,
executive: 'The Audit Follow-Up Coordinator quietly opens a stronger coffee.',
dog: 'The office dog has aged alongside the finding.',
question: 'What control is needed?',
choices: [
{ text: 'Corrective action tracking with milestones and escalation', correct: true, assertion: 'Monitoring' },
{ text: 'Continue saying in progress forever', correct: false, assertion: 'Ineffective remediation' },
{ text: 'Rename findings as opportunities', correct: false, assertion: 'Still findings' },
],
}),

```
makeScenario({
  title: 'Internal Controls Survivor — Cash Count Surprise',
  agency: 'Office of Petty Cash Mysteries',
  badge: 'FINANCIAL',
  story: `
```

A surprise petty cash count finds:
• $88 missing
• three IOUs
• a receipt for cupcakes

The custodian says morale was low.
`,
executive: 'The Finance Director asks if cupcakes are liquid assets.',
dog: 'The office dog is interested in the cupcakes, not the control.',
question: 'Which control is appropriate?',
choices: [
{ text: 'Periodic surprise cash counts and reconciliation', correct: true, assertion: 'Existence / Safeguarding' },
{ text: 'Accept cupcakes as compensating control', correct: false, assertion: 'No' },
{ text: 'Stop counting cash to reduce stress', correct: false, assertion: 'Terrible' },
],
}),
], []);

const getRandomScenario = (usedIds = []) => {
const available = scenarios.filter(s => !usedIds.includes(s.id));

```
if (available.length === 0) {
  return null;
}

const selected = available[Math.floor(Math.random() * available.length)];

return {
  ...selected,
  choices: shuffle(selected.choices),
};
```

};

const [usedScenarioIds, setUsedScenarioIds] = useState([]);
const [scenario, setScenario] = useState(() => getRandomScenario([]));
const [score, setScore] = useState({ correct: 0, incorrect: 0 });
const [result, setResult] = useState(null);
const [sessionComplete, setSessionComplete] = useState(false);
const [playerName, setPlayerName] = useState('');
const [hasSavedScore, setHasSavedScore] = useState(false);

const [leaderboard, setLeaderboard] = useState(() => {
const saved = localStorage.getItem('icsLeaderboard');
return saved ? JSON.parse(saved) : [];
});

const chooseAnswer = (choice) => {
play('click');

```
if (choice.correct) {
  play('success');

  setScore(prev => ({
    ...prev,
    correct: prev.correct + 1
  }));

  setResult({
    success: true,
    text: `
```

CONTROL EFFECTIVE

Excellent work.

The selected control appropriately addresses the identified risk and supports the related assertion.

Assertion:
${choice.assertion}
`
});
} else {
play('fail');

```
  setScore(prev => ({
    ...prev,
    incorrect: prev.incorrect + 1
  }));

  setResult({
    success: false,
    text: `
```

CONTROL FAILURE

The OIG would like a word.

This response would likely result in:
• audit findings
• remediation meetings
• uncomfortable Congressional questions

Assertion impact:
${choice.assertion}
`
});
}
};

const nextScenario = () => {
const updatedUsed = [...usedScenarioIds, scenario.id];
const next = getRandomScenario(updatedUsed);

```
setUsedScenarioIds(updatedUsed);
setResult(null);

if (!next) {
  setSessionComplete(true);
  return;
}

setScenario(next);
```

};

const saveToLeaderboard = () => {
const total = score.correct + score.incorrect;
const accuracy = total === 0 ? 0 : Math.round((score.correct / total) * 100);

```
const entry = {
  name: playerName.trim() || 'Anonymous',
  correct: score.correct,
  incorrect: score.incorrect,
  total,
  accuracy,
  date: new Date().toLocaleDateString(),
};

const updated = [...leaderboard, entry]
  .sort((a, b) => b.correct - a.correct || b.accuracy - a.accuracy)
  .slice(0, 10);

setLeaderboard(updated);
localStorage.setItem('icsLeaderboard', JSON.stringify(updated));
setHasSavedScore(true);
```

};

const startNewGame = () => {
const first = getRandomScenario([]);

```
setUsedScenarioIds([]);
setScenario(first);
setScore({ correct: 0, incorrect: 0 });
setResult(null);
setSessionComplete(false);
setPlayerName('');
setHasSavedScore(false);
```

};

if (sessionComplete) {
const total = score.correct + score.incorrect;
const accuracy = total === 0 ? 0 : Math.round((score.correct / total) * 100);

```
return (
  <div className="min-h-screen bg-slate-950 text-white p-6 flex items-center justify-center">
    <div className="w-full max-w-4xl bg-slate-900 border border-cyan-500/20 rounded-[32px] p-8 shadow-2xl">
      <img
        src="/assets/logos/proscopeo.png"
        alt="ProScopeo"
        className="h-20 object-contain mb-6"
      />

      <h1 className="text-5xl font-black text-cyan-300 mb-4">
        Audit Survival Complete
      </h1>

      <div className="text-slate-400 mb-8">
        You completed all available scenarios in this session. No repeats. No mercy.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-500/10 border border-green-400/30 rounded-3xl p-5 text-center">
          <div className="text-4xl font-black text-green-300">{score.correct}</div>
          <div className="text-slate-400">Controls Saved</div>
        </div>

        <div className="bg-red-500/10 border border-red-400/30 rounded-3xl p-5 text-center">
          <div className="text-4xl font-black text-red-300">{score.incorrect}</div>
          <div className="text-slate-400">Audit Findings</div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-3xl p-5 text-center">
          <div className="text-4xl font-black text-cyan-300">{accuracy}%</div>
          <div className="text-slate-400">Accuracy</div>
        </div>
      </div>

      <div className="mb-6">
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter player name"
          className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-600 text-white mb-4"
          disabled={hasSavedScore}
        />

        <button
          onClick={saveToLeaderboard}
          disabled={hasSavedScore}
          className={`w-full p-5 rounded-2xl font-black text-xl ${hasSavedScore ? 'bg-slate-700 text-slate-400' : 'bg-cyan-500 hover:bg-cyan-400'}`}
        >
          {hasSavedScore ? 'SCORE SAVED' : 'SAVE TO LEADERBOARD'}
        </button>
      </div>

      <div className="bg-slate-800/70 rounded-3xl p-6 mb-6">
        <h2 className="text-2xl font-black text-yellow-300 mb-4">
          Leaderboard
        </h2>

        {leaderboard.length === 0 ? (
          <div className="text-slate-400">No scores saved yet.</div>
        ) : (
          <div className="space-y-3">
            {leaderboard.map((entry, index) => (
              <div
                key={`${entry.name}-${entry.date}-${index}`}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-slate-900 rounded-2xl p-4"
              >
                <span>{index + 1}. {entry.name}</span>
                <span className="text-cyan-300">{entry.correct} correct • {entry.accuracy}% • {entry.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={startNewGame}
        className="w-full p-5 bg-red-600 hover:bg-red-500 rounded-2xl font-black text-xl"
      >
        START NEW GAME
      </button>
    </div>
  </div>
);
```

}

return (
<div
className="min-h-screen bg-cover bg-center text-white p-6"
style={{
backgroundImage:
"linear-gradient(rgba(2,6,23,0.92), rgba(2,6,23,0.95)), url('/assets/backgrounds/control-room.jpg')"
}}
> <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"> <div> <img
         src="/assets/logos/proscopeo.png"
         alt="ProScopeo"
         className="h-20 md:h-24 object-contain"
       /> </div>

```
    <div className="text-left md:text-right">
      <div className="text-cyan-300 font-black tracking-widest text-sm uppercase">
        ProScopeo Training Lab
      </div>
      <div className="text-slate-300 text-lg">
        Internal Controls Survivor
      </div>
      <div className="text-slate-500 text-sm">
        Scenario {usedScenarioIds.length + 1} of {scenarios.length}
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="backdrop-blur-xl bg-slate-900/80 border border-cyan-500/20 rounded-[32px] p-8 shadow-2xl flex flex-col min-h-[780px]">
      <div className="mb-8">
        <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-bold tracking-widest mb-4">
          {scenario.badge}
        </div>

        <h1 className="text-5xl font-black leading-tight text-white mb-4">
          {scenario.title}
        </h1>

        <div className="text-slate-400 text-lg">
          Agency: {scenario.agency}
        </div>
      </div>

      <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-7 mb-6 shadow-xl">
        <div className="text-slate-100 whitespace-pre-line leading-9 text-xl">
          {scenario.story}
        </div>
      </div>

      <div className="bg-purple-500/10 border border-purple-400/30 rounded-3xl p-5 mb-4">
        <div className="text-purple-300 font-black tracking-wide mb-2">
          😬 EXECUTIVE REACTION
        </div>

        <div className="text-slate-300 leading-7">
          {scenario.spouse}
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-400/30 rounded-3xl p-5 mb-8">
        <div className="text-blue-300 font-black tracking-wide mb-2">
          🐶 OFFICE DOG STATUS
        </div>

        <div className="text-slate-300 leading-7">
          {scenario.dog}
        </div>
      </div>

      <div className="text-3xl font-black text-yellow-300 mb-8 leading-tight">
        {scenario.question}
      </div>

      <div className="flex-grow"></div>

      {result && (
        <div className={`rounded-3xl p-6 mb-6 border shadow-lg
          ${result.success
            ? 'bg-green-500/10 border-green-400/40'
            : 'bg-red-500/10 border-red-400/40'}
        `}>
          <div className="whitespace-pre-line leading-8 text-slate-100 text-lg">
            {result.text}
          </div>
        </div>
      )}

      {!result ? (
        <div className="space-y-4">
          {scenario.choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => chooseAnswer(choice)}
              className="w-full text-left p-6 rounded-3xl border border-slate-600 bg-slate-800/80 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.01] shadow-lg"
            >
              <div className="text-xl font-bold text-white">
                {String.fromCharCode(65 + i)}. {choice.text}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <button
          onClick={nextScenario}
          className="w-full p-6 bg-cyan-500 hover:bg-cyan-400 rounded-3xl font-black text-xl tracking-wide transition-all duration-300 hover:scale-[1.01] shadow-2xl"
        >
          NEXT SCENARIO
        </button>
      )}
    </div>

    <div className="backdrop-blur-xl bg-slate-900/80 border border-cyan-500/20 rounded-[32px] p-8 shadow-2xl flex flex-col items-center justify-center min-h-[780px]">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

        <img
          src={scenario.comic}
          alt="comic"
          className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.35)] animate-float"
        />
      </div>

      <div className="grid grid-cols-2 gap-5 w-full max-w-lg">
        <div className="bg-slate-800/80 border border-green-400/20 rounded-3xl p-6 text-center shadow-xl">
          <div className="text-5xl font-black text-green-300 mb-2">
            {score.correct}
          </div>

          <div className="text-slate-400 tracking-widest text-sm font-bold">
            CONTROLS SAVED
          </div>
        </div>

        <div className="bg-slate-800/80 border border-red-400/20 rounded-3xl p-6 text-center shadow-xl">
          <div className="text-5xl font-black text-red-300 mb-2">
            {score.incorrect}
          </div>

          <div className="text-slate-400 tracking-widest text-sm font-bold">
            AUDIT FINDINGS
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-slate-500 text-sm">
        Built by ProScopeo • Internal Controls Survivor v1.0
      </div>
    </div>
  </div>
</div>
```

);
}
