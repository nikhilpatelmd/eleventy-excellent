---
# Metadata
title: "Deferoxamine mesylate in patients with intracerebral haemorrhage (i-DEF): a multicentre, randomised, placebo-controlled, double-blind phase 2 trial" # Official title
acronym: "i-DEF"
datePublished: 2019-05-01 # Lancet Neurology print publication date (online Mar 19, 2019)
journal: "The Lancet Neurology"
doi: "10.1016/S1474-4422(19)30068-6"
pmid: "30898550"
rctIdentifier: "NCT02175225"
fundingSource: "US National Institutes of Health (NIH), National Institute of Neurological Disorders and Stroke (NINDS)" # Key funders
conditions: ["Intracerebral Hemorrhage"]
topics: ["Neuroprotection", "Iron Chelation", "Deferoxamine", "Secondary Brain Injury"]

# General tags:
# tags: ["stroke", "pharmacotherapy", "neurocritical care"]
# layout: trial # Assumed from src/trials/trials.11tydata.json

# Trial details
studyDesign: "Randomized Controlled Trial (RCT), Multicenter, Double-blind, Placebo-controlled, Phase 2, Futility Design"
blinding: "Double-blind (patients, clinicians, investigators, and outcome assessors were unaware of treatment assignment)."
enrollmentPeriod: "2014-2017" # (Nov 2014 to Nov 2017 from publication)
keyInclusionCriteria:
  - "Adults aged 18–80 years"
  - "Primary, spontaneous, supratentorial intracerebral hemorrhage confirmed by CT scan"
  - "Ability to initiate study drug (deferoxamine or placebo) within 24 hours of hemorrhage onset"
  # Initial criteria mentioned GCS >6 and NIHSS ≥6, but the final publication focused on broader inclusion.
keyExclusionCriteria:
  - "Infratentorial hemorrhage"
  - "Known secondary cause of ICH (e.g., aneurysm, AVM, tumor, trauma)"
  - "Severe renal insufficiency (e.g., creatinine >2.5 mg/dL or dialysis)"
  - "Known hypersensitivity to deferoxamine"
  - "Pregnancy or lactation"
  - "Life expectancy <3 months due to other comorbidities"
  - "Unlikely to complete follow-up"
interventionDetails: "Deferoxamine mesylate: 32 mg/kg per day (up to a maximum daily dose of 6000 mg/day), administered as an intravenous infusion for 3 consecutive days. Treatment initiated within 24 hours of ICH symptom onset."
controlDetails: "Placebo (0.9% sodium chloride) administered as an intravenous infusion, matching the deferoxamine infusions in appearance and duration."
pico: "In adult patients (18-80 years) with primary spontaneous supratentorial intracerebral hemorrhage, does deferoxamine mesylate (32 mg/kg/day for 3 days) initiated within 24 hours, compared with placebo, show sufficient promise of improving functional outcome (mRS 0-2) at 90 days to warrant a phase 3 trial (i.e., not futile)?"
primaryOutcome: "Good clinical outcome, defined as a modified Rankin Scale (mRS) score of 0–2 at day 90. This was a futility analysis: if the 90% upper confidence bound of the absolute risk difference between groups for mRS 0-2 was <12% in favor of deferoxamine, proceeding to phase 3 was deemed futile."
secondaryOutcomes:
  - "Distribution of mRS scores at day 90 and day 180 (ordinal analysis)"
  - "mRS 0-2 at day 180"
  - "Mortality at day 90 and day 180"
  - "Change in hematoma and perihematomal edema volume on MRI (in a subgroup)"
  - "Serious adverse events (especially infections, ARDS, hypotension)"
gist: "The i-DEF trial investigated the safety and potential efficacy (via a futility design) of the iron chelator deferoxamine in patients with acute intracerebral hemorrhage (ICH), aiming to mitigate secondary brain injury. This multicenter, randomized, placebo-controlled, double-blind phase 2 trial enrolled 294 adult patients (aged 18-80) with spontaneous supratentorial ICH between 2014 and 2017. Patients received either intravenous deferoxamine (32 mg/kg/day) or placebo for 3 days, initiated within 24 hours of onset. The primary outcome was a good clinical outcome (mRS 0-2) at 90 days, assessed for futility. At 90 days, 34% of deferoxamine patients and 33% of placebo patients had an mRS of 0-2 (adjusted absolute risk difference 0.6%, 90% upper confidence bound 6.8%). Since 6.8% was less than the prespecified 12% futility threshold, the trial concluded it would be futile to proceed to a phase 3 trial with the anticipation of deferoxamine significantly improving mRS 0-2 at 90 days. Deferoxamine was found to be safe, with similar rates of serious adverse events and mortality compared to placebo. A post-hoc analysis suggested deferoxamine might favorably alter the trajectory of recovery up to 6 months."

# Commentary
relatedCommentary:
  - type: "Post-hoc Analysis (Recovery Trajectory)"
    title: "Effect of Deferoxamine on Trajectory of Recovery After Intracerebral Hemorrhage: A Post Hoc Analysis of the i-DEF Trial"
    authors: "Foster L, Robinson L, Yeatts SD, et al."
    source: "Stroke"
    date: "2022-03-21" # Online publication date
    pmid: "35306827"
    doi: "10.1161/STROKEAHA.121.037298"
    url: "https://www.ahajournals.org/doi/10.1161/STROKEAHA.121.037298"
    notes: "A key post-hoc analysis suggesting potential effects on longer-term recovery trajectory."
  - type: "HI-DEF Trial (Higher Dose Pilot)"
    title: "High-Dose Deferoxamine in Patients With Intracerebral Hemorrhage (HI-DEF) Trial: A Phase I Study"
    authors: "Selim M, Yeatts S, Goldstein JN, et al."
    source: "Stroke"
    date: "2011" # Published online Aug 25, 2011
    pmid: "21885841"
    doi: "10.1161/STROKEAHA.111.622785"
    url: "https://www.ahajournals.org/doi/10.1161/STROKEAHA.111.622785"
    notes: "An earlier phase I dose-finding and safety study that explored higher doses of deferoxamine and found safety concerns (ARDS) at 62 mg/kg/day."

---

## Clinical Context

Secondary brain injury following intracerebral hemorrhage (ICH) significantly contributes to poor patient outcomes. A key proposed mechanism involves the breakdown of extravasated red blood cells and the subsequent release of iron. This free iron is thought to catalyze the formation of damaging reactive oxygen species, promote inflammation, and contribute to neuronal death and the development of perihematomal edema. Consequently, iron chelation therapy has been explored as a potential neuroprotective strategy to bind this excess iron and mitigate its harmful effects.

Deferoxamine mesylate is an established iron chelator used for conditions of iron overload. Preclinical studies in various animal models of ICH had demonstrated that deferoxamine could reduce brain edema, oxidative stress, and neurological deficits. Early phase human studies, such as the HI-DEF trial, explored the safety and tolerability of different deferoxamine doses, noting potential dose-limiting toxicities (like ARDS at higher doses). The i-DEF (Intracerebral Hemorrhage Deferoxamine) trial was a phase 2 study specifically designed to assess the safety of an intermediate deferoxamine regimen and, using a futility design, to determine if there was sufficient promise of efficacy to justify a larger, definitive phase 3 trial.

## Patient Population

The i-DEF trial was a multicenter study conducted at 40 hospitals in Canada and the USA. It enrolled 294 adult patients, aged 18 to 80 years. Eligible patients presented with:
* Primary, spontaneous, supratentorial ICH confirmed by CT scan.
* The ability to initiate the study drug (deferoxamine or placebo) within 24 hours of ICH symptom onset.

While initial pilot studies had more restrictive GCS/NIHSS criteria, the i-DEF trial aimed for a relatively broad population within the supratentorial ICH spectrum. Key exclusion criteria included infratentorial hemorrhage, known secondary causes of ICH (e.g., tumor, AVM), severe renal insufficiency (creatinine >2.5 mg/dL or dialysis), known hypersensitivity to deferoxamine, pregnancy or lactation, a life expectancy of less than 3 months due to other severe comorbidities, or if the patient was unlikely to complete the follow-up period.

The median age of participants was approximately 61-62 years. Baseline characteristics, including median GCS, NIHSS, and ICH volume, were generally well-balanced between the randomized groups.

## Study Design

i-DEF was a multicenter, randomized, placebo-controlled, double-blind, phase 2 trial that employed a futility design.

### Protocol Details

Eligible patients were randomized in a 1:1 ratio to receive either:

* **Intervention Group (Deferoxamine):** Deferoxamine mesylate administered at a dose of 32 mg/kg per day. The maximum total daily dose was capped at 6000 mg. The drug was given as an intravenous infusion for 3 consecutive days, with treatment initiated within 24 hours of the onset of ICH symptoms.
* **Control Group (Placebo):** Matching placebo (0.9% sodium chloride) administered as an intravenous infusion with the same appearance, volume, and duration as the deferoxamine infusions.

All patients received standard medical care for ICH as per local and international guidelines.

### Outcome Assessment
The primary outcome was functional status assessed at 90 days using the modified Rankin Scale (mRS). Clinical outcomes were assessed by trained personnel who were blinded to the treatment allocation. A subgroup of patients underwent MRI scans to assess hematoma and perihematomal edema volumes.

### Futility Analysis (Primary Endpoint)
The primary analysis was a futility analysis. The trial aimed to determine if it would be futile to proceed to a larger phase 3 efficacy trial. Futility was defined as the 90% upper confidence bound of the absolute risk difference (deferoxamine minus placebo) in the proportion of participants achieving a good clinical outcome (mRS score of 0–2) at day 90 being less than 12% in favor of deferoxamine.

### Risk of Bias Analysis
*(Content for this section needs to be added. Considerations: Double-blind, placebo-controlled design is a major strength. Multicenter nature increases generalizability. Futility design has specific statistical interpretations and implications for "negative" results.)*

## Results

A total of 294 participants were recruited, with 291 (144 deferoxamine, 147 placebo) included in the modified intention-to-treat analysis for the primary outcome. Baseline characteristics were well-matched between the two groups.

### Primary Outcome: Good Clinical Outcome (mRS 0–2) at 90 Days & Futility Assessment
At day 90, the proportion of patients who achieved an mRS score of 0–2 was:
* **Deferoxamine group: 34%** (48 of 140 evaluable patients)
* **Placebo group: 33%** (47 of 143 evaluable patients)

The adjusted absolute risk difference between the groups was 0.6%. The 90% upper confidence bound for this difference was **6.8%**.
Since this upper bound (6.8%) was less than the pre-specified futility threshold of 12%, the trial **met its criteria for futility**. This suggested that a phase 3 trial using this deferoxamine regimen with the primary endpoint of mRS 0-2 at 90 days would be unlikely to show a statistically significant benefit of the magnitude considered clinically important for the futility boundary.

### Secondary Outcomes
* **mRS 0–2 at 180 days:** Interestingly, when assessed at 180 days, the absolute risk difference for an mRS of 0–2 was 8.6% in favor of deferoxamine. The 90% upper confidence bound for this 180-day difference (15.7%) *did* exceed the 12% futility threshold, suggesting a potential for late benefit not captured by the 90-day primary endpoint.
* **Ordinal analysis of mRS scores:** At day 90, there was no significant difference. However, ordinal analysis of mRS scores at day 180 tended to favor the deferoxamine group.
* **Mortality:** Mortality at day 90 was identical in both groups (7%). At day 180, mortality was 10% in the deferoxamine group and 11% in the placebo group.
* **Hematoma and Edema Volume:** The main publication did not report significant differences in changes in hematoma or edema volume based on the MRI substudy.

### Safety Outcomes
The deferoxamine regimen of 32 mg/kg/day for 3 days was found to be safe and well-tolerated.
* The rates of serious adverse events were similar between the deferoxamine group (27% of patients) and the placebo group (33% of patients).
* Importantly, there was no increase in all-cause respiratory compromise, including ARDS, with this deferoxamine regimen. This was a key safety finding, as higher doses of deferoxamine (e.g., 62 mg/kg/day in the HI-DEF pilot) had been associated with increased pulmonary toxicity.

## Final Thoughts & Critical Appraisal

The i-DEF trial was a crucial phase 2 study that provided important insights into the safety and potential utility of deferoxamine as a neuroprotective agent in acute ICH.

Key takeaways:

* **Futility for 90-Day Good Outcome (mRS 0-2):** Based on its primary endpoint and pre-specified futility criteria, the trial concluded that it would be futile to advance the tested regimen of deferoxamine (32 mg/kg/day for 3 days) into a phase 3 trial with the expectation of achieving a substantial improvement in the proportion of patients with an mRS of 0-2 at 90 days.
* **Safety of the Deferoxamine Regimen:** A significant finding was the safety of this intermediate-dose deferoxamine regimen. It was well-tolerated and, notably, did not increase the risk of ARDS or other serious adverse events compared to placebo. This addressed safety concerns raised by earlier studies using higher doses.
* **Signal of Potential Late Benefit:** The most intriguing findings came from secondary and post-hoc analyses looking at outcomes at 180 days. These suggested that deferoxamine might favorably alter the trajectory of recovery, with potential benefits emerging between 90 and 180 days. This highlights that the traditional 90-day endpoint for stroke trials might not capture the full spectrum of recovery or treatment effects in ICH, especially for interventions targeting secondary injury mechanisms.
* **Implications for Future Research:** While the 90-day primary outcome was "futile," the safety profile and the signals of late benefit suggest that iron chelation with deferoxamine (perhaps with different dosing, duration, or in specific patient subgroups) might still warrant further investigation. The i-DEF results strongly argue for considering longer follow-up periods (at least 6 months) in future ICH neuroprotection trials.

The i-DEF trial, therefore, serves as an important example of how a futility design can efficiently answer questions about proceeding to large, expensive phase 3 trials, while also generating valuable safety data and hypothesis-generating secondary findings that can inform future research directions.

## How do we reconcile the results with other studies?
*(Content for this section needs to be added, discussing i-DEF in the context of the HI-DEF pilot study, the underlying science of iron toxicity in ICH, and the broader challenges and lessons learned from neuroprotection trials in acute stroke and brain injury. The importance of appropriate dosing, timing of intervention, patient selection, and choice of outcome measures and follow-up duration are key themes.)*
