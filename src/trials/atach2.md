---
# Metadata
title: "Antihypertensive Treatment of Acute Cerebral Hemorrhage II (ATACH-2)" # Official title if slightly different
acronym: "ATACH-2"
datePublished: 2016-07-28 # Publication date in NEJM
journal: "New England Journal of Medicine"
doi: "10.1056/NEJMoa1603460"
pmid: "27276234"
rctIdentifier: "NCT01176565"
fundingSource: "National Institute of Neurological Disorders and Stroke (NINDS), National Institutes of Health (NIH)"
conditions: ["Intracerebral Hemorrhage"]
topics: ["Acute Blood Pressure Control"]

# General tags: (Example: add specific tags if desired)
# tags: ["stroke", "hypertension", "neurocritical care"]
# layout: trial # Assumed from src/trials/trials.11tydata.json

# Trial details
studyDesign: "Randomized Controlled Trial (RCT), Multicenter, International"
blinding: "Open-label with blinded endpoint (PROBE design)"
enrollmentPeriod: "2011-2015" # Approximate, based on trial timeline
keyInclusionCriteria:
  - "Adults aged ≥18 years"
  - "Spontaneous supratentorial intracerebral hemorrhage confirmed by CT scan"
  - "Presentation within 4.5 hours of symptom onset"
  - "Systolic blood pressure (SBP) ≥180 mmHg"
  - "Glasgow Coma Scale (GCS) score ≥5"
  - "Hematoma volume <60 cm³"
keyExclusionCriteria:
  - "Infratentorial hemorrhage"
  - "Intraventricular hemorrhage requiring external ventricular drainage at admission"
  - "Structural lesion (e.g., aneurysm, arteriovenous malformation, tumor)"
  - "Planned surgical evacuation of hematoma within 24 hours"
  - "Contraindication to nicardipine"
  - "Pregnancy or breastfeeding"
interventionDetails: "Intensive blood pressure lowering: target SBP 110-139 mmHg using intravenous nicardipine infusion, initiated within 4.5 hours of onset and maintained for 24 hours."
controlDetails: "Standard blood pressure lowering: target SBP 140-179 mmHg using intravenous nicardipine or other agents as per local practice, maintained for 24 hours."
pico: "In patients with acute intracerebral hemorrhage and SBP ≥180 mmHg, does intensive blood pressure control (target SBP 110-139 mmHg) reduce death or disability at 3 months compared with standard care (target SBP 140-179 mmHg)?"
primaryOutcome: "Composite of death or disability (modified Rankin Scale [mRS] score of 4–6) at 3 months."
secondaryOutcomes:
  - "Ordinal analysis of mRS scores at 3 months"
  - "Mortality at 3 months"
  - "Neurologic deterioration within 24 hours"
  - "Hematoma expansion at 24 hours"
  - "Serious adverse events within 7 days and 3 months"
gist: "Following INTERACT2, the ATACH-2 trial aimed to determine if more aggressive and earlier intensive blood pressure (BP) lowering would improve outcomes in acute intracerebral hemorrhage (ICH). This multicenter, international, randomized trial enrolled 1,000 patients across 110 sites in the US, Asia, and Europe between 2011 and 2015. Patients presenting within 4.5 hours of ICH onset with SBP ≥180 mmHg were assigned to intensive BP reduction (target SBP 110-139 mmHg using IV nicardipine) or standard care (target SBP 140-179 mmHg). The primary outcome, death or major disability (mRS 4-6) at 3 months, occurred in 38.7% of the intensive-treatment group and 37.7% of the standard-treatment group (relative risk, 1.03; 95% CI, 0.85 to 1.25; p=0.72). There were no significant differences in secondary outcomes, including ordinal mRS analysis or hematoma expansion, but renal adverse events within 7 days were more frequent in the intensive-treatment group."

# Commentary
relatedCommentary:
  - type: "Editorial/Commentary"
    title: "Blood-Pressure Treatment in Acute Cerebral Hemorrhage" # Example, verify actual title
    authors: "Craig S. Anderson, M.D., Ph.D." # Verify, this is likely the author of the linked commentary
    source: "Stroke (AHA Journals)"
    date: "2014" # Approximate, based on DOI. Verify actual date.
    url: "https://www.ahajournals.org/doi/10.1161/STROKEAHA.114.006321"
    doi: "10.1161/STROKEAHA.114.006321"
    notes: "Commentary on blood pressure management in ICH, potentially pre-dating full ATACH-2 results but relevant to the discussion."
  - type: "Correspondence/Debate"
    title: "Antihypertensive Treatment of Acute Cerebral Hemorrhage (ATACH) II Trial: Pro" # Example, verify actual title
    authors: "Craig S. Anderson, Adnan I. Qureshi, et al." # Verify authors
    source: "Stroke (AHA Journals)"
    date: "2017" # Approximate, based on DOI. Verify actual date.
    url: "https://www.ahajournals.org/doi/10.1161/STROKEAHA.117.016185"
    doi: "10.1161/STROKEAHA.117.016185"
    notes: "A discussion or debate regarding the ATACH-II trial findings and implications."
  - type: "Secondary Analysis"
    title: "Blood Pressure Achieved and Worsening Edema in the Antihypertensive Treatment of Acute Cerebral Hemorrhage II Trial" # Actual title
    authors: "Qureshi AI, Palesch YY, et al." # Primary authors of this secondary analysis
    source: "Stroke (AHA Journals)"
    date: "2018" # Publication date of this analysis
    url: "https://doi.org/10.1161/STROKEAHA.117.019845"
    doi: "10.1161/STROKEAHA.117.019845"
    notes: "A secondary analysis from the ATACH-2 data focusing on achieved blood pressure and edema."
---

## Clinical Context

Following the results of [INTERACT2](/trials/interact2/) published in 2013, many were encouraged about a probable beneficial effect of intensive blood pressure reduction on death and disability in intracerebral hemorrhage (ICH). The [2015 AHA/ASA Guidelines for the Management of Spontaneous Intracerebral Hemorrhage](https://doi.org/10.1161/str.0000000000000069) reflected this optimism by stating that "acute lowering of SBP to 140 mmHg is safe and can be effective for improving functional outcome" for patients presenting with an SBP between 150 and 220 mmHg.

However, some lingering concerns and unanswered questions remained. Primarily, it was unclear how robust the benefit of intensive blood pressure lowering actually was, given the relatively wide confidence intervals for the primary outcome in INTERACT2 and the p-value not reaching conventional significance for the dichotomized outcome. From the perspective of clinicians in regions like the United States, the external validity was also a point of discussion, given the large proportion of patients recruited from China in INTERACT2 and the corresponding frequent use of urapidil, a BP-lowering agent not available in all countries.

The Antihypertensive Treatment of Acute Cerebral Hemorrhage II (ATACH-2) trial was designed to address these issues and further investigate the efficacy of more aggressive and earlier BP control. It aimed to replicate and potentially strengthen the findings of INTERACT2 with some key modifications: using predominantly a single, widely available BP-lowering agent (intravenous nicardipine), enrolling patients earlier (within 4.5 hours of onset compared to 6 hours in INTERACT2), attempting to achieve BP control more rapidly (within 1 hour of enrollment), and targeting an even more aggressive SBP goal (110-139 mmHg).

## Patient Population

Patients were eligible for ATACH-2 if they presented with spontaneous supratentorial ICH **within 4.5 hours of symptom onset and had at least one SBP reading >180 mmHg**. Key exclusion criteria included an admission GCS score <5, an estimated ICH volume >60 mL, infratentorial hemorrhage, or if early surgical hematoma evacuation was planned.

The trial enrolled 1000 patients. The average age of the population was approximately 62 years, with roughly two-thirds being male. About half the population was recruited from sites in Asia (China, Taiwan, Japan, and South Korea), and the other half from the United States and Germany.

Most patients presented with mild to moderate ICH severity: over 80% had a GCS score of 12 or greater, the median NIHSS was 11, and the median ICH volume was 10 mL (with about 10% of patients having a volume >30 mL). The majority of hemorrhages were in a deep location (approximately 80%), and about a quarter had intraventricular extension.

This patient population was very similar to the INTERACT2 cohort in many respects. A notable difference was that ATACH-2 did not have an upper SBP limit for recruitment (beyond the ≥180 mmHg entry criterion), resulting in a higher average SBP on presentation (200 mmHg vs. 179 mmHg in INTERACT2). The geographic distribution of recruitment sites also differed, with a smaller proportion of patients from China in ATACH-2 compared to INTERACT2.

## Study Design

ATACH-2 was a multicenter, international, phase 3, randomized clinical trial employing a Prospective, Randomized, Open-label, Blinded Endpoint (PROBE) design, conducted at 110 sites.

### Protocol Details

Eligible patients were randomized 1:1 to one of two treatment groups within 4.5 hours of symptom onset:

* **Intervention Group (Intensive Treatment):** Target SBP of 110–139 mmHg. Treatment was initiated with an intravenous nicardipine infusion, with the goal of achieving the target SBP range within 1 hour and maintaining it for 24 hours.
* **Control Group (Standard Treatment):** Target SBP of 140–179 mmHg. Treatment also primarily involved intravenous nicardipine, though other agents could be used according to local practice if nicardipine was not suitable or effective. The SBP target was to be maintained for 24 hours.

Blinded adjudication of the primary outcome (mRS score at 3 months) was performed.

### Power Analysis

The trial was designed to enroll 1000 patients, providing 85% power to detect a 10% absolute risk reduction in the primary outcome (death or mRS 4-6 at 3 months), assuming an event rate of 40% in the standard-treatment group and 30% in the intensive-treatment group, with a two-sided alpha level of 0.05.

### Risk of Bias Analysis
*(Content for this section needs to be added if you plan to include it.)*

## Results

### Achieved Blood Pressure Control
Both groups achieved rapid blood pressure reduction. In the intensive-treatment group, the median SBP was reduced from a baseline of 200 mmHg to 129 mmHg within 1 hour. In the standard-treatment group, the median SBP was reduced from 200 mmHg to 141 mmHg within 1 hour. SBP levels remained separated between the groups for the 24-hour treatment period, though the difference narrowed over time. The average minimum SBP during the first 2 hours was 129 mmHg in the intensive group and 141 mmHg in the standard group.

### Primary Outcome: Death or Disability
The primary outcome, a modified Rankin Scale (mRS) score of 4–6 (indicating moderate to severe disability or death) at 3 months, occurred in **38.7% of patients in the intensive-treatment group** (186 of 481) and **37.7% of patients in the standard-treatment group** (186 of 493). This difference was not statistically significant (relative risk with intensive treatment, 1.03; 95% CI, 0.85 to 1.25; p=0.72).

### Secondary Outcomes
There were no significant differences between the two groups in any of the pre-specified secondary outcomes, including:
* Ordinal analysis of mRS scores at 3 months (common OR for a better outcome with intensive treatment, 0.96; 95% CI, 0.78 to 1.19; p=0.72).
* Mortality at 3 months (14.8% in intensive vs. 12.6% in standard; p=0.35).
* Neurologic deterioration within 24 hours.
* Hematoma expansion at 24 hours (defined as ≥33% or ≥6 mL increase from baseline).

### Safety Outcomes
The overall rate of serious adverse events within 3 months was similar between the groups (54.9% intensive vs. 54.0% standard). However, renal adverse events within 7 days of randomization were significantly more frequent in the intensive-treatment group (9.0%) than in the standard-treatment group (4.0%; p=0.002).

## Final Thoughts & Critical Appraisal

ATACH-2 was a well-conducted, large randomized trial designed to determine if a strategy of early, aggressive SBP lowering (target 110-139 mmHg) would improve outcomes in patients with acute ICH compared to a standard SBP target (140-179 mmHg). Contrary to the hypothesis and the suggestive findings of INTERACT2, ATACH-2 found no benefit for intensive SBP reduction in terms of reducing death or major disability at 3 months.

Key considerations when interpreting ATACH-2:

* **No Benefit for More Aggressive Lowering:** The trial clearly did not demonstrate an advantage for targeting an SBP of 110-139 mmHg over 140-179 mmHg. This challenges the idea that "lower is always better" in this acute setting.
* **Difference from INTERACT2:** While INTERACT2 showed a trend towards benefit (and a significant ordinal shift) with a target <140 mmHg vs. <180 mmHg, ATACH-2's more aggressive target did not yield similar positive signals. This could be due to several factors:
    * The SBP target in ATACH-2's intensive arm (110-139 mmHg) might have been too low, potentially causing harm that offset any benefit from reduced hematoma expansion (though safety outcomes were largely similar, except for renal AEs).
    * The control group in ATACH-2 also achieved relatively good BP control (median SBP 141 mmHg within 1 hour), potentially diminishing the difference between groups compared to INTERACT2 where the control group's SBP reduction was less aggressive initially.
    * Differences in patient populations (e.g., higher baseline SBP in ATACH-2) or treatment protocols (e.g., predominant use of nicardipine).
* **Primary Outcome Definition:** ATACH-2 defined poor outcome as mRS 4-6, whereas INTERACT2 used mRS 3-6. While both are valid, this difference makes direct comparison of event rates more nuanced.
* **Increased Renal Adverse Events:** The higher rate of renal adverse events in the intensive group is a notable safety signal, suggesting potential harm with very aggressive BP targets.
* **Clinical Implications:** The results of ATACH-2 have significantly influenced clinical practice and guidelines, generally tempering enthusiasm for very aggressive SBP lowering in acute ICH. Current guidelines often recommend a target SBP closer to 140 mmHg, reflecting a balance between the potential benefits seen in INTERACT2 and the lack of benefit (and potential renal concerns) with more aggressive targets in ATACH-2.

ATACH-2 underscores the importance of rigorously testing therapeutic strategies and highlights that extrapolating from one trial to a slightly different intervention or target requires caution. It provides strong evidence against targeting SBP below 140 mmHg in the acute phase of ICH for the broad population studied.

## How do we reconcile the results with other studies?
*(Content for this section needs to be added if you plan to include it, discussing how ATACH-2 fits with INTERACT2, ENRICH-AF, and other relevant BP trials.)*
