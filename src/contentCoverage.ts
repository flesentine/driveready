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
  // SECTION 1
  {
    id: "cov-1-1",
    pdfSection: "Section 1: The California Driver’s License",
    topic: "Introduction and Knowledge / Behind-the-Wheel Drive Tests",
    pageNumber: 1,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q1"],
    relatedSigns: [],
    relatedProTips: [18]
  },
  {
    id: "cov-1-2",
    pdfSection: "Section 1: The California Driver’s License",
    topic: "Class C Noncommercial Driver's License vehicles",
    pageNumber: 1,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q2"],
    relatedSigns: [],
    relatedProTips: [19]
  },
  {
    id: "cov-1-3",
    pdfSection: "Section 1: The California Driver’s License",
    topic: "REAL ID Card Designations",
    pageNumber: 1,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q70"],
    relatedSigns: [],
    relatedProTips: [21]
  },

  // SECTION 2
  {
    id: "cov-2-1",
    pdfSection: "Section 2: Getting a Driver’s License",
    topic: "Instruction Permit Application and Requirements",
    pageNumber: 2,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q75"],
    relatedSigns: [],
    relatedProTips: [22, 23]
  },
  {
    id: "cov-2-2",
    pdfSection: "Section 2: Getting a Driver’s License",
    topic: "Minor's Provisional License Curfew Restrictions",
    pageNumber: 2,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q71", "q4"],
    relatedSigns: [],
    relatedProTips: [24, 25]
  },
  {
    id: "cov-2-3",
    pdfSection: "Section 2: Getting a Driver’s License",
    topic: "Minor's Provisional License Passenger Restrictions",
    pageNumber: 2,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q72", "q3"],
    relatedSigns: [],
    relatedProTips: [26, 27]
  },
  {
    id: "cov-2-4",
    pdfSection: "Section 2: Getting a Driver’s License",
    topic: "Provisional License Exceptions (Medical, School, Work, Family)",
    pageNumber: 2,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q65", "q66"],
    relatedSigns: [],
    relatedProTips: [28]
  },

  // SECTION 3
  {
    id: "cov-3-1",
    pdfSection: "Section 3: An Introduction to Driving",
    topic: "Vision, Hearing, and Health Medical Conditions",
    pageNumber: 3,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q121", "q123"],
    relatedSigns: [],
    relatedProTips: [86, 87]
  },
  {
    id: "cov-3-2",
    pdfSection: "Section 3: An Introduction to Driving",
    topic: "Wearing Headset or Earplugs in Both Ears",
    pageNumber: 3,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q123"],
    relatedSigns: [],
    relatedProTips: [88]
  },
  {
    id: "cov-3-3",
    pdfSection: "Section 3: An Introduction to Driving",
    topic: "Hand Signaling and Vehicle Signaling Times/Limits",
    pageNumber: 3,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q13", "q14"],
    relatedSigns: [],
    relatedProTips: [13, 29]
  },
  {
    id: "cov-3-4",
    pdfSection: "Section 3: An Introduction to Driving",
    topic: "Headlights: Demands, Rain/Wipers, Sunset/Sunrise, and High Beams",
    pageNumber: 4,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q27", "q36", "q103", "q120"],
    relatedSigns: [],
    relatedProTips: [9, 46, 98]
  },
  {
    id: "cov-3-5",
    pdfSection: "Section 3: An Introduction to Driving",
    topic: "Using Emergency Hazard Flashers & Vehicle Trouble Rules",
    pageNumber: 5,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q126", "q127"],
    relatedSigns: [],
    relatedProTips: [89]
  },

  // SECTION 4
  {
    id: "cov-4-1",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Lane Markings: Single and Double Solid Yellow Lines",
    pageNumber: 6,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q17", "q18"],
    relatedSigns: [],
    relatedProTips: [10, 30]
  },
  {
    id: "cov-4-2",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Two Sets of Double Yellow Lines spaced 2+ feet apart (Barrier)",
    pageNumber: 6,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q19"],
    relatedSigns: [],
    relatedProTips: [31]
  },
  {
    id: "cov-4-3",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Broken Yellow Lines and passing rules",
    pageNumber: 6,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q20"],
    relatedSigns: [],
    relatedProTips: [32]
  },
  {
    id: "cov-4-4",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Single and Double Solid White Lines",
    pageNumber: 6,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q21", "q22"],
    relatedSigns: [],
    relatedProTips: [33, 34]
  },
  {
    id: "cov-4-5",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "End of Lane Markings (Large broken lines)",
    pageNumber: 7,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q23"],
    relatedSigns: [],
    relatedProTips: [35]
  },
  {
    id: "cov-4-6",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Yield Lines (Solid white triangles)",
    pageNumber: 7,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q24"],
    relatedSigns: [],
    relatedProTips: [36]
  },
  {
    id: "cov-4-7",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Numbered Lanes (No. 1, 2, 3...) & Lane Selection Tips",
    pageNumber: 7,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q25", "q26"],
    relatedSigns: [],
    relatedProTips: [37]
  },
  {
    id: "cov-4-8",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "HOV Carpool Lanes & Motorcycles rule",
    pageNumber: 8,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q30"],
    relatedSigns: [],
    relatedProTips: [38]
  },
  {
    id: "cov-4-9",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Center Left Turn Lanes (200 feet driving limit)",
    pageNumber: 9,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q31"],
    relatedSigns: [],
    relatedProTips: [39]
  },
  {
    id: "cov-4-10",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Turnout Areas or Lanes (5+ vehicle delay rule)",
    pageNumber: 9,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q32"],
    relatedSigns: ["slower-traffic-keep-right"],
    relatedProTips: [40]
  },
  {
    id: "cov-4-11",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Bicycle Lane Types & motor vehicle driving restriction (200 ft)",
    pageNumber: 9,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q90", "q122"],
    relatedSigns: [],
    relatedProTips: [41, 42]
  },
  {
    id: "cov-4-12",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Bicycle distance (3 feet rule)",
    pageNumber: 10,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q107"],
    relatedSigns: [],
    relatedProTips: [43]
  },
  {
    id: "cov-4-13",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Right Turns and Right Turns on Red Actions",
    pageNumber: 11,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q33", "q34"],
    relatedSigns: [],
    relatedProTips: [44]
  },
  {
    id: "cov-4-14",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Right Turn Against a Red Arrow",
    pageNumber: 11,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q10"],
    relatedSigns: [],
    relatedProTips: [45]
  },
  {
    id: "cov-4-15",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Left Turns Against Red or from One-Way Streets",
    pageNumber: 12,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q35", "q37"],
    relatedSigns: ["no-left-turn"],
    relatedProTips: [47]
  },
  {
    id: "cov-4-16",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "U-Turns: Legal and Prohibited Locations",
    pageNumber: 13,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q38", "q39"],
    relatedSigns: [],
    relatedProTips: [48]
  },
  {
    id: "cov-4-17",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Parallel Parking rules and metrics (within 18 inches)",
    pageNumber: 18,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q40"],
    relatedSigns: [],
    relatedProTips: [49]
  },
  {
    id: "cov-4-18",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Straight Line Backing (3 vehicle lengths, 3 feet from curb)",
    pageNumber: 19,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q41"],
    relatedSigns: [],
    relatedProTips: [50]
  },
  {
    id: "cov-4-19",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Parking on a Hill (Uphill, Downhill, No Curb)",
    pageNumber: 19,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q5", "q6"],
    relatedSigns: [],
    relatedProTips: [5, 6]
  },
  {
    id: "cov-4-20",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Colored Curbs regulations (White, Green, Yellow, Red, Blue)",
    pageNumber: 20,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q42", "q43", "q44"],
    relatedSigns: [],
    relatedProTips: [51, 52]
  },
  {
    id: "cov-4-21",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Illegal Parking locations (hydrant 15ft, crosswalk 20ft)",
    pageNumber: 20,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q101", "q102"],
    relatedSigns: [],
    relatedProTips: [53]
  },
  {
    id: "cov-4-22",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Law Enforcement Stops (Vehicle controls & Hands visibility)",
    pageNumber: 21,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q45"],
    relatedSigns: [],
    relatedProTips: [54, 55]
  },
  {
    id: "cov-4-23",
    pdfSection: "Section 4: Navigating the Roads",
    topic: "Your Rights during a Stop & Recording First Amendment",
    pageNumber: 22,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q46", "q47"],
    relatedSigns: [],
    relatedProTips: [56]
  },

  // SECTION 5
  {
    id: "cov-5-1",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Traffic signals: solid red, flashing red, red arrow, yellow signal types",
    pageNumber: 24,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q8", "q48", "q49", "q50", "q52"],
    relatedSigns: [],
    relatedProTips: [1, 8, 57]
  },
  {
    id: "cov-5-2",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Pedestrian Signals (WALK, Raised Hand, Numbers, Sounds)",
    pageNumber: 25,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q51"],
    relatedSigns: ["pedestrian-crossing"],
    relatedProTips: [58]
  },
  {
    id: "cov-5-3",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Sign Shapes and Meanings (Stop, Yield, School, Railroad)",
    pageNumber: 26,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q53", "q54", "q55"],
    relatedSigns: ["stop", "yield", "stop-ahead", "yield-ahead"],
    relatedProTips: [59, 60]
  },
  {
    id: "cov-5-4",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Right-of-Way Rules at Intersections and T-Intersections",
    pageNumber: 30,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q56", "q57", "q58"],
    relatedSigns: ["t-intersection"],
    relatedProTips: [3, 61, 62]
  },
  {
    id: "cov-5-5",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Roundabouts (Right, Straight, Left turns rules)",
    pageNumber: 31,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q59", "q60"],
    relatedSigns: [],
    relatedProTips: [7, 63]
  },
  {
    id: "cov-5-6",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Mountain Roads backup/right-of-way rules",
    pageNumber: 32,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q61"],
    relatedSigns: [],
    relatedProTips: [64]
  },
  {
    id: "cov-5-7",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Sharing the Road: Large Trucks (No Zones/Blind Spots, Braking)",
    pageNumber: 32,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q62", "q63"],
    relatedSigns: [],
    relatedProTips: [65, 66]
  },
  {
    id: "cov-5-8",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "School Buses flashing yellow & red signals rules",
    pageNumber: 38,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q64"],
    relatedSigns: [],
    relatedProTips: [12]
  },
  {
    id: "cov-5-9",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Blind Intersections, Alleys, and Railroad Tracks speed zones (15 mph)",
    pageNumber: 39,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q67", "q68"],
    relatedSigns: [],
    relatedProTips: [15]
  },
  {
    id: "cov-5-10",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Business or Residential Districts speed limits (25 mph)",
    pageNumber: 40,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q69"],
    relatedSigns: [],
    relatedProTips: [67]
  },
  {
    id: "cov-5-11",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Evading Law Enforcement in county jail or state prison penalties",
    pageNumber: 41,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q87"],
    relatedSigns: [],
    relatedProTips: [98]
  },
  {
    id: "cov-5-12",
    pdfSection: "Section 5: Laws and Rules of the Road",
    topic: "Dumping or abandoning animals on a highway ($1000 fine/6 months)",
    pageNumber: 44,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q80"],
    relatedSigns: [],
    relatedProTips: []
  },

  // SECTION 6
  {
    id: "cov-6-1",
    pdfSection: "Section 6: Safe Driving",
    topic: "Scanning 10 seconds ahead",
    pageNumber: 44,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q100"],
    relatedSigns: [],
    relatedProTips: [2, 68]
  },
  {
    id: "cov-6-2",
    pdfSection: "Section 6: Safe Driving",
    topic: "Tailgating & Three-Second Rule",
    pageNumber: 44,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q101"],
    relatedSigns: [],
    relatedProTips: [4, 69]
  },
  {
    id: "cov-6-3",
    pdfSection: "Section 6: Safe Driving",
    topic: "Darkness/Night Headlights rules",
    pageNumber: 46,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q103"],
    relatedSigns: [],
    relatedProTips: [46]
  },
  {
    id: "cov-6-4",
    pdfSection: "Section 6: Safe Driving",
    topic: "Slippery Road Speeds (Wet, Packed Snow, Ice limits)",
    pageNumber: 48,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q105"],
    relatedSigns: ["slippery-when-wet"],
    relatedProTips: [70]
  },
  {
    id: "cov-6-5",
    pdfSection: "Section 6: Safe Driving",
    topic: "Hydroplaning definition and recovery",
    pageNumber: 49,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q106"],
    relatedSigns: [],
    relatedProTips: [71]
  },
  {
    id: "cov-6-6",
    pdfSection: "Section 6: Safe Driving",
    topic: "Seat Belts laws and under 16 infraction safety",
    pageNumber: 51,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q109"],
    relatedSigns: [],
    relatedProTips: [72]
  },
  {
    id: "cov-6-7",
    pdfSection: "Section 6: Safe Driving",
    topic: "Child Restraint Systems (under 2 years/40 lbs/3ft4in rules)",
    pageNumber: 51,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q110"],
    relatedSigns: [],
    relatedProTips: [73]
  },
  {
    id: "cov-6-8",
    pdfSection: "Section 6: Safe Driving",
    topic: "Air Bags 10 inch chest clearance spacing",
    pageNumber: 52,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q111"],
    relatedSigns: [],
    relatedProTips: [74]
  },
  {
    id: "cov-6-9",
    pdfSection: "Section 6: Safe Driving",
    topic: "Unattended Children (6 yrs or younger) & Pets in heat",
    pageNumber: 52,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q112", "q113"],
    relatedSigns: [],
    relatedProTips: [75, 76]
  },
  {
    id: "cov-6-10",
    pdfSection: "Section 6: Safe Driving",
    topic: "Basic Speed Law & Freeway Speed Limits (65 mph vs 55 mph undivided/towing)",
    pageNumber: 52,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q114", "q115"],
    relatedSigns: [],
    relatedProTips: [2, 77]
  },
  {
    id: "cov-6-11",
    pdfSection: "Section 6: Safe Driving",
    topic: "Driving Off the Pavement Recovery Steps",
    pageNumber: 53,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q29"],
    relatedSigns: [],
    relatedProTips: [78]
  },
  {
    id: "cov-6-12",
    pdfSection: "Section 6: Safe Driving",
    topic: "Carbon Monoxide from gas vehicles",
    pageNumber: 54,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q116"],
    relatedSigns: [],
    relatedProTips: [79]
  },

  // SECTION 7
  {
    id: "cov-7-1",
    pdfSection: "Section 7: Alcohol and Drugs",
    topic: "California Driving under the Influence (DUI) laws & drug parity",
    pageNumber: 55,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q11", "q12"],
    relatedSigns: [],
    relatedProTips: [80]
  },
  {
    id: "cov-7-2",
    pdfSection: "Section 7: Alcohol and Drugs",
    topic: "Open Container laws for alcohol and cannabis in a vehicle",
    pageNumber: 55,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q117"],
    relatedSigns: [],
    relatedProTips: [81]
  },
  {
    id: "cov-7-3",
    pdfSection: "Section 7: Alcohol and Drugs",
    topic: "Blood Alcohol Concentration (BAC) Limits (0.08%, 0.01% under 21, 0.04% CDL)",
    pageNumber: 56,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q7", "q118"],
    relatedSigns: [],
    relatedProTips: [82]
  },
  {
    id: "cov-7-4",
    pdfSection: "Section 7: Alcohol and Drugs",
    topic: "DUI Arrest refusal penalty (1 year suspension)",
    pageNumber: 57,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q15"],
    relatedSigns: [],
    relatedProTips: [83]
  },
  {
    id: "cov-7-5",
    pdfSection: "Section 7: Alcohol and Drugs",
    topic: "DUI Conviction impact duration (10 years on record, program, SR-22)",
    pageNumber: 57,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q16"],
    relatedSigns: [],
    relatedProTips: [84]
  },

  // SECTION 8
  {
    id: "cov-8-1",
    pdfSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    topic: "Mandatory Minimum Liability Coverage ($30k / $60k / $15k)",
    pageNumber: 58,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q9", "q125"],
    relatedSigns: [],
    relatedProTips: [96]
  },
  {
    id: "cov-8-2",
    pdfSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    topic: "Driving Without Insurance collision suspension (up to 4 years)",
    pageNumber: 58,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q119"],
    relatedSigns: [],
    relatedProTips: [85]
  },
  {
    id: "cov-8-3",
    pdfSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    topic: "What to do after a collision & DMV Reporting timelines (SR-1 within 10 days if >$1k/injury)",
    pageNumber: 59,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q120"],
    relatedSigns: [],
    relatedProTips: [94, 91]
  },

  // SECTION 9
  {
    id: "cov-9-1",
    pdfSection: "Section 9: Seniors and Driving",
    topic: "Seniors and Driving: Warning Signs and Safety considerations",
    pageNumber: 61,
    coverageStatus: "Fully Covered",
    relatedQuestions: ["q128"],
    relatedSigns: [],
    relatedProTips: [92, 93],
    missingNotes: "None. All specified warning signs of unsafe driving and night considerations are covered."
  }
];
