---
# Metadata
title: "Efficacy and safety of clot lysis with alteplase for intraventricular haemorrhage: the CLEAR III randomised trial" # Official title
acronym: "CLEAR III"
datePublished: 2017-02-01 # Lancet publication date (online Dec 8, 2016, print Feb 2017)
journal: "The Lancet"
doi: "10.1016/S0140-6736(16)32410-2"
pmid: "27939022"
rctIdentifier: "NCT00784134"
fundingSource: "National Institute of Neurological Disorders and Stroke (NINDS), National Institutes of Health (NIH), Genentech" # Key funders
conditions: ["Intracerebral Hemorrhage"]
topics: ["Neurosurgical Intervention", "Intraventricular Hemorrhage", "Thrombolysis (Alteplase)", "External Ventricular Drain (EVD)"]

# General tags:
# tags: ["stroke", "bleeding", "pharmacotherapy", "EVD management"]
# layout: trial # Assumed from src/trials/trials.11tydata.json

# Trial details
studyDesign: "Randomized Controlled Trial (RCT), Multicenter, International, Phase 3, Open-label treatment with blinded endpoint (PROBE-like design)"
blinding: "Open-label for alteplase administration due to procedural nature, but primary outcome (mRS) and other clinical/radiological outcomes assessed by blinded evaluators."
enrollmentPeriod: "2009-2015" # Approximate (Trial started Nov 2009, completed enrollment July 2015)
keyInclusionCriteria:
  - "Adults aged 18–75 years"
  - "Spontaneous supratentorial intracerebral hemorrhage (ICH) volume <30 mL"
  - "Significant intraventricular hemorrhage (IVH) obstructing the 3rd or 4th ventricles, leading to acute hydrocephalus"
  - "External ventricular drain (EVD) placed for management of hydrocephalus"
  - "Glasgow Coma Scale (GCS) score ≤14 or NIHSS score ≥8"
  - "Ability to receive first dose of study drug (alteplase or saline) within 24 hours of diagnostic CT showing IVH (later amended to within 12 hours of EVD placement if EVD placed >12h after ICH)"
keyExclusionCriteria:
  - "Infratentorial hemorrhage or IVH from infratentorial source"
  - "ICH volume ≥30 mL"
  - "Known secondary cause of ICH/IVH (e.g., aneurysm, AVM, tumor, trauma)"
  - "Irreversible anticoagulation or significant coagulopathy"
  - "Contraindication to alteplase or EVD placement"
  - "Moribund state or severe pre-existing disability (mRS >2)"
interventionDetails: "Alteplase (recombinant tissue plasminogen activator, rt-PA) 1 mg instilled via the external ventricular drain (EVD) into the ventricle containing the largest amount of IVH, every 8 hours. Dosing continued until IVH was reduced to <5 mL in ventricles, EVD was removed, or for a maximum of 12 doses (4 days). Plus standard medical care."
controlDetails: "Standard medical care plus EVD management with irrigation using preservative-free 0.9% sodium chloride (saline) 1 mL every 8 hours (matching alteplase dosing frequency and volume), if EVD irrigation was part of standard care at the site. If not, EVD was managed per standard care without irrigation."
pico: "In adult patients (18-75 years) with spontaneous supratentorial ICH (<30 mL) and obstructive IVH requiring an EVD, does intraventricular administration of alteplase via the EVD, compared with EVD management with or without saline irrigation, improve functional outcome at 180 days?"
primaryOutcome: "Good functional outcome, defined as a modified Rankin Scale (mRS) score of 0–3 at 180 days."
secondaryOutcomes:
  - "Mortality at 30 days and 180 days"
  - "Rate of IVH removal (time to 80% reduction or <5 mL IVH)"
  - "Duration of EVD placement"
  - "Ventriculoperitoneal (VP) shunt dependence at 180 days"
  - "Serious adverse events (e.g., symptomatic intracranial bleeding, ventriculitis)"
gist: "The CLEAR III trial investigated whether intraventricular administration of alteplase could improve outcomes in patients with intracerebral hemorrhage (ICH) complicated by obstructive intraventricular hemorrhage (IVH) requiring an external ventricular drain (EVD). This international, multicenter, randomized, phase 3 trial enrolled 500 adult patients (ICH <30mL, significant IVH) between 2009 and 2015. Patients were assigned to receive alteplase (1mg every 8 hours via EVD) or standard EVD care (with or without saline irrigation). The primary outcome, a modified Rankin Scale (mRS) score of 0–3 at 180 days, was achieved by 48% of patients in the alteplase group and 45% in the control group (risk ratio [RR] 1.06, 95% CI 0.88–1.28; p=0.55). While alteplase accelerated IVH resolution and reduced mortality (18% vs. 29% at 180 days, p=0.007), this did not translate into significantly better functional outcomes for survivors. Symptomatic bleeding and ventriculitis rates were similar. The trial concluded that intraventricular alteplase did not significantly improve the proportion of patients achieving good functional outcome despite reducing mortality and speeding IVH clearance."

# Commentary
relatedCommentary:
  - type: "Editorial/Commentary" # Check for accompanying Lancet editorial
    title: "CLEAR III: no clear benefit of alteplase for intraventricular haemorrhage" # Actual title
    authors: "Andreas H Kramer, J Claude Hemphill III"
    source: "The Lancet"
    date: "2017-02-01" # Print date
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)32588-0/fulltext"
    doi: "10.1016/S0140-6736(16)32588-0"
    notes: "Accompanying commentary discussing the CLEAR III trial results."
  - type: "CLEAR-IVH Pilot Trial"
    title: "Thrombolytic removal of intraventricular haemorrhage in treatment of severe stroke: results of the CLEAR-IVH pilot trial"
    authors: "Naff N, Williams MA, Keyl PM, et al."
    source: "Stroke"
    date: "2011"
    pmid: "21903959"
    doi: "10.1161/STROKEAHA.110.605822"
    notes: "The earlier pilot trial that informed the design of CLEAR III."

---

## Clinical Context

Intraventricular hemorrhage (IVH), often occurring as an extension of a primary intracerebral hemorrhage (ICH), is associated with acute hydrocephalus, increased intracranial pressure, and significantly worse outcomes, including higher mortality. External ventricular drains (EVDs) are commonly placed to manage hydrocephalus by draining cerebrospinal fluid (CSF) and monitoring intracranial pressure. However, the IVH clot itself can obstruct CSF pathways and EVD catheters, and blood breakdown products within the ventricles are thought to contribute to secondary brain injury, inflammation, and vasospasm.

The CLEAR (Clot Lysis: Evaluating Accelerated Resolution of IVH) program investigated whether intraventricular administration of alteplase (recombinant tissue plasminogen activator, rt-PA) could accelerate the resolution of IVH, thereby improving EVD function, reducing the duration of EVD placement, and potentially leading to better clinical outcomes. Early phase studies (CLEAR-IVH pilot, CLEAR ER) suggested that this approach was feasible and could effectively lyse intraventricular clots. CLEAR III was the definitive phase 3 trial.

## Patient Population

CLEAR III enrolled 500 adult patients (aged 18–75 years) from 73 sites in the USA, Canada, the UK, Germany, and Australia. Eligible patients had:
* Spontaneous supratentorial ICH with a parenchymal hematoma volume of <30 mL.
* Significant IVH causing obstruction of the third or fourth ventricles, leading to acute hydrocephalus.
* An EVD already placed for management of hydrocephalus.
* A Glasgow Coma Scale (GCS) score of ≤14 or an NIH Stroke Scale (NIHSS) score of ≥8.
* Ability to receive the first dose of the study drug within 24 hours of the diagnostic CT scan showing IVH (this window was later amended to allow enrollment if the first dose could be given within 12 hours of EVD placement, even if EVD placement occurred >12 hours after the initial ICH).

Exclusion criteria included infratentorial hemorrhage, very large parenchymal ICH (≥30 mL), known secondary causes of hemorrhage, irreversible anticoagulation, or other contraindications to alteplase or EVD management.

The median age of participants was approximately 59 years. The median GCS at enrollment was 8-9. The median IVH volume was substantial (around 20-22 mL).

## Study Design

CLEAR III was an international, multicenter, prospective, randomized, phase 3 trial with open-label treatment administration but blinded endpoint assessment (PROBE-like design).

### Protocol Details

Patients with an EVD in place were randomized 1:1 to:

* **Intervention Group (Alteplase):** Received alteplase 1 mg, instilled into the EVD catheter into the ventricle containing the largest amount of IVH. Doses were administered every 8 hours. The EVD was clamped for 1 hour after each dose, then reopened to drain at a specified pressure. Dosing continued until the IVH volume was reduced to <5 mL in the ventricles (as assessed by CT), the EVD was removed, or for a maximum of 12 doses (i.e., up to 4 days). This was in addition to standard medical and neurocritical care.
* **Control Group (Standard EVD Care/Saline Irrigation):** Received standard medical care plus EVD management. If EVD irrigation was part of standard care at the participating site, patients received irrigation with 1 mL of preservative-free 0.9% sodium chloride (saline) via the EVD every 8 hours (matching the alteplase dosing frequency and volume). If irrigation was not standard care, the EVD was managed per usual practice without scheduled irrigation.

### Outcome Assessment
The primary outcome was assessed at 180 days (6 months). Assessment of the modified Rankin Scale (mRS) was performed by trained, certified evaluators who were blinded to the treatment assignment. Neuroimaging (CT scans) was used to assess IVH volume and resolution.

### Power Analysis & Statistical Approach
The primary outcome was the proportion of patients achieving a good functional outcome (mRS 0–3) at 180 days. The trial was powered to detect an absolute difference of 10% in this outcome between the alteplase and control groups, with 80% power at a two-sided alpha of 0.05, requiring approximately 500 patients.

### Risk of Bias Analysis
*(Content for this section needs to be added. Considerations: Open-label treatment, but blinded outcome assessment is a strength. Heterogeneity in control group EVD management (irrigation vs. no irrigation based on site practice). Complexity of the intervention.)*

## Results

A total of 500 patients were randomized: 249 to alteplase and 251 to control. Baseline characteristics were well-balanced.

### Primary Outcome: Good Functional Outcome (mRS 0–3) at 180 Days
The proportion of patients achieving a good functional outcome (mRS score of 0–3) at 180 days was:
* **Alteplase group: 48%** (119 of 249 patients)
* **Control group: 45%** (113 of 251 patients)

This difference was not statistically significant (Risk Ratio [RR] 1.06, 95% CI 0.88–1.28; p=0.55).

### Secondary Outcomes
* **IVH Resolution:** Alteplase significantly accelerated the rate of IVH removal. The median time to 80% clot reduction was faster with alteplase.
* **Mortality at 180 days:** Was significantly lower in the alteplase group:
    * **Alteplase group: 18%**
    * **Control group: 29%**
    (Hazard Ratio 0.63, 95% CI 0.44–0.90; p=0.007).
* **Mortality at 30 days:** Also lower with alteplase (12% vs. 22%; p=0.004).
* **Duration of EVD Placement:** Shorter in the alteplase group.
* **VP Shunt Dependence at 180 days:** No significant difference (Alteplase: 26%; Control: 31%; p=0.25).

### Safety Outcomes
* **Symptomatic Intracranial Bleeding (new or worsening):** Occurred in 3% of alteplase patients and 2% of control patients (not significantly different).
* **Ventriculitis (EVD-related infection):** Occurred in 10% of alteplase patients and 11% of control patients (not significantly different).
* Overall rates of serious adverse events were similar between the groups.

## Final Thoughts & Critical Appraisal

The CLEAR III trial was a large, important study that rigorously evaluated the strategy of intraventricular alteplase for ICH with obstructive IVH. While the intervention successfully accelerated IVH clearance and was associated with a significant reduction in mortality, it did not translate into an improvement in the proportion of patients achieving good functional outcome (mRS 0-3) at 180 days.

Key takeaways:

* **No Improvement in Primary Functional Outcome:** The main finding is that intraventricular alteplase did not significantly increase the number of patients achieving an mRS of 0-3 at 6 months compared to standard EVD care.
* **Reduced Mortality:** A significant reduction in both 30-day and 180-day mortality was observed with alteplase. This is a notable finding, suggesting that clearing the IVH may prevent some fatal complications.
* **Faster IVH Resolution:** Alteplase was effective in speeding up the lysis and removal of the intraventricular clot.
* **Mortality-Morbidity Trade-off?:** The reduction in mortality without a corresponding improvement in good functional outcome raises the question of whether alteplase might be increasing the number of survivors with significant disability (e.g., mRS 4 or 5). The trial report notes that the distribution of mRS scores was similar, suggesting that the survivors in the alteplase group were not necessarily more disabled than survivors in the control group, but rather more patients survived overall.
* **Safety:** The administration of intraventricular alteplase appeared relatively safe, with no significant increase in symptomatic bleeding or ventriculitis compared to the control group.
* **Implications for Practice:** The results of CLEAR III present a complex picture. While reducing mortality is a desirable goal, the lack of improvement in good functional outcome means that routine use of intraventricular alteplase for all patients with ICH and IVH is not strongly supported if the primary aim is to increase survivors without severe disability. Decisions may need to be individualized, considering the potential for reduced mortality against the lack of clear functional benefit for survivors.

CLEAR III highlights the challenge of translating improvements in surrogate markers (like IVH volume) or even mortality into better functional recovery for severely ill neurological patients. It underscores that IVH is a marker of severe primary brain injury, and simply removing the blood from the ventricles may not be enough to overcome the initial damage.

## How do we reconcile the results with other studies?
*(Content for this section needs to be added, discussing the pathophysiology of IVH, why mortality might be reduced without functional gain, and how CLEAR III fits with other EVD management strategies or interventions for severe ICH.)*
