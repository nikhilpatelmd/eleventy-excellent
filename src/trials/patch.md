---
# Metadata
title: "Platelet transfusion versus standard care after acute stroke due to spontaneous cerebral haemorrhage associated with antiplatelet therapy (PATCH): a randomised, open-label, phase 3 trial" # Official title from The Lancet
acronym: "PATCH"
datePublished: 2016-06-20 # Lancet publication date (online)
journal: "The Lancet"
doi: "10.1016/S0140-6736(16)30392-0"
pmid: "27238948" # PMID for the Lancet publication
rctIdentifier: "ISRCTN15967361" # ISRCTN identifier
fundingSource: "Netherlands Organisation for Health Research and Development, Sanquin Blood Supply (Netherlands), NHS Blood and Transplant (UK), French Ministry of Health" # Key funders
conditions: ["Intracerebral Hemorrhage"]
topics: ["Hemostasis", "Reversal Agents", "Antiplatelet Therapy Complications"]

# General tags:
# tags: ["stroke", "bleeding", "platelets", "supportive care"]
# layout: trial # Assumed from src/trials/trials.11tydata.json

# Trial details
studyDesign: "Randomized Controlled Trial (RCT), Multicenter, International, Open-label, Phase 3"
blinding: "Open-label (platelet transfusion is visible), but outcome assessment (mRS) was performed by assessors blinded to treatment allocation."
enrollmentPeriod: "2009-2015" # Approximate (trial started Feb 2009, ended Oct 2015)
keyInclusionCriteria:
  - "Adults aged ≥18 years"
  - "Spontaneous intracerebral hemorrhage confirmed by CT or MRI"
  - "Presentation within 6 hours of symptom onset"
  - "Patient had been taking antiplatelet therapy (aspirin, clopidogrel, dipyridamole, or a combination) for at least 7 days before ICH onset"
  - "Glasgow Coma Scale (GCS) score ≥8"
  - "Planned standard care did not include platelet transfusion"
keyExclusionCriteria:
  - "Infratentorial hemorrhage"
  - "Intraventricular hemorrhage as the only or predominant bleeding location"
  - "Known secondary cause of ICH (e.g., aneurysm, AVM, tumor, trauma)"
  - "Planned surgical evacuation of hematoma within 24 hours"
  - "Known platelet dysfunction disorder (other than due to antiplatelet drugs)"
  - "Thrombocytopenia (platelet count <100 × 10⁹/L)"
  - "Contraindication to platelet transfusion"
  - "Pregnancy"
interventionDetails: "Platelet transfusion (one adult therapeutic dose, typically 5 units of apheresis platelets or equivalent pooled platelets) administered as soon as possible after randomization (ideally within 90 minutes), in addition to standard care."
controlDetails: "Standard care alone, according to local guidelines. Platelet transfusion was not allowed unless deemed a life-saving rescue therapy for ongoing bleeding."
pico: "In adult patients (GCS ≥8) with spontaneous supratentorial intracerebral hemorrhage who were on antiplatelet therapy and presented within 6 hours, does platelet transfusion plus standard care, compared with standard care alone, reduce death or dependence at 3 months?"
primaryOutcome: "Shift towards death or dependence (defined as a score of 4–6 on the modified Rankin Scale [mRS]) at 3 months, analyzed with an ordinal logistic regression model."
secondaryOutcomes:
  - "mRS score 0–3 (favourable outcome) at 3 months"
  - "Mortality at 3 months"
  - "Hematoma volume at 24 hours (and change from baseline)"
  - "Neurological deterioration"
  - "Serious adverse events (including thrombotic events and transfusion reactions)"
gist: "The PATCH trial investigated whether platelet transfusion would improve outcomes for patients experiencing intracerebral hemorrhage (ICH) while on antiplatelet therapy. This multicenter, randomized, open-label, phase 3 trial enrolled 190 adult patients (GCS ≥8) from 61 hospitals in the Netherlands, UK, and France between 2009 and 2015. Patients presenting within 6 hours of spontaneous supratentorial ICH and who had been on antiplatelet drugs for ≥7 days were assigned to receive either standard care plus platelet transfusion or standard care alone. The primary outcome, a shift towards death or dependence (mRS 4-6) at 3 months, showed that patients in the platelet transfusion group were more likely to have a poor outcome (odds ratio [OR] for being alive and independent [mRS 0-3] with platelet transfusion 0.46, 95% CI 0.26–0.81; adjusted common OR for death or dependence 2.05, 95% CI 1.18–3.56; p=0.0114). Mortality at 3 months was higher in the platelet transfusion group (27%) compared to standard care (19%), though not statistically significant. The trial concluded that platelet transfusion seemed harmful in patients with ICH on antiplatelet therapy."

# Commentary
relatedCommentary:
  - type: "Editorial/Commentary" # Check for accompanying Lancet editorial
    title: "Platelet transfusion for intracerebral haemorrhage with antiplatelet therapy" # Actual title of accompanying commentary
    authors: "Mark J Alberts, Shamin M Patel"
    source: "The Lancet"
    date: "2016-06-20" # Same date as main paper
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)30592-5/fulltext"
    doi: "10.1016/S0140-6736(16)30592-5"
    notes: "Discusses the surprising and important findings of the PATCH trial."
  - type: "News/Summary"
    title: "PATCH: Platelet Transfusion Harmful in ICH on Antiplatelet Tx" # Example
    authors: "Medical news outlet"
    source: "e.g., Medscape, Neurology Today, NEJM Journal Watch"
    date: "2016"
    url: "" # Find URL
    notes: "Summaries highlighting the unexpected negative outcome."

---

## Clinical Context

Patients experiencing intracerebral hemorrhage (ICH) while on antiplatelet therapy (APT) are common and often have worse outcomes, including a higher risk of hematoma expansion and mortality, compared to those not on APT. The presumed mechanism is impaired platelet function leading to continued or re-bleeding. Reversing this platelet dysfunction with platelet transfusion has been a biologically plausible strategy to improve hemostasis and potentially limit ongoing bleeding. However, prior to the PATCH trial, there was a lack of high-quality evidence from randomized controlled trials to support this practice, and guidelines offered weak or conflicting recommendations. Observational studies had yielded mixed results, and concerns existed about the potential prothrombotic risks of platelet transfusion in patients with underlying cardiovascular or cerebrovascular disease.

The PATCH (Platelet Transfusion versus Standard Care after Spontaneous Cerebral Haemorrhage Associated with Antiplatelet Therapy) trial was designed to determine whether platelet transfusion, in addition to standard care, improved outcomes in patients with acute spontaneous ICH who were taking APT.

## Patient Population

The PATCH trial enrolled 190 adult patients (≥18 years) from 61 hospitals across the Netherlands, the UK, and France. Eligible patients had:
* Spontaneous supratentorial ICH confirmed by CT or MRI.
* Presentation within 6 hours of symptom onset.
* Been taking antiplatelet therapy (aspirin, clopidogrel, dipyridamole, or a combination) for at least 7 days prior to the ICH.
* A Glasgow Coma Scale (GCS) score of ≥8 at randomization.
* Standard care planned by the treating physician did not already include platelet transfusion (clinical equipoise).

Key exclusion criteria included infratentorial hemorrhage, ICH primarily confined to the ventricles, known secondary causes of ICH, planned surgical evacuation of the hematoma within 24 hours, known pre-existing platelet dysfunction disorders (other than drug-induced), thrombocytopenia (platelet count <100 × 10⁹/L), or contraindications to platelet transfusion.

The median age of participants was approximately 74 years. About 60% were male. The most common antiplatelet agent was aspirin alone (around 70%), followed by clopidogrel alone or in combination. The median GCS at randomization was 14. The median time from stroke onset to randomization was about 3.5 hours.

## Study Design

PATCH was an international, multicenter, prospective, randomized, open-label, phase 3 superiority trial.

### Protocol Details

Eligible patients were randomized 1:1 to:

* **Intervention Group (Platelet Transfusion):** Received one standard adult therapeutic dose of platelets (typically 5 units of apheresis platelets or equivalent pooled random-donor platelets) administered intravenously as soon as possible after randomization (ideally within 90 minutes), in addition to standard medical care.
* **Control Group (Standard Care Alone):** Received standard medical care according to local guidelines. Platelet transfusion was not permitted in this group unless it was deemed a life-saving rescue therapy for active, ongoing bleeding by the treating physician.

Standard medical care included measures such as blood pressure management, reversal of anticoagulation if present (though patients on anticoagulants were generally excluded if that was the primary issue), and other supportive therapies.

### Outcome Assessment
The primary outcome was assessed at 3 months. Assessment of the modified Rankin Scale (mRS) was performed by trained assessors who were blinded to the treatment allocation.

### Power Analysis & Statistical Approach
The primary outcome was the shift in the distribution of mRS scores towards death or dependence (mRS 4–6) at 3 months, analyzed using ordinal logistic regression. The trial was initially powered to detect an absolute risk reduction of 15% in death or dependence, requiring 660 patients. However, due to slow recruitment and an interim analysis by the data monitoring committee suggesting potential harm, the trial was stopped early after enrolling 190 patients.

### Risk of Bias Analysis
*(Content for this section needs to be added. Considerations: open-label design for intervention, blinded outcome assessment is a strength, early trial termination due to potential harm.)*

## Results

A total of 190 patients were randomized: 97 to platelet transfusion and 93 to standard care alone. Baseline characteristics were generally similar between the groups. Platelet transfusions were administered at a median of 1.5 hours after randomization in the intervention group.

### Primary Outcome: Shift in mRS towards Death or Dependence at 3 Months
The primary analysis showed that patients in the **platelet transfusion group were more likely to have a worse outcome (higher mRS score, indicating greater death or dependence) at 3 months** compared to the standard care group.
* The adjusted common odds ratio (acOR) for a shift towards a higher (worse) mRS score with platelet transfusion was **2.05** (95% CI 1.18–3.56; p=0.0114).

This means the odds of being in a worse disability category on the mRS were approximately doubled for patients receiving platelet transfusion.

### Secondary Outcomes
* **Alive and Independent (mRS 0–3) at 3 months:** This occurred in fewer patients in the platelet transfusion group (36%) compared to the standard care group (51%). The odds ratio for being alive and independent with platelet transfusion was 0.46 (95% CI 0.26–0.81).
* **Mortality at 3 months:** Was higher in the platelet transfusion group (27% [24/90]) compared to the standard care group (19% [17/88]), although this difference was not statistically significant in isolation (OR 1.55, 95% CI 0.75–3.20).
* **Hematoma Volume:** There was no significant difference in hematoma volume at 24 hours or in the change in volume from baseline between the two groups.
* **Serious Adverse Events:** Serious adverse events were more common in the platelet transfusion group (52%) than in the standard care group (39%).

## Final Thoughts & Critical Appraisal

The PATCH trial yielded surprising and clinically important results, demonstrating that platelet transfusion for patients with acute ICH on antiplatelet therapy not only failed to provide benefit but was associated with a higher odds of death or dependence at 3 months.

Key takeaways:

* **Platelet Transfusion Appears Harmful:** Contrary to biological plausibility and some previous observational data, routine platelet transfusion in this patient population was associated with worse functional outcomes.
* **No Effect on Hematoma Growth:** The intervention did not appear to reduce hematoma expansion, which was one of the hypothesized mechanisms of benefit.
* **Potential Mechanisms of Harm:** The reasons for the worse outcomes with platelet transfusion are not definitively established but could include:
    * Prothrombotic effects: Transfused platelets might increase the risk of thrombotic events in patients with underlying vascular disease, though this was not clearly shown in the specific adverse event rates.
    * Inflammatory effects: Platelet transfusions can be pro-inflammatory.
    * Other unknown adverse effects of transfusion.
* **Early Trial Termination:** The trial was stopped early by the data monitoring committee due to the signal of harm and futility. While early stopping can sometimes affect the precision of estimates, the direction of effect was consistent.
* **Impact on Practice:** The PATCH trial results have had a significant impact on clinical guidelines and practice, leading to strong recommendations *against* the routine use of platelet transfusion for patients with ICH on antiplatelet therapy. It is now generally reserved for specific situations like life-threatening bleeding or if emergency surgery is required and severe platelet dysfunction is documented.

The PATCH trial is a crucial example of how a biologically plausible intervention, when rigorously tested in a randomized trial, can be found to be ineffective or even harmful. It underscores the importance of high-quality evidence to guide clinical decision-making.

## How do we reconcile the results with other studies?
*(Content for this section needs to be added, discussing why PATCH results differed from some earlier observational data or expectations, and its place in the broader context of hemostatic therapy in ICH.)*
