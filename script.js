/* ==========================================================================
   AKTU MCA Hub - Core JavaScript Logic & Dataset
   ========================================================================== */

// --- DATASETS ---
const AKTU_MCA_DATA = {
    subjects: [
        // Semester 1
        { id: 'kca101', sem: 1, code: 'KCA101', name: 'Problem Solving Using C', icon: 'fa-code', units: [
            { num: 1, name: 'Introduction to Algorithms & C Basics', topics: ['Flowcharts', 'Data Types', 'Variables', 'Operators', 'Input/Output'] },
            { num: 2, name: 'Control Structures & Decision Making', topics: ['If-Else', 'Switch Case', 'Loops (For, While, Do-While)', 'Break & Continue'] },
            { num: 3, name: 'Arrays & Functions', topics: ['1D & 2D Arrays', 'Function Declaration', 'Call by Value/Reference', 'Recursion'] },
            { num: 4, name: 'Pointers & Dynamic Memory', topics: ['Pointer Arithmetic', 'Pointers to Functions', 'malloc, calloc, realloc, free'] },
            { num: 5, name: 'Structures, Unions & File Handling', topics: ['Structures & Unions', 'File Operations (fopen, fclose)', 'Text vs Binary Files'] }
        ]},
        { id: 'kca102', sem: 1, code: 'KCA102', name: 'Discrete Mathematics', icon: 'fa-calculator', units: [
            { num: 1, name: 'Set Theory & Relations', topics: ['Sets, Subsets', 'Venn Diagrams', 'Equivalence Relations', 'Partitions'] },
            { num: 2, name: 'Mathematical Logic & Proofs', topics: ['Propositions', 'Truth Tables', 'Tautologies', 'Direct & Indirect Proofs'] },
            { num: 3, name: 'Algebraic Structures', topics: ['Groups', 'Subgroups', 'Semigroups', 'Monoids', 'Rings'] },
            { num: 4, name: 'Graph Theory', topics: ['Graphs & Digraphs', 'Paths & Circuits', 'Eulerian & Hamiltonian Graphs', 'Trees'] },
            { num: 5, name: 'Combinatorics & Recurrence', topics: ['Permutations & Combinations', 'Pigeonhole Principle', 'Recurrence Relations'] }
        ]},
        { id: 'kca103', sem: 1, code: 'KCA103', name: 'Computer Organization & Architecture', icon: 'fa-microchip', units: [
            { num: 1, name: 'Digital Logic & Data Representation', topics: ['Logic Gates', 'Boolean Algebra', 'Number Systems', 'Binary Arithmetic'] },
            { num: 2, name: 'Register Transfer & Microoperations', topics: ['Bus Architecture', 'Arithmetic Microoperations', 'Logic Microoperations'] },
            { num: 3, name: 'Basic Computer Organization', topics: ['Instruction Codes', 'Computer Registers', 'Instruction Cycle', 'Interrupts'] },
            { num: 4, name: 'Central Processing Unit (CPU)', topics: ['General Register Organization', 'Stack Organization', 'Instruction Formats', 'RISC vs CISC'] },
            { num: 5, name: 'Memory & I/O Organization', topics: ['Cache Memory', 'Virtual Memory', 'DMA (Direct Memory Access)', 'I/O Interfaces'] }
        ]},
        { id: 'kca104', sem: 1, code: 'KCA104', name: 'Information Systems & Management', icon: 'fa-chart-pie', units: [
            { num: 1, name: 'Introduction to Information Systems', topics: ['MIS Concept', 'System Development Life Cycle', 'Role of IT in Business'] },
            { num: 2, name: 'Decision Support Systems (DSS)', topics: ['Group DSS', 'Executive Information Systems', 'Data Warehousing Basics'] },
            { num: 3, name: 'Enterprise Resource Planning (ERP)', topics: ['ERP Architecture', 'Supply Chain Management', 'CRM Systems'] },
            { num: 4, name: 'Information System Security', topics: ['Threats & Vulnerabilities', 'Firewalls', 'Security Policies'] },
            { num: 5, name: 'Emerging IT Trends', topics: ['Cloud Computing', 'E-Commerce Models', 'Digital Transformation'] }
        ]},
        { id: 'kca105', sem: 1, code: 'KCA105', name: 'Cyber Security', icon: 'fa-shield-halved', units: [
            { num: 1, name: 'Introduction to Cyber Space', topics: ['Cyber Security Basics', 'Types of Cyber Crimes', 'Information Security Principles'] },
            { num: 2, name: 'Cyber Attacks & Malware', topics: ['Viruses, Worms, Trojans', 'Phishing & Social Engineering', 'Ransomware'] },
            { num: 3, name: 'Cryptography Fundamentals', topics: ['Symmetric & Asymmetric Encryption', 'RSA Algorithm', 'Digital Signatures'] },
            { num: 4, name: 'Network & Web Security', topics: ['Firewalls & IDS', 'SSL/TLS Protocols', 'SQL Injection', 'XSS'] },
            { num: 5, name: 'Cyber Laws & IT Act 2000', topics: ['IT Act Provisions', 'Cyber Forensics Basics', 'Intellectual Property Rights'] }
        ]},

        // Semester 2
        { id: 'kca201', sem: 2, code: 'KCA201', name: 'Data Structures Using C', icon: 'fa-sitemap', units: [
            { num: 1, name: 'Linear Data Structures - Arrays & Stacks', topics: ['Array Operations', 'Stack Infix to Postfix', 'Evaluation of Expressions'] },
            { num: 2, name: 'Queues & Linked Lists', topics: ['Circular Queues', 'Singly & Doubly Linked Lists', 'Header Nodes'] },
            { num: 3, name: 'Trees & Binary Search Trees', topics: ['Tree Traversals (Inorder, Preorder, Postorder)', 'BST Operations', 'AVL Trees'] },
            { num: 4, name: 'Graphs', topics: ['Graph Representations', 'BFS & DFS', 'Minimum Spanning Trees (Prims, Kruskal)'] },
            { num: 5, name: 'Sorting & Searching', topics: ['Quick Sort, Merge Sort, Heap Sort', 'Binary Search', 'Hashing & Collision Resolution'] }
        ]},
        { id: 'kca202', sem: 2, code: 'KCA202', name: 'Operating Systems', icon: 'fa-desktop', units: [
            { num: 1, name: 'OS Concepts & System Calls', topics: ['OS Types', 'Process State Models', 'System Calls'] },
            { num: 2, name: 'Process Management & Scheduling', topics: ['CPU Scheduling (FCFS, SJF, RR)', 'Process Synchronization', 'Semaphores'] },
            { num: 3, name: 'Deadlocks', topics: ['Deadlock Characterization', 'Banker Algorithm', 'Deadlock Prevention & Detection'] },
            { num: 4, name: 'Memory Management', topics: ['Paging & Segmentation', 'Virtual Memory', 'Page Replacement (FIFO, LRU)'] },
            { num: 5, name: 'File & I/O Systems', topics: ['Directory Structure', 'Disk Scheduling (FCFS, SSTF, SCAN)', 'RAID Levels'] }
        ]},
        { id: 'kca203', sem: 2, code: 'KCA203', name: 'Database Management Systems', icon: 'fa-database', units: [
            { num: 1, name: 'DBMS Architecture & ER Model', topics: ['Three-Schema Architecture', 'ER Diagrams', 'Relational Model Concepts'] },
            { num: 2, name: 'Relational Algebra & SQL', topics: ['Select, Project, Join Operations', 'SQL DDL/DML/DCL', 'Nested Queries & Joins'] },
            { num: 3, name: 'Database Normalization', topics: ['Functional Dependencies', '1NF, 2NF, 3NF, BCNF', 'Multi-valued Dependencies'] },
            { num: 4, name: 'Transaction & Concurrency Control', topics: ['ACID Properties', 'Schedule Serializability', 'Two-Phase Locking (2PL)'] },
            { num: 5, name: 'Indexing & NoSQL Overview', topics: ['B-Trees & B+ Trees', 'Hashing Techniques', 'Introduction to MongoDB/NoSQL'] }
        ]},
        { id: 'kca204', sem: 2, code: 'KCA204', name: 'Object Oriented Programming with Java', icon: 'fa-mug-hot', units: [
            { num: 1, name: 'Java Basics & OOP Principles', topics: ['JDK/JRE/JVM', 'Classes & Objects', 'Encapsulation & Inheritance'] },
            { num: 2, name: 'Polymorphism & Interfaces', topics: ['Method Overloading/Overriding', 'Abstract Classes', 'Java Interfaces'] },
            { num: 3, name: 'Packages & Exception Handling', topics: ['Creating Packages', 'Try-Catch-Finally', 'Custom Exceptions'] },
            { num: 4, name: 'Multithreading & I/O', topics: ['Thread Life Cycle', 'Thread Synchronization', 'Byte & Character Streams'] },
            { num: 5, name: 'Collections Framework', topics: ['ArrayList, LinkedList, HashMap', 'Iterators', 'Generic Classes'] }
        ]},

        // Semester 3
        { id: 'kca301', sem: 3, code: 'KCA301', name: 'Artificial Intelligence', icon: 'fa-brain', units: [
            { num: 1, name: 'Introduction to AI & Agents', topics: ['Turing Test', 'Intelligent Agents', 'Problem Formulation'] },
            { num: 2, name: 'Search Algorithms', topics: ['Uninformed Search (BFS, DFS)', 'Informed Search (A*, Heuristics)', 'Minimax Search'] },
            { num: 3, name: 'Knowledge Representation', topics: ['Propositional & Predicate Logic', 'Resolution', 'Semantic Networks'] },
            { num: 4, name: 'Machine Learning Basics', topics: ['Supervised vs Unsupervised', 'Decision Trees', 'Neural Networks Introduction'] },
            { num: 5, name: 'Natural Language Processing & Robotics', topics: ['NLP Pipeline', 'Expert Systems', 'Robotic Kinematics Basics'] }
        ]},
        { id: 'kca302', sem: 3, code: 'KCA302', name: 'Software Engineering', icon: 'fa-diagram-project', units: [
            { num: 1, name: 'Software Process Models', topics: ['Waterfall, Spiral, Agile/Scrum', 'SRS Document'] },
            { num: 2, name: 'Software Design Concepts', topics: ['Cohesion & Coupling', 'Architectural Styles', 'UML Diagrams'] },
            { num: 3, name: 'Software Metrics & Estimation', topics: ['LOC & Function Points', 'COCOMO Model', 'Project Scheduling'] },
            { num: 4, name: 'Software Testing Strategies', topics: ['White-Box vs Black-Box', 'Unit, Integration, System Testing'] },
            { num: 5, name: 'Maintenance & Quality', topics: ['Software Maintenance Types', 'CMMI Levels', 'ISO 9000 Standards'] }
        ]},

        // Semester 4
        { id: 'kca401', sem: 4, code: 'KCA401', name: 'Cloud Computing', icon: 'fa-cloud', units: [
            { num: 1, name: 'Cloud Fundamentals', topics: ['NIST Model', 'IaaS, PaaS, SaaS', 'Public, Private, Hybrid Clouds'] },
            { num: 2, name: 'Virtualization Technology', topics: ['Hypervisors (Type 1 & 2)', 'Virtual Machines', 'Containerization & Docker'] },
            { num: 3, name: 'Cloud Architecture & Storage', topics: ['Distributed File Systems', 'S3 Storage Concepts', 'Load Balancing'] },
            { num: 4, name: 'Cloud Security', topics: ['IAM Policies', 'Data Encryption in Cloud', 'Identity Federation'] },
            { num: 5, name: 'Cloud Platforms & Services', topics: ['AWS Overview', 'Microsoft Azure', 'Google Cloud Platform'] }
        ]}
    ],

    papers: [
        { year: '2025-26', subjectCode: 'KCA101', subjectName: 'Problem Solving Using C', sem: 1, pdfUrl: '#' },
        { year: '2024-25', subjectCode: 'KCA101', subjectName: 'Problem Solving Using C', sem: 1, pdfUrl: '#' },
        { year: '2023-24', subjectCode: 'KCA101', subjectName: 'Problem Solving Using C', sem: 1, pdfUrl: '#' },
        { year: '2025-26', subjectCode: 'KCA102', subjectName: 'Discrete Mathematics', sem: 1, pdfUrl: '#' },
        { year: '2024-25', subjectCode: 'KCA102', subjectName: 'Discrete Mathematics', sem: 1, pdfUrl: '#' },
        { year: '2025-26', subjectCode: 'KCA201', subjectName: 'Data Structures Using C', sem: 2, pdfUrl: '#' },
        { year: '2024-25', subjectCode: 'KCA201', subjectName: 'Data Structures Using C', sem: 2, pdfUrl: '#' },
        { year: '2025-26', subjectCode: 'KCA203', subjectName: 'Database Management Systems', sem: 2, pdfUrl: '#' },
        { year: '2024-25', subjectCode: 'KCA204', subjectName: 'Object Oriented Programming with Java', sem: 2, pdfUrl: '#' },
        { year: '2025-26', subjectCode: 'KCA301', subjectName: 'Artificial Intelligence', sem: 3, pdfUrl: '#' },
        { year: '2024-25', subjectCode: 'KCA302', subjectName: 'Software Engineering', sem: 3, pdfUrl: '#' },
        { year: '2025-26', subjectCode: 'KCA401', subjectName: 'Cloud Computing', sem: 4, pdfUrl: '#' }
    ],

    importantQuestions: [
        {
            id: 1, sem: 1, subjectCode: 'KCA101', subjectName: 'Problem Solving Using C', unit: 'Unit 3', diff: 'Medium',
            q: 'Differentiate between Call by Value and Call by Reference in C with clear programming code examples.',
            a: 'In Call by Value, a copy of the actual parameter is passed to the function, so modifications do not affect original variables. In Call by Reference, memory addresses are passed using pointers, modifying original variables directly.'
        },
        {
            id: 2, sem: 1, subjectCode: 'KCA101', subjectName: 'Problem Solving Using C', unit: 'Unit 4', diff: 'Hard',
            q: 'Explain dynamic memory allocation functions in C: malloc(), calloc(), realloc(), and free().',
            a: 'malloc() allocates uninitialized memory block; calloc() allocates memory and initializes to zero; realloc() alters size of previously allocated memory; free() releases allocated memory back to heap.'
        },
        {
            id: 3, sem: 1, subjectCode: 'KCA102', subjectName: 'Discrete Mathematics', unit: 'Unit 4', diff: 'Medium',
            q: 'State and prove Eulerian Path theorem for connected graphs.',
            a: 'A connected graph has an Eulerian path if and only if it has exactly 0 or 2 vertices of odd degree.'
        },
        {
            id: 4, sem: 2, subjectCode: 'KCA201', subjectName: 'Data Structures Using C', unit: 'Unit 3', diff: 'Hard',
            q: 'Construct an AVL tree by inserting the following sequence: 10, 20, 30, 40, 50, 25. Show LL and RR rotations.',
            a: 'Follow standard AVL insertion and apply rotations when balance factor exceeds +1 or -1.'
        },
        {
            id: 5, sem: 2, subjectCode: 'KCA203', subjectName: 'Database Management Systems', unit: 'Unit 3', diff: 'Medium',
            q: 'Explain 3NF and BCNF with suitable relational schema examples.',
            a: 'A table is in 3NF if it is in 2NF and has no transitive dependencies. BCNF is a stricter version where for every functional dependency X -> Y, X must be a super key.'
        },
        {
            id: 6, sem: 3, subjectCode: 'KCA301', subjectName: 'Artificial Intelligence', unit: 'Unit 2', diff: 'Hard',
            q: 'Explain A* Search algorithm. Prove that A* is optimal if the heuristic is admissible.',
            a: 'A* uses evaluation function f(n) = g(n) + h(n). Admissibility guarantees h(n) never overestimates actual cost to goal, ensuring optimality.'
        }
    ]
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initHomeSemCards();
    initPaperFilters();
    initSyllabusSelectors();
    initNotesSection();
    initImportantQuestions();
    
    // Check saved theme
    const savedTheme = localStorage.getItem('mca_theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});

// --- NAVIGATION & TABS ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

    const activeTab = document.getElementById(tabId + 'Tab');
    if (activeTab) activeTab.classList.add('active');

    const navLink = document.querySelector(`.nav-link[href="#${tabId}"]`);
    if (navLink) navLink.classList.add('active');

    // Close mobile menu if open
    document.getElementById('navLinks').classList.remove('mobile-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('mobile-active');
}

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeToggle');
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('mca_theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('mca_theme', 'dark');
    }
}

// --- GLOBAL SEARCH ENGINE ---
function handleGlobalSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const dropdown = document.getElementById('searchResults');
    
    if (query.length < 2) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
    }

    const matches = AKTU_MCA_DATA.subjects.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.code.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        dropdown.innerHTML = `<div class="search-item"><span>No matching subjects found</span></div>`;
    } else {
        dropdown.innerHTML = matches.map(s => `
            <div class="search-item" onclick="selectSearchSubject('${s.id}', ${s.sem})">
                <div>
                    <strong>${s.name}</strong>
                    <div class="text-sm text-gray">${s.code} • Semester ${s.sem}</div>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        `).join('');
    }
    dropdown.classList.add('active');
}

function selectSearchSubject(subjectId, sem) {
    document.getElementById('searchResults').classList.remove('active');
    document.getElementById('globalSearchInput').value = '';
    switchTab('syllabus');
    document.getElementById('sylSemSelect').value = sem;
    populateSyllabusSubjects();
    document.getElementById('sylSubSelect').value = subjectId;
    renderSyllabusDetail();
}

// --- HOME TAB CARDS ---
function initHomeSemCards() {
    const container = document.getElementById('homeSemesterCards');
    let html = '';
    for (let sem = 1; sem <= 4; sem++) {
        const subCount = AKTU_MCA_DATA.subjects.filter(s => s.sem === sem).length;
        html += `
            <div class="card">
                <div>
                    <div class="sem-card-header">
                        <span class="sem-badge">Semester ${sem}</span>
                        <i class="fa-solid fa-graduation-cap text-muted"></i>
                    </div>
                    <h3 class="card-title">MCA ${sem}${getOrdinalSuffix(sem)} Semester</h3>
                    <p class="card-desc">${subCount} Core Subjects including Theory & Practical Syllabus Modules.</p>
                </div>
                <a href="#semesters" class="card-link" onclick="switchTab('semesters'); filterSemesterTab(${sem});">
                    View Subjects <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `;
    }
    container.innerHTML = html;
}

function getOrdinalSuffix(i) {
    if (i === 1) return 'st';
    if (i === 2) return 'nd';
    if (i === 3) return 'rd';
    return 'th';
}

// --- SEMESTERS TAB ---
function filterSemesterTab(sem) {
    const pills = document.querySelectorAll('.sem-pill');
    pills.forEach((p, idx) => {
        if (idx + 1 === sem) p.classList.add('active');
        else p.classList.remove('active');
    });

    const display = document.getElementById('semesterSubjectsDisplay');
    const filteredSubjects = AKTU_MCA_DATA.subjects.filter(s => s.sem === sem);

    display.innerHTML = filteredSubjects.map(sub => `
        <div class="card">
            <div>
                <div class="sem-card-header">
                    <span class="code-badge">${sub.code}</span>
                    <i class="fa-solid ${sub.icon} text-muted" style="font-size: 1.2rem;"></i>
                </div>
                <h3 class="card-title">${sub.name}</h3>
                <p class="card-desc">${sub.units.length} Units • Complete Syllabus & Revision Material.</p>
            </div>
            <div class="subject-card-actions">
                <button class="sub-action-btn" onclick="openSubjectSyllabus('${sub.id}', ${sub.sem})"><i class="fa-solid fa-file-lines"></i> Syllabus</button>
                <button class="sub-action-btn" onclick="openSubjectNotes('${sub.id}')"><i class="fa-solid fa-book"></i> Notes</button>
                <button class="sub-action-btn" onclick="openSubjectPapers('${sub.code}')"><i class="fa-solid fa-file-pdf"></i> PYQs</button>
            </div>
        </div>
    `).join('');
}

// --- QUESTION PAPERS TAB ---
function initPaperFilters() {
    const subSelect = document.getElementById('paperSubjectFilter');
    subSelect.innerHTML = '<option value="all">All Subjects</option>' + 
        AKTU_MCA_DATA.subjects.map(s => `<option value="${s.code}">${s.name} (${s.code})</option>`).join('');
    applyPaperFilters();
}

function applyPaperFilters() {
    const sem = document.getElementById('paperSemFilter').value;
    const sub = document.getElementById('paperSubjectFilter').value;
    const year = document.getElementById('paperYearFilter').value;
    const search = document.getElementById('paperSearchInput').value.toLowerCase();

    let filtered = AKTU_MCA_DATA.papers;

    if (sem !== 'all') filtered = filtered.filter(p => p.sem == sem);
    if (sub !== 'all') filtered = filtered.filter(p => p.subjectCode === sub);
    if (year !== 'all') filtered = filtered.filter(p => p.year === year);
    if (search) filtered = filtered.filter(p => p.subjectName.toLowerCase().includes(search) || p.subjectCode.toLowerCase().includes(search));

    const tbody = document.getElementById('papersTableBody');
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 2rem;">No question papers match criteria.</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(p => `
        <tr>
            <td><strong>${p.year}</strong></td>
            <td>${p.subjectName}</td>
            <td>Semester ${p.sem}</td>
            <td><span class="code-badge">${p.subjectCode}</span></td>
            <td>
                <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size:0.8rem;" onclick="openPdfModal('${p.subjectName} (${p.year})', '${p.subjectCode}')">
                    <i class="fa-solid fa-eye"></i> View / Download
                </button>
            </td>
        </tr>
    `).join('');
}

// --- SYLLABUS TAB ---
function initSyllabusSelectors() {
    populateSyllabusSubjects();
}

function populateSyllabusSubjects() {
    const sem = parseInt(document.getElementById('sylSemSelect').value);
    const subSelect = document.getElementById('sylSubSelect');
    const semSubjects = AKTU_MCA_DATA.subjects.filter(s => s.sem === sem);

    subSelect.innerHTML = semSubjects.map(s => `<option value="${s.id}">${s.name} (${s.code})</option>`).join('');
    renderSyllabusDetail();
}

function renderSyllabusDetail() {
    const subId = document.getElementById('sylSubSelect').value;
    const subject = AKTU_MCA_DATA.subjects.find(s => s.id === subId);
    const container = document.getElementById('syllabusDetailContainer');

    if (!subject) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = `
        <div class="card" style="margin-bottom: 1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                <div>
                    <h2>${subject.name}</h2>
                    <p class="text-muted">Subject Code: <span class="code-badge">${subject.code}</span> | Semester ${subject.sem}</p>
                </div>
                <button class="btn btn-primary" onclick="showToast('Downloading official syllabus PDF...')">
                    <i class="fa-solid fa-file-arrow-down"></i> Download Syllabus PDF
                </button>
            </div>
        </div>

        <div class="grid-1">
            ${subject.units.map(unit => `
                <div class="topic-accordion open">
                    <div class="topic-header" onclick="this.parentElement.classList.toggle('open')">
                        <span>Unit ${unit.num}:${unit.name}</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="topic-body">
                        <ul style="padding-left: 1.25rem;">
                            ${unit.topics.map(t => `<li style="margin-bottom:0.4rem;">${t}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// --- NOTES TAB ---
function initNotesSection() {
    const list = document.getElementById('notesSubjectList');
    list.innerHTML = AKTU_MCA_DATA.subjects.map((s, idx) => `
        <div class="notes-sub-item ${idx === 0 ? 'active' : ''}" onclick="selectNotesSubject('${s.id}', this)">
            ${s.name}
        </div>
    `).join('');

    selectNotesSubject(AKTU_MCA_DATA.subjects[0].id, list.children[0]);
}

function selectNotesSubject(subId, element) {
    if (element) {
        document.querySelectorAll('.notes-sub-item').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }

    const subject = AKTU_MCA_DATA.subjects.find(s => s.id === subId);
    const main = document.getElementById('notesMainContent');

    main.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
            <div>
                <h2>${subject.name} Notes</h2>
                <p class="text-muted">Code: ${subject.code} | Unit-wise quick notes and concepts.</p>
            </div>
            <button class="btn btn-secondary" onclick="showToast('Downloading full notes PDF...')">
                <i class="fa-solid fa-download"></i> Download Notes
            </button>
        </div>

        ${subject.units.map(u => `
            <div class="card" style="margin-bottom: 1rem;">
                <h3 style="font-size:1.1rem; margin-bottom:0.5rem;"><i class="fa-solid fa-book-bookmark text-primary"></i> Unit ${u.num}:${u.name}</h3>
                <p class="text-muted" style="font-size:0.875rem; margin-bottom:0.75rem;">Key topics covered in this module:</p>
                <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
                    ${u.topics.map(t => `<span class="tag tag-unit">${t}</span>`).join('')}
                </div>
            </div>
        `).join('')}
    `;
}

// --- IMPORTANT QUESTIONS TAB ---
function initImportantQuestions() {
    const subSelect = document.getElementById('impSubjectFilter');
    subSelect.innerHTML = '<option value="all">All Subjects</option>' + 
        AKTU_MCA_DATA.subjects.map(s => `<option value="${s.code}">${s.name}</option>`).join('');
    applyImportantFilters();
}

function applyImportantFilters() {
    const sem = document.getElementById('impSemFilter').value;
    const sub = document.getElementById('impSubjectFilter').value;
    const diff = document.getElementById('impDiffFilter').value;
    const search = document.getElementById('impSearchInput').value.toLowerCase();

    let filtered = AKTU_MCA_DATA.importantQuestions;

    if (sem !== 'all') filtered = filtered.filter(q => q.sem == sem);
    if (sub !== 'all') filtered = filtered.filter(q => q.subjectCode === sub);
    if (diff !== 'all') filtered = filtered.filter(q => q.diff === diff);
    if (search) filtered = filtered.filter(q => q.q.toLowerCase().includes(search) || q.a.toLowerCase().includes(search));

    const container = document.getElementById('importantQuestionsList');

    if (filtered.length === 0) {
        container.innerHTML = `<div class="card" style="text-align:center;">No questions found matching criteria.</div>`;
        return;
    }

    container.innerHTML = filtered.map(q => `
        <div class="imp-card">
            <div class="imp-header">
                <div class="imp-tags">
                    <span class="tag tag-unit">${q.subjectCode}</span>
                    <span class="tag tag-unit">${q.unit}</span>
                    <span class="tag ${q.diff === 'Easy' ? 'tag-easy' : q.diff === 'Medium' ? 'tag-med' : 'tag-hard'}">${q.diff}</span>
                </div>
                <span class="text-sm text-muted">Semester ${q.sem}</span>
            </div>
            <div class="imp-q-text">Q. ${q.q}</div>
            <button class="answer-toggle-btn" onclick="toggleAnswer(${q.id})">
                <i class="fa-solid fa-chevron-down"></i> Show Solution / Answer
            </button>
            <div id="ans-${q.id}" class="answer-box">
                <strong>Model Answer / Key Points:</strong>
                <p style="margin-top:0.4rem;">${q.a}</p>
            </div>
        </div>
    `).join('');
}

function toggleAnswer(id) {
    const ansBox = document.getElementById(`ans-${id}`);
    if (ansBox.style.display === 'block') {
        ansBox.style.display = 'none';
    } else {
        ansBox.style.display = 'block';
    }
}

// --- MODAL & TOAST HELPERS ---
function openPdfModal(title, code) {
    document.getElementById('pdfModalTitle').innerText = title;
    document.getElementById('pdfModalSubtitle').innerText = `Subject Code: ${code} | AKTU End-Sem Exam`;
    document.getElementById('pdfSimTitle').innerText = `${title}.pdf`;
    document.getElementById('pdfModal').classList.add('active');
}

function closePdfModal() {
    document.getElementById('pdfModal').classList.remove('active');
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').innerText = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Quick Navigation Cross-Tab Links
function openSubjectSyllabus(id, sem) {
    switchTab('syllabus');
    document.getElementById('sylSemSelect').value = sem;
    populateSyllabusSubjects();
    document.getElementById('sylSubSelect').value = id;
    renderSyllabusDetail();
}

function openSubjectNotes(id) {
    switchTab('notes');
    const items = document.querySelectorAll('.notes-sub-item');
    const index = AKTU_MCA_DATA.subjects.findIndex(s => s.id === id);
    if (index !== -1 && items[index]) {
        selectNotesSubject(id, items[index]);
    }
}

function openSubjectPapers(code) {
    switchTab('papers');
    document.getElementById('paperSubjectFilter').value = code;
    applyPaperFilters();
}
