# Cybersecurity Threat Tracking & Newsletter System - Implementation Guide

## Overview
This guide provides detailed implementation instructions for building an automated cybersecurity threat tracking and newsletter system with UI/UX interface.

## System Architecture

### Core Components
1. **Frontend Web Application** - User interface for viewing incidents and managing newsletters
2. **Data Collection Engine** - Automated scraping of cybersecurity news sources
3. **Email System** - Automated newsletter generation and distribution
4. **Database** - Storage for incidents, subscribers, and configuration
5. **Scheduling Service** - Automated weekly newsletter dispatch

## Frontend Implementation

### HTML Structure (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CyberWatch - Threat Intelligence Platform</title>
    <link rel="stylesheet" href="style.css">
    <!-- Chart.js for analytics dashboard -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="app">
        <!-- Navigation Header -->
        <header class="header">
            <div class="container">
                <div class="header__content">
                    <!-- Logo and title -->
                    <h1 class="header__title">
                        <span class="header__icon">🛡️</span>
                        CyberWatch
                    </h1>
                    <!-- Tab navigation -->
                    <nav class="nav">
                        <button class="nav__item active" data-tab="dashboard">Dashboard</button>
                        <button class="nav__item" data-tab="emails">Email Management</button>
                        <button class="nav__item" data-tab="config">Newsletter Config</button>
                        <button class="nav__item" data-tab="analytics">Analytics</button>
                    </nav>
                </div>
            </div>
        </header>

        <!-- Main Content Area -->
        <main class="main">
            <div class="container">
                <!-- Dashboard Tab: Shows recent cybersecurity incidents -->
                <section id="dashboard" class="tab-content active">
                    <div class="dashboard-header">
                        <h2>Recent Cybersecurity Incidents</h2>
                        <!-- Search and filter controls -->
                        <div class="dashboard-controls">
                            <div class="search-box">
                                <input type="text" placeholder="Search incidents..." id="searchInput">
                            </div>
                            <div class="filters">
                                <!-- Severity filter dropdown -->
                                <select id="severityFilter">
                                    <option value="">All Severities</option>
                                    <option value="Critical">Critical</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                                <!-- Industry filter dropdown -->
                                <select id="industryFilter">
                                    <option value="">All Industries</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Finance">Finance</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- Grid container for incident cards -->
                    <div class="incidents-grid" id="incidentsGrid">
                        <!-- Incident cards will be populated by JavaScript -->
                    </div>
                </section>

                <!-- Email Management Tab -->
                <section id="emails" class="tab-content">
                    <h2>Email Subscriber Management</h2>
                    <!-- Form to add new email subscribers -->
                    <div class="email-form">
                        <h3>Add New Subscriber</h3>
                        <form id="addEmailForm">
                            <div class="form-group">
                                <label for="emailInput">Email Address:</label>
                                <input type="email" id="emailInput" required>
                            </div>
                            <div class="form-group">
                                <label for="nameInput">Name (Optional):</label>
                                <input type="text" id="nameInput">
                            </div>
                            <button type="submit" class="btn btn-primary">Add Subscriber</button>
                        </form>
                    </div>
                    <!-- List of current subscribers -->
                    <div class="subscriber-list">
                        <h3>Current Subscribers</h3>
                        <div class="subscriber-stats">
                            <span class="stat">Total Subscribers: <strong id="subscriberCount">0</strong></span>
                        </div>
                        <div class="subscriber-table" id="subscriberTable">
                            <!-- Subscriber table populated by JavaScript -->
                        </div>
                    </div>
                </section>

                <!-- Newsletter Configuration Tab -->
                <section id="config" class="tab-content">
                    <h2>Newsletter Configuration</h2>
                    <!-- Newsletter settings form -->
                    <div class="config-form">
                        <form id="newsletterConfigForm">
                            <!-- Frequency selection -->
                            <div class="form-group">
                                <label for="frequency">Frequency:</label>
                                <select id="frequency">
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                </select>
                            </div>
                            <!-- Day selection for weekly newsletters -->
                            <div class="form-group">
                                <label for="sendDay">Send Day (for Weekly):</label>
                                <select id="sendDay">
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                </select>
                            </div>
                            <!-- Time selection -->
                            <div class="form-group">
                                <label for="sendTime">Send Time:</label>
                                <input type="time" id="sendTime" value="09:00">
                            </div>
                            <!-- Auto-send toggle -->
                            <div class="form-group">
                                <label>
                                    <input type="checkbox" id="autoSend" checked>
                                    Enable Auto-Send
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Save Configuration</button>
                        </form>
                    </div>
                    <!-- Newsletter preview -->
                    <div class="newsletter-preview">
                        <h3>Newsletter Preview</h3>
                        <div class="preview-container" id="newsletterPreview">
                            <!-- Preview content populated by JavaScript -->
                        </div>
                    </div>
                </section>

                <!-- Analytics Tab -->
                <section id="analytics" class="tab-content">
                    <h2>Threat Intelligence Analytics</h2>
                    <!-- Statistics overview -->
                    <div class="stats-overview">
                        <div class="stat-card">
                            <h3>Total Incidents</h3>
                            <span class="stat-number" id="totalIncidents">0</span>
                        </div>
                        <div class="stat-card">
                            <h3>This Month</h3>
                            <span class="stat-number" id="monthlyIncidents">0</span>
                        </div>
                        <div class="stat-card critical">
                            <h3>Critical Threats</h3>
                            <span class="stat-number" id="criticalThreats">0</span>
                        </div>
                        <div class="stat-card">
                            <h3>Active Subscribers</h3>
                            <span class="stat-number" id="activeSubscribers">0</span>
                        </div>
                    </div>
                    <!-- Charts -->
                    <div class="charts">
                        <div class="chart-container">
                            <h3>Incident Trends (7 Days)</h3>
                            <canvas id="trendChart"></canvas>
                        </div>
                        <div class="chart-container">
                            <h3>Threat Types Distribution</h3>
                            <canvas id="threatTypesChart"></canvas>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>

    <!-- Modal for incident details -->
    <div id="incidentModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="modalContent">
                <!-- Modal content populated by JavaScript -->
            </div>
        </div>
    </div>

    <!-- Include JavaScript file -->
    <script src="app.js"></script>
</body>
</html>
```

### JavaScript Implementation (app.js)
```javascript
// CyberWatch Application JavaScript

// Global application state
let appData = {
    recent_incidents: [], // Array of incident objects
    email_subscribers: [], // Array of subscriber objects
    newsletter_config: {}, // Newsletter configuration object
    analytics: {} // Analytics data object
};

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application
 * - Load sample data
 * - Set up event listeners
 * - Render initial content
 */
function initializeApp() {
    console.log('Initializing CyberWatch application...');
    
    // Load sample data (in real implementation, this would fetch from API)
    loadSampleData();
    
    // Set up navigation event listeners
    setupNavigation();
    
    // Set up form event listeners
    setupFormHandlers();
    
    // Render initial content
    renderDashboard();
    renderEmailManagement();
    renderNewsletterConfig();
    renderAnalytics();
    
    console.log('Application initialized successfully');
}

/**
 * Load sample cybersecurity incident data
 * In production, this would fetch from your backend API
 */
function loadSampleData() {
    // Sample incident data based on recent real cybersecurity events
    appData.recent_incidents = [
        {
            id: 1,
            company: "Google (Salesforce Breach)",
            incident_type: "Data Breach",
            date: "2025-08-06",
            description: "ShinyHunters hacking group breached Salesforce-hosted database",
            users_affected: "2.5 billion Gmail users at risk",
            financial_impact: "Undisclosed",
            severity: "High",
            status: "Under Investigation",
            industry: "Technology",
            details: "Breach involved business contact information. No consumer passwords compromised."
        },
        {
            id: 2,
            company: "Allianz Life Insurance",
            incident_type: "Data Breach",
            date: "2025-07-16",
            description: "Social engineering attack on third-party CRM system",
            users_affected: "1.4 million customers",
            financial_impact: "Undisclosed",
            severity: "Critical",
            status: "Resolved",
            industry: "Insurance",
            details: "FBI notified, no core systems compromised."
        }
        // Additional incidents would be loaded here...
    ];
    
    // Sample email subscribers
    appData.email_subscribers = [
        {
            id: 1,
            email: "admin@company.com",
            name: "System Administrator", 
            date_added: "2025-09-01",
            status: "Active"
        }
        // Additional subscribers...
    ];
    
    // Newsletter configuration
    appData.newsletter_config = {
        frequency: "Weekly",
        send_day: "Monday", 
        send_time: "09:00",
        auto_send: true,
        template: "Professional",
        last_sent: "2025-09-02",
        next_scheduled: "2025-09-09"
    };
    
    // Analytics data
    appData.analytics = {
        total_incidents_tracked: 157,
        this_month_incidents: 23,
        critical_incidents: 8,
        high_severity: 15
    };
}

/**
 * Set up navigation between tabs
 * Handles clicking on nav items to switch between different sections
 */
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav__item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all nav items and tab contents
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked nav item and corresponding tab
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            console.log(`Switched to tab: ${targetTab}`);
        });
    });
}

/**
 * Set up form event handlers
 * Handles form submissions for adding emails and updating config
 */
function setupFormHandlers() {
    // Email subscription form
    const emailForm = document.getElementById('addEmailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', handleAddEmail);
    }
    
    // Newsletter configuration form
    const configForm = document.getElementById('newsletterConfigForm');
    if (configForm) {
        configForm.addEventListener('submit', handleConfigUpdate);
    }
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter functionality
    const severityFilter = document.getElementById('severityFilter');
    const industryFilter = document.getElementById('industryFilter');
    
    if (severityFilter) {
        severityFilter.addEventListener('change', applyFilters);
    }
    if (industryFilter) {
        industryFilter.addEventListener('change', applyFilters);
    }
}

/**
 * Render the dashboard with incident cards
 * Creates HTML cards for each cybersecurity incident
 */
function renderDashboard() {
    const incidentsGrid = document.getElementById('incidentsGrid');
    if (!incidentsGrid) return;
    
    // Clear existing content
    incidentsGrid.innerHTML = '';
    
    // Create card for each incident
    appData.recent_incidents.forEach(incident => {
        const card = createIncidentCard(incident);
        incidentsGrid.appendChild(card);
    });
    
    console.log(`Rendered ${appData.recent_incidents.length} incident cards`);
}

/**
 * Create HTML card element for a single incident
 * @param {Object} incident - The incident data object
 * @returns {HTMLElement} - The created card element
 */
function createIncidentCard(incident) {
    const card = document.createElement('div');
    card.className = `incident-card severity-${incident.severity.toLowerCase()}`;
    
    // Determine severity badge color
    const severityClass = {
        'Critical': 'badge-critical',
        'High': 'badge-high', 
        'Medium': 'badge-medium',
        'Low': 'badge-low'
    }[incident.severity] || 'badge-low';
    
    // Create card HTML structure
    card.innerHTML = `
        <div class="card-header">
            <h3 class="company-name">${incident.company}</h3>
            <span class="severity-badge ${severityClass}">${incident.severity}</span>
        </div>
        <div class="card-body">
            <div class="incident-meta">
                <span class="incident-type">${incident.incident_type}</span>
                <span class="incident-date">${formatDate(incident.date)}</span>
            </div>
            <p class="description">${incident.description}</p>
            <div class="impact-info">
                <div class="impact-item">
                    <strong>Users Affected:</strong> ${incident.users_affected}
                </div>
                <div class="impact-item">
                    <strong>Financial Impact:</strong> ${incident.financial_impact}
                </div>
            </div>
            <div class="card-footer">
                <span class="status status-${incident.status.toLowerCase().replace(' ', '-')}">${incident.status}</span>
                <button class="btn btn-secondary" onclick="showIncidentDetails(${incident.id})">
                    View Details
                </button>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Handle adding new email subscriber
 * @param {Event} e - The form submit event
 */
function handleAddEmail(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const nameInput = document.getElementById('nameInput');
    
    const email = emailInput.value.trim();
    const name = nameInput.value.trim() || 'Unknown';
    
    // Validate email format
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Check if email already exists
    if (appData.email_subscribers.find(sub => sub.email === email)) {
        showNotification('Email already subscribed', 'error');
        return;
    }
    
    // Add new subscriber
    const newSubscriber = {
        id: Date.now(), // Simple ID generation
        email: email,
        name: name,
        date_added: new Date().toISOString().split('T')[0],
        status: 'Active'
    };
    
    appData.email_subscribers.push(newSubscriber);
    
    // Clear form
    emailForm.reset();
    
    // Re-render email management section
    renderEmailManagement();
    
    showNotification('Subscriber added successfully', 'success');
    console.log('Added subscriber:', newSubscriber);
}

/**
 * Handle newsletter configuration updates
 * @param {Event} e - The form submit event
 */
function handleConfigUpdate(e) {
    e.preventDefault();
    
    // Get form values
    const frequency = document.getElementById('frequency').value;
    const sendDay = document.getElementById('sendDay').value;
    const sendTime = document.getElementById('sendTime').value;
    const autoSend = document.getElementById('autoSend').checked;
    
    // Update configuration
    appData.newsletter_config = {
        ...appData.newsletter_config,
        frequency: frequency,
        send_day: sendDay,
        send_time: sendTime,
        auto_send: autoSend
    };
    
    showNotification('Configuration saved successfully', 'success');
    console.log('Updated newsletter config:', appData.newsletter_config);
}

/**
 * Handle search functionality
 * @param {Event} e - The input event
 */
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.incident-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`Searching for: "${searchTerm}"`);
}

/**
 * Apply filters to incident cards
 */
function applyFilters() {
    const severityFilter = document.getElementById('severityFilter').value;
    const industryFilter = document.getElementById('industryFilter').value;
    const cards = document.querySelectorAll('.incident-card');
    
    cards.forEach(card => {
        let show = true;
        
        // Get incident data from card attributes or data
        const cardData = findIncidentByCard(card);
        
        if (severityFilter && cardData.severity !== severityFilter) {
            show = false;
        }
        
        if (industryFilter && cardData.industry !== industryFilter) {
            show = false;
        }
        
        card.style.display = show ? 'block' : 'none';
    });
    
    console.log(`Applied filters - Severity: ${severityFilter}, Industry: ${industryFilter}`);
}

/**
 * Show incident details in modal
 * @param {number} incidentId - The ID of the incident to show
 */
function showIncidentDetails(incidentId) {
    const incident = appData.recent_incidents.find(inc => inc.id === incidentId);
    if (!incident) return;
    
    const modal = document.getElementById('incidentModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2>${incident.company}</h2>
        <div class="modal-meta">
            <span class="badge ${incident.severity.toLowerCase()}">${incident.severity}</span>
            <span class="incident-type">${incident.incident_type}</span>
            <span class="incident-date">${formatDate(incident.date)}</span>
        </div>
        <div class="modal-body">
            <h3>Description</h3>
            <p>${incident.description}</p>
            
            <h3>Impact</h3>
            <ul>
                <li><strong>Users Affected:</strong> ${incident.users_affected}</li>
                <li><strong>Financial Impact:</strong> ${incident.financial_impact}</li>
                <li><strong>Status:</strong> ${incident.status}</li>
                <li><strong>Industry:</strong> ${incident.industry}</li>
            </ul>
            
            <h3>Details</h3>
            <p>${incident.details}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Close modal when clicking the X or outside the modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => modal.style.display = 'none';
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

/**
 * Render email management section
 */
function renderEmailManagement() {
    // Update subscriber count
    const subscriberCount = document.getElementById('subscriberCount');
    if (subscriberCount) {
        subscriberCount.textContent = appData.email_subscribers.length;
    }
    
    // Render subscriber table
    const subscriberTable = document.getElementById('subscriberTable');
    if (!subscriberTable) return;
    
    if (appData.email_subscribers.length === 0) {
        subscriberTable.innerHTML = '<p>No subscribers yet. Add some above!</p>';
        return;
    }
    
    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Added</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${appData.email_subscribers.map(subscriber => `
                    <tr>
                        <td>${subscriber.name}</td>
                        <td>${subscriber.email}</td>
                        <td>${formatDate(subscriber.date_added)}</td>
                        <td><span class="status-badge ${subscriber.status.toLowerCase()}">${subscriber.status}</span></td>
                        <td>
                            <button class="btn btn-sm btn-danger" onclick="removeSubscriber(${subscriber.id})">
                                Remove
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    subscriberTable.innerHTML = tableHTML;
}

/**
 * Remove subscriber from the list
 * @param {number} subscriberId - The ID of the subscriber to remove
 */
function removeSubscriber(subscriberId) {
    if (confirm('Are you sure you want to remove this subscriber?')) {
        appData.email_subscribers = appData.email_subscribers.filter(
            sub => sub.id !== subscriberId
        );
        renderEmailManagement();
        showNotification('Subscriber removed successfully', 'success');
    }
}

/**
 * Render newsletter configuration section
 */
function renderNewsletterConfig() {
    // Populate form with current configuration
    const frequencySelect = document.getElementById('frequency');
    const sendDaySelect = document.getElementById('sendDay');
    const sendTimeInput = document.getElementById('sendTime');
    const autoSendCheckbox = document.getElementById('autoSend');
    
    if (frequencySelect) frequencySelect.value = appData.newsletter_config.frequency || 'Weekly';
    if (sendDaySelect) sendDaySelect.value = appData.newsletter_config.send_day || 'Monday';
    if (sendTimeInput) sendTimeInput.value = appData.newsletter_config.send_time || '09:00';
    if (autoSendCheckbox) autoSendCheckbox.checked = appData.newsletter_config.auto_send !== false;
    
    // Render newsletter preview
    renderNewsletterPreview();
}

/**
 * Render newsletter preview
 */
function renderNewsletterPreview() {
    const previewContainer = document.getElementById('newsletterPreview');
    if (!previewContainer) return;
    
    const recentIncidents = appData.recent_incidents.slice(0, 5); // Get top 5 recent incidents
    
    const previewHTML = `
        <div class="newsletter-template">
            <div class="newsletter-header">
                <h2>🛡️ CyberWatch Weekly Threat Intelligence</h2>
                <p class="newsletter-date">Week of ${formatDate(new Date().toISOString())}</p>
            </div>
            
            <div class="newsletter-summary">
                <h3>This Week's Summary</h3>
                <ul>
                    <li>📊 <strong>${recentIncidents.length}</strong> new incidents tracked</li>
                    <li>🚨 <strong>${recentIncidents.filter(i => i.severity === 'Critical').length}</strong> critical threats identified</li>
                    <li>🏢 <strong>${[...new Set(recentIncidents.map(i => i.industry))].length}</strong> industries affected</li>
                </ul>
            </div>
            
            <div class="newsletter-incidents">
                <h3>Top Incidents This Week</h3>
                ${recentIncidents.map(incident => `
                    <div class="newsletter-incident">
                        <h4>${incident.company} - ${incident.incident_type}</h4>
                        <p><strong>Impact:</strong> ${incident.users_affected}</p>
                        <p><strong>Severity:</strong> ${incident.severity}</p>
                        <p>${incident.description}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="newsletter-footer">
                <p>Stay vigilant and keep your systems updated!</p>
                <p><small>Generated by CyberWatch Threat Intelligence Platform</small></p>
            </div>
        </div>
    `;
    
    previewContainer.innerHTML = previewHTML;
}

/**
 * Render analytics dashboard
 */
function renderAnalytics() {
    // Update statistics
    updateAnalyticsStats();
    
    // Render charts
    renderTrendChart();
    renderThreatTypesChart();
}

/**
 * Update analytics statistics
 */
function updateAnalyticsStats() {
    const elements = {
        totalIncidents: document.getElementById('totalIncidents'),
        monthlyIncidents: document.getElementById('monthlyIncidents'), 
        criticalThreats: document.getElementById('criticalThreats'),
        activeSubscribers: document.getElementById('activeSubscribers')
    };
    
    if (elements.totalIncidents) {
        elements.totalIncidents.textContent = appData.analytics.total_incidents_tracked || appData.recent_incidents.length;
    }
    
    if (elements.monthlyIncidents) {
        elements.monthlyIncidents.textContent = appData.analytics.this_month_incidents || 
            appData.recent_incidents.filter(i => isThisMonth(i.date)).length;
    }
    
    if (elements.criticalThreats) {
        elements.criticalThreats.textContent = appData.analytics.critical_incidents ||
            appData.recent_incidents.filter(i => i.severity === 'Critical').length;
    }
    
    if (elements.activeSubscribers) {
        elements.activeSubscribers.textContent = appData.email_subscribers.filter(s => s.status === 'Active').length;
    }
}

/**
 * Render trend chart showing incidents over time
 */
function renderTrendChart() {
    const ctx = document.getElementById('trendChart');
    if (!ctx) return;
    
    // Sample data for 7 days
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [3, 5, 2, 8, 4, 6, 3]; // Sample incident counts per day
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Daily Incidents',
                data: data,
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

/**
 * Render threat types distribution chart
 */
function renderThreatTypesChart() {
    const ctx = document.getElementById('threatTypesChart');
    if (!ctx) return;
    
    // Count threat types from incidents
    const threatTypes = {};
    appData.recent_incidents.forEach(incident => {
        threatTypes[incident.incident_type] = (threatTypes[incident.incident_type] || 0) + 1;
    });
    
    const labels = Object.keys(threatTypes);
    const data = Object.values(threatTypes);
    const colors = [
        'rgba(239, 68, 68, 0.8)',   // Red
        'rgba(59, 130, 246, 0.8)',  // Blue  
        'rgba(34, 197, 94, 0.8)',   // Green
        'rgba(245, 158, 11, 0.8)',  // Yellow
        'rgba(147, 51, 234, 0.8)'   // Purple
    ];
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Utility Functions

/**
 * Format date string for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

/**
 * Validate email address format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Check if date is in current month
 * @param {string} dateString - ISO date string
 * @returns {boolean} True if date is in current month
 */
function isThisMonth(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
}

/**
 * Find incident data by card element (helper for filtering)
 * @param {HTMLElement} card - The incident card element
 * @returns {Object} Incident data object
 */
function findIncidentByCard(card) {
    // Extract company name from card to find matching incident
    const companyName = card.querySelector('.company-name').textContent;
    return appData.recent_incidents.find(incident => incident.company === companyName) || {};
}

/**
 * Show notification message to user
 * @param {string} message - Message to show
 * @param {string} type - Type of notification (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show with animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide and remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Export functions for global access (if needed)
window.showIncidentDetails = showIncidentDetails;
window.removeSubscriber = removeSubscriber;
```

## Backend Implementation (Node.js/Express)

### Data Collection Engine

```javascript
// data-collector.js - Automated threat intelligence collection

const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');

/**
 * Cybersecurity RSS feeds for automated data collection
 */
const RSS_FEEDS = [
    'https://feeds.feedburner.com/TheHackersNews',
    'https://krebsonsecurity.com/feed/',
    'https://www.darkreading.com/rss.xml',
    'https://www.bleepingcomputer.com/feed/',
    'https://www.securityweek.com/feed',
    'https://threatpost.com/feed',
    'https://www.infosecurity-magazine.com/rss/news/',
    'https://cyware.com/allnews/feed'
];

/**
 * Keywords to identify high-impact incidents
 */
const IMPACT_KEYWORDS = [
    'billion', 'million users', 'ransomware', 'data breach',
    'google', 'microsoft', 'apple', 'amazon', 'meta', 'facebook',
    'critical vulnerability', 'zero-day', 'supply chain'
];

class ThreatIntelligenceCollector {
    constructor() {
        this.incidents = [];
    }

    /**
     * Start automated collection (runs every hour)
     */
    startCollection() {
        console.log('Starting threat intelligence collection...');
        
        // Run immediately
        this.collectThreatData();
        
        // Schedule to run every hour
        cron.schedule('0 * * * *', () => {
            console.log('Running scheduled threat intelligence collection...');
            this.collectThreatData();
        });
    }

    /**
     * Collect threat data from RSS feeds
     */
    async collectThreatData() {
        for (const feed of RSS_FEEDS) {
            try {
                await this.processFeed(feed);
            } catch (error) {
                console.error(`Error processing feed ${feed}:`, error.message);
            }
        }
    }

    /**
     * Process individual RSS feed
     */
    async processFeed(feedUrl) {
        try {
            const response = await axios.get(feedUrl);
            const $ = cheerio.load(response.data, { xmlMode: true });

            $('item').each((index, element) => {
                const item = $(element);
                const incident = {
                    title: item.find('title').text(),
                    description: item.find('description').text(),
                    link: item.find('link').text(),
                    pubDate: item.find('pubDate').text(),
                    source: this.extractDomain(feedUrl)
                };

                // Filter for high-impact incidents
                if (this.isHighImpactIncident(incident)) {
                    this.processIncident(incident);
                }
            });
        } catch (error) {
            console.error(`Error fetching feed ${feedUrl}:`, error);
        }
    }

    /**
     * Determine if incident is high-impact based on keywords
     */
    isHighImpactIncident(incident) {
        const text = `${incident.title} ${incident.description}`.toLowerCase();
        return IMPACT_KEYWORDS.some(keyword => text.includes(keyword.toLowerCase()));
    }

    /**
     * Process and categorize incident
     */
    processIncident(incident) {
        const processedIncident = {
            ...incident,
            severity: this.calculateSeverity(incident),
            incident_type: this.categorizeIncident(incident),
            users_affected: this.extractUserCount(incident),
            financial_impact: this.extractFinancialImpact(incident),
            companies_affected: this.extractCompanies(incident),
            timestamp: new Date().toISOString()
        };

        this.incidents.push(processedIncident);
        
        // Store in database (implement based on your DB choice)
        this.storeIncident(processedIncident);
        
        console.log(`Processed incident: ${processedIncident.title}`);
    }

    /**
     * Calculate severity based on content analysis
     */
    calculateSeverity(incident) {
        const text = `${incident.title} ${incident.description}`.toLowerCase();
        
        if (text.includes('billion') || text.includes('critical') || text.includes('zero-day')) {
            return 'Critical';
        } else if (text.includes('million') || text.includes('ransomware') || text.includes('breach')) {
            return 'High';
        } else if (text.includes('vulnerability') || text.includes('attack')) {
            return 'Medium';
        }
        
        return 'Low';
    }

    /**
     * Categorize incident type
     */
    categorizeIncident(incident) {
        const text = `${incident.title} ${incident.description}`.toLowerCase();
        
        if (text.includes('ransomware')) return 'Ransomware';
        if (text.includes('data breach') || text.includes('breach')) return 'Data Breach';
        if (text.includes('phishing')) return 'Phishing';
        if (text.includes('malware')) return 'Malware';
        if (text.includes('ddos')) return 'DDoS Attack';
        if (text.includes('vulnerability')) return 'Vulnerability';
        
        return 'Other';
    }

    /**
     * Extract number of affected users using regex
     */
    extractUserCount(incident) {
        const text = `${incident.title} ${incident.description}`;
        const patterns = [
            /(\d+(?:\.\d+)?)\s*billion\s+users?/i,
            /(\d+(?:\.\d+)?)\s*million\s+users?/i,
            /(\d+(?:,\d{3})*)\s+users?\s+affected/i
        ];

        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) {
                return match[0];
            }
        }
        
        return 'Unknown';
    }

    /**
     * Extract financial impact
     */
    extractFinancialImpact(incident) {
        const text = `${incident.title} ${incident.description}`;
        const patterns = [
            /\$(\d+(?:\.\d+)?)\s*billion/i,
            /\$(\d+(?:\.\d+)?)\s*million/i,
            /(\d+(?:\.\d+)?)\s*billion\s+dollars?/i
        ];

        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) {
                return match[0];
            }
        }
        
        return 'Undisclosed';
    }

    /**
     * Extract company names mentioned
     */
    extractCompanies(incident) {
        const text = `${incident.title} ${incident.description}`;
        const companies = [
            'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Facebook',
            'Twitter', 'LinkedIn', 'IBM', 'Oracle', 'Salesforce', 'Zoom',
            'Tesla', 'PayPal', 'eBay', 'Uber', 'Airbnb', 'Netflix'
        ];

        const found = companies.filter(company => 
            text.toLowerCase().includes(company.toLowerCase())
        );

        return found.length > 0 ? found : ['Unknown'];
    }

    /**
     * Extract domain from URL
     */
    extractDomain(url) {
        try {
            return new URL(url).hostname;
        } catch {
            return 'Unknown';
        }
    }

    /**
     * Store incident in database
     */
    async storeIncident(incident) {
        // Implement database storage logic here
        // Example with MongoDB:
        /*
        const db = await connectToDatabase();
        await db.collection('incidents').insertOne(incident);
        */
        
        // For now, just log
        console.log('Storing incident:', incident.title);
    }
}

// Initialize and start collection
const collector = new ThreatIntelligenceCollector();
collector.startCollection();

module.exports = ThreatIntelligenceCollector;
```

### Email Newsletter System

```javascript
// newsletter-service.js - Automated newsletter generation and sending

const nodemailer = require('nodemailer');
const cron = require('node-cron');
const handlebars = require('handlebars');
const fs = require('fs');

class NewsletterService {
    constructor() {
        // Configure email transporter (using Gmail as example)
        this.transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS  // App-specific password
            }
        });

        // Load email template
        this.template = this.loadTemplate();
    }

    /**
     * Start automated newsletter sending
     */
    startAutomation() {
        // Schedule weekly newsletter (every Monday at 9 AM)
        cron.schedule('0 9 * * 1', () => {
            console.log('Sending weekly cybersecurity newsletter...');
            this.sendWeeklyNewsletter();
        });

        console.log('Newsletter automation started - will send every Monday at 9 AM');
    }

    /**
     * Load HTML email template
     */
    loadTemplate() {
        try {
            const templatePath = './templates/newsletter.html';
            const templateSource = fs.readFileSync(templatePath, 'utf8');
            return handlebars.compile(templateSource);
        } catch (error) {
            console.error('Error loading email template:', error);
            return null;
        }
    }

    /**
     * Send weekly newsletter to all subscribers
     */
    async sendWeeklyNewsletter() {
        try {
            // Get recent incidents (last 7 days)
            const recentIncidents = await this.getRecentIncidents();
            
            // Get subscriber list
            const subscribers = await this.getSubscribers();
            
            if (subscribers.length === 0) {
                console.log('No subscribers found');
                return;
            }

            // Generate newsletter content
            const newsletterData = this.generateNewsletterData(recentIncidents);
            
            // Send to each subscriber
            for (const subscriber of subscribers) {
                await this.sendToSubscriber(subscriber, newsletterData);
                
                // Add delay to avoid rate limiting
                await this.delay(1000);
            }

            console.log(`Newsletter sent to ${subscribers.length} subscribers`);
            
            // Log successful send
            await this.logNewsletterSend(subscribers.length);
            
        } catch (error) {
            console.error('Error sending newsletter:', error);
        }
    }

    /**
     * Get recent cybersecurity incidents from database
     */
    async getRecentIncidents() {
        // In real implementation, fetch from your database
        // For now, return sample data
        return [
            {
                company: 'Google (Salesforce Breach)',
                incident_type: 'Data Breach',
                date: '2025-08-06',
                description: 'ShinyHunters hacking group breached Salesforce-hosted database',
                users_affected: '2.5 billion Gmail users at risk',
                severity: 'High',
                industry: 'Technology'
            }
            // Add more incidents...
        ];
    }

    /**
     * Get list of email subscribers
     */
    async getSubscribers() {
        // In real implementation, fetch from your database
        // For now, return sample data
        return [
            { email: 'admin@company.com', name: 'System Administrator' },
            { email: 'security@company.com', name: 'Security Team' }
        ];
    }

    /**
     * Generate newsletter data for template
     */
    generateNewsletterData(incidents) {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - 7);
        
        const criticalIncidents = incidents.filter(i => i.severity === 'Critical');
        const highIncidents = incidents.filter(i => i.severity === 'High');
        
        return {
            week_of: weekStart.toLocaleDateString(),
            total_incidents: incidents.length,
            critical_count: criticalIncidents.length,
            high_count: highIncidents.length,
            industries_affected: [...new Set(incidents.map(i => i.industry))],
            top_incidents: incidents.slice(0, 5), // Top 5 incidents
            summary_stats: {
                most_targeted_industry: this.getMostTargetedIndustry(incidents),
                biggest_breach: this.getBiggestBreach(incidents),
                trending_threat: this.getTrendingThreat(incidents)
            }
        };
    }

    /**
     * Send newsletter to individual subscriber
     */
    async sendToSubscriber(subscriber, newsletterData) {
        try {
            // Personalize data for subscriber
            const personalizedData = {
                ...newsletterData,
                subscriber_name: subscriber.name || 'Security Professional',
                unsubscribe_link: `${process.env.BASE_URL}/unsubscribe?email=${encodeURIComponent(subscriber.email)}`
            };

            // Generate HTML content
            const htmlContent = this.template(personalizedData);

            // Email options
            const mailOptions = {
                from: `CyberWatch Intelligence <${process.env.EMAIL_USER}>`,
                to: subscriber.email,
                subject: `🛡️ CyberWatch Weekly - ${personalizedData.total_incidents} New Threats Detected`,
                html: htmlContent,
                text: this.generateTextVersion(personalizedData) // Fallback text version
            };

            // Send email
            const result = await this.transporter.sendMail(mailOptions);
            console.log(`Newsletter sent to ${subscriber.email}: ${result.messageId}`);
            
        } catch (error) {
            console.error(`Error sending to ${subscriber.email}:`, error);
        }
    }

    /**
     * Generate text version of newsletter (fallback)
     */
    generateTextVersion(data) {
        return `
CyberWatch Weekly Threat Intelligence
Week of ${data.week_of}

SUMMARY:
- ${data.total_incidents} new incidents tracked
- ${data.critical_count} critical threats identified  
- ${data.high_count} high-severity incidents
- Industries affected: ${data.industries_affected.join(', ')}

TOP INCIDENTS:
${data.top_incidents.map(incident => `
• ${incident.company} - ${incident.incident_type}
  Impact: ${incident.users_affected}
  Severity: ${incident.severity}
  Description: ${incident.description}
`).join('')}

Stay vigilant and keep your systems updated!

--
CyberWatch Threat Intelligence Platform
Unsubscribe: ${data.unsubscribe_link}
        `;
    }

    /**
     * Get most targeted industry
     */
    getMostTargetedIndustry(incidents) {
        const industries = {};
        incidents.forEach(incident => {
            industries[incident.industry] = (industries[incident.industry] || 0) + 1;
        });
        
        return Object.keys(industries).reduce((a, b) => 
            industries[a] > industries[b] ? a : b
        );
    }

    /**
     * Get biggest breach by user count
     */
    getBiggestBreach(incidents) {
        return incidents.reduce((biggest, current) => {
            const currentUsers = this.extractUserNumber(current.users_affected);
            const biggestUsers = this.extractUserNumber(biggest.users_affected);
            return currentUsers > biggestUsers ? current : biggest;
        });
    }

    /**
     * Get trending threat type
     */
    getTrendingThreat(incidents) {
        const threatTypes = {};
        incidents.forEach(incident => {
            threatTypes[incident.incident_type] = (threatTypes[incident.incident_type] || 0) + 1;
        });
        
        return Object.keys(threatTypes).reduce((a, b) => 
            threatTypes[a] > threatTypes[b] ? a : b
        );
    }

    /**
     * Extract numeric value from user count string
     */
    extractUserNumber(userString) {
        if (typeof userString !== 'string') return 0;
        
        const match = userString.match(/(\d+(?:\.\d+)?)/);
        if (!match) return 0;
        
        const number = parseFloat(match[1]);
        
        if (userString.includes('billion')) return number * 1000000000;
        if (userString.includes('million')) return number * 1000000;
        if (userString.includes('thousand')) return number * 1000;
        
        return number;
    }

    /**
     * Log successful newsletter send
     */
    async logNewsletterSend(subscriberCount) {
        // In real implementation, log to database
        console.log(`Newsletter send logged: ${subscriberCount} recipients at ${new Date().toISOString()}`);
    }

    /**
     * Add delay utility function
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Manual send for testing
     */
    async sendTestNewsletter(testEmail) {
        const recentIncidents = await this.getRecentIncidents();
        const newsletterData = this.generateNewsletterData(recentIncidents);
        
        const testSubscriber = { email: testEmail, name: 'Test User' };
        await this.sendToSubscriber(testSubscriber, newsletterData);
        
        console.log(`Test newsletter sent to ${testEmail}`);
    }
}

// Initialize and start newsletter service
const newsletterService = new NewsletterService();
newsletterService.startAutomation();

module.exports = NewsletterService;
```

### HTML Email Template

```html
<!-- templates/newsletter.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CyberWatch Weekly Newsletter</title>
    <style>
        /* Email-safe CSS styles */
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background-color: #1e293b; color: #ffffff; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 20px; }
        .summary-box { background-color: #f8fafc; padding: 15px; margin: 20px 0; border-left: 4px solid #3b82f6; }
        .incident-card { border: 1px solid #e2e8f0; margin: 10px 0; padding: 15px; border-radius: 5px; }
        .severity-critical { border-left: 4px solid #dc2626; }
        .severity-high { border-left: 4px solid #ea580c; }
        .severity-medium { border-left: 4px solid #d97706; }
        .severity-low { border-left: 4px solid #65a30d; }
        .footer { background-color: #f8fafc; padding: 20px; text-align: center; color: #64748b; }
        .stats { display: table; width: 100%; margin: 20px 0; }
        .stat { display: table-cell; text-align: center; padding: 10px; background-color: #f1f5f9; }
        .stat strong { display: block; font-size: 24px; color: #1e293b; }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>🛡️ CyberWatch Weekly</h1>
            <p>Threat Intelligence Report - Week of {{week_of}}</p>
        </div>

        <!-- Content -->
        <div class="content">
            <p>Hello {{subscriber_name}},</p>
            
            <p>Here's your weekly cybersecurity threat intelligence summary. This week we've identified several significant security incidents that require your attention.</p>

            <!-- Summary Statistics -->
            <div class="summary-box">
                <h2>📊 This Week's Summary</h2>
                <div class="stats">
                    <div class="stat">
                        <strong>{{total_incidents}}</strong>
                        <span>New Incidents</span>
                    </div>
                    <div class="stat">
                        <strong>{{critical_count}}</strong>
                        <span>Critical Threats</span>
                    </div>
                    <div class="stat">
                        <strong>{{high_count}}</strong>
                        <span>High Severity</span>
                    </div>
                </div>
                
                <h3>Key Insights:</h3>
                <ul>
                    <li><strong>Most Targeted Industry:</strong> {{summary_stats.most_targeted_industry}}</li>
                    <li><strong>Trending Threat Type:</strong> {{summary_stats.trending_threat}}</li>
                    <li><strong>Industries Affected:</strong> {{#each industries_affected}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}</li>
                </ul>
            </div>

            <!-- Top Incidents -->
            <h2>🚨 Top Incidents This Week</h2>
            
            {{#each top_incidents}}
            <div class="incident-card severity-{{toLowerCase severity}}">
                <h3>{{company}} - {{incident_type}}</h3>
                <p><strong>Severity:</strong> <span style="color: {{#if (eq severity 'Critical')}}#dc2626{{else if (eq severity 'High')}}#ea580c{{else}}#d97706{{/if}}">{{severity}}</span></p>
                <p><strong>Users Affected:</strong> {{users_affected}}</p>
                <p><strong>Industry:</strong> {{industry}}</p>
                <p>{{description}}</p>
                <p><small><strong>Date:</strong> {{date}}</small></p>
            </div>
            {{/each}}

            <!-- Recommendations -->
            <div class="summary-box">
                <h2>💡 Weekly Recommendations</h2>
                <ul>
                    <li>Review and update your incident response procedures</li>
                    <li>Ensure all systems have the latest security patches</li>
                    <li>Conduct phishing awareness training for staff</li>
                    <li>Verify backup systems are functioning properly</li>
                    <li>Monitor for indicators of compromise from this week's threats</li>
                </ul>
            </div>

            <!-- Call to Action -->
            <div style="text-align: center; margin: 30px 0;">
                <p>Want more detailed threat intelligence?</p>
                <a href="{{dashboard_link}}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                    View Full Dashboard
                </a>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Stay vigilant and keep your defenses strong! 🛡️</p>
            <p><small>
                Generated by CyberWatch Threat Intelligence Platform<br>
                <a href="{{unsubscribe_link}}" style="color: #64748b;">Unsubscribe</a> | 
                <a href="{{preferences_link}}" style="color: #64748b;">Update Preferences</a>
            </small></p>
        </div>
    </div>
</body>
</html>
```

## Deployment & Configuration

### Environment Variables (.env)
```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Database Configuration
DATABASE_URL=mongodb://localhost:27017/cyberwatch
# or for PostgreSQL: postgresql://username:password@localhost:5432/cyberwatch

# Application Configuration
BASE_URL=https://your-domain.com
PORT=3000
NODE_ENV=production

# API Keys (optional)
NEWS_API_KEY=your-news-api-key
VIRUSTOTAL_API_KEY=your-virustotal-key
```

### Package.json Dependencies
```json
{
  "name": "cyberwatch-threat-tracker",
  "version": "1.0.0",
  "description": "Automated cybersecurity threat tracking and newsletter system",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "npm run test"
  },
  "dependencies": {
    "express": "^4.18.2",
    "axios": "^1.6.0",
    "cheerio": "^1.0.0-rc.12",
    "node-cron": "^3.0.2",
    "nodemailer": "^6.9.7",
    "handlebars": "^4.7.8",
    "mongoose": "^7.6.3",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "rss-parser": "^3.13.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### Installation Instructions

1. **Clone/Setup Project**
```bash
mkdir cyberwatch-system
cd cyberwatch-system
npm init -y
npm install express axios cheerio node-cron nodemailer handlebars mongoose dotenv cors helmet rss-parser
```

2. **Create Directory Structure**
```
cyberwatch-system/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── src/
│   ├── collectors/
│   │   └── data-collector.js
│   ├── services/
│   │   └── newsletter-service.js
│   └── models/
│       ├── incident.js
│       └── subscriber.js
├── templates/
│   └── newsletter.html
├── server.js
├── .env
└── package.json
```

3. **Configure Email**
   - Enable 2-factor authentication on Gmail
   - Generate app-specific password
   - Update .env file with credentials

4. **Set Up Database**
   - Install MongoDB or PostgreSQL
   - Update connection string in .env
   - Create required collections/tables

5. **Deploy Application**
   - Use PM2 for production: `npm install -g pm2`
   - Start with: `pm2 start server.js --name cyberwatch`
   - For cloud deployment, consider Heroku, AWS, or DigitalOcean

### Security Considerations

1. **Data Protection**
   - Encrypt sensitive data at rest
   - Use HTTPS for all connections
   - Implement rate limiting
   - Sanitize all user inputs

2. **Email Security**
   - Use app-specific passwords
   - Implement SPF/DKIM records
   - Monitor bounce rates
   - Include unsubscribe functionality

3. **Access Control**
   - Implement user authentication
   - Use role-based access control
   - Log all administrative actions
   - Regular security audits

This comprehensive guide provides all the code, comments, and instructions needed to build and deploy your cybersecurity threat tracking and newsletter system. The system will automatically collect threat intelligence, manage email subscribers, and send weekly newsletters with minimal user interaction required.