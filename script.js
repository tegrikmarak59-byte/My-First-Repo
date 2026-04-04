// ── DATA ──────────────────────────────────────────────────────────────────

const buildings = {
  LH: {
    name: "Lecture Hall Complex",
    type: "Academic",
    floors: 3,
    halls: 8,
    labs: 0,
    capacity: 1200,
    departments: ["Physics", "Chemistry", "Mathematics"],
    faculty: ["Dr. Sharma", "Prof. Das"],
    facilities: "AC, Projectors, PA System"
  },
  LB: {
    name: "Library",
    type: "Resource Center",
    floors: 2,
    halls: 0,
    labs: 1,
    capacity: 400,
    departments: ["All Departments"],
    faculty: ["Ms. Verma (Librarian)"],
    facilities: "Digital Lab, Reading Rooms, Archives"
  },
  AC: {
    name: "Academic Complex",
    type: "Multi-use",
    floors: 4,
    halls: 12,
    labs: 6,
    capacity: 2000,
    departments: ["CSE", "ECE", "Mechanical"],
    faculty: ["Dr. Singh", "Dr. Nair", "Prof. Iyer"],
    facilities: "Seminar Hall, Auditorium, Cafeteria"
  },
  A: {
    name: "A Block",
    type: "Academic",
    floors: 3,
    halls: 6,
    labs: 4,
    capacity: 800,
    departments: ["CSE", "IT"],
    faculty: ["Prof. Mehta", "Dr. Kapoor"],
    facilities: "Computer Labs, Server Room"
  },
  B: {
    name: "B Block",
    type: "Academic",
    floors: 3,
    halls: 6,
    labs: 3,
    capacity: 750,
    departments: ["ECE", "EEE"],
    faculty: ["Dr. Rao", "Prof. Kumar"],
    facilities: "Electronics Lab, PCB Lab"
  },
  C: {
    name: "C Block",
    type: "Academic",
    floors: 2,
    halls: 4,
    labs: 2,
    capacity: 500,
    departments: ["Civil", "Architecture"],
    faculty: ["Dr. Gupta", "Prof. Joshi"],
    facilities: "Drawing Hall, Material Lab"
  },
  D: {
    name: "D Block",
    type: "Research",
    floors: 4,
    halls: 5,
    labs: 8,
    capacity: 600,
    departments: ["Research", "PhD"],
    faculty: ["Dr. Bose", "Dr. Pillai", "Prof. Anand"],
    facilities: "Research Labs, Conference Rooms, HPC Cluster"
  }
};

const faculty = [
  {
    name: "Dr. A. Sharma",
    dept: "Physics",
    room: "LH-201",
    block: "Lecture Hall Complex",
    hours: "10:00 AM – 2:00 PM",
    phone: "+91 98xxx xxxxx",
    email: "sharma@campus.edu",
    subjects: ["Quantum Mechanics", "Thermodynamics"],
    cabin: "Room 201, 2nd Floor"
  },
  {
    name: "Prof. R. Das",
    dept: "Mathematics",
    room: "LH-105",
    block: "Lecture Hall Complex",
    hours: "8:00 AM – 12:00 PM",
    phone: "+91 97xxx xxxxx",
    email: "das@campus.edu",
    subjects: ["Linear Algebra", "Calculus", "Discrete Math"],
    cabin: "Room 105, 1st Floor"
  },
  {
    name: "Dr. S. Singh",
    dept: "CSE",
    room: "AC-310",
    block: "Academic Complex",
    hours: "9:00 AM – 1:00 PM",
    phone: "+91 96xxx xxxxx",
    email: "singh@campus.edu",
    subjects: ["Data Structures", "Algorithms"],
    cabin: "Office 310, 3rd Floor"
  },
  {
    name: "Dr. P. Nair",
    dept: "ECE",
    room: "AC-215",
    block: "Academic Complex",
    hours: "11:00 AM – 3:00 PM",
    phone: "+91 95xxx xxxxx",
    email: "nair@campus.edu",
    subjects: ["VLSI Design", "Signals & Systems"],
    cabin: "Room 215, 2nd Floor"
  },
  {
    name: "Prof. V. Iyer",
    dept: "Mechanical",
    room: "AC-401",
    block: "Academic Complex",
    hours: "9:00 AM – 12:00 PM",
    phone: "+91 94xxx xxxxx",
    email: "iyer@campus.edu",
    subjects: ["Fluid Mechanics", "Heat Transfer"],
    cabin: "Room 401, 4th Floor"
  },
  {
    name: "Prof. K. Mehta",
    dept: "CSE",
    room: "A-201",
    block: "A Block",
    hours: "1:00 PM – 5:00 PM",
    phone: "+91 93xxx xxxxx",
    email: "mehta@campus.edu",
    subjects: ["OS", "Computer Networks"],
    cabin: "Room 201, 2nd Floor"
  },
  {
    name: "Dr. N. Kapoor",
    dept: "IT",
    room: "A-108",
    block: "A Block",
    hours: "10:00 AM – 2:00 PM",
    phone: "+91 92xxx xxxxx",
    email: "kapoor@campus.edu",
    subjects: ["Web Technologies", "Cloud Computing"],
    cabin: "Room 108, 1st Floor"
  },
  {
    name: "Dr. G. Rao",
    dept: "ECE",
    room: "B-301",
    block: "B Block",
    hours: "9:00 AM – 1:00 PM",
    phone: "+91 91xxx xxxxx",
    email: "rao@campus.edu",
    subjects: ["Microprocessors", "Embedded Systems"],
    cabin: "Room 301, 3rd Floor"
  },
  {
    name: "Dr. T. Bose",
    dept: "Research",
    room: "D-402",
    block: "D Block",
    hours: "10:00 AM – 4:00 PM",
    phone: "+91 90xxx xxxxx",
    email: "bose@campus.edu",
    subjects: ["Machine Learning", "AI"],
    cabin: "Research Lab D-402"
  },
  {
    name: "Dr. L. Gupta",
    dept: "Civil",
    room: "C-102",
    block: "C Block",
    hours: "8:00 AM – 12:00 PM",
    phone: "+91 89xxx xxxxx",
    email: "gupta@campus.edu",
    subjects: ["Structural Analysis", "Soil Mechanics"],
    cabin: "Room 102, 1st Floor"
  }
];

// ── RENDER FACULTY SIDEBAR ─────────────────────────────────────────────────

function renderFacultyList() {
  const list = document.getElementById('facultyList');
  list.innerHTML = faculty.map((f, i) => `
    <div class="fac-card" onclick="openFacDetail(${i})">
      <div class="fac-name">${f.name}</div>
      <div class="fac-dept">${f.dept}</div>
      <div class="fac-room">${f.block} · ${f.room}</div>
      <div class="fac-hours">${f.hours}</div>
    </div>
  `).join('');
}

// ── BUILDING POPUP ─────────────────────────────────────────────────────────

let currentHS = null;

function openBuilding(id) {
  const b = buildings[id];
  const popup = document.getElementById('buildingPopup');
  const hs = document.getElementById('hs-' + id);
  const mapWrap = document.getElementById('mapWrap');

  document.getElementById('bp-name').textContent = b.name;
  document.getElementById('bp-body').innerHTML = `
    <div class="bp-tag">${b.type}</div>
    <div class="bp-row">
      <span class="bp-row-label">Floors</span>
      <span class="bp-row-val">${b.floors}</span>
    </div>
    <div class="bp-row">
      <span class="bp-row-label">Lecture Halls</span>
      <span class="bp-row-val">${b.halls}</span>
    </div>
    <div class="bp-row">
      <span class="bp-row-label">Labs</span>
      <span class="bp-row-val">${b.labs}</span>
    </div>
    <div class="bp-row">
      <span class="bp-row-label">Capacity</span>
      <span class="bp-row-val">${b.capacity.toLocaleString()}</span>
    </div>
    <div class="bp-row">
      <span class="bp-row-label">Departments</span>
      <span class="bp-row-val">${b.departments.join(', ')}</span>
    </div>
    <div class="bp-row">
      <span class="bp-row-label">Facilities</span>
      <span class="bp-row-val" style="font-size:0.72rem;">${b.facilities}</span>
    </div>
    <div class="bp-faculty-list">
      <div class="bp-faculty-title">Faculty in this block</div>
      ${b.faculty.map(f => `<div class="bp-fac-item">▸ ${f}</div>`).join('')}
    </div>
  `;

  // Position popup near hotspot, keep within map bounds
  const hsRect  = hs.getBoundingClientRect();
  const mapRect = mapWrap.getBoundingClientRect();
  let left = hsRect.left - mapRect.left + hsRect.width / 2 - 130;
  let top  = hsRect.top  - mapRect.top  + hsRect.height + 12;

  if (left < 8) left = 8;
  if (left + 260 > mapRect.width - 8) left = mapRect.width - 268;
  if (top + 300 > mapRect.height) top = hsRect.top - mapRect.top - 300;

  popup.style.left = left + 'px';
  popup.style.top  = top  + 'px';
  popup.classList.add('open');
  currentHS = id;
}

function closeBuilding() {
  document.getElementById('buildingPopup').classList.remove('open');
  currentHS = null;
}

// ── FACULTY DETAIL ─────────────────────────────────────────────────────────

function openFacDetail(idx) {
  const f = faculty[idx];
  document.getElementById('fdb-name').textContent = f.name;
  document.getElementById('fdb-dept').textContent = f.dept + ' Department';
  document.getElementById('fdb-body').innerHTML = `
    <div class="fdb-field">
      <div class="fdb-field-label">Location</div>
      <div class="fdb-field-val accent">${f.cabin}</div>
      <div class="fdb-field-val" style="font-size:0.75rem;margin-top:2px;color:var(--muted);">${f.block}</div>
    </div>
    <div class="fdb-field">
      <div class="fdb-field-label">Office Hours</div>
      <div class="fdb-field-val accent2">${f.hours}</div>
    </div>
    <div class="fdb-field">
      <div class="fdb-field-label">Contact</div>
      <div class="fdb-field-val">${f.phone}</div>
      <div class="fdb-field-val" style="font-size:0.78rem;color:var(--muted);">${f.email}</div>
    </div>
    <div class="fdb-field">
      <div class="fdb-field-label">Subjects</div>
      <div class="fdb-subjects">
        ${f.subjects.map(s => `<span class="fdb-subject-tag">${s}</span>`).join('')}
      </div>
    </div>
  `;
  document.getElementById('facDetailOverlay').classList.add('open');
}

function closeFacDetail(e) {
  if (e.target === document.getElementById('facDetailOverlay')) {
    closeFacDetailDirect();
  }
}

function closeFacDetailDirect() {
  document.getElementById('facDetailOverlay').classList.remove('open');
}

// ── SEARCH ────────────────────────────────────────────────────────────────

const searchInput   = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.classList.remove('open'); return; }

  const matches = [];

  // Search faculty
  faculty.forEach((f, i) => {
    const hit =
      f.name.toLowerCase().includes(q) ||
      f.dept.toLowerCase().includes(q) ||
      f.subjects.some(s => s.toLowerCase().includes(q));
    if (hit) {
      matches.push({
        type: 'faculty',
        idx: i,
        label: f.name,
        detail: `${f.dept} · ${f.cabin} · ${f.hours}`
      });
    }
  });

  // Search buildings
  Object.entries(buildings).forEach(([id, b]) => {
    const hit =
      b.name.toLowerCase().includes(q) ||
      b.departments.some(d => d.toLowerCase().includes(q));
    if (hit) {
      matches.push({
        type: 'building',
        id,
        label: b.name,
        detail: `${b.type} · ${b.halls} Halls · ${b.labs} Labs`
      });
    }
  });

  if (!matches.length) {
    searchResults.innerHTML = '<div class="sr-item"><div class="sr-detail">No results found</div></div>';
  } else {
    searchResults.innerHTML = matches.slice(0, 6).map(m => `
      <div class="sr-item" onclick="selectResult('${m.type}','${m.type === 'faculty' ? m.idx : m.id}')">
        <div class="sr-name">${m.label}</div>
        <div class="sr-detail">${m.detail}</div>
      </div>
    `).join('');
  }

  searchResults.classList.add('open');
});

function doSearch() {
  searchInput.dispatchEvent(new Event('input'));
}

function selectResult(type, id) {
  searchResults.classList.remove('open');
  searchInput.value = '';
  if (type === 'faculty') openFacDetail(parseInt(id));
  else openBuilding(id);
}

// Close search dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrap') && !e.target.closest('#searchResults')) {
    searchResults.classList.remove('open');
  }
});

// Close building popup when clicking blank map area
document.getElementById('mapWrap').addEventListener('click', (e) => {
  if (!e.target.closest('.hotspot') && !e.target.closest('.building-popup')) {
    closeBuilding();
  }
});

// ── INIT ──────────────────────────────────────────────────────────────────
renderFacultyList();
