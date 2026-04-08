// ============================================
// SHARED DATA — AttendRFID System
// Simulates AWS Cloud data in the browser
// ============================================

const SUBJECTS = {
  'PHY101': 'Physics',
  'MAT201': 'Mathematics',
  'CHE101': 'Chemistry',
  'CS301': 'Computer Science',
  'ENG401': 'English',
};

const ALL_STUDENTS = [
  { id:'STU001', name:'Aarav Mehta',      rollNo:'2024-CS-001', rfid:'RF-7A2C4E', sem:4, branch:'CSE', semesterPct:87, classesAttended:42, totalClasses:48, todayStatus:'Present', entryTime:'08:12', subjects:{PHY101:87,MAT201:91,CHE101:80,CS301:94,ENG401:78} },
  { id:'STU002', name:'Priya Sharma',     rollNo:'2024-CS-002', rfid:'RF-3B8F1A', sem:4, branch:'CSE', semesterPct:72, classesAttended:35, totalClasses:48, todayStatus:'Present', entryTime:'08:05', subjects:{PHY101:72,MAT201:68,CHE101:74,CS301:79,ENG401:70} },
  { id:'STU003', name:'Rohan Verma',      rollNo:'2024-CS-003', rfid:'RF-9D5C2B', sem:4, branch:'CSE', semesterPct:95, classesAttended:46, totalClasses:48, todayStatus:'Present', entryTime:'07:58', subjects:{PHY101:95,MAT201:98,CHE101:92,CS301:97,ENG401:90} },
  { id:'STU004', name:'Sneha Patel',      rollNo:'2024-CS-004', rfid:'RF-1E4A7F', sem:4, branch:'CSE', semesterPct:58, classesAttended:28, totalClasses:48, todayStatus:'Absent', entryTime:'—',    subjects:{PHY101:58,MAT201:55,CHE101:62,CS301:60,ENG401:54} },
  { id:'STU005', name:'Karan Singh',      rollNo:'2024-CS-005', rfid:'RF-6C0B3D', sem:4, branch:'CSE', semesterPct:79, classesAttended:38, totalClasses:48, todayStatus:'Present', entryTime:'08:18', subjects:{PHY101:79,MAT201:82,CHE101:76,CS301:83,ENG401:77} },
  { id:'STU006', name:'Divya Nair',       rollNo:'2024-CS-006', rfid:'RF-4A9E8C', sem:4, branch:'CSE', semesterPct:63, classesAttended:30, totalClasses:48, todayStatus:'Absent', entryTime:'—',    subjects:{PHY101:63,MAT201:60,CHE101:65,CS301:67,ENG401:58} },
  { id:'STU007', name:'Amit Gupta',       rollNo:'2024-CS-007', rfid:'RF-2F7D5A', sem:4, branch:'CSE', semesterPct:91, classesAttended:44, totalClasses:48, todayStatus:'Present', entryTime:'08:02', subjects:{PHY101:91,MAT201:89,CHE101:93,CS301:95,ENG401:86} },
  { id:'STU008', name:'Isha Rao',         rollNo:'2024-CS-008', rfid:'RF-8B3C6E', sem:4, branch:'CSE', semesterPct:76, classesAttended:37, totalClasses:48, todayStatus:'Present', entryTime:'08:25', subjects:{PHY101:76,MAT201:78,CHE101:74,CS301:80,ENG401:72} },
  { id:'STU009', name:'Nikhil Reddy',     rollNo:'2024-CS-009', rfid:'RF-5D1F4B', sem:4, branch:'CSE', semesterPct:68, classesAttended:33, totalClasses:48, todayStatus:'Absent', entryTime:'—',    subjects:{PHY101:68,MAT201:65,CHE101:70,CS301:72,ENG401:64} },
  { id:'STU010', name:'Ananya Joshi',     rollNo:'2024-CS-010', rfid:'RF-0E6A2C', sem:4, branch:'CSE', semesterPct:83, classesAttended:40, totalClasses:48, todayStatus:'Present', entryTime:'08:09', subjects:{PHY101:83,MAT201:86,CHE101:81,CS301:88,ENG401:79} },
  { id:'STU011', name:'Vikram Bose',      rollNo:'2024-CS-011', rfid:'RF-7C4B1E', sem:4, branch:'CSE', semesterPct:71, classesAttended:34, totalClasses:48, todayStatus:'Present', entryTime:'08:30', subjects:{PHY101:71,MAT201:73,CHE101:69,CS301:75,ENG401:68} },
  { id:'STU012', name:'Pooja Mishra',     rollNo:'2024-CS-012', rfid:'RF-3A8D5F', sem:4, branch:'CSE', semesterPct:88, classesAttended:42, totalClasses:48, todayStatus:'Present', entryTime:'08:07', subjects:{PHY101:88,MAT201:90,CHE101:86,CS301:92,ENG401:84} },
  { id:'STU013', name:'Ravi Tiwari',      rollNo:'2024-CS-013', rfid:'RF-9B2E7C', sem:4, branch:'CSE', semesterPct:55, classesAttended:27, totalClasses:48, todayStatus:'Absent', entryTime:'—',    subjects:{PHY101:55,MAT201:52,CHE101:58,CS301:57,ENG401:50} },
  { id:'STU014', name:'Sanya Khanna',     rollNo:'2024-CS-014', rfid:'RF-1F5C4A', sem:4, branch:'CSE', semesterPct:92, classesAttended:44, totalClasses:48, todayStatus:'Present', entryTime:'08:01', subjects:{PHY101:92,MAT201:95,CHE101:90,CS301:96,ENG401:88} },
  { id:'STU015', name:'Manish Dubey',     rollNo:'2024-CS-015', rfid:'RF-6A0D9B', sem:4, branch:'CSE', semesterPct:77, classesAttended:37, totalClasses:48, todayStatus:'Present', entryTime:'08:22', subjects:{PHY101:77,MAT201:79,CHE101:75,CS301:81,ENG401:74} },
];

const TEACHER_LIST = [
  { id:'TCH-2024-001', name:'Dr. Anil Sharma',    subject:'Physics',          subjectCode:'PHY101', department:'Science',  status:'Active', joinDate:'2018-07-15', email:'anil.sharma@college.edu', phone:'9876543210' },
  { id:'TCH-2024-002', name:'Prof. Meena Gupta',  subject:'Mathematics',      subjectCode:'MAT201', department:'Science',  status:'Active', joinDate:'2015-06-01', email:'meena.gupta@college.edu', phone:'9876543211' },
  { id:'TCH-2024-003', name:'Dr. Raj Verma',      subject:'Chemistry',        subjectCode:'CHE101', department:'Science',  status:'Active', joinDate:'2020-08-10', email:'raj.verma@college.edu', phone:'9876543212' },
  { id:'TCH-2024-004', name:'Prof. Anu Singh',    subject:'Computer Science', subjectCode:'CS301',  department:'IT',      status:'Active', joinDate:'2019-07-22', email:'anu.singh@college.edu', phone:'9876543213' },
  { id:'TCH-2024-005', name:'Dr. Priti Kapoor',   subject:'English',          subjectCode:'ENG401', department:'Arts',    status:'Inactive',joinDate:'2021-01-05', email:'priti.kapoor@college.edu', phone:'9876543214' },
];

const SYSTEM_CONFIG = {
  periodDuration: 60,
  periodsPerDay: 6,
  workingDays: ['Mon','Tue','Wed','Thu','Fri'],
  semesterStart: '2025-01-06',
  semesterEnd: '2025-05-30',
  minAttendance: 75,
};

const SUGGESTIONS = [];

// ========== HELPER FUNCTIONS ==========

function getStudentsForSubject(subjectCode) {
  return ALL_STUDENTS.map(s => ({
    ...s,
    semesterPct: s.subjects[subjectCode] || s.semesterPct,
    classesAttended: Math.round((s.subjects[subjectCode] || s.semesterPct) * s.totalClasses / 100),
  }));
}

function getStudentById(id) {
  return ALL_STUDENTS.find(s => s.id === id || s.rollNo === id) || null;
}

function getDailyAttendanceForStudent(studentId, month) {
  const student = getStudentById(studentId);
  if (!student) return [];
  const days = [];
  const pct = student.semesterPct / 100;
  const d = new Date(2025, month - 1, 1);
  while (d.getMonth() === month - 1) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      const seed = (d.getDate() + student.id.charCodeAt(student.id.length - 1)) % 10;
      days.push({ date: new Date(d), status: seed < pct * 10 ? 'Present' : 'Absent' });
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function getMonthlyAttendanceSummary(studentId, month) {
  const days = getDailyAttendanceForStudent(studentId, month);
  const present = days.filter(d => d.status === 'Present').length;
  return { total: days.length, present, absent: days.length - present, pct: days.length ? Math.round(present / days.length * 100) : 0 };
}

// Export for inline use
window.getStudentsForSubject = getStudentsForSubject;
window.getStudentById = getStudentById;
window.getDailyAttendanceForStudent = getDailyAttendanceForStudent;
window.getMonthlyAttendanceSummary = getMonthlyAttendanceSummary;
window.ALL_STUDENTS = ALL_STUDENTS;
window.TEACHER_LIST = TEACHER_LIST;
window.SYSTEM_CONFIG = SYSTEM_CONFIG;
window.SUBJECTS = SUBJECTS;
window.SUGGESTIONS = SUGGESTIONS;
