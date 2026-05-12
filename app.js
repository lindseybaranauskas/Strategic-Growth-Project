const dashboardData = {
  currentState: {
    totalLeaders: 32,
    existingFacilities: 128,
    leadersOverCapacity: 7,
    averageUtilization: "83%",
    highestUtilization: "117%",
    currentRiskAreas: 9,
    averageWorkload: 15.4,
    serviceLineScope: [
      {
        serviceLine: "EVS",
        facilities: 68,
        activeVPs: 24,
        avgUtilization: "86%",
        avgWorkload: 15.9,
        leadersOverCapacity: 4,
        networkShare: "53%",
        risk: "Elevated"
      },
      {
        serviceLine: "CNS",
        facilities: 60,
        activeVPs: 21,
        avgUtilization: "79%",
        avgWorkload: 14.7,
        leadersOverCapacity: 3,
        networkShare: "47%",
        risk: "Moderate"
      }
    ],
    regionalScope: [
      {
        region: "Southeast",
        facilities: 29,
        activeVPs: 8,
        avgUtilization: "84%",
        highestUtilization: "108%",
        leadersOverCapacity: 2,
        risk: "Elevated"
      },
      {
        region: "Midwest",
        facilities: 24,
        activeVPs: 7,
        avgUtilization: "81%",
        highestUtilization: "111%",
        leadersOverCapacity: 1,
        risk: "Moderate"
      },
      {
        region: "West",
        facilities: 31,
        activeVPs: 9,
        avgUtilization: "88%",
        highestUtilization: "117%",
        leadersOverCapacity: 2,
        risk: "Elevated"
      },
      {
        region: "Northeast",
        facilities: 26,
        activeVPs: 7,
        avgUtilization: "79%",
        highestUtilization: "104%",
        leadersOverCapacity: 1,
        risk: "Moderate"
      },
      {
        region: "Southwest",
        facilities: 18,
        activeVPs: 5,
        avgUtilization: "76%",
        highestUtilization: "99%",
        leadersOverCapacity: 1,
        risk: "Contained"
      }
    ],
    observations: [
      {
        title: "Capacity pressure is uneven",
        body: "A subset of VPs carries elevated workload before new growth is absorbed."
      },
      {
        title: "EVS has the larger footprint",
        body: "EVS represents a slightly larger share of facility coverage and capacity pressure."
      },
      {
        title: "Regional coverage is not balanced",
        body: "The West and Southeast show higher utilization and more visible risk signals."
      },
      {
        title: "Current state needs review",
        body: "The baseline network should be evaluated before assigning future growth."
      }
    ]
  },

  scenarios: {
    "Balanced Growth": {
      recommendationHeadline: "Balanced Growth is the recommended default scenario.",
      recommendationDetail:
        "This scenario provides the strongest overall tradeoff between workload balance, new opportunity absorption, geography, EVS/CNS alignment, and implementation disruption.",
      optimizedMetrics: {
        totalLeaders: 32,
        newOpportunities: 26,
        reassignments: 14,
        leadersOverCapacity: 2,
        averageUtilization: "80%",
        highestUtilization: "103%",
        workloadImprovement: "18%",
        objectiveScore: "0.72",
        constraintViolations: 2
      },
      leaderMultiplier: 0.96,
      changeBias: 0,
      baselineNarrative: [
        "Current assignments show uneven capacity pressure across the VP network.",
        "New opportunities are not yet integrated into the current leadership structure.",
        "Several regions and service-line portfolios require review before growth is absorbed."
      ],
      optimizedNarrative: [
        "All new opportunities are assigned into the leadership network.",
        "Leaders over capacity are reduced while maintaining moderate implementation disruption.",
        "The model balances capacity, geography, EVS/CNS alignment, and reassignment impact."
      ]
    },
    "Capacity Protection": {
      recommendationHeadline: "Capacity Protection is strongest when workload risk is the primary concern.",
      recommendationDetail:
        "This scenario prioritizes preventing VP overload, even if it creates more reassignment activity or slightly weaker geographic alignment.",
      optimizedMetrics: {
        totalLeaders: 32,
        newOpportunities: 26,
        reassignments: 19,
        leadersOverCapacity: 1,
        averageUtilization: "78%",
        highestUtilization: "99%",
        workloadImprovement: "24%",
        objectiveScore: "0.69",
        constraintViolations: 1
      },
      leaderMultiplier: 0.91,
      changeBias: -0.6,
      baselineNarrative: [
        "Current assignments leave multiple VPs near or above capacity.",
        "New growth increases the risk of uneven leadership portfolios.",
        "Capacity risk is the dominant constraint in this view."
      ],
      optimizedNarrative: [
        "Only one VP remains above capacity.",
        "The workload curve is flatter across the leadership network.",
        "More reassignment activity is required to achieve the capacity-protection outcome."
      ]
    },
    "Geographic Efficiency": {
      recommendationHeadline: "Geographic Efficiency creates stronger territory alignment.",
      recommendationDetail:
        "This scenario prioritizes geographic fit and travel burden, but may create more leadership movement than the balanced scenario.",
      optimizedMetrics: {
        totalLeaders: 32,
        newOpportunities: 26,
        reassignments: 21,
        leadersOverCapacity: 3,
        averageUtilization: "82%",
        highestUtilization: "106%",
        workloadImprovement: "14%",
        objectiveScore: "0.77",
        constraintViolations: 3
      },
      leaderMultiplier: 0.99,
      changeBias: 0.2,
      baselineNarrative: [
        "Some VPs carry broad geographic footprints.",
        "New opportunities create additional territory complexity.",
        "The baseline state does not explicitly optimize proximity or territory compactness."
      ],
      optimizedNarrative: [
        "Assignments become more geographically concentrated.",
        "Travel and territory spread are reduced for several VPs.",
        "This scenario requires more movement to improve geographic fit."
      ]
    },
    "Service Line Fit": {
      recommendationHeadline: "Service Line Fit improves EVS and CNS alignment.",
      recommendationDetail:
        "This scenario prioritizes matching facilities and opportunities to VPs with stronger EVS or CNS portfolio alignment.",
      optimizedMetrics: {
        totalLeaders: 32,
        newOpportunities: 26,
        reassignments: 17,
        leadersOverCapacity: 2,
        averageUtilization: "81%",
        highestUtilization: "104%",
        workloadImprovement: "16%",
        objectiveScore: "0.74",
        constraintViolations: 2
      },
      leaderMultiplier: 0.94,
      changeBias: -0.1,
      baselineNarrative: [
        "Current portfolios include mixed EVS and CNS exposure across VPs.",
        "Growth creates new service-line assignment decisions.",
        "The baseline state does not explicitly prioritize EVS/CNS alignment."
      ],
      optimizedNarrative: [
        "More assignments align with VP EVS or CNS portfolio familiarity.",
        "New opportunities are absorbed with stronger operational service-line fit.",
        "Moderate reassignment activity is needed to improve portfolio alignment."
      ]
    },
    "Minimize Disruption": {
      recommendationHeadline: "Minimize Disruption preserves the most existing relationships.",
      recommendationDetail:
        "This scenario keeps more current assignments intact, but it leaves more capacity pressure unresolved.",
      optimizedMetrics: {
        totalLeaders: 32,
        newOpportunities: 26,
        reassignments: 6,
        leadersOverCapacity: 5,
        averageUtilization: "85%",
        highestUtilization: "112%",
        workloadImprovement: "7%",
        objectiveScore: "0.86",
        constraintViolations: 5
      },
      leaderMultiplier: 1.02,
      changeBias: 0.7,
      baselineNarrative: [
        "Existing VP-facility relationships are largely maintained.",
        "Capacity pressure remains concentrated among several VPs.",
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
    { name: "VP-001", baseline: 18.2, capacity: 18, status: "Near Capacity", region: "Southeast" },
    { name: "VP-002", baseline: 21.1, capacity: 18, status: "Over Capacity", region: "Midwest" },
    { name: "VP-003", baseline: 14.4, capacity: 18, status: "Within Capacity", region: "West" },
    { name: "VP-004", baseline: 11.9, capacity: 18, status: "Available Capacity", region: "Northeast" },
    { name: "VP-005", baseline: 19.8, capacity: 18, status: "Near Capacity", region: "Southwest" },
    { name: "VP-006", baseline: 16.3, capacity: 18, status: "Within Capacity", region: "Central" },
    { name: "VP-007", baseline: 20.6, capacity: 18, status: "Over Capacity", region: "West" },
    { name: "VP-008", baseline: 13.7, capacity: 18, status: "Within Capacity", region: "Northeast" },
    { name: "VP-009", baseline: 12.8, capacity: 18, status: "Available Capacity", region: "Midwest" },
    { name: "VP-010", baseline: 17.6, capacity: 18, status: "Within Capacity", region: "Southeast" },
    { name: "VP-011", baseline: 15.2, capacity: 18, status: "Within Capacity", region: "West" },
    { name: "VP-012", baseline: 10.8, capacity: 18, status: "Available Capacity", region: "Southwest" },
    { name: "VP-013", baseline: 18.9, capacity: 18, status: "Near Capacity", region: "Central" },
    { name: "VP-014", baseline: 13.2, capacity: 18, status: "Within Capacity", region: "Northeast" }
  ],

  opportunities: [
    { id: "Opportunity 001", baseLeader: "VP-004", region: "Northeast", serviceLine: "EVS", facilityType: "Acute Care", complexity: "High", workload: 1.8, impact: "Within Capacity", review: true },
    { id: "Opportunity 002", baseLeader: "VP-003", region: "West", serviceLine: "CNS", facilityType: "Senior Living", complexity: "Medium", workload: 1.2, impact: "Within Capacity", review: false },
    { id: "Opportunity 003", baseLeader: "VP-012", region: "Southwest", serviceLine: "EVS", facilityType: "Rehabilitation", complexity: "High", workload: 1.7, impact: "Available Capacity", review: false },
    { id: "Opportunity 004", baseLeader: "VP-009", region: "Midwest", serviceLine: "CNS", facilityType: "Community Hospital", complexity: "Low", workload: 0.8, impact: "Available Capacity", review: false },
    { id: "Opportunity 005", baseLeader: "VP-002", region: "Midwest", serviceLine: "EVS", facilityType: "Acute Care", complexity: "High", workload: 1.9, impact: "Over Capacity", review: true },
    { id: "Opportunity 006", baseLeader: "VP-011", region: "West", serviceLine: "CNS", facilityType: "Senior Living", complexity: "Medium", workload: 1.1, impact: "Within Capacity", review: false },
    { id: "Opportunity 007", baseLeader: "VP-008", region: "Northeast", serviceLine: "EVS", facilityType: "Rehabilitation", complexity: "Medium", workload: 1.4, impact: "Within Capacity", review: false },
    { id: "Opportunity 008", baseLeader: "VP-006", region: "Central", serviceLine: "CNS", facilityType: "Acute Care", complexity: "High", workload: 1.6, impact: "Within Capacity", review: true },
    { id: "Opportunity 009", baseLeader: "VP-010", region: "Southeast", serviceLine: "EVS", facilityType: "Community Hospital", complexity: "Low", workload: 0.9, impact: "Within Capacity", review: false },
    { id: "Opportunity 010", baseLeader: "VP-001", region: "Southeast", serviceLine: "CNS", facilityType: "Acute Care", complexity: "High", workload: 1.5, impact: "Near Capacity", review: true },
    { id: "Opportunity 011", baseLeader: "VP-015", region: "West", serviceLine: "EVS", facilityType: "Senior Living", complexity: "Medium", workload: 1.3, impact: "Within Capacity", review: false },
    { id: "Opportunity 012", baseLeader: "VP-016", region: "Northeast", serviceLine: "CNS", facilityType: "Community Hospital", complexity: "Low", workload: 0.7, impact: "Available Capacity", review: false },
    { id: "Opportunity 013", baseLeader: "VP-017", region: "Southeast", serviceLine: "EVS", facilityType: "Acute Care", complexity: "High", workload: 2.0, impact: "Review Required", review: true },
    { id: "Opportunity 014", baseLeader: "VP-018", region: "Midwest", serviceLine: "CNS", facilityType: "Rehabilitation", complexity: "Medium", workload: 1.2, impact: "Within Capacity", review: false },
    { id: "Opportunity 015", baseLeader: "VP-019", region: "West", serviceLine: "EVS", facilityType: "Community Hospital", complexity: "Low", workload: 0.9, impact: "Available Capacity", review: false },
    { id: "Opportunity 016", baseLeader: "VP-020", region: "Southwest", serviceLine: "CNS", facilityType: "Senior Living", complexity: "High", workload: 1.8, impact: "Near Capacity", review: true },
    { id: "Opportunity 017", baseLeader: "VP-021", region: "Central", serviceLine: "EVS", facilityType: "Acute Care", complexity: "Medium", workload: 1.4, impact: "Within Capacity", review: false },
    { id: "Opportunity 018", baseLeader: "VP-022", region: "Northeast", serviceLine: "CNS", facilityType: "Community Hospital", complexity: "Medium", workload: 1.1, impact: "Within Capacity", review: false },
    { id: "Opportunity 019", baseLeader: "VP-023", region: "Southeast", serviceLine: "EVS", facilityType: "Rehabilitation", complexity: "High", workload: 1.7, impact: "Review Required", review: true },
    { id: "Opportunity 020", baseLeader: "VP-024", region: "West", serviceLine: "CNS", facilityType: "Acute Care", complexity: "High", workload: 1.6, impact: "Within Capacity", review: true },
    { id: "Opportunity 021", baseLeader: "VP-025", region: "Midwest", serviceLine: "EVS", facilityType: "Senior Living", complexity: "Low", workload: 0.8, impact: "Available Capacity", review: false },
    { id: "Opportunity 022", baseLeader: "VP-026", region: "Central", serviceLine: "CNS", facilityType: "Community Hospital", complexity: "Medium", workload: 1.3, impact: "Within Capacity", review: false },
    { id: "Opportunity 023", baseLeader: "VP-027", region: "Southwest", serviceLine: "EVS", facilityType: "Acute Care", complexity: "High", workload: 1.9, impact: "Review Required", review: true },
    { id: "Opportunity 024", baseLeader: "VP-028", region: "Northeast", serviceLine: "CNS", facilityType: "Senior Living", complexity: "Medium", workload: 1.0, impact: "Within Capacity", review: false },
    { id: "Opportunity 025", baseLeader: "VP-029", region: "Southeast", serviceLine: "EVS", facilityType: "Community Hospital", complexity: "Low", workload: 0.7, impact: "Available Capacity", review: false },
    { id: "Opportunity 026", baseLeader: "VP-030", region: "West", serviceLine: "CNS", facilityType: "Rehabilitation", complexity: "High", workload: 1.8, impact: "Near Capacity", review: true }
  ],

  sensitivity: [
    { scenario: "Capacity Protection", score: 0.69, violations: 1, reassignments: 19, overCapacity: 1, use: "Best for reducing workload risk" },
    { scenario: "Balanced Growth", score: 0.72, violations: 2, reassignments: 14, overCapacity: 2, use: "Recommended default" },
    { scenario: "Service Line Fit", score: 0.74, violations: 2, reassignments: 17, overCapacity: 2, use: "Best for EVS/CNS alignment" },
    { scenario: "Geographic Efficiency", score: 0.77, violations: 3, reassignments: 21, overCapacity: 3, use: "Best for territory alignment" },
    { scenario: "Minimize Disruption", score: 0.86, violations: 5, reassignments: 6, overCapacity: 5, use: "Best for lowest implementation change" }
  ],

  leaderDetails: {
    "VP-001": [
      { name: "Facility 101", type: "Existing Facility", serviceLine: "EVS", facilityType: "Acute Care", region: "Southeast", workload: 2.4, status: "Retained" },
      { name: "Facility 117", type: "Existing Facility", serviceLine: "CNS", facilityType: "Senior Living", region: "Southeast", workload: 2.1, status: "Retained" },
      { name: "Opportunity 010", type: "New Opportunity", serviceLine: "CNS", facilityType: "Acute Care", region: "Southeast", workload: 1.5, status: "Added" }
    ],
    "VP-002": [
      { name: "Facility 204", type: "Existing Facility", serviceLine: "EVS", facilityType: "Acute Care", region: "Midwest", workload: 2.7, status: "Retained" },
      { name: "Facility 219", type: "Existing Facility", serviceLine: "CNS", facilityType: "Community Hospital", region: "Midwest", workload: 1.8, status: "Reassigned Out" },
      { name: "Opportunity 005", type: "New Opportunity", serviceLine: "EVS", facilityType: "Acute Care", region: "Midwest", workload: 1.9, status: "Review Required" }
    ],
    "VP-003": [
      { name: "Facility 310", type: "Existing Facility", serviceLine: "CNS", facilityType: "Senior Living", region: "West", workload: 2.0, status: "Retained" },
      { name: "Opportunity 002", type: "New Opportunity", serviceLine: "CNS", facilityType: "Senior Living", region: "West", workload: 1.2, status: "Added" }
    ],
    "VP-004": [
      { name: "Facility 405", type: "Existing Facility", serviceLine: "EVS", facilityType: "Acute Care", region: "Northeast", workload: 1.6, status: "Retained" },
      { name: "Opportunity 001", type: "New Opportunity", serviceLine: "EVS", facilityType: "Acute Care", region: "Northeast", workload: 1.8, status: "Review Required" }
    ]
  },

  decisionLog: [
    {
      date: "Phase 1",
      decision: "Use GitHub Pages for the first UI prototype.",
      reason: "Fastest way to publish a static executive-facing dashboard.",
      status: "Complete"
    },
    {
      date: "Phase 1",
      decision: "Keep Colab as the model layer.",
      reason: "The optimization logic already exists there and can export structured outputs.",
      status: "Complete"
    },
    {
      date: "Phase 2",
      decision: "Move from one long dashboard to a tabbed portal.",
      reason: "The project needs separate views for current state, model outputs, drill-down, network, and reporting.",
      status: "Complete"
    },
    {
      date: "Phase 2",
      decision: "Correct service-line terminology to EVS and CNS.",
      reason: "The project service lines are operational service lines, not hospital or facility-type categories.",
      status: "Complete"
    },
    {
      date: "Phase 3",
      decision: "Make scenario selection the controlling state.",
      reason: "Scenario choice should influence summary metrics, leader drill-down, workload view, and network relationships.",
      status: "In Progress"
    }
  ]
};

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const navCards = document.querySelectorAll(".nav-card");

const scenarioSelect = document.getElementById("scenarioSelect");
const scenarioWorkloadView = document.getElementById("scenarioWorkloadView");
const drilldownLeaderSelect = document.getElementById("drilldownLeaderSelect");
const opportunitySearch = document.getElementById("opportunitySearch");
const opportunityReviewFilter = document.getElementById("opportunityReviewFilter");

let activeNetworkFilter = "all";

function getSelectedScenarioName() {
  return scenarioSelect ? scenarioSelect.value : "Balanced Growth";
}

function getSelectedScenario() {
  return dashboardData.scenarios[getSelectedScenarioName()];
}

function switchTab(tabId) {
  tabButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });

  tabPanels.forEach(panel => {
    panel.classList.toggle("active", panel.id === tabId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getBadgeClass(value) {
  const text = String(value).toLowerCase();

  if (text.includes("over") || text.includes("review") || text.includes("required") || text.includes("elevated")) {
    return "risk";
  }

  if (text.includes("near") || text.includes("medium") || text.includes("moderate") || text.includes("in progress")) {
    return "warning";
  }

  if (
    text.includes("retained") ||
    text.includes("within") ||
    text.includes("available") ||
    text.includes("added") ||
    text.includes("complete") ||
    text.includes("contained") ||
    text.includes("clear")
  ) {
    return "good";
  }

  return "neutral";
}

function renderList(id, items) {
  const element = document.getElementById(id);
  element.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = typeof key === "function" ? key(item) : item[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
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

function calculateOptimizedWorkload(leader) {
  const scenario = getSelectedScenario();
  const numericId = Number(leader.name.replace("VP-", ""));
  const adjustment = ((numericId % 5) - 2) * 0.28;
  const value = leader.baseline * scenario.leaderMultiplier + adjustment + scenario.changeBias;
  return Math.max(8, Number(value.toFixed(1)));
}

function getOptimizedStatus(workload, capacity) {
  const utilization = workload / capacity;

  if (utilization > 1) return "Over Capacity";
  if (utilization >= 0.95) return "Near Capacity";
  if (utilization <= 0.75) return "Available Capacity";
  return "Within Capacity";
}

function getScenarioLeaderRows() {
  return dashboardData.leaders.map(leader => {
    const optimized = calculateOptimizedWorkload(leader);
    const optimizedStatus = getOptimizedStatus(optimized, leader.capacity);
    const change = Number((optimized - leader.baseline).toFixed(1));

    return {
      ...leader,
      optimized,
      optimizedStatus,
      change
    };
  });
}

function getScenarioOpportunityRows() {
  const scenarioName = getSelectedScenarioName();

  return dashboardData.opportunities.map((row, index) => {
    let leader = row.baseLeader;

    if (scenarioName === "Capacity Protection" && row.review) {
      leader = `VP-${String(((index + 10) % 30) + 1).padStart(3, "0")}`;
    }

    if (scenarioName === "Geographic Efficiency") {
      leader = row.region === "West" ? "VP-011" :
        row.region === "Southeast" ? "VP-010" :
        row.region === "Midwest" ? "VP-009" :
        row.baseLeader;
    }

    if (scenarioName === "Service Line Fit") {
      leader = row.serviceLine === "EVS" ? `VP-${String(((index * 2) % 30) + 1).padStart(3, "0")}` :
        `VP-${String(((index * 2 + 5) % 30) + 1).padStart(3, "0")}`;
    }

    if (scenarioName === "Minimize Disruption") {
      leader = row.baseLeader;
    }

    return {
      ...row,
      leader
    };
  });
}

function renderCurrentState() {
  const currentState = dashboardData.currentState;

  document.getElementById("currentLeaderCount").textContent = currentState.totalLeaders;
  document.getElementById("currentFacilityCount").textContent = currentState.existingFacilities;
  document.getElementById("currentOverCapacity").textContent = currentState.leadersOverCapacity;
  document.getElementById("currentAverageUtilization").textContent = currentState.averageUtilization;
  document.getElementById("currentHighestUtilization").textContent = currentState.highestUtilization;
  document.getElementById("currentRiskAreas").textContent = currentState.currentRiskAreas;

  document.getElementById("currentWorkloadChart").innerHTML = dashboardData.leaders.map(leader => {
    const utilization = Math.round((leader.baseline / leader.capacity) * 100);
    const fillClass =
      utilization > 100 ? "red" :
      utilization >= 95 ? "yellow" :
      "green";

    const status = leader.baseline > leader.capacity ? "Over Capacity" : leader.status;

    return `
      <div class="workload-row">
        <div class="workload-name">${leader.name}</div>
        <div class="workload-bars">
          <div class="workload-bar-line">
            <span class="workload-bar-label">Current</span>
            <div class="chart-track">
              <div class="chart-fill ${fillClass}" style="width: ${Math.min(utilization, 120)}%"></div>
            </div>
          </div>
        </div>
        <div>${utilization}%</div>
        <div><span class="badge ${getBadgeClass(status)}">${status}</span></div>
      </div>
    `;
  }).join("");

  document.getElementById("serviceLineScopeCards").innerHTML = currentState.serviceLineScope.map(item => `
    <div class="scope-card">
      <div class="scope-card-header">
        <h3>${item.serviceLine}</h3>
        <span class="scope-share">${item.networkShare}</span>
      </div>
      <div class="scope-stat-grid">
        <div class="scope-stat">
          <span>Facilities</span>
          <strong>${item.facilities}</strong>
        </div>
        <div class="scope-stat">
          <span>Active VPs</span>
          <strong>${item.activeVPs}</strong>
        </div>
        <div class="scope-stat">
          <span>Avg Workload</span>
          <strong>${item.avgWorkload}</strong>
        </div>
        <div class="scope-stat">
          <span>Avg Utilization</span>
          <strong>${item.avgUtilization}</strong>
        </div>
        <div class="scope-stat">
          <span>Over Capacity</span>
          <strong>${item.leadersOverCapacity}</strong>
        </div>
        <div class="scope-stat">
          <span>Risk</span>
          <strong><span class="badge ${getBadgeClass(item.risk)}">${item.risk}</span></strong>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("regionalScopeCards").innerHTML = currentState.regionalScope.map(item => `
    <div class="scope-card">
      <div class="scope-card-header">
        <h3>${item.region}</h3>
        <span class="badge ${getBadgeClass(item.risk)}">${item.risk}</span>
      </div>
      <div class="scope-stat-grid">
        <div class="scope-stat">
          <span>Facilities</span>
          <strong>${item.facilities}</strong>
        </div>
        <div class="scope-stat">
          <span>Active VPs</span>
          <strong>${item.activeVPs}</strong>
        </div>
        <div class="scope-stat">
          <span>Avg Util.</span>
          <strong>${item.avgUtilization}</strong>
        </div>
        <div class="scope-stat">
          <span>Highest</span>
          <strong>${item.highestUtilization}</strong>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("currentStateObservations").innerHTML = currentState.observations.map(item => `
    <div class="observation-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </div>
  `).join("");
}

function renderScenario() {
  const scenario = getSelectedScenario();
  const currentState = dashboardData.currentState;
  const optimized = scenario.optimizedMetrics;

  document.getElementById("recommendationHeadline").textContent = scenario.recommendationHeadline;
  document.getElementById("recommendationDetail").textContent = scenario.recommendationDetail;

  document.getElementById("homeRecommendationHeadline").textContent = scenario.recommendationHeadline;
  document.getElementById("homeRecommendationDetail").textContent = scenario.recommendationDetail;
  document.getElementById("homeTotalLeaders").textContent = currentState.totalLeaders;
  document.getElementById("homeFacilities").textContent = currentState.existingFacilities;
  document.getElementById("homeNewOpportunities").textContent = optimized.newOpportunities;
  document.getElementById("homeReassignments").textContent = optimized.reassignments;
  document.getElementById("homeOverCapacity").textContent = optimized.leadersOverCapacity;
  document.getElementById("homeObjectiveScore").textContent = optimized.objectiveScore;

  const comparisons = [
    {
      label: "Leaders Over Capacity",
      baseline: currentState.leadersOverCapacity,
      optimized: optimized.leadersOverCapacity
    },
    {
      label: "Average Utilization",
      baseline: currentState.averageUtilization,
      optimized: optimized.averageUtilization
    },
    {
      label: "Highest Utilization",
      baseline: currentState.highestUtilization,
      optimized: optimized.highestUtilization
    },
    {
      label: "New Opportunities Assigned",
      baseline: 0,
      optimized: optimized.newOpportunities
    },
    {
      label: "Recommended Reassignments",
      baseline: 0,
      optimized: optimized.reassignments
    },
    {
      label: "Constraint Violations",
      baseline: currentState.currentRiskAreas,
      optimized: optimized.constraintViolations
    }
  ];

  document.getElementById("scenarioComparisonCards").innerHTML = comparisons.map(item => `
    <div class="compare-card">
      <span>${item.label}</span>
      <div class="compare-values">
        <div class="compare-value">
          <small>Baseline</small>
          <strong>${item.baseline}</strong>
        </div>
        <div class="compare-arrow">→</div>
        <div class="compare-value">
          <small>Optimized</small>
          <strong>${item.optimized}</strong>
        </div>
      </div>
    </div>
  `).join("");

  renderList("baselineNarrative", scenario.baselineNarrative);
  renderList("optimizedNarrative", scenario.optimizedNarrative);

  renderOpportunityCharts();
  renderOpportunityTable();
  renderWorkloadChart();
  renderLeaderDrilldown();
  renderNetwork(activeNetworkFilter);
}

function populateLeaderSelector() {
  const leaders = dashboardData.leaders.map(leader => leader.name);

  drilldownLeaderSelect.innerHTML = leaders.map(name => `
    <option value="${name}">${name}</option>
  `).join("");
}

function renderOpportunityCharts() {
  const opportunities = getScenarioOpportunityRows();

  const byLeader = countBy(opportunities, "leader");
  const byServiceLine = countBy(opportunities, "serviceLine");

  renderBarChart(
    "opportunitiesByLeaderChart",
    Object.entries(byLeader)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([label, value]) => ({ label, value }))
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

  const rows = getScenarioOpportunityRows().filter(row => {
    const matchesSearch = [
      row.id,
      row.leader,
      row.region,
      row.serviceLine,
      row.facilityType,
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
      <td>${row.id}</td>
      <td>${row.leader}</td>
      <td>${row.region}</td>
      <td>${row.serviceLine}</td>
      <td>${row.facilityType}</td>
      <td>${row.complexity}</td>
      <td>${row.workload}</td>
      <td><span class="badge ${getBadgeClass(row.impact)}">${row.impact}</span></td>
      <td><span class="badge ${row.review ? "risk" : "good"}">${row.review ? "Review Required" : "Clear"}</span></td>
    </tr>
  `).join("");
}

function getVisibleLeaders() {
  const rows = getScenarioLeaderRows();
  const view = scenarioWorkloadView.value;

  if (view === "Largest Change") {
    return [...rows]
      .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
      .slice(0, 10);
  }

  if (view === "all") {
    return rows;
  }

  return rows.filter(leader => leader.optimizedStatus === view);
}

function renderWorkloadChart() {
  const leaders = getVisibleLeaders();

  document.getElementById("scenarioWorkloadCaption").textContent =
    `${getSelectedScenarioName()} · ${scenarioWorkloadView.options[scenarioWorkloadView.selectedIndex].text}`;

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
        <div><span class="badge ${getBadgeClass(leader.optimizedStatus)}">${leader.optimizedStatus}</span></div>
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

  const currentState = dashboardData.currentState;

  const contextItems = [
    ["Total VP Network", currentState.totalLeaders],
    ["Existing Facilities", currentState.existingFacilities],
    ["Leaders Over Capacity", currentState.leadersOverCapacity],
    ["Average Utilization", currentState.averageUtilization],
    ["Highest Utilization", currentState.highestUtilization],
    ["Current Risk Areas", currentState.currentRiskAreas]
  ];

  document.getElementById("sensitivityCurrentStateContext").innerHTML = contextItems.map(([label, value]) => `
    <div class="context-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function getLeaderByName(name) {
  return getScenarioLeaderRows().find(leader => leader.name === name);
}

function getLeaderDetailRows(leaderName) {
  const baseRows = dashboardData.leaderDetails[leaderName] || [];
  const opportunityRows = getScenarioOpportunityRows()
    .filter(row => row.leader === leaderName)
    .map(row => ({
      name: row.id,
      type: "New Opportunity",
      serviceLine: row.serviceLine,
      facilityType: row.facilityType,
      region: row.region,
      workload: row.workload,
      status: row.review ? "Review Required" : "Added"
    }));

  const merged = [...baseRows];

  opportunityRows.forEach(row => {
    const alreadyExists = merged.some(item => item.name === row.name);
    if (!alreadyExists) merged.push(row);
  });

  return merged;
}

function renderLeaderDrilldown() {
  const selectedLeaderName = drilldownLeaderSelect.value;
  const leader = getLeaderByName(selectedLeaderName);
  const details = getLeaderDetailRows(selectedLeaderName);

  if (!leader) return;

  document.getElementById("leaderBaselineWorkload").textContent = leader.baseline;
  document.getElementById("leaderOptimizedWorkload").textContent = leader.optimized;
  document.getElementById("leaderCapacity").textContent = leader.capacity;
  document.getElementById("leaderStatus").textContent = leader.optimizedStatus;

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
      <td>${row.facilityType}</td>
      <td>${row.region}</td>
      <td>${row.workload}</td>
      <td><span class="badge ${getBadgeClass(row.status)}">${row.status}</span></td>
    </tr>
  `).join("");
}

function buildNetworkData() {
  const opportunities = getScenarioOpportunityRows();

  const leaderNodes = dashboardData.leaders.map(leader => ({
    id: leader.name,
    type: "leader",
    review: getOptimizedStatus(calculateOptimizedWorkload(leader), leader.capacity) === "Over Capacity"
  }));

  const opportunityNodes = opportunities.map(row => ({
    id: row.id,
    type: "opportunity",
    review: row.review
  }));

  const serviceLineNodes = [
    { id: "EVS", type: "service-line", review: false },
    { id: "CNS", type: "service-line", review: false }
  ];

  const facilityNodes = [
    { id: "Facility 101", type: "facility", review: false },
    { id: "Facility 204", type: "facility", review: false },
    { id: "Facility 310", type: "facility", review: false },
    { id: "Facility 405", type: "facility", review: false },
    { id: "Facility 704", type: "facility", review: true }
  ];

  const assignmentEdges = opportunities.map(row => ({
    source: row.leader,
    target: row.id,
    relationship: row.review ? "recommended assignment / review" : "recommended assignment"
  }));

  const serviceLineEdges = opportunities.map(row => ({
    source: row.id,
    target: row.serviceLine,
    relationship: "service line"
  }));

  const facilityEdges = [
    { source: "VP-001", target: "Facility 101", relationship: "current assignment" },
    { source: "VP-002", target: "Facility 204", relationship: "current assignment" },
    { source: "VP-003", target: "Facility 310", relationship: "current assignment" },
    { source: "VP-004", target: "Facility 405", relationship: "current assignment" },
    { source: "Facility 101", target: "EVS", relationship: "service line" },
    { source: "Facility 204", target: "EVS", relationship: "service line" },
    { source: "Facility 310", target: "CNS", relationship: "service line" },
    { source: "Facility 405", target: "EVS", relationship: "service line" }
  ];

  return {
    nodes: [...leaderNodes, ...facilityNodes, ...opportunityNodes, ...serviceLineNodes],
    edges: [...facilityEdges, ...assignmentEdges, ...serviceLineEdges]
  };
}

function renderNetwork(filter = "all") {
  activeNetworkFilter = filter;

  const network = buildNetworkData();

  const nodes = network.nodes.filter(node => {
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

  const edges = network.edges.filter(edge => {
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

function renderDecisionLog() {
  document.getElementById("decisionLogTable").innerHTML = dashboardData.decisionLog.map(row => `
    <tr>
      <td>${row.date}</td>
      <td>${row.decision}</td>
      <td>${row.reason}</td>
      <td><span class="badge ${getBadgeClass(row.status)}">${row.status}</span></td>
    </tr>
  `).join("");
}

tabButtons.forEach(button => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

navCards.forEach(card => {
  card.addEventListener("click", () => switchTab(card.dataset.goTab));
});

scenarioSelect.addEventListener("change", renderScenario);
scenarioWorkloadView.addEventListener("change", renderWorkloadChart);
opportunitySearch.addEventListener("input", renderOpportunityTable);
opportunityReviewFilter.addEventListener("change", renderOpportunityTable);
drilldownLeaderSelect.addEventListener("change", renderLeaderDrilldown);

populateLeaderSelector();
renderCurrentState();
renderScenario();
renderSensitivity();
renderLeaderDrilldown();
renderNetwork();
setupNetworkButtons();
renderDecisionLog();
