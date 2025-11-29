const fs = require('fs');
const path = require('path');

const reportDir = path.join(__dirname, '..', 'allure-report');
const stylesFile = path.join(reportDir, 'styles.css');

if (fs.existsSync(stylesFile)) {
    const darkModeCSS = `
    /* Dark Mode Overrides - Refined */
    :root {
        --dark-bg: #121212;
        --dark-surface: #1e1e1e;
        --dark-border: #333333;
        --text-primary: #e0e0e0;
        --text-secondary: #aaaaaa;
        --accent-color: #7c4dff; /* A nice purple accent */
    }

    body, .app {
        background-color: var(--dark-bg) !important;
        color: var(--text-primary) !important;
    }

    /* Sidebar */
    .side-nav {
        background-color: var(--dark-surface) !important;
        border-right: 1px solid var(--dark-border) !important;
    }
    .side-nav__item {
        color: var(--text-secondary) !important;
    }
    .side-nav__item:hover {
        background-color: #2c2c2c !important;
        color: var(--text-primary) !important;
    }
    .side-nav__item_active {
        background-color: var(--accent-color) !important;
        color: #ffffff !important;
        box-shadow: 0 0 10px rgba(124, 77, 255, 0.5);
    }

    /* Panes & Widgets */
    .pane__header, .widget {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    }
    .pane__title, .widget__title {
        color: var(--text-primary) !important;
        font-weight: 600 !important;
    }
    /* Aggressive Widget Text Overrides */
    .widget__body, .widget__body * {
        color: var(--text-primary) !important;
    }
    
    /* Specific Table Overrides */
    .table {
        color: var(--text-primary) !important;
    }
    .table td, .table th, .table tr {
        color: var(--text-primary) !important;
        border-color: var(--dark-border) !important;
    }
    
    /* Environment Widget Specifics - Redundant but safe */
    .environment-widget__key, .environment-widget__value {
        color: var(--text-primary) !important;
    }
    
    /* Text Colors */
    h1, h2, h3, h4, h5, h6, .title, span, div, p, li {
        color: var(--text-primary) !important;
    }
    .text-muted, .step-text, .attachment-row__name {
        color: var(--text-secondary) !important;
    }
    .test-case-title {
        color: var(--text-primary) !important;
    }

    /* Tree/List Items & Hovers */
    .tree__item {
        background-color: var(--dark-surface) !important;
        color: var(--text-primary) !important;
        border-bottom: 1px solid var(--dark-border) !important;
    }
    .tree__item:hover, .step-header:hover, .attachment-row:hover {
        background-color: #383838 !important; /* Darker grey for hover */
        color: #ffffff !important;
        cursor: pointer !important;
    }
    .node__title:hover {
        background-color: #383838 !important;
        color: #ffffff !important;
    }
    
    /* Status Colors (Optional - keeping default usually works but can tweak) */
    .label_status_passed {
        background-color: #2e7d32 !important; /* Darker green */
    }
    .label_status_failed {
        background-color: #c62828 !important; /* Darker red */
    }

    /* Attachments & Traces */
    .attachment-row {
        background-color: #252526 !important;
        border: 1px solid var(--dark-border) !important;
    }
    .status-details__trace {
        background-color: #1e1e1e !important;
        color: #d4d4d4 !important;
        border: 1px solid var(--dark-border) !important;
        font-family: 'Consolas', 'Monaco', monospace !important;
    }

    /* Charts */
    .bar-chart__axis-label {
        fill: var(--text-secondary) !important;
    }
    .splash {
        background-color: var(--dark-bg) !important;
    }
    .execution__content {
        background-color: var(--dark-bg) !important;
    }
    
    /* Links */
    a, .link {
        color: #82b1ff !important;
    }
    `;

    fs.appendFileSync(stylesFile, darkModeCSS);
    console.log('Dark Mode theme applied to Allure Report.');
} else {
    console.error('allure-report/styles.css not found. Make sure to generate the report first.');
}
