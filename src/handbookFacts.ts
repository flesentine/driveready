import { HandbookFact } from './types';

export const HANDBOOK_FACTS: HandbookFact[] = [
  // --- SECTION 1: THE CALIFORNIA DRIVER'S LICENSE ---
  {
    id: 'fact-class-c-license',
    section: "Section 1: The California Driver's License",
    page: 1,
    topic: 'License classes',
    fact: 'Class C noncommercial driver license is required to operate standard passenger vehicles.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-real-id-designation',
    section: "Section 1: The California Driver's License",
    page: 1,
    topic: 'REAL ID Card Designations',
    fact: 'A REAL ID is a federally designated card that requires specific identification and proof of residency documents to be issued.',
    priority: 'medium',
    contentType: 'definition',
    mustHaveQuestion: false
  },
  {
    id: 'fact-address-change-notification',
    section: "Section 1: The California Driver's License",
    page: 1,
    topic: 'Address change notification timelines',
    fact: 'You must notify the DMV of a change of residential address within 10 days of moving.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-vehicle-transfer-notification',
    section: "Section 1: The California Driver's License",
    page: 1,
    topic: 'Vehicle sell and transfer notification timeline',
    fact: 'You must notify the DMV within 5 days of selling or transferring ownership of a vehicle.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-knowledge-btw-tests',
    section: "Section 1: The California Driver's License",
    page: 1,
    topic: 'Exam requirements',
    fact: 'Applicants are required to pass both the written knowledge test and the behind-the-wheel drive test to get a license.',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: false
  },

  // --- SECTION 2: GETTING A DRIVER'S LICENSE ---
  {
    id: 'fact-instruction-permit-btw',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: 'Instruction permit',
    fact: 'First-time driver license applicants must apply for and receive an instruction permit before taking the behind-the-wheel drive test.',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: false
  },
  {
    id: 'fact-provisional-curfew',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Minor's Provisional License Curfew Restrictions",
    fact: 'Provisional drivers under 18 cannot drive between 11 p.m. and 5 a.m. during the first 12 months you have your license.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-provisional-passengers',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Minor's Passenger Restrictions",
    fact: 'Provisional drivers under 18 cannot transport passengers under 20 years old during the first 12 months, unless supervised by a parent, guardian, or a California-licensed driver at least 25 years old.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-provisional-commercial',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Minor's Employment Restrictions",
    fact: 'Minors holding a provisional driver license cannot drive for pay or operate commercial Class A, B, or C licensed vehicles.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-provisional-exception-medical',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Minor's Restriction Exceptions - Medical Need",
    fact: 'Provisional drivers may drive outside restricted hours for medical needs if they carry a physician-signed note detailing the medical condition and end date of recovery.',
    priority: 'medium',
    contentType: 'exception',
    mustHaveQuestion: true
  },
  {
    id: 'fact-provisional-exception-school',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Minor's Restriction Exceptions - School Activity",
    fact: 'Provisional drivers may drive outside restricted hours for school activities if they carry a note signed by the school principal, dean, or designee.',
    priority: 'medium',
    contentType: 'exception',
    mustHaveQuestion: true
  },
  {
    id: 'fact-provisional-exception-work',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Minor's Restriction Exceptions - Employment",
    fact: 'Provisional drivers may drive outside restricted hours for work reasons if they carry a note signed by their employer confirming employment.',
    priority: 'medium',
    contentType: 'exception',
    mustHaveQuestion: true
  },
  {
    id: 'fact-provisional-exception-family',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Minor's Restriction Exceptions - Family Member",
    fact: 'Provisional drivers may drive outside restricted hours to transport immediate family if they carry a note signed by their parent or legal guardian detailing the reason, family member name, and end date.',
    priority: 'medium',
    contentType: 'exception',
    mustHaveQuestion: true
  },
  {
    id: 'fact-provisional-cancel',
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Parent's Right to Cancel",
    fact: "A parent or legal guardian may cancel a teen's provisional driver's license by completing a Request for Cancellation or Surrender form with the DMV.",
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: false
  },

  // --- SECTION 3: AN INTRODUCTION TO DRIVING ---
  {
    id: 'fact-vision-hazard-distance',
    section: 'Section 3: An Introduction to Driving',
    page: 3,
    topic: 'Vision requirements',
    fact: 'You must maintain vision capable of noticing hazards in different lighting, judging distances, adjusting to traffic speed, and reading road signs.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: false
  },
  {
    id: 'fact-hearing-headset-dual-earplug',
    section: 'Section 3: An Introduction to Driving',
    page: 3,
    topic: 'Hearing restrictions',
    fact: 'It is illegal to wear a headset or earplugs in both ears while driving.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-physician-report-age',
    section: 'Section 3: An Introduction to Driving',
    page: 3,
    topic: 'Medical condition reporting',
    fact: 'Physicians are legally required to report patients who are at least 14 years old to the DMV for medical conditions (such as lapse of consciousness) that may affect driving safety.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-signal-turn-100ft',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Signaling distance before turning',
    fact: 'You must signal at least 100 feet before making a turn.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-signal-every-lane-change',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Signaling for lane changes',
    fact: 'You must signal before executing any lane change.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-signal-freeway-5seconds',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Lane change signaling on freeway',
    fact: 'You must signal at least 5 seconds before changing lanes on a freeway.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-signal-curb-side',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Signaling near curbs',
    fact: 'You must signal before pulling next to or away from the curb.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-signal-empty-road',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Signaling with no vehicles present',
    fact: 'You must signal your intentions even when you do not see other vehicles around you.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-signal-intersection-delayed',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Signaling at intersections',
    fact: 'If you plan to turn shortly after crossing an intersection, signal when you are almost through the intersection to avoid confusing other drivers.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hand-signals-bicyclist',
    section: 'Section 3: An Introduction to Driving',
    page: 3,
    topic: 'Bicyclist hand signals',
    fact: 'Bicyclists may signal a turn with their arm held straight out, pointing in the direction they plan to turn.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hand-signal-left-arm',
    section: 'Section 3: An Introduction to Driving',
    page: 3,
    topic: 'Manual hand signal for a Left Turn',
    fact: 'The hand-and-arm signal for a left turn is your arm held straight out of the window.',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hand-signal-right-arm',
    section: 'Section 3: An Introduction to Driving',
    page: 3,
    topic: 'Manual hand signal for a Right Turn',
    fact: 'The hand-and-arm signal for a right turn is your arm bent upward out of the window.',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hand-signal-slow-stop-arm',
    section: 'Section 3: An Introduction to Driving',
    page: 3,
    topic: 'Manual hand signal to Slow down or Stop',
    fact: 'The hand-and-arm signal to slow down or stop is your arm bent downward out of the window.',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-horn-mountain-200ft',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Mountain road warning alerts',
    fact: 'Use your vehicle’s horn to alert oncoming traffic on narrow mountain roads where you cannot see at least 200 feet ahead.',
    priority: 'medium',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-dim-beams-oncoming-500ft',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Dimming high beams - Oncoming traffic',
    fact: 'Dim your high-beam headlights to low beams within 500 feet of a vehicle coming toward you.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-dim-beams-following-300ft',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Dimming high beams - Following traffic',
    fact: 'Dim your high-beam headlights to low beams within 300 feet of a vehicle you are following.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-illegal-parking-lights',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Driving with parking lights on',
    fact: 'It is illegal to drive using only your parking lights.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-headlights-dark-1000ft',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Headlight visibility distance',
    fact: 'Turn on your headlights when it is too dark to see from 1,000 feet away.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-headlights-after-sunset',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Headlights timeframe after sunset',
    fact: 'You must use headlights beginning 30 minutes after sunset.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-headlights-before-sunrise',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Headlights timeframe before sunrise',
    fact: 'You must use headlights until 30 minutes before sunrise.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-headlights-wipers-running',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Headlights in adverse weather',
    fact: 'In adverse weather, if you need to use your windshield wipers due to fog, rain, or snow, you must turn on your low-beam headlights.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-headlights-mountain-tunnels',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Headlights in tunnels and mountain passes',
    fact: 'Headlights must be used on mountain roads and in tunnels even on bright, sunny days.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-headlights-sun-horizon',
    section: 'Section 3: An Introduction to Driving',
    page: 4,
    topic: 'Headlights when sun is low on horizon',
    fact: 'Turn on headlights to help other drivers see your vehicle when the sun is low on the horizon.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: false
  },
  {
    id: 'fact-emergency-flashers-hazard',
    section: 'Section 3: An Introduction to Driving',
    page: 5,
    topic: 'Using emergency flashers',
    fact: 'If you see an accident or hazard ahead, turn on your emergency flashers to warn drivers behind you.',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: true
  },

  // --- SECTION 4: NAVIGATING THE ROADS ---
  {
    id: 'fact-single-yellow-line',
    section: 'Section 4: Navigating the Roads',
    page: 6,
    topic: 'Single Solid Yellow Line Rules',
    fact: 'A single solid yellow line centers roads with two-way traffic; do not pass another vehicle if there is only one lane in your direction.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-double-solid-yellow-passing',
    section: 'Section 4: Navigating the Roads',
    page: 6,
    topic: 'Double Solid Yellow Line Rules',
    fact: 'Never pass over double solid yellow lines except to turn left into a driveway, exit/enter HOV carpool, or when instructed by signs/construction.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-yellow-barrier-lines',
    section: 'Section 4: Navigating the Roads',
    page: 6,
    topic: 'Solid Double Yellow Barrier Lines',
    fact: 'Two sets of solid double yellow lines spaced two or more feet apart are considered a barrier; do not drive on, over, or make a left/U-turn across this barrier except at designated openings.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-broken-yellow-line',
    section: 'Section 4: Navigating the Roads',
    page: 6,
    topic: 'Broken Yellow Line Passing',
    fact: 'A broken yellow line next to your lane means you may pass if it is safe to do so.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-single-white-line',
    section: 'Section 4: Navigating the Roads',
    page: 6,
    topic: 'Single Solid White Line Rules',
    fact: 'A single solid white line marks traffic lanes going in the same direction, which includes one-way streets.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-double-solid-white-lines',
    section: 'Section 4: Navigating the Roads',
    page: 7,
    topic: 'Double Solid White Lines',
    fact: 'Double solid white lines indicate a lane barrier between regular and preferential lanes (such as HOV lanes); you must never change lanes over them.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-end-lane-broken-markings',
    section: 'Section 4: Navigating the Roads',
    page: 7,
    topic: 'End of Lane Markings',
    fact: 'Ending freeway and street lanes are usually marked with large broken lines; prepare to exit or merge when you see them.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-yield-line-shark-teeth',
    section: 'Section 4: Navigating the Roads',
    page: 7,
    topic: 'Yield Line Definition',
    fact: 'A yield line consists of a row of solid white triangles (shark teeth) pointing towards oncoming vehicles to show where to yield or stop.',
    priority: 'medium',
    contentType: 'definition',
    mustHaveQuestion: true
  },
  {
    id: 'fact-limit-line-stop-crosswalk',
    section: 'Section 4: Navigating the Roads',
    page: 7,
    topic: 'Limit line stopping rules',
    fact: 'A solid white line across a lane is a limit line, marking where you must stop before entering a crosswalk or intersection.',
    priority: 'high',
    contentType: 'definition',
    mustHaveQuestion: true
  },
  {
    id: 'fact-passing-lane-clostest',
    section: 'Section 4: Navigating the Roads',
    page: 8,
    topic: 'Left Passing Lane',
    fact: 'On a multilane road, the passing lane (far left lane) is the lane closest to the center divider.',
    priority: 'medium',
    contentType: 'definition',
    mustHaveQuestion: false
  },
  {
    id: 'fact-hov-motorcycle-lane',
    section: 'Section 4: Navigating the Roads',
    page: 8,
    topic: 'Motorcycles in HOV Lanes',
    fact: 'Motorcyclists are generally permitted to ride in High-Occupancy Vehicle (HOV) carpool lanes.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hov-lane-usage',
    section: 'Section 4: Navigating the Roads',
    page: 8,
    topic: 'HOV lane usage requirements',
    fact: 'HOV lanes are special lanes reserved for carpools, buses, motorcycles, or low-emission vehicles with a minimum number of occupants as posted.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-center-left-turn-distance',
    section: 'Section 4: Navigating the Roads',
    page: 9,
    topic: 'Center Left Turn Lane Distance Limit',
    fact: 'You may only drive for up to 200 feet inside a center left turn lane.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-turnout-slow-vehicles',
    section: 'Section 4: Navigating the Roads',
    page: 9,
    topic: 'Slow Driver Turnouts',
    fact: 'If you are driving slowly on a two-lane road and have 5 or more vehicles following you where passing is unsafe, you must use a turnout area or lane to let them pass.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-drive-bike-lane-limit',
    section: 'Section 4: Navigating the Roads',
    page: 9,
    topic: 'Driving in Bicycle Lanes',
    fact: 'It is illegal to drive in a bicycle lane unless parking, entering/leaving the road, or turning within 200 feet of an intersection.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-bike-passing-clearance',
    section: 'Section 4: Navigating the Roads',
    page: 10,
    topic: 'Passing Bicyclist Space Clearance',
    fact: 'When passing a bicyclist, you must maintain at least 3 feet of clearance distance between your vehicle and the cyclist.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-right-turn-red-light',
    section: 'Section 4: Navigating the Roads',
    page: 11,
    topic: 'Right Turns on Red Lights',
    fact: 'You can legally turn right at a solid red light only after coming to a complete stop, unless a NO TURN ON RED sign is posted.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-right-turn-red-arrow',
    section: 'Section 4: Navigating the Roads',
    page: 11,
    topic: 'Right Turns on Red Arrows',
    fact: 'You are strictly forbidden from making a right turn at a solid red arrow; you must wait until the light changes to green.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-right-turn-bus-lane',
    section: 'Section 4: Navigating the Roads',
    page: 11,
    topic: 'Turns across Public Transit Bus Lanes',
    fact: 'It is illegal to drive, stop, or park in public transit bus lanes, but you may cross a bus lane to execute a right turn within 200 feet of the turn.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-left-turn-wheel-direction',
    section: 'Section 4: Navigating the Roads',
    page: 12,
    topic: 'Wheel positioning before turns',
    fact: 'While waiting to turn left at an intersection, keep your wheels pointed straight ahead until it is safe to start your turn.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-left-turn-red-oneway',
    section: 'Section 4: Navigating the Roads',
    page: 13,
    topic: 'Left Turns on Red Lights',
    fact: 'A left turn against a red light is legal only when turning from a one-way street onto another one-way street.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-uturn-residential-clearance',
    section: 'Section 4: Navigating the Roads',
    page: 13,
    topic: 'U-Turn requirements in residential zones',
    fact: 'U-turns are permitted in residential districts if there are no vehicles approaching you within 200 feet.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-uturn-divided-highway-barrier',
    section: 'Section 4: Navigating the Roads',
    page: 13,
    topic: 'Prohibited U-Turns on divided highways',
    fact: 'Never make a U-turn on a divided highway by crossing a dividing section, curb, strip of land, or two sets of double yellow lines.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-uturn-visibility-distance',
    section: 'Section 4: Navigating the Roads',
    page: 13,
    topic: 'U-Turn visibility distance limit',
    fact: 'Never make a U-turn when you cannot see clearly for 200 feet in each direction.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-uturn-business-districts-rule',
    section: 'Section 4: Navigating the Roads',
    page: 13,
    topic: 'U-Turns in business districts',
    fact: 'U-turns are illegal in business districts except at intersections or where a divided highway opening is provided.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-t-intersection-rightofway',
    section: 'Section 4: Navigating the Roads',
    page: 15,
    topic: "T-Intersection right-of-way rules",
    fact: 'At T-intersections, traffic going straight through on the through road has the absolute right-of-way over vehicles turning in.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-merge-space-3sec',
    section: 'Section 4: Navigating the Roads',
    page: 16,
    topic: 'Safety buffer during merging',
    fact: 'Provide at least three seconds of safety buffer space between you and the vehicle in front when merging.',
    priority: 'medium',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-exit-highway-signal',
    section: 'Section 4: Navigating the Roads',
    page: 16,
    topic: 'Freeway exit signaling time',
    fact: 'When exiting a highway, signal for at least five seconds (approximately 400 feet) before you reach the exit.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-city-merge-halfblock',
    section: 'Section 4: Navigating the Roads',
    page: 16,
    topic: 'City street merging gap space',
    fact: 'When entering city street traffic from a full stop, you need a space gap of about half a block (150 feet) to reach traffic speed.',
    priority: 'medium',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-highway-merge-fullblock',
    section: 'Section 4: Navigating the Roads',
    page: 16,
    topic: 'Highway merging gap space',
    fact: 'When entering highway traffic from a full stop, you need a space gap of about a full block (300 feet) to merge safely.',
    priority: 'medium',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-highway-entry-match-traffic-speed',
    section: 'Section 4: Navigating the Roads',
    page: 16,
    topic: 'Highway entry matching traffic speed',
    fact: 'When entering a highway from an on-ramp, you must enter at or near the speed of traffic.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-pass-on-right-allowed',
    section: 'Section 4: Navigating the Roads',
    page: 17,
    topic: 'Passing on the right conditions',
    fact: 'You may pass on the right only when the highway has two or more lanes in your direction, or the driver ahead is turning left and you can do so safely.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-passing-prohibited-100-feet-hazard',
    section: 'Section 4: Navigating the Roads',
    page: 17,
    topic: 'Prohibited passing within 100 feet',
    fact: 'Do not pass within 100 feet of an intersection, bridge, tunnel, railroad crossing, or other hazardous area.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-parking-curb-distance',
    section: 'Section 4: Navigating the Roads',
    page: 18,
    topic: 'Parallel parking distance limit',
    fact: 'A parallel parked vehicle must have its wheels parallel to and within 18 inches of the curb.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hill-parking-downhill',
    section: 'Section 4: Navigating the Roads',
    page: 19,
    topic: 'Parking downhill wheels',
    fact: 'When parking downhill, turn your front wheels into the curb or toward the side of the road.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hill-parking-uphill',
    section: 'Section 4: Navigating the Roads',
    page: 19,
    topic: 'Parking uphill wheels with curb',
    fact: 'When parking uphill with a curb, turn your front wheels away from the curb (left) and roll back slightly so the wheel touches the curb.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hill-parking-nocurb',
    section: 'Section 4: Navigating the Roads',
    page: 19,
    topic: 'Parking on hills with no curb',
    fact: 'When parking on a hill with no curb (uphill or downhill), turn your front wheels to the right (toward the shoulder of the road).',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-colored-curb-white',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'White curb rules',
    fact: 'A white curb means stop only long enough to pick up or drop off passengers.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-colored-curb-green',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'Green curb rules',
    fact: 'A green curb means park for a limited time, which is usually posted on signs or painted on the curb.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-colored-curb-yellow',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'Yellow curb rules',
    fact: 'A yellow curb means load and unload passengers and freight. Noncommercial drivers must stay with their vehicle.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-colored-curb-red',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'Red curb rules',
    fact: 'A red curb means no stopping, standing, or parking. Buses may stop at red zones marked for bus parking only.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-colored-curb-blue',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'Blue curb rules',
    fact: 'A blue curb is reserved exclusively for parking for disabled persons carrying a special placard or license plate.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-illegal-parking-hydrant-distance',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'Illegal parking fire hydrant distance',
    fact: 'Never park within 15 feet of a fire hydrant or fire station driveway.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-illegal-parking-crosswalk-distance',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'Illegal parking crosswalk distance limit',
    fact: 'Never park within 20 feet of a marked/unmarked crosswalk, or within 15 feet if a curb extension is present.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-illegal-parking-double-parking',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'Illegal double parking rules',
    fact: 'Double parking (parking next to or opposite a vehicle already parked or stopped at a curb) is illegal under any conditions.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-illegal-parking-wheelchair-ramp-distance',
    section: 'Section 4: Navigating the Roads',
    page: 20,
    topic: 'Illegal parking near wheelchair sidewalk ramp',
    fact: 'It is illegal to park within 3 feet of a sidewalk ramp for disabled persons.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-freeway-stuck-time',
    section: 'Section 4: Navigating the Roads',
    page: 21,
    topic: 'Freeway vehicle storage limits',
    fact: 'A vehicle that is stopped, parked, or left standing on a freeway for more than four hours may be legally removed.',
    priority: 'medium',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-le-stop-immigration',
    section: 'Section 4: Navigating the Roads',
    page: 22,
    topic: 'Officer immigration questioning rights',
    fact: 'In California, only federal law enforcement officers can ask about your immigration status; state and local officers are prohibited from asking.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-le-stop-required-docs',
    section: 'Section 4: Navigating the Roads',
    page: 22,
    topic: 'Required documents during police stops',
    fact: 'A driver must produce a driver license, proof of insurance, and vehicle registration when stopped by law enforcement.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-le-stop-reason',
    section: 'Section 4: Navigating the Roads',
    page: 21,
    topic: 'State rules for police stops',
    fact: 'Law enforcement officers are required by state law to state the reason for a traffic or pedestrian stop before asking criminal/violative questions.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: false
  },

  // --- SECTION 5: LAWS AND RULES OF THE ROAD ---
  {
    id: 'fact-traffic-light-red',
    section: 'Section 5: Laws and Rules of the Road',
    page: 24,
    topic: 'Solid Red Light Definition',
    fact: 'A solid red traffic light means STOP. You can make a right turn against red after a complete stop unless prohibited.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-traffic-light-red-arrow',
    section: 'Section 5: Laws and Rules of the Road',
    page: 24,
    topic: 'Red Arrow Definition',
    fact: 'A red arrow means STOP. Do not turn at a red arrow; remain stopped until a green light or arrow appears.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-traffic-light-flashing-red',
    section: 'Section 5: Laws and Rules of the Road',
    page: 24,
    topic: 'Flashing Red Light',
    fact: 'A flashing red light means STOP. After stopping completely, you may proceed when it is safe to do so.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-traffic-light-solid-yellow',
    section: 'Section 5: Laws and Rules of the Road',
    page: 24,
    topic: 'Solid Yellow Light',
    fact: 'A solid yellow light means CAUTION; the light is about to turn red. Stop if you can do so safely; if not, cautiously cross.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-traffic-light-flashing-yellow',
    section: 'Section 5: Laws and Rules of the Road',
    page: 24,
    topic: 'Flashing Yellow Light',
    fact: 'A flashing yellow light warns drivers to PROCEED WITH CAUTION. You do not need to stop, but must slow down and be alert.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-traffic-light-solid-green',
    section: 'Section 5: Laws and Rules of the Road',
    page: 25,
    topic: 'Solid Green Light',
    fact: 'A solid green light means GO, but you must still yield to vehicles, bicyclists, or pedestrians already inside the intersection.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-traffic-light-broken',
    section: 'Section 5: Laws and Rules of the Road',
    page: 25,
    topic: 'Blacked out traffic light rule',
    fact: 'When a traffic signal is completely blacked out or not working, stop as if the intersection is controlled by STOP signs in all directions, then proceed when safe.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-ped-dont-walk-flashing',
    section: 'Section 5: Laws and Rules of the Road',
    page: 25,
    topic: 'Pedestrian countdown signals',
    fact: 'Do not start crossing the street if the DONT WALK or Raised Hand signal is flashing or stable.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-sign-stop',
    section: 'Section 5: Laws and Rules of the Road',
    page: 26,
    topic: 'STOP Sign Shape & Meaning',
    fact: 'Make a full stop before entering the crosswalk or limit line at a red hexagonal STOP sign.',
    priority: 'high',
    contentType: 'sign',
    mustHaveQuestion: true
  },
  {
    id: 'fact-sign-yield',
    section: 'Section 5: Laws and Rules of the Road',
    page: 26,
    topic: 'YIELD Sign Meaning',
    fact: 'Slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass at a red triangular YIELD sign.',
    priority: 'high',
    contentType: 'sign',
    mustHaveQuestion: true
  },
  {
    id: 'fact-sign-wrong-way-reflectors',
    section: 'Section 5: Laws and Rules of the Road',
    page: 26,
    topic: 'Wrong Way detection on roads',
    fact: 'If you are driving at night and enter a roadway against traffic, you will know you are going the wrong way because road reflectors will shine red in your headlights.',
    priority: 'high',
    contentType: 'exception',
    mustHaveQuestion: true
  },
  {
    id: 'fact-cross-railroad-yellow-circular',
    section: 'Section 5: Laws and Rules of the Road',
    page: 27,
    topic: 'Railroad crossing circular sign',
    fact: 'A yellow and black circular sign (or X-shaped crossbuck) indicates you are approaching a railroad crossing. Look, listen, and prepare to stop.',
    priority: 'high',
    contentType: 'sign',
    mustHaveQuestion: true
  },
  {
    id: 'fact-school-zone-sign-5sided',
    section: 'Section 5: Laws and Rules of the Road',
    page: 27,
    topic: 'School zone sign shape',
    fact: 'A yellow, 5-sided (pentagonal) sign with children silhouettes indicates you are near a school. Drive slowly and prepare to stop.',
    priority: 'high',
    contentType: 'sign',
    mustHaveQuestion: true
  },
  {
    id: 'fact-pedestrian-white-canes',
    section: 'Section 5: Laws and Rules of the Road',
    page: 32,
    topic: 'Blind pedestrians right-of-way',
    fact: 'Pedestrians utilizing guide dogs or carrying white canes must be yielded the right-of-way at all times.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-mountain-rightofway',
    section: 'Section 5: Laws and Rules of the Road',
    page: 32,
    topic: 'Steep road right-of-way rules',
    fact: 'On a narrow mountain road where two vehicles cannot pass, the vehicle facing uphill has the right-of-way, and the vehicle facing downhill must back up.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-truck-no-zone-blind',
    section: 'Section 5: Laws and Rules of the Road',
    page: 32,
    topic: 'Large commercial truck blind spots',
    fact: "Large commercial vehicles have huge blind spots called 'No Zones'. If you cannot see the truck's side mirrors, the driver cannot see you.",
    priority: 'high',
    contentType: 'definition',
    mustHaveQuestion: true
  },
  {
    id: 'fact-truck-stopping-distance-feet',
    section: 'Section 5: Laws and Rules of the Road',
    page: 33,
    topic: 'Large truck stopping distance',
    fact: 'At 55 mph, a standard passenger vehicle stops within 300 feet, but a loaded commercial truck can take up to 400 feet to stop.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-truck-swing-wide',
    section: 'Section 5: Laws and Rules of the Road',
    page: 33,
    topic: 'Large truck turning behaviors',
    fact: 'Large vehicles often swing wide because their rear wheels follow a shorter path than their front wheels.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: false
  },
  {
    id: 'fact-truck-highway-lanes',
    section: 'Section 5: Laws and Rules of the Road',
    page: 33,
    topic: 'Large truck speed lane bounds',
    fact: 'On a divided highway with 4 or more lanes in one direction, large trucks and vehicle towing combinations must drive in the 2 lanes closest to the right.',
    priority: 'medium',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-streetcar-safety-zone-speed',
    section: 'Section 5: Laws and Rules of the Road',
    page: 34,
    topic: 'Passing streetcar / safety zone speed limits',
    fact: 'When passing a bus, streetcar, or trolley stopped at a safety zone or traffic light, your speed limit is no more than 10 mph.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-motorcyclist-following-distance',
    section: 'Section 5: Laws and Rules of the Road',
    page: 35,
    topic: 'Motorcycle following safety rule',
    fact: 'Maintain a safe three-second following distance when driving behind a motorcycle to avoid collisions in sudden stops.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-motorcycle-lane-splitting',
    section: 'Section 5: Laws and Rules of the Road',
    page: 35,
    topic: 'Motorcycle lane splitting law',
    fact: 'It is legal in California for motorcycles to share lanes with other vehicles, which is known as lane splitting.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: false
  },
  {
    id: 'fact-emergency-vehicle-red-sirens',
    section: 'Section 5: Laws and Rules of the Road',
    page: 35,
    topic: 'Yielding to emergency vehicles',
    fact: 'When an emergency vehicle with active flashing red lights and sirens approaches, drivers must pull to the right edge of the road and stop completely.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-emergency-vehicle-follow-distance',
    section: 'Section 5: Laws and Rules of the Road',
    page: 35,
    topic: 'Active emergency vehicle follow bounds',
    fact: 'It is illegal to follow within 300 feet of an active fire engine, ambulance, or police vehicle with active siren or flashing lights.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-slow-moving-vehicle-speed',
    section: 'Section 5: Laws and Rules of the Road',
    page: 36,
    topic: 'Slow moving road sign speed limits',
    fact: 'Slow-moving vehicles bearing an orange and red triangular emblem usually travel at speeds of 25 mph or less on public roads.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-move-over-law-tows',
    section: 'Section 5: Laws and Rules of the Road',
    page: 38,
    topic: 'Move Over Law tow trucks',
    fact: "California's 'Move Over' law requires drivers approaching stationary emergency, tow, or road maintenance vehicles with flashing lights to change lanes or slow down to pass safely.",
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hazmat-truck-railroad',
    section: 'Section 5: Laws and Rules of the Road',
    page: 38,
    topic: 'Hazardous cargo railroad protocols',
    fact: 'Trucks carrying hazardous loads with diamond placarded signs must stop completely before crossing any railroad tracks.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-towing-slower-vehicles-lanes',
    section: 'Section 5: Laws and Rules of the Road',
    page: 38,
    topic: 'Towing slow vehicle lanes',
    fact: 'When towing a vehicle/trailer or driving a 3-axle truck, you must drive in the far-right lane or designated slower vehicle lane.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-school-zone-speed-children',
    section: 'Section 5: Laws and Rules of the Road',
    page: 38,
    topic: 'School zone speed limit',
    fact: 'The speed limit is 25 mph within 500 feet of a school while children are outside or crossing, unless otherwise posted (may go down to 15 mph in some zones).',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-school-bus-red-flashing',
    section: 'Section 5: Laws and Rules of the Road',
    page: 38,
    topic: 'School bus red flashing stops',
    fact: 'Drivers must stop from either direction when a school bus ahead is flashing red lights, until children have crossed and lights stop flashing.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-school-bus-divided-highway',
    section: 'Section 5: Laws and Rules of the Road',
    page: 39,
    topic: 'School bus stops - divided highways',
    fact: 'You do not need to stop for a school bus flashing red lights if the bus is on the opposite side of a divided or multi-lane highway (two or more lanes in each direction).',
    priority: 'high',
    contentType: 'exception',
    mustHaveQuestion: true
  },
  {
    id: 'fact-school-bus-stop-violations',
    section: 'Section 5: Laws and Rules of the Road',
    page: 39,
    topic: 'School bus violation ticket costs',
    fact: 'Failing to stop for a school bus flashing red lights carries a fine of up to $1,000 and license suspension for up to one year.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-blind-intersection-speed',
    section: 'Section 5: Laws and Rules of the Road',
    page: 39,
    topic: 'Blind intersection speed limit',
    fact: 'The speed limit for a blind intersection (no stop signs on corners and blocked visibility) is 15 mph.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-alley-speed-limit',
    section: 'Section 5: Laws and Rules of the Road',
    page: 39,
    topic: 'Alley speed limit',
    fact: 'The speed limit in an alley (any roadway no wider than 25 feet used to access rear/sides) is 15 mph.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-railroad-obscured-speed',
    section: 'Section 5: Laws and Rules of the Road',
    page: 39,
    topic: 'Railroad crossing speed limit',
    fact: 'The speed limit is 15 mph within 100 feet of a railroad crossing if you cannot see the tracks for 400 feet in both directions (unless controlled).',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-railroad-crossing-visibility-speed',
    section: 'Section 5: Laws and Rules of the Road',
    page: 39,
    topic: 'Railroad crossing visibility and speed limit factors',
    fact: 'If you cannot see the railroad tracks for 400 feet in both directions, the speed limit is 15 mph within 100 feet of the crossing.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-railroad-track-stop-distance',
    section: 'Section 5: Laws and Rules of the Road',
    page: 39,
    topic: 'Distance bounds from railroad tracks',
    fact: 'Stop at least 15 feet from the nearest track when railroad crossing devices or sirens warn of an approaching train.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-business-residential-speed',
    section: 'Section 5: Laws and Rules of the Road',
    page: 40,
    topic: 'Business / residential speed limit',
    fact: 'The speed limit in a business or residential district is 25 mph unless otherwise posted.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-smoke-minor-present',
    section: 'Section 5: Laws and Rules of the Road',
    page: 40,
    topic: 'Smoking with passenger minors present',
    fact: 'It is highly illegal to smoke inside a vehicle when a minor (under 18) is present.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-animal-abandonment-highway',
    section: 'Section 5: Laws and Rules of the Road',
    page: 40,
    topic: 'Animal dumping crimes',
    fact: 'Dumping or abandoning animals on a highway is illegal, carrying a fine of up to $1,000, six months in jail, or both.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-passenger-cargo-side-limits',
    section: 'Section 5: Laws and Rules of the Road',
    page: 40,
    topic: 'Car side fender extension limits',
    fact: 'Cargo cannot extend beyond fenders on the left side of a passenger vehicle, and cannot extend more than 6 inches beyond fenders on the right side.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-flag-bumper-cargo-4feet',
    section: 'Section 5: Laws and Rules of the Road',
    page: 40,
    topic: 'Rear bumper cargo flags',
    fact: 'Cargo extending more than 4 feet from the rear bumper must display a 12-inch orange or red square flag (two red lights at night).',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-pickup-cargo-bed-seats',
    section: 'Section 5: Laws and Rules of the Road',
    page: 40,
    topic: 'Pickup cargo bed seats',
    fact: 'Passengers are prohibited from riding in the back of a pickup or other truck unless the vehicle is equipped with secure seats and seat belts.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-windshield-lower-corner-passenger',
    section: 'Section 5: Laws and Rules of the Road',
    page: 41,
    topic: 'Windshield passenger corner objects',
    fact: 'Objects may only be affixed on the front windshield in a 7-inch square on the lower passenger corner or lower rear window.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-windshield-lower-corner-driver',
    section: 'Section 5: Laws and Rules of the Road',
    page: 41,
    topic: 'Windshield driver corner objects',
    fact: 'Objects may only be affixed on the front windshield in a 5-inch square on the lower driver side window.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-windshield-electronic-toll-upper',
    section: 'Section 5: Laws and Rules of the Road',
    page: 41,
    topic: 'Windshield electronic toll pay location',
    fact: 'A 5-inch square is allowed in the center uppermost portion of your windshield for an electronic toll payment device.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-funeral-processor-right-of-way',
    section: 'Section 5: Laws and Rules of the Road',
    page: 41,
    topic: 'Funeral procession bounds',
    fact: 'Interfering with a funeral procession is ticketable; processions led by a traffic officer have the right-of-way.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: false
  },
  {
    id: 'fact-evade-police-consequences',
    section: 'Section 5: Laws and Rules of the Road',
    page: 41,
    topic: 'Fleeing law enforcement misdemeanor jail',
    fact: 'Using a vehicle to flee or attempt to evade law enforcement is a misdemeanor carrying a penalty of up to 1 year in county jail.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-unlicensed-driver-impound',
    section: 'Section 5: Laws and Rules of the Road',
    page: 41,
    topic: 'Unlicensed vehicle impounds',
    fact: 'If an unlicensed driver is caught driving your vehicle, the vehicle may be legally impounded for 30 days.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-minor-violation-second-action',
    section: 'Section 5: Laws and Rules of the Road',
    page: 42,
    topic: 'Minor license violation count two',
    fact: 'With two at-fault collisions or traffic violations within 12 months, a minor cannot drive for 30 days unless accompanied by a 25+ licensed adult.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-minor-violation-third-action',
    section: 'Section 5: Laws and Rules of the Road',
    page: 42,
    topic: 'Minor license violation count three',
    fact: 'With three at-fault collisions or traffic violations within 12 months, a minor’s driving privilege is suspended for 6 months and on probation for 1 year.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hearing-timelines-post-service',
    section: 'Section 5: Laws and Rules of the Road',
    page: 43,
    topic: 'Admin hearing service request times',
    fact: 'An administrative hearing with the DMV must be requested within 10 days of being served of a proposed action against your driving privilege.',
    priority: 'medium',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-sharing-road-animal-drawn-vehicles',
    section: 'Section 5: Laws and Rules of the Road',
    page: 32,
    topic: 'Animal-drawn vehicles and riders on public roads',
    fact: 'People riding animals or driving animal-drawn vehicles on public roads have the same rights and duties as motor vehicle drivers.',
    priority: 'medium',
    contentType: 'rule',
    mustHaveQuestion: true
  },

  // --- SECTION 6: SAFE DRIVING ---
  {
    id: 'fact-scan-road-10seconds',
    section: 'Section 6: Safe Driving',
    page: 44,
    topic: 'Visual search scanning times',
    fact: 'Always keep your eyes moving and scan the road at least 10 seconds ahead of your vehicle.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-tailgate-three-second-rule',
    section: 'Section 6: Safe Driving',
    page: 44,
    topic: 'Tailgating safety following distance',
    fact: 'Use the three-second rule to maintain a safe following distance and avoid collisions with vehicles ahead.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-skid-release-accelerator-no-brakes',
    section: 'Section 6: Safe Driving',
    page: 47,
    topic: 'Slippery skid control steering rules',
    fact: 'If your vehicle starts to steer or slip in a skid: slowly remove your foot from the accelerator, do not use the brakes, and turn the steering wheel in the direction of the skid.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-slick-roads-wet-speed',
    section: 'Section 6: Safe Driving',
    page: 48,
    topic: 'Rain road wet speed bounds',
    fact: 'On a wet road, adjust your speed by reducing it by 5 to 10 mph.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-slick-roads-snow-speed',
    section: 'Section 6: Safe Driving',
    page: 48,
    topic: 'Packed snow speed bounds',
    fact: 'On packed snow, adjust your speed by reducing it by half.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-slick-roads-ice-speed',
    section: 'Section 6: Safe Driving',
    page: 48,
    topic: 'Ice road speeds adjustment',
    fact: 'On ice, adjust your speed by reducing it to no more than 5 mph.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-bridge-overpass-freeze',
    section: 'Section 6: Safe Driving',
    page: 48,
    topic: 'Slick bridge freezing order',
    fact: 'Bridges and overpasses tend to freeze before the rest of the road, hidden icy spots can hide in shaded areas.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hydroplane-slow-gradual',
    section: 'Section 6: Safe Driving',
    page: 49,
    topic: 'Hydroplane brakes and acceleration',
    fact: 'If your vehicle starts to hydroplane, slow down gradually and do not use the brakes as sudden braking causes immediate loss of control.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-seatbelt-passenger-under-16',
    section: 'Section 6: Safe Driving',
    page: 51,
    topic: 'Passenger seatbelt violations under 16',
    fact: 'You can get a citation if a passenger under the age of 16 is caught inside your vehicle not wearing a proper seatbelt.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-restraint-rear-facing-age2',
    section: 'Section 6: Safe Driving',
    page: 51,
    topic: 'Rear child safety seat limits',
    fact: 'Children under 2 years old, weighing under 40 pounds, and under 3 feet 4 inches tall must be secured in a rear-facing child passenger restraint system.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-restraint-under8-backseat',
    section: 'Section 6: Safe Driving',
    page: 51,
    topic: 'Secure seat child restraint age eight',
    fact: 'Children under 8 years old, or who are less than 4 feet 9 inches tall, must be secured in a child passenger restraint system in a rear seat.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-restraint-height-4ft9-seats',
    section: 'Section 6: Safe Driving',
    page: 51,
    topic: 'Height rules for standard seatbelts',
    fact: 'Children who are 8 years old or older, or at least 4 feet 9 inches tall, may use a properly secured standard safety belt.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-airbag-chest-clearance',
    section: 'Section 6: Safe Driving',
    page: 52,
    topic: 'Airbag safety steering clearance',
    fact: 'Ride at least 10 inches from the airbag cover, measuring from the center of the steering wheel to your breastbone.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-dashboard-warning-lights',
    section: 'Section 6: Safe Driving',
    page: 52,
    topic: 'Dashboard temperature and engine warning indicators',
    fact: 'A red engine or thermometer warming indicator on your dashboard indicates the cooling system is overheating or engine oil pressure is low.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-safe-tire-tread-depth',
    section: 'Section 6: Safe Driving',
    page: 52,
    topic: 'Minimum legal tire tread depth',
    fact: 'Tires are legally bald and unsafe to operate if they have less than 2/32 (1/16) of an inch of tread depth in any two adjacent major grooves.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-unattended-child-age6',
    section: 'Section 6: Safe Driving',
    page: 52,
    topic: 'Unattended child age limits',
    fact: 'It is highly illegal to leave a child 6 years old or younger unattended in a vehicle, unless supervised by a person at least 12 years old.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-unattended-child-hot-vehicle',
    section: 'Section 6: Safe Driving',
    page: 52,
    topic: 'Dangerous hot car animal storage',
    fact: 'It is illegal and dangerous to leave children or animals inside a hot vehicle, as temperatures inside can rise rapidly in the sun.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-speed-basic-speed-law',
    section: 'Section 6: Safe Driving',
    page: 52,
    topic: 'Basic Speed Law',
    fact: 'Under California’s Basic Speed Law, you may never drive faster than is safe for current road and environmental conditions.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-speed-freeway-limit-ideal',
    section: 'Section 6: Safe Driving',
    page: 52,
    topic: 'Maximum speed limits',
    fact: 'Unless otherwise posted, the maximum speed limit is 65 mph on highways, and 55 mph on two-lane undivided roads or when towing.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hazard-space-split',
    section: 'Section 6: Safe Driving',
    page: 52,
    topic: 'Hazard space splitting rules',
    fact: 'When hazards are on both sides of the road, handle them one at a time by slowing down and letting one pass before centering space for the other.',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: false
  },
  {
    id: 'fact-disabled-freeway-shoulder',
    section: 'Section 6: Safe Driving',
    page: 53,
    topic: 'Freeway breakdown phone protocols',
    fact: 'If disabled on a freeway: pull to the right shoulder, exit from the right side, dial 511, stay inside with safety belt on, and use emergency flashers.',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: false
  },
  {
    id: 'fact-stalled-tracks-train-approaching',
    section: 'Section 6: Safe Driving',
    page: 53,
    topic: 'Stalled vehicle railroad train hazards',
    fact: 'If your vehicle stalls on tracks with a train approaching, exit immediately and run diagonally away from the tracks in the direction the train is coming from, then call 911.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-distracted-cell-adults-safety',
    section: 'Section 6: Safe Driving',
    page: 54,
    topic: 'Hands-free cell phone rules',
    fact: 'Using a handheld cell phone is illegal; adult drivers may only use a cell phone in hands-free mode.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-distracted-cell-minors-rules',
    section: 'Section 6: Safe Driving',
    page: 54,
    topic: 'Minors cell phone restrictions',
    fact: 'It is strictly illegal for minor provisional drivers to use a cell phone or electronic wireless device for any reason, except to make a call for emergency assistance.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-flat-tire-blowout-safety',
    section: 'Section 6: Safe Driving',
    page: 54,
    topic: 'Tire blowout recovery procedures',
    fact: 'If you experience a sudden tire blowout or flat tire: hold the steering wheel tightly, steer straight, slowly ease off the accelerator, do not brake, and safely pull off the road.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },

  // --- SECTION 7: ALCOHOL AND DRUGS ---
  {
    id: 'fact-dui-test-refusal',
    section: 'Section 7: Alcohol and Drugs',
    page: 55,
    topic: 'Chemical test refusal warnings',
    fact: 'Under California’s implied consent law, if you refuse a lawful chemical blood, breath, or urine test, the DMV will suspend or revoke your driving privilege for 1 year.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-dui-bike-minor-under21',
    section: 'Section 7: Alcohol and Drugs',
    page: 55,
    topic: 'Minor cycling DUI suspensions',
    fact: 'If you are 13 to 20 years old and convicted of operating a bicycle under the influence, your driving privilege will be suspended or delayed for one year.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-dui-open-container-vehicle',
    section: 'Section 7: Alcohol and Drugs',
    page: 55,
    topic: 'Open container laws for alcohol and cannabis',
    fact: 'It is highly illegal to drive with an open container of alcohol or cannabis inside a vehicle, unless it is sealed, kept in the trunk, or in luggage space (never in the glove box).',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-bac-limit-adult-21',
    section: 'Section 7: Alcohol and Drugs',
    page: 56,
    topic: 'Adult maximum blood alcohol bounds',
    fact: 'It is illegal to drive with a Blood Alcohol Concentration (BAC) of 0.08% or higher if you are over 21 years old.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-bac-limit-under-21',
    section: 'Section 7: Alcohol and Drugs',
    page: 56,
    topic: 'Under 21 blood alcohol limits',
    fact: 'It is illegal to drive with a Blood Alcohol Concentration (BAC) of 0.01% or higher if you are under 21 years old.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-bac-limit-dui-probation',
    section: 'Section 7: Alcohol and Drugs',
    page: 56,
    topic: 'DUI probation blood alcohol limits',
    fact: 'It is illegal to drive with a Blood Alcohol Concentration (BAC) of 0.01% or higher at any age if you are on active DUI probation.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-bac-limit-commercial',
    section: 'Section 7: Alcohol and Drugs',
    page: 56,
    topic: 'Commercial driver blood alcohol bounds',
    fact: 'It is illegal to drive with a Blood Alcohol Concentration (BAC) of 0.04% or higher in vehicles requiring a commercial license, or driving a passenger-for-hire vehicle.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-dui-conviction-sr22-iid',
    section: 'Section 7: Alcohol and Drugs',
    page: 57,
    topic: 'DUI conviction license requirements',
    fact: 'A DUI conviction triggers a mandatory 1-year privilege suspension, requirement to complete a certified DUI program, file an SR-22/SR-1P certificate, and potentially install an Ignition Interlock Device (IID).',
    priority: 'medium',
    contentType: 'procedure',
    mustHaveQuestion: false
  },
  {
    id: 'fact-dui-record-retention-years',
    section: 'Section 7: Alcohol and Drugs',
    page: 57,
    topic: 'Driving record DUI retention timelines',
    fact: 'A DUI conviction remains on active DMV driving records for a total of 10 years.',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-dui-under21-carry-alcohol',
    section: 'Section 7: Alcohol and Drugs',
    page: 57,
    topic: 'Minor alcohol possession rules',
    fact: 'Drivers under 21 may not carry unopened alcoholic beverages inside their vehicle unless accompanied by a parent, guardian, or relative age 21+. Opened alcohol must be kept in the trunk.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },
  {
    id: 'fact-dui-drugs-prescription-impairment',
    section: 'Section 7: Alcohol and Drugs',
    page: 55,
    topic: 'Prescription and over-the-counter medicine driving legality',
    fact: 'It is illegal to drive under the influence of any drug, including prescription and over-the-counter medications, if they impair your ability to drive safely.',
    priority: 'high',
    contentType: 'rule',
    mustHaveQuestion: true
  },

  // --- SECTION 8: FINANCIAL RESPONSIBILITY, INSURANCE, AND COLLISIONS ---
  {
    id: 'fact-insurance-minimum-liability-limits',
    section: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    page: 58,
    topic: 'Minimum vehicle liability coverage',
    fact: 'Minimum California liability insurance coverage limits are $30,000 for a single injury/death, $60,000 for injury/death of multiple people, and $15,000 for property damage (30/60/15).',
    priority: 'high',
    contentType: 'number',
    mustHaveQuestion: true
  },
  {
    id: 'fact-insurance-lack-suspension',
    section: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    page: 58,
    topic: 'Collision without active insurance card',
    fact: 'If you are in a collision and do not have proper vehicle insurance coverage, your driving privilege will be suspended for up to 4 years, regardless of who was at fault.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-hit-and-run-punishment',
    section: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    page: 59,
    topic: 'Fleeing collision sites misdemeanor',
    fact: 'Failing to stop immediately after causing or getting into an accident (hit-and-run) when injury, death, or property damage occurs carries severe penalties.',
    priority: 'high',
    contentType: 'penalty',
    mustHaveQuestion: true
  },
  {
    id: 'fact-collision-report-sr1-dmv',
    section: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    page: 59,
    topic: 'DMV SR-1 collision reporting threshold',
    fact: 'You must report any collision to the DMV on an SR-1 form within 10 days if the property damage exceeds $1,000, or if anyone was injured or killed.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },
  {
    id: 'fact-collision-parked-vehicle-note-report',
    section: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    page: 59,
    topic: 'Collision with parked vehicle or property',
    fact: 'If you hit a parked vehicle or property and cannot find the owner, leave a note with your name, phone number, and address, and report the collision to local police or CHP.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },

  // --- SECTION 9: SENIORS AND DRIVING ---
  {
    id: 'fact-seniors-night-driving-limitation',
    section: 'Section 9: Seniors and Driving',
    page: 61,
    topic: 'Seniors safe night driving choices',
    fact: 'Senior drivers often experience physical changes and may consider limiting or avoiding night driving, selecting well-lit routes if necessary.',
    priority: 'low',
    contentType: 'rule',
    mustHaveQuestion: false
  },
  {
    id: 'fact-seniors-warning-signs',
    section: 'Section 9: Seniors and Driving',
    page: 61,
    topic: 'Warning signs and safety adjustments for senior drivers',
    fact: 'Senior drivers should reassess driving safety if they get lost in familiar places, have new dents or scrapes, have frequent close calls, or are involved in collisions. Safer adjustments may include limiting night driving, taking shorter trips, avoiding difficult intersections, avoiding freeways, and using additional mirrors.',
    priority: 'high',
    contentType: 'procedure',
    mustHaveQuestion: true
  },


  // --- CANONICAL PDF GAP-FILL FACTS GENERATED FROM source/pdfFacts.canonical.json ---
  {
    id: "pdf-fact-s1-license-purpose-a-california-driver-license-allows-you-to-drive-on-pub",
    section: "Section 1: The California Driver's License",
    page: 1,
    topic: "License purpose",
    fact: "A California driver license allows you to drive on public roads.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s1-correct-license-class-drivers-must-have-the-correct-class-of-license-f",
    section: "Section 1: The California Driver's License",
    page: 1,
    topic: "Correct license class",
    fact: "Drivers must have the correct class of license for the type of vehicle they operate.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s1-other-license-classes-commercial-vehicles-motorcycles-and-other-vehicl",
    section: "Section 1: The California Driver's License",
    page: 1,
    topic: "Other license classes",
    fact: "Commercial vehicles, motorcycles, and other vehicle types require different license classes.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s2-minor-provisional-license-designation-a-driver-license-for-a-driver-un",
    section: "Section 2: Getting a Driver's License",
    page: 2,
    topic: "Minor provisional license designation",
    fact: "A driver license for a driver under 18 has the word provisional.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-health-and-driving-a-driver-s-health-can-affect-safe-driving",
    section: "Section 3: An Introduction to Driving",
    page: 3,
    topic: "Health and driving",
    fact: "A driver’s health can affect safe driving.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s3-signals-horn-and-headlights-purpose-signals-horns-and-headlights-commu",
    section: "Section 3: An Introduction to Driving",
    page: 3,
    topic: "Signals horn and headlights purpose",
    fact: "Signals, horns, and headlights communicate with other drivers, pedestrians, and bicyclists.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s3-use-hand-signals-if-lights-fail-if-signal-lights-are-not-functioning-o",
    section: "Section 3: An Introduction to Driving",
    page: 3,
    topic: "Use hand signals if lights fail",
    fact: "If signal lights are not functioning or are hard to see in bright sunlight, drivers should use hand-and-arm signals.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-cancel-signal-drivers-should-turn-off-a-signal-when-it-is-no-longer-ne",
    section: "Section 3: An Introduction to Driving",
    page: 4,
    topic: "Cancel signal",
    fact: "Drivers should turn off a signal when it is no longer needed.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-horn-use-purpose-drivers-may-use-the-horn-to-let-other-drivers-know-th",
    section: "Section 3: An Introduction to Driving",
    page: 4,
    topic: "Horn use purpose",
    fact: "Drivers may use the horn to let other drivers know they are present or to warn others of a hazard.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-horn-to-avoid-collisions-drivers-may-use-the-horn-to-help-avoid-collis",
    section: "Section 3: An Introduction to Driving",
    page: 4,
    topic: "Horn to avoid collisions",
    fact: "Drivers may use the horn to help avoid collisions.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-headlights-see-and-be-seen-headlights-help-drivers-see-ahead-and-help",
    section: "Section 3: An Introduction to Driving",
    page: 4,
    topic: "Headlights see and be seen",
    fact: "Headlights help drivers see ahead and help others see the vehicle.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s3-headlights-when-conditions-block-view-use-headlights-when-clouds-dust",
    section: "Section 3: An Introduction to Driving",
    page: 4,
    topic: "Headlights when conditions block view",
    fact: "Use headlights when clouds, dust, smoke, fog, or similar conditions prevent seeing other vehicles.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-headlights-when-sign-requires-use-headlights-when-a-road-sign-states-t",
    section: "Section 3: An Introduction to Driving",
    page: 4,
    topic: "Headlights when sign requires",
    fact: "Use headlights when a road sign states they must be on.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-hand-signal-when-slowing-or-stopping-if-you-see-a-hazard-ahead-you-can",
    section: "Section 3: An Introduction to Driving",
    page: 5,
    topic: "Hand signal when slowing or stopping",
    fact: "If you see a hazard ahead, you can warn drivers behind you by using a hand signal when slowing or stopping.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-vehicle-trouble-flashers-if-you-stop-because-of-vehicle-trouble-turn-o",
    section: "Section 3: An Introduction to Driving",
    page: 5,
    topic: "Vehicle trouble flashers",
    fact: "If you stop because of vehicle trouble, turn on emergency flashers or use turn signals if the vehicle has no flashers.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-vehicle-trouble-pull-off-road-if-possible-pull-off-the-road-away-from",
    section: "Section 3: An Introduction to Driving",
    page: 5,
    topic: "Vehicle trouble pull off road",
    fact: "If possible, pull off the road away from all traffic when stopped for vehicle trouble.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-vehicle-trouble-visible-stopping-place-if-you-cannot-get-completely-of",
    section: "Section 3: An Introduction to Driving",
    page: 5,
    topic: "Vehicle trouble visible stopping place",
    fact: "If you cannot get completely off the road, stop where people can see you and your vehicle from behind.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-avoid-stopping-over-hill-or-curve-do-not-stop-just-over-a-hill-or-just",
    section: "Section 3: An Introduction to Driving",
    page: 5,
    topic: "Avoid stopping over hill or curve",
    fact: "Do not stop just over a hill or just around a curve when your vehicle has trouble.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s3-roadside-assistance-wait-in-vehicle-call-for-emergency-roadside-assist",
    section: "Section 3: An Introduction to Driving",
    page: 5,
    topic: "Roadside assistance wait in vehicle",
    fact: "Call for emergency roadside assistance and stay in your vehicle until help arrives.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-traffic-lane-definition-a-traffic-lane-is-a-section-of-road-for-a-sing",
    section: "Section 4: Navigating the Roads",
    page: 6,
    topic: "Traffic lane definition",
    fact: "A traffic lane is a section of road for a single line of traffic.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s4-lane-markings-purpose-lane-markings-show-drivers-which-part-of-the-roa",
    section: "Section 4: Navigating the Roads",
    page: 6,
    topic: "Lane markings purpose",
    fact: "Lane markings show drivers which part of the road to use and help explain traffic rules.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s4-broken-white-line-broken-white-lines-separate-traffic-lanes-moving-in",
    section: "Section 4: Navigating the Roads",
    page: 7,
    topic: "Broken white line",
    fact: "Broken white lines separate traffic lanes moving in the same direction.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-number-1-lane-definition-the-left-or-fast-lane-is-called-the-number-1",
    section: "Section 4: Navigating the Roads",
    page: 7,
    topic: "Number 1 lane definition",
    fact: "The left or fast lane is called the Number 1 lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-lane-numbers-increase-rightward-the-lane-to-the-right-of-the-number-1",
    section: "Section 4: Navigating the Roads",
    page: 7,
    topic: "Lane numbers increase rightward",
    fact: "The lane to the right of the Number 1 lane is Number 2, then Number 3, and so on.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s4-left-lane-use-use-the-left-lane-to-pass-or-turn-left",
    section: "Section 4: Navigating the Roads",
    page: 7,
    topic: "Left lane use",
    fact: "Use the left lane to pass or turn left.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-lane-use-use-the-right-lane-to-enter-or-exit-traffic-or-when-ent",
    section: "Section 4: Navigating the Roads",
    page: 7,
    topic: "Right lane use",
    fact: "Use the right lane to enter or exit traffic or when entering the road from a curb or shoulder.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-lane-change-signal-before-changing-lanes-signal",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Lane change signal",
    fact: "Before changing lanes, signal.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-lane-change-mirror-check-before-changing-lanes-check-your-mirrors",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Lane change mirror check",
    fact: "Before changing lanes, check your mirrors.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-lane-change-traffic-check-before-changing-lanes-check-traffic-behind-a",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Lane change traffic check",
    fact: "Before changing lanes, check traffic behind and beside you.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-lane-change-shoulder-check-before-changing-lanes-look-over-your-should",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Lane change shoulder check",
    fact: "Before changing lanes, look over your shoulder in the direction you plan to move.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-lane-change-blind-spots-check-blind-spots-for-vehicles-motorcycles-and",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Lane change blind spots",
    fact: "Check blind spots for vehicles, motorcycles, and bicyclists before changing lanes.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-do-not-drift-lanes-do-not-let-your-vehicle-drift-into-another-lane",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Do not drift lanes",
    fact: "Do not let your vehicle drift into another lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-lane-change-space-before-changing-lanes-make-sure-there-is-enough-spac",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Lane change space",
    fact: "Before changing lanes, make sure there is enough space for your vehicle in the next lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-lane-change-slowing-unnecessary-it-is-not-necessary-to-slow-down-befor",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Lane change slowing unnecessary",
    fact: "It is not necessary to slow down before a lane change.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s4-avoid-weaving-stay-in-one-lane-as-much-as-possible-and-do-not-weave-in",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Avoid weaving",
    fact: "Stay in one lane as much as possible and do not weave in and out of traffic.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-avoid-last-minute-changes-last-minute-lane-or-direction-changes-may-in",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Avoid last-minute changes",
    fact: "Last-minute lane or direction changes may increase collision risk.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-continue-through-intersection-once-you-start-moving-through-an-interse",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Continue through intersection",
    fact: "Once you start moving through an intersection, keep going.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-missed-turn-procedure-if-you-miss-a-turn-keep-driving-until-you-can-sa",
    section: "Section 4: Navigating the Roads",
    page: 8,
    topic: "Missed turn procedure",
    fact: "If you miss a turn, keep driving until you can safely and legally turn around.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-center-left-turn-lane-location-a-center-left-turn-lane-is-in-the-middl",
    section: "Section 4: Navigating the Roads",
    page: 9,
    topic: "Center left turn lane location",
    fact: "A center left turn lane is in the middle of a two-way street and is marked by inner broken and outer solid lines.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-bicycle-lane-purpose-bicycle-lanes-are-for-bicyclists-only-and-run-alo",
    section: "Section 4: Navigating the Roads",
    page: 9,
    topic: "Bicycle lane purpose",
    fact: "Bicycle lanes are for bicyclists only and run alongside vehicle traffic.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-bicycle-lane-markings-bicycle-lanes-are-typically-marked-by-a-solid-wh",
    section: "Section 4: Navigating the Roads",
    page: 9,
    topic: "Bicycle lane markings",
    fact: "Bicycle lanes are typically marked by a solid white line and signs and may be painted bright green.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s4-bike-lane-types-bike-lane-markings-include-standard-bike-lanes-buffere",
    section: "Section 4: Navigating the Roads",
    page: 10,
    topic: "Bike lane types",
    fact: "Bike lane markings include standard bike lanes, buffered bike lanes, bike routes, bicycle boulevards, separated bikeways, and shared roadway markings.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-shared-roadway-bicycle-markings-shared-roadway-bicycle-markings-alert",
    section: "Section 4: Navigating the Roads",
    page: 10,
    topic: "Shared roadway bicycle markings",
    fact: "Shared roadway bicycle markings alert drivers that bicyclists can occupy the lane and help bicyclists maintain a safe lane position.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-motorized-bicycle-caution-motorized-bicycle-riders-should-use-caution",
    section: "Section 4: Navigating the Roads",
    page: 10,
    topic: "Motorized bicycle caution",
    fact: "Motorized-bicycle riders should use caution, travel at a reasonable speed, and not endanger bicyclists.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s4-right-turn-road-position-to-make-a-right-turn-drive-close-to-the-right",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Right turn road position",
    fact: "To make a right turn, drive close to the right edge of the road.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-lane-opening-if-a-designated-right-turn-lane-is-available-e",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Right turn lane opening",
    fact: "If a designated right turn lane is available, enter at the opening.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-bike-lane-use-drivers-may-drive-in-a-bike-lane-within-200-f",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Right turn bike lane use",
    fact: "Drivers may drive in a bike lane within 200 feet of a right turn after checking blind spots.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-watch-vulnerable-users-when-turning-right-watch-for-pedestr",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Right turn watch vulnerable users",
    fact: "When turning right, watch for pedestrians, bicyclists, or motorcyclists between the vehicle and the curb.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-signal-distance-start-signaling-about-100-feet-before-a-rig",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Right turn signal distance",
    fact: "Start signaling about 100 feet before a right turn.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-shoulder-check-before-a-right-turn-look-over-your-right-sho",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Right turn shoulder check",
    fact: "Before a right turn, look over your right shoulder and reduce speed.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-stopping-position-stop-behind-the-limit-line-if-none-before",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Right turn stopping position",
    fact: "Stop behind the limit line; if none, before the crosswalk; if no crosswalk, before entering the intersection.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-scan-look-left-right-left-and-turn-when-safe",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Right turn scan",
    fact: "Look left-right-left and turn when safe.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-complete-right-turn-in-right-lane-complete-a-right-turn-in-the-right-l",
    section: "Section 4: Navigating the Roads",
    page: 11,
    topic: "Complete right turn in right lane",
    fact: "Complete a right turn in the right lane and do not turn wide into another lane.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-dedicated-right-turn-lane-no-merge-a-dedicated-right-turn-lane-does-no",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Dedicated right turn lane no merge",
    fact: "A dedicated right turn lane does not merge into another lane and allows a right turn without stopping.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-dedicated-right-turn-during-red-through-light-drivers-may-use-a-dedica",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Dedicated right turn during red through light",
    fact: "Drivers may use a dedicated right turn lane even if the light for straight-through traffic is red.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-dedicated-right-turn-obey-curb-signal-if-a-traffic-light-or-sign-is-on",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Dedicated right turn obey curb signal",
    fact: "If a traffic light or sign is on the right curb of the dedicated right turn lane, obey that light or sign.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-dedicated-right-turn-yield-pedestrians-always-yield-to-pedestrians-in",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Dedicated right turn yield pedestrians",
    fact: "Always yield to pedestrians in a crosswalk when turning from a dedicated right turn lane.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-lane-position-to-turn-left-drive-close-to-the-center-divider",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn lane position",
    fact: "To turn left, drive close to the center divider or into the left turn lane.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-lane-opening-enter-a-designated-left-turn-lane-at-the-openin",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn lane opening",
    fact: "Enter a designated left turn lane at the opening and do not cross any solid line.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-center-lane-distance-enter-a-two-way-center-left-turn-lane-w",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn center lane distance",
    fact: "Enter a two-way center left turn lane within 200 feet of a left turn.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-yield-in-center-lane-respect-the-right-of-way-of-vehicles-bi",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn yield in center lane",
    fact: "Respect the right-of-way of vehicles, bicyclists, or motorcyclists already in a center left turn lane and always yield to pedestrians.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-signal-distance-start-signaling-100-feet-before-a-left-turn",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn signal distance",
    fact: "Start signaling 100 feet before a left turn.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-shoulder-and-speed-before-a-left-turn-look-over-your-left-sh",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn shoulder and speed",
    fact: "Before a left turn, look over your left shoulder and reduce speed.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-stopping-position-for-a-left-turn-stop-behind-the-limit-line",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn stopping position",
    fact: "For a left turn, stop behind the limit line, before the crosswalk, or before the intersection as applicable.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-scanning-look-left-right-left-and-begin-a-left-turn-when-saf",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn scanning",
    fact: "Look left-right-left and begin a left turn when safe.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-complete-in-left-lane-complete-a-left-turn-in-the-left-lane",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn complete in left lane",
    fact: "Complete a left turn in the left lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-smooth-acceleration-accelerate-smoothly-during-and-after-a-l",
    section: "Section 4: Navigating the Roads",
    page: 12,
    topic: "Left turn smooth acceleration",
    fact: "Accelerate smoothly during and after a left turn and allow the steering wheel to straighten.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s4-u-turn-definition-a-u-turn-turns-a-vehicle-around-to-go-back-in-the-di",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "U-turn definition",
    fact: "A U-turn turns a vehicle around to go back in the direction it came from.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s4-u-turn-lane-position-to-make-a-u-turn-signal-and-use-the-left-turn-lan",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "U-turn lane position",
    fact: "To make a U-turn, signal and use the left turn lane or far-left lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-u-turn-across-double-yellow-drivers-may-make-a-u-turn-across-a-double",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "U-turn across double yellow",
    fact: "Drivers may make a U-turn across a double yellow line when otherwise legal.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-u-turn-at-green-intersection-a-u-turn-is-allowed-at-an-intersection-on",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "U-turn at green intersection",
    fact: "A U-turn is allowed at an intersection on a green light or green arrow unless a NO U-TURN sign is posted.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-u-turn-divided-highway-opening-a-u-turn-is-allowed-on-a-divided-highwa",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "U-turn divided highway opening",
    fact: "A U-turn is allowed on a divided highway only if a center divider opening is provided.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-u-turn-sign-never-make-a-u-turn-where-a-no-u-turn-sign-is-posted",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "No U-turn sign",
    fact: "Never make a U-turn where a NO U-TURN sign is posted.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-u-turn-railroad-crossing-never-make-a-u-turn-at-or-on-a-railroad-cr",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "No U-turn railroad crossing",
    fact: "Never make a U-turn at or on a railroad crossing.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-u-turn-one-way-street-never-make-a-u-turn-on-a-one-way-street",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "No U-turn one-way street",
    fact: "Never make a U-turn on a one-way street.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-u-turn-fire-station-never-make-a-u-turn-in-front-of-a-fire-station",
    section: "Section 4: Navigating the Roads",
    page: 13,
    topic: "No U-turn fire station",
    fact: "Never make a U-turn in front of a fire station and never use a fire station driveway to turn around.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-two-way-to-two-way-a-left-turn-from-a-two-way-street-should",
    section: "Section 4: Navigating the Roads",
    page: 14,
    topic: "Left turn two-way to two-way",
    fact: "A left turn from a two-way street should start in the left lane closest to the middle and end in the left lane closest to the middle in the new direction.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-lane-path-a-right-turn-should-begin-and-end-in-the-lane-clo",
    section: "Section 4: Navigating the Roads",
    page: 14,
    topic: "Right turn lane path",
    fact: "A right turn should begin and end in the lane closest to the right edge without swinging wide.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-two-way-to-one-way-a-left-turn-from-a-two-way-street-onto-a",
    section: "Section 4: Navigating the Roads",
    page: 14,
    topic: "Left turn two-way to one-way",
    fact: "A left turn from a two-way street onto a one-way street starts from the far-left lane and may end in any open lane if there are three or more lanes.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-one-way-to-two-way-a-left-turn-from-a-one-way-street-onto-a",
    section: "Section 4: Navigating the Roads",
    page: 14,
    topic: "Left turn one-way to two-way",
    fact: "A left turn from a one-way street onto a two-way street starts from the far-left lane and ends in the lane closest to the middle in the new direction.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-left-turn-one-way-to-one-way-a-left-turn-from-one-one-way-street-to-an",
    section: "Section 4: Navigating the Roads",
    page: 15,
    topic: "Left turn one-way to one-way",
    fact: "A left turn from one one-way street to another starts from the far-left lane; bicyclists may use the left-turn lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-turn-one-way-to-one-way-a-right-turn-from-one-one-way-street-to",
    section: "Section 4: Navigating the Roads",
    page: 15,
    topic: "Right turn one-way to one-way",
    fact: "A right turn from one one-way street to another starts in the far-right lane and may end in any lane if safe.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-braking-method-to-brake-remove-your-foot-from-the-accelerator-let-the",
    section: "Section 4: Navigating the Roads",
    page: 15,
    topic: "Braking method",
    fact: "To brake, remove your foot from the accelerator, let the vehicle slow, and lightly press the brake until stopped.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-limit-line-stopping-when-stopping-at-a-limit-line-do-not-cross-over-it",
    section: "Section 4: Navigating the Roads",
    page: 15,
    topic: "Limit line stopping",
    fact: "When stopping at a limit line, do not cross over it.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-stopped-behind-vehicle-space-when-stopping-behind-another-vehicle-leav",
    section: "Section 4: Navigating the Roads",
    page: 15,
    topic: "Stopped behind vehicle space",
    fact: "When stopping behind another vehicle, leave enough space to see its rear wheels.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-highway-traffic-right-of-way-highway-traffic-has-the-right-of-way-when",
    section: "Section 4: Navigating the Roads",
    page: 15,
    topic: "Highway traffic right-of-way",
    fact: "Highway traffic has the right-of-way when merging onto a highway.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-on-ramp-proper-lane-when-entering-a-highway-be-in-the-proper-lane-on-t",
    section: "Section 4: Navigating the Roads",
    page: 15,
    topic: "On-ramp proper lane",
    fact: "When entering a highway, be in the proper lane on the on-ramp.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-merge-when-safe-no-stop-merge-into-highway-traffic-when-safe-and-do-no",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Merge when safe no stop",
    fact: "Merge into highway traffic when safe and do not stop unless absolutely necessary.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-merge-space-merge-into-a-space-large-enough-for-your-vehicle-to-safely",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Merge space",
    fact: "Merge into a space large enough for your vehicle to safely join the lane.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-merge-mirrors-and-signals-use-mirrors-and-turn-signals-when-merging",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Merge mirrors and signals",
    fact: "Use mirrors and turn signals when merging.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-merge-shoulder-check-turn-your-head-quickly-to-look-over-your-shoulder",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Merge shoulder check",
    fact: "Turn your head quickly to look over your shoulder before changing lanes or merging.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-solid-line-merging-do-not-cross-solid-lines-when-merging-or-exiting",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "No solid line merging",
    fact: "Do not cross solid lines when merging or exiting.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-multiple-lane-changes-when-crossing-several-lanes-signal-and-cross-one",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Multiple lane changes",
    fact: "When crossing several lanes, signal and cross one lane at a time, checking blind spots each time.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-exit-preparation-to-exit-a-highway-safely-know-your-exit-and-be-aware",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Exit preparation",
    fact: "To exit a highway safely, know your exit and be aware when it is approaching.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-exit-lane-changes-when-exiting-change-lanes-one-at-a-time-and-check-bl",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Exit lane changes",
    fact: "When exiting, change lanes one at a time and check blind spots.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-exit-speed-make-sure-you-are-at-a-safe-speed-to-exit",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Exit speed",
    fact: "Make sure you are at a safe speed to exit.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-blocked-intersection-with-green-light-even-with-a-green-light-do-not-e",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Blocked intersection with green light",
    fact: "Even with a green light, do not enter an intersection if pedestrians or vehicles are blocking your path.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-do-not-trust-right-signal-when-turning-left-do-not-assume-an-oncoming",
    section: "Section 4: Navigating the Roads",
    page: 16,
    topic: "Do not trust right signal",
    fact: "When turning left, do not assume an oncoming vehicle signaling right will turn before reaching you.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-judge-passing-space-before-passing-judge-whether-you-have-enough-space",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "Judge passing space",
    fact: "Before passing, judge whether you have enough space when approaching oncoming traffic, bicyclists, hills, curves, intersections, or obstructions.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-passing-hill-or-curve-distance-to-pass-safely-near-a-hill-or-curve-the",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "Passing hill or curve distance",
    fact: "To pass safely near a hill or curve, the hill or curve should be at least one-third of a mile ahead.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-look-ahead-before-passing-before-passing-look-ahead-for-road-condition",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "Look ahead before passing",
    fact: "Before passing, look ahead for road conditions that may cause other vehicles to move into your lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-do-not-pass-blind-hill-or-curve-do-not-pass-when-approaching-a-hill-or",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "Do not pass blind hill or curve",
    fact: "Do not pass when approaching a hill or curve if you cannot see whether traffic is approaching.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-passing-crossroads-driveways-do-not-pass-at-crossroads-or-driveways",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "No passing crossroads driveways",
    fact: "Do not pass at crossroads or driveways.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-passing-without-return-space-do-not-pass-unless-you-have-enough-spa",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "No passing without return space",
    fact: "Do not pass unless you have enough space to return to your lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-how-to-pass-to-pass-on-an-open-highway-signal-check-blind-spots-enter",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "How to pass",
    fact: "To pass on an open highway, signal, check blind spots, enter the passing lane, speed up, then signal and return.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-off-road-passing-never-drive-off-the-paved-or-main-traveled-part-of",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "No off-road passing",
    fact: "Never drive off the paved or main-traveled part of the road to pass.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-being-passed-if-another-vehicle-is-passing-or-signaling-to-pass-allow",
    section: "Section 4: Navigating the Roads",
    page: 17,
    topic: "Being passed",
    fact: "If another vehicle is passing or signaling to pass, allow it, maintain lane position, and maintain speed.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-parallel-parking-space-length-parallel-parking-requires-a-space-at-lea",
    section: "Section 4: Navigating the Roads",
    page: 18,
    topic: "Parallel parking space length",
    fact: "Parallel parking requires a space at least three feet longer than your vehicle.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-parallel-parking-signal-signal-to-show-you-plan-to-park",
    section: "Section 4: Navigating the Roads",
    page: 18,
    topic: "Parallel parking signal",
    fact: "Signal to show you plan to park.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-parallel-parking-side-distance-pull-alongside-the-vehicle-in-front-of",
    section: "Section 4: Navigating the Roads",
    page: 18,
    topic: "Parallel parking side distance",
    fact: "Pull alongside the vehicle in front of the space and leave about two feet between vehicles.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-parallel-parking-blind-spots-before-backing-into-a-parallel-parking-sp",
    section: "Section 4: Navigating the Roads",
    page: 18,
    topic: "Parallel parking blind spots",
    fact: "Before backing into a parallel parking space, check mirrors and blind spots for vehicles and pedestrians.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-parallel-parking-backing-angle-back-into-a-parallel-parking-space-at-a",
    section: "Section 4: Navigating the Roads",
    page: 18,
    topic: "Parallel parking backing angle",
    fact: "Back into a parallel parking space at about a 45-degree angle.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-parking-brake-after-parallel-parking-after-parallel-parking-turn-off-t",
    section: "Section 4: Navigating the Roads",
    page: 18,
    topic: "Parking brake after parallel parking",
    fact: "After parallel parking, turn off the vehicle and set the parking brake.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-look-before-exiting-parked-vehicle-before-exiting-a-parked-vehicle-loo",
    section: "Section 4: Navigating the Roads",
    page: 18,
    topic: "Look before exiting parked vehicle",
    fact: "Before exiting a parked vehicle, look carefully for passing vehicles, bicycles, and motorcycles.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-straight-line-backing-traffic-check-before-straight-line-backing-obser",
    section: "Section 4: Navigating the Roads",
    page: 19,
    topic: "Straight-line backing traffic check",
    fact: "Before straight-line backing, observe traffic and check blind spots.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-straight-line-backing-signal-activate-the-turn-signal-before-pulling-u",
    section: "Section 4: Navigating the Roads",
    page: 19,
    topic: "Straight-line backing signal",
    fact: "Activate the turn signal before pulling up to the curb and cancel it when completed.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-straight-line-backing-distance-back-in-a-straight-line-for-three-vehic",
    section: "Section 4: Navigating the Roads",
    page: 19,
    topic: "Straight-line backing distance",
    fact: "Back in a straight line for three vehicle lengths while remaining within three feet of the curb.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-straight-line-backing-control-back-at-a-smooth-safe-speed-and-adjust-t",
    section: "Section 4: Navigating the Roads",
    page: 19,
    topic: "Straight-line backing control",
    fact: "Back at a smooth, safe speed and adjust the steering wheel as needed.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-hill-parking-brake-when-parking-on-a-hill-set-the-parking-brake-and-le",
    section: "Section 4: Navigating the Roads",
    page: 19,
    topic: "Hill parking brake",
    fact: "When parking on a hill, set the parking brake and leave the vehicle in park or in gear for a manual transmission.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-sloping-driveway-parking-on-a-sloping-driveway-turn-the-wheels-so-the",
    section: "Section 4: Navigating the Roads",
    page: 19,
    topic: "Sloping driveway parking",
    fact: "On a sloping driveway, turn the wheels so the vehicle will not roll into the street.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-parking-sign-never-park-where-a-no-parking-sign-is-posted",
    section: "Section 4: Navigating the Roads",
    page: 20,
    topic: "No parking sign",
    fact: "Never park where a NO PARKING sign is posted.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-parking-on-crosswalk-never-park-on-a-marked-or-unmarked-crosswalk",
    section: "Section 4: Navigating the Roads",
    page: 20,
    topic: "No parking on crosswalk",
    fact: "Never park on a marked or unmarked crosswalk.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-parking-on-sidewalk-driveway-never-park-on-a-sidewalk-partially-blo",
    section: "Section 4: Navigating the Roads",
    page: 20,
    topic: "No parking on sidewalk driveway",
    fact: "Never park on a sidewalk, partially blocking a sidewalk, or in front of a driveway.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-parking-crosshatched-disabled-area-never-park-in-the-crosshatched-a",
    section: "Section 4: Navigating the Roads",
    page: 20,
    topic: "No parking crosshatched disabled area",
    fact: "Never park in the crosshatched area next to a designated disabled parking space.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-parking-zero-emission-space-never-park-in-a-space-designated-for-pa",
    section: "Section 4: Navigating the Roads",
    page: 20,
    topic: "No parking zero-emission space",
    fact: "Never park in a space designated for parking or fueling zero-emission vehicles unless driving a zero-emission vehicle.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-parking-tunnel-or-bridge-never-park-in-a-tunnel-or-on-a-bridge-unle",
    section: "Section 4: Navigating the Roads",
    page: 20,
    topic: "No parking tunnel or bridge",
    fact: "Never park in a tunnel or on a bridge unless signs permit it.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-parking-safety-zone-never-park-between-a-safety-zone-and-the-curb",
    section: "Section 4: Navigating the Roads",
    page: 20,
    topic: "No parking safety zone",
    fact: "Never park between a safety zone and the curb.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-freeway-parking-exception-do-not-stop-or-park-on-a-freeway-except-in-e",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Freeway parking exception",
    fact: "Do not stop or park on a freeway except in emergencies, when directed by law enforcement, or where specifically permitted.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-freeway-stopped-vehicle-position-if-you-must-stop-on-a-freeway-park-co",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Freeway stopped vehicle position",
    fact: "If you must stop on a freeway, park completely off the pavement and stay in the vehicle with doors locked until help arrives.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-right-signal-during-a-law-enforcement-stop-turn-on-your-r",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop right signal",
    fact: "During a law enforcement stop, turn on your right turn signal to acknowledge the officer.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-right-shoulder-move-completely-onto-the-right-shoulder-fo",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop right shoulder",
    fact: "Move completely onto the right shoulder for a law enforcement stop, even if in the carpool or HOV lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-well-lit-stop-in-a-well-lit-area-when-possible-during-a-l",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop well-lit",
    fact: "Stop in a well-lit area when possible during a law enforcement stop.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-radio-off-turn-off-the-radio-during-a-law-enforcement-sto",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop radio off",
    fact: "Turn off the radio during a law enforcement stop.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-stay-in-vehicle-remain-inside-the-vehicle-unless-directed",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop stay in vehicle",
    fact: "Remain inside the vehicle unless directed by the officer to get out.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-roll-window-roll-down-the-window-after-stopping-and-befor",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop roll window",
    fact: "Roll down the window after stopping and before the officer contacts you.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-hands-visible-drivers-and-passengers-should-place-their-h",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop hands visible",
    fact: "Drivers and passengers should place their hands in clear view before officer contact.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-reason-exception-an-officer-may-delay-stating-the-reason",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop reason exception",
    fact: "An officer may delay stating the reason for a stop if doing so is necessary to protect life or property from imminent threat.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-stop-reason-documented-the-reason-for-the-stop-must-be-documen",
    section: "Section 4: Navigating the Roads",
    page: 21,
    topic: "Officer stop reason documented",
    fact: "The reason for the stop must be documented on the citation or enforcement report.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-refusing-consent-to-search-if-an-officer-requests-permission-to-search",
    section: "Section 4: Navigating the Roads",
    page: 22,
    topic: "Refusing consent to search",
    fact: "If an officer requests permission to search, you may clearly say that you do not give permission, but you may not resist or obstruct a lawful search.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-limited-search-for-documents-if-the-driver-does-not-produce-required-d",
    section: "Section 4: Navigating the Roads",
    page: 22,
    topic: "Limited search for documents",
    fact: "If the driver does not produce required documents, officers may conduct a limited search for them.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-passenger-identification-request-passengers-can-decline-an-identificat",
    section: "Section 4: Navigating the Roads",
    page: 22,
    topic: "Passenger identification request",
    fact: "Passengers can decline an identification request unless circumstances legally require them to identify themselves.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-officer-exit-or-stay-order-during-a-traffic-stop-an-officer-may-legall",
    section: "Section 4: Navigating the Roads",
    page: 22,
    topic: "Officer exit or stay order",
    fact: "During a traffic stop, an officer may legally require the driver and passengers to exit or stay inside the vehicle.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-right-to-record-stop-drivers-and-passengers-generally-have-a-first-ame",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "Right to record stop",
    fact: "Drivers and passengers generally have a First Amendment right to record law enforcement interactions in public spaces.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-recording-disclosure-if-recording-a-law-enforcement-stop-you-should-im",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "Recording disclosure",
    fact: "If recording a law enforcement stop, you should immediately make that clear.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-concealed-reach-for-device-do-not-reach-into-concealed-areas-for-a",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "No concealed reach for device",
    fact: "Do not reach into concealed areas for a recording device without the officer’s permission.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-recording-device-protection-if-recording-does-not-interfere-with-lawfu",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "Recording device protection",
    fact: "If recording does not interfere with lawful duties, an officer cannot confiscate or delete the recording merely because you are recording.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-phone-unlock-refusal-in-general-you-may-deny-a-request-to-unlock-a-pho",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "Phone unlock refusal",
    fact: "In general, you may deny a request to unlock a phone or provide a password, though some circumstances may differ.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-retaliation-for-public-recording-government-employees-cannot-retali",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "No retaliation for public recording",
    fact: "Government employees cannot retaliate just because you recorded something in public.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-no-physical-resistance-even-if-you-believe-your-rights-were-violated-d",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "No physical resistance",
    fact: "Even if you believe your rights were violated, do not physically resist or use violence against an officer.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-complaint-right-the-public-has-a-right-to-file-a-complaint-against-a-l",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "Complaint right",
    fact: "The public has a right to file a complaint against a law enforcement agency, and government retaliation for doing so is illegal.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s4-protected-discrimination-categories-a-person-has-the-right-to-be-free",
    section: "Section 4: Navigating the Roads",
    page: 23,
    topic: "Protected discrimination categories",
    fact: "A person has the right to be free from discrimination based on protected characteristics during law enforcement interactions.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-yield-at-signals-and-signs-at-or-approaching-traffic-signals-or-signs",
    section: "Section 5: Laws and Rules of the Road",
    page: 24,
    topic: "Yield at signals and signs",
    fact: "At or approaching traffic signals or signs, yield to pedestrians, bicyclists, and other nearby vehicles that may have the right-of-way.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-right-turn-at-red-light-a-right-turn-at-a-red-light-is-allowed-only-if",
    section: "Section 5: Laws and Rules of the Road",
    page: 24,
    topic: "Right turn at red light",
    fact: "A right turn at a red light is allowed only if no NO TURN ON RED sign is posted, after stopping and yielding when safe.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-yellow-arrow-a-yellow-arrow-means-protected-turning-time-is-ending-sto",
    section: "Section 5: Laws and Rules of the Road",
    page: 25,
    topic: "Yellow arrow",
    fact: "A yellow arrow means protected turning time is ending; stop if safe or cautiously complete the turn if already in the intersection.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-flashing-yellow-arrow-a-flashing-yellow-arrow-allows-a-turn-after-yiel",
    section: "Section 5: Laws and Rules of the Road",
    page: 25,
    topic: "Flashing yellow arrow",
    fact: "A flashing yellow arrow allows a turn after yielding to oncoming traffic; the turn is not protected.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-green-arrow-a-green-arrow-means-go-in-the-arrow-direction-as-a-protect",
    section: "Section 5: Laws and Rules of the Road",
    page: 25,
    topic: "Green arrow",
    fact: "A green arrow means go in the arrow direction as a protected turn while oncoming vehicles are stopped.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-walk-signal-a-walk-or-walking-person-signal-means-pedestrians-may-cros",
    section: "Section 5: Laws and Rules of the Road",
    page: 25,
    topic: "WALK signal",
    fact: "A WALK or walking person signal means pedestrians may cross the street.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-don-t-walk-signal-a-don-t-walk-or-raised-hand-signal-means-pedestrians",
    section: "Section 5: Laws and Rules of the Road",
    page: 25,
    topic: "DON’T WALK signal",
    fact: "A DON’T WALK or raised hand signal means pedestrians may not cross the street.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-diagonal-crossing-at-a-diagonal-crossing-pedestrians-may-cross-in-any",
    section: "Section 5: Laws and Rules of the Road",
    page: 26,
    topic: "Diagonal crossing",
    fact: "At a diagonal crossing, pedestrians may cross in any direction only when the WALK signal allows it.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-pedestrian-sounds-sounds-such-as-beeps-chirps-or-verbal-messages-help",
    section: "Section 5: Laws and Rules of the Road",
    page: 25,
    topic: "Pedestrian sounds",
    fact: "Sounds such as beeps, chirps, or verbal messages help blind or visually impaired pedestrians cross.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-pedestrian-push-button-a-pedestrian-push-button-activates-the-walk-or",
    section: "Section 5: Laws and Rules of the Road",
    page: 26,
    topic: "Pedestrian push button",
    fact: "A pedestrian push button activates the WALK or walking person signal.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-no-pedestrian-signals-if-no-pedestrian-signals-are-present-pedestrians",
    section: "Section 5: Laws and Rules of the Road",
    page: 26,
    topic: "No pedestrian signals",
    fact: "If no pedestrian signals are present, pedestrians should obey vehicle traffic signals.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-warning-signs-obey-drivers-must-obey-all-warning-signs-regardless-of-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 26,
    topic: "Warning signs obey",
    fact: "Drivers must obey all warning signs regardless of their shape or color.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-regulatory-sign-red-and-white-regulatory-signs-communicate-instruction",
    section: "Section 5: Laws and Rules of the Road",
    page: 26,
    topic: "Regulatory sign",
    fact: "Red and white regulatory signs communicate instructions drivers must follow.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-enter-sign-a-do-not-enter-sign-means-do-not-enter-the-road-or-r",
    section: "Section 5: Laws and Rules of the Road",
    page: 26,
    topic: "DO NOT ENTER sign",
    fact: "A DO NOT ENTER sign means do not enter the road or ramp where posted.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-red-circle-slash-a-red-circle-with-a-slash-shows-something-you-cannot",
    section: "Section 5: Laws and Rules of the Road",
    page: 26,
    topic: "Red circle slash",
    fact: "A red circle with a slash shows something you cannot do.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-railroad-emergency-sign-many-railroad-crossings-have-a-blue-and-white",
    section: "Section 5: Laws and Rules of the Road",
    page: 27,
    topic: "Railroad emergency sign",
    fact: "Many railroad crossings have a blue-and-white sign explaining what to do for emergencies or a stalled vehicle on the tracks.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-diamond-warning-sign-a-diamond-shaped-sign-warns-of-specific-road-cond",
    section: "Section 5: Laws and Rules of the Road",
    page: 27,
    topic: "Diamond warning sign",
    fact: "A diamond-shaped sign warns of specific road conditions and dangers ahead.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-white-rectangular-sign-a-white-rectangular-sign-communicates-important",
    section: "Section 5: Laws and Rules of the Road",
    page: 27,
    topic: "White rectangular sign",
    fact: "A white rectangular sign communicates important rules drivers must obey.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-road-user-warning-signs-warning-signs-can-warn-of-conditions-related-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 27,
    topic: "Road user warning signs",
    fact: "Warning signs can warn of conditions related to pedestrians, bicyclists, schools, playgrounds, school buses, and loading zones.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-no-u-turn-sign-chart-item-the-handbook-sign-chart-includes-the-no-u-tu",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "No U-Turn sign chart item",
    fact: "The handbook sign chart includes the No U-Turn sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-no-left-turn-sign-chart-item-the-handbook-sign-chart-includes-the-no-l",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "No Left Turn sign chart item",
    fact: "The handbook sign chart includes the No Left Turn sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-no-right-turn-sign-chart-item-the-handbook-sign-chart-includes-the-no",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "No Right Turn sign chart item",
    fact: "The handbook sign chart includes the No Right Turn sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-two-way-traffic-sign-chart-item-the-handbook-sign-chart-includes-the-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Two Way Traffic sign chart item",
    fact: "The handbook sign chart includes the Two Way Traffic sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-no-parking-any-time-sign-chart-item-the-handbook-sign-chart-includes-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "No Parking Any Time sign chart item",
    fact: "The handbook sign chart includes the No Parking Any Time sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-yield-to-uphill-traffic-sign-chart-item-the-handbook-sign-chart-includ",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Yield to Uphill Traffic sign chart item",
    fact: "The handbook sign chart includes the Yield to Uphill Traffic sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-one-way-sign-chart-item-the-handbook-sign-chart-includes-the-one-way-s",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "One Way sign chart item",
    fact: "The handbook sign chart includes the One Way sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-emergency-parking-only-sign-chart-item-the-handbook-sign-chart-include",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Emergency Parking Only sign chart item",
    fact: "The handbook sign chart includes the Emergency Parking Only sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-no-turns-sign-chart-item-the-handbook-sign-chart-includes-the-no-turns",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "No Turns sign chart item",
    fact: "The handbook sign chart includes the No Turns sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-left-turn-yield-on-green-sign-chart-item-the-handbook-sign-chart-inclu",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Left Turn Yield on Green sign chart item",
    fact: "The handbook sign chart includes the Left Turn Yield on Green sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-do-not-pass-sign-chart-item-the-handbook-sign-chart-includes-the-do-no",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Do Not Pass sign chart item",
    fact: "The handbook sign chart includes the Do Not Pass sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-do-not-block-intersection-sign-chart-item-the-handbook-sign-chart-incl",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Do Not Block Intersection sign chart item",
    fact: "The handbook sign chart includes the Do Not Block Intersection sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-slower-traffic-keep-right-sign-chart-item-the-handbook-sign-chart-incl",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Slower Traffic Keep Right sign chart item",
    fact: "The handbook sign chart includes the Slower Traffic Keep Right sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-keep-right-sign-chart-item-the-handbook-sign-chart-includes-the-keep-r",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Keep Right sign chart item",
    fact: "The handbook sign chart includes the Keep Right sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-3-tracks-sign-chart-item-the-handbook-sign-chart-includes-the-3-tracks",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "3 Tracks sign chart item",
    fact: "The handbook sign chart includes the 3 Tracks sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-road-closed-ahead-sign-chart-item-the-handbook-sign-chart-includes-the",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Road Closed Ahead sign chart item",
    fact: "The handbook sign chart includes the Road Closed Ahead sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-road-machinery-ahead-sign-chart-item-the-handbook-sign-chart-includes",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Road Machinery Ahead sign chart item",
    fact: "The handbook sign chart includes the Road Machinery Ahead sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-shoulder-work-ahead-sign-chart-item-the-handbook-sign-chart-includes-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Shoulder Work Ahead sign chart item",
    fact: "The handbook sign chart includes the Shoulder Work Ahead sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-thru-traffic-merge-left-sign-chart-item-the-handbook-sign-chart-includ",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Thru Traffic Merge Left sign chart item",
    fact: "The handbook sign chart includes the Thru Traffic Merge Left sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-guide-sign-sign-chart-item-the-handbook-sign-chart-includes-the-guide",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Guide Sign sign chart item",
    fact: "The handbook sign chart includes the Guide Sign sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-hazardous-load-placard-sign-chart-item-the-handbook-sign-chart-include",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Hazardous Load Placard sign chart item",
    fact: "The handbook sign chart includes the Hazardous Load Placard sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-slow-moving-vehicle-sign-chart-item-the-handbook-sign-chart-includes-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 28,
    topic: "Slow Moving Vehicle sign chart item",
    fact: "The handbook sign chart includes the Slow Moving Vehicle sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-slippery-when-wet-sign-chart-item-the-handbook-sign-chart-includes-the",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Slippery When Wet sign chart item",
    fact: "The handbook sign chart includes the Slippery When Wet sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-merging-traffic-sign-chart-item-the-handbook-sign-chart-includes-the-m",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Merging Traffic sign chart item",
    fact: "The handbook sign chart includes the Merging Traffic sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-divided-highway-sign-chart-item-the-handbook-sign-chart-includes-the-d",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Divided Highway sign chart item",
    fact: "The handbook sign chart includes the Divided Highway sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-lane-ends-sign-chart-item-the-handbook-sign-chart-includes-the-lane-en",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Lane Ends sign chart item",
    fact: "The handbook sign chart includes the Lane Ends sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-end-divided-highway-sign-chart-item-the-handbook-sign-chart-includes-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "End Divided Highway sign chart item",
    fact: "The handbook sign chart includes the End Divided Highway sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-traffic-signal-ahead-sign-chart-item-the-handbook-sign-chart-includes",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Traffic Signal Ahead sign chart item",
    fact: "The handbook sign chart includes the Traffic Signal Ahead sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-pedestrian-crossing-sign-chart-item-the-handbook-sign-chart-includes-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Pedestrian Crossing sign chart item",
    fact: "The handbook sign chart includes the Pedestrian Crossing sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-added-lane-sign-chart-item-the-handbook-sign-chart-includes-the-added",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Added Lane sign chart item",
    fact: "The handbook sign chart includes the Added Lane sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-crossroad-sign-chart-item-the-handbook-sign-chart-includes-the-crossro",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Crossroad sign chart item",
    fact: "The handbook sign chart includes the Crossroad sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-stop-ahead-sign-chart-item-the-handbook-sign-chart-includes-the-stop-a",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Stop Ahead sign chart item",
    fact: "The handbook sign chart includes the Stop Ahead sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-yield-ahead-sign-chart-item-the-handbook-sign-chart-includes-the-yield",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Yield Ahead sign chart item",
    fact: "The handbook sign chart includes the Yield Ahead sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-directional-arrow-sign-chart-item-the-handbook-sign-chart-includes-the",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Directional Arrow sign chart item",
    fact: "The handbook sign chart includes the Directional Arrow sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-curve-sign-chart-item-the-handbook-sign-chart-includes-the-curve-sign",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Curve sign chart item",
    fact: "The handbook sign chart includes the Curve sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-t-intersection-sign-chart-item-the-handbook-sign-chart-includes-the-t",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "T Intersection sign chart item",
    fact: "The handbook sign chart includes the T Intersection sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-winding-road-sign-chart-item-the-handbook-sign-chart-includes-the-wind",
    section: "Section 5: Laws and Rules of the Road",
    page: 29,
    topic: "Winding Road sign chart item",
    fact: "The handbook sign chart includes the Winding Road sign or placard as a sign drivers should recognize.",
    priority: "low" as 'high' | 'medium' | 'low',
    contentType: "sign" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: false
  },
  {
    id: "pdf-fact-s5-right-of-way-first-arrival-the-first-vehicle-to-arrive-at-an-intersect",
    section: "Section 5: Laws and Rules of the Road",
    page: 27,
    topic: "Right-of-way first arrival",
    fact: "The first vehicle to arrive at an intersection has the right-of-way, and others must wait.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-give-up-right-of-way-to-avoid-collision-never-assume-others-will-give",
    section: "Section 5: Laws and Rules of the Road",
    page: 27,
    topic: "Give up right-of-way to avoid collision",
    fact: "Never assume others will give right-of-way; give up right-of-way when it helps prevent collisions.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-intersection-definition-an-intersection-is-any-place-where-one-road-me",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Intersection definition",
    fact: "An intersection is any place where one road meets another road.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-controlled-and-uncontrolled-intersections-controlled-intersections-hav",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Controlled and uncontrolled intersections",
    fact: "Controlled intersections have signs or signals, while uncontrolled and blind intersections do not.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-intersection-approach-scan-before-entering-an-intersection-look-left-r",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Intersection approach scan",
    fact: "Before entering an intersection, look left, right, and ahead for vehicles, bicyclists, and pedestrians.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-pedestrians-always-right-of-way-pedestrians-always-have-the-right-of-w",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Pedestrians always right-of-way",
    fact: "Pedestrians always have the right-of-way at intersections.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-no-sign-intersection-first-arrival-at-an-intersection-without-stop-or",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "No sign intersection first arrival",
    fact: "At an intersection without STOP or YIELD signs, the vehicle that arrives first has right-of-way.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-same-time-yield-right-if-you-arrive-at-the-same-time-as-another-vehicl",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Same time yield right",
    fact: "If you arrive at the same time as another vehicle, pedestrian, or bicyclist, yield to the one on your right.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-four-way-stop-order-at-a-four-way-stop-stop-first-and-proceed-using-ri",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Four-way stop order",
    fact: "At a four-way stop, stop first and proceed using right-of-way rules. ",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-t-intersection-through-road-at-an-uncontrolled-t-intersection-traffic",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "T intersection through road",
    fact: "At an uncontrolled T intersection, traffic on the through road has the right-of-way.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-left-turn-right-of-way-when-turning-left-yield-to-pedestrians-and-appr",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Left turn right-of-way",
    fact: "When turning left, yield to pedestrians and approaching vehicles close enough to be dangerous.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-right-turn-vulnerable-road-users-when-turning-right-check-for-pedestri",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Right turn vulnerable road users",
    fact: "When turning right, check for pedestrians, motorcycles, and bicycles next to you.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-green-signal-pedestrians-at-a-green-light-proceed-with-caution-because",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Green signal pedestrians",
    fact: "At a green light, proceed with caution because pedestrians still have the right-of-way.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-entering-traffic-yield-when-entering-traffic-proceed-with-caution-and",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Entering traffic yield",
    fact: "When entering traffic, proceed with caution and yield to traffic already in the lanes.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-block-intersection-it-is-illegal-to-stop-or-block-an-intersecti",
    section: "Section 5: Laws and Rules of the Road",
    page: 30,
    topic: "Do not block intersection",
    fact: "It is illegal to stop or block an intersection if there is not enough space to completely cross before the light turns red.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-roundabout-direction-in-a-roundabout-traffic-travels-in-one-direction",
    section: "Section 5: Laws and Rules of the Road",
    page: 31,
    topic: "Roundabout direction",
    fact: "In a roundabout, traffic travels in one direction around a central island.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-roundabout-slow-approach-slow-down-as-you-approach-a-roundabout",
    section: "Section 5: Laws and Rules of the Road",
    page: 31,
    topic: "Roundabout slow approach",
    fact: "Slow down as you approach a roundabout.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-roundabout-yield-yield-to-all-traffic-already-in-the-roundabout",
    section: "Section 5: Laws and Rules of the Road",
    page: 31,
    topic: "Roundabout yield",
    fact: "Yield to all traffic already in the roundabout.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-roundabout-enter-right-enter-a-roundabout-heading-to-the-right-when-th",
    section: "Section 5: Laws and Rules of the Road",
    page: 31,
    topic: "Roundabout enter right",
    fact: "Enter a roundabout heading to the right when there is a safe gap.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-roundabout-no-stop-or-pass-travel-counterclockwise-in-a-roundabout-and",
    section: "Section 5: Laws and Rules of the Road",
    page: 31,
    topic: "Roundabout no stop or pass",
    fact: "Travel counterclockwise in a roundabout and do not stop or pass.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-roundabout-signal-signal-when-changing-lanes-or-exiting-a-roundabout",
    section: "Section 5: Laws and Rules of the Road",
    page: 31,
    topic: "Roundabout signal",
    fact: "Signal when changing lanes or exiting a roundabout.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-roundabout-missed-exit-if-you-miss-your-exit-in-a-roundabout-continue",
    section: "Section 5: Laws and Rules of the Road",
    page: 31,
    topic: "Roundabout missed exit",
    fact: "If you miss your exit in a roundabout, continue around until you return to it.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-roundabout-lane-choice-in-a-multi-lane-roundabout-choose-the-entry-or",
    section: "Section 5: Laws and Rules of the Road",
    page: 31,
    topic: "Roundabout lane choice",
    fact: "In a multi-lane roundabout, choose the entry or exit lane based on your destination.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-pedestrians-right-of-way-and-rules-pedestrians-have-the-right-of-way-b",
    section: "Section 5: Laws and Rules of the Road",
    page: 32,
    topic: "Pedestrians right-of-way and rules",
    fact: "Pedestrians have the right-of-way, but they must also follow rules of the road.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-pedestrian-crossing-caution-when-a-pedestrian-is-crossing-with-or-with",
    section: "Section 5: Laws and Rules of the Road",
    page: 32,
    topic: "Pedestrian crossing caution",
    fact: "When a pedestrian is crossing with or without a crosswalk, drivers must use caution, reduce speed, or stop so they can finish crossing safely.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-crosswalk-right-of-way-pedestrians-have-the-right-of-way-in-marked-and",
    section: "Section 5: Laws and Rules of the Road",
    page: 32,
    topic: "Crosswalk right-of-way",
    fact: "Pedestrians have the right-of-way in marked and unmarked crosswalks.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-limit-line-before-crosswalk-if-a-limit-line-appears-before-a-crosswalk",
    section: "Section 5: Laws and Rules of the Road",
    page: 32,
    topic: "Limit line before crosswalk",
    fact: "If a limit line appears before a crosswalk, stop at the limit line and allow pedestrians to cross.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-change-lanes-in-front-of-truck-do-not-change-lanes-directly-in",
    section: "Section 5: Laws and Rules of the Road",
    page: 33,
    topic: "Do not change lanes in front of truck",
    fact: "Do not change lanes directly in front of large vehicles to reach an exit or turn.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-pass-trucks-on-left-pass-large-vehicles-on-the-left-and-move-ahead-aft",
    section: "Section 5: Laws and Rules of the Road",
    page: 33,
    topic: "Pass trucks on left",
    fact: "Pass large vehicles on the left and move ahead after passing.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-drive-alongside-truck-do-not-drive-next-to-a-large-vehicle-long",
    section: "Section 5: Laws and Rules of the Road",
    page: 33,
    topic: "Do not drive alongside truck",
    fact: "Do not drive next to a large vehicle longer than necessary.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-tailgate-truck-do-not-follow-large-vehicles-too-closely",
    section: "Section 5: Laws and Rules of the Road",
    page: 33,
    topic: "Do not tailgate truck",
    fact: "Do not follow large vehicles too closely.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-truck-speed-appearance-do-not-underestimate-a-large-vehicle-s-size-or",
    section: "Section 5: Laws and Rules of the Road",
    page: 33,
    topic: "Truck speed appearance",
    fact: "Do not underestimate a large vehicle’s size or speed because it may appear to travel slower.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-safety-zone-definition-safety-zones-are-spaces-for-pedestrians-waiting",
    section: "Section 5: Laws and Rules of the Road",
    page: 34,
    topic: "Safety zone definition",
    fact: "Safety zones are spaces for pedestrians waiting for buses, streetcars, and trolleys, marked by raised buttons or markers.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-no-driving-through-safety-zone-do-not-drive-through-a-safety-zone-unde",
    section: "Section 5: Laws and Rules of the Road",
    page: 34,
    topic: "No driving through safety zone",
    fact: "Do not drive through a safety zone under any condition.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-pass-light-rail-left-do-not-pass-a-light-rail-vehicle-or-street",
    section: "Section 5: Laws and Rules of the Road",
    page: 34,
    topic: "Do not pass light rail left",
    fact: "Do not pass a light rail vehicle or streetcar on the left unless tracks are too close to the right side, you are on a one-way street, or an officer directs it.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-light-rail-same-rights-light-rail-vehicles-on-public-roads-have-the-sa",
    section: "Section 5: Laws and Rules of the Road",
    page: 34,
    topic: "Light rail same rights",
    fact: "Light rail vehicles on public roads have the same rights and responsibilities as other vehicles.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-never-turn-in-front-of-light-rail-never-turn-in-front-of-an-approachin",
    section: "Section 5: Laws and Rules of the Road",
    page: 34,
    topic: "Never turn in front of light rail",
    fact: "Never turn in front of an approaching light rail vehicle.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-check-light-rail-before-tracks-check-for-approaching-light-rail-vehicl",
    section: "Section 5: Laws and Rules of the Road",
    page: 34,
    topic: "Check light rail before tracks",
    fact: "Check for approaching light rail vehicles before turning across tracks and complete the turn only when the signal allows.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-motorcycle-same-rights-motorcyclists-have-the-same-rights-and-responsi",
    section: "Section 5: Laws and Rules of the Road",
    page: 34,
    topic: "Motorcycle same rights",
    fact: "Motorcyclists have the same rights and responsibilities as other drivers.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-check-for-motorcycles-check-for-motorcycles-and-use-mirrors-when-chang",
    section: "Section 5: Laws and Rules of the Road",
    page: 34,
    topic: "Check for motorcycles",
    fact: "Check for motorcycles and use mirrors when changing lanes or entering a road because they are harder to see.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-give-motorcycle-full-lane-whenever-possible-give-a-motorcycle-the-full",
    section: "Section 5: Laws and Rules of the Road",
    page: 35,
    topic: "Give motorcycle full lane",
    fact: "Whenever possible, give a motorcycle the full lane.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-pass-motorcycle-same-lane-never-try-to-pass-a-motorcycle-in-the",
    section: "Section 5: Laws and Rules of the Road",
    page: 35,
    topic: "Do not pass motorcycle same lane",
    fact: "Never try to pass a motorcycle in the same lane as you.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-check-for-motorcycles-before-door-check-for-motorcyclists-before-openi",
    section: "Section 5: Laws and Rules of the Road",
    page: 35,
    topic: "Check for motorcycles before door",
    fact: "Check for motorcyclists before opening your door next to traffic.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-move-aside-for-motorcycles-when-possible-move-to-one-side-of-your-lane",
    section: "Section 5: Laws and Rules of the Road",
    page: 35,
    topic: "Move aside for motorcycles",
    fact: "When possible, move to one side of your lane to give motorcyclists more room to pass.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-move-over-stationary-emergency-vehicle-when-approaching-a-stationary-e",
    section: "Section 5: Laws and Rules of the Road",
    page: 35,
    topic: "Move over stationary emergency vehicle",
    fact: "When approaching a stationary emergency vehicle with flashing lights, move over and slow down.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-emergency-vehicle-in-intersection-if-you-are-in-an-intersection-when-a",
    section: "Section 5: Laws and Rules of the Road",
    page: 35,
    topic: "Emergency vehicle in intersection",
    fact: "If you are in an intersection when an emergency vehicle approaches, continue through, then move right and stop when safe.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-obey-officers-firefighters-obey-any-direction-from-a-law-enforcement-o",
    section: "Section 5: Laws and Rules of the Road",
    page: 35,
    topic: "Obey officers firefighters",
    fact: "Obey any direction from a law enforcement officer or firefighter even if it conflicts with signs, signals, or laws.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-drive-to-emergency-scene-you-can-be-arrested-for-driving-to-the",
    section: "Section 5: Laws and Rules of the Road",
    page: 35,
    topic: "Do not drive to emergency scene",
    fact: "You can be arrested for driving to the scene of a fire, collision, or disaster because it interferes with responders.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-slow-moving-vehicle-examples-slow-moving-motorized-vehicles-can-includ",
    section: "Section 5: Laws and Rules of the Road",
    page: 36,
    topic: "Slow-moving vehicle examples",
    fact: "Slow-moving motorized vehicles can include scooters, neighborhood electric vehicles, and golf carts.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-adjust-speed-for-slow-vehicles-drivers-should-adjust-speed-to-share-th",
    section: "Section 5: Laws and Rules of the Road",
    page: 36,
    topic: "Adjust speed for slow vehicles",
    fact: "Drivers should adjust speed to share the road with slow-moving vehicles.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-bicycles-same-rights-bicyclists-have-the-same-rights-and-responsibilit",
    section: "Section 5: Laws and Rules of the Road",
    page: 36,
    topic: "Bicycles same rights",
    fact: "Bicyclists have the same rights and responsibilities as other drivers.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-bicyclists-freeway-allowed-bicyclists-may-legally-ride-on-some-freeway",
    section: "Section 5: Laws and Rules of the Road",
    page: 36,
    topic: "Bicyclists freeway allowed",
    fact: "Bicyclists may legally ride on some freeway sections when no alternate route exists and bicycling is not forbidden.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-bicyclists-move-left-hazards-bicyclists-may-move-left-to-avoid-hazards",
    section: "Section 5: Laws and Rules of the Road",
    page: 36,
    topic: "Bicyclists move left hazards",
    fact: "Bicyclists may move left to avoid hazards such as vehicles, animals, or debris.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-bicyclists-one-way-left-bicyclists-may-choose-to-ride-near-the-left-cu",
    section: "Section 5: Laws and Rules of the Road",
    page: 36,
    topic: "Bicyclists one-way left",
    fact: "Bicyclists may choose to ride near the left curb or edge of a one-way street.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-bicyclists-crosswalk-pedestrian-bicyclists-may-use-crosswalks-by-stopp",
    section: "Section 5: Laws and Rules of the Road",
    page: 36,
    topic: "Bicyclists crosswalk pedestrian",
    fact: "Bicyclists may use crosswalks by stopping and crossing as pedestrians.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-passing-bicyclist-lane-change-to-pass-a-bicyclist-in-the-travel-lane-d",
    section: "Section 5: Laws and Rules of the Road",
    page: 36,
    topic: "Passing bicyclist lane change",
    fact: "To pass a bicyclist in the travel lane, drivers may need to change lanes and then return safely.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-bicycle-passing-three-feet-if-no-lane-change-if-you-cannot-change-lane",
    section: "Section 5: Laws and Rules of the Road",
    page: 37,
    topic: "Bicycle passing three feet if no lane change",
    fact: "If you cannot change lanes to pass a bicyclist, allow at least three feet of clearance.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-do-not-pass-bicyclist-without-three-feet-if-you-cannot-give-three-feet",
    section: "Section 5: Laws and Rules of the Road",
    page: 37,
    topic: "Do not pass bicyclist without three feet",
    fact: "If you cannot give three feet of space, do not pass the cyclist until the clearance can be given.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-bike-lane-turn-entry-limit-enter-a-bike-lane-no-more-than-200-feet-bef",
    section: "Section 5: Laws and Rules of the Road",
    page: 37,
    topic: "Bike lane turn entry limit",
    fact: "Enter a bike lane no more than 200 feet before starting a turn.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-work-zone-slow-and-space-in-work-zones-slow-down-and-allow-extra-space",
    section: "Section 5: Laws and Rules of the Road",
    page: 37,
    topic: "Work zone slow and space",
    fact: "In work zones, slow down and allow extra space between vehicles.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-work-zone-expect-sudden-stops-in-work-zones-expect-sudden-slowing-or-s",
    section: "Section 5: Laws and Rules of the Road",
    page: 37,
    topic: "Work zone expect sudden stops",
    fact: "In work zones, expect sudden slowing or stopping and watch for drivers changing lanes.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-work-zone-obey-flaggers-obey-special-signs-or-instructions-from-worker",
    section: "Section 5: Laws and Rules of the Road",
    page: 37,
    topic: "Work zone obey flaggers",
    fact: "Obey special signs or instructions from workers such as flaggers.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-school-bus-yellow-lights-school-bus-flashing-yellow-lights-warn-driver",
    section: "Section 5: Laws and Rules of the Road",
    page: 38,
    topic: "School bus yellow lights",
    fact: "School bus flashing yellow lights warn drivers to slow down and prepare to stop.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-railroad-flashing-red-flashing-red-railroad-warning-lights-mean-you-mu",
    section: "Section 5: Laws and Rules of the Road",
    page: 39,
    topic: "Railroad flashing red",
    fact: "Flashing red railroad warning lights mean you must stop and wait until they stop flashing, even if the gate rises.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-railroad-lowered-gates-do-not-go-under-lowering-gates-or-around-lowere",
    section: "Section 5: Laws and Rules of the Road",
    page: 39,
    topic: "Railroad lowered gates",
    fact: "Do not go under lowering gates or around lowered gates.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-railroad-no-train-at-lowered-gate-if-gates-are-lowered-and-no-train-is",
    section: "Section 5: Laws and Rules of the Road",
    page: 39,
    topic: "Railroad no train at lowered gate",
    fact: "If gates are lowered and no train is approaching, call the posted railroad emergency number or 911.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-railroad-stop-look-listen-at-railroad-crossings-stop-look-and-listen-o",
    section: "Section 5: Laws and Rules of the Road",
    page: 39,
    topic: "Railroad stop look listen",
    fact: "At railroad crossings, stop, look, and listen; only cross when safe.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-railroad-expect-any-track-expect-a-train-on-any-track-at-any-time-trav",
    section: "Section 5: Laws and Rules of the Road",
    page: 39,
    topic: "Railroad expect any track",
    fact: "Expect a train on any track, at any time, traveling in either direction.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-railroad-no-stopping-tracks-never-stop-on-railroad-tracks-or-start-cro",
    section: "Section 5: Laws and Rules of the Road",
    page: 39,
    topic: "Railroad no stopping tracks",
    fact: "Never stop on railroad tracks or start crossing unless there is room to completely cross.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-railroad-required-stop-vehicles-watch-for-vehicles-that-must-stop-befo",
    section: "Section 5: Laws and Rules of the Road",
    page: 39,
    topic: "Railroad required-stop vehicles",
    fact: "Watch for vehicles that must stop before tracks, including buses, school buses, and vehicles with hazardous materials placards.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-overloaded-vehicle-drivers-must-not-operate-a-vehicle-so-overloaded-th",
    section: "Section 5: Laws and Rules of the Road",
    page: 40,
    topic: "Overloaded vehicle",
    fact: "Drivers must not operate a vehicle so overloaded they cannot control it or see ahead or to the sides.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-unsecured-load-drivers-must-not-operate-a-vehicle-with-an-unsecured-lo",
    section: "Section 5: Laws and Rules of the Road",
    page: 40,
    topic: "Unsecured load",
    fact: "Drivers must not operate a vehicle with an unsecured load that is a safety hazard.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-rear-cargo-night-lights-at-night-cargo-extending-more-than-four-feet-f",
    section: "Section 5: Laws and Rules of the Road",
    page: 40,
    topic: "Rear cargo night lights",
    fact: "At night, cargo extending more than four feet from the rear bumper must be marked with two red lights.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-pickup-bed-animals-animals-transported-in-the-back-of-a-pickup-or-truc",
    section: "Section 5: Laws and Rules of the Road",
    page: 40,
    topic: "Pickup bed animals",
    fact: "Animals transported in the back of a pickup or truck must be properly secured to prevent falling, jumping, or being thrown.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-driver-visible-video-monitor-drivers-may-not-operate-a-vehicle-with-a",
    section: "Section 5: Laws and Rules of the Road",
    page: 40,
    topic: "Driver visible video monitor",
    fact: "Drivers may not operate a vehicle with a video monitor visible to the driver unless it displays vehicle information, navigation, media player, or radio.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-no-throwing-burning-substances-drivers-must-not-throw-cigarettes-cigar",
    section: "Section 5: Laws and Rules of the Road",
    page: 40,
    topic: "No throwing burning substances",
    fact: "Drivers must not throw cigarettes, cigars, or other flaming or glowing substances from a vehicle.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-windshield-obstruction-ban-drivers-must-not-put-signs-or-objects-on-th",
    section: "Section 5: Laws and Rules of the Road",
    page: 41,
    topic: "Windshield obstruction ban",
    fact: "Drivers must not put signs or objects on the windshield or side rear windows that block view or hang objects on the mirror.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-side-windows-behind-driver-objects-may-be-placed-on-side-windows-behin",
    section: "Section 5: Laws and Rules of the Road",
    page: 41,
    topic: "Side windows behind driver",
    fact: "Objects may be placed on side windows behind the driver.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-license-plate-legibility-drivers-must-not-operate-a-vehicle-with-an-il",
    section: "Section 5: Laws and Rules of the Road",
    page: 41,
    topic: "License plate legibility",
    fact: "Drivers must not operate a vehicle with an illegible license plate.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-license-plate-alteration-drivers-must-not-alter-a-license-plate-in-any",
    section: "Section 5: Laws and Rules of the Road",
    page: 41,
    topic: "License plate alteration",
    fact: "Drivers must not alter a license plate in any way.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-evading-serious-injury-penalty-causing-serious-bodily-injury-while-eva",
    section: "Section 5: Laws and Rules of the Road",
    page: 41,
    topic: "Evading serious injury penalty",
    fact: "Causing serious bodily injury while evading law enforcement can lead to up to seven years in state prison or up to one year in county jail.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-evading-manslaughter-penalty-manslaughter-resulting-from-evading-law-e",
    section: "Section 5: Laws and Rules of the Road",
    page: 41,
    topic: "Evading manslaughter penalty",
    fact: "Manslaughter resulting from evading law enforcement during a pursuit is punishable by 4 to 10 years in state prison.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-reckless-speed-contest-injury-a-conviction-for-reckless-driving-or-a-s",
    section: "Section 5: Laws and Rules of the Road",
    page: 41,
    topic: "Reckless speed contest injury",
    fact: "A conviction for reckless driving or a speed contest that injures another person can lead to imprisonment, a fine, or both.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-negligent-driver-points-too-many-points-on-a-driver-record-can-make-a",
    section: "Section 5: Laws and Rules of the Road",
    page: 42,
    topic: "Negligent driver points",
    fact: "Too many points on a driver record can make a person a negligent driver and lead to probation, suspension, or revocation.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-suspension-hearing-right-if-dmv-acts-against-a-driving-privilege-the-d",
    section: "Section 5: Laws and Rules of the Road",
    page: 42,
    topic: "Suspension hearing right",
    fact: "If DMV acts against a driving privilege, the driver has the right to a hearing and will be notified in writing.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-mandatory-revocation-hit-and-run-injury-dmv-will-revoke-driving-privil",
    section: "Section 5: Laws and Rules of the Road",
    page: 42,
    topic: "Mandatory revocation hit-and-run injury",
    fact: "DMV will revoke driving privilege for a hit-and-run or reckless driving conviction that resulted in injury.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-replacement-license-after-suspension-after-suspension-or-revocation-a",
    section: "Section 5: Laws and Rules of the Road",
    page: 42,
    topic: "Replacement license after suspension",
    fact: "After suspension or revocation, a driver may apply for a replacement license and must show proof of financial responsibility such as SR 22 or SR 1P.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-minor-first-collision-violation-dmv-may-act-against-a-minor-license-af",
    section: "Section 5: Laws and Rules of the Road",
    page: 42,
    topic: "Minor first collision violation",
    fact: "DMV may act against a minor license after one at-fault collision or traffic violation conviction during the first 12 months.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-minor-probation-repeat-violations-additional-at-fault-collisions-or-co",
    section: "Section 5: Laws and Rules of the Road",
    page: 42,
    topic: "Minor probation repeat violations",
    fact: "Additional at-fault collisions or convictions while on probation can cause another suspension.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-minor-alcohol-controlled-substance-suspension-a-conviction-for-alcohol",
    section: "Section 5: Laws and Rules of the Road",
    page: 42,
    topic: "Minor alcohol controlled substance suspension",
    fact: "A conviction for alcohol or controlled substance use by a person 15 to 20 causes a one-year license suspension or delayed eligibility.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s5-turning-18-no-erase-restrictions-turning-18-does-not-erase-or-end-exis",
    section: "Section 5: Laws and Rules of the Road",
    page: 42,
    topic: "Turning 18 no erase restrictions",
    fact: "Turning 18 does not erase or end existing restrictions, suspensions, or probation sentences.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-surrounding-areas-color-map-the-handbook-identifies-areas-around-a-veh",
    section: "Section 6: Safe Driving",
    page: 44,
    topic: "Surrounding areas color map",
    fact: "The handbook identifies areas around a vehicle as green ahead, blue beside, yellow blind spots, and red behind.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-scan-10-seconds-ahead-drivers-should-scan-the-road-at-least-10-seconds",
    section: "Section 6: Safe Driving",
    page: 44,
    topic: "Scan 10 seconds ahead",
    fact: "Drivers should scan the road at least 10 seconds ahead to allow time to react and avoid last-minute moves.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-close-merge-response-if-a-vehicle-merges-too-closely-in-front-take-you",
    section: "Section 6: Safe Driving",
    page: 44,
    topic: "Close merge response",
    fact: "If a vehicle merges too closely in front, take your foot off the accelerator to create space.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-tailgater-response-if-a-tailgater-is-behind-you-maintain-course-and-sp",
    section: "Section 6: Safe Driving",
    page: 44,
    topic: "Tailgater response",
    fact: "If a tailgater is behind you, maintain course and speed, then merge right when safe to let them pass.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-more-space-for-motorcyclists-on-rough-surfaces-create-more-space-when",
    section: "Section 6: Safe Driving",
    page: 44,
    topic: "More space for motorcyclists on rough surfaces",
    fact: "Create more space when following motorcyclists on metal surfaces, bridge gratings, railroad tracks, or gravel.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-avoid-blind-spots-of-others-do-not-stay-in-another-driver-s-blind-spot",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Avoid blind spots of others",
    fact: "Do not stay in another driver’s blind spot.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-avoid-driving-alongside-avoid-driving-directly-alongside-other-vehicle",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Avoid driving alongside",
    fact: "Avoid driving directly alongside other vehicles.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-make-space-for-freeway-entrants-make-space-for-vehicles-entering-freew",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Make space for freeway entrants",
    fact: "Make space for vehicles entering freeways even if you have the right-of-way.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-space-from-parked-vehicles-keep-space-between-your-vehicle-and-parked",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Space from parked vehicles",
    fact: "Keep space between your vehicle and parked vehicles.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-look-both-ways-at-controlled-intersections-look-both-ways-even-at-inte",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Look both ways at controlled intersections",
    fact: "Look both ways even at intersections where traffic has a red light or stop sign.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-vehicle-blind-spots-definition-blind-spots-are-areas-around-a-vehicle",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Vehicle blind spots definition",
    fact: "Blind spots are areas around a vehicle that a driver cannot see by looking ahead or using mirrors.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-blind-spot-shoulder-check-check-blind-spots-by-looking-over-your-right",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Blind spot shoulder check",
    fact: "Check blind spots by looking over your right and left shoulders through the side windows.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-only-turn-head-for-blind-spot-when-checking-blind-spots-turn-only-your",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Only turn head for blind spot",
    fact: "When checking blind spots, turn only your head, not your body or steering wheel.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-blind-spot-check-situations-check-blind-spots-before-changing-lanes-tu",
    section: "Section 6: Safe Driving",
    page: 45,
    topic: "Blind spot check situations",
    fact: "Check blind spots before changing lanes, turning, merging, backing up, leaving parking, parallel parking, pulling from curb, or opening a door.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-check-behind-often-check-behind-often-using-mirrors-and-turning-your-h",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Check behind often",
    fact: "Check behind often using mirrors and turning your head.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-check-behind-before-actions-check-behind-when-changing-lanes-reducing",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Check behind before actions",
    fact: "Check behind when changing lanes, reducing speed, turning, parking, pulling to or from curb, or backing up.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-night-high-beams-open-roads-at-night-use-high-beams-on-open-country-ro",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Night high beams open roads",
    fact: "At night, use high beams on open country roads or dark city streets when legal.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-night-stop-within-headlights-at-night-make-sure-you-can-stop-within-th",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Night stop within headlights",
    fact: "At night, make sure you can stop within the distance illuminated by headlights.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-night-rain-low-beams-when-it-is-raining-use-low-beam-headlights-not-on",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Night rain low beams",
    fact: "When it is raining, use low-beam headlights, not only parking lights.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-night-vulnerable-users-harder-to-see-at-night-motorcycles-pedestrians",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Night vulnerable users harder to see",
    fact: "At night, motorcycles, pedestrians, and bicyclists are much harder to see.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-one-headlight-oncoming-if-a-vehicle-with-one-light-approaches-at-night",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "One headlight oncoming",
    fact: "If a vehicle with one light approaches at night, drive as far right as possible because it may be a bicyclist, motorcyclist, or vehicle missing a headlight.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-sun-glare-clean-windshield-to-manage-sun-glare-keep-the-inside-and-out",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Sun glare clean windshield",
    fact: "To manage sun glare, keep the inside and outside of the windshield clean.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-sun-glare-sunglasses-polarized-sunglasses-can-help-manage-sun-glare",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Sun glare sunglasses",
    fact: "Polarized sunglasses can help manage sun glare.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-sun-glare-following-space-maintain-space-around-the-vehicle-when-deali",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Sun glare following space",
    fact: "Maintain space around the vehicle when dealing with sun glare.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-sun-glare-visor-make-sure-the-visor-works-and-is-not-blocked",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Sun glare visor",
    fact: "Make sure the visor works and is not blocked.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-sun-glare-pedestrians-be-aware-that-sun-glare-may-make-pedestrians-har",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Sun glare pedestrians",
    fact: "Be aware that sun glare may make pedestrians hard to see.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-sunrise-sunset-avoid-try-to-avoid-driving-during-sunrise-and-sunset-wh",
    section: "Section 6: Safe Driving",
    page: 46,
    topic: "Sunrise sunset avoid",
    fact: "Try to avoid driving during sunrise and sunset when glare is worst.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-skid-definition-a-skid-occurs-when-one-or-more-tires-lose-traction-and",
    section: "Section 6: Safe Driving",
    page: 47,
    topic: "Skid definition",
    fact: "A skid occurs when one or more tires lose traction and the vehicle starts to slip.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-prevent-slippery-skids-to-prevent-slippery-surface-skids-drive-slowly",
    section: "Section 6: Safe Driving",
    page: 47,
    topic: "Prevent slippery skids",
    fact: "To prevent slippery-surface skids, drive slowly, leave space, slow before curves and intersections, avoid quick stops, and use low gear before steep hills.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-avoid-slippery-patches-avoid-ice-patches-wet-leaves-oil-and-standing-w",
    section: "Section 6: Safe Driving",
    page: 47,
    topic: "Avoid slippery patches",
    fact: "Avoid ice patches, wet leaves, oil, and standing water when possible.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-locked-wheel-skid-cause-a-locked-wheel-skid-is-usually-caused-by-braki",
    section: "Section 6: Safe Driving",
    page: 47,
    topic: "Locked wheel skid cause",
    fact: "A locked wheel skid is usually caused by braking too hard while going too fast.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-four-wheel-abs-skid-with-four-wheel-abs-apply-firm-pressure-to-the-bra",
    section: "Section 6: Safe Driving",
    page: 47,
    topic: "Four-wheel ABS skid",
    fact: "With four-wheel ABS, apply firm pressure to the brake pedal during a skid.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-rear-wheel-abs-skid-with-rear-wheel-abs-ease-brake-pressure-enough-for",
    section: "Section 6: Safe Driving",
    page: 47,
    topic: "Rear-wheel ABS skid",
    fact: "With rear-wheel ABS, ease brake pressure enough for front wheels to roll, then stop braking and steer into the skid.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-front-wheel-abs-skid-with-front-wheel-abs-remove-your-foot-from-the-br",
    section: "Section 6: Safe Driving",
    page: 47,
    topic: "Front-wheel ABS skid",
    fact: "With front-wheel ABS, remove your foot from the brake pedal, steer where you want to go, and straighten the front wheels as the vehicle straightens.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-non-abs-skid-braking-without-abs-quickly-pump-the-brakes-until-at-a-sa",
    section: "Section 6: Safe Driving",
    page: 48,
    topic: "Non-ABS skid braking",
    fact: "Without ABS, quickly pump the brakes until at a safe speed.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-brake-failure-sinking-pedal-if-the-brake-pedal-sinks-to-the-floor-quic",
    section: "Section 6: Safe Driving",
    page: 48,
    topic: "Brake failure sinking pedal",
    fact: "If the brake pedal sinks to the floor, quickly pump the brakes by gently applying and releasing pressure.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-emergency-brake-after-downshift-if-pumping-brakes-does-not-work-downsh",
    section: "Section 6: Safe Driving",
    page: 48,
    topic: "Emergency brake after downshift",
    fact: "If pumping brakes does not work, downshift to lower or neutral and try the emergency brake.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-dry-wet-brakes-if-brakes-get-wet-dry-them-by-lightly-pressing-accelera",
    section: "Section 6: Safe Driving",
    page: 48,
    topic: "Dry wet brakes",
    fact: "If brakes get wet, dry them by lightly pressing accelerator and brake pedals at the same time only until dry.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-slippery-roads-slow-on-slippery-roads-drive-more-slowly-than-on-dry-ro",
    section: "Section 6: Safe Driving",
    page: 48,
    topic: "Slippery roads slow",
    fact: "On slippery roads, drive more slowly than on dry roads and allow more following space.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-first-rain-slippery-when-rain-starts-after-dry-hot-weather-pavement-ca",
    section: "Section 6: Safe Driving",
    page: 48,
    topic: "First rain slippery",
    fact: "When rain starts after dry hot weather, pavement can be very slippery due to oil and dust.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-hydroplaning-definition-hydroplaning-occurs-when-tires-lose-all-contac",
    section: "Section 6: Safe Driving",
    page: 49,
    topic: "Hydroplaning definition",
    fact: "Hydroplaning occurs when tires lose all contact with the road and ride on water.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-avoid-hydroplaning-to-avoid-hydroplaning-drive-slowly-steer-around-sta",
    section: "Section 6: Safe Driving",
    page: 49,
    topic: "Avoid hydroplaning",
    fact: "To avoid hydroplaning, drive slowly, steer around standing water, and slow for sloshing sounds, lane changes, or direction changes.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-stuck-snow-mud-procedure-if-stuck-in-snow-or-mud-use-low-gear-keep-whe",
    section: "Section 6: Safe Driving",
    page: 49,
    topic: "Stuck snow mud procedure",
    fact: "If stuck in snow or mud, use low gear, keep wheels straight, accelerate gently, rock forward and reverse, and place traction materials only when stopped.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-flooded-road-dangers-flooded-roads-can-sweep-vehicles-away-hide-debris",
    section: "Section 6: Safe Driving",
    page: 49,
    topic: "Flooded road dangers",
    fact: "Flooded roads can sweep vehicles away, hide debris and hazards, collapse, cause vehicle malfunction, or create electrocution risk.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-avoid-deep-flood-water-if-water-depth-cannot-be-determined-or-the-road",
    section: "Section 6: Safe Driving",
    page: 50,
    topic: "Avoid deep flood water",
    fact: "If water depth cannot be determined or the road is too dangerous, find another route.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-high-wind-procedure-in-high-winds-reduce-speed-hold-the-wheel-firmly-w",
    section: "Section 6: Safe Driving",
    page: 50,
    topic: "High wind procedure",
    fact: "In high winds, reduce speed, hold the wheel firmly, watch for debris, and do not use cruise control.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-heavy-fog-avoid-it-is-best-to-avoid-driving-in-heavy-fog-or-smoke-and",
    section: "Section 6: Safe Driving",
    page: 50,
    topic: "Heavy fog avoid",
    fact: "It is best to avoid driving in heavy fog or smoke and postpone travel until it clears.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-fog-driving-procedure-if-you-must-drive-in-heavy-fog-or-smoke-drive-sl",
    section: "Section 6: Safe Driving",
    page: 50,
    topic: "Fog driving procedure",
    fact: "If you must drive in heavy fog or smoke, drive slowly, use low beams, increase following distance, use wipers/defroster, avoid passing, and listen for unseen traffic.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-fog-no-parking-lights-only-never-drive-in-fog-using-only-parking-or-fo",
    section: "Section 6: Safe Driving",
    page: 50,
    topic: "Fog no parking lights only",
    fact: "Never drive in fog using only parking or fog lights.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-fog-too-thick-pull-off-if-fog-becomes-too-thick-to-drive-safely-pull-o",
    section: "Section 6: Safe Driving",
    page: 50,
    topic: "Fog too thick pull off",
    fact: "If fog becomes too thick to drive safely, pull off the road, activate flashers, and wait.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-traffic-break-definition-during-a-traffic-break-an-officer-turns-on-em",
    section: "Section 6: Safe Driving",
    page: 50,
    topic: "Traffic break definition",
    fact: "During a traffic break, an officer turns on emergency lights and slowly weaves across lanes.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-traffic-break-purposes-traffic-breaks-are-used-to-slow-or-stop-traffic",
    section: "Section 6: Safe Driving",
    page: 50,
    topic: "Traffic break purposes",
    fact: "Traffic breaks are used to slow or stop traffic for road hazards, heavy fog, unusual traffic, or collision prevention.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-seat-belt-requirement-drivers-and-passengers-must-wear-seat-belts-and",
    section: "Section 6: Safe Driving",
    page: 51,
    topic: "Seat belt requirement",
    fact: "Drivers and passengers must wear seat belts, and a ticket can be issued for not wearing one.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-seat-belt-survival-seat-belts-and-shoulder-harnesses-increase-survival",
    section: "Section 6: Safe Driving",
    page: 51,
    topic: "Seat belt survival",
    fact: "Seat belts and shoulder harnesses increase survival chances and help keep occupants positioned to control the vehicle.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-rear-facing-airbag-front-seat-prohibition-a-child-in-a-rear-facing-chi",
    section: "Section 6: Safe Driving",
    page: 51,
    topic: "Rear-facing airbag front seat prohibition",
    fact: "A child in a rear-facing child restraint may not ride in the front seat of an airbag-equipped vehicle.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-driving-off-pavement-recovery-if-wheels-drift-off-pavement-grip-the-wh",
    section: "Section 6: Safe Driving",
    page: 53,
    topic: "Driving off pavement recovery",
    fact: "If wheels drift off pavement, grip the wheel, ease off accelerator, brake gently, check traffic, and carefully steer back.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-avoid-hard-steer-after-pavement-drift-do-not-pull-or-turn-the-wheel-to",
    section: "Section 6: Safe Driving",
    page: 53,
    topic: "Avoid hard steer after pavement drift",
    fact: "Do not pull or turn the wheel too forcefully after driving off pavement because it may send you into oncoming traffic.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-railroad-tracks-no-train-approaching-if-stalled-on-tracks-with-no-appr",
    section: "Section 6: Safe Driving",
    page: 53,
    topic: "Railroad tracks no train approaching",
    fact: "If stalled on tracks with no approaching train and no flashing lights, exit, call the posted railroad number, provide crossing number if posted, then call 911.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-distracted-driving-examples-distractions-include-looking-at-a-phone-na",
    section: "Section 6: Safe Driving",
    page: 54,
    topic: "Distracted driving examples",
    fact: "Distractions include looking at a phone, navigation system, children, pets, changing music, applying makeup, or shaving.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-do-not-text-while-driving-drivers-must-not-send-or-read-texts-or-email",
    section: "Section 6: Safe Driving",
    page: 54,
    topic: "Do not text while driving",
    fact: "Drivers must not send or read texts or emails while driving.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-mounted-phone-location-a-phone-may-be-mounted-on-the-windshield-dashbo",
    section: "Section 6: Safe Driving",
    page: 54,
    topic: "Mounted phone location",
    fact: "A phone may be mounted on the windshield, dashboard, or center console if it does not block road view.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-single-swipe-touch-use-only-a-single-swipe-or-touch-feature-on-a-mount",
    section: "Section 6: Safe Driving",
    page: 54,
    topic: "Single swipe touch",
    fact: "Use only a single swipe or touch feature on a mounted phone while driving.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-minor-emergency-phone-exception-a-minor-may-use-a-cell-phone-to-make-a",
    section: "Section 6: Safe Driving",
    page: 54,
    topic: "Minor emergency phone exception",
    fact: "A minor may use a cell phone to make a call for emergency assistance.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "exception" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-carbon-monoxide-danger-gas-powered-vehicles-produce-carbon-monoxide-a",
    section: "Section 6: Safe Driving",
    page: 54,
    topic: "Carbon monoxide danger",
    fact: "Gas-powered vehicles produce carbon monoxide, a deadly odorless gas from the exhaust pipe.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s6-garage-carbon-monoxide-safety-never-start-a-vehicle-inside-a-garage-wi",
    section: "Section 6: Safe Driving",
    page: 54,
    topic: "Garage carbon monoxide safety",
    fact: "Never start a vehicle inside a garage with the door closed.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-dui-laws-alcohol-and-drugs-california-dui-laws-apply-to-both-alcohol-a",
    section: "Section 7: Alcohol and Drugs",
    page: 55,
    topic: "DUI laws alcohol and drugs",
    fact: "California DUI laws apply to both alcohol and drugs.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-age-reduces-alcohol-tolerance-as-people-age-alcohol-tolerance-decrease",
    section: "Section 7: Alcohol and Drugs",
    page: 55,
    topic: "Age reduces alcohol tolerance",
    fact: "As people age, alcohol tolerance decreases, increasing alcohol-related driving risk.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-no-excessive-alcohol-before-driving-it-is-illegal-to-drive-after-drink",
    section: "Section 7: Alcohol and Drugs",
    page: 55,
    topic: "No excessive alcohol before driving",
    fact: "It is illegal to drive after drinking excessive alcohol in any form, including medications such as cough syrup.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-no-alcohol-drug-combination-it-is-illegal-to-drive-after-using-any-alc",
    section: "Section 7: Alcohol and Drugs",
    page: 55,
    topic: "No alcohol drug combination",
    fact: "It is illegal to drive after using any alcohol-drug combination that decreases safe driving ability.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-read-medication-labels-drivers-should-read-medication-labels-and-know",
    section: "Section 7: Alcohol and Drugs",
    page: 55,
    topic: "Read medication labels",
    fact: "Drivers should read medication labels and know the effects of any drug they use.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-open-container-passenger-exception-open-container-rules-do-not-apply-t",
    section: "Section 7: Alcohol and Drugs",
    page: 55,
    topic: "Open container passenger exception",
    fact: "Open-container rules do not apply to passengers in a bus, taxi, camper, or motorhome.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "exception" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-dui-below-bac-possible-a-driver-can-be-arrested-and-convicted-of-dui-e",
    section: "Section 7: Alcohol and Drugs",
    page: 56,
    topic: "DUI below BAC possible",
    fact: "A driver can be arrested and convicted of DUI even with BAC below the legal limit if impaired.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-one-drink-affects-driving-even-one-alcoholic-drink-can-affect-safe-dri",
    section: "Section 7: Alcohol and Drugs",
    page: 56,
    topic: "One drink affects driving",
    fact: "Even one alcoholic drink can affect safe driving ability.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-bac-decrease-over-time-the-bac-table-says-to-subtract-0-01pct-for-each",
    section: "Section 7: Alcohol and Drugs",
    page: 56,
    topic: "BAC decrease over time",
    fact: "The BAC table says to subtract 0.01% for each 40 minutes that lapse between drinks.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-standard-drink-definition-for-the-bac-table-one-drink-equals-1-5-oz-80",
    section: "Section 7: Alcohol and Drugs",
    page: 56,
    topic: "Standard drink definition",
    fact: "For the BAC table, one drink equals 1.5 oz 80-proof liquor, 12 oz 5% beer, or 5 oz 12% wine.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-boating-dui-note-it-is-illegal-to-drink-alcohol-or-take-drugs-while-op",
    section: "Section 7: Alcohol and Drugs",
    page: 56,
    topic: "Boating DUI note",
    fact: "It is illegal to drink alcohol or take drugs while operating boats, jet skis, water skis, aquaplanes, or similar vessels.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-implied-consent-dui-arrest-driving-in-california-means-consenting-to-b",
    section: "Section 7: Alcohol and Drugs",
    page: 57,
    topic: "Implied consent DUI arrest",
    fact: "Driving in California means consenting to breath, blood, or urine testing when suspected of DUI.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-pas-breath-still-blood-urine-taking-a-preliminary-alcohol-screening-or",
    section: "Section 7: Alcohol and Drugs",
    page: 57,
    topic: "PAS breath still blood urine",
    fact: "Taking a preliminary alcohol screening or breath test does not prevent being required to take a blood or urine test for drugs.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-admin-per-se-suspension-california-administrative-per-se-law-requires",
    section: "Section 7: Alcohol and Drugs",
    page: 57,
    topic: "Admin Per Se suspension",
    fact: "California Administrative Per Se law requires DMV to suspend driving privilege after a DUI arrest.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-under-21-off-site-liquor-exception-an-under-21-driver-working-for-some",
    section: "Section 7: Alcohol and Drugs",
    page: 57,
    topic: "Under 21 off-site liquor exception",
    fact: "An under-21 driver working for someone with an off-site liquor sales license may carry closed containers of alcohol.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "exception" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s7-under-21-alcohol-impound-penalty-if-an-under-21-driver-is-caught-with",
    section: "Section 7: Alcohol and Drugs",
    page: 57,
    topic: "Under 21 alcohol impound penalty",
    fact: "If an under-21 driver is caught with alcohol in the vehicle, law enforcement can impound the vehicle up to 30 days and the court may fine and suspend or delay licensing for one year.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "penalty" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-proof-of-financial-responsibility-drivers-must-carry-proof-of-financia",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 58,
    topic: "Proof of financial responsibility",
    fact: "Drivers must carry proof of financial responsibility or insurance when driving and for a drive test.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-collision-proof-of-insurance-after-a-collision-drivers-must-show-proof",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 58,
    topic: "Collision proof of insurance",
    fact: "After a collision, drivers must show proof of financial responsibility to other involved drivers.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-parent-financial-responsibility-minor-parents-or-guardians-take-financ",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 58,
    topic: "Parent financial responsibility minor",
    fact: "Parents or guardians take financial responsibility for drivers under 18 and pay damages if they are in a collision.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-adult-financial-responsibility-drivers-18-or-older-take-on-their-own-f",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 58,
    topic: "Adult financial responsibility",
    fact: "Drivers 18 or older take on their own financial responsibility.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-collision-causes-common-collision-causes-include-distraction-unsafe-sp",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 58,
    topic: "Collision causes",
    fact: "Common collision causes include distraction, unsafe speed, improper turns, right-of-way mistakes, ignoring signals/signs, wrong-side driving, and speed outside traffic flow.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "definition" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-emergency-flashers-collision-ahead-if-you-see-emergency-flashers-ahead",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 59,
    topic: "Emergency flashers collision ahead",
    fact: "If you see emergency flashers ahead, slow down and pass carefully.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-avoid-collision-scene-avoid-driving-near-collisions-when-possible-so-i",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 59,
    topic: "Avoid collision scene",
    fact: "Avoid driving near collisions when possible so injured people can get help faster.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-collision-call-911-injury-call-911-immediately-if-anyone-is-hurt-in-a",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 59,
    topic: "Collision call 911 injury",
    fact: "Call 911 immediately if anyone is hurt in a collision.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-collision-move-vehicle-no-injuries-if-no-one-is-hurt-move-the-vehicle",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 59,
    topic: "Collision move vehicle no injuries",
    fact: "If no one is hurt, move the vehicle out of traffic and then call 911.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-collision-exchange-information-after-a-collision-show-driver-license-r",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 59,
    topic: "Collision exchange information",
    fact: "After a collision, show driver license, registration, insurance information, and current address to other drivers, officers, and involved persons.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-collision-law-enforcement-24-hours-if-anyone-is-injured-or-killed-in-a",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 59,
    topic: "Collision law enforcement 24 hours",
    fact: "If anyone is injured or killed in a collision, report it to law enforcement within 24 hours.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "number" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-animal-collision-if-you-kill-or-injure-an-animal-call-the-nearest-huma",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 59,
    topic: "Animal collision",
    fact: "If you kill or injure an animal, call the nearest humane society or law enforcement and do not try to move the injured animal.",
    priority: "medium" as 'high' | 'medium' | 'low',
    contentType: "procedure" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  },
  {
    id: "pdf-fact-s8-collision-driver-record-a-collision-involving-over-dollars1-000-damage",
    section: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    page: 60,
    topic: "Collision driver record",
    fact: "A collision involving over $1,000 damage, injury, or death will be added to the driver record regardless of fault.",
    priority: "high" as 'high' | 'medium' | 'low',
    contentType: "rule" as 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure',
    mustHaveQuestion: true
  }

];
