---
# Metadata
title: "Intensive vs Standard Treatment of Hyperglycemia and Functional Outcome in Patients With Acute Ischemic Stroke: The SHINE Randomized Clinical Trial" # Official title
acronym: "SHINE" # Stroke Hyperglycemia Insulin Network Effort
datePublished: 2019-08-27 # JAMA print publication date (online July 23, 2019)
journal: "JAMA (Journal of the American Medical Association)"
doi: "10.1001/jama.2019.9346"
pmid: "31334795"
rctIdentifier: "NCT01369069"
fundingSource: "National Institute of Neurological Disorders and Stroke (NINDS), National Institutes of Health (NIH)" # Primary funder
conditions: ["Acute Ischemic Stroke"] # Primary population
topics: ["Glucose Control", "Insulin Therapy", "Supportive Care", "Ischemic Stroke Management"]

# General tags:
# tags: ["stroke", "ischemia", "diabetes", "pharmacotherapy", "critical care"]
# layout: trial # Assumed from src/trials/trials.11tydata.json

# Trial details
studyDesign: "Randomized Controlled Trial (RCT), Multicenter, Open-label treatment with blinded outcome assessment (PROBE-like design), Phase 3, Superiority"
blinding: "Open-label for glucose management strategy (intensive vs. standard insulin); functional outcomes assessed by blinded raters."
enrollmentPeriod: "2012-2018" # Approximate (Trial initiated 2012, primary completion Oct 2018)
keyInclusionCriteria:
  - "Adults aged ≥18 years"
  - "Clinical diagnosis of acute ischemic stroke (neuroimaging to exclude ICH)"
  - "Enrollment within 12 hours of stroke symptom onset"
  - "Hyperglycemia, defined as: blood glucose >110 mg/dL (>6.1 mmol/L) if known history of type 2 diabetes, OR blood glucose ≥150 mg/dL (≥8.3 mmol/L) if no history of diabetes"
  - "NIH Stroke Scale (NIHSS) score of 3-22"
  - "Pre-stroke modified Rankin Scale (mRS) score of 0 (for NIHSS 3-7) or 0-1 (for NIHSS 8-22)"
keyExclusionCriteria:
  - "Primary intracerebral hemorrhage (ICH) or subarachnoid hemorrhage"
  - "Known history of type 1 diabetes mellitus"
  - "Requiring renal dialysis"
  - "Indication for continuous intravenous insulin infusion for other reasons"
  - "Other serious conditions making 90-day survival unlikely"
  - "Pregnancy or breastfeeding"
interventionDetails: "Intensive glucose control: Continuous intravenous insulin infusion using a computerized decision support tool to target blood glucose levels of 80-130 mg/dL (4.4-7.2 mmol/L) for up to 72 hours."
controlDetails: "Standard glucose control: Subcutaneous sliding-scale insulin administered every 1-6 hours to target blood glucose levels of 80-179 mg/dL (4.4-9.9 mmol/L) for up to 72 hours."
pico: "In adult patients with acute ischemic stroke and hyperglycemia, does intensive glucose control (target 80-130 mg/dL with IV insulin) compared with standard glucose control (target 80-179 mg/dL with subcutaneous insulin) improve functional outcome at 90 days?"
primaryOutcome: "Favorable functional outcome at 90 days, based on the modified Rankin Scale (mRS) score (ranging from 0 [no symptoms] to 6 [death]), adjusted for baseline stroke severity (NIHSS)."
secondaryOutcomes:
  - "Distribution of mRS scores at 90 days (ordinal analysis)"
  - "Mortality at 90 days"
  - "NIHSS score at various time points"
  - "Length of hospital stay"
  - "Serious adverse events, especially severe hypoglycemia (≤40 mg/dL)"
gist: "The SHINE trial investigated whether intensive glucose control improved outcomes in patients with acute ischemic stroke and hyperglycemia. This multicenter, randomized trial enrolled 1151 adult patients presenting within 12 hours of ischemic stroke onset between 2012 and 2018. Patients received either intensive glucose control (IV insulin, target 80-130 mg/dL) or standard care (subcutaneous insulin, target 80-179 mg/dL) for up to 72 hours. The primary outcome, favorable functional outcome (mRS based, adjusted for baseline severity) at 90 days, was not significantly different between the intensive treatment group (20.5%) and the standard treatment group (21.6%) (adjusted relative risk, 0.97; 95% CI, 0.87-1.08; p=0.55). Severe hypoglycemia (≤40 mg/dL) occurred more frequently in the intensive treatment group (2.6% vs. 0% in standard group). The trial, stopped early for futility, concluded that intensive glucose control did not improve 90-day functional outcomes and increased the risk of severe hypoglycemia in patients with acute ischemic stroke and hyperglycemia."

# Commentary
relatedCommentary:
  - type: "Editorial/Commentary" # Check for accompanying JAMA editorial
    title: "Glucose Control in Acute Ischemic Stroke — Still No Sweet Spot" # Example title, verify actual
    authors: "To be verified"
    source: "JAMA"
    date: "2019" # Corresponding to publication
    url: "" # Find URL
    doi: "" # Find DOI
    notes: "Likely an editorial discussing the SHINE trial's findings and implications for stroke care."
  - type: "Sub-analysis (sICH post-thrombolysis)"
    title: "Glucose Control and Risk of Symptomatic Intracerebral Hemorrhage Following Thrombolysis for Acute Ischemic Stroke: A SHINE Trial Analysis"
    authors: "Southerland AM, et al." # First author for this sub-analysis
    source: "Neurology"
    date: "2024" # Publication date of this specific analysis
    pmid: "38626363"
    doi: "10.1212/WNL.0000000000209323"
    url: "https://www.neurology.org/doi/10.1212/WNL.0000000000209323"
    notes: "A prespecified analysis from SHINE focusing on risk of sICH after thrombolysis in hyperglycemic ischemic stroke patients."

---

## Clinical Context

Hyperglycemia is common during acute ischemic stroke and is consistently associated with worse clinical outcomes, including increased mortality, greater disability, and a higher risk of hemorrhagic transformation, particularly after thrombolytic therapy. The optimal strategy for managing hyperglycemia in this setting has been uncertain. While observational data link high glucose to poor outcomes, concerns exist that intensive glucose lowering with insulin could lead to hypoglycemia, which is also detrimental to the injured brain.

The SHINE (Stroke Hyperglycemia Insulin Network Effort) trial was a large, phase 3 randomized clinical trial designed to determine whether intensive glucose control (targeting near-normal glucose levels) using intravenous insulin improved functional outcomes compared to standard glucose control (allowing more permissive hyperglycemia) with subcutaneous insulin in patients with acute ischemic stroke and hyperglycemia.

## Patient Population

The SHINE trial enrolled 1151 adult patients (≥18 years) from 70 centers in the USA. Eligible patients had:
* A clinical diagnosis of acute ischemic stroke (neuroimaging was required to exclude intracranial hemorrhage as the primary event).
* Ability to be randomized within 12 hours of stroke symptom onset.
* Hyperglycemia, defined as a blood glucose concentration >110 mg/dL (>6.1 mmol/L) if they had a known history of type 2 diabetes mellitus, or ≥150 mg/dL (≥8.3 mmol/L) if they did not have a history of diabetes.
* A baseline National Institutes of Health Stroke Scale (NIHSS) score between 3 and 22.
* Good pre-stroke functional status (mRS 0 for NIHSS 3-7, or mRS 0-1 for NIHSS 8-22).

Exclusion criteria included known type 1 diabetes mellitus, primary intracerebral or subarachnoid hemorrhage, need for renal dialysis, or other conditions that would make participation or outcome assessment difficult. Approximately 80% of enrolled patients had a history of type 2 diabetes.

## Study Design

SHINE was a multicenter, prospective, randomized, controlled trial with open-label treatment assignment but blinded outcome assessment (PROBE-like design).

### Protocol Details

Eligible patients were randomized 1:1 to one of two glucose management strategies for up to 72 hours:

* **Intervention Group (Intensive Glucose Control):** Received a continuous intravenous insulin infusion managed with a computerized decision support tool, targeting a blood glucose concentration of 80 to 130 mg/dL (4.4 to 7.2 mmol/L).
* **Control Group (Standard Glucose Control):** Received subcutaneous insulin administered on a sliding scale (typically every 1-6 hours based on blood glucose monitoring), targeting a blood glucose concentration of 80 to 179 mg/dL (4.4 to 9.9 mmol/L).

All patients received other standard stroke care as per guidelines, including thrombolysis or endovascular therapy if indicated and eligible.

### Outcome Assessment
The primary efficacy outcome was functional status at 90 days, assessed using the modified Rankin Scale (mRS) and adjusted for baseline stroke severity (NIHSS). Safety outcomes, particularly severe hypoglycemia, were closely monitored. Outcome assessors were blinded to treatment allocation.

### Power Analysis & Statistical Approach
The trial was designed to enroll approximately 1400 patients to detect a 7% absolute difference in favorable outcome at 90 days between the groups with 80% power. The trial included pre-specified interim analyses for futility.

### Risk of Bias Analysis
*(Content for this section needs to be added. Considerations: Open-label treatment (unavoidable for insulin dosing), but blinded outcome assessment is a major strength. Use of computerized decision support for intensive arm. Multicenter design.)*

## Results

A total of 1151 patients were randomized (581 to intensive treatment, 570 to standard treatment). Enrollment was stopped early for futility based on a pre-specified interim analysis. Approximately 97% of patients completed the 90-day follow-up.

During the treatment period, mean blood glucose levels were significantly different:
* Intensive treatment group: 118 mg/dL (6.6 mmol/L)
* Standard treatment group: 179 mg/dL (9.9 mmol/L)

### Primary Outcome: Favorable Functional Outcome at 90 Days
There was **no significant difference** in the proportion of patients with a favorable functional outcome at 90 days (defined by mRS, adjusted for baseline NIHSS) between the two groups:
* **Intensive treatment group: 20.5%** (119 of 581 patients)
* **Standard treatment group: 21.6%** (123 of 570 patients)
(Adjusted relative risk for favorable outcome with intensive treatment, 0.97 [95% CI, 0.87 to 1.08]; P = .55; Unadjusted risk difference, –0.83% [95% CI, –5.72% to 4.06%]).

### Secondary Outcomes
* **Ordinal analysis of mRS scores at 90 days:** No significant difference between groups.
* **Mortality at 90 days:** Similar between groups.

### Safety Outcomes
* **Severe Hypoglycemia (blood glucose ≤40 mg/dL or ≤2.2 mmol/L):** Occurred significantly more frequently in the intensive treatment group:
    * **Intensive treatment group: 2.6%** (15 of 581 patients)
    * **Standard treatment group: 0%** (0 of 570 patients)
    (Risk difference, 2.58% [95% CI, 1.29% to 3.87%]).
* Treatment was stopped early due to hypoglycemia or other adverse events more often in the intensive group (11.2%) compared to the standard group (3.2%).

### ICH-Related Sub-Analyses
Prespecified analyses from SHINE have examined the risk of symptomatic intracerebral hemorrhage (sICH) *following thrombolysis* in the subset of SHINE participants who received IV tPA (about 63% of the cohort). These analyses found:
* Intensive insulin therapy was *not* associated with a reduced risk of post-thrombolysis sICH compared with standard sliding scale insulin.
* However, higher blood glucose levels in the early post-thrombolysis period (first 12 hours) *were* associated with an increased risk of sICH. This suggests that while the SHINE intensive insulin protocol didn't reduce sICH, uncontrolled hyperglycemia after tPA is indeed a risk factor.

## Final Thoughts & Critical Appraisal

The SHINE trial was a large, well-conducted study that provided definitive evidence on the strategy of intensive glucose control in patients with acute ischemic stroke and hyperglycemia.

Key takeaways:

* **No Benefit for Intensive Glucose Control in Ischemic Stroke:** Intensive glucose control (targeting 80-130 mg/dL) for up to 72 hours did not improve 90-day functional outcomes compared to standard glucose control (targeting 80-179 mg/dL) in this population.
* **Increased Risk of Severe Hypoglycemia:** The intensive strategy significantly increased the risk of severe hypoglycemia, a potentially harmful complication.
* **Futility and Early Stoppage:** The trial was stopped early due to futility, indicating that it was highly unlikely a benefit would be found even if enrollment continued to the planned target.
* **Implications for Practice (Ischemic Stroke):** The findings of SHINE do not support the routine use of intensive intravenous insulin therapy to achieve tight glucose control (80-130 mg/dL) in patients with acute ischemic stroke and hyperglycemia. A more moderate approach, such as targeting glucose <180 mg/dL, as often recommended by guidelines, appears to be appropriate, balancing the risks of hyperglycemia with the risks of iatrogenic hypoglycemia.
* **Relevance to Primary ICH (Indirect):** While SHINE did not enroll primary ICH patients, its findings regarding the risks of intensive insulin therapy and hypoglycemia are broadly relevant to critically ill neurological patients. Hyperglycemia is also common in primary ICH and associated with poor outcomes, but the optimal glucose targets and management strategies in primary ICH are still debated and may differ from ischemic stroke due to different pathophysiological considerations. SHINE did not directly address glucose control in primary ICH.

The SHINE trial was a landmark study that clarified the lack of benefit and potential harm of intensive glucose control in acute ischemic stroke, leading to changes in clinical practice and guideline recommendations for that specific condition.

## How do we reconcile the results with other studies?
*(Content for this section needs to be added, discussing SHINE in the context of previous smaller trials or observational studies of glucose control in ischemic stroke, studies in other critically ill populations (e.g., NICE-SUGAR), and the ongoing challenge of managing hyperglycemia in acute brain injury.)*
