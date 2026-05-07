const dashboardData = {
  scenarios: {
    "Balanced Growth": {
      recommendationHeadline: "Balanced Growth is the recommended default scenario.",
      recommendationDetail:
        "This scenario provides the best overall tradeoff between workload balance, opportunity absorption, geography, service-line alignment, and implementation disruption.",
      summaryMetrics: {
        totalLeaders: 14,
        newOpportunities: 26,
        reassignments: 14,
        leadersOverCapacity: 2,
        workloadImprovement: "18%",
        objectiveScore: "0.72"
      },
      baselineNarrative: [
        "Several leaders enter the growth scenario with limited available capacity.",
        "New opportunities are not yet integrated into the current leadership structure.",
        "Workload concentration creates visible outliers across the network."
      ],
      optimizedNarrative: [
        "All new opportunities are assigned into the leadership network.",
        "Leaders over capacity are reduced while maintaining moderate disruption.",
        "The model creates a stronger balance between growth absorption and operational continuity."
      ]
    },
    "Capacity Protection": {
      recommendationHeadline: "Capacity Protection is strongest when workload risk is the primary concern.",
      recommendationDetail:
        "This scenario prioritizes preventing leader overload, even if it creates more reassignment activity or slightly weaker geographic alignment.",
      summaryMetrics: {
        totalLeaders: 14,
        newOpportunities: 26,
        reassignments: 19,
        leadersOverCapacity: 1,
        workloadImprovement: "24%",
        objectiveScore: "0.69"
      },
      baselineNarrative: [
        "Current assignments leave multiple leaders near or above workload limits.",
        "Growth opportunities increase the risk of uneven leader portfolios.",
        "Capacity risk is the dominant constraint in this view."
      ],
      optimizedNarrative: [
        "Only one leader remains above capacity.",
        "The workload curve is flatter across the leadership network.",
        "More changes are required to achieve the capacity-protection outcome."
      ]
    },
    "Geographic Efficiency": {
      recommendationHeadline: "Geographic Efficiency creates stronger territory alignment.",
      recommendationDetail:
        "This scenario prioritizes geographic fit and travel burden, but may create more leadership movement than the balanced scenario.",
      summaryMetrics: {
        totalLeaders: 14,
        newOpportunities: 26,
        reassignments: 21,
        leadersOverCapacity: 3,
        workloadImprovement: "14%",
        objectiveScore: "0.77"
      },
      baselineNarrative: [
        "Some leaders carry broad geographic footprints.",
        "New opportunities create additional territory complexity.",
        "The baseline state does not explicitly optimize geographic proximity."
      ],
      optimizedNarrative: [
        "Assignments become more geographically concentrated.",
        "Travel and territory spread are reduced for several leaders.",
        "The scenario requires more reassignment activity to achieve better geographic fit."
      ]
    },
    "Service Line Fit": {
      recommendationHeadline: "Service Line Fit improves specialization alignment.",
      recommendationDetail:
        "This scenario prioritizes matching facilities and opportunities to leaders with stronger service-line familiarity.",
      summaryMetrics: {
        totalLeaders: 14,
        newOpportunities: 26,
        reassignments: 17,
        leadersOverCapacity: 2,
        workloadImprovement: "16%",
        objectiveScore: "0.74"
      },
      baselineNarrative: [
        "Current portfolios include mixed service-line exposure across leaders.",
        "Growth creates new specialization decisions.",
        "The baseline state does not explicitly prioritize service-line alignment."
      ],
      optimizedNarrative: [
        "More assignments align with leader service-line familiarity.",
        "New opportunities are absorbed with stronger specialization fit.",
        "Some reassignment activity is needed to improve portfolio alignment."
      ]
    },
    "Minimize Disruption": {
      recommendationHeadline: "Minimize Disruption preserves the most existing relationships.",
      recommendationDetail:
        "This scenario keeps more current assignments intact, but it leaves more capacity pressure unresolved.",
      summaryMetrics: {
        totalLeaders: 14,
        newOpportunities: 26,
        reassignments: 6,
        leadersOverCapacity: 5,
        workloadImprovement: "7%",
        objectiveScore: "0.86"
      },
      baselineNarrative: [
        "Existing leader-facility relationships are largely maintained.",
        "Capacity pressure remains concentrated among several leaders.",
        "Low disruption limits how much the network can rebalance."
      ],
      optimizedNarrative: [
        "Only a small number of reassignments are recommended.",
        "Most current relationships remain intact.",
        "This option may be easiest to implement but leaves more workload risk in place."
      ]
    }
  },

  leaders: [
    { name: "VP Adams", baseline: 18.2, optimized: 17.4, capacity: 18, status: "Near Capacity", region: "Southeast" },
    { name: "VP Brooks", baseline: 21.1, optimized: 18.7, capacity: 18, status: "Over Capacity", region: "Midwest" },
    { name: "VP Chen", baseline: 14.4, optimized: 16.2, capacity: 18, status: "Within Capacity", region: "West" },
    { name: "VP Davis", baseline: 11.9, optimized: 14.6, capacity: 18, status: "Available Capacity", region: "Northeast" },
    { name: "VP Ellis", baseline: 19.8, optimized: 17.9, capacity: 18, status: "Near Capacity", region: "Southwest" },
    { name: "VP Foster", baseline: 16.3, optimized: 16.8, capacity: 18, status: "Within Capacity", region: "Central" },
    { name: "VP Garcia", baseline: 20.6, optimized: 18.4, capacity: 18, status: "Over Capacity", region: "West" },
    { name: "VP Harris", baseline: 13.7, optimized: 15.1, capacity: 18, status: "Within Capacity", region: "Northeast" },
    { name: "VP Ibrahim", baseline: 12.8, optimized: 14.0, capacity: 18, status: "Available Capacity", region: "Midwest" },
    { name: "VP Johnson", baseline: 17.6, optimized: 17.1, capacity: 18, status: "Within Capacity", region: "Southeast" },
    { name: "VP Kim", baseline: 15.2, optimized: 16.4, capacity: 18, status: "Within Capacity", region: "West" },
    { name: "VP Lopez", baseline: 10.8, optimized: 13.5, capacity: 18, status: "Available Capacity", region: "Southwest" },
    { name: "VP Morgan", baseline: 18.9, optimized: 17.7, capacity: 18, status: "Near Capacity", region: "Central" },
    { name: "VP Nelson", baseline: 13.2, optimized: 15.8, capacity: 18, status: "Within Capacity", region: "Northeast" }
  ],

  opportunities: [
    { name: "Opportunity A", leader: "VP Davis", region: "Northeast", serviceLine: "Behavioral Health", complexity: "High", workload: 1.8, impact: "Within Capacity", review: true },
    { name: "Opportunity B", leader: "VP Chen", region: "West", serviceLine: "Primary Care", complexity: "Medium", workload: 1.2, impact: "Within Capacity", review: false },
    { name: "Opportunity C", leader: "VP Lopez", region: "Southwest", serviceLine: "Specialty Care", complexity: "High", workload: 1.7, impact: "Available Capacity", review: false },
    { name: "Opportunity D", leader: "VP Ibrahim", region: "Midwest", serviceLine: "Behavioral Health", complexity: "Low", workload: 0.8, impact: "Available Capacity", review: false },
    { name: "Opportunity E", leader: "VP Brooks", region: "Midwest", serviceLine: "Urgent Care", complexity: "High", workload: 1.9, impact: "Over Capacity", review: true },
    { name: "Opportunity F", leader: "VP Kim", region: "West", serviceLine: "Primary Care", complexity: "Medium", workload: 1.1, impact: "Within Capacity", review: false },
    { name: "Opportunity G", leader: "VP Harris", region: "Northeast", serviceLine: "Specialty Care", complexity: "Medium", workload: 1.4, impact: "Within Capacity", review: false },
    { name: "Opportunity H", leader: "VP Foster", region: "Central", serviceLine: "Behavioral Health", complexity: "High", workload: 1.6, impact: "Within Capacity", review: true },
    { name: "Opportunity I", leader: "VP Johnson", region: "Southeast", serviceLine: "Primary Care", complexity: "Low", workload: 0.9, impact: "Within Capacity", review: false },
    { name: "Opportunity J", leader: "VP Adams", region: "Southeast", serviceLine: "Specialty Care", complexity: "High", workload: 1.5, impact: "Near Capacity", review: true }
  ],

  sensitivity: [
    { scenario: "Capacity Protection", score: 0.69, violations: 1, reassignments: 19, overCapacity: 1, use: "Best for reducing workload risk" },
    { scenario: "Balanced Growth", score: 0.72, violations: 2, reassignments: 14, overCapacity: 2, use: "Recommended default" },
    { scenario: "Service Line Fit", score: 0.74, violations: 2, reassignments: 17, overCapacity: 2, use: "Best for specialization alignment" },
    { scenario: "Geographic Efficiency", score: 0.77, violations: 3, reassignments: 21, overCapacity: 3, use: "Best for territory alignment" },
    { scenario: "Minimize Disruption", score: 0.86, violations: 5, reassignments: 6, overCapacity: 5, use: "Best for lowest implementation change" }
  ],

  leaderDetails: {
    "VP Adams": [
      { name: "Facility 101", type: "Existing Facility", serviceLine: "Behavioral Health", region: "Southeast", workload: 2.4, status: "Retained" },
      { name: "Facility 117", type: "Existing Facility", serviceLine: "Primary Care", region: "Southeast", workload: 2.1, status: "Retained" },
      { name: "Opportunity J", type: "New Opportunity", serviceLine: "Specialty Care", region: "Southeast", workload: 1.5, status: "Added" }
    ],
    "VP Brooks": [
      { name: "Facility 204", type: "Existing Facility", serviceLine: "Urgent Care", region: "Midwest", workload: 2.7, status: "Retained" },
      { name: "Facility 219", type: "Existing Facility", serviceLine: "Primary Care", region: "Midwest", workload: 1.8, status: "Reassigned Out" },
      { name: "Opportunity E", type: "New Opportunity", serviceLine: "Urgent Care", region: "Midwest", workload: 1.9, status: "Review Required" }
    ],
    "VP Chen": [
      { name: "Facility 310", type: "Existing Facility", serviceLine: "Primary Care", region: "West", workload: 2.0, status: "Retained" },
      { name: "Opportunity B", type: "New Opportunity", serviceLine: "Primary Care", region: "West", workload: 1.2, status: "Added" }
    ],
    "VP Davis": [
      { name: "Facility 405", type: "Existing Facility", serviceLine: "Behavioral Health", region: "Northeast", workload: 1.6, status: "Retained" },
      { name: "Opportunity A", type: "New Opportunity", serviceLine: "Behavioral Health", region: "Northeast", workload: 1.8, status: "Review Required" }
    ]
  },

  network: {
    nodes: [
      { id: "VP Adams", type: "leader", review: false },
      { id: "VP Brooks", type: "leader", review: true },
      { id: "VP Chen", type: "leader", review: false },
      { id: "VP Davis", type: "leader", review: true },
      { id: "Facility 101", type: "facility", review: false },
      { id: "Facility 204", type: "facility", review: false },
      { id: "Facility 310", type: "facility", review: false },
      { id: "Opportunity A", type: "opportunity", review: true },
      { id: "Opportunity B", type: "opportunity", review: false },
      { id: "Opportunity E", type: "opportunity", review: true },
      { id: "Behavioral Health", type: "service-line", review: false },
      { id: "Primary Care", type: "service-line", review: false },
      { id: "Urgent Care", type: "service-line", review: false }
    ],
    edges: [
      { source: "VP Adams", target: "Facility 101", relationship: "current assignment" },
      { source: "VP Brooks", target: "Facility 204", relationship: "current assignment" },
      { source: "VP Chen", target: "Facility 310", relationship: "current assignment" },
      { source: "VP Davis", target: "Opportunity A", relationship: "recommended assignment" },
      { source: "VP Chen", target: "Opportunity B", relationship: "recommended assignment" },
      { source: "VP Brooks", target: "Opportunity E", relationship: "review required" },
      { source: "Opportunity A", target: "Behavioral Health", relationship: "service line" },
      { source: "Opportunity B", target: "Primary Care", relationship: "service line" },
      { source: "Opportunity E", target: "Urgent Care", relationship: "service line" }
    ]
  }
};

const scenarioSelect = document.getElementById("scenarioSelect");
const leaderFilter = document.getElementById("leaderFilter");
const drilldownLeaderSelect = document.getElementById("drilldownLeaderSelect");
const opportunitySearch = document.getElementById("opportunitySearch");
const opportunityReviewFilter = document.getElementById("opportunityReviewFilter");
const workloadStatusFilter = document.getElementById("workloadStatusFilter");

function getBadgeClass(value) {
  const text = String(value).toLowerCase();

  if (text.includes("over") || text.includes("review") || text.includes("required")) {
    return "risk";
  }

  if (text.includes("near") || text.includes("medium")) {
    return "warning";
  }

  if (text.includes("retained") || text.includes("within") || text.includes("available") || text.includes("added")) {
    return "good";
  }

  return "neutral";
}

function renderList(id, items) {
  const element = document.getElementById(id);
  element.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function renderScenario() {
  const scenario = dashboardData.scenarios[scenarioSelect.value];

  document.getElementById("recommendationHeadline").textContent = scenario.recommendationHeadline;
  document.getElementById("recommendationDetail").textContent = scenario.recommendationDetail;

  document.getElementById("totalLeadersMetric").textContent = scenario.summaryMetrics.totalLeaders;
  document.getElementById("newOpportunitiesMetric").textContent = scenario.summaryMetrics.newOpportunities;
  document.getElementById("reassignmentsMetric").textContent = scenario.summaryMetrics.reassignments;
  document.getElementById("leadersOverCapacityMetric").textContent = scenario.summaryMetrics.leadersOverCapacity;
  document.getElementById("workloadImprovementMetric").textContent = scenario.summaryMetrics.workloadImprovement;
  document.getElementById("objectiveScoreMetric").textContent = scenario.summaryMetrics.objectiveScore;

  renderList("baselineNarrative", scenario.baselineNarrative);
  renderList("optimizedNarrative", scenario.optimizedNarrative);
}

function populateLeaderSelectors() {
  const leaders = dashboardData.leaders.map(leader => leader.name);

  leaders.forEach(name => {
    const filterOption = document.createElement("option");
    filterOption.value = name;
    filterOption.textContent = name;
    leaderFilter.appendChild(filterOption);

    const drilldownOption = document.createElement("option");
    drilldownOption.value = name;
    drilldownOption.textContent = name;
    drilldownLeaderSelect.appendChild(drilldownOption);
  });
}

function renderBarChart(containerId, rows, options = {}) {
  const container = document.getElementById(containerId);
  const maxValue = Math.max(...rows.map(row => row.value), 1);

  container.innerHTML = rows.map(row => {
    const width = Math.max((row.value / maxValue) * 100, 4);
    const fillClass = options.fillClass || "";

    return `
      <div class="chart-row">
        <div class="chart-label">${row.label}</div>
        <div class="chart-track">
          <div class="chart-fill ${fillClass}" style="width: ${width}%"></div>
        </div>
        <div class="chart-value">${row.displayValue ?? row.value}</div>
      </div>
    `;
  }).join("");
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function renderOpportunityCharts() {
  const byLeader = countBy(dashboardData.opportunities, "leader");
  const byServiceLine = countBy(dashboardData.opportunities, "serviceLine");

  renderBarChart(
    "opportunitiesByLeaderChart",
    Object.entries(byLeader).map(([label, value]) => ({ label, value }))
  );

  renderBarChart(
    "opportunitiesByServiceLineChart",
    Object.entries(byServiceLine).map(([label, value]) => ({ label, value })),
    { fillClass: "green" }
  );
}

function renderOpportunityTable() {
  const query = opportunitySearch.value.toLowerCase();
  const reviewFilter = opportunityReviewFilter.value;

  const rows = dashboardData.opportunities.filter(row => {
    const matchesSearch = [
      row.name,
      row.leader,
      row.region,
      row.serviceLine,
      row.complexity,
      row.impact
    ].join(" ").toLowerCase().includes(query);

    const matchesReview =
      reviewFilter === "all" ||
      (reviewFilter === "review" && row.review) ||
      (reviewFilter === "clear" && !row.review);

    return matchesSearch && matchesReview;
  });

  document.getElementById("opportunityTable").innerHTML = rows.map(row => `
    <tr>
      <td>${row.name}</td>
      <td>${row.leader}</td>
      <td>${row.region}</td>
      <td>${row.serviceLine}</td>
      <td>${row.complexity}</td>
      <td>${row.workload}</td>
      <td><span class="badge ${getBadgeClass(row.impact)}">${row.impact}</span></td>
      <td><span class="badge ${row.review ? "risk" : "good"}">${row.review ? "Review Required" : "Clear"}</span></td>
    </tr>
  `).join("");
}

function getVisibleLeaders() {
  const selectedLeader = leaderFilter.value;
  const selectedStatus = workloadStatusFilter.value;

  return dashboardData.leaders.filter(leader => {
    const matchesLeader = selectedLeader === "all" || leader.name === selectedLeader;
    const matchesStatus = selectedStatus === "all" || leader.status === selectedStatus;

    return matchesLeader && matchesStatus;
  });
}

function renderWorkloadChart() {
  const leaders = getVisibleLeaders();

  document.getElementById("workloadChart").innerHTML = leaders.map(leader => {
    const baselinePercent = Math.round((leader.baseline / leader.capacity) * 100);
    const optimizedPercent = Math.round((leader.optimized / leader.capacity) * 100);

    const optimizedClass =
      optimizedPercent > 100 ? "red" :
      optimizedPercent >= 95 ? "yellow" :
      "green";

    return `
      <div class="workload-row">
        <div class="workload-name">${leader.name}</div>
        <div class="workload-bars">
          <div class="workload-bar-line">
            <span class="workload-bar-label">Baseline</span>
            <div class="chart-track">
              <div class="chart-fill" style="width: ${Math.min(baselinePercent, 120)}%"></div>
            </div>
          </div>
          <div class="workload-bar-line">
            <span class="workload-bar-label">Optimized</span>
            <div class="chart-track">
              <div class="chart-fill ${optimizedClass}" style="width: ${Math.min(optimizedPercent, 120)}%"></div>
            </div>
          </div>
        </div>
        <div>${optimizedPercent}%</div>
        <div><span class="badge ${getBadgeClass(leader.status)}">${leader.status}</span></div>
      </div>
    `;
  }).join("");
}

function renderSensitivity() {
  renderBarChart(
    "objectiveScoreChart",
    dashboardData.sensitivity.map(row => ({
      label: row.scenario,
      value: row.score,
      displayValue: row.score.toFixed(2)
    }))
  );

  renderBarChart(
    "constraintViolationChart",
    dashboardData.sensitivity.map(row => ({
      label: row.scenario,
      value: row.violations
    })),
    { fillClass: "red" }
  );

  document.getElementById("sensitivityTable").innerHTML = dashboardData.sensitivity.map(row => `
    <tr>
      <td>${row.scenario}</td>
      <td>${row.score.toFixed(2)}</td>
      <td>${row.violations}</td>
      <td>${row.reassignments}</td>
      <td>${row.overCapacity}</td>
      <td>${row.use}</td>
    </tr>
  `).join("");
}

function getLeaderByName(name) {
  return dashboardData.leaders.find(leader => leader.name === name);
}

function renderLeaderDrilldown() {
  const selectedLeaderName = drilldownLeaderSelect.value;
  const leader = getLeaderByName(selectedLeaderName);
  const details = dashboardData.leaderDetails[selectedLeaderName] || [];

  document.getElementById("leaderBaselineWorkload").textContent = leader.baseline;
  document.getElementById("leaderOptimizedWorkload").textContent = leader.optimized;
  document.getElementById("leaderCapacity").textContent = leader.capacity;
  document.getElementById("leaderStatus").textContent = leader.status;

  renderBarChart("leaderWorkloadMiniChart", [
    { label: "Baseline", value: leader.baseline },
    { label: "Optimized", value: leader.optimized },
    { label: "Capacity", value: leader.capacity }
  ]);

  const serviceLineCounts = countBy(details, "serviceLine");
  renderBarChart(
    "leaderPortfolioMixChart",
    Object.entries(serviceLineCounts).map(([label, value]) => ({ label, value })),
    { fillClass: "green" }
  );

  document.getElementById("leaderDetailTable").innerHTML = details.map(row => `
    <tr>
      <td>${row.name}</td>
      <td>${row.type}</td>
      <td>${row.serviceLine}</td>
      <td>${row.region}</td>
      <td>${row.workload}</td>
      <td><span class="badge ${getBadgeClass(row.status)}">${row.status}</span></td>
    </tr>
  `).join("");
}

function renderNetwork(filter = "all") {
  const nodes = dashboardData.network.nodes.filter(node => {
    if (filter === "all") return true;
    if (filter === "review") return node.review;
    return node.type === filter;
  });

  const visibleNodeIds = new Set(nodes.map(node => node.id));

  document.getElementById("networkNodes").innerHTML = nodes.map(node => `
    <div class="network-node ${node.type} ${node.review ? "review" : ""}">
      ${node.id}
    </div>
  `).join("");

  const edges = dashboardData.network.edges.filter(edge => {
    if (filter === "all") return true;
    return visibleNodeIds.has(edge.source) || visibleNodeIds.has(edge.target);
  });

  document.getElementById("networkEdges").innerHTML = edges.map(edge => `
    <div class="network-edge">
      <strong>${edge.source}</strong> → <strong>${edge.target}</strong>
      <span>(${edge.relationship})</span>
    </div>
  `).join("");
}

function setupNetworkButtons() {
  document.querySelectorAll(".network-filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".network-filter").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      renderNetwork(button.dataset.filter);
    });
  });
}

scenarioSelect.addEventListener("change", renderScenario);
leaderFilter.addEventListener("change", renderWorkloadChart);
workloadStatusFilter.addEventListener("change", renderWorkloadChart);
opportunitySearch.addEventListener("input", renderOpportunityTable);
opportunityReviewFilter.addEventListener("change", renderOpportunityTable);
drilldownLeaderSelect.addEventListener("change", renderLeaderDrilldown);

populateLeaderSelectors();
renderScenario();
renderOpportunityCharts();
renderOpportunityTable();
renderWorkloadChart();
renderSensitivity();
renderLeaderDrilldown();
renderNetwork();
setupNetworkButtons();
