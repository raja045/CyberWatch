// CyberWatch Application JavaScript

// Application data with enhanced article links
const appData = {
  recent_incidents: [
    {
      id: 1,
      company: "Google (Salesforce Breach)",
      incident_type: "Data Breach",
      date: "2025-08-06",
      description: "Google confirmed that its Salesforce-hosted customer database was breached by ShinyHunters hacking group, exposing business contact information.",
      users_affected: "2.5 billion Gmail users at risk",
      financial_impact: "Undisclosed",
      severity: "High",
      status: "Under Investigation",
      industry: "Technology",
      details: "The breach involved basic business information including names, email addresses, and phone numbers. No consumer passwords or financial data were compromised, but the exposed data is being used for sophisticated phishing attacks.",
      primary_source_url: "https://news.trendmicro.com/2025/08/26/google-data-breach-gmail/",
      additional_sources: [
        {
          url: "https://thehackernews.com/2025/08/google-salesforce-breach-shiny-hunters.html",
          publication: "The Hacker News",
          date: "2025-08-06",
          title: "ShinyHunters Group Breaches Google's Salesforce Database"
        },
        {
          url: "https://krebsonsecurity.com/2025/08/google-confirms-salesforce-hosted-breach/",
          publication: "Krebs on Security",
          date: "2025-08-07",
          title: "Google Confirms Salesforce-Hosted Customer Database Breach"
        },
        {
          url: "https://www.bleepingcomputer.com/news/security/google-breach-2-5-billion-users-risk/",
          publication: "Bleeping Computer",
          date: "2025-08-06",
          title: "Google Breach Puts 2.5 Billion Gmail Users at Risk"
        }
      ],
      source_publications: ["Trend Micro", "The Hacker News", "Krebs on Security", "Bleeping Computer"],
      vendor_advisories: [
        {
          url: "https://security.google.com/advisories/2025-08-06",
          title: "Google Security Advisory: Salesforce Database Incident",
          date: "2025-08-06"
        }
      ],
      cve_references: []
    },
    {
      id: 2,
      company: "Allianz Life Insurance",
      incident_type: "Data Breach",
      date: "2025-07-16",
      description: "Hackers accessed a third-party cloud-based CRM system using social engineering techniques, exposing personal data for most of Allianz Life's customers.",
      users_affected: "1.4 million customers",
      financial_impact: "Undisclosed",
      severity: "Critical",
      status: "Resolved",
      industry: "Insurance",
      details: "The attack used social engineering to gain access to customer personal data. Allianz reported the incident to the FBI and stated there is no evidence of intrusion into core systems.",
      primary_source_url: "https://www.securityweek.com/allianz-life-breach-1-4-million-customers/",
      additional_sources: [
        {
          url: "https://www.darkreading.com/cyberattacks-data-breaches/allianz-life-social-engineering-attack",
          publication: "Dark Reading",
          date: "2025-07-17",
          title: "Allianz Life Hit by Social Engineering Attack Affecting 1.4M Customers"
        },
        {
          url: "https://www.insurancejournal.com/news/national/2025/07/16/allianz-breach-crm-system/",
          publication: "Insurance Journal",
          date: "2025-07-16",
          title: "Allianz Life Reports Major Customer Data Breach via CRM System"
        }
      ],
      source_publications: ["Security Week", "Dark Reading", "Insurance Journal"],
      vendor_advisories: [
        {
          url: "https://www.allianzlife.com/security-notice-2025-07-16",
          title: "Allianz Life Security Incident Notice",
          date: "2025-07-16"
        }
      ],
      cve_references: []
    },
    {
      id: 3,
      company: "Change Healthcare/UnitedHealth",
      incident_type: "Ransomware",
      date: "2024-02-21",
      description: "ALPHV/BlackCat ransomware attack disrupted healthcare payments nationwide, affecting over 100 million people in the largest healthcare breach in U.S. history.",
      users_affected: "100+ million",
      financial_impact: "$2.87 billion",
      severity: "Critical",
      status: "Resolved",
      industry: "Healthcare",
      details: "Attackers exploited a Citrix portal lacking multifactor authentication, spent 9 days stealing data undetected, then launched ransomware disrupting 100+ applications.",
      primary_source_url: "https://www.hipaajournal.com/change-healthcare-responding-to-cyberattack/",
      additional_sources: [
        {
          url: "https://www.reuters.com/business/healthcare-pharmaceuticals/unitedhealth-change-healthcare-cyberattack-2024-02-21/",
          publication: "Reuters",
          date: "2024-02-21",
          title: "UnitedHealth's Change Healthcare Hit by Cyberattack"
        },
        {
          url: "https://www.healthcaredive.com/news/change-healthcare-cyberattack-timeline-impact/",
          publication: "Healthcare Dive",
          date: "2024-02-22",
          title: "Change Healthcare Cyberattack: Timeline and Impact Analysis"
        }
      ],
      source_publications: ["HIPAA Journal", "Reuters", "Healthcare Dive"],
      vendor_advisories: [
        {
          url: "https://www.unitedhealthgroup.com/newsroom/2024/change-healthcare-incident",
          title: "UnitedHealth Group Statement on Change Healthcare Incident",
          date: "2024-02-21"
        }
      ],
      cve_references: []
    },
    {
      id: 4,
      company: "Ticketmaster",
      incident_type: "Data Breach",
      date: "2024-06-01",
      description: "Massive data breach exposed customer information including names, contact details, and payment information.",
      users_affected: "560 million customers",
      financial_impact: "Undisclosed",
      severity: "Critical",
      status: "Under Investigation",
      industry: "Entertainment",
      details: "The breach affected customers globally with exposure of personal and financial information, leading to widespread identity theft concerns.",
      primary_source_url: "https://www.bbc.com/news/articles/ticketmaster-data-breach-560-million-customers",
      additional_sources: [
        {
          url: "https://www.theguardian.com/technology/2024/jun/01/ticketmaster-data-breach-hack",
          publication: "The Guardian",
          date: "2024-06-01",
          title: "Ticketmaster Confirms Massive Data Breach Affecting 560 Million Users"
        },
        {
          url: "https://www.cybersecuritydive.com/news/ticketmaster-breach-shinyhunters-group/",
          publication: "Cybersecurity Dive",
          date: "2024-06-02",
          title: "ShinyHunters Group Claims Responsibility for Ticketmaster Breach"
        }
      ],
      source_publications: ["BBC", "The Guardian", "Cybersecurity Dive"],
      vendor_advisories: [
        {
          url: "https://help.ticketmaster.com/hc/en-us/articles/security-incident-june-2024",
          title: "Ticketmaster Security Incident Information",
          date: "2024-06-01"
        }
      ],
      cve_references: []
    },
    {
      id: 5,
      company: "AT&T",
      incident_type: "Data Breach",
      date: "2024-07-01",
      description: "Telecommunications giant suffered multiple data breaches throughout 2024, exposing customer records and call metadata.",
      users_affected: "109 million customers",
      financial_impact: "Undisclosed",
      severity: "High",
      status: "Resolved",
      industry: "Telecommunications",
      details: "Multiple incidents involved exposure of customer personal information, call records, and account details across different time periods.",
      primary_source_url: "https://www.att.com/gen/general?pid=30572",
      additional_sources: [
        {
          url: "https://www.cnn.com/2024/07/01/tech/att-data-breach-109-million/index.html",
          publication: "CNN",
          date: "2024-07-01",
          title: "AT&T Data Breach Affects 109 Million Customer Accounts"
        },
        {
          url: "https://www.washingtonpost.com/technology/2024/07/01/att-customer-data-breach/",
          publication: "Washington Post",
          date: "2024-07-01",
          title: "AT&T Discloses Major Customer Data Breach"
        }
      ],
      source_publications: ["AT&T Official", "CNN", "Washington Post"],
      vendor_advisories: [
        {
          url: "https://about.att.com/story/2024/att-data-incident.html",
          title: "AT&T Data Incident Information",
          date: "2024-07-01"
        }
      ],
      cve_references: []
    },
    {
      id: 6,
      company: "Jaguar Land Rover",
      incident_type: "Cyber Incident",
      date: "2025-09-02",
      description: "British luxury carmaker hit by cybersecurity incident that severely disrupted production and retail activities.",
      users_affected: "Customers and employees",
      financial_impact: "Production losses",
      severity: "High",
      status: "Under Investigation",
      industry: "Automotive",
      details: "Manufacturing operations and sales systems were severely disrupted, with the company working to restart operations in a controlled manner.",
      primary_source_url: "https://www.reuters.com/business/autos-transportation/britains-jlr-hit-by-cyber-incident-that-disrupts-production-sales-2025-09-02/",
      additional_sources: [
        {
          url: "https://industrialcyber.co/threats-attacks/jaguarlandrover-cyberattack-manufacturing-disruption/",
          publication: "Industrial Cyber",
          date: "2025-09-03",
          title: "Jaguar Land Rover Cyberattack Disrupts Global Manufacturing"
        }
      ],
      source_publications: ["Reuters", "Industrial Cyber"],
      vendor_advisories: [
        {
          url: "https://media.jaguarlandrover.com/news/2025/09/cyber-incident-statement",
          title: "Jaguar Land Rover Cyber Incident Statement",
          date: "2025-09-02"
        }
      ],
      cve_references: []
    },
    {
      id: 7,
      company: "Bridgestone",
      incident_type: "Cyberattack",
      date: "2025-09-04",
      description: "Tire manufacturer confirmed cyberattack disrupting manufacturing operations, raising supply chain concerns.",
      users_affected: "Employees and customers",
      financial_impact: "Manufacturing losses",
      severity: "High",
      status: "Under Investigation",
      industry: "Manufacturing",
      details: "Attack disrupted operations at North American facilities, potentially affecting tire supply chains and automotive industry partners.",
      primary_source_url: "https://industrialcyber.co/threats-attacks/bridgestone-cyberattack-disrupts-manufacturing-raises-supply-chain-concerns/",
      additional_sources: [
        {
          url: "https://www.manufacturingglobal.com/supply-chain-and-logistics/bridgestone-cyberattack-september-2025",
          publication: "Manufacturing Global",
          date: "2025-09-04",
          title: "Bridgestone Cyberattack Raises Supply Chain Security Concerns"
        }
      ],
      source_publications: ["Industrial Cyber", "Manufacturing Global"],
      vendor_advisories: [
        {
          url: "https://www.bridgestone.com/corporate/news/2025090401.html",
          title: "Bridgestone Cyber Security Incident Notice",
          date: "2025-09-04"
        }
      ],
      cve_references: []
    }
  ],
  email_subscribers: [
    {
      id: 1,
      email: "admin@company.com",
      name: "System Administrator",
      date_added: "2025-09-01",
      status: "Active",
      include_article_links: true
    },
    {
      id: 2,
      email: "security@company.com", 
      name: "Security Team",
      date_added: "2025-09-01",
      status: "Active",
      include_article_links: true
    },
    {
      id: 3,
      email: "ciso@company.com",
      name: "CISO",
      date_added: "2025-09-02",
      status: "Active",
      include_article_links: false
    }
  ],
  newsletter_config: {
    frequency: "Weekly",
    send_day: "Monday",
    send_time: "09:00",
    template: "Professional",
    auto_send: true,
    last_sent: "2025-09-02",
    next_scheduled: "2025-09-09",
    include_article_links: true,
    max_sources_per_incident: 3,
    include_vendor_advisories: true
  },
  analytics: {
    total_incidents_tracked: 157,
    this_month_incidents: 23,
    critical_incidents: 8,
    high_severity: 15,
    total_article_sources: 342,
    verified_sources: 287,
    industries_affected: ["Technology", "Healthcare", "Finance", "Manufacturing", "Energy", "Telecommunications"],
    top_threat_types: ["Ransomware", "Data Breach", "Phishing", "Supply Chain Attack", "Insider Threat"],
    monthly_trend: [12, 18, 25, 23, 19, 27, 23]
  }
};

// Application state
let currentIncidents = [...appData.recent_incidents];
let currentSubscribers = [...appData.email_subscribers];

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing CyberWatch application...');
    
    setupTabSwitching();
    renderIncidents();
    setupFilters();
    setupModals();
    setupEmailManagement();
    setupNewsletterConfig();
    loadSubscribers();
    
    // Initialize analytics after a small delay
    setTimeout(() => {
        try {
            renderAnalytics();
        } catch (error) {
            console.error('Error initializing analytics:', error);
        }
    }, 500);
    
    console.log('App initialization complete');
}

// Tab switching functionality - FIXED
function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.nav__item');
    console.log('Setting up tab switching, found', tabButtons.length, 'tab buttons');
    
    tabButtons.forEach((button, index) => {
        const tabId = button.getAttribute('data-tab');
        console.log(`Tab button ${index}: ${tabId}`);
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Clicked tab: ${tabId}`);
            switchTab(tabId);
        });
    });
}

function switchTab(tabId) {
    console.log(`Switching to tab: ${tabId}`);
    
    // Remove active class from all buttons
    const allButtons = document.querySelectorAll('.nav__item');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Hide all tab contents
    const allTabContents = document.querySelectorAll('.tab-content');
    allTabContents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });
    
    // Show target tab content
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active');
        targetContent.style.display = 'block';
    }
}

// Render incidents
function renderIncidents(incidents = currentIncidents) {
    const incidentsGrid = document.getElementById('incidentsGrid');
    if (!incidentsGrid) {
        console.error('Could not find incidents grid element');
        return;
    }
    
    console.log('Rendering', incidents.length, 'incidents');
    incidentsGrid.innerHTML = '';
    
    incidents.forEach((incident, index) => {
        const card = createIncidentCard(incident);
        incidentsGrid.appendChild(card);
        console.log(`Rendered incident card ${index}: ${incident.company}`);
    });
}

function createIncidentCard(incident) {
    const card = document.createElement('div');
    card.className = `incident-card severity-${incident.severity.toLowerCase()}`;
    card.dataset.incidentId = incident.id;
    
    // Get primary source publication name
    const primarySourcePublication = incident.source_publications && incident.source_publications.length > 0 
        ? incident.source_publications[0] 
        : 'Source';
    
    // Calculate article age
    const articleAge = getArticleAge(incident.date);
    
    card.innerHTML = `
        <div class="incident-header">
            <h3 class="incident-company">${incident.company}</h3>
            <span class="incident-date">${formatDate(incident.date)}</span>
        </div>
        <div class="incident-meta">
            <span class="incident-type">${incident.incident_type}</span>
            <span class="incident-severity ${incident.severity.toLowerCase()}">${incident.severity}</span>
        </div>
        <p class="incident-description">${incident.description}</p>
        <div class="incident-sources">
            <div class="source-info">
                <span class="source-publication">${primarySourcePublication}</span>
                <span class="source-age">${articleAge}</span>
            </div>
        </div>
        <div class="incident-stats">
            <div class="stat-item">
                <span class="stat-label">Users Affected</span>
                <span class="stat-value">${incident.users_affected}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Financial Impact</span>
                <span class="stat-value">${incident.financial_impact}</span>
            </div>
        </div>
        <div class="incident-actions">
            <button class="btn btn--outline btn-article" onclick="event.stopPropagation(); openPrimarySource('${incident.primary_source_url}')">
                📖 Read Full Article (${primarySourcePublication})
                <span class="external-link-icon">↗</span>
            </button>
        </div>
    `;
    
    // Add click event listener for card body (not buttons) - FIXED to pass correct incident
    card.addEventListener('click', (e) => {
        // Don't trigger modal if clicking on buttons
        if (e.target.closest('.incident-actions') || e.target.closest('button')) {
            return;
        }
        e.preventDefault();
        console.log('Clicked incident card:', incident.company);
        showIncidentDetail(incident); // Pass the specific incident
    });
    
    return card;
}

// Open primary source in new tab
function openPrimarySource(url) {
    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}

// Get article age display
function getArticleAge(dateString) {
    const articleDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - articleDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
        return '1 day ago';
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    } else {
        const months = Math.floor(diffDays / 30);
        return months === 1 ? '1 month ago' : `${months} months ago`;
    }
}

// Filtering and search
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const severityFilter = document.getElementById('severityFilter');
    const industryFilter = document.getElementById('industryFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    console.log('Setting up filters...');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleFilter);
    }
    
    if (severityFilter) {
        severityFilter.addEventListener('change', handleFilter);
    }
    
    if (industryFilter) {
        industryFilter.addEventListener('change', handleFilter);
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', handleFilter);
    }
}

function handleFilter() {
    const searchInput = document.getElementById('searchInput');
    const severityFilter = document.getElementById('severityFilter');
    const industryFilter = document.getElementById('industryFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const severityValue = severityFilter ? severityFilter.value : '';
    const industryValue = industryFilter ? industryFilter.value : '';
    const statusValue = statusFilter ? statusFilter.value : '';
    
    let filtered = appData.recent_incidents.filter(incident => {
        const matchesSearch = !searchTerm || 
            incident.company.toLowerCase().includes(searchTerm) || 
            incident.description.toLowerCase().includes(searchTerm) ||
            incident.incident_type.toLowerCase().includes(searchTerm);
        
        const matchesSeverity = !severityValue || incident.severity === severityValue;
        const matchesIndustry = !industryValue || incident.industry === industryValue;
        const matchesStatus = !statusValue || incident.status === statusValue;
        
        return matchesSearch && matchesSeverity && matchesIndustry && matchesStatus;
    });
    
    console.log('Filtered results:', filtered.length, 'incidents');
    currentIncidents = filtered;
    renderIncidents(filtered);
}

// Modal functionality
function setupModals() {
    console.log('Setting up modals...');
    
    // Incident modal
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('incidentModal');
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                hideModal('incidentModal');
            }
        });
    }
    
    // Add email modal
    const addEmailModalClose = document.getElementById('addEmailModalClose');
    if (addEmailModalClose) {
        addEmailModalClose.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('addEmailModal');
        });
    }
    
    // Preview modal
    const previewModalClose = document.getElementById('previewModalClose');
    if (previewModalClose) {
        previewModalClose.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('previewModal');
        });
    }
    
    // Add general overlay click handlers
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                const modal = overlay.closest('.modal');
                if (modal) {
                    hideModal(modal.id);
                }
            }
        });
    });
}

function showModal(modalId) {
    console.log('Showing modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}

function hideModal(modalId) {
    console.log('Hiding modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

function showIncidentDetail(incident) {
    console.log('Showing incident detail for:', incident.company);
    
    // Update modal content - FIXED to use the passed incident
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
        modalTitle.textContent = `${incident.company} - ${incident.incident_type}`;
    }
    
    updateElementText('detailCompany', incident.company);
    updateElementText('detailDate', formatDate(incident.date));
    updateElementText('detailType', incident.incident_type);
    updateElementText('detailSeverity', incident.severity);
    updateElementText('detailUsers', incident.users_affected);
    updateElementText('detailImpact', incident.financial_impact);
    updateElementText('detailDescription', incident.description);
    updateElementText('detailTechnical', incident.details);
    
    // Update sources and references section - FIXED
    renderSourcesAndReferences(incident);
    
    showModal('incidentModal');
}

function renderSourcesAndReferences(incident) {
    const sourcesContainer = document.getElementById('sourcesContainer');
    if (!sourcesContainer) return;
    
    let sourcesHTML = '<h3>📰 Sources & References</h3>';
    
    // Primary source
    if (incident.primary_source_url) {
        const primaryPublication = incident.source_publications && incident.source_publications.length > 0 
            ? incident.source_publications[0] 
            : 'Primary Source';
        
        sourcesHTML += `
            <div class="source-section">
                <h4>Primary Source</h4>
                <div class="source-link">
                    <a href="${incident.primary_source_url}" target="_blank" class="article-link">
                        📖 ${primaryPublication} <span class="external-link-icon">↗</span>
                    </a>
                    <span class="source-date">${formatDate(incident.date)}</span>
                </div>
            </div>
        `;
    }
    
    // Additional sources
    if (incident.additional_sources && incident.additional_sources.length > 0) {
        sourcesHTML += `
            <div class="source-section">
                <h4>Additional Sources</h4>
                <div class="additional-sources">
        `;
        
        incident.additional_sources.forEach(source => {
            sourcesHTML += `
                <div class="source-link">
                    <a href="${source.url}" target="_blank" class="article-link">
                        📖 ${source.title || source.publication} <span class="external-link-icon">↗</span>
                    </a>
                    <div class="source-meta">
                        <span class="source-publication">${source.publication}</span>
                        <span class="source-date">${formatDate(source.date)}</span>
                    </div>
                </div>
            `;
        });
        
        sourcesHTML += '</div></div>';
    }
    
    // Vendor advisories
    if (incident.vendor_advisories && incident.vendor_advisories.length > 0) {
        sourcesHTML += `
            <div class="source-section">
                <h4>Vendor Advisories</h4>
                <div class="vendor-advisories">
        `;
        
        incident.vendor_advisories.forEach(advisory => {
            sourcesHTML += `
                <div class="source-link advisory-link">
                    <a href="${advisory.url}" target="_blank" class="article-link">
                        🏢 ${advisory.title} <span class="external-link-icon">↗</span>
                    </a>
                    <span class="source-date">${formatDate(advisory.date)}</span>
                </div>
            `;
        });
        
        sourcesHTML += '</div></div>';
    }
    
    // Share functionality
    sourcesHTML += `
        <div class="share-section">
            <h4>Share Article</h4>
            <div class="share-buttons">
                <button class="btn btn--outline btn-small" onclick="shareArticle('${incident.company}', '${incident.primary_source_url}', 'twitter')">
                    Share on Twitter
                </button>
                <button class="btn btn--outline btn-small" onclick="shareArticle('${incident.company}', '${incident.primary_source_url}', 'linkedin')">
                    Share on LinkedIn
                </button>
                <button class="btn btn--outline btn-small" onclick="shareArticle('${incident.company}', '${incident.primary_source_url}', 'email')">
                    Share via Email
                </button>
            </div>
        </div>
    `;
    
    sourcesContainer.innerHTML = sourcesHTML;
}

// Share functionality
function shareArticle(company, url, platform) {
    const text = `Check out this cybersecurity incident report: ${company}`;
    
    switch (platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'linkedin':
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'email':
            window.open(`mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`, '_blank');
            break;
    }
}

function updateElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
    } else {
        console.warn('Element not found:', elementId);
    }
}

// Email management
function setupEmailManagement() {
    console.log('Setting up email management...');
    
    const addEmailBtn = document.getElementById('addEmailBtn');
    const cancelAddEmail = document.getElementById('cancelAddEmail');
    const addEmailForm = document.getElementById('addEmailForm');
    const importEmailsBtn = document.getElementById('importEmailsBtn');
    const exportEmailsBtn = document.getElementById('exportEmailsBtn');
    
    if (addEmailBtn) {
        addEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('addEmailModal');
        });
    }
    
    if (cancelAddEmail) {
        cancelAddEmail.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('addEmailModal');
        });
    }
    
    if (addEmailForm) {
        addEmailForm.addEventListener('submit', handleAddSubscriber);
    }
    
    if (importEmailsBtn) {
        importEmailsBtn.addEventListener('click', handleImportEmails);
    }
    
    if (exportEmailsBtn) {
        exportEmailsBtn.addEventListener('click', handleExportEmails);
    }
}

function loadSubscribers() {
    const tbody = document.querySelector('#subscribersTable tbody');
    if (!tbody) {
        console.error('Subscribers table body not found');
        return;
    }
    
    console.log('Loading', currentSubscribers.length, 'subscribers');
    tbody.innerHTML = '';
    
    currentSubscribers.forEach(subscriber => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subscriber.name}</td>
            <td>${subscriber.email}</td>
            <td>${formatDate(subscriber.date_added)}</td>
            <td><span class="status status--success">${subscriber.status}</span></td>
            <td>
                <label class="article-links-toggle">
                    <input type="checkbox" ${subscriber.include_article_links ? 'checked' : ''} 
                           onchange="toggleArticleLinks(${subscriber.id}, this.checked)">
                    Include Article Links
                </label>
            </td>
            <td class="table-actions">
                <button class="btn btn--outline btn-small" onclick="editSubscriber(${subscriber.id})">Edit</button>
                <button class="btn btn--outline btn-small" onclick="removeSubscriber(${subscriber.id})" style="color: var(--color-red-400)">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    updateSubscriberStats();
}

// Toggle article links for subscriber
function toggleArticleLinks(subscriberId, includeLinks) {
    const subscriber = currentSubscribers.find(sub => sub.id === subscriberId);
    if (subscriber) {
        subscriber.include_article_links = includeLinks;
        showNotification(
            `Article links ${includeLinks ? 'enabled' : 'disabled'} for ${subscriber.name}`, 
            'success'
        );
    }
}

function handleAddSubscriber(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('newSubscriberName');
    const emailInput = document.getElementById('newSubscriberEmail');
    const includeLinksInput = document.getElementById('newSubscriberIncludeLinks');
    
    if (!nameInput || !emailInput) {
        console.error('Form inputs not found');
        return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const includeLinks = includeLinksInput ? includeLinksInput.checked : true;
    
    if (!name || !email) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (currentSubscribers.some(sub => sub.email === email)) {
        alert('This email address is already subscribed');
        return;
    }
    
    const newSubscriber = {
        id: Date.now(),
        name: name,
        email: email,
        date_added: new Date().toISOString().split('T')[0],
        status: 'Active',
        include_article_links: includeLinks
    };
    
    currentSubscribers.push(newSubscriber);
    loadSubscribers();
    hideModal('addEmailModal');
    
    // Reset form
    nameInput.value = '';
    emailInput.value = '';
    if (includeLinksInput) includeLinksInput.checked = true;
    
    showNotification('Subscriber added successfully!', 'success');
}

// Global functions for onclick handlers
window.removeSubscriber = function(id) {
    if (confirm('Are you sure you want to remove this subscriber?')) {
        currentSubscribers = currentSubscribers.filter(sub => sub.id !== id);
        loadSubscribers();
        showNotification('Subscriber removed successfully!', 'success');
    }
};

window.editSubscriber = function(id) {
    alert('Edit functionality would be implemented here');
};

window.toggleArticleLinks = toggleArticleLinks;

function updateSubscriberStats() {
    const total = currentSubscribers.length;
    const active = currentSubscribers.filter(sub => sub.status === 'Active').length;
    
    updateElementText('totalSubscribers', total.toString());
    updateElementText('activeSubscribers', active.toString());
}

function handleImportEmails() {
    showNotification('Import functionality would be implemented here', 'info');
}

function handleExportEmails() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "Name,Email,Date Added,Status,Include Article Links\n"
        + currentSubscribers.map(sub => `${sub.name},${sub.email},${sub.date_added},${sub.status},${sub.include_article_links}`).join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'subscribers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Subscribers exported successfully!', 'success');
}

// Newsletter configuration
function setupNewsletterConfig() {
    console.log('Setting up newsletter configuration...');
    
    // Load current config values
    updateSelectValue('frequency', appData.newsletter_config.frequency);
    updateSelectValue('sendDay', appData.newsletter_config.send_day);
    updateInputValue('sendTime', appData.newsletter_config.send_time);
    updateSelectValue('template', appData.newsletter_config.template);
    updateCheckboxValue('autoSend', appData.newsletter_config.auto_send);
    updateCheckboxValue('includeArticleLinks', appData.newsletter_config.include_article_links);
    updateSelectValue('maxSources', appData.newsletter_config.max_sources_per_incident.toString());
    updateCheckboxValue('includeVendorAdvisories', appData.newsletter_config.include_vendor_advisories);
    updateElementText('lastSent', formatDate(appData.newsletter_config.last_sent));
    updateElementText('nextScheduled', formatDate(appData.newsletter_config.next_scheduled));
    
    // Setup event handlers
    const saveConfigBtn = document.getElementById('saveConfigBtn');
    const previewBtn = document.getElementById('previewBtn');
    
    if (saveConfigBtn) {
        saveConfigBtn.addEventListener('click', (e) => {
            e.preventDefault();
            saveNewsletterConfig();
        });
    }
    
    if (previewBtn) {
        previewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNewsletterPreview();
        });
    }
}

function updateSelectValue(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.value = value;
    }
}

function updateInputValue(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.value = value;
    }
}

function updateCheckboxValue(elementId, checked) {
    const element = document.getElementById(elementId);
    if (element) {
        element.checked = checked;
    }
}

function saveNewsletterConfig() {
    console.log('Saving newsletter configuration...');
    
    const frequency = document.getElementById('frequency');
    const sendDay = document.getElementById('sendDay');
    const sendTime = document.getElementById('sendTime');
    const template = document.getElementById('template');
    const autoSend = document.getElementById('autoSend');
    const includeArticleLinks = document.getElementById('includeArticleLinks');
    const maxSources = document.getElementById('maxSources');
    const includeVendorAdvisories = document.getElementById('includeVendorAdvisories');
    
    appData.newsletter_config = {
        frequency: frequency ? frequency.value : appData.newsletter_config.frequency,
        send_day: sendDay ? sendDay.value : appData.newsletter_config.send_day,
        send_time: sendTime ? sendTime.value : appData.newsletter_config.send_time,
        template: template ? template.value : appData.newsletter_config.template,
        auto_send: autoSend ? autoSend.checked : appData.newsletter_config.auto_send,
        include_article_links: includeArticleLinks ? includeArticleLinks.checked : appData.newsletter_config.include_article_links,
        max_sources_per_incident: maxSources ? parseInt(maxSources.value) : appData.newsletter_config.max_sources_per_incident,
        include_vendor_advisories: includeVendorAdvisories ? includeVendorAdvisories.checked : appData.newsletter_config.include_vendor_advisories,
        last_sent: appData.newsletter_config.last_sent,
        next_scheduled: appData.newsletter_config.next_scheduled
    };
    
    showNotification('Configuration saved successfully!', 'success');
}

function showNewsletterPreview() {
    console.log('Showing newsletter preview...');
    
    const preview = document.getElementById('newsletterPreview');
    if (!preview) {
        console.error('Newsletter preview element not found');
        return;
    }
    
    const criticalIncidents = appData.recent_incidents.filter(i => i.severity === 'Critical').slice(0, 3);
    const highIncidents = appData.recent_incidents.filter(i => i.severity === 'High').slice(0, 2);
    const includeLinks = appData.newsletter_config.include_article_links;
    const maxSources = appData.newsletter_config.max_sources_per_incident;
    
    preview.innerHTML = `
        <div class="newsletter-header">
            <h1 class="newsletter-title">🛡️ CyberWatch Weekly Threat Intelligence</h1>
            <p class="newsletter-date">Week of ${formatDate(new Date().toISOString().split('T')[0])}</p>
        </div>
        
        <div class="newsletter-section">
            <h3>🚨 Critical Incidents This Week</h3>
            ${criticalIncidents.map(incident => `
                <div class="newsletter-incident critical">
                    <h4>${incident.company}</h4>
                    <p>${incident.description}</p>
                    <div class="newsletter-meta">
                        <span>Type: ${incident.incident_type}</span>
                        <span>Affected: ${incident.users_affected}</span>
                        <span>Date: ${formatDate(incident.date)}</span>
                    </div>
                    ${includeLinks ? renderNewsletterSources(incident, maxSources) : ''}
                </div>
            `).join('')}
        </div>
        
        <div class="newsletter-section">
            <h3>⚠️ High Priority Incidents</h3>
            ${highIncidents.map(incident => `
                <div class="newsletter-incident">
                    <h4>${incident.company}</h4>
                    <p>${incident.description}</p>
                    <div class="newsletter-meta">
                        <span>Type: ${incident.incident_type}</span>
                        <span>Affected: ${incident.users_affected}</span>
                    </div>
                    ${includeLinks ? renderNewsletterSources(incident, maxSources) : ''}
                </div>
            `).join('')}
        </div>
        
        <div class="newsletter-section">
            <h3>📊 Weekly Summary</h3>
            <p>Total incidents tracked: ${appData.analytics.total_incidents_tracked}</p>
            <p>Total article sources: ${appData.analytics.total_article_sources}</p>
            <p>Verified sources: ${appData.analytics.verified_sources}</p>
            <p>Critical incidents this month: ${appData.analytics.critical_incidents}</p>
            <p>Most affected industries: ${appData.analytics.industries_affected.slice(0, 3).join(', ')}</p>
        </div>
    `;
    
    showModal('previewModal');
}

function renderNewsletterSources(incident, maxSources) {
    let sourcesHTML = '<div class="newsletter-sources">';
    
    // Primary source
    if (incident.primary_source_url) {
        const primaryPublication = incident.source_publications && incident.source_publications.length > 0 
            ? incident.source_publications[0] 
            : 'Read More';
        
        sourcesHTML += `
            <a href="${incident.primary_source_url}" target="_blank" class="newsletter-source-link">
                📖 ${primaryPublication} ↗
            </a>
        `;
    }
    
    // Additional sources (up to maxSources - 1)
    if (incident.additional_sources && maxSources > 1) {
        const additionalToShow = incident.additional_sources.slice(0, maxSources - 1);
        additionalToShow.forEach(source => {
            sourcesHTML += `
                <a href="${source.url}" target="_blank" class="newsletter-source-link">
                    📖 ${source.publication} ↗
                </a>
            `;
        });
    }
    
    // Vendor advisories if enabled
    if (appData.newsletter_config.include_vendor_advisories && incident.vendor_advisories) {
        incident.vendor_advisories.forEach(advisory => {
            sourcesHTML += `
                <a href="${advisory.url}" target="_blank" class="newsletter-source-link vendor-advisory">
                    🏢 Vendor Advisory ↗
                </a>
            `;
        });
    }
    
    sourcesHTML += '</div>';
    return sourcesHTML;
}

// Analytics
function renderAnalytics() {
    console.log('Rendering analytics charts...');
    
    try {
        // Monthly trend chart
        const trendCanvas = document.getElementById('trendChart');
        if (trendCanvas) {
            const trendCtx = trendCanvas.getContext('2d');
            new Chart(trendCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [{
                        label: 'Incidents',
                        data: appData.analytics.monthly_trend,
                        backgroundColor: '#1FB8CD',
                        borderColor: '#1FB8CD',
                        fill: false,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: '#f5f5f5' }
                        }
                    },
                    scales: {
                        x: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(245,245,245,0.1)' } },
                        y: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(245,245,245,0.1)' } }
                    }
                }
            });
        }
        
        // Threat types chart
        const threatCanvas = document.getElementById('threatChart');
        if (threatCanvas) {
            const threatCtx = threatCanvas.getContext('2d');
            new Chart(threatCtx, {
                type: 'doughnut',
                data: {
                    labels: appData.analytics.top_threat_types,
                    datasets: [{
                        data: [30, 25, 20, 15, 10],
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: '#f5f5f5' }
                        }
                    }
                }
            });
        }
        
        // Industries chart
        const industryCanvas = document.getElementById('industryChart');
        if (industryCanvas) {
            const industryCtx = industryCanvas.getContext('2d');
            new Chart(industryCtx, {
                type: 'bar',
                data: {
                    labels: appData.analytics.industries_affected,
                    datasets: [{
                        label: 'Incidents',
                        data: [45, 38, 32, 28, 22, 18],
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: '#f5f5f5' }
                        }
                    },
                    scales: {
                        x: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(245,245,245,0.1)' } },
                        y: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(245,245,245,0.1)' } }
                    }
                }
            });
        }
        
        // Severity chart
        const severityCanvas = document.getElementById('severityChart');
        if (severityCanvas) {
            const severityCtx = severityCanvas.getContext('2d');
            new Chart(severityCtx, {
                type: 'pie',
                data: {
                    labels: ['Critical', 'High', 'Medium'],
                    datasets: [{
                        data: [appData.analytics.critical_incidents, appData.analytics.high_severity, 12],
                        backgroundColor: ['#DB4545', '#D2BA4C', '#5D878F']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: '#f5f5f5' }
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error rendering analytics charts:', error);
    }
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: var(--color-cyber-surface-dark);
        border: 1px solid var(--color-border);
        border-radius: 8px;
        color: var(--color-gray-200);
        z-index: 10000;
        max-width: 400px;
        box-shadow: var(--shadow-lg);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Make functions globally available
window.openPrimarySource = openPrimarySource;
window.shareArticle = shareArticle;