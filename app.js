const scenarioData = {
  "Balanced Growth": {
    reassignments: 12,
    violations: 1,
    score: "0.72",
    recommendation: "Balanced Growth",
    summary:
      "Balanced Growth provides the best overall tradeoff between capacity, geography, and disruption."
  },
  "Geographic Efficiency": {
    reassignments: 18,
    violations: 2,
    score: "0.77",
    recommendation: "Use if travel burden is the priority",
    summary:
      "Geographic Efficiency reduces territory spread but creates more reassignment activity."
  },
  "Service Line Fit": {
    reassignments: 15,
    violations: 1,
    score: "0.74",
    recommendation: "Use for specialization alignment",
    summary:
      "Service Line Fit prioritizes matching facilities to leaders with stronger service-line familiarity."
  },
  "Minimize Disruption": {
    reassignments: 5,
    violations: 3,
    score: "0.83",
    recommendation: "Lowest change option",
    summary:
      "Minimize Disruption keeps more assignments stable but may leave capacity pressure unresolved."
  },
  "Current State": {
    reassignments: 0,
    violations: 4,
    score: "0.91",
    recommendation: "Baseline only",
    summary:
      "Current State is the baseline view before applying optimization scenarios."
  }
};

const scenarioB = document.getElementById("scenarioB");

function updateDashboard() {
  const selectedScenario = scenarioB.value;
  const data = scenarioData[selectedScenario];

  document.getElementById("reassignments").textContent = data.reassignments;
  document.getElementById("violations").textContent = data.violations;
  document.getElementById("score").textContent = data.score;
  document.getElementById("recommendation").textContent = data.recommendation;
  document.getElementById("summaryText").textContent = data.summary;
}

scenarioB.addEventListener("change", updateDashboard);

updateDashboard();
