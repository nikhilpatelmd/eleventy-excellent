---
# Metadata
title: 'Andexanet Alfa for Acute Major Bleeding Associated with Factor Xa Inhibitors' # Official title from NEJM
acronym: 'ANNEXA-I'
datePublished: 2024-02-01 # NEJM publication date (online Jan 25, 2024, print Feb 1, 2024)
journal: 'New England Journal of Medicine'
doi: '10.1056/NEJMoa2313040'
pmid: '38265648' # PMID for the NEJM publication
rctIdentifier: 'NCT03661528'
fundingSource: 'Alexion, AstraZeneca Rare Disease (formerly Portola Pharmaceuticals)' # Manufacturer of andexanet alfa
conditions: ["Intracerebral Hemorrhage"]

topics:
  [
    'Hemostasis',
    'Reversal Agents',
    'Anticoagulant Reversal',
    'Factor Xa Inhibitor Reversal',
    'Andexanet Alfa'
  ]

# General tags:
# tags: ["stroke", "bleeding", "pharmacotherapy", "DOAC reversal"]
# layout: trial # Assumed from src/trials/trials.11tydata.json

# Trial details
studyDesign: 'Randomized Controlled Trial (RCT), Multicenter, International, Open-label, Blinded Endpoint Adjudication'
blinding: 'Open-label for treatment assignment (andexanet vs. usual care), but hemostatic efficacy and clinical outcomes were adjudicated by a committee blinded to treatment.'
enrollmentPeriod: '2018-2023' # Approximate (Trial started Nov 2018, primary completion July 2023)
keyInclusionCriteria:
  - 'Adults aged ≥18 years'
  - 'Acute major bleeding (including life-threatening intracranial hemorrhage, severe gastrointestinal bleeding, or other major bleeding)'
  - 'Received an oral factor Xa inhibitor (apixaban, rivaroxaban, or edoxaban; or enoxaparin if treated as an outpatient) within 15 hours before presentation (or longer if renal impairment)'
  - 'Clinical need for urgent reversal of anticoagulation'
keyExclusionCriteria:
  - 'Planned surgery within 12 hours that could not be delayed'
  - 'Glasgow Coma Scale (GCS) score <7 (unless due to sedation/intubation)'
  - 'Estimated intracranial hematoma volume >60 mL'
  - 'Expected survival <1 month'
  - 'Thrombotic event within 2 weeks before enrollment'
  - 'Use of vitamin K antagonist with INR >1.5, dabigatran, or thrombolytic therapy within specified timeframes'
  - 'Hypersensitivity to andexanet alfa or its components'
interventionDetails: 'Andexanet alfa: Intravenous bolus followed by a 2-hour infusion. Dose (low or high) depended on the specific factor Xa inhibitor, dose, and time since last intake. Plus standard supportive care.'
controlDetails: 'Usual-care group: Received standard treatments for bleeding management as per institutional guidelines, which could include prothrombin complex concentrates (PCCs), fresh frozen plasma (FFP), or supportive care without specific reversal agents. No andexanet alfa.'
pico: 'In adult patients with acute major bleeding (including ICH) associated with recent use of a factor Xa inhibitor, does andexanet alfa, compared with usual care, result in better hemostatic efficacy and improved clinical outcomes?'
primaryOutcome: 'Hemostatic efficacy, defined as achieving both: 1) ≤20% increase in intracranial hematoma volume or ≤35% increase in hematoma volume for ICH patients (depending on ICH type) or cessation of extracranial bleeding, AND 2) ≥50% reduction in anti-factor Xa activity from baseline to nadir (1-2 hours after infusion end or 12 hours after randomization for usual care). Assessed from randomization through 12 hours.'
secondaryOutcomes:
  - 'Change in anti-factor Xa activity from baseline'
  - 'Proportion of patients with good or excellent hemostatic efficacy on an adjudicated scale'
  - 'Mortality at 30 days'
  - 'Functional outcome (mRS) at 30 days (for ICH patients)'
  - 'Thrombotic events within 30 days'
  - 'Serious adverse events'
gist: 'The ANNEXA-I trial evaluated the efficacy and safety of andexanet alfa for reversing anticoagulation in patients with acute major bleeding associated with factor Xa inhibitors, including intracerebral hemorrhage (ICH). This multicenter, randomized, open-label trial enrolled 530 adult patients presenting with major bleeding (ICH in 67%) who had recently received apixaban, rivaroxaban, edoxaban, or enoxaparin. Patients were assigned to receive andexanet alfa (bolus plus 2-hour infusion) or usual care (which could include PCCs). The primary outcome, hemostatic efficacy (based on bleeding control and reduction in anti-Xa activity), was achieved in a significantly higher proportion of patients in the andexanet alfa group (69.8%) compared to the usual-care group (57.0%) (adjusted risk difference, 13.4 percentage points; 95% CI, 4.6 to 22.2; p=0.003). In the ICH subgroup, good or excellent hemostasis was seen in 78.5% with andexanet vs. 60.0% with usual care. While andexanet rapidly reduced anti-Xa activity, there was no significant difference in 30-day mortality or functional outcomes in ICH patients. Thrombotic events within 30 days occurred in 10.3% of andexanet patients and 6.0% of usual-care patients. The trial concluded that andexanet alfa was superior to usual care in achieving hemostatic efficacy but was associated with more thrombotic events, without a clear impact on clinical outcomes like mortality or functional recovery in the overall or ICH population at 30 days.'

# Commentary
relatedCommentary:
  - type: 'Editorial' # Check for accompanying NEJM editorial
    title: 'Reversing Factor Xa Inhibitors — Balancing Hemostasis and Thrombosis' # Example title, verify actual
    authors: 'To be verified'
    source: 'New England Journal of Medicine'
    date: '2024-02-01' # Or nearby
    url: '' # Find URL
    doi: '' # Find DOI
    notes: 'Likely an editorial discussing the ANNEXA-I trial results, its strengths, limitations, and clinical implications.'
  - type: 'Previous ANNEXA-4 Study'
    title: 'Andexanet Alfa for Acute Major Bleeding Associated with Factor Xa Inhibitors' # This is the single-group cohort study
    authors: 'Connolly SJ, Crowther M, Eikelboom JW, et al. (ANNEXA-4 Investigators)'
    source: 'New England Journal of Medicine'
    date: '2019-04-04'
    pmid: '30730782'
    doi: '10.1056/NEJMoa1814051'
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1814051'
    notes: 'The earlier, non-randomized, single-group cohort study (ANNEXA-4) that provided initial data on andexanet alfa and supported its accelerated approval.'
---

## Clinical Context

Oral factor Xa inhibitors (e.g., apixaban, rivaroxaban, edoxaban) are widely prescribed for the prevention and treatment of thromboembolic disorders. While they offer advantages over vitamin K antagonists, managing acute major bleeding, including life-threatening intracerebral hemorrhage (ICH), in patients receiving these agents is a critical challenge. Unlike VKAs, for which specific reversal strategies like PCCs exist, options for rapidly and effectively reversing factor Xa inhibitors were limited until the development of andexanet alfa.

Andexanet alfa is a modified, recombinant human factor Xa decoy protein that binds and sequesters factor Xa inhibitors, thereby restoring the activity of endogenous factor Xa. An earlier single-group study (ANNEXA-4) suggested that andexanet alfa could rapidly reverse anti-factor Xa activity and was associated with good or excellent hemostatic efficacy in patients with major bleeding. However, randomized controlled data comparing andexanet alfa to usual care (which often includes off-label use of PCCs or supportive care alone) were needed.

The ANNEXA-I trial was designed to definitively assess the efficacy and safety of andexanet alfa compared with usual care in patients with acute major bleeding associated with the use of factor Xa inhibitors.

## Patient Population

ANNEXA-I was an international, multicenter trial that enrolled 530 adult patients (≥18 years) who presented with acute major bleeding. Major bleeding could be:

- Life-threatening intracranial hemorrhage (ICH was the most common type, accounting for about 67% of patients).
- Severe acute gastrointestinal bleeding.
- Other types of major bleeding (e.g., retroperitoneal, intramuscular with compartment syndrome).

Eligible patients had received an oral factor Xa inhibitor (apixaban, rivaroxaban, or edoxaban) or outpatient enoxaparin within a specified timeframe (generally within 15 hours, or longer with renal impairment) prior to presentation and required urgent reversal of anticoagulation. Specific criteria for ICH included estimated hematoma volume not exceeding 60 mL and GCS ≥7.

Exclusions included planned surgery within 12 hours, severe ICH deemed non-survivable, recent thrombotic events, or other conditions that would confound the assessment or increase risk.

The median age of participants was approximately 78-79 years. Atrial fibrillation was the most common indication for anticoagulation.

## Study Design

ANNEXA-I was a prospective, randomized, open-label, multicenter trial with blinded endpoint adjudication.

### Protocol Details

Patients were randomized 1:1 to receive either:

- **Intervention Group (Andexanet Alfa):** An intravenous bolus of andexanet alfa followed by a 2-hour continuous infusion. The specific dose (low dose: 400 mg bolus + 480 mg infusion; high dose: 800 mg bolus + 960 mg infusion) was determined by the type of factor Xa inhibitor, its dose, and the time since the last intake, according to the drug's labeling. Patients also received standard supportive care.
- **Control Group (Usual Care):** Standard treatment for bleeding management as per local institutional guidelines. This could include supportive care, blood products, and specific hemostatic agents like 4-factor prothrombin complex concentrates (PCCs were used in about 68% of usual-care patients with ICH). Andexanet alfa was not permitted in this group.

### Outcome Assessment

The primary outcome was hemostatic efficacy, a composite endpoint assessed from randomization through 12 hours. Secondary outcomes, including clinical events like mortality and thrombotic events, were assessed at 30 days. All major outcomes were adjudicated by a clinical events committee blinded to treatment assignment.

### Power Analysis & Statistical Approach

The primary outcome was hemostatic efficacy. The trial was designed to have approximately 90% power to detect a significant difference in hemostatic efficacy between the andexanet alfa and usual-care groups, assuming specific event rates.

### Risk of Bias Analysis

_(Content for this section needs to be added. Considerations: Open-label design for intervention (unavoidable), but blinded adjudication of outcomes is a major strength. Heterogeneity of "usual care" interventions. Industry sponsorship.)_

## Results

A total of 530 patients underwent randomization: 263 to andexanet alfa and 267 to usual care. Baseline characteristics were generally well-balanced. ICH was the qualifying bleeding event in 67% of patients in both groups.

### Primary Outcome: Hemostatic Efficacy

Andexanet alfa was superior to usual care in achieving hemostatic efficacy:

- **Andexanet Alfa group: 69.8%** (174 of 249 evaluable patients) achieved hemostatic efficacy.
- **Usual-Care group: 57.0%** (131 of 230 evaluable patients) achieved hemostatic efficacy.
  The adjusted risk difference was 13.4 percentage points (95% CI, 4.6 to 22.2; p=0.003).

For the subgroup of patients with ICH, good or excellent hemostatic efficacy (based on limited hematoma expansion) was observed in:

- Andexanet Alfa group: 78.5%
- Usual-Care group: 60.0%

### Secondary Outcomes

- **Change in Anti-Factor Xa Activity:** Andexanet alfa rapidly and substantially reduced anti-factor Xa activity from baseline compared with usual care.
- **Mortality at 30 days:**
  - Andexanet Alfa group: 15.2%
  - Usual-Care group: 15.4%
    (No significant difference).
- **Functional Outcome (mRS) at 30 days (ICH patients):** While not a primary or major secondary endpoint for the overall trial, descriptive data for ICH patients did not show a significant difference in functional outcomes.
- **Thrombotic Events within 30 days:**
  - Andexanet Alfa group: **10.3%**
  - Usual-Care group: **6.0%**
    (Adjusted risk difference, 4.6 percentage points; 95% CI, -0.1 to 9.4). This numerical increase with andexanet alfa is an important safety consideration.

## Final Thoughts & Critical Appraisal

The ANNEXA-I trial provides the first randomized controlled evidence for andexanet alfa in patients with acute major bleeding associated with factor Xa inhibitor use.

Key takeaways:

- **Superior Hemostatic Efficacy:** Andexanet alfa was more effective than usual care (which often included PCCs) in achieving the composite primary endpoint of hemostatic efficacy, driven by both control of bleeding and rapid reduction of anti-factor Xa activity. This was also observed in the ICH subgroup regarding hematoma stability.
- **No Clear Impact on Clinical Outcomes (Mortality/Function):** Despite better hemostatic efficacy, andexanet alfa did not demonstrate a significant improvement in 30-day mortality or functional outcomes in the overall population or the ICH subgroup within the 30-day timeframe of this trial's primary clinical safety endpoints. Longer-term clinical outcomes are still awaited.
- **Increased Thrombotic Risk:** Andexanet alfa was associated with a numerically higher incidence of thrombotic events within 30 days compared to usual care. This is a critical safety concern, as factor Xa inhibitors are often prescribed to patients at high underlying thrombotic risk.
- **Comparison to Usual Care (including PCCs):** A significant proportion of patients in the usual-care arm received PCCs. The superiority of andexanet alfa in hemostatic efficacy over a usual-care strategy that frequently included PCCs is noteworthy.
- **Implications for Practice:** Andexanet alfa is an effective reversal agent for factor Xa inhibitors based on laboratory markers and hemostatic control. However, the lack of clear benefit on short-term clinical outcomes like mortality or function, coupled with a signal for increased thrombotic events, means its role needs careful consideration. Decisions to use andexanet alfa will involve weighing its proven ability to control bleeding against the potential thrombotic risk and the current absence of definitive evidence for improved patient-centered clinical outcomes from this trial.

ANNEXA-I is a landmark trial that confirms the biological efficacy of andexanet alfa but also highlights the complexities of translating improved hemostasis into better clinical outcomes in critically ill bleeding patients, especially concerning the balance of bleeding and thrombotic risks.

## How do we reconcile the results with other studies?

_(Content for this section needs to be added, comparing ANNEXA-I with ANNEXA-4, observational studies of PCCs for FXa inhibitor reversal, and discussing the challenges of demonstrating clinical outcome benefits with reversal agents when underlying patient conditions are severe.)_
