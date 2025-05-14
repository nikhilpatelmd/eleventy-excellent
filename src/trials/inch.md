---
# Metadata
title: "Fresh frozen plasma versus prothrombin complex concentrate in patients with intracranial haemorrhage related to vitamin K antagonists (INCH): a randomised trial" # Official title
acronym: "INCH"
datePublished: 2016-06-01 # Lancet Neurology print publication date (online May 9, 2016)
journal: "The Lancet Neurology"
doi: "10.1016/S1474-4422(16)00110-1"
pmid: "27178826" # Same PMID as the idarucizumab INCH paper, which is interesting. Double-check if this is for the FFP vs PCC trial or if there's a different PMID. The DOI is key.
rctIdentifier: "NCT00928915" # International Normalised Ratio Normalisation in Coumadin Associated Intracerebral Haemorrhage Trial
fundingSource: "German Ministry of Education and Research, German Research Foundation, Dietmar Hopp Foundation, University Hospital Heidelberg" # Key funders
conditions: ["Intracerebral Hemorrhage"]
topics: ["Hemostasis", "Reversal Agents", "Anticoagulant Reversal", "Prothrombin Complex Concentrate (PCC)", "Fresh Frozen Plasma (FFP)", "Warfarin Reversal"]

# General tags:
# tags: ["stroke", "bleeding", "pharmacotherapy", "VKA reversal"]
# layout: trial # Assumed from src/trials/trials.11tydata.json

# Trial details
studyDesign: "Randomized Controlled Trial (RCT), Multicenter, Prospective, Open-label, Blinded Endpoint (PROBE design)"
blinding: "Open-label for treatment allocation (FFP vs PCC), but primary outcome (INR normalization) and clinical outcomes (mRS) assessed by personnel blinded to treatment where feasible or by central adjudication."
enrollmentPeriod: "2009-2015" # Approximate (Trial registered 2009, published 2016)
keyInclusionCriteria:
  - "Adults aged ≥18 years"
  - "Spontaneous intracerebral hemorrhage confirmed by CT scan"
  - "Treatment with a vitamin K antagonist (VKA) leading to an INR of ≥2.0"
  - "Symptom onset within 12 hours before admission"
  - "Ability to start study treatment within 1 hour after initial CT scan"
keyExclusionCriteria:
  - "Planned surgical evacuation of hematoma before INR reversal"
  - "Known severe allergic reaction to blood products or PCC"
  - "Known heparin-induced thrombocytopenia type II"
  - "Pregnancy or lactation"
  - "Life expectancy <3 months due to other comorbidities"
  - "Inability to obtain informed consent"
interventionDetails: "Prothrombin complex concentrate (PCC), dosed according to baseline INR and bodyweight (typically 25-50 IU/kg of factor IX equivalent), administered intravenously, plus intravenous vitamin K (10 mg)."
controlDetails: "Fresh frozen plasma (FFP), dosed at 20 mL/kg bodyweight, administered intravenously, plus intravenous vitamin K (10 mg)."
pico: "In adult patients with VKA-associated intracerebral hemorrhage (INR ≥2.0, symptoms <12h), does prothrombin complex concentrate (PCC) compared with fresh frozen plasma (FFP), both with vitamin K, lead to more rapid and effective INR normalization and affect hematoma expansion and clinical outcomes?"
primaryOutcome: "Proportion of patients achieving target INR normalization (≤1.2) within 3 hours after initiation of treatment."
secondaryOutcomes:
  - "Time to INR normalization"
  - "Hematoma volume change from baseline to 24 hours"
  - "Mortality at 7 days and 3 months"
  - "Functional outcome (modified Rankin Scale [mRS] score) at 3 months"
  - "Serious adverse events (especially thromboembolic events and transfusion-related complications)"
gist: "The INCH trial compared the efficacy and safety of prothrombin complex concentrate (PCC) versus fresh frozen plasma (FFP) for rapid INR reversal in patients with vitamin K antagonist (VKA)-associated intracerebral hemorrhage (ICH). This multicenter, randomized, open-label, blinded-endpoint trial enrolled 54 adult patients with VKA-ICH (INR ≥2.0, symptoms <12h) between 2009 and 2015. Patients received either PCC or FFP, both with vitamin K. The primary outcome, INR ≤1.2 within 3 hours, was achieved by significantly more patients in the PCC group (67% [18/27]) compared to the FFP group (9% [2/23]; OR 20.0, 95% CI 3.8–104.7; p<0.0001). PCC also led to faster INR correction. While hematoma volume increase was numerically smaller with PCC, this was not statistically significant. There were no significant differences in 3-month mortality or functional outcomes, but the trial was underpowered for clinical endpoints. Thromboembolic events were infrequent in both groups. The trial concluded that PCC is superior to FFP for rapid INR reversal in VKA-ICH."

# Commentary
relatedCommentary:
  - type: "Editorial/Commentary" # Check for accompanying Lancet Neurology editorial
    title: "Reversing anticoagulation in intracerebral haemorrhage" # Example title, verify actual
    authors: "To be verified"
    source: "The Lancet Neurology"
    date: "2016" # Corresponding to publication
    url: "" # Find URL
    doi: "" # Find DOI
    notes: "Likely an editorial discussing the INCH trial's findings and implications for VKA reversal."
  - type: "AHA/ASA Guidelines"
    title: "2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage"
    authors: "Greenberg SM, Ziai WC, et al."
    source: "Stroke"
    date: "2022"
    doi: "10.1161/STR.0000000000000407"
    url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000407"
    notes: "Guidelines often reference key trials like INCH for recommendations on VKA reversal."
---

## Clinical Context

Intracerebral hemorrhage (ICH) occurring in patients treated with vitamin K antagonists (VKAs) like warfarin is a particularly dangerous subtype, associated with larger hematoma volumes, higher rates of hematoma expansion, and worse clinical outcomes compared to ICH in non-anticoagulated patients. Rapid and effective reversal of VKA-induced coagulopathy is a cornerstone of acute management to limit ongoing bleeding.

For many years, fresh frozen plasma (FFP) combined with intravenous vitamin K was the standard approach for VKA reversal. However, FFP administration has several drawbacks, including the need for ABO compatibility, thawing time, large infusion volumes (which can lead to volume overload), and a relatively slow onset of action in correcting the INR. Prothrombin complex concentrates (PCCs), which contain concentrated coagulation factors II, VII, IX, and X (4-factor PCCs also include protein C and S), offer a potentially faster and more effective means of INR reversal with smaller infusion volumes.

The INCH (International Normalised Ratio Normalisation in Coumadin Associated Intracerebral Haemorrhage) trial was designed to directly compare the efficacy and safety of PCC versus FFP for emergency reversal of VKA anticoagulation in patients with acute ICH.

## Patient Population

The INCH trial was a multicenter study that enrolled 54 adult patients (≥18 years) with VKA-associated ICH. Key inclusion criteria were:
* Spontaneous ICH confirmed by CT scan.
* Ongoing treatment with a VKA resulting in an International Normalized Ratio (INR) of ≥2.0.
* Symptom onset within 12 hours prior to hospital admission.
* Ability to initiate study treatment (PCC or FFP) within 1 hour after the initial diagnostic CT scan.

Exclusion criteria included planned surgical hematoma evacuation before INR reversal could be achieved, known severe allergic reactions to blood products or PCC components, known heparin-induced thrombocytopenia type II, pregnancy or lactation, or a life expectancy of less than 3 months due to other severe comorbidities.

The median age of participants was approximately 75-77 years. Baseline INR values were significantly elevated, as expected.

## Study Design

INCH was a prospective, multicenter, randomized, open-label, superiority trial with blinded endpoint assessment (PROBE design).

### Protocol Details

Eligible patients were randomized 1:1 to receive one of two reversal strategies, both administered alongside 10 mg of intravenous vitamin K:

* **Intervention Group (PCC):** Received 4-factor prothrombin complex concentrate (e.g., Beriplex P/N, Kcentra). The dose was based on the patient's baseline INR and bodyweight, typically ranging from 25 to 50 IU/kg of factor IX equivalent, administered as an intravenous infusion.
* **Control Group (FFP):** Received fresh frozen plasma, dosed at 20 mL/kg bodyweight, administered intravenously.

The goal was to achieve rapid INR normalization.

### Outcome Assessment
The primary outcome was a laboratory measure of anticoagulation reversal. Clinical and safety outcomes were assessed at 7 days and 3 months. Assessors of clinical outcomes (mRS) and radiological outcomes (hematoma volume) were intended to be blinded to treatment allocation where feasible.

### Power Analysis & Statistical Approach
The primary efficacy outcome was the proportion of patients achieving an INR of ≤1.2 within 3 hours after the start of treatment. The trial was powered to detect a significant difference in this primary endpoint between the PCC and FFP groups.

### Risk of Bias Analysis
*(Content for this section needs to be added. Considerations: Open-label nature of treatment allocation (unavoidable given the different infusion characteristics), but efforts made for blinded endpoint assessment. Small sample size for clinical outcomes.)*

## Results

A total of 54 patients were randomized: 27 to PCC and 27 to FFP (though analysis often reports on slightly fewer due to exclusions/withdrawals, e.g., 27 PCC vs. 23 FFP for primary outcome in the paper). Baseline characteristics, including median INR (around 3.0-3.2) and median hematoma volume (around 15-20 mL), were generally similar between the groups.

### Primary Outcome: INR Normalization (≤1.2) within 3 Hours
PCC was significantly more effective and rapid in achieving INR normalization:
* **PCC group: 67%** (18 of 27 patients) achieved an INR ≤1.2 within 3 hours.
* **FFP group: 9%** (2 of 23 patients) achieved an INR ≤1.2 within 3 hours.
This difference was highly statistically significant (Odds Ratio for PCC vs. FFP: 20.0, 95% CI 3.8–104.7; p<0.0001).

### Secondary Outcomes
* **Time to INR Normalization:** PCC achieved INR correction much faster than FFP.
* **Hematoma Volume Change at 24 Hours:** There was a numerical trend towards less hematoma volume increase in the PCC group (median increase 1.1 mL) compared to the FFP group (median increase 5.0 mL), but this difference was not statistically significant (p=0.29), likely due to the small sample size.
* **Mortality at 3 Months:** Mortality was 19% (5/27) in the PCC group and 30% (7/23) in the FFP group (p=0.37).
* **Functional Outcome (mRS) at 3 Months:** There was no statistically significant difference in the distribution of mRS scores or the proportion of patients with favorable outcomes (mRS 0-3) between the groups, though the trial was underpowered for these clinical endpoints.
* **Serious Adverse Events:** The incidence of thromboembolic events was low and similar in both groups (1 in PCC, 1 in FFP). Other serious adverse events were also comparable.

## Final Thoughts & Critical Appraisal

The INCH trial provided important randomized evidence directly comparing PCC and FFP for the emergency reversal of VKA-associated ICH. Its primary finding was the clear superiority of PCC in achieving rapid and effective INR normalization.

Key takeaways:

* **PCC Superior for INR Reversal:** PCC is significantly faster and more effective than FFP in correcting elevated INR to target levels (≤1.2) within 3 hours in patients with VKA-ICH.
* **Potential Impact on Hematoma Expansion:** While not statistically significant in this relatively small trial, the trend towards less hematoma expansion with PCC is biologically plausible, given its more rapid mode of action. Larger trials would be needed to confirm this.
* **Clinical Outcomes Underpowered:** The trial was not powered to detect differences in clinical outcomes like mortality or functional status (mRS). Therefore, while no significant differences were found, this does not rule out a potential clinical benefit (or harm) associated with the more rapid reversal achieved by PCC.
* **Safety:** In this trial, PCC appeared to be safe, with a low rate of thromboembolic complications comparable to FFP. This addressed some earlier concerns about the potential prothrombotic risk of PCCs.
* **Impact on Guidelines:** The INCH trial, along with other similar studies and mechanistic advantages, has strongly contributed to clinical guidelines now recommending 4-factor PCCs (plus vitamin K) as the preferred first-line agent for rapid reversal of VKA anticoagulation in patients with major bleeding, including ICH, over FFP.

The INCH trial was a pivotal study that shifted the paradigm for VKA reversal in acute ICH, emphasizing speed and efficacy of INR correction, for which PCCs are demonstrably superior to FFP.

## How do we reconcile the results with other studies?
*(Content for this section needs to be added, discussing how INCH fits with other VKA reversal studies, the known limitations of FFP, and the rationale for PCCs becoming standard of care.)*
