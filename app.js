const dashboardData = {
  scenarios: {
    "Balanced Growth": {
      recommendationHeadline: "Balanced Growth is the recommended default scenario.",
      recommendationDetail:
        "It provides the strongest overall tradeoff between workload balance, geography, service-line fit, and implementation disruption.",
      summaryMetrics: {
        newOpportunities: 18,
        reassignments: 12,
        leadersOverCapacity: 1,
        workloadImprovement: "22%",
        objectiveScore: "0.72",
        constraintViolations: 1
      },
      baselineSummary: [
        "4 leaders are above planned workload capacity.",
        "New opportunities are not yet assigned into the leadership network.",
        "Workload distribution shows several leader-level outliers."
      ],
      optimizedSummary: [
        "18 new opportunities are absorbed into the network.",
        "Only 1 leader remains above planned capacity.",
        "Workload balance improves while keeping disruption moderate."
      ]
    },
    "Geographic Efficiency": {
      recommendationHeadline: "Geographic Efficiency improves territory alignment.",
      recommendationDetail:
        "This scenario reduces geographic spread but creates more reassignment activity than the balanced approach.",
      summaryMetrics: {
        newOpportunities: 18,
        reassignments: 18,
        leadersOverCapacity: 2,
        workloadImprovement: "17%",
        objectiveScore: "0.77",
        constraintViolations: 2
      },
      baselineSummary: [
        "Current assignments create wide geographic footprints for several leaders.",
        "New opportunities increase territory complexity.",
        "Capacity pressure remains uneven."
      ],
      optimizedSummary: [
        "Assignments are more geographically concentrated.",
        "Travel burden is reduced for several leaders.",
        "More reassignment activity is required to achieve geographic alignment."
      ]
    },
    "Service Line Fit": {
      recommendationHeadline: "Service Line Fit improves specialization alignment.",
      recommendationDetail:
        "This scenario prioritizes matching facilities and opportunities to leaders with stronger service-line familiarity.",
      summaryMetrics: {
        newOpportunities: 18,
        reassignments: 15,
        leadersOverCapacity: 1,
        workloadImprovement: "19%",
        objectiveScore: "0.74",
        constraintViolations: 1
      },
      baselineSummary: [
        "Some leaders hold mixed portfolios across service lines.",
        "New opportunities create specialization decisions.",
        "Current state does not explicitly optimize service-line alignment."
      ],
      optimizedSummary: [
        "More facilities align with leader service-line familiarity.",
        "New opportunities are absorbed with stronger specialization fit.",
        "Moderate reassignment activity is required."
      ]
    },
    "Minimize Disruption": {
      recommendationHeadline: "Minimize Disruption preserves the most current relationships.",
      recommendationDetail:
        "This scenario keeps more current assignments intact, but it leaves more capacity pressure unresolved.",
      summaryMetrics: {
        newOpportunities: 18,
        reassignments: 5,
        leadersOverCapacity: 3,
        workloadImprovement: "8%",
        objectiveScore: "0.83",
        constraintViolations: 3
      },
      baselineSummary: [
        "Current leadership relationships are mostly preserved.",
        "Capacity pressure exists before new growth is absorbed.",
        "Low disruption does not necessarily improve workload balance."
      ],
      optimizedSummary: [
        "Only 5 reassignments are recommended.",
        "Most existing leader-facility relationships remain unchanged.",
        "3 leaders remain above planned workload capacity."
      ]
    }
  },

  newOpportunities: [
    {
      name: "Opportunity A",
      leader: "VP Adams",
      region: "Southeast",
      serviceLine: "Behavioral Health",
      complexity: "High",
      workload: "1.8",
      impact: "Near Capacity"
    },
    {
      name: "Opportunity B",
      leader: "VP Brooks",
      region: "Midwest",
      serviceLine: "Primary Care",
      complexity: "Medium",
      workload: "1.2",
      impact: "Within Capacity"
    },
    {
      name: "Opportunity C",
      leader: "VP Chen",
      region: "West",
      serviceLine: "Specialty Care",
      complexity: "High",
      workload: "1.7",
      impact: "Within Capacity"
    },
    {
      name: "Opportunity D",
      leader: "VP Davis",
      region: "Northeast",
      serviceLine: "Behavioral Health",
      complexity: "Low",
      workload: "0.8",
      impact: "Available Capacity"
    }
  ],

  workload: [
    {
      leader: "VP Adams",
      baseline: 16.2,
      optimized: 18.1,
      capacity: 18,
      status: "Over Capacity"
    },
    {
      leader: "VP Brooks",
      baseline: 19.4,
      optimized: 16.7,
      capacity: 18,
      status: "Within Capacity"
    },
    {
      leader: "VP Chen",
      baseline: 13.8,
      optimized: 15.2,
      capacity: 18,
      status: "Within Capacity"
    },
    {
      leader: "VP Davis",
      baseline: 11.5,
      optimized: 13.1,
      capacity: 18,
      status: "Available Capacity"
    },
    {
      leader: "VP Ellis",
      baseline: 20.1,
      optimized: 17.8,
      capacity: 18,
      status: "Near Capacity"
    }
  ],

  sensitivity: [
    {
      scenario: "Balanced Growth",
      score: "0.72",
      violations: 1,
      reassignments: 12,
      leadersOverCapacity: 1,
      useCase: "Recommended default"
    },
    {
      scenario: "Geographic Efficiency",
      score: "0.77",
      violations: 2,
      reassignments: 18,
      leadersOverCapacity: 2,
      useCase: "Best for territory alignment"
    },
    {
      scenario: "Service Line Fit",
      score: "0.74",
      violations: 1,
      reassignments: 15,
      leadersOverCapacity: 1,
      useCase: "Best for specialization alignment"
    },
    {
      scenario: "Minimize Disruption",
      score: "0.83",
      violations: 3,
      reassignments: 5,
      leadersOverCapacity: 3,
      useCase: "Best for lowest change"
    }
  ],

  leaderDetails: {
    "VP Adams": {
      baselineWorkload: 16.2,
      optimizedWorkload: 18.1,
      capacity: 18,
      status: "Over Capacity",
      rows: [
        {
          name: "Facility 101",
          type: "Existing Facility",
          serviceLine: "Behavioral Health",
          workload: "2.4",
          status: "Retained"
        },
        {
          name: "Opportunity A",
          type: "New Opportunity",
          serviceLine: "Behavioral Health",
          workload: "1.8",
          status: "Added"
        }
      ]
    },
    "VP Brooks": {
      baselineWorkload: 19.4,
      optimizedWorkload: 16.7,
      capacity: 18,
      status: "Within Capacity",
      rows: [
        {
          name: "Facility 204",
          type: "Existing Facility",
          serviceLine: "Primary Care",
          workload: "2.1",
          status: "Retained"
        },
        {
          name: "Opportunity B",
          type: "New Opportunity",
          serviceLine: "Primary Care",
          workload: "1.2",
          status: "Added"
        }
      ]
    },
    "VP Chen": {
      baselineWorkload: 13.8,
      optimizedWorkload: 15.2,
      capacity: 18,
      status: "Within Capacity",
      rows: [
        {
          name: "Facility 310",
          type: "Existing Facility",
          serviceLine: "Specialty Care",
          workload: "2.7",
          status: "Retained"
        },
        {
          name: "Opportunity C",
          type: "New Opportunity",
          serviceLine: "Specialty Care",
          workload: "1.7",
          status: "Added"
        }
      ]
    },
    "VP Davis": {
      baselineWorkload: 11.5,
      optimizedWorkload: 13.1,
      capacity: 18,
      status: "Available Capacity",
      rows: [
        {
          name: "Facility 418",
          type: "Existing Facility",
          serviceLine: "Behavioral Health",
          workload: "1.9",
          status: "Retained"
        },
        {
          name: "Opportunity D",
          type: "New Opportunity",
          serviceLine: "Behavioral Health",
          workload: "0.8",
          status: "Added"
        }
      ]
    },
    "VP Ellis": {
      baselineWorkload: 20.1,
      optimizedWorkload: 17.8,
      capacity: 18,
      status: "Near Capacity",
      rows: [
        {
          name: "Facility 512",
          type: "Existing Facility",
          serviceLine: "Primary Care",
          workload: "2.2",
          status: "Retained"
        },
        {
          name: "Facility 609",
          type: "Existing Facility",
          serviceLine: "Specialty Care",
          workload: "1.6",
          status: "Reassigned Out"
        }
      ]
    }
  },

  network: {
    nodes: [
      { id: "VP Adams", type: "leader" },
      { id: "VP Brooks", type: "leader" },
      { id: "VP Chen", type: "leader" },
      { id: "Facility 101", type: "facility" },
      { id: "Facility 204", type: "facility" },
      { id: "Opportunity A", type: "opportunity" },
      { id: "Opportunity B", type: "opportunity" },
      { id: "Behavioral Health", type: "service-line" },
      { id: "Primary Care", type: "service-line" },
      { id: "Specialty Care", type: "service-line" }
    ],
    edges: [
      { source: "VP Adams", target: "Facility 101", relationship: "current assignment" },
      { source: "VP Adams", target: "Opportunity A", relationship: "recommended assignment" },
      { source: "Opportunity A", target: "Behavioral Health", relationship: "service line" },
      { source: "VP Brooks", target: "Facility 204", relationship: "current assignment" },
      { source: "VP Brooks", target: "Opportunity B", relationship: "recommended assignment" },
      { source: "Opportunity B", target: "Primary Care", relationship: "service line" }
    ]
  }
};

const scenarioSelect = document.getElementById("scenarioSelect");
const leaderSelect = document.getElementById("leaderSelect");

function getBadgeClass(value) {
  const normalized = String(value).toLowerCase();

  if (
    normalized.includes("over") ||
    normalized.includes("risk") ||
    normalized.includes("violation")
  ) {
    return "risk";
  }

  if (
    normalized.includes("near") ||
    normalized.includes("moderate")
  ) {
    return "warning";
  }

  return "good";
}

function renderList(elementId, items) {
  const element = document.getElementById(elementId);
  element.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function renderScenario() {
  const selectedScenario = scenarioSelect.value;
  const scenario = dashboardData.scenarios[selectedScenario];

  document.getElementById("recommendationHeadline").textContent =
    scenario.recommendationHeadline;

  document.getElementById("recommendationDetail").textContent =
    scenario.recommendationDetail;

  document.getElementById("newOpportunitiesKpi").textContent =
    scenario.summaryMetrics.newOpportunities;

  document.getElementById("reassignmentsKpi").textContent =
    scenario.summaryMetrics.reassignments;

  document.getElementById("capacityRiskKpi").textContent =
    scenario.summaryMetrics.leadersOverCapacity;

  document.getElementById("workloadImprovementKpi").textContent =
    scenario.summaryMetrics.workloadImprovement;

  document.getElementById("objectiveScoreKpi").textContent =
    scenario.summaryMetrics.objectiveScore;

  document.getElementById("constraintViolationsKpi").textContent =
    scenario.summaryMetrics.constraintViolations;

  renderList("baselineSummaryList", scenario.baselineSummary);
  renderList("optimizedSummaryList", scenario.optimizedSummary);
}

function renderNewOpportunities() {
  const tbody = document.getElementById("newOpportunityTable");

  tbody.innerHTML = dashboardData.newOpportunities.map(row => `
    <tr>
      <td>${row.name}</td>
      <td>${row.leader}</td>
      <td>${row.region}</td>
      <td>${row.serviceLine}</td>
      <td>${row.complexity}</td>
      <td>${row.workload}</td>
      <td>
        <span class="badge ${getBadgeClass(row.impact)}">${row.impact}</span>
      </td>
    </tr>
  `).join("");
}

function renderWorkload() {
  const container = document.getElementById("workloadList");

  container.innerHTML = dashboardData.workload.map(row => {
    const utilization = Math.round((row.optimized / row.capacity) * 100);
    const barClass =
      utilization > 100 ? "risk" :
      utilization >= 90 ? "warning" :
      "";

    return `
      <div class="workload-row">
        <div class="workload-name">${row.leader}</div>
        <div>
          <div class="bar-track">
            <div class="bar-fill ${barClass}" style="width: ${Math.min(utilization, 120)}%;"></div>
          </div>
        </div>
        <div>${utilization}%</div>
        <div>
          <span class="badge ${getBadgeClass(row.status)}">${row.status}</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderSensitivity() {
  const tbody = document.getElementById("sensitivityTable");

  tbody.innerHTML = dashboardData.sensitivity.map(row => `
    <tr>
      <td>${row.scenario}</td>
      <td>${row.score}</td>
      <td>${row.violations}</td>
      <td>${row.reassignments}</td>
      <td>${row.leadersOverCapacity}</td>
      <td>${row.useCase}</td>
    </tr>
  `).join("");
}

function populateLeaderDropdown() {
  const leaderNames = Object.keys(dashboardData.leaderDetails);

  leaderSelect.innerHTML = leaderNames.map(name => `
    <option value="${name}">${name}</option>
  `).join("");
}

function renderLeaderDrilldown() {
  const selectedLeader = leaderSelect.value;
  const leader = dashboardData.leaderDetails[selectedLeader];

  document.getElementById("leaderBaselineWorkload").textContent =
    leader.baselineWorkload;

  document.getElementById("leaderOptimizedWorkload").textContent =
    leader.optimizedWorkload;

  document.getElementById("leaderCapacity").textContent =
    leader.capacity;

  document.getElementById("leaderStatus").textContent =
    leader.status;

  const tbody = document.getElementById("leaderDetailTable");

  tbody.innerHTML = leader.rows.map(row => `
    <tr>
      <td>${row.name}</td>
      <td>${row.type}</td>
      <td>${row.serviceLine}</td>
      <td>${row.workload}</td>
      <td>
        <span class="badge ${getBadgeClass(row.status)}">${row.status}</span>
      </td>
    </tr>
  `).join("");
}

function renderNetwork(filter = "all") {
  const nodesContainer = document.getElementById("networkNodes");
  const edgesContainer = document.getElementById("networkEdges");

  const filterMap = {
    all: null,
    leaders: "leader",
    facilities: "facility",
    opportunities: "opportunity",
    serviceLines: "service-line"
  };

  const selectedType = filterMap[filter];

  const nodes = selectedType
    ? dashboardData.network.nodes.filter(node => node.type === selectedType)
    : dashboardData.network.nodes;

  nodesContainer.innerHTML = nodes.map(node => `
    <div class="network-node ${node.type}">${node.id}</div>
  `).join("");

  edgesContainer.innerHTML = dashboardData.network.edges.map(edge => `
    <div class="network-edge">
      <strong>${edge.source}</strong> → <strong>${edge.target}</strong>
      <span>(${edge.relationship})</span>
    </div>
  `).join("");
}

function setupNetworkFilters() {
  const buttons = document.querySelectorAll(".filter-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      renderNetwork(button.dataset.filter);
    });
  });
}

scenarioSelect.addEventListener("change", renderScenario);
leaderSelect.addEventListener("change", renderLeaderDrilldown);

renderScenario();
renderNewOpportunities();
renderWorkload();
renderSensitivity();
populateLeaderDropdown();
renderLeaderDrilldown();
renderNetwork();
setupNetworkFilters();
