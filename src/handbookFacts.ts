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
  }
];
