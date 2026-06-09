/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CoverageItem {
  id: string;
  pdfSection: string;
  topic: string;
  pageNumber: number;
  coverageStatus: 'Fully Covered' | 'Partially Covered' | 'Not Covered';
  relatedQuestions: string[];
  relatedSigns: string[];
  relatedProTips: number[];
  missingNotes?: string;
  isHighPriorityFlag?: boolean;
}

export const HANDBOOK_COVERAGE_MATRIX: CoverageItem[] = [
  {
    id: 'cov-1-1',
    pdfSection: 'Section 1: The California Driver’s License',
    topic: 'Introduction and Knowledge / Behind-the-Wheel Drive Tests',
    pageNumber: 1,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q76', 'q77', 'q79'],
    relatedSigns: [],
    relatedProTips: [18]
  },
  {
    id: 'cov-1-2',
    pdfSection: 'Section 1: The California Driver’s License',
    topic: 'Class C Noncommercial Driver',
    pageNumber: 1,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [19],
    missingNotes: 'This topic is introduced in the handbook (page 1) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-1-3',
    pdfSection: 'Section 1: The California Driver’s License',
    topic: 'REAL ID Card Designations',
    pageNumber: 1,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [21],
    missingNotes: 'This topic is introduced in the handbook (page 1) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-2-1',
    pdfSection: 'Section 2: Getting a Driver’s License',
    topic: 'Instruction Permit Application and Requirements',
    pageNumber: 2,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q75', 'q78'],
    relatedSigns: [],
    relatedProTips: [22, 23]
  },
  {
    id: 'cov-2-2',
    pdfSection: 'Section 2: Getting a Driver’s License',
    topic: 'Minor',
    pageNumber: 2,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q3', 'q71'],
    relatedSigns: [],
    relatedProTips: [24, 25]
  },
  {
    id: 'cov-2-3',
    pdfSection: 'Section 2: Getting a Driver’s License',
    topic: 'Minor',
    pageNumber: 2,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q2', 'q72'],
    relatedSigns: [],
    relatedProTips: [26, 27]
  },
  {
    id: 'cov-2-4',
    pdfSection: 'Section 2: Getting a Driver’s License',
    topic: 'Provisional License Exceptions (Medical, School, Work, Family)',
    pageNumber: 2,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q31', 'q32'],
    relatedSigns: [],
    relatedProTips: [28]
  },
  {
    id: 'cov-3-1',
    pdfSection: 'Section 3: An Introduction to Driving',
    topic: 'Vision, Hearing, and Health Medical Conditions',
    pageNumber: 3,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [86, 87],
    missingNotes: 'This topic is introduced in the handbook (page 3) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-3-2',
    pdfSection: 'Section 3: An Introduction to Driving',
    topic: 'Wearing Headset or Earplugs in Both Ears',
    pageNumber: 3,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q123'],
    relatedSigns: [],
    relatedProTips: [88]
  },
  {
    id: 'cov-3-3',
    pdfSection: 'Section 3: An Introduction to Driving',
    topic: 'Hand Signaling and Vehicle Signaling Times/Limits',
    pageNumber: 3,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q33', 'q34', 'q35', 'q36', 'q37', 'q126', 'q142', 'q143', 'q144'],
    relatedSigns: [],
    relatedProTips: [13, 29]
  },
  {
    id: 'cov-3-4',
    pdfSection: 'Section 3: An Introduction to Driving',
    topic: 'Headlights: Demands, Rain/Wipers, Sunset/Sunrise, and High Beams',
    pageNumber: 4,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q27', 'q38', 'q39', 'q40', 'q111', 'q112', 'q113', 'q114'],
    relatedSigns: [],
    relatedProTips: [9, 46, 98]
  },
  {
    id: 'cov-3-5',
    pdfSection: 'Section 3: An Introduction to Driving',
    topic: 'Using Emergency Hazard Flashers & Vehicle Trouble Rules',
    pageNumber: 5,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q138'],
    relatedSigns: [],
    relatedProTips: [89]
  },
  {
    id: 'cov-4-1',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Lane Markings: Single and Double Solid Yellow Lines',
    pageNumber: 6,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q101', 'q102'],
    relatedSigns: [],
    relatedProTips: [10, 30]
  },
  {
    id: 'cov-4-2',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Two Sets of Double Yellow Lines spaced 2+ feet apart (Barrier)',
    pageNumber: 6,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [31],
    missingNotes: 'This topic is introduced in the handbook (page 6) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-4-3',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Broken Yellow Lines and passing rules',
    pageNumber: 6,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q103'],
    relatedSigns: [],
    relatedProTips: [32]
  },
  {
    id: 'cov-4-4',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Single and Double Solid White Lines',
    pageNumber: 6,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q106', 'q110'],
    relatedSigns: [],
    relatedProTips: [33, 34]
  },
  {
    id: 'cov-4-5',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'End of Lane Markings (Large broken lines)',
    pageNumber: 7,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [35],
    missingNotes: 'This topic is introduced in the handbook (page 7) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-4-6',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Yield Lines (Solid white triangles)',
    pageNumber: 7,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q109'],
    relatedSigns: [],
    relatedProTips: [36]
  },
  {
    id: 'cov-4-7',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Numbered Lanes (No. 1, 2, 3...) & Lane Selection Tips',
    pageNumber: 7,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [37],
    missingNotes: 'This topic is introduced in the handbook (page 7) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-4-8',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'HOV Carpool Lanes & Motorcycles rule',
    pageNumber: 8,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [38],
    missingNotes: 'This topic is introduced in the handbook (page 8) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-4-9',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Center Left Turn Lanes (200 feet driving limit)',
    pageNumber: 9,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q12', 'q107', 'q108'],
    relatedSigns: [],
    relatedProTips: [39]
  },
  {
    id: 'cov-4-10',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Turnout Areas or Lanes (5+ vehicle delay rule)',
    pageNumber: 9,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q5', 'q104'],
    relatedSigns: ["slower-traffic-keep-right"],
    relatedProTips: [40]
  },
  {
    id: 'cov-4-11',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Bicycle Lane Types & motor vehicle driving restriction (200 ft)',
    pageNumber: 9,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q11', 'q90', 'q105'],
    relatedSigns: [],
    relatedProTips: [41, 42]
  },
  {
    id: 'cov-4-12',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Bicycle distance (3 feet rule)',
    pageNumber: 10,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q13', 'q81'],
    relatedSigns: [],
    relatedProTips: [43]
  },
  {
    id: 'cov-4-13',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Right Turns and Right Turns on Red Actions',
    pageNumber: 11,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q87'],
    relatedSigns: [],
    relatedProTips: [44]
  },
  {
    id: 'cov-4-14',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Right Turn Against a Red Arrow',
    pageNumber: 11,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q10'],
    relatedSigns: [],
    relatedProTips: [45]
  },
  {
    id: 'cov-4-15',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Left Turns Against Red or from One-Way Streets',
    pageNumber: 12,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: ["no-left-turn"],
    relatedProTips: [47],
    missingNotes: 'This topic is introduced in the handbook (page 12) and taught via interactive road signs visualizer and supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-4-16',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'U-Turns: Legal and Prohibited Locations',
    pageNumber: 13,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q17'],
    relatedSigns: [],
    relatedProTips: [48]
  },
  {
    id: 'cov-4-17',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Parallel Parking rules and metrics (within 18 inches)',
    pageNumber: 18,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [49],
    missingNotes: 'This topic is introduced in the handbook (page 18) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-4-18',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Straight Line Backing (3 vehicle lengths, 3 feet from curb)',
    pageNumber: 19,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [50],
    missingNotes: 'This topic is introduced in the handbook (page 19) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-4-19',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Parking on a Hill (Uphill, Downhill, No Curb)',
    pageNumber: 19,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q6', 'q41', 'q42', 'q139', 'q140', 'q141'],
    relatedSigns: [],
    relatedProTips: [5, 6]
  },
  {
    id: 'cov-4-20',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Colored Curbs regulations (White, Green, Yellow, Red, Blue)',
    pageNumber: 20,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q7', 'q43', 'q44', 'q45', 'q50'],
    relatedSigns: [],
    relatedProTips: [51, 52]
  },
  {
    id: 'cov-4-21',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Illegal Parking locations (hydrant 15ft, crosswalk 20ft)',
    pageNumber: 20,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q19', 'q46', 'q47', 'q48', 'q49', 'q129'],
    relatedSigns: [],
    relatedProTips: [53]
  },
  {
    id: 'cov-4-22',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Law Enforcement Stops (Vehicle controls & Hands visibility)',
    pageNumber: 21,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [54, 55],
    missingNotes: 'This topic is introduced in the handbook (page 21) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-4-23',
    pdfSection: 'Section 4: Navigating the Roads',
    topic: 'Your Rights during a Stop & Recording First Amendment',
    pageNumber: 22,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [56],
    missingNotes: 'This topic is introduced in the handbook (page 22) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-5-1',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Traffic signals: solid red, flashing red, red arrow, yellow signal types',
    pageNumber: 24,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q1'],
    relatedSigns: [],
    relatedProTips: [1, 8, 57]
  },
  {
    id: 'cov-5-2',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Pedestrian Signals (WALK, Raised Hand, Numbers, Sounds)',
    pageNumber: 25,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: ["pedestrian-crossing"],
    relatedProTips: [58],
    missingNotes: 'This topic is introduced in the handbook (page 25) and taught via interactive road signs visualizer and supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-5-3',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Sign Shapes and Meanings (Stop, Yield, School, Railroad)',
    pageNumber: 26,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q85', 'q136'],
    relatedSigns: ["stop", "yield", "stop-ahead", "yield-ahead"],
    relatedProTips: [59, 60]
  },
  {
    id: 'cov-5-4',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Right-of-Way Rules at Intersections and T-Intersections',
    pageNumber: 30,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: ["t-intersection"],
    relatedProTips: [3, 61, 62],
    missingNotes: 'This topic is introduced in the handbook (page 30) and taught via interactive road signs visualizer and supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-5-5',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Roundabouts (Right, Straight, Left turns rules)',
    pageNumber: 31,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [7, 63],
    missingNotes: 'This topic is introduced in the handbook (page 31) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-5-6',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Mountain Roads backup/right-of-way rules',
    pageNumber: 32,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q15', 'q131'],
    relatedSigns: [],
    relatedProTips: [64]
  },
  {
    id: 'cov-5-7',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Sharing the Road: Large Trucks (No Zones/Blind Spots, Braking)',
    pageNumber: 32,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q86', 'q132'],
    relatedSigns: [],
    relatedProTips: [65, 66]
  },
  {
    id: 'cov-5-8',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'School Buses flashing yellow & red signals rules',
    pageNumber: 38,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q8', 'q57', 'q59', 'q83', 'q84'],
    relatedSigns: [],
    relatedProTips: [12]
  },
  {
    id: 'cov-5-9',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Blind Intersections, Alleys, and Railroad Tracks speed zones (15 mph)',
    pageNumber: 39,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q54', 'q55', 'q56', 'q69', 'q137'],
    relatedSigns: [],
    relatedProTips: [15]
  },
  {
    id: 'cov-5-10',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Business or Residential Districts speed limits (25 mph)',
    pageNumber: 40,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [67],
    missingNotes: 'This topic is introduced in the handbook (page 40) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-5-11',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Evading Law Enforcement in county jail or state prison penalties',
    pageNumber: 41,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q89'],
    relatedSigns: [],
    relatedProTips: [98]
  },
  {
    id: 'cov-5-12',
    pdfSection: 'Section 5: Laws and Rules of the Road',
    topic: 'Dumping or abandoning animals on a highway ($1000 fine/6 months)',
    pageNumber: 44,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q80'],
    relatedSigns: [],
    relatedProTips: []
  },
  {
    id: 'cov-6-1',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Scanning 10 seconds ahead',
    pageNumber: 44,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [2, 68],
    missingNotes: 'This topic is introduced in the handbook (page 44) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-6-2',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Tailgating & Three-Second Rule',
    pageNumber: 44,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q14'],
    relatedSigns: [],
    relatedProTips: [4, 69]
  },
  {
    id: 'cov-6-3',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Darkness/Night Headlights rules',
    pageNumber: 46,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [46],
    missingNotes: 'This topic is introduced in the handbook (page 46) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-6-4',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Slippery Road Speeds (Wet, Packed Snow, Ice limits)',
    pageNumber: 48,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q21', 'q22'],
    relatedSigns: ["slippery-when-wet"],
    relatedProTips: [70]
  },
  {
    id: 'cov-6-5',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Hydroplaning definition and recovery',
    pageNumber: 49,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [71],
    missingNotes: 'This topic is introduced in the handbook (page 49) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-6-6',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Seat Belts laws and under 16 infraction safety',
    pageNumber: 51,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q58'],
    relatedSigns: [],
    relatedProTips: [72]
  },
  {
    id: 'cov-6-7',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Child Restraint Systems (under 2 years/40 lbs/3ft4in rules)',
    pageNumber: 51,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q51', 'q52', 'q60'],
    relatedSigns: [],
    relatedProTips: [73]
  },
  {
    id: 'cov-6-8',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Air Bags 10 inch chest clearance spacing',
    pageNumber: 52,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q53'],
    relatedSigns: [],
    relatedProTips: [74]
  },
  {
    id: 'cov-6-9',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Unattended Children (6 yrs or younger) & Pets in heat',
    pageNumber: 52,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q25'],
    relatedSigns: [],
    relatedProTips: [75, 76]
  },
  {
    id: 'cov-6-10',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Basic Speed Law & Freeway Speed Limits (65 mph vs 55 mph undivided/towing)',
    pageNumber: 52,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q82', 'q134', 'q135'],
    relatedSigns: [],
    relatedProTips: [2, 77]
  },
  {
    id: 'cov-6-11',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Driving Off the Pavement Recovery Steps',
    pageNumber: 53,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q29'],
    relatedSigns: [],
    relatedProTips: [78]
  },
  {
    id: 'cov-6-12',
    pdfSection: 'Section 6: Safe Driving',
    topic: 'Carbon Monoxide from gas vehicles',
    pageNumber: 54,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [79],
    missingNotes: 'This topic is introduced in the handbook (page 54) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  },
  {
    id: 'cov-7-1',
    pdfSection: 'Section 7: Alcohol and Drugs',
    topic: 'California Driving under the Influence (DUI) laws & drug parity',
    pageNumber: 55,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q67', 'q99'],
    relatedSigns: [],
    relatedProTips: [80]
  },
  {
    id: 'cov-7-2',
    pdfSection: 'Section 7: Alcohol and Drugs',
    topic: 'Open Container laws for alcohol and cannabis in a vehicle',
    pageNumber: 55,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q62', 'q92', 'q96', 'q97', 'q145'],
    relatedSigns: [],
    relatedProTips: [81]
  },
  {
    id: 'cov-7-3',
    pdfSection: 'Section 7: Alcohol and Drugs',
    topic: 'Blood Alcohol Concentration (BAC) Limits (0.08%, 0.01% under 21, 0.04% CDL)',
    pageNumber: 56,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q23', 'q30', 'q61', 'q66', 'q91', 'q98'],
    relatedSigns: [],
    relatedProTips: [82]
  },
  {
    id: 'cov-7-4',
    pdfSection: 'Section 7: Alcohol and Drugs',
    topic: 'DUI Arrest refusal penalty (1 year suspension)',
    pageNumber: 57,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q64', 'q93', 'q95'],
    relatedSigns: [],
    relatedProTips: [83]
  },
  {
    id: 'cov-7-5',
    pdfSection: 'Section 7: Alcohol and Drugs',
    topic: 'DUI Conviction impact duration (10 years on record, program, SR-22)',
    pageNumber: 57,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q94'],
    relatedSigns: [],
    relatedProTips: [84]
  },
  {
    id: 'cov-8-1',
    pdfSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    topic: 'Mandatory Minimum Liability Coverage ($30k / $60k / $15k)',
    pageNumber: 58,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q9', 'q125'],
    relatedSigns: [],
    relatedProTips: [96]
  },
  {
    id: 'cov-8-2',
    pdfSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    topic: 'Driving Without Insurance collision suspension (up to 4 years)',
    pageNumber: 58,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q70'],
    relatedSigns: [],
    relatedProTips: [85]
  },
  {
    id: 'cov-8-3',
    pdfSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    topic: 'DMV SR-1 collision reporting threshold',
    pageNumber: 59,
    coverageStatus: 'Fully Covered',
    relatedQuestions: ['q63', 'q65', 'q127'],
    relatedSigns: [],
    relatedProTips: [94, 91]
  },
  {
    id: 'cov-9-1',
    pdfSection: 'Section 9: Seniors and Driving',
    topic: 'Seniors and Driving: Warning Signs and Safety considerations',
    pageNumber: 61,
    coverageStatus: 'Partially Covered',
    relatedQuestions: [],
    relatedSigns: [],
    relatedProTips: [92, 93],
    missingNotes: 'This topic is introduced in the handbook (page 61) and taught via supplementary Pro Tips, but no practice questions test it yet.'
  }
];
