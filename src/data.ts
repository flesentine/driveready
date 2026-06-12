/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RoadSign, Question, UserStats } from './types';

export const INITIAL_USER_STATS: UserStats = {
  readinessScore: 0,
  questionsAnsweredToday: 0,
  dailyGoal: 30,
  streakDays: 0,
  practiceTimeMin: 0,
  accuracyPercent: 0,
  rankText: 'Level 1: Permit Seeker',
  totalTestsTaken: 0,
  masteredSignsCount: 0,
  userName: 'California Driver',
  hasActualActivity: false,
  categoryScores: {
    rulesOfRoad: 0,
    signsSignals: 0,
    safeDriving: 0,
  },
};

export const ROAD_SIGNS: RoadSign[] = [
  {
    id: 'stop',
    title: 'Stop Sign',
    category: 'Regulatory',
    description: 'Come to a complete stop, then check every direction before continuing.',
    imageUrl: '/signs/generated/stop-sign.png',
    status: 'Mandatory',
    statusType: 'Mandatory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 27,
    sourceTopic: 'Signs',
  },
  {
    id: 'yield',
    title: 'Yield Sign',
    category: 'Regulatory',
    description: 'Reduce speed and let vehicles, cyclists, or pedestrians go first when they have the right-of-way.',
    imageUrl: '/signs/generated/yield-sign.png',
    status: 'Priority',
    statusType: 'Priority',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 27,
    sourceTopic: 'Signs',
  },
  {
    id: 'no-entry',
    title: 'Do Not Enter',
    category: 'Regulatory',
    description: 'Do not drive onto this road, ramp, or entrance.',
    imageUrl: '/signs/generated/do-not-enter.png',
    status: 'Prohibitory',
    statusType: 'Prohibitory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 27,
    sourceTopic: 'Signs',
  },
  {
    id: 'one-way',
    title: 'One Way',
    category: 'Regulatory',
    description: 'Traffic moves only in the direction shown by the arrow.',
    imageUrl: '/signs/generated/one-way-directional.png',
    status: 'Mandatory',
    statusType: 'Mandatory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'winding-road',
    title: 'Winding Road',
    category: 'Warning',
    description: 'The road curves several times ahead. Slow down and stay in your lane.',
    imageUrl: '/signs/generated/winding-road.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'slippery-when-wet',
    title: 'Slippery When Wet',
    category: 'Warning',
    description: 'The road may lose traction when wet. Slow down and avoid sudden braking or sharp steering.',
    imageUrl: '/signs/generated/slippery-when-wet.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'divided-highway',
    title: 'Divided Highway Ahead',
    category: 'Warning',
    description: 'A divided roadway begins ahead. Stay to the right of the divider.',
    imageUrl: '/signs/generated/divided-highway-ahead.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'merging-traffic',
    title: 'Merging Traffic',
    category: 'Warning',
    description: 'Traffic may enter from the side. Adjust your speed and leave space for merging vehicles.',
    imageUrl: '/signs/generated/merging-traffic.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'two-way-traffic',
    title: 'Two Way Traffic',
    category: 'Warning',
    description: 'Traffic ahead moves in both directions. Stay alert and keep to the right.',
    imageUrl: '/signs/generated/two-way-traffic.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'lane-ends',
    title: 'Lane Ends',
    category: 'Warning',
    description: 'The lane ahead ends. Prepare to merge safely.',
    imageUrl: '/signs/generated/lane-ends-merge-left.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'pedestrian-crossing',
    title: 'Pedestrian Crossing',
    category: 'Warning',
    description: 'People may be crossing ahead. Slow down and be ready to stop.',
    imageUrl: '/signs/generated/pedestrian-crossing.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'stop-ahead',
    title: 'Stop Sign Ahead',
    category: 'Warning',
    description: 'A stop sign is coming up. Slow down and prepare to stop.',
    imageUrl: '/signs/generated/stop-sign-ahead.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'yield-ahead',
    title: 'Yield Sign Ahead',
    category: 'Warning',
    description: 'A yield sign is coming up. Slow down and be ready to let others go first.',
    imageUrl: '/signs/generated/yield-sign-ahead.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'no-left-turn',
    title: 'No Left Turn',
    category: 'Regulatory',
    description: 'Left turns are not allowed here.',
    imageUrl: '/signs/generated/no-left-turn.png',
    status: 'Prohibitory',
    statusType: 'Prohibitory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'reverse-turn',
    title: 'Reverse Turn / Sharp Curves',
    category: 'Warning',
    description: 'A sharp turn to the right followed by a sharp turn to the left. Slow down and proceed with caution.',
    imageUrl: '/signs/generated/reverse-turn-sharp-curves.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Supplemental road warning sign',
    sourceTopic: 'Extra Warning Sign (outside quick-reference chart)',
  },
  {
    id: 't-intersection',
    title: 'T-Intersection Ahead',
    category: 'Warning',
    description: 'Your road ends ahead. Slow down and prepare to turn left or right when safe.',
    imageUrl: '/signs/generated/t-intersection-ahead.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'added-lane',
    title: 'Added Lane',
    category: 'Warning',
    description: 'A new lane begins ahead. Watch for traffic entering alongside you.',
    imageUrl: '/signs/generated/added-lane-no-merge.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'end-divided-highway',
    title: 'End Divided Highway',
    category: 'Warning',
    description: 'The divided roadway ends ahead. Prepare for traffic without a center divider.',
    imageUrl: '/signs/generated/end-divided-highway.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'slower-traffic-keep-right',
    title: 'Slower Traffic Keep Right',
    category: 'Regulatory',
    description: 'Use the right lane when driving slower than other traffic.',
    imageUrl: '/signs/generated/slower-traffic-keep-right.png',
    status: 'Mandatory',
    statusType: 'Mandatory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'wrong-way',
    title: 'Wrong Way',
    category: 'Regulatory',
    description: 'You are headed against traffic. Safely reverse out or turn around as soon as you can.',
    imageUrl: '/signs/generated/wrong-way.png',
    status: 'Prohibitory',
    statusType: 'Prohibitory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 27,
    sourceTopic: 'Signs',
  },
  {
    id: 'no-u-turn',
    title: 'No U-Turn',
    category: 'Regulatory',
    description: 'You may not turn around at this location.',
    imageUrl: '/signs/generated/no-u-turn.png',
    status: 'Prohibitory',
    statusType: 'Prohibitory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'no-right-turn',
    title: 'No Right Turn',
    category: 'Regulatory',
    description: 'Right turns are not allowed here.',
    imageUrl: '/signs/generated/no-right-turn.png',
    status: 'Prohibitory',
    statusType: 'Prohibitory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'railroad-crossing',
    title: 'Railroad Crossing',
    category: 'Warning',
    description: 'Train tracks are ahead. Slow down, look and listen, and stop if a train or signal is present.',
    imageUrl: '/signs/generated/railroad-crossing.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'railroad-emergency-info',
    title: 'Railroad Emergency Info',
    category: 'Information',
    description: 'Use the posted emergency contact information if a vehicle is stuck or there is a problem near the tracks.',
    imageUrl: '/signs/generated/railroad-emergency-info.png',
    status: 'Information',
    statusType: 'Information',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Signs',
  },
  {
    id: 'school-crossing',
    title: 'School Crossing',
    category: 'Warning',
    description: 'You are near a school area. Slow down and be ready to stop for children crossing.',
    imageUrl: '/signs/generated/school-crossing.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'traffic-signal-ahead',
    title: 'Traffic Signal Ahead',
    category: 'Warning',
    description: 'A traffic signal is ahead. Be ready to slow down or stop.',
    imageUrl: '/signs/generated/traffic-signal-ahead.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'crossroad',
    title: 'Crossroad',
    category: 'Warning',
    description: 'Another road crosses ahead. Watch for traffic from both sides.',
    imageUrl: '/signs/generated/crossroad.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'directional-arrow',
    title: 'Directional Arrow',
    category: 'Warning',
    description: 'The road changes direction sharply. Slow down and follow the arrow.',
    imageUrl: '/signs/generated/directional-arrow.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'curve',
    title: 'Curve',
    category: 'Warning',
    description: 'The road curves ahead. Reduce speed and stay in your lane.',
    imageUrl: '/signs/generated/curve.png',
    status: 'Warning',
    statusType: 'Warning',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 29,
    sourceTopic: 'Warning Signs',
  },
  {
    id: 'keep-right',
    title: 'Keep Right',
    category: 'Regulatory',
    description: 'Keep to the right of the divider, island, or obstruction.',
    imageUrl: '/signs/generated/keep-right.png',
    status: 'Mandatory',
    statusType: 'Mandatory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'do-not-pass',
    title: 'Do Not Pass',
    category: 'Regulatory',
    description: 'Passing other vehicles is not allowed here.',
    imageUrl: '/signs/generated/do-not-pass.png',
    status: 'Prohibitory',
    statusType: 'Prohibitory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'no-parking-any-time',
    title: 'No Parking Any Time',
    category: 'Regulatory',
    description: 'Parking is not allowed at this location at any time.',
    imageUrl: '/signs/generated/no-parking-any-time.png',
    status: 'Prohibitory',
    statusType: 'Prohibitory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'emergency-parking-only',
    title: 'Emergency Parking Only',
    category: 'Regulatory',
    description: 'Only emergency stopping or parking is allowed here.',
    imageUrl: '/signs/generated/emergency-parking-only.png',
    status: 'Restriction',
    statusType: 'Prohibitory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'do-not-block-intersection',
    title: 'Do Not Block Intersection',
    category: 'Regulatory',
    description: 'Do not enter unless there is enough room to fully clear the intersection.',
    imageUrl: '/signs/generated/do-not-block-intersection.png',
    status: 'Mandatory',
    statusType: 'Mandatory',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  },
  {
    id: 'left-turn-yield-on-green',
    title: 'Left Turn Yield on Green',
    category: 'Regulatory',
    description: 'When turning left on green, wait for oncoming traffic, pedestrians, and cyclists before turning.',
    imageUrl: '/signs/generated/left-turn-yield-on-green.png',
    status: 'Priority',
    statusType: 'Priority',
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 28,
    sourceTopic: 'White Regulatory Signs',
  }
];

export const PRACTICE_QUESTIONS: Question[] = [
{
    id: 'q1',
    category: 'Traffic Signals',
    questionText: 'What should you do when you see a flashing yellow light at an upcoming intersection?',
    imageUrl: '',
    options: [
      'Come to a complete stop and wait for it to turn green.',
      'Slow down, remain alert, and proceed with caution without stopping.',
      'Maintain your full speed but match surrounding traffic.',
      'Treat the intersection as a yield sign, checking for pedestrians but not slowing down.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): A flashing yellow traffic light is a warning to PROCEED WITH CAUTION. Slow down and be alert. You do not need to stop.',
    testGroup: 12,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 24,
    sourceTopic: 'Flashing Yellow Light',
    coverageFactIds: ['fact-traffic-light-flashing-yellow']
  },

{
    id: 'q2',
    category: 'Rules of the Road',
    questionText: 'As a provisional driver under 18 years old, what Passenger restriction applies during the first 12 months with your license?',
    imageUrl: '',
    options: [
      'You are not permitted to have any passengers in the car at any time.',
      'You cannot carry passengers under 20 unless accompanied by a driver 25 or older.',
      'You cannot transport passengers under 18 unless they are members of your family.',
      'You cannot drive with any passengers under 21 who do not have a license.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 2): As a provisional driver, you cannot drive with passengers under 20 years old, unless your parent or guardian or other California-licensed driver (at least 25 years old) rides with you.',
    testGroup: 12,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Passenger Restrictions',
    coverageFactIds: ['fact-provisional-passengers']
  },

{
    id: 'q3',
    category: 'Rules of the Road',
    questionText: 'Under minor (under 18) provisional driver restrictions, what hours are you prohibited from driving during the first 12 months?',
    imageUrl: '',
    options: [
      'Between 10 p.m. and 6 a.m.',
      'Between midnight and 5 a.m.',
      'Between 11 p.m. and 5 a.m.',
      'Between 9 p.m. and 6 a.m.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 2): Provisional drivers under 18 cannot drive between 11 p.m. and 5 a.m. during the first 12 months of holding their license unless an exception applies.',
    testGroup: 12,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Provisional License Curfew Restrictions',
    coverageFactIds: ['fact-provisional-curfew']
  },

{
    id: 'q4',
    category: 'Rules of the Road',
    questionText: 'What is the speed limit in a California school zone when children are outside or crossing the street?',
    imageUrl: '',
    options: [
      '15 mph',
      '20 mph',
      '25 mph',
      '35 mph'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 6, Around Children): The speed limit is 25 mph within 500 feet of a school while children are outside or crossing. Some school zones may have speed limits as low as 15 mph.',
    testGroup: 12,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 38,
    sourceTopic: 'School zone speed limit',
    coverageFactIds: ['fact-school-zone-speed-children']
  },

{
    id: 'q5',
    category: 'Rules of the Road',
    questionText: 'When driving on a two-lane road where passing is unsafe, what must you do if there are 5 or more vehicles following closely behind you?',
    imageUrl: '',
    options: [
      'Speed up to match their flow even if it exceeds the limit.',
      'Move to the far right shoulder and continue driving at a reduced speed.',
      'Pull into a turnout area or lane to let the vehicles pass.',
      'Drive in the middle of the road to prevent them from passing unsafely.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4, Turnout Areas): You must use a turnout area or lane to let other vehicles pass when you are driving slowly on a two-lane road where passing is unsafe and there are five or more vehicles following you.',
    testGroup: 12,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 9,
    sourceTopic: 'Slow Driver Turnouts',
    coverageFactIds: ['fact-turnout-slow-vehicles']
  },

{
    id: 'q6',
    category: 'Safe Driving',
    questionText: 'When parking on a hill headed downhill with a curb, in which direction must you turn your front wheels?',
    imageUrl: '',
    options: [
      'Away from the curb (left) towards the street.',
      'Into the curb (right) or toward the side of the road.',
      'Keep the wheels straight and set the emergency brake.',
      'Turn wheels away from the curb (left) and leave the transmission in neutral.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Parking on a Hill): When headed downhill, turn your front wheels into the curb or right toward the side of the road so the vehicle will roll into the curb if the brakes fail.',
    testGroup: 12,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 19,
    sourceTopic: 'Parking downhill wheels',
    coverageFactIds: ['fact-hill-parking-downhill']
  },

{
    id: 'q7',
    category: 'Rules of the Road',
    questionText: 'Which parking rule applies to a YELLOW colored curb in California?',
    imageUrl: '',
    options: [
      'Stop only long enough to pick up or drop off passengers.',
      'No stopping, standing, or parking under any condition.',
      'Load or unload passengers and freight for a specified time.',
      'Park for a limited time that is indicated on street signage.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4, Colored Curbs): Yellow curbs indicate loading and unloading of passengers and freight. Noncommercial drivers must usually stay with their vehicle.',
    testGroup: 12,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Yellow curb rules',
    coverageFactIds: ['fact-colored-curb-yellow']
  },

{
    id: 'q8',
    category: 'Safe Driving',
    questionText: 'In California, if a school bus stops on your side of the road with flashing red lights, what are the requirements?',
    imageUrl: '',
    options: [
      'Stop until the flashing red lights stop.',
      'Slow down to 10 mph and pass carefully if no kids are visible.',
      'You only stop if the bus is loading, not unloading.',
      'Proceed slowly at 15 mph if no children are actively crossing.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Around Children): You must stop from either direction until the lights stop flashing. Failing to stop can lead to fines up to $1,000 and a 1-year driving privilege suspension.',
    testGroup: 12,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'School bus violation ticket costs',
    coverageFactIds: ['fact-school-bus-stop-violations']
  },

{
    id: 'q9',
    category: 'Safe Driving',
    questionText: 'What are the minimum liability vehicle insurance coverage limits required in California?',
    imageUrl: '',
    options: [
      '$15,000 for single death, $30,000 for multiple person death, and $5,000 for property damage',
      '$30,000 for single death/injury, $60,000 for multiple person death/injury, and $15,000 for property damage',
      '$50,000 / $100,000 / $25,000',
      '$10,000 / $20,000 / $10,000'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 8, Insurance Requirements): The minimum required coverage in California is $30,000 for injury/death to one person, $60,000 for multiple persons, and $15,000 for property damage.',
    testGroup: 12,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 58,
    sourceTopic: 'Minimum vehicle liability coverage',
    coverageFactIds: ['fact-insurance-minimum-liability-limits']
  },

{
    id: 'q10',
    category: 'Traffic Signals',
    questionText: 'Which of the following is correct regarding turning right against a RED traffic signal arrow?',
    imageUrl: '',
    options: [
      'You may turn right after coming to a complete stop and yielding.',
      'You may not turn right if you are stopped at a red arrow light. You must wait until the light changes to green.',
      'You can turn only if there are no pedestrians in the entire crosswalk.',
      'You may turn right only after yielding to vehicles approaching from the left.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Traffic Signals): You may not turn right if you are stopped at a red arrow light. Wait until the light changes to green before making your turn.',
    testGroup: 12,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 11,
    sourceTopic: 'Right Turns on Red Arrows',
    coverageFactIds: ['fact-right-turn-red-arrow']
  },

{
    id: 'q11',
    category: 'Rules of the Road',
    questionText: 'Within how many feet of an intersection is it legal to enter a designated bicycle lane to prepare for a right turn?',
    imageUrl: '',
    options: [
      '50 feet',
      '100 feet',
      '200 feet',
      '300 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4, Bicycle Lanes / Turns): It is legal to drive inside a bicycle lane when turning, but only within 200 feet of the intersection.',
    testGroup: 13,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 9,
    sourceTopic: 'Driving in Bicycle Lanes',
    coverageFactIds: ['fact-drive-bike-lane-limit']
  },

{
    id: 'q12',
    category: 'Rules of the Road',
    questionText: 'What is the maximum continuous distance you are permitted to drive inside a center left turn lane?',
    imageUrl: '',
    options: [
      '100 feet',
      '200 feet',
      '300 feet',
      '400 feet'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Center Left Turn Lanes): A center left turn lane is not a regular traffic lane. You may only drive for 200 feet in the center left turn lane.',
    testGroup: 13,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 9,
    sourceTopic: 'Center Left Turn Lane Distance Limit',
    coverageFactIds: ['fact-center-left-turn-distance']
  },

{
    id: 'q13',
    category: 'Safe Driving',
    questionText: 'When you are passing a bicyclist in a travel lane, how much clearance space must you maintain between your vehicle and the cyclist?',
    imageUrl: '',
    options: [
      'At least one (1) foot',
      'At least two (2) feet',
      'At least three (3) feet',
      'At least five (5) feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4, Page 14): Three (3) feet of distance must be maintained between the car and a cyclist when passing in the same direction.',
    testGroup: 13,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 10,
    sourceTopic: 'Passing Bicyclist Space Clearance',
    coverageFactIds: ['fact-bike-passing-clearance']
  },

{
    id: 'q14',
    category: 'Safe Driving',
    questionText: 'What is the "three-second rule" used to determine under dry, normal road conditions?',
    imageUrl: '',
    options: [
      'The average reaction time to tap the brakes.',
      'A safe following distance to avoid rear-end collisions with the vehicle in front of you.',
      'The time required to bring your vehicle to a complete stop at 55 mph.',
      'The minimum safe gap in seconds when entering freeway traffic.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Tailgating): Use the three-second rule to ensure a safe following distance and avoid a collision. Following other vehicles at a safe distance gives you enough time to react.',
    testGroup: 13,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 44,
    sourceTopic: 'Tailgating safety following distance',
    coverageFactIds: ['fact-tailgate-three-second-rule']
  },

{
    id: 'q15',
    category: 'Rules of the Road',
    questionText: 'When two vehicles meet on a steep narrow mountain road where neither can pass, which vehicle has the right-of-way?',
    imageUrl: '',
    options: [
      'The vehicle facing downhill because they have less speed visibility.',
      'The vehicle facing uphill because they have less control when backing up.',
      'The vehicle going faster has right-of-way to maintain momentum.',
      'The vehicle traveling nearest to the outside edge of the road.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Mountain Roads): If two vehicles meet on a steep narrow road and neither can pass, the vehicle facing uphill has the right-of-way. The vehicle facing downhill must back up until the uphill vehicle can pass.',
    testGroup: 13,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 32,
    sourceTopic: 'Steep road right-of-way rules',
    coverageFactIds: ['fact-mountain-rightofway']
  },

{
    id: 'q16',
    category: 'Rules of the Road',
    questionText: 'When you want to merge into highway traffic from an on-ramp, you should enter at what speed?',
    imageUrl: '',
    options: [
      'Slightly faster than highway traffic to get ahead.',
      'At or near the speed of highway traffic.',
      'At a slow speed (approx 30 mph) and stop on the shoulder to wait for a gap.',
      'At 10 mph below the highway speed limit to ensure a safe gap.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Merging): When you enter a highway, you need to be in the proper lane on the on-ramp and be at or near the speed of traffic.',
    testGroup: 13,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 16,
    sourceTopic: 'Highway entry matching traffic speed',
    coverageFactIds: ['fact-highway-entry-match-traffic-speed']
  },

{
    id: 'q17',
    category: 'Rules of the Road',
    questionText: 'Under what conditions is it legal to make a U-turn in a residential district?',
    imageUrl: '',
    options: [
      'Only at intersections that do not have a traffic signal.',
      'If no vehicles are approaching you within 200 feet.',
      'At any time, since residential speeds are low.',
      'Only if there is a driveway available to complete a three-point turn.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, U-Turn): You may make a U-turn in a residential district if no vehicles are approaching you within 200 feet.',
    testGroup: 13,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 13,
    sourceTopic: 'U-Turn requirements in residential zones',
    coverageFactIds: ['fact-uturn-residential-clearance']
  },

{
    id: 'q18',
    category: 'Rules of the Road',
    questionText: 'When is it legal to pass another vehicle on the right side on an open highway?',
    imageUrl: '',
    options: [
      'Only when the shoulder is wide enough to support your car.',
      'When the open highway has two or more lanes going in your direction, or the driver ahead is turning left and you can safely pass.',
      'When the vehicle in front is driving 10 mph below the speed limit.',
      'It is strictly illegal to pass on the right on any California road.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Passing): You may pass on the right only when an open highway has two or more lanes going in your direction, the driver ahead is turning left, or you are on a one-way street. Never drive off the pavement to pass.',
    testGroup: 13,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 17,
    sourceTopic: 'Passing on the right conditions',
    coverageFactIds: ['fact-pass-on-right-allowed']
  },

{
    id: 'q19',
    category: 'Rules of the Road',
    questionText: 'When can you legally double-park your vehicle in California?',
    imageUrl: '',
    options: [
      'When actively loading or unloading passengers.',
      'When delivery spaces are fully occupied.',
      'Never. Double parking is strictly illegal under any condition.',
      'When parking on a one-way street with multiple lanes.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4, Illegal Parking): Double parking (parking next to or opposite a vehicle already parked or stopped at a curb) is illegal under any conditions.',
    testGroup: 13,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Illegal double parking rules',
    coverageFactIds: ['fact-illegal-parking-double-parking']
  },

{
    id: 'q20',
    category: 'Rules of the Road',
    questionText: 'To avoid collisions when passing, you are strictly prohibited from passing within how many feet of an intersection, bridge, or railroad crossing?',
    imageUrl: '',
    options: [
      'Within 50 feet',
      'Within 100 feet',
      'Within 200 feet',
      'Within 300 feet'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Passing): Do not pass within 100 feet of an intersection, bridge, tunnel, railroad crossing, or other hazardous area.',
    testGroup: 13,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 17,
    sourceTopic: 'Prohibited passing within 100 feet',
    coverageFactIds: ['fact-passing-prohibited-100-feet-hazard']
  },

{
    id: 'q21',
    category: 'Safe Driving',
    questionText: 'When driving on a WET road surface, how much should you reduce your speed to stay safe?',
    imageUrl: '',
    options: [
      'Maintain your normal speed but keep windshield wipers active.',
      'Reduce your speed by 5 to 10 mph.',
      'Reduce your speed by half.',
      'Reduce your speed by exactly 15 to 20 mph.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Slippery Roads): On a wet road, reduce your speed by 5 to 10 mph to maintain traction and prevent skidding.',
    testGroup: 14,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 48,
    sourceTopic: 'Rain road wet speed bounds',
    coverageFactIds: ['fact-slick-roads-wet-speed']
  },

{
    id: 'q22',
    category: 'Safe Driving',
    questionText: 'How much should you reduce your speed when driving on PACKED SNOW?',
    imageUrl: '',
    options: [
      'By 5 to 10 mph.',
      'Reduce your speed by half.',
      'Reduce your speed to a maximum of 15 mph.',
      'Maintain normal speed if your tires have deep tread mud and snow ratings.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Slippery Roads): On packed snow, you must reduce your speed by half to maintain complete control and steer clear of slippery surface skids.',
    testGroup: 14,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 48,
    sourceTopic: 'Packed snow speed bounds',
    coverageFactIds: ['fact-slick-roads-snow-speed']
  },

{
    id: 'q23',
    category: 'Alcohol & Drugs',
    questionText: 'It is illegal for any standard adult driver who is 21 years old or older to operate a vehicle with a Blood Alcohol Concentration (BAC) of:',
    imageUrl: '',
    options: [
      '0.01% or higher',
      '0.04% or higher',
      '0.05% or higher',
      '0.08% or higher'
    ],
    correctOptionIndex: 3,
    explanation: 'California Handbook (Section 7, BAC Limits): It is illegal for individuals over 21 years of age to drive with a Blood Alcohol Concentration (BAC) of 0.08% or higher.',
    testGroup: 14,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'Adult maximum blood alcohol bounds',
    coverageFactIds: ['fact-bac-limit-adult-21']
  },

{
    id: 'q24',
    category: 'Safe Driving',
    questionText: 'It is against California law to follow closely behind any active fire engine, ambulance, or law enforcement vehicle using sirens/lights within how many feet?',
    imageUrl: '',
    options: [
      'Within 100 feet',
      'Within 200 feet',
      'Within 300 feet',
      'Within 500 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 6, Emergency Vehicles): It is against the law to follow within 300 feet of any fire engine, law enforcement vehicle, ambulance, or other emergency vehicle when their siren or flashing lights are on.',
    testGroup: 14,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 35,
    sourceTopic: 'Active emergency vehicle follow bounds',
    coverageFactIds: ['fact-emergency-vehicle-follow-distance']
  },

{
    id: 'q25',
    category: 'Safe Driving',
    questionText: 'It is dangerous and illegal to leave a child unattended in a stationary vehicle in California. What child age threshold applies?',
    imageUrl: '',
    options: [
      '6 years old or younger.',
      '8 years old or younger.',
      '10 years old or younger.',
      '12 years old or younger.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Unattended Children and Pets): It is illegal to leave a child who is six years old or younger unattended in a vehicle. A child may be left under the supervision of a person who is at least 12 years old.',
    testGroup: 14,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Unattended child age limits',
    coverageFactIds: ['fact-unattended-child-age6']
  },

{
    id: 'q26',
    category: 'Safe Driving',
    questionText: 'If a bus, streetcar, or trolley is stopped at a designated safety zone or traffic light, what is the maximum speed you are permitted to pass them?',
    imageUrl: '',
    options: [
      'No more than 10 mph',
      'No more than 15 mph',
      'No more than 25 mph',
      'The speed limit of the street'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Buses, Streetcars, Trolleys): When a bus, streetcar, or trolley is stopped at a safety zone or traffic light, you may pass at no more than 10 mph.',
    testGroup: 14,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 34,
    sourceTopic: 'Passing streetcar / safety zone speed limits',
    coverageFactIds: ['fact-streetcar-safety-zone-speed']
  },

{
    id: 'q27',
    category: 'Safe Driving',
    questionText: 'To prevent blind glare, you must dim your vehicle high-beam headlights to low-beams within how many feet of a vehicle you are following?',
    imageUrl: '',
    options: [
      'Within 150 feet',
      'Within 200 feet',
      'Within 300 feet',
      'Within 500 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 3, Headlights): Dim your high-beam headlights to low beams within 500 feet of an oncoming vehicle or within 300 feet of a vehicle you are following.',
    testGroup: 14,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Dimming high beams - Oncoming traffic',
    coverageFactIds: ['fact-dim-beams-oncoming-500ft']
  },

{
    id: 'q28',
    category: 'Rules of the Road',
    questionText: 'Cargo extending more than how many feet from the back-rear bumper of your vehicle must display a 12-inch red or orange square safety flag?',
    imageUrl: '',
    options: [
      'More than 2 feet',
      'More than 3 feet',
      'More than 4 feet',
      'More than 6 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 5, Cargo Extension): Cargo that extends more than 4 feet from the back-rear bumper must display a 12-inch red or fluorescent orange square flag. At night, this cargo must be marked with two red lights (Page 44).',
    testGroup: 14,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 40,
    sourceTopic: 'Rear bumper cargo flags',
    coverageFactIds: ['fact-flag-bumper-cargo-4feet']
  },

{
    id: 'q29',
    category: 'Safe Driving',
    questionText: 'If your vehicle wheels drift off the paved pavement onto the road shoulder, what is the safest initial action?',
    imageUrl: '',
    options: [
      'Yank the steering wheel hard to pull back onto the road immediately.',
      'Slam on your brakes to bring the car to an emergency halt on the dirt shoulder.',
      'Grip the steering wheel firmly, remove your foot from the accelerator, and brake gently.',
      'Accelerate slightly to pull the vehicle back onto the pavement.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 6, Driving Off the Pavement): If your wheels drift off the pavement: Grip steering wheel firmly, remove foot from accelerator, brake gently, check traffic, and steer carefully back. Avoid pulling with too much force.',
    testGroup: 14,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 47,
    sourceTopic: 'Slippery skid control steering rules',
    coverageFactIds: ['fact-skid-release-accelerator-no-brakes']
  },

{
    id: 'q30',
    category: 'Alcohol & Drugs',
    questionText: 'What is the legal Blood Alcohol Concentration (BAC) limit for commercial CDL drivers or passenger-for-hire drivers in California?',
    imageUrl: '',
    options: [
      '0.01% or higher',
      '0.04% or higher',
      '0.05% or higher',
      '0.08% or higher'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, BAC Limits): It is illegal to drive a commercial vehicle requiring a CDL, or to drive a passenger vehicle for hire, with a BAC of 0.04% or higher.',
    testGroup: 14,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'Commercial driver blood alcohol bounds',
    coverageFactIds: ['fact-bac-limit-commercial']
  },

{
    id: 'q31',
    category: 'Rules of the Road',
    questionText: 'If a provisional minor driver has a medical necessity to drive during curfew hours, what is required?',
    imageUrl: '',
    options: [
      'A written statement signed by the minor\'s parent or guardian.',
      'A signed note from a licensed physician specifying the diagnosis and estimated recovery date.',
      'A copy of the minor\'s official health insurance or medical card.',
      'A signed release form from the school nurse.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 2): For medical needs, minor provisional drivers must carry a signed note from a physician specifying the diagnosis and estimated recovery date.',
    testGroup: 15,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Restriction Exceptions - Medical Need',
    coverageFactIds: ['fact-provisional-exception-medical']
  },

{
    id: 'q32',
    category: 'Rules of the Road',
    questionText: 'Which exception allows a provisional minor driver (under 18) to drive during prohibited hours (11 p.m. to 5 a.m.) for schooling?',
    imageUrl: '',
    options: [
      'A copy of the current school enrollment certificate.',
      'A note signed by the school principal, dean, or designee.',
      'An official school class schedule showing late-hour courses.',
      'A verbal statement from a high school coach or teacher.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 2, Exceptions): School-authorized activities require a written note signed by the school principal, dean, or designee indicating the schooling reason.',
    testGroup: 15,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Restriction Exceptions - School Activity',
    coverageFactIds: ['fact-provisional-exception-school']
  },

{
    id: 'q33',
    category: 'Rules of the Road',
    questionText: 'What is the correct hand signal for a RIGHT turn in California?',
    imageUrl: '',
    options: [
      'Extend the left arm and hand straight out of the window.',
      'Extend the left arm and hand upward out of the window.',
      'Extend the left arm and hand pointing downward out of the window.',
      'Extend the right arm straight out inside the vehicle.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3, Hand Signals): For a right turn, bend your left arm upward at the elbow, so your hand points toward the sky.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Manual hand signal for a Right Turn',
    coverageFactIds: ['fact-hand-signal-right-arm']
  },

{
    id: 'q34',
    category: 'Rules of the Road',
    questionText: 'What is the correct hand signal for a LEFT turn in California?',
    imageUrl: '',
    options: [
      'Extend the left arm and hand straight out of the window.',
      'Extend the left arm and hand upward out of the window.',
      'Extend the left arm and hand pointing downward out of the window.',
      'Extend the left arm downward at a 45-degree angle.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 3, Hand Signals): For a left turn, extend your arm and hand straight out of the window horizontally.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Manual hand signal for a Left Turn',
    coverageFactIds: ['fact-hand-signal-left-arm']
  },

{
    id: 'q35',
    category: 'Rules of the Road',
    questionText: 'What is the correct hand signal to indicate you are STOPPING or SLOWING DOWN?',
    imageUrl: '',
    options: [
      'Extend the left arm and hand straight out of the window.',
      'Extend the left arm and hand upward out of the window.',
      'Extend the left arm and hand pointing downward out of the window, back of hand facing rear.',
      'Extend the left arm upward with a closed fist.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 3, Hand Signals): Bend your left arm downward at the elbow with your palm/hand pointing down toward the ground.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Manual hand signal to Slow down or Stop',
    coverageFactIds: ['fact-hand-signal-slow-stop-arm']
  },

{
    id: 'q36',
    category: 'Rules of the Road',
    questionText: 'How far in advance of making a turn should you continuously activate your turn signal?',
    imageUrl: '',
    options: [
      'At least 50 feet before the turn.',
      'At least 100 feet before the turn.',
      'At least 200 feet before the turn.',
      'As you begin turning the steering wheel.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3, Signaling): Always signal your intention to turn at least 100 feet before making a turn at an upcoming intersection.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Signaling distance before turning',
    coverageFactIds: ['fact-signal-turn-100ft']
  },

{
    id: 'q37',
    category: 'Rules of the Road',
    questionText: 'How many seconds before changing lanes on a high-speed freeway must you activate your turn signal?',
    imageUrl: '',
    options: [
      'At least 1 second',
      'At least 3 seconds',
      'At least 5 seconds',
      'At least 10 seconds'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 3, Signaling): You must continuously signal for at least five (5) seconds before executing any lane change on a freeway.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Lane change signaling on freeway',
    coverageFactIds: ['fact-signal-freeway-5seconds']
  },

{
    id: 'q38',
    category: 'Safe Driving',
    questionText: 'Under what visibility conditions must you turn your vehicle low-beam headlights on?',
    imageUrl: '',
    options: [
      'Only if severe fog covers the pavement.',
      'If you cannot see clearly from a distance of 1,000 feet in front of your vehicle.',
      'If the sun is directly above you and causing glares.',
      'Only when driving inside high-occupancy vehicle (HOV) corridors.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3, Headlights): Turn your headlights on if you are unable to see a distance of 1,000 feet directly in front of you.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Headlights timeframe after sunset',
    coverageFactIds: ['fact-headlights-after-sunset']
  },

{
    id: 'q39',
    category: 'Safe Driving',
    questionText: 'What is the headlight timeline requirement in California relative to sunset and sunrise?',
    imageUrl: '',
    options: [
      'From sunset to sunrise exactly.',
      'Beginning 15 minutes after sunset until 15 minutes before sunrise.',
      'Beginning 30 minutes after sunset, until 30 minutes before sunrise.',
      'Only between 6:00 p.m. and 6:00 a.m.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 3, Headlights): Headlights must be turned on beginning 30 minutes after sunset, and remain on until 30 minutes before sunrise.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Headlights timeframe before sunrise',
    coverageFactIds: ['fact-headlights-before-sunrise']
  },

{
    id: 'q40',
    category: 'Safe Driving',
    questionText: 'If you are driving in inclement weather that requires continuous use of your windshield wipers, you must also:',
    imageUrl: '',
    options: [
      'Activate your high-beam emergency light system to warn traffic.',
      'Turn on your low-beam headlights.',
      'Drive exclusively in the center lane of the road.',
      'Flash your hazard indicators every 10 seconds.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3, Headlights): In adverse weather, if you need to use your windshield wipers continuously, you are legally required to turn on your low-beam headlights.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Headlights required with windshield wipers',
    coverageFactIds: ['fact-headlights-wipers-running']
  },

{
    id: 'q41',
    category: 'Safe Driving',
    questionText: 'When parking headed uphill on a street with a curb, which direction should you turn your front wheels?',
    imageUrl: '',
    options: [
      'Toward the curb (right).',
      'Away from the curb (left).',
      'Keep the wheels completely straight.',
      'Parallel to the curb block.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Parking on a Hill): When headed uphill, turn your front wheels away from the curb (left) and let the vehicle roll back slightly so the wheels rest against the curb.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 19,
    sourceTopic: 'Parking uphill wheels with curb',
    coverageFactIds: ['fact-hill-parking-uphill']
  },

{
    id: 'q42',
    category: 'Safe Driving',
    questionText: 'When parking headed either uphill or downhill on a street that does NOT have a curb, which way should you turn your wheels?',
    imageUrl: '',
    options: [
      'Keep the wheels completely straight.',
      'Toward the side of the road (right).',
      'Toward the center of the road (left).',
      'Parallel to the painted edge lines.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Parking on a Hill): If there is no curb, turn your front wheels to the right so that if the brakes fail, the vehicle rolls away from the center of the road and out of traffic.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 19,
    sourceTopic: 'Parking on hills with no curb',
    coverageFactIds: ['fact-hill-parking-nocurb']
  },

{
    id: 'q43',
    category: 'Rules of the Road',
    questionText: 'What is the parking restriction for a WHITE colored curb in California?',
    imageUrl: '',
    options: [
      'Stop only long enough to pick up or drop off passengers or mail.',
      'Park for a limited time that is indicated on the curb face.',
      'Load or unload passengers or baggage for a maximum of 15 minutes.',
      'No stopping, standing, or parking at any time.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 4, Colored Curbs): White curbs mean you may stop only long enough to pick up or drop off passengers or mail.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'White curb rules',
    coverageFactIds: ['fact-colored-curb-white']
  },

{
    id: 'q44',
    category: 'Rules of the Road',
    questionText: 'What is the parking restriction for a GREEN colored curb in California?',
    imageUrl: '',
    options: [
      'No stopping or parking allowed under any condition.',
      'Park for a limited time, which may be printed on the curb or on a nearby sign.',
      'Stop only to unload passengers or freight for a maximum of 5 minutes.',
      'Loading and unloading passengers only.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Colored Curbs): Green curbs allow you to park for a limited time, which is specified on the curb or a nearby sign.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Green curb rules',
    coverageFactIds: ['fact-colored-curb-green']
  },

{
    id: 'q45',
    category: 'Rules of the Road',
    questionText: 'What is the parking restriction for a RED colored curb in California?',
    imageUrl: '',
    options: [
      'Stop only to pick up or drop off passengers.',
      'No stopping, standing, or parking at any time, except for buses stopped at a designated red bus zone.',
      'Only valid for emergency vehicles or vehicles with handicap privileges.',
      'Stop only to load or unload freight during business hours.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Colored Curbs): Red curbs mean no stopping, standing, or parking under any conditions (except buses at marked bus zones).',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Red curb rules',
    coverageFactIds: ['fact-colored-curb-red']
  },

{
    id: 'q46',
    category: 'Rules of the Road',
    questionText: 'It is illegal to park your vehicle within how many feet of a fire hydrant or fire station driveway in California?',
    imageUrl: '',
    options: [
      'Within 5 feet',
      'Within 10 feet',
      'Within 15 feet',
      'Within 25 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4, Illegal Parking): It is illegal to park within 15 feet of a fire hydrant or a fire station driveway.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Illegal parking fire hydrant distance',
    coverageFactIds: ['fact-illegal-parking-hydrant-distance']
  },

{
    id: 'q47',
    category: 'Rules of the Road',
    questionText: 'In California, how close to a designated wheelchair sidewalk ramp are you legally permitted to park?',
    imageUrl: '',
    options: [
      'No closer than 3 feet.',
      'No closer than 5 feet.',
      'No closer than 10 feet.',
      'No closer than 15 feet.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 4, Illegal Parking): It is illegal to park within three (3) feet of a sidewalk ramp designed for disabled persons.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Illegal parking near wheelchair sidewalk ramp',
    coverageFactIds: ['fact-illegal-parking-wheelchair-ramp-distance']
  },

{
    id: 'q48',
    category: 'Rules of the Road',
    questionText: 'To ensure pedestrian visibility, you are prohibited from parking within how many feet of a marked or unmarked crosswalk?',
    imageUrl: '',
    options: [
      'Within 10 feet',
      'Within 15 feet',
      'Within 20 feet',
      'Within 30 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4, Illegal Parking): It is illegal to park within 20 feet of an unmarked or marked crosswalk, or within 15 feet of a curb extension.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Illegal parking crosswalk distance limit',
    coverageFactIds: ['fact-illegal-parking-crosswalk-distance']
  },

{
    id: 'q49',
    category: 'Rules of the Road',
    questionText: 'What constitutes "Double Parking" in California, and under what conditions is it permitted?',
    imageUrl: '',
    options: [
      'Parking two vehicles in a single wide space; permitted in business districts.',
      'Parking next to or opposite a vehicle already parked at a curb; it is completely illegal under any conditions.',
      'Parking in a designated loading zone for more than 30 minutes.',
      'Parking across two separate stalls; allowed if you pay double parking fees.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4, Illegal Parking): Double parking is parking next to or opposite a vehicle already parked at a curb. It is strictly illegal under any conditions.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Illegal double parking rules',
    coverageFactIds: ['fact-illegal-parking-double-parking']
  },

{
    id: 'q50',
    category: 'Rules of the Road',
    questionText: 'Which colored curb is reserved exclusively for disabled individuals with proper placards or license plates?',
    imageUrl: '',
    options: [
      'WHITE',
      'GREEN',
      'RED',
      'BLUE'
    ],
    correctOptionIndex: 3,
    explanation: 'California Handbook (Section 4, Colored Curbs): Blue curbs are reserved exclusively for disabled persons or those driving a disabled person who has a special placard or license plate.',
    testGroup: 16,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Blue curb rules',
    coverageFactIds: ['fact-colored-curb-blue']
  },

{
    id: 'q51',
    category: 'Safe Driving',
    questionText: 'Under California law, children under 2 years old must be secured in a rear-facing passenger child restraint system unless:',
    imageUrl: '',
    options: [
      'They are at least 3 feet tall.',
      'They weigh 40 pounds or more, or are 3 feet 4 inches tall or taller.',
      'The child is secured in a booster seat with a chest harness.',
      'The vehicle is equipped with side-curtain airbags.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Child Passenger Restraint System): Children under 2 years old must be in a rear-facing seat unless they weigh 40 pounds or more, or are 3 feet 4 inches tall or taller.',
    testGroup: 17,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 51,
    sourceTopic: 'Rear child safety seat limits',
    coverageFactIds: ['fact-restraint-rear-facing-age2']
  },

{
    id: 'q52',
    category: 'Safe Driving',
    questionText: 'Children under what age or height must be secured in a federally-approved child passenger restraint system in the rear seat of a vehicle?',
    imageUrl: '',
    options: [
      'Under 6 years old, or less than 4 feet 3 inches tall.',
      'Under 8 years old, or less than 4 feet 9 inches tall.',
      'Under 10 years old, or less than 5 feet tall.',
      'Under 12 years old, or less than 5 feet 2 inches tall.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Child Restraint): Children under 8 years old, or who are less than 4 feet 9 inches tall, must be secured in a federally-approved child restraint in a rear seat.',
    testGroup: 17,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 51,
    sourceTopic: 'Secure seat child restraint age eight',
    coverageFactIds: ['fact-restraint-under8-backseat']
  },

{
    id: 'q53',
    category: 'Safe Driving',
    questionText: 'For maximum safety against rapid impact, how many inches of clearance space should you maintain between your chest and the driver-side airbag cover?',
    imageUrl: '',
    options: [
      'At least 5 inches.',
      'At least 10 inches.',
      'At least 15 inches.',
      'At least 20 inches.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Airbags): Ride at least 10 inches from the airbag cover to allow safe deployment space without causing severe chest impact injury.',
    testGroup: 17,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Airbag safety steering clearance',
    coverageFactIds: ['fact-airbag-chest-clearance']
  },

{
    id: 'q54',
    category: 'Rules of the Road',
    questionText: 'What is the speed limit at a "blind intersection" (where you cannot see 100 feet in either direction during the last 100 feet before crossing)?',
    imageUrl: '',
    options: [
      '15 mph',
      '20 mph',
      '25 mph',
      '30 mph'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Speed Limits): The speed limit is 15 mph at any blind intersection where you cannot see 100 feet down the cross street before entering.',
    testGroup: 17,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Blind intersection speed limit',
    coverageFactIds: ['fact-blind-intersection-speed']
  },

{
    id: 'q55',
    category: 'Rules of the Road',
    questionText: 'What is the standard legal speed limit inside any designated alley under California law?',
    imageUrl: '',
    options: [
      '10 mph',
      '15 mph',
      '20 mph',
      '25 mph'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Alleys): The speed limit in any designated alley is 15 mph.',
    testGroup: 17,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Alley speed limit',
    coverageFactIds: ['fact-alley-speed-limit']
  },

{
    id: 'q56',
    category: 'Rules of the Road',
    questionText: 'What is the speed limit when crossing a railroad track within 100 feet, if you are unable to see the tracks for 400 feet in either direction?',
    imageUrl: '',
    options: [
      '15 mph',
      '20 mph',
      '25 mph',
      '30 mph'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Railroads): The speed limit is 15 mph within 100 feet of a railroad crossing if you cannot see the tracks for 400 feet in either direction.',
    testGroup: 17,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Railroad crossing speed limit',
    coverageFactIds: ['fact-railroad-obscured-speed']
  },

{
    id: 'q57',
    category: 'Safe Driving',
    questionText: 'If a school bus stops on the opposite side of a divided highway (with a physical median barrier), are you still required to stop?',
    imageUrl: '',
    options: [
      'Yes, you must stop regardless of the roadway design.',
      'No, you do not need to stop if the bus is on the other side of a divided or multilane highway with 2+ lanes of travel in each direction.',
      'No, you do not need to stop if you are driving over 35 mph.',
      'Yes, unless a school crossing guard directs you to proceed.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Around Children): You do not need to stop if the school bus is on the other side of a divided or multilane highway (two or more lanes in each direction).',
    testGroup: 17,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'School bus stops - divided highways',
    coverageFactIds: ['fact-school-bus-divided-highway']
  },

{
    id: 'q58',
    category: 'Safe Driving',
    questionText: 'When are minor passengers (at least 8 years old or 4 feet 9 inches tall) permitted to ride using a standard seat belt without a booster?',
    imageUrl: '',
    options: [
      'Never, minors must always use booster cushions.',
      'Once they reach 8 years of age or a height threshold of 4 feet 9 inches.',
      'Once they reach 10 years of age, regardless of height.',
      'Once they reach 12 years of age or a weight threshold of 80 pounds.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Seat Belts): Children who are 8 years old or older, or who have reached at least 4 feet 9 inches in height, may use a properly fitting safety belt without a booster seat.',
    testGroup: 17,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 51,
    sourceTopic: 'Height rules for standard seatbelts',
    coverageFactIds: ['fact-restraint-height-4ft9-seats']
  },

{
    id: 'q59',
    category: 'Safe Driving',
    questionText: 'What penalty applies to a driver who fails to stop for a school bus with flashing red lights in California?',
    imageUrl: '',
    options: [
      'A standard traffic ticket fine of $150 and one point on your record.',
      'Fines up to $1,000 and a 1-year driving privilege suspension.',
      'A mandatory 30-day jail sentence and vehicle impoundment.',
      'A warning letter sent to your auto insurance provider.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Around Children): Failing to stop for a school bus with flashing red lights can result in a fine of up to $1,000 and suspension of your driving privilege for one year.',
    testGroup: 17,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'School bus violation ticket costs',
    coverageFactIds: ['fact-school-bus-stop-violations']
  },

{
    id: 'q60',
    category: 'Safe Driving',
    questionText: 'Which passenger exception allows a child under 8 years old to ride in the front seat of a vehicle with a booster seat?',
    imageUrl: '',
    options: [
      'If they are under the direct supervision of a licensed driving instructor.',
      'If all rear seats are already occupied by children 7 years old or younger, or there is no rear seat or rear seats face sideways.',
      'If the child is wearing heavy winter clothing that prevents proper rear seat fit.',
      'If the front passenger airbag has been manually deactivated by a dealer.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Child Restraint): A child under 8 may ride in the front seat in an approved restraint if there are no rear seats, the rear seats are occupied by children 7 or younger, or the restraint cannot be properly installed in the back.',
    testGroup: 17,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 51,
    sourceTopic: 'Secure seat child restraint age eight',
    coverageFactIds: ['fact-restraint-under8-backseat']
  },

{
    id: 'q61',
    category: 'Alcohol & Drugs',
    questionText: 'If you are currently on active DUI probation in California, what legal Blood Alcohol Concentration (BAC) limit applies when operating a vehicle?',
    imageUrl: '',
    options: [
      '0.08% or higher',
      '0.05% or higher',
      '0.01% or higher',
      '0.08% or higher, the same as for any standard adult driver.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 7, BAC Limits): If you are on DUI probation, you must not drive with a BAC of 0.01% or higher at any time.',
    testGroup: 18,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'DUI probation blood alcohol limits',
    coverageFactIds: ['fact-bac-limit-dui-probation']
  },

{
    id: 'q62',
    category: 'Alcohol & Drugs',
    questionText: 'Which passive storage condition must be met to transport an OPEN container of alcohol inside your vehicle?',
    imageUrl: '',
    options: [
      'It must be stored inside the glove compartment.',
      'It must be kept beneath the passenger floor mat out of direct view.',
      'It must be kept in the trunk or in a place where passengers do not sit.',
      'It must be stored inside the glove compartment, provided it is kept locked.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 7, Carrying Alcohol): Open containers of alcohol must be kept in the trunk or a place where passengers do not sit. Keeping an open container in the glove compartment is strictly illegal.',
    testGroup: 18,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Open container laws for alcohol and cannabis',
    coverageFactIds: ['fact-dui-open-container-vehicle']
  },

{
    id: 'q63',
    category: 'Financial Responsibility',
    questionText: 'In California, within how many days must you report a collision to the DMV using an SR-1 form?',
    imageUrl: '',
    options: [
      'Within 3 days',
      'Within 5 days',
      'Within 10 days',
      'Within 30 days'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 8, Reporting Collisions): You must report a collision to the DMV within 10 days if there is more than $1,000 in property damage, or if anyone was injured or killed.',
    testGroup: 18,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 59,
    sourceTopic: 'DMV SR-1 collision reporting threshold',
    coverageFactIds: ['fact-collision-report-sr1-dmv']
  },

{
    id: 'q64',
    category: 'Alcohol & Drugs',
    questionText: 'By driving on California roads, you give consent to chemical testing of your blood, breath, or urine. If you refuse this test, what penalty applies?',
    imageUrl: '',
    options: [
      'A mandatory safe-driving course and a $250 fine.',
      'The DMV will automatically suspend or revoke your driving privilege for at least one year.',
      'Six months of supervised probation and mandatory community service.',
      'An immediate 10-day impoundment of your vehicle.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, Chemical Tests): Under California\'s implied consent law, if you refuse a chemical test, the DMV will suspend or revoke your driving privilege for 1 year.',
    testGroup: 18,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Chemical test refusal warnings',
    coverageFactIds: ['fact-dui-test-refusal']
  },

{
    id: 'q65',
    category: 'Financial Responsibility',
    questionText: 'What minimum property damage threshold requires a collision to be reported directly to the DMV using form SR-1?',
    imageUrl: '',
    options: [
      'More than $750 in total damage.',
      'More than $500 in total damage.',
      'More than $1,000, or if anyone was injured or killed.',
      'Any amount, regardless of how minor the property damage is.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 8, Reporting Collisions): A collision must be reported to the DMV within 10 days if the property damage exceeds $1,000, or if there is any injury or death.',
    testGroup: 18,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 59,
    sourceTopic: 'DMV SR-1 collision reporting threshold',
    coverageFactIds: ['fact-collision-report-sr1-dmv']
  },

{
    id: 'q66',
    category: 'Alcohol & Drugs',
    questionText: 'It is strictly illegal for any juvenile driver aged under 21 years old to operate a motor vehicle with a BAC of:',
    imageUrl: '',
    options: [
      '0.01% or higher',
      '0.04% or higher',
      '0.05% or higher',
      '0.08% or higher'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 7, BAC Limits): If you are under 21 years old, you must not drive with a Blood Alcohol Concentration (BAC) of 0.01% or higher.',
    testGroup: 18,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'Under 21 blood alcohol limits',
    coverageFactIds: ['fact-bac-limit-under-21']
  },

{
    id: 'q67',
    category: 'Alcohol & Drugs',
    questionText: 'Does prescription or over-the-counter medicine have any impact on the legality of driving under the influence in California?',
    imageUrl: '',
    options: [
      'No, as long as the medication was legally prescribed by a doctor.',
      'Yes, if the medication impairs your ability to drive safely.',
      'Yes, but only if the medication is a narcotic or strong stimulant.',
      'No, as long as you carry the original pharmacy bottle in the car.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, Drugs and Driving): It is illegal to drive under the influence of any drug (recreational, prescription, or over-the-counter) that impairs your ability to drive safely.',
    testGroup: 18,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Prescription and over-the-counter medicine driving legality',
    coverageFactIds: ['fact-dui-drugs-prescription-impairment']
  },

{
    id: 'q68',
    category: 'Rules of the Road',
    questionText: 'When pedestrians using guide dogs or white canes are crossing, what must drivers do?',
    imageUrl: '',
    options: [
      'Yield the right-of-way at all times.',
      'Proceed slowly once they have cleared your specific lane.',
      'Honk once so they know your vehicle is nearby.',
      'Stop only if there is a marked crosswalk.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5, Pedestrians): Pedestrians using guide dogs or white canes have the right-of-way at all times.',
    testGroup: 18,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 32,
    sourceTopic: 'Blind pedestrians right-of-way',
    coverageFactIds: ['fact-pedestrian-white-canes']
  },

{
    id: 'q69',
    category: 'Rules of the Road',
    questionText: 'What is the speed limit within 100 feet of a railroad crossing if you cannot see the tracks for 400 feet in both directions?',
    imageUrl: '',
    options: [
      '15 mph',
      'The posted speed limit for that road.',
      '15 mph, but only if the warning bells are actively ringing.',
      '30 mph, provided no train is visible on the tracks.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6): If you cannot see the railroad tracks for 400 feet in both directions, the speed limit is 15 mph within 100 feet of the crossing.',
    testGroup: 18,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Railroad crossing visibility and speed limit factors',
    coverageFactIds: ['fact-railroad-crossing-visibility-speed']
  },

{
    id: 'q70',
    category: 'Financial Responsibility',
    questionText: 'If you fail to provide proof of financial responsibility (valid insurance) at the scene of a California collision, what are the potential consequences?',
    imageUrl: '',
    options: [
      'A fine of $250 and 3 points on your driving record.',
      'The suspension of your driving privilege for up to four years.',
      'A mandatory 10-day county jail sentence.',
      'There is no consequence if the other driver was at fault.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 8, Insurance): If you do not have proof of insurance at a collision, your driving privilege can be suspended for up to 4 years.',
    testGroup: 18,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 58,
    sourceTopic: 'Collision without active insurance card',
    coverageFactIds: ['fact-insurance-lack-suspension']
  },

{
    id: 'q71',
    category: 'Rules of the Road',
    questionText: 'For the first 12 months after receiving a California minor provisional driver\'s license, what is the driving curfew restriction?',
    imageUrl: '',
    options: [
      'No driving between 10:00 PM and 5:00 AM.',
      'No driving between 11:00 PM and 5:00 AM unless accompanied by a licensed parent, guardian, or driver age 25+.',
      'No driving between midnight and 6:00 AM.',
      'No driving after midnight under any conditions.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 2, Getting a Driver’s License): During the first 12 months after license issuance, provisional drivers under age 18 cannot drive between 11 p.m. and 5 a.m. unless supervised by a licensed parent/guardian, driver age 25+, or certified trainer (Page 2/6).',
    testGroup: 19,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Provisional License Curfew Restrictions',
    coverageFactIds: ['fact-provisional-curfew']
  },

{
    id: 'q72',
    category: 'Rules of the Road',
    questionText: 'During the first 12 months of holding a California minor provisional driver\'s license, you cannot transport passengers of what age unless supervised by an adult over 25?',
    imageUrl: '',
    options: [
      'Passengers under 18 years of age.',
      'Passengers under 20 years of age.',
      'Passengers under 21 years of age.',
      'Passengers under 25 years of age.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 2, Getting a Driver’s License): During your first 12 months, you cannot transport passengers under 20 years of age unless accompanied by a licensed parent, guardian, or driver age 25+ (Page 2/6).',
    testGroup: 19,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Passenger Restrictions',
    coverageFactIds: ['fact-provisional-passengers']
  },

{
    id: 'q73',
    category: 'Rules of the Road',
    questionText: 'If you move and change your home address in California, you are legally required to notify the DMV of your new address within:',
    imageUrl: '',
    options: [
      '5 days',
      '10 days',
      '30 days',
      '60 days'
    ],
    correctOptionIndex: 1,
    explanation: 'Supplemental Content (Address Changes): You must notify the DMV of a change of residential address within 10 days.',
    testGroup: 19,
    sourceSection: 'Section 1: The California Driver\'s License',
    sourcePage: 1,
    sourceTopic: 'Address change notification timelines',
    coverageFactIds: ['fact-address-change-notification']
  },

{
    id: 'q74',
    category: 'Rules of the Road',
    questionText: 'If you sell or transfer ownership of a vehicle to another individual in California, you must notify the DMV within how many days?',
    imageUrl: '',
    options: [
      '5 days',
      '10 days',
      '15 days',
      '30 days'
    ],
    correctOptionIndex: 0,
    explanation: 'Supplemental Content (Vehicle Registration): You must notify the DMV within 5 days of selling or transferring ownership of a vehicle by submitting a Notice of Transfer and Release of Liability (NRL).',
    testGroup: 19,
    sourceSection: 'Section 1: The California Driver\'s License',
    sourcePage: 1,
    sourceTopic: 'Vehicle sell and transfer notification timeline',
    coverageFactIds: ['fact-vehicle-transfer-notification']
  },

{
    id: 'q75',
    category: 'Rules of the Road',
    questionText: 'To supervise a minor driver who holds a California Instruction Permit, the accompanying licensed driver must be at least what age?',
    imageUrl: '',
    options: [
      'At least 18 years old',
      'At least 21 years old',
      'At least 25 years old',
      'At least 30 years old'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 1, Instruction Permits): Permit supervisors must be a licensed parent, guardian, driving instructor, or other licensed driver who is at least 25 years of age.',
    testGroup: 19,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Instruction permit',
    coverageFactIds: ['fact-instruction-permit-btw']
  },

{
    id: 'q76',
    category: 'Rules of the Road',
    questionText: 'If you are a minor under 18 and you fail the California DMV written knowledge test, how long must you wait before retaking the exam?',
    imageUrl: '',
    options: [
      '3 days',
      '1 week (7 days)',
      '2 weeks (14 days)',
      '30 days'
    ],
    correctOptionIndex: 1,
    explanation: 'Supplemental Content (Written Exam Limits): Minor applicants who fail the written driver\'s license exam must wait 1 week (7 days) before they can retake the test.',
    testGroup: 19,
    sourceSection: 'Section 1: The California Driver\'s License',
    sourcePage: 1,
    sourceTopic: 'Exam requirements',
    coverageFactIds: ['fact-knowledge-btw-tests']
  },

{
    id: 'q77',
    category: 'Rules of the Road',
    questionText: 'If you fail the practical in-car driving skills exam in California, what is the mandatory wait time before you are allowed to retake it?',
    imageUrl: '',
    options: [
      '1 week (7 days)',
      '2 weeks (14 days)',
      '30 days',
      '60 days'
    ],
    correctOptionIndex: 1,
    explanation: 'Supplemental Content (Driving Exam Retake): If you fail the behind-the-wheel driving test, there is a mandatory 2-week (14 days) waiting period before you can attempt it again, and you must pay a retest fee.',
    testGroup: 19,
    sourceSection: 'Section 1: The California Driver\'s License',
    sourcePage: 1,
    sourceTopic: 'Exam requirements',
    coverageFactIds: ['fact-knowledge-btw-tests']
  },

{
    id: 'q78',
    category: 'Rules of the Road',
    questionText: 'Who must sign the DMV driver\'s license application for an applicant under the age of 18?',
    imageUrl: '',
    options: [
      'Both parents or legal guardians.',
      'The minor applicant and their driving instructor.',
      'Any California licensed driver aged 25 or older.',
      'At least one parent and their high school principal.'
    ],
    correctOptionIndex: 0,
    explanation: 'Supplemental Content (Minors Permit Application): Parents or legal guardians must sign the application assuming joint and several civil liability for any accidents involving the minor provisional driver (supported by Section 8).',
    testGroup: 19,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Instruction permit',
    coverageFactIds: ['fact-instruction-permit-btw']
  },

{
    id: 'q79',
    category: 'Rules of the Road',
    questionText: 'How many times are you allowed to fail the California DMV written knowledge test before your permit application fee expires and you must reapply?',
    imageUrl: '',
    options: [
      '1 attempt.',
      '2 attempts.',
      '3 attempts.',
      '4 attempts.'
    ],
    correctOptionIndex: 2,
    explanation: 'Supplemental Content (Written Exam): Your application fee allows you up to 3 attempts to pass the written knowledge exam within a 12-month period. If you fail 3 times, you must submit a new application fee.',
    testGroup: 19,
    sourceSection: 'Section 1: The California Driver\'s License',
    sourcePage: 1,
    sourceTopic: 'Exam requirements',
    coverageFactIds: ['fact-knowledge-btw-tests']
  },

{
    id: 'q80',
    category: 'Safe Driving',
    questionText: 'Under California law, abandoning an animal on a highway carries what severe criminal penalty?',
    imageUrl: '',
    options: [
      'A fine of up to $250 and 15 hours of community service.',
      'A fine of up to $1,000, imprisonment in county jail for up to 6 months, or both.',
      'A fine of up to $500 and a 90-day license suspension.',
      'A misdemeanor on your record but no monetary fine.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Other Important Roadway Information): Dumping or abandoning an animal on a highway is a misdemeanor punishable by a fine of up to $1,000, 6 months in jail, or both (Page 44).',
    testGroup: 19,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Green curb rules',
    coverageFactIds: ['fact-colored-curb-green']
  },

{
    id: 'q81',
    category: 'Rules of the Road',
    questionText: 'When passing a bicyclist who is riding in the same direction, California law requires you to maintain a minimum clearance of at least:',
    imageUrl: '',
    options: [
      '1 foot',
      '2 feet',
      '3 feet',
      '5 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 6, Sharing the Road - Bicycles): Under the Three Feet Rules, drivers in California must allow a minimum clearance of 3 feet when passing or overtaking a bicyclist.',
    testGroup: 20,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 10,
    sourceTopic: 'Passing Bicyclist Space Clearance',
    coverageFactIds: ['fact-bike-passing-clearance']
  },

{
    id: 'q82',
    category: 'Rules of the Road',
    questionText: 'When driving in a posted school zone where children are outside, what is the speed limit unless otherwise posted?',
    imageUrl: '',
    options: [
      '15 mph',
      '25 mph',
      '30 mph',
      '35 mph'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Speed Limits): The speed limit in school zones is 25 mph when children are present outside, although some schools may post limits as low as 15 mph.',
    testGroup: 20,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 38,
    sourceTopic: 'School zone speed limit',
    coverageFactIds: ['fact-school-zone-speed-children']
  },

{
    id: 'q83',
    category: 'Rules of the Road',
    questionText: 'If you are driving on an undivided highway and a school bus stops ahead of you with its red flashing lights and stop arm extended, what is required?',
    imageUrl: '',
    options: [
      'You must fully stop and remain stopped until the flashing red lights stop and the warning arm retracts.',
      'Slowing down to 15 mph and passing with caution is permitted if the road is undivided.',
      'You must stop only if traveling in the same direction; oncoming traffic may proceed at a reduced speed.',
      'You are required to stop only if the speed limit of the roadway is 45 mph or greater.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, School Buses): On undivided roads, vehicles traveling in all directions must stop when a school bus stops with flashing red lights and an extended stop signal arm.',
    testGroup: 20,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 38,
    sourceTopic: 'School bus red flashing stops',
    coverageFactIds: ['fact-school-bus-red-flashing']
  },

{
    id: 'q84',
    category: 'Rules of the Road',
    questionText: 'When traveling in the opposite direction of a stopped school bus with flashing red lights, you are NOT required to stop if:',
    imageUrl: '',
    options: [
      'The oncoming road has at least two lanes of travel in each direction.',
      'You are traveling on a multi-lane highway divided by a physical median island or barrier.',
      'You are driving an active commercial delivery vehicle or public transit bus.',
      'The school bus is stopped on a dirt shoulder with no children visible nearby.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, School Buses): You do not need to stop for a stopped school bus with flashing red lights if you are traveling on the opposite side of a divided highway split by a physical barrier or raised island.',
    testGroup: 20,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'School bus stops - divided highways',
    coverageFactIds: ['fact-school-bus-divided-highway']
  },

{
    id: 'q85',
    category: 'Rules of the Road',
    questionText: 'What does a large, reflective, orange-and-red triangular sign mounted on the rear of a vehicle signify?',
    imageUrl: '',
    options: [
      'A slow-moving vehicle designed to travel at speeds under 25 mph.',
      'A commercial vehicle carrying hazardous materials requiring placards.',
      'An auxiliary road service vehicle performing towing or assistance duties.',
      'An oversized vehicle that exceeds standard height or width limitations.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Slow-Moving Vehicles): Slow-moving vehicles (such as farm road tractors, maintenance machinery, or animal-drawn carriages) designed to travel at 25 mph or less must display an orange-and-red reflective triangle on the rear.',
    testGroup: 20,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 36,
    sourceTopic: 'Slow moving road sign speed limits',
    coverageFactIds: ['fact-slow-moving-vehicle-speed']
  },

{
    id: 'q86',
    category: 'Rules of the Road',
    questionText: 'What does the term "No-Zone" refer to when sharing California roadways with large commercial semi-trucks?',
    imageUrl: '',
    options: [
      'The designated weight limits on specialized bridges and overpasses.',
      'The massive blind spots on the front, rear, and sides of a truck where your car cannot be seen by the truck driver.',
      'The restriction against trucks entering HOV lanes on freeways.',
      'An emergency runaway truck ramp situated on steep mountain declines.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Sharing the Road - Large Trucks): Large commercial trucks have massive blind areas around them called "No-Zones" (in front, behind, and along both sides). If you drive in these zones, the truck driver cannot see your vehicle.',
    testGroup: 20,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 32,
    sourceTopic: 'Large commercial truck blind spots',
    coverageFactIds: ['fact-truck-no-zone-blind']
  },

{
    id: 'q87',
    category: 'Rules of the Road',
    questionText: 'Why should you avoid squeezing inside on the right side of a large truck when it is preparing to make a right-hand turn at an intersection?',
    imageUrl: '',
    options: [
      'Large trucks have a wider blind spot on the passenger side than on the driver side.',
      'Large trucks must swing wide to the left to clear the curb, meaning overtaking them on the right could cause a collision.',
      'Large trucks are required to activate their air brakes before making right-hand turns.',
      'Large trucks generally turn at a speed of 10 mph or faster.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Sharing the Road): Because of their extreme vehicle length, large trucks must swing wide to the left to complete a tight right turn. Overtaking them or squeezing in on their right side is incredibly dangerous.',
    testGroup: 20,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 33,
    sourceTopic: 'Large truck turning behaviors',
    coverageFactIds: ['fact-truck-swing-wide']
  },

{
    id: 'q88',
    category: 'Rules of the Road',
    questionText: 'Under California\'s "Move Over" Law, what must you do when approaching a stationary emergency vehicle stopped on the highway shoulder with active sirens or lights?',
    imageUrl: '',
    options: [
      'Accelerate past them as quickly as possible to avoid causing a traffic jam.',
      'Safely change lanes into a non-adjacent lane if possible, or slow down significantly to clear space.',
      'Park behind the vehicle to shield their operations from highway traffic.',
      'Sound your horn repeatedly to alert other oncoming drivers of the hazard.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Emergency Services): California\'s Move Over Law requires drivers approaching emergency vehicles, tow trucks, or maintenance vehicles stopped with active warning lights to change lanes to a non-adjacent lane (if safe) or slow down to pass safely.',
    testGroup: 20,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 38,
    sourceTopic: 'Move Over Law tow trucks',
    coverageFactIds: ['fact-move-over-law-tows']
  },

{
    id: 'q89',
    category: 'Rules of the Road',
    questionText: 'A motorist convicted of fleeing or willfully evading a peace officer performing their official duties can be sentenced to:',
    imageUrl: '',
    options: [
      'A standard traffic infraction ticket with a fine of $250.',
      'Imprisonment in a county jail for up to one year.',
      'An automatic five-year driver\'s license revocation.',
      'A fine of up to $5,000 and mandatory defensive driving school.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Evading Law Enforcement): Evading a peace officer performing their duties is a misdemeanor punishable by imprisonment in a county jail for up to 1 year (Page 45).',
    testGroup: 20,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 41,
    sourceTopic: 'Fleeing law enforcement misdemeanor jail',
    coverageFactIds: ['fact-evade-police-consequences']
  },

{
    id: 'q90',
    category: 'Rules of the Road',
    questionText: 'Under what specific condition is a motorized passenger vehicle permitted to drive in a painted bicycle lane in California?',
    imageUrl: '',
    options: [
      'To pass a slow-moving or disabled vehicle in front of you.',
      'When preparing to execute a right-hand turn, starting within 200 feet of an intersection.',
      'To park alongside a green curb during off-peak hours.',
      'Always, as long as you yield to any bicycles.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Bicycle Lanes): You must not drive in a bicycle lane unless you are preparing to make a right-hand turn starting within 200 feet of the intersection, or when entering or leaving the highway.',
    testGroup: 20,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 9,
    sourceTopic: 'Driving in Bicycle Lanes',
    coverageFactIds: ['fact-drive-bike-lane-limit']
  },

{
    id: 'q91',
    category: 'Rules of the Road',
    questionText: 'It is illegal for any person who is 21 years of age or older to operate a normal passenger vehicle with a Blood Alcohol Concentration (BAC) of:',
    imageUrl: '',
    options: [
      '0.05% or higher',
      '0.08% or higher',
      '0.10% or higher',
      '0.15% or higher'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 9, Alcohol Limits): BAC limit is 0.08% or higher if you are 21 years old or older.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'Adult maximum blood alcohol bounds',
    coverageFactIds: ['fact-bac-limit-adult-21']
  },

{
    id: 'q92',
    category: 'Rules of the Road',
    questionText: 'If you are operating a commercial vehicle, or a vehicle for hire (such as a taxi, Uber, or Lyft) with passengers, it is illegal to drive with a BAC of:',
    imageUrl: '',
    options: [
      '0.01% or higher',
      '0.04% or higher',
      '0.05% or higher',
      '0.08% or higher'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 9): For commercial motor vehicles or passenger transportation vehicles for hire, the BAC limit is 0.04% or higher.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'Commercial driver blood alcohol bounds',
    coverageFactIds: ['fact-bac-limit-commercial']
  },

{
    id: 'q93',
    category: 'Rules of the Road',
    questionText: 'Under California\'s Implied Consent Law, by driving a motor vehicle on a public roadway, you have automatically agreed to:',
    imageUrl: '',
    options: [
      'Always drive in the right-most lane except when passing.',
      'Submit to a chemical test of your blood, breath, or urine if suspected of DUI.',
      'Permit law enforcement to search your vehicle at any time without a warrant.',
      'Affix a GPS electronic tracking monitor to your license plate.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 9, Implied Consent): When you drive in California, you consent to have your breath, blood, or urine tested if you are arrested for driving under the influence (DUI).',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Chemical test refusal warnings',
    coverageFactIds: ['fact-dui-test-refusal']
  },

{
    id: 'q94',
    category: 'Safe Driving',
    questionText: 'If you are convicted of driving under the influence (DUI) for the first time in California, what is a standard administrative penalty imposed?',
    imageUrl: '',
    options: [
      'A mandatory two-year driver\'s license revocation.',
      'Enrolled in a licensed DUI program, driver\'s license suspension, and cash fines.',
      'Imprisonment in a state prison for a minimum of 45 days.',
      'A warning letter on your record and three points on your license.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 9, DUI Penalties): First-offense DUI penalties include administrative license suspension, completing a paid DUI program, and paying court fines.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Open container laws for alcohol and cannabis',
    coverageFactIds: ['fact-dui-open-container-vehicle']
  },

{
    id: 'q95',
    category: 'Rules of the Road',
    questionText: 'If a law enforcement officer asks you to submit to a breath or blood chemical test to determine your BAC, and you refuse:',
    imageUrl: '',
    options: [
      'You will be charged with a felony carrying a mandatory 30-day jail sentence.',
      'Your driving privilege is automatically suspended or revoked for at least 1 year, regardless of the court outcome.',
      'You will only receive a standard traffic ticket with no administrative suspension.',
      'Your vehicle will be permanently seized and sold at public auction.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 9, Refusal): Refusing a chemical test results in an automatic license suspension/revocation for 1 year (first offense), under the Implied Consent Law.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Chemical test refusal warnings',
    coverageFactIds: ['fact-dui-test-refusal']
  },

{
    id: 'q96',
    category: 'Safe Driving',
    questionText: 'It is illegal to carry a container of alcohol inside the passenger area of a motor vehicle in California if:',
    imageUrl: '',
    options: [
      'The container has been opened, unless it is kept sealed in the trunk.',
      'The bottle has a volume of more than 750 milliliters.',
      'You contain minor passengers under the age of 18 anywhere in the vehicle.',
      'The container is stored in any place other than the front glove box.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 9, Open Container): Open containers of alcohol must be kept in the trunk or in a place where passengers cannot access them.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Open container laws for alcohol and cannabis',
    coverageFactIds: ['fact-dui-open-container-vehicle']
  },

{
    id: 'q97',
    category: 'Rules of the Road',
    questionText: 'Under California law, a passenger under 21 years of age may carry unopened alcoholic beverages in a vehicle if:',
    imageUrl: '',
    options: [
      'They are accompanied by a parent, responsible adult, or relative designated by law.',
      'The alcoholic beverages are stored within the glove box compartment.',
      'They are driving to or from a licensed retail establishment for grocery delivery.',
      'The beverages are kept covered beneath the front driver seat.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 9, Minors and Alcohol): Minors under 21 cannot transport alcohol inside a vehicle unless accompanied by a parent, responsible relative, or designated legal guardian.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 57,
    sourceTopic: 'Minor alcohol possession rules',
    coverageFactIds: ['fact-dui-under21-carry-alcohol']
  },

{
    id: 'q98',
    category: 'Rules of the Road',
    questionText: 'What is the designated Blood Alcohol Concentration (BAC) limit under California\'s "Zero Tolerance" law for drivers under 21 years old?',
    imageUrl: '',
    options: [
      '0.01% or higher',
      '0.02% or higher',
      '0.05% or higher',
      '0.08% or higher'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 9, Under 21 limits): Zero Tolerance law makes it illegal for anyone under 21 to drive with a BAC of 0.01% or higher.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'Under 21 blood alcohol limits',
    coverageFactIds: ['fact-bac-limit-under-21']
  },

{
    id: 'q99',
    category: 'Safe Driving',
    questionText: 'If you are arrested for driving under the influence (DUI) and a chemical test reveals you have drug levels in your system:',
    imageUrl: '',
    options: [
      'You are legally exempt from DUI if the drug is a legal over-the-counter medicine.',
      'You can still be prosecuted for DUI of drugs.',
      'You cannot be charged if you possess a valid medical cannabis card.',
      'You can only be prosecuted if your blood chemical test exceeds 0.05% BAC.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 9, Drugs and Driving): Driving under the influence of any drug (prescription, over-the-counter, or illicit) that impairs your safety is illegal and subject to the same penalties as alcohol DUI.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Chemical test refusal warnings',
    coverageFactIds: ['fact-dui-test-refusal']
  },

{
    id: 'q100',
    category: 'Safe Driving',
    questionText: 'Under what condition can you legally use a designated driver to ensure safe transit after consuming alcohol?',
    imageUrl: '',
    options: [
      'They must be a licensed driver who is at least 25 years old.',
      'They must be completely sober and hold a valid driver\'s license.',
      'They must agree to drive only between sunrise and sunset.',
      'They must have a clean driving record with zero active traffic violation points.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 9, Safety Advice): A designated driver is a completely sober person who has a valid driver\'s license to drive passengers safely.',
    testGroup: 21,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Open container laws for alcohol and cannabis',
    coverageFactIds: ['fact-dui-open-container-vehicle']
  },

{
    id: 'q101',
    category: 'Rules of the Road',
    questionText: 'Two solid yellow lines painted on the pavement mean:',
    imageUrl: '',
    options: [
      'You can pass slow moving traffic on either side.',
      'Passing is strictly prohibited under any condition.',
      'Passing is permitted only during daylight hours or in school zones.',
      'You can cross only when entering or exiting a private driveway.'
    ],
    correctOptionIndex: 3,
    explanation: 'California Handbook (Section 5, Lane Markings): Do not pass over double solid yellow lines. However, you can cross them to make a left turn or enter/exit a public road or private driveway.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 6,
    sourceTopic: 'Double Solid Yellow Line Rules',
    coverageFactIds: ['fact-double-solid-yellow-passing']
  },

{
    id: 'q102',
    category: 'Rules of the Road',
    questionText: 'What must you do when driving on a two-lane highway when a solid yellow line is on your side of the road?',
    imageUrl: '',
    options: [
      'Passing is prohibited on your side.',
      'You may pass other vehicles if it is safe to do so.',
      'You may only cross it to make a U-turn.',
      'Passing is permitted only if you are driving a motorcycle.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5): A solid yellow line on your side means you cannot pass.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 6,
    sourceTopic: 'Single Solid Yellow Line Rules',
    coverageFactIds: ['fact-single-yellow-line']
  },

{
    id: 'q103',
    category: 'Rules of the Road',
    questionText: 'If a yellow lane divider consists of a broken yellow line on your side and a solid yellow line on the other side:',
    imageUrl: '',
    options: [
      'Vehicles on both sides are permitted to pass.',
      'You are permitted to pass if it is safe to do so.',
      'Passing is strictly prohibited on both sides.',
      'You may pass only if the vehicle in front of you signals their intent.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): If the broken line is on your side, you may pass when safe.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 6,
    sourceTopic: 'Solid Double Yellow Barrier Lines',
    coverageFactIds: ['fact-yellow-barrier-lines']
  },

{
    id: 'q104',
    category: 'Rules of the Road',
    questionText: 'What is the purpose of a "Turnout Lane" on a two-lane mountain highway in California?',
    imageUrl: '',
    options: [
      'To allow vehicles to make high-speed U-turns in emergencies.',
      'To allow slow-moving vehicles to pull over and let a queue of 5 or more trailing vehicles pass.',
      'A designated parking zone for commercial transport trucks.',
      'A lane reserved for charging electric cars.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Turnout Lanes): If you are driving slowly on a two-lane road and 5 or more vehicles are following you, you must pull into a turnout lane to let them pass.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 9,
    sourceTopic: 'Slow Driver Turnouts',
    coverageFactIds: ['fact-turnout-slow-vehicles']
  },

{
    id: 'q105',
    category: 'Rules of the Road',
    questionText: 'In California, you may drive in a High-Occupancy Vehicle (HOV) lane if:',
    imageUrl: '',
    options: [
      'You are driving a normal passenger vehicle with of a minimum number of passengers as posted.',
      'You are driving during off-peak hours and need to maintain your highway speed.',
      'Your vehicle is equipped with an active electronic toll collection transponder.',
      'You need to exit the freeway on the left-hand side within the next two miles.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5, HOV Lanes): HOV lanes are reserved for carpools, buses, motorcycles, or low-emission vehicles with a minimum number of occupants as posted.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 8,
    sourceTopic: 'Motorcycles in HOV Lanes',
    coverageFactIds: ['fact-hov-lane-usage', 'fact-hov-motorcycle-lane']
  },

{
    id: 'q106',
    category: 'Rules of the Road',
    questionText: 'A solid white line painted across a traffic lane at an intersection indicates:',
    imageUrl: '',
    options: [
      'The boundary where lane changes are permitted.',
      'A limit line (or stop line) showing where a vehicle must stop.',
      'A designated crosswalk area for bicycle traffic only.',
      'The beginning of a school zone or pedestrian crossing area.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Limit Lines): A solid white line across a lane is a limit line, marking where you must halt before entering a crosswalk or intersection.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 7,
    sourceTopic: 'Limit line stopping rules',
    coverageFactIds: ['fact-limit-line-stop-crosswalk']
  },

{
    id: 'q107',
    category: 'Rules of the Road',
    questionText: 'What is a "Center Left Turn Lane" used for?',
    imageUrl: '',
    options: [
      'To make high-speed passing maneuvers.',
      'To begin or complete a left turn, or start an approved U-turn.',
      'To pass other vehicles that are slowing down or stopped in traffic.',
      'To merge onto high-speed freeways.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Center Left Turn Lanes): Center left turn lanes are located in the middle of a two-way street and are used only to turn left or make U-turns.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 9,
    sourceTopic: 'Center Left Turn Lane Distance Limit',
    coverageFactIds: ['fact-center-left-turn-distance']
  },

{
    id: 'q108',
    category: 'Rules of the Road',
    questionText: 'What is the maximum distance you are legally permitted to drive inside a designated "Center Left Turn Lane" in California?',
    imageUrl: '',
    options: [
      '100 feet',
      '200 feet',
      '300 feet',
      '400 feet'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): You can only drive inside a center left turn lane for a maximum of 200 feet before completing your turn.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 9,
    sourceTopic: 'Center Left Turn Lane Distance Limit',
    coverageFactIds: ['fact-center-left-turn-distance']
  },

{
    id: 'q109',
    category: 'Rules of the Road',
    questionText: 'What do a series of solid white triangles painted on the pavement pointing towards oncoming vehicles indicate?',
    imageUrl: '',
    options: [
      'A severe bump or speed dip is immediately ahead.',
      'A "Yield Line" (or Shark\'s Teeth) showing where vehicles must yield or stop.',
      'A pedestrian crosswalk is starting immediately.',
      'A railroad crossing is 50 feet ahead.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Yield Lines): Yield lines (also called sharks teeth) are white triangles pointing toward oncoming vehicles that show where you must yield or stop.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 7,
    sourceTopic: 'Yield Line Definition',
    coverageFactIds: ['fact-yield-line-shark-teeth']
  },

{
    id: 'q110',
    category: 'Rules of the Road',
    questionText: 'If you see a solid yellow line and a broken white line separating lanes of traffic moving in your direction:',
    imageUrl: '',
    options: [
      'You must slow to 25 mph immediately.',
      'Passing or lane changes are permitted across the broken line, but prohibited across the yellow line.',
      'Lanes are about to merge and you must proceed straight only.',
      'You may only cross the lines if you are turning into a side street or driveway.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Lane Markings): Solid lines prohibit crossing/lane changes, whereas broken lines allow crossing when safe.',
    testGroup: 22,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 6,
    sourceTopic: 'Broken Yellow Line Passing',
    coverageFactIds: ['fact-broken-yellow-line']
  },

{
    id: 'q111',
    category: 'Rules of the Road',
    questionText: 'Under California law, when must you turn on your vehicle\'s headlights?',
    imageUrl: '',
    options: [
      'Only when there are no streetlights on the road.',
      'From 30 minutes after sunset until 30 minutes before sunrise, and whenever visibility is reduced to under 1,000 feet.',
      'From sunset to sunrise, regardless of the visibility distance.',
      'Only on days when there is active precipitation.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, Headlights): Headlights must be turned on from 30 minutes after sunset to 30 minutes before sunrise, or whenever weather/visibility is poor enough that you cannot see 1,000 feet ahead.',
    testGroup: 23,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Headlight visibility distance',
    coverageFactIds: ['fact-headlights-dark-1000ft']
  },

{
    id: 'q112',
    category: 'Rules of the Road',
    questionText: 'If you are driving with your vehicle\'s high-beam headlights on, you must dim them to low beams within how many feet of an oncoming vehicle?',
    imageUrl: '',
    options: [
      '200 feet',
      '300 feet',
      '500 feet',
      '1,000 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 7, High-Beams): You must dim your high-beam headlights to low beams within 500 feet of an oncoming vehicle.',
    testGroup: 23,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Headlights in adverse weather',
    coverageFactIds: ['fact-headlights-wipers-running']
  },

{
    id: 'q113',
    category: 'Rules of the Road',
    questionText: 'You must dim your high-beam headlights to low beams within how many feet when following directly behind another vehicle?',
    imageUrl: '',
    options: [
      '200 feet',
      '300 feet',
      '500 feet',
      '800 feet'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, High-Beams): You must dim your high beams to low beams within 300 feet when following another vehicle from behind.',
    testGroup: 23,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Dimming high beams - Following traffic',
    coverageFactIds: ['fact-dim-beams-following-300ft']
  },

{
    id: 'q114',
    category: 'Rules of the Road',
    questionText: 'Under California law, if weather conditions require you to run your windshield wipers continuously, you must also:',
    imageUrl: '',
    options: [
      'Activate your emergency hazard flasher lights.',
      'Turn on your low-beam headlights.',
      'Activate your rear window defroster.',
      'Increase your tire pressure by 5 psi.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, Headlights): California law requires you to turn on low-beam headlights when windshield wipers are activated due to rain, snow, or fog.',
    testGroup: 23,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Headlights in adverse weather',
    coverageFactIds: ['fact-headlights-wipers-running']
  },

{
    id: 'q115',
    category: 'Rules of the Road',
    questionText: 'What is the minimum legal thread depth allowed for any passenger car tire in California?',
    imageUrl: '',
    options: [
      '1/32 of an inch',
      '2/32 of an inch',
      '4/32 of an inch',
      '6/32 of an inch'
    ],
    correctOptionIndex: 1,
    explanation: 'California Vehicle Code (CVC 27465b): Tires are legally bald and unsafe to operate if they have less than 2/32 (1/16) of an inch of tread depth in any two adjacent major grooves.',
    testGroup: 23,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Minimum legal tire tread depth',
    coverageFactIds: ['fact-safe-tire-tread-depth']
  },

{
    id: 'q116',
    category: 'Safe Driving',
    questionText: 'What does a red warning indicator light shaped like a thermometer or engine on your dashboard represent?',
    imageUrl: '',
    options: [
      'Low fuel levels.',
      'The engine temperature is overheating.',
      'The tires have low pressure.',
      'The engine oil pressure is dangerously low.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 11, Engine Warning): A red engine or thermometer warning light indicates that the cooling system is overheating. Pull over safely and turn off the engine.',
    testGroup: 23,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Dashboard temperature and engine warning indicators',
    coverageFactIds: ['fact-dashboard-warning-lights']
  },

{
    id: 'q117',
    category: 'Safe Driving',
    questionText: 'If your vehicle is equipped with electronic stability control (ESC) or anti-lock brakes (ABS), what should you do in an emergency braking situation on slippery roads?',
    imageUrl: '',
    options: [
      'Pump the brakes rapidly to prevent lock-up.',
      'Apply firm, continuous pressure on the brake pedal and let the system handle the traction.',
      'Alternate pumping the brake pedal and pulling the emergency brake lever.',
      'Rapidly shift between neutral and drive to help slow down.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 11, Safe Braking): For ABS/ESC equipped vehicles, do not pump the brakes. Maintain firm, steady pressure so the computer can modulate skid control.',
    testGroup: 23,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 47,
    sourceTopic: 'Slippery skid control steering rules',
    coverageFactIds: ['fact-skid-release-accelerator-no-brakes']
  },

{
    id: 'q118',
    category: 'Safe Driving',
    questionText: 'It is highly dangerous and illegal to drive with a cracked or severely chipped windshield in California because:',
    imageUrl: '',
    options: [
      'It makes the vehicle run hotter in direct sunlight.',
      'It impairs the driver\'s vision and weakens the structural integrity of the vehicle in a rollover collision.',
      'It prevents the vehicle\'s windshield wipers from clearing rain properly.',
      'It can cause the safety airbags to deploy unexpectedly.'
    ],
    correctOptionIndex: 1,
    explanation: 'Supplemental Content (Windshield Safety): Under California vehicle safety guidelines, a cracked or damaged windshield impairs safe vision and can fail to support the roof during a rollover crash.',
    testGroup: 23,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 41,
    sourceTopic: 'Windshield passenger corner objects',
    coverageFactIds: ['fact-windshield-lower-corner-passenger']
  },

{
    id: 'q119',
    category: 'Rules of the Road',
    questionText: 'Under California regulations, window tinting is strictly restricted. For the front side driver and passenger windows, tinting must:',
    imageUrl: '',
    options: [
      'Allow no more than 30% of light to pass through.',
      'Allow at least 70% of light to pass through.',
      'Only be silver or reflective metallic shade.',
      'Be completely dark without any light transmission.'
    ],
    correctOptionIndex: 1,
    explanation: 'California law states that front side windows must have a visible light transmission (VLT) of at least 70% to ensure law enforcement officers can observe the driver.',
    testGroup: 23,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 41,
    sourceTopic: 'Windshield driver corner objects',
    coverageFactIds: ['fact-windshield-lower-corner-driver']
  },

{
    id: 'q120',
    category: 'Safe Driving',
    questionText: 'If your steering wheel starts vibrating or pulling strongly to one side while driving on a flat, paved highway, it usually indicates:',
    imageUrl: '',
    options: [
      'The engine is low on coolant.',
      'The tires are out of balance, misaligned, or one tire is rapidly deflating.',
      'The transmission fluid is low or needs flushing.',
      'The vehicle\'s exhaust system is loose or dragging.'
    ],
    correctOptionIndex: 1,
    explanation: 'Strong vibration or pulling in the steering wheel points to tire low pressure, tire misalignment, or suspension issues. Pull over and check your tires.',
    testGroup: 23,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 54,
    sourceTopic: 'Tire blowout recovery procedures',
    coverageFactIds: ['fact-flat-tire-blowout-safety']
  },

{
    id: 'q121',
    category: 'Rules of the Road',
    questionText: 'In California, a driver under the age of 18 is legally permitted to use a wireless cell phone:',
    imageUrl: '',
    options: [
      'Only with a hands-free Bluetooth system.',
      'Only during daylight hours.',
      'Not at all while driving, even if equipped with hands-free or voice-activated systems, except in a genuine emergency.',
      'Only when stopped in heavy rush-hour highway traffic.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 7, Technology): Minors under 18 years of age cannot use a cell phone or electronic wireless communications device while driving for any reason, except to contact emergency services.',
    testGroup: 24,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 54,
    sourceTopic: 'Minors cell phone restrictions',
    coverageFactIds: ['fact-distracted-cell-minors-rules']
  },

{
    id: 'q122',
    category: 'Rules of the Road',
    questionText: 'For drivers 18 years of age or older, a cell phone may be used while driving ONLY if:',
    imageUrl: '',
    options: [
      'It is held in the hand closest to the window.',
      'It is mounted on the windshield or dashboard in an approved 7-inch or 5-inch corner spot, and used hands-free.',
      'The call lasts less than 3 minutes.',
      'You are driving on non-highway roads.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, Technology): Drivers 18 and older must use hands-free technology and mount phones in designated corners of the windshield or dashboard so as not to block vision.',
    testGroup: 24,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 54,
    sourceTopic: 'Hands-free cell phone rules',
    coverageFactIds: ['fact-distracted-cell-adults-safety']
  },

{
    id: 'q123',
    category: 'Rules of the Road',
    questionText: 'Is it legal for a motorist to wear headphones, a headset, or earplugs in both ears while driving in California?',
    imageUrl: '',
    options: [
      'Yes, provided the headphones are equipped with active noise cancellation.',
      'No, it is strictly illegal to cover or plug both ears while driving or riding a bicycle, except for authorized medical or safety personnel.',
      'Yes, if the headset is used exclusively for hands-free phone calls.',
      'Only if listening to active navigation instructions.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3, Health/Hearing): Drivers and bicyclists are legally prohibited from wearing earplugs or headsets in both ears while on public roads (Page 3/7).',
    testGroup: 24,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Hearing restrictions',
    coverageFactIds: ['fact-hearing-headset-dual-earplug']
  },

{
    id: 'q124',
    category: 'Safe Driving',
    questionText: 'Is it illegal under California law to dump or abandon any animal on a highway, and what is the maximum penalty?',
    imageUrl: '',
    options: [
            'It is only illegal inside city limits, carrying a standard $100 fine.',
      'It is a misdemeanor carrying a fine of up to $1,000, six months in county jail, or both.',
      'It is a minor infraction, carrying a warning letter and a local safety class fee.',
      'It is completely legal on unpaved roadway shoulders or farm roads.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Laws and Rules): Dumping or abandoning an animal on a highway is a misdemeanor punishable by a fine of up to $1,000, six months in county jail, or both.',
    testGroup: 24,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 40,
    sourceTopic: 'Animal dumping crimes',
    coverageFactIds: ['fact-animal-abandonment-highway']
  },

{
    id: 'q125',
    category: 'Rules of the Road',
    questionText: 'In California, every motor vehicle operated on public roadways must meet "Financial Responsibility" insurance requirements. What are the minimum coverage limits?',
    imageUrl: '',
    options: [
      '$5,000/$10,000/$2,000',
      '$30,000 for single bodily injury, $60,000 for multiple injury, and $15,000 for property damage.',
      '$50,000 for single liability, and $100,000 for complete coverage.',
      'Must carry comprehensive and collision coverage, regardless of vehicle value.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 8, Insurance Requirements): Minimum physical liability requirements are $30k per person injured, $60k per accident for all persons injured, and $15k for property damage (Page 58).',
    testGroup: 24,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 58,
    sourceTopic: 'Minimum vehicle liability coverage',
    coverageFactIds: ['fact-insurance-minimum-liability-limits']
  },

{
    id: 'q126',
    category: 'Safe Driving',
    questionText: 'What must you do if your vehicle breaks down and stalls in the middle of a high-speed freeway?',
    imageUrl: '',
    options: [
      'Exit the car immediately and stand in the active travel lanes to flag down passing vehicles.',
      'Turn on your emergency hazard flashers, exit to the side of the road if safe, and stay inside the vehicle with seatbelts buckled.',
      'Attempt to push the vehicle off the active highway lanes with help from passengers.',
      'Stand in front of your vehicle with a white flag to signal other drivers.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, Freeway Breakdowns): Turn on hazard double-flashers, pull onto the shoulder, and stay buckled inside your vehicle unless it is safe to walk or the car is on fire.',
    testGroup: 24,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 47,
    sourceTopic: 'Slippery skid control steering rules',
    coverageFactIds: ['fact-skid-release-accelerator-no-brakes']
  },

{
    id: 'q127',
    category: 'Rules of the Road',
    questionText: 'If you are involved in a collision where someone is injured or killed in California, you or your representative must file an official DMV report within:',
    imageUrl: '',
    options: [
      '24 hours',
      '3 days',
      '10 days',
      '30 days'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 8, Collisions): You must report a collision involving death, injury, or property damage over $1,000 to the DMV using an SR-1 report within 10 days.',
    testGroup: 24,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 59,
    sourceTopic: 'DMV SR-1 collision reporting threshold',
    coverageFactIds: ['fact-collision-report-sr1-dmv']
  },

{
    id: 'q128',
    category: 'Rules of the Road',
    questionText: 'It is legally prohibited for any passenger under 18 to ride in the bed of a pickup truck in California unless:',
    imageUrl: '',
    options: [
      'The pickup truck is traveling at speeds under 25 mph.',
      'The bed is covered by an approved camper shell or has federally-mandated secure seats and seatbelts.',
      'The cab of the pickup truck is fully loaded.',
      'They are supervised by at least one passenger who is 21 or older.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Vehicle Code (CVC 23116): No person can drive a pickup truck with a passenger in the bed unless they are restrained in a seat with a seatbelt or protected by an approved camper shell/body.',
    testGroup: 24,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 40,
    sourceTopic: 'Pickup cargo bed seats',
    coverageFactIds: ['fact-pickup-cargo-bed-seats']
  },

{
    id: 'q129',
    category: 'Rules of the Road',
    questionText: 'Under California law, you may not park a vehicle within how many feet of a fire station driveway?',
    imageUrl: '',
    options: [
      'Within 10 feet of either side.',
      'Within 15 feet of either side.',
      'Within 25 feet of either side.',
      'Within 5 feet of either side.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Restricted Parking): It is illegal to park a vehicle within 15 feet of a fire station driveway.',
    testGroup: 24,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 20,
    sourceTopic: 'Illegal parking fire hydrant distance',
    coverageFactIds: ['fact-illegal-parking-hydrant-distance', 'fact-illegal-parking-crosswalk-distance']
  },

{
    id: 'q130',
    category: 'Safe Driving',
    questionText: 'If you are driving and your gas pedal suddenly sticks to the floor causing uncontrollable acceleration, you should:',
    imageUrl: '',
    options: [
      'Turn off the ignition key instantly, lock the steering column, and stomp on the brake.',
      'Shift the gear into Neutral, apply the brakes firmly, and guide the car safely to the road shoulder.',
      'Slam the car into Park immediately to lock the transmission.',
      'Apply the emergency parking brake with full force and turn off the engine.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 11, Sticking Accelerator): If your engine accelerates uncontrollably, shift to Neutral (N), apply brakes steadily, guide the vehicle off the road, and turn off the engine when safe.',
    testGroup: 24,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 47,
    sourceTopic: 'Slippery skid control steering rules',
    coverageFactIds: ['fact-skid-release-accelerator-no-brakes']
  },

{
    id: 'q131',
    category: 'Rules of the Road',
    questionText: 'When two vehicles meet on a steep mountain road where only one vehicle can pass, which vehicle has the right-of-way?',
    imageUrl: '',
    options: [
      'The vehicle traveling downhill, because gravity makes it harder to stop.',
      'The vehicle traveling uphill, and the downhill vehicle must back up until there is room to pass.',
      'The heavier vehicle wins right-of-way.',
      'Whichever vehicle has more passengers is granted priority.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Mountain Roads): The vehicle traveling uphill has the right-of-way. The downhill vehicle must back up because it can back up more safely than the uphill vehicle can back down.',
    testGroup: 25,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 32,
    sourceTopic: 'Steep road right-of-way rules',
    coverageFactIds: ['fact-mountain-rightofway']
  },

{
    id: 'q132',
    category: 'Safe Driving',
    questionText: 'If your vehicle starts to hydroplane on a wet road (tires lose contact with the pavement), you should:',
    imageUrl: '',
    options: [
      'Slam on your brakes immediately to stop the skid.',
      'Turn the steering wheel sharply in the direction of the nearest curb.',
      'Ease your foot off the accelerator, keep the steering wheel straight, and avoid braking.',
      'Slam on the hazard flashers and make a sharp lane change to the shoulder.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 11, Hydroplaning): If you hydroplane (typically occurring above 50 mph), gradually slow down by releasing the accelerator without braking, and steer straight.',
    testGroup: 25,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 49,
    sourceTopic: 'Hydroplane brakes and acceleration',
    coverageFactIds: ['fact-hydroplane-slow-gradual']
  },

{
    id: 'q133',
    category: 'Rules of the Road',
    questionText: 'Under California\'s Negligent Operator Treatment System (NOTS), a driver\'s license will be suspended if a driver accumulates how many points?',
    imageUrl: '',
    options: [
      '2 points in 12 months.',
      '4 points in 12 months, 6 points in 24 months, or 8 points in 36 months.',
      '5 points in 18 months.',
      '8 points within a consecutive 48-month period.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3, NOTS): A driver is considered a negligent operator and suspended if they get: 4 points in 12 months, 6 points in 24 months, or 8 points in 36 months.',
    testGroup: 25,
    sourceSection: 'Section 1: The California Driver\'s License',
    sourcePage: 1,
    sourceTopic: 'License classes',
    coverageFactIds: ['fact-class-c-license']
  },

{
    id: 'q134',
    category: 'Rules of the Road',
    questionText: 'What is the speed limit in a "Blind Intersection" where you cannot see 100 feet in either direction during the last 100 feet before crossing?',
    imageUrl: '',
    options: [
      '15 mph',
      '20 mph',
      '25 mph',
      '30 mph'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Speed Limits): The speed limit is 15 mph in any blind intersection (where you cannot see clearly 100 feet in both directions).',
    testGroup: 25,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Blind intersection speed limit',
    coverageFactIds: ['fact-blind-intersection-speed']
  },

{
    id: 'q135',
    category: 'Rules of the Road',
    questionText: 'What is the speed limit in any alleyway in California?',
    imageUrl: '',
    options: [
      '10 mph',
      '15 mph',
      '20 mph',
      '25 mph'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Speed Limits): The speed limit in any alleyway under California law is 15 mph.',
    testGroup: 25,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Alley speed limit',
    coverageFactIds: ['fact-alley-speed-limit']
  },

{
    id: 'q136',
    category: 'Rules of the Road',
    questionText: 'When you stop at a railroad crossing, how many feet from the nearest track must you stop?',
    imageUrl: '',
    options: [
      'Between 5 and 15 feet.',
      'Between 15 and 50 feet.',
      'Between 10 and 20 feet.',
      'At least 100 feet back.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Railroad Crossings): You must stop your vehicle between 15 and 50 feet from the nearest track when a train is approaching or signal gates are active.',
    testGroup: 25,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Distance bounds from railroad tracks',
    coverageFactIds: ['fact-railroad-track-stop-distance']
  },

{
    id: 'q137',
    category: 'Rules of the Road',
    questionText: 'What is the speed limit within 100 feet of a railroad crossing if you cannot see the tracks for 400 feet in both directions?',
    imageUrl: '',
    options: [
      '15 mph',
      '20 mph',
      '25 mph',
      '30 mph'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Railroads): The speed limit is 15 mph within 100 feet of a crossing if you cannot see the tracks for 400 feet in both directions.',
    testGroup: 25,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Railroad crossing speed limit',
    coverageFactIds: ['fact-railroad-obscured-speed']
  },

{
    id: 'q138',
    category: 'Safe Driving',
    questionText: 'How far ahead of your vehicle should you scan the road to avoid last-minute emergency braking and hazards?',
    imageUrl: '',
    options: [
      '3 to 5 seconds.',
      '5 to 8 seconds.',
      '10 to 12 seconds.',
      '30 to 45 seconds.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 7, Defensive Driving): To avoid sudden stops and spot hazards, scan the road 10 to 12 seconds ahead of your vehicle.',
    testGroup: 25,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 44,
    sourceTopic: 'Visual search scanning times',
    coverageFactIds: ['fact-scan-road-10seconds']
  },

{
    id: 'q139',
    category: 'Rules of the Road',
    questionText: 'When you park your vehicle on a downhill street next to a curb, in which direction should you turn your front wheels?',
    imageUrl: '',
    options: [
      'Away from the curb (left).',
      'Toward the curb (right).',
      'Keep the wheels completely straight.',
      'Let the wheels rest parallel to the curb lane.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Hill Parking): When parking downhill next to a curb, turn your front wheels toward the curb (right) so the car rolls into the curb if the brakes fail.',
    testGroup: 26,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 19,
    sourceTopic: 'Parking downhill wheels',
    coverageFactIds: ['fact-hill-parking-downhill']
  },

{
    id: 'q140',
    category: 'Rules of the Road',
    questionText: 'When you park your vehicle on an uphill street next to a curb, in which direction should you turn your wheels?',
    imageUrl: '',
    options: [
      'Away from the curb (left).',
      'Toward the curb (right).',
      'Keep the wheels completely straight.',
      'Turn the wheels parallel to the street curb.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Hill Parking): When parking uphill next to a curb, turn your front wheels away from the curb (left) and let your vehicle roll back a few inches so the tires rest against the curb.',
    testGroup: 26,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 19,
    sourceTopic: 'Parking uphill wheels with curb',
    coverageFactIds: ['fact-hill-parking-uphill']
  },

{
    id: 'q141',
    category: 'Rules of the Road',
    questionText: 'If you are parking uphill or downhill on a street that has NO curb, in which direction should you turn your front wheels?',
    imageUrl: '',
    options: [
      'Toward the center of the road (left).',
      'Toward the side of the road (right).',
      'Keep the wheels completely straight.',
      'Turn the wheels parallel to the shoulder boundary.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Hill Parking): If there is no curb, turn your wheels toward the side of the road (right), so that if brakes fail, the vehicle rolls away from the center of the road.',
    testGroup: 26,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 19,
    sourceTopic: 'Parking on hills with no curb',
    coverageFactIds: ['fact-hill-parking-nocurb']
  },

{
    id: 'q142',
    category: 'Rules of the Road',
    questionText: 'If you extend your left arm straight out of your driver-side window, what hand signal are you indicating?',
    imageUrl: '',
    options: [
      'Right turn.',
      'Left turn.',
      'Slow down or stop.',
      'U-turn.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7, Signaling): Extending your arm straight out indicates a left-hand turn.',
    testGroup: 26,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Manual hand signal for a Left Turn',
    coverageFactIds: ['fact-hand-signal-left-arm']
  },

{
    id: 'q143',
    category: 'Rules of the Road',
    questionText: 'If you extend your left arm bent upward (90 degrees) out of your driver-side window, what signaling are you indicating?',
    imageUrl: '',
    options: [
      'Right turn.',
      'Left turn.',
      'Slow down or stop.',
      'A friendly wave.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 7, Signaling): Extending your left arm bent upward indicates a right-hand turn.',
    testGroup: 26,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Manual hand signal for a Right Turn',
    coverageFactIds: ['fact-hand-signal-right-arm']
  },

{
    id: 'q144',
    category: 'Rules of the Road',
    questionText: 'If you extend your left arm bent downward out of your driver-side window, what signaling are you indicating?',
    imageUrl: '',
    options: [
      'Right turn.',
      'Left turn.',
      'Slow down or stop.',
      'Yielding to oncoming traffic.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 7, Signaling): Extending your left arm bent downward indicates a slow down or stop signaling.',
    testGroup: 26,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Manual hand signal to Slow down or Stop',
    coverageFactIds: ['fact-hand-signal-slow-stop-arm']
  },

{
    id: 'q145',
    category: 'Rules of the Road',
    questionText: 'If you collide with a parked vehicle on a public roadway and cannot locate the owner, California law requires you to:',
    imageUrl: '',
    options: [
      'Drive away immediately if your car has no damage.',
      'Wait up to 3 hours, then proceed home.',
      'Leave a note with your name, phone, and address securely attached, and report the accident to police or CHP immediately.',
      'Call a towing company to impound the parked car.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 8, Collisions): If you hit a parked car, you must leave a clear note with your name, telephone number, address, and notify the local police or CHP without delay.',
    testGroup: 26,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 59,
    sourceTopic: 'Collision with parked vehicle or property',
    coverageFactIds: ['fact-collision-parked-vehicle-note-report']
  },

{
    id: 'q146',
    category: 'Rules of the Road',
    questionText: 'Under California law, do riders of horses or horse-drawn vehicles have the same rights and rules as motor vehicle drivers?',
    imageUrl: '',
    options: [
      'No, they must ride on sidewalks only.',
      'Yes, they have the exact same traffic rights and duties.',
      'Only on mountain highways during sunlight.',
      'No, they must run in bicycle lanes.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Animals on Road): People riding animals or driving animal-drawn vehicles on public roads are subject to the same traffic laws and rights as drivers.',
    testGroup: 26,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 32,
    sourceTopic: 'Animal-drawn vehicles and riders on public roads',
    coverageFactIds: ['fact-sharing-road-animal-drawn-vehicles']
  },

{
    id: 'q147',
    category: 'Rules of the Road',
    questionText: 'When can you legally make a right turn after stopping at a solid red light?',
    imageUrl: '',
    options: [

      'Only if it is daytime and there are no pedestrians walking in the crosswalk.',
      'Only when there is a green arrow signal or a police officer directs you to turn.',
      'After stopping completely, yielding to oncoming vehicles and pedestrians, as long as no "No Turn on Red" sign is posted.',
      'At any time, since right turns on red are always permitted without stopping in California.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 5): You can make a right turn against a solid red light after making a complete stop, yielding to vehicles and pedestrians, unless a "No Turn on Red" sign is posted.',
    testGroup: 26,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 11,
    sourceTopic: 'Right Turns on Red Lights',
    coverageFactIds: ['fact-right-turn-red-light']
  },

{
    id: 'q148',
    category: 'Rules of the Road',
    questionText: 'When are you legally permitted to make a left turn against a solid red light in California?',
    imageUrl: '',
    options: [

      'Only when turning from a one-way street onto another one-way street after stopping.',
      'At any time when there is no oncoming traffic from the right.',
      'Only during late night hours when intersections are empty.',
      'Left turns on red are never permitted under any circumstances.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5): A left turn against a solid red light is only allowed when you are turning from a one-way street onto another one-way street, after coming to a complete stop and yielding.',
    testGroup: 26,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 13,
    sourceTopic: 'Left Turns on Red Lights',
    coverageFactIds: ['fact-left-turn-red-oneway']
  },

{
    id: 'q149',
    category: 'Safe Driving',
    questionText: 'During a traffic stop in California, which officers are legally allowed to ask you about your immigration status?',
    imageUrl: '',
    options: [

      'Any California highway patrol or local city police officer.',
      'Only federal law enforcement officers; state and local officers are prohibited from asking.',
      'All law enforcement officers, including local sheriff deputies.',
      'Sheriff deputies only during late-night traffic stops.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): California state and local law enforcement officers are prohibited from asking about your immigration status. Only federal officers can legally ask.',
    testGroup: 26,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 22,
    sourceTopic: 'Officer immigration questioning rights',
    coverageFactIds: ['fact-le-stop-immigration']
  },

{
    id: 'q150',
    category: 'Road Signs',
    questionText: 'If you accidentally drive against traffic at night, how can road reflectors help warn you that you are going the wrong way?',
    imageUrl: '',
    options: [

      'The reflectors will shine red in your headlights.',
      'The reflectors will flash blue to indicate danger.',
      'The reflectors will absorb light and look completely black.',
      'The reflectors will reflect bright green to alert you.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5): If you enter a roadway against traffic at night, the road reflectors will shine red in your headlights, warning you that you are driving the wrong way.',
    testGroup: 26,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 26,
    sourceTopic: 'Wrong Way detection on roads',
    coverageFactIds: ['fact-sign-wrong-way-reflectors']
  },

{
    id: 'q151',
    category: 'Rules of the Road',
    questionText: 'When a railroad crossing alarm or gate warns of an oncoming train, how far from the nearest track must you stop?',
    imageUrl: '',
    options: [

      'At least 5 feet.',
      'At least 10 feet.',
      'At least 15 feet.',
      'At least 50 feet.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 6, Speed Limits): When a train is approaching, you must stop at least 15 feet away from the nearest railroad track.',
    testGroup: 27,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Distance bounds from railroad tracks',
    coverageFactIds: ['fact-railroad-track-stop-distance']
  },

{
    id: 'q152',
    category: 'Safe Driving',
    questionText: 'What is the California law regarding smoking inside a vehicle when a minor is present?',
    imageUrl: '',
    options: [

      'It is legal as long as the windows are fully rolled down.',
      'It is illegal and punishable by a fine at any time.',
      'It is allowed only if the minor is your own child.',
      'It is allowed only if the vehicle is parked on private property.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Laws and Rules): It is illegal to smoke inside a vehicle at any time when a minor (under 18 years old) is present. Doing so is punishable by a fine.',
    testGroup: 27,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 40,
    sourceTopic: 'Smoking with passenger minors present',
    coverageFactIds: ['fact-smoke-minor-present']
  },

{
    id: 'q153',
    category: 'Safe Driving',
    questionText: 'How far can cargo legally extend from the sides of a passenger vehicle in California?',
    imageUrl: '',
    options: [

      'Up to 6 inches on both the left and right sides.',
      'No extension is allowed on the left side, and up to 6 inches on the right side beyond fenders.',
      'Up to 12 inches on the left side and 12 inches on the right side.',
      'Up to 1 foot on the left side, but no extension is allowed on the right side.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6): Passenger vehicles may not carry cargo that extends beyond fenders on the left side, and no more than 6 inches beyond fenders on the right side.',
    testGroup: 27,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 40,
    sourceTopic: 'Car side fender extension limits',
    coverageFactIds: ['fact-passenger-cargo-side-limits']
  },

{
    id: 'q154',
    category: 'Safe Driving',
    questionText: 'Where are you legally allowed to mount an electronic toll payment device on your vehicle’s windshield?',
    imageUrl: '',
    options: [

      'A 5-inch square is allowed in the center uppermost portion of the windshield.',
      'A 10-inch square in the exact center of the driver’s main line of sight.',
      'An 8-inch circle anywhere on the windshield surface.',
      'In the lower right-hand corner of the windshield only.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6): You may mount an electronic toll payment device in a 5-inch square section located in the center uppermost portion of your windshield.',
    testGroup: 27,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 41,
    sourceTopic: 'Windshield electronic toll pay location',
    coverageFactIds: ['fact-windshield-electronic-toll-upper']
  },

{
    id: 'q155',
    category: 'Safe Driving',
    questionText: 'What can happen to your vehicle if you allow an unlicensed driver to drive it and they are caught in California?',
    imageUrl: '',
    options: [

      'The vehicle will be re-registered automatically.',
      'The vehicle may be legally impounded for 30 days.',
      'Nothing, as only the driver receives a citation.',
      'The vehicle’s title is permanently transferred to the state.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6): If an unlicensed driver is caught driving your car, your vehicle can be legally impounded for 30 days.',
    testGroup: 27,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 41,
    sourceTopic: 'Unlicensed vehicle impounds',
    coverageFactIds: ['fact-unlicensed-driver-impound']
  },

{
    id: 'q156',
    category: 'Safe Driving',
    questionText: 'For provisional drivers, what happens if you get two at-fault collisions or traffic violations within 12 months?',
    imageUrl: '',
    options: [

      'You cannot drive for 30 days unless accompanied by a licensed adult who is 25 or older.',
      'Your license is permanently revoked and you must retake driver education.',
      'You must drive only during daylight hours for six months.',
      'You receive a warning letter but face no driving restrictions.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 2, Getting a Driver’s License): If you get two at-fault collisions or traffic violations within 12 months, your driving privilege is restricted for 30 days unless accompanied by a licensed adult 25 years or older.',
    testGroup: 28,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 42,
    sourceTopic: 'Minor license violation count two',
    coverageFactIds: ['fact-minor-violation-second-action']
  },

{
    id: 'q157',
    category: 'Safe Driving',
    questionText: 'If a provisional minor driver gets three at-fault collisions or traffic violations within 12 months, what is the mandatory action?',
    imageUrl: '',
    options: [

      'Your driving privilege is suspended for 6 months and you are placed on probation for 1 year.',
      'You are fined $5,000 and must attend traffic school.',
      'You face a 30-day driving restriction under parent supervision.',
      'Your vehicle registration is suspended, but you can still drive other cars.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 2, Getting a Driver’s License): If you accumulate three at-fault collisions or traffic violations within 12 months, your driving privilege is suspended for 6 months and you are placed on probation for 1 year.',
    testGroup: 28,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 42,
    sourceTopic: 'Minor license violation count three',
    coverageFactIds: ['fact-minor-violation-third-action']
  },

{
    id: 'q158',
    category: 'Safe Driving',
    questionText: 'Why should drivers be extra cautious on bridges and overpasses during cold or damp weather?',
    imageUrl: '',
    options: [

      'Bridges and overpasses tend to freeze before the rest of the road, creating hidden icy patches.',
      'Tire pressure decreases rapidly when driving over metal bridge supports.',
      'Speed limits are cut in half on all elevated roads during winter.',
      'Bridges have special speed sensors that are highly sensitive to moisture.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Road Conditions): Bridges and overpasses tend to freeze before the rest of the road, which can create dangerous, hidden icy patches in shaded spots.',
    testGroup: 28,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 48,
    sourceTopic: 'Slick bridge freezing order',
    coverageFactIds: ['fact-bridge-overpass-freeze']
  },

{
    id: 'q159',
    category: 'Safe Driving',
    questionText: 'Why is it highly illegal and dangerous to leave children or animals inside a closed, unattended vehicle in the sun?',
    imageUrl: '',
    options: [

      'Temperatures inside a vehicle can rise rapidly, creating life-threatening heat within minutes.',
      'It makes your vehicle a higher target for carjacking.',
      'The car alarm may trigger automatically and drain the battery.',
      'It is only dangerous if the outdoor temperature is above 90 degrees Fahrenheit.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Laws and Rules): It is extremely dangerous and illegal to leave children or pets inside a hot vehicle, as temperatures inside can rise rapidly, causing heat stroke or death.',
    testGroup: 28,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Dangerous hot car animal storage',
    coverageFactIds: ['fact-unattended-child-hot-vehicle']
  },

{
    id: 'q160',
    category: 'Rules of the Road',
    questionText: 'What does California’s Basic Speed Law require of all drivers?',
    imageUrl: '',
    options: [

      'You must always drive at the exact speed limit shown on roadside signs.',
      'You may never drive faster than is safe for the current road, weather, and traffic conditions.',
      'You are required to drive at least 10 mph below the speed limit when it is dark.',
      'You should match the speed of the fastest vehicle in your lane to prevent tailgating.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Speed Limits): California’s Basic Speed Law says you must never drive faster than is safe for the current road, weather, and safety conditions, regardless of the posted speed limit.',
    testGroup: 28,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Basic Speed Law',
    coverageFactIds: ['fact-speed-basic-speed-law']
  },

{
    id: 'q161',
    category: 'Rules of the Road',
    questionText: 'Unless otherwise posted, what is the maximum speed limit on two-lane undivided highways and for vehicles towing in California?',
    imageUrl: '',
    options: [

      '55 mph.',
      '65 mph.',
      '70 mph.',
      '45 mph.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Speed Limits): Unless otherwise posted, the maximum speed limit is 65 mph on highways, and 55 mph on two-lane undivided roads or for vehicles that are towing.',
    testGroup: 29,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Maximum speed limits',
    coverageFactIds: ['fact-speed-freeway-limit-ideal']
  },

{
    id: 'q162',
    category: 'Safe Driving',
    questionText: 'If your vehicle stalls on a railroad track and you see a train approaching, what is the safest direction to run after exiting?',
    imageUrl: '',
    options: [

      'Diagonally away from the tracks in the direction the train is coming from.',
      'Straight down the tracks in the same direction the train is moving.',
      'Directly next to the tracks to signal the train conductor to stop.',
      'Stay inside the vehicle and lay flat across the seats for protection.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Emergencies): If your car stalls on tracks with a train coming, exit immediately. Run diagonally away from the tracks in the direction the train is coming from, to avoid being hit by flying debris when the train strikes your vehicle, and call 911.',
    testGroup: 29,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 53,
    sourceTopic: 'Stalled vehicle railroad train hazards',
    coverageFactIds: ['fact-stalled-tracks-train-approaching']
  },

{
    id: 'q163',
    category: 'Safe Driving',
    questionText: 'What is the California law for adult drivers (21 or older) regarding cell phone use while driving?',
    imageUrl: '',
    options: [

      'They may use handheld phones during slow-moving heavy traffic.',
      'They may only use a cell phone if it is set up in hands-free or voice-activated mode.',
      'They are allowed to text while stopped at red lights.',
      'Cell phone use of any kind is completely illegal for all drivers on California roads.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Distracted Driving): Adult drivers can legally use a cell phone only in a hands-free or voice-operated mode. Handheld use is illegal.',
    testGroup: 29,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 54,
    sourceTopic: 'Hands-free cell phone rules',
    coverageFactIds: ['fact-distracted-cell-adults-safety']
  },

{
    id: 'q164',
    category: 'Safe Driving',
    questionText: 'For persons age 13 to 20, what is a consequence of being convicted of operating a bicycle under the influence in California?',
    imageUrl: '',
    options: [

      'Your driving privilege will be suspended or delayed for one year.',
      'Your bicycle is permanently confiscated and sold at auction.',
      'You are legally forbidden from owning a bicycle until age 21.',
      'You are required to wear a fluorescent safety vest whenever cycling.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 9, Alcohol and Drugs): If you are 13 to 20 years old and convicted of operating a bicycle under the influence, your current or future driving privilege will be suspended or delayed for one year.',
    testGroup: 29,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'Minor cycling DUI suspensions',
    coverageFactIds: ['fact-dui-bike-minor-under21']
  },

{
    id: 'q165',
    category: 'Safe Driving',
    questionText: 'For how long does a DUI conviction remain on active DMV driving records in California?',
    imageUrl: '',
    options: [

      'For 3 years.',
      'For 5 years.',
      'For 10 years.',
      'Permanently for life.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 9, Court Penalties): A DUI conviction is serious and stays on your active driving record at the DMV for a total of 10 years.',
    testGroup: 29,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 57,
    sourceTopic: 'Driving record DUI retention timelines',
    coverageFactIds: ['fact-dui-record-retention-years']
  },

{
    id: 'q166',
    category: 'Safe Driving',
    questionText: 'If you are involved in a collision in California and do not have liability insurance, what is the consequence?',
    imageUrl: '',
    options: [

      'Your driver\'s license is suspended for up to 4 years, regardless of who was at fault.',
      'You must pay double registration fees for your vehicle for 5 years.',
      'Your vehicle registration is canceled, but you can still drive other insured vehicles.',
      'There are no driving penalties if you can prove the other driver caused the crash.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 10, Financial Responsibility): If you collide with another vehicle and cannot show proof of insurance, your driving privilege will be suspended for up to 4 years, regardless of who was at fault.',
    testGroup: 29,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 58,
    sourceTopic: 'Collision without active insurance card',
    coverageFactIds: ['fact-insurance-lack-suspension']
  },

{
    id: 'q167',
    category: 'Safe Driving',
    questionText: 'What does California law require of you if you are involved in an accident that causes injury or death?',
    imageUrl: '',
    options: [

      'You must stop immediately and render assistance, or face severe criminal charges.',
      'You should only stop if it is safe to do so; otherwise, report it within 24 hours.',
      'You must proceed home immediately and contact your insurance provider first.',
      'You may drive away if you believe the other party was entirely at fault.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 10, Financial Responsibility): Failing to stop immediately after an accident causing injury, death, or property damage (hit-and-run) is illegal and carries severe criminal penalties.',
    testGroup: 29,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 59,
    sourceTopic: 'Fleeing collision sites misdemeanor',
    coverageFactIds: ['fact-hit-and-run-punishment']
  },

{
    id: 'q168',
    category: 'Safe Driving',
    questionText: 'What should you reduce your speed to when driving on an ICE-COVERED road surface?',
    imageUrl: '',
    options: [

      'To no more than 5 mph.',
      'Reduce your speed by half.',
      'To exactly 15 mph.',
      'By at least 20 mph below the posted speed limit.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Slippery Roads): On an ice-covered road surface, you must adjust your speed by reducing it to a maximum of 5 mph.',
    testGroup: 30,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 48,
    sourceTopic: 'Ice road speeds adjustment',
    coverageFactIds: ['fact-slick-roads-ice-speed']
  },

{
    id: 'q169',
    category: 'Road Signs',
    questionText: 'What does a yellow, five-sided (pentagonal) road sign featuring children silhouettes indicate?',
    imageUrl: '',
    options: [

      'A school zone is ahead where you must drive slowly and watch for children.',
      'A designated pedestrian safety corridor in a business park is nearby.',
      'An upcoming state park or recreational camping area.',
      'A residential neighborhood traffic calming circle is ahead.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5, Road Signs): A yellow, 5-sided sign with children silhouettes indicates that you are approaching a school zone.',
    testGroup: 30,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 27,
    sourceTopic: 'School zone sign shape',
    coverageFactIds: ['fact-school-zone-sign-5sided']
  },

{
    id: 'q170',
    category: 'Road Signs',
    questionText: 'What does a circular, yellow-and-black road sign with an "X" and "RR" symbolize?',
    imageUrl: '',
    options: [

      'A tourist information center is located ahead.',
      'You are approaching a railroad crossing where you should look, listen, and prepare to stop.',
      'An emergency runaway truck lane is available.',
      'Two-way traffic lanes are merging into a one-way street.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Road Signs): A circular, yellow-and-black sign represents railroad crossing protocols.',
    testGroup: 30,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 27,
    sourceTopic: 'Railroad crossing circular sign',
    coverageFactIds: ['fact-cross-railroad-yellow-circular']
  },

{
    id: 'q171',
    category: 'Safe Driving',
    questionText: 'When stopped by a police officer, what mandatory credentials must you present?',
    imageUrl: '',
    options: [

      'Your driver license, proof of insurance, and vehicle registration card.',
      'Your driver license, passport, and state identity card.',
      'Your driver license, smog certificate, and vehicle title doc.',
      'Your driver license, birth certificate, and proof of local address.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5, Traffic Stops): Every driver is legally mandated to produce their driver license, proof of vehicle insurance, and vehicle registration card to the stopping officer.',
    testGroup: 30,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 22,
    sourceTopic: 'Required documents during police stops',
    coverageFactIds: ['fact-le-stop-required-docs']
  },

{
    id: 'q172',
    category: 'Traffic Signals',
    questionText: 'What should a driver do when encountering a solid yellow traffic light signal?',
    imageUrl: '',
    options: [

      'Accelerate immediately to cross the intersection before the red light activates.',
      'Come to a safe stop if you can do so; if not, cautiously cross the intersection.',
      'Treat the signal as a stop sign, pausing and yielding to oncoming vehicles.',
      'Turn right immediately, ignoring pedestrians or other cross-street traffic.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Traffic Signals): A solid yellow signal warns that the light is about to turn red. You must bring the car to a safe stop, or execute caution if unable to stop.',
    testGroup: 30,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 24,
    sourceTopic: 'Solid Yellow Light',
    coverageFactIds: ['fact-traffic-light-solid-yellow']
  },

{
    id: 'q173',
    category: 'Safe Driving',
    questionText: 'What is the minimum following distance you should maintain when riding behind a motorcyclist?',
    imageUrl: '',
    options: [

      'At least a one-second gap.',
      'At least a two-second gap.',
      'At least a three-second gap.',
      'At least a five-second gap.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 6, Motorcycles): Maintain a safe three-second following distance when driving behind a motorcycle to allow ample stopping room.',
    testGroup: 31,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 35,
    sourceTopic: 'Motorcycle following safety rule',
    coverageFactIds: ['fact-motorcyclist-following-distance']
  },

{
    id: 'q174',
    category: 'Safe Driving',
    questionText: 'What is the required reaction when an emergency vehicle with active flashing lights and sirens approaches from behind?',
    imageUrl: '',
    options: [

      'Stop in your current active travel traffic lane immediately.',
      'Pull to the right-hand edge of the roadway and stop completely.',
      'Speed up to lead the vehicle through active traffic intersections.',
      'Activate your hazard lights and maintain your current lane and speed.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Emergency Vehicles): When sirens and emergency flashing lights are active, drivers must pull to the far right edge of the road and stop completely.',
    testGroup: 31,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 35,
    sourceTopic: 'Yielding to emergency vehicles',
    coverageFactIds: ['fact-emergency-vehicle-red-sirens']
  },

{
    id: 'q175',
    category: 'Safe Driving',
    questionText: 'Which vehicles are legally required to stop completely before crossing railroad tracks?',
    imageUrl: '',
    options: [

      'Vehicles carrying hazardous loads marked with diamond placard warnings.',
      'Vehicles towing any multi-axle trailer.',
      'Standard commercial pickup delivery vehicles.',
      'All passenger vehicles carrying more than five occupants.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 6, Railroads): Trucks carrying hazardous loads marked with diamond placards are required to stop completely before crossing any railroad tracks.',
    testGroup: 31,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 38,
    sourceTopic: 'Hazardous cargo railroad protocols',
    coverageFactIds: ['fact-hazmat-truck-railroad']
  },

{
    id: 'q176',
    category: 'Safe Driving',
    questionText: 'What is the penalty for using a vehicle to intentionally flee or attempt to evade law enforcement?',
    imageUrl: '',
    options: [

      'A minor traffic infraction carrying a $100 fine and no jail time.',
      'A misdemeanor punishable by up to one year in county jail.',
      'A civil citation resulting in a mandatory 10 hours of driver education.',
      'Vehicles are automatically forfeited, but no license points accrue.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Evading Police): Intentionally fleeing or evading law enforcement is a misdemeanor carrying a penalty of up to 1 year in county jail.',
    testGroup: 31,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 41,
    sourceTopic: 'Fleeing law enforcement misdemeanor jail',
    coverageFactIds: ['fact-evade-police-consequences']
  },

{
    id: 'q177',
    category: 'Alcohol & Drugs',
    questionText: 'Under what condition may a driver under 21 years old legally carry unopened alcohol inside a vehicle?',
    imageUrl: '',
    options: [

      'Only if accompanied by a parent, guardian, or relative age 21 or older.',
      'If the alcohol is stored in the glove compartment.',
      'If they are driving directly to a grocery retail shop for a delivery.',
      'As long as the alcohol container is kept completely out of view.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 9, Minors and Alcohol): Drivers under 21 may not carry unopened alcohol unless accompanied by parent or guardian. Open alcohol must go in the trunk.',
    testGroup: 31,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 57,
    sourceTopic: 'Minor alcohol possession rules',
    coverageFactIds: ['fact-dui-under21-carry-alcohol']
  },

{
    id: 'q178',
    category: 'Safe Driving',
    questionText: 'What are the minimum California bodily injury and property damage liability insurance limits?',
    imageUrl: '',
    options: [

      '$15k/$30k/$5k ($15k single injury, $30k multiple injury, $5k property damage)',
      '$30k/$60k/$15k ($30k single injury, $60k multiple injury, $15k property damage)',
      '$50k/$100k/$25k ($50k single injury, $100k multiple injury, $25k property damage)',
      '$100k/$300k/$50k ($100k single injury, $300k multiple injury, $50k property damage)'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 10, Financial Responsibility): California minimum liability insurance coverage requirements are 30/60/15 ($30k individual, $60k accident limit, $15k property).',
    testGroup: 32,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 58,
    sourceTopic: 'Minimum vehicle liability coverage',
    coverageFactIds: ['fact-insurance-minimum-liability-limits']
  },

{
    id: 'q179',
    category: 'Safe Driving',
    questionText: 'Who receives a citation if a passenger under the age of 16 is caught in a vehicle without wearing a seatbelt?',
    imageUrl: '',
    options: [

      'Only the passenger who was not buckled.',
      'The driver of the vehicle.',
      'The parent of the minor passenger only.',
      'The car manufacturer for failing to trigger a seatbelt alarm.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Seat Belts): Drivers can receive a citation if a passenger under 16 years old is caught riding without wearing a proper seatbelt.',
    testGroup: 32,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 51,
    sourceTopic: 'Passenger seatbelt violations under 16',
    coverageFactIds: ['fact-seatbelt-passenger-under-16']
  },

{
    id: 'q180',
    category: 'Safe Driving',
    questionText: 'What is the recommended safe distance to maintain between your breastbone and the center of the steering wheel airbag cover?',
    imageUrl: '',
    options: [

      'At least 5 inches of clearance.',
      'At least 10 inches of clearance.',
      'At least 12 inches of clearance.',
      'At least 15 inches of clearance.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Airbags): Ride at least 10 inches from the airbag cover, measuring from the center of the steering wheel to your breastbone.',
    testGroup: 32,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Airbag safety steering clearance',
    coverageFactIds: ['fact-airbag-chest-clearance']
  },

{
    id: 'q181',
    category: 'Alcohol & Drugs',
    questionText: 'If you are on active DUI probation in California, what Blood Alcohol Concentration (BAC) limit applies at any age?',
    imageUrl: '',
    options: [

      '0.01% or higher.',
      '0.04% or higher.',
      '0.05% or higher.',
      '0.08% or higher.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 9, DUI Probation): It is highly illegal to drive with a Blood Alcohol Concentration (BAC) of 0.01% or higher at any age if you are on active DUI probation.',
    testGroup: 32,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'DUI probation blood alcohol limits',
    coverageFactIds: ['fact-bac-limit-dui-probation']
  },

{
    id: 'q182',
    category: 'Rules of the Road',
    questionText: 'When waiting to turn left at an intersection, which way should you point your vehicle\'s front wheels?',
    imageUrl: '',
    options: [

      'Keep them pointed straight ahead.',
      'Turn them slightly to the left toward the oncoming lane.',
      'Turn them slightly to the right toward the curb.',
      'Turn them back and forth to keep tires warmed up.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 4): While waiting to turn left, keep your wheels pointed straight ahead until it is safe to start your turn. If they are turned left and a vehicle hits you from behind, you could be pushed into oncoming traffic.',
    testGroup: 33,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 12,
    sourceTopic: 'Wheel positioning before turns',
    coverageFactIds: ['fact-left-turn-wheel-direction']
  },

{
    id: 'q183',
    category: 'Traffic Signals',
    questionText: 'What does a flashing red traffic light signal require you to do?',
    imageUrl: '',
    options: [

      'Slow down and proceed if the intersection is clear without stopping.',
      'STOP completely, then proceed when it is safe to do so.',
      'Stop only if other vehicles are also stopped at the intersection.',
      'Yield to oncoming cars, but green-light turners have right-of-way.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): A flashing red traffic light means STOP. After stopping completely, you may proceed when safe to do so.',
    testGroup: 33,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 24,
    sourceTopic: 'Flashing Red Light',
    coverageFactIds: ['fact-traffic-light-flashing-red']
  },

{
    id: 'q184',
    category: 'Traffic Signals',
    questionText: 'When driving through an intersection controlled by a solid green traffic light, what is required?',
    imageUrl: '',
    options: [

      'You have absolute right-of-way and do not need to check for remaining traffic.',
      'You may proceed, but must still yield to any vehicles, bicyclists, or pedestrians already inside the intersection.',
      'You are required to stop and yield to any right-turning vehicles from the cross street.',
      'Proceed only if the intersection has active crossing gates or barriers.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): A solid green light means GO, but you must still yield to any vehicles, bicyclists, or pedestrians who are already in the intersection.',
    testGroup: 33,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 25,
    sourceTopic: 'Solid Green Light',
    coverageFactIds: ['fact-traffic-light-solid-green']
  },

{
    id: 'q185',
    category: 'Traffic Signals',
    questionText: 'If all traffic signal lights at an intersection are completely blacked out or not working, how should you proceed?',
    imageUrl: '',
    options: [

      'Slow down to 15 mph and cautiously proceed straight through.',
      'Stop as if the intersection is controlled by STOP signs in all directions, then proceed.',
      'Keep driving at normal speed and sound your horn to alert cross traffic.',
      'Yield to any vehicles approaching from your left, while those on your right must yield to you.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): When a traffic signal is completely blacked out or not working, stop as if the intersection is controlled by STOP signs in all directions, then proceed with caution.',
    testGroup: 33,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 25,
    sourceTopic: 'Blacked out traffic light rule',
    coverageFactIds: ['fact-traffic-light-broken']
  },

{
    id: 'q186',
    category: 'Road Signs',
    questionText: 'Where must you come to a complete stop when approaching a red hexagonal STOP sign?',
    imageUrl: '',
    options: [

      'Directly parallel to the stop sign, regardless of painted lines.',
      'Before entering the crosswalk boundary or marked limit line.',
      'Within 5 feet of the center of the cross street intersection.',
      'Only if other cross street traffic is actively approaching.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Road Signs): A red hexagonal STOP sign requires a full, complete stop before you enter the marked crosswalk or limit lines.',
    testGroup: 33,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 26,
    sourceTopic: 'STOP Sign Shape & Meaning',
    coverageFactIds: ['fact-sign-stop']
  },

{
    id: 'q187',
    category: 'Road Signs',
    questionText: 'What actions must you take when encountering a red-and-white triangular YIELD sign?',
    imageUrl: '',
    options: [

      'Always come to a full stop for at least three seconds.',
      'Slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass.',
      'Maintain your current speed and merge aggressively to prevent traffic backups.',
      'Sound your horn to warn other motorists that you are entering the road.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5, Road Signs): A triangular red YIELD sign instructs you to slow down and prepare to stop to let crossing vehicles, cyclists, or pedestrians pass safely.',
    testGroup: 34,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 26,
    sourceTopic: 'YIELD Sign Meaning',
    coverageFactIds: ['fact-sign-yield']
  },

{
    id: 'q188',
    category: 'Safe Driving',
    questionText: 'At 55 mph under ideal conditions, how long can it take a fully loaded commercial truck to stop compared to a passenger vehicle?',
    imageUrl: '',
    options: [

      'Sedans stop in 200 feet, while loaded trucks can stop fast in 250 feet.',
      'Passenger vehicles stop within 300 feet, but loaded trucks can take up to 400 feet to stop.',
      'Both loaded trucks and standard sedans stop in exactly 150 feet.',
      'A passenger vehicle takes 400 feet, whereas a commercial truck stops in 300 feet.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Large Trucks): At 55 mph, a standard passenger vehicle stops within 300 feet, but a loaded commercial truck can take up to 400 feet to come to a complete stop.',
    testGroup: 34,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 33,
    sourceTopic: 'Large truck stopping distance',
    coverageFactIds: ['fact-truck-stopping-distance-feet']
  },

{
    id: 'q189',
    category: 'Rules of the Road',
    questionText: 'Unless otherwise posted, what is the speed limit in a California business or residential district?',
    imageUrl: '',
    options: [

      '15 mph.',
      '20 mph.',
      '25 mph.',
      '35 mph.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 6, Speed Limits): The speed limit in any business or residential district in California is 25 mph unless otherwise posted.',
    testGroup: 34,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 40,
    sourceTopic: 'Business / residential speed limit',
    coverageFactIds: ['fact-business-residential-speed']
  },

{
    id: 'q190',
    category: 'Rules of the Road',
    questionText: 'When are U-turns permitted in a California business district?',
    imageUrl: '',
    options: [

      'Only at intersections or where a divided highway opening is provided.',
      'Only during nighttime when businesses are closed.',
      'At any time, as long as there is no "No U-turn" sign posted.',
      'Only on one-way streets with more than three travel lanes.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5): U-turns are illegal in business districts except at intersections or where a divided highway opening is provided.',
    testGroup: 34,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 13,
    sourceTopic: 'U-Turns in business districts',
    coverageFactIds: ['fact-uturn-business-districts-rule']
  },

{
    id: 'q191',
    category: 'Rules of the Road',
    questionText: 'When is it legal to drive in a public transit bus lane in California?',
    imageUrl: '',
    options: [

      'Only to make a right turn within 200 feet of the intersection.',
      'During morning and evening rush hours when other lanes are congested.',
      'Whenever the lane is empty and no buses are in sight.',
      'Only when towing a disabled passenger vehicle.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 4): It is illegal to drive, stop, or park in public transit bus lanes, but you may cross a bus lane to execute a right turn within 200 feet of the turn.',
    testGroup: 34,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 11,
    sourceTopic: 'Turns across Public Transit Bus Lanes',
    coverageFactIds: ['fact-right-turn-bus-lane']
  },

{
    id: 'q192',
    category: 'The California Driver\'s License',
    questionText: 'What is a REAL ID under California and federal guidelines?',
    imageUrl: '',
    options: [

      'Any standard driver\'s license or state ID card.',
      'A federally designated card that requires specific identification and proof of residency documents to be issued.',
      'A digital-only ID stored on a smartphone app.',
      'A special permit used only for operating large commercial trucks.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 1): A REAL ID is a federally designated card that requires specific identification and proof of residency documents to be issued.',
    testGroup: 35,
    sourceSection: 'Section 1: The California Driver\'s License',
    sourcePage: 1,
    sourceTopic: 'REAL ID Card Designations',
    coverageFactIds: ['fact-real-id-designation']
  },

{
    id: 'q193',
    category: 'Getting a Driver\'s License',
    questionText: 'Under California law, a minor holding a provisional driver\'s license is restricted from:',
    imageUrl: '',
    options: [

      'Driving for pay or operating commercial Class A, B, or C licensed vehicles.',
      'Driving any sedan or sport utility vehicle under any condition.',
      'Driving on public streets with a speed limit of 45 mph or higher.',
      'Operating a vehicle that has more than four passenger seats.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 2): Minors holding a provisional driver license cannot drive for pay or operate commercial Class A, B, or C licensed vehicles.',
    testGroup: 35,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Employment Restrictions',
    coverageFactIds: ['fact-provisional-commercial']
  },

{
    id: 'q194',
    category: 'Getting a Driver\'s License',
    questionText: 'What exception allows a provisional teen driver to drive during restricted hours for employment?',
    imageUrl: '',
    options: [

      'Checking in verbally on a mobile app with a parent or guardian.',
      'Carrying a signed note from their employer confirming employment details and hours.',
      'Registering their vehicle license plate with the municipal city hall.',
      'Driving only on quiet local pathways during evening hours.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 2): Provisional drivers may drive outside restricted hours for work reasons if they carry a note signed by their employer confirming employment.',
    testGroup: 35,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Restriction Exceptions - Employment',
    coverageFactIds: ['fact-provisional-exception-work']
  },

{
    id: 'q195',
    category: 'Getting a Driver\'s License',
    questionText: 'Under what conditions may a provisional teen driver drive during restricted hours to transport an immediate family member?',
    imageUrl: '',
    options: [

      'They can do so at any time without documents if they are in the same county.',
      'They must carry a note signed by a parent or legal guardian detailing the reason, the family member\'s name, and the end date.',
      'They must obtain a temporary sheriff passenger clearance receipt.',
      'They may only do so if driving a commercial passenger transport vehicle.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 2): Provisional drivers may drive outside restricted hours to transport immediate family if they carry a note signed by their parent or legal guardian detailing the reason, family member name, and end date.',
    testGroup: 35,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Minor\'s Restriction Exceptions - Family Member',
    coverageFactIds: ['fact-provisional-exception-family']
  },

{
    id: 'q196',
    category: 'Getting a Driver\'s License',
    questionText: 'How can a parent or legal guardian revoke or cancel a teen\'s provisional driver\'s license in California?',
    imageUrl: '',
    options: [

      'By filing a formal Request for Cancellation or Surrender form directly with the DMV.',
      'By destroying the physical plastic card and notifying local police.',
      'By sending a certified letters to the county court registrar.',
      'They cannot do so once the permit has been officially issued.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 2): A parent or legal guardian may cancel a teen\'s provisional driver\'s license by completing a Request for Cancellation or Surrender form with the DMV.',
    testGroup: 35,
    sourceSection: 'Section 2: Getting a Driver\'s License',
    sourcePage: 2,
    sourceTopic: 'Parent\'s Right to Cancel',
    coverageFactIds: ['fact-provisional-cancel']
  },

{
    id: 'q197',
    category: 'Safe Driving',
    questionText: 'What key visual abilities must a driver maintain to operate a vehicle safely?',
    imageUrl: '',
    options: [

      'Noticing hazards in different lighting, judging distances, adjusting to traffic speeds, and reading signs.',
      'The ability to read microscopic text on license plates at 100 feet.',
      'Fully unassisted night-vision equivalent to daylight conditions.',
      'High-contrast edge detection matching a radar sensor system.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 3): To drive safely, you must maintain vision capable of noticing hazards in different lighting, judging distances, adjusting to traffic speed, and reading road signs.',
    testGroup: 35,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Vision requirements',
    coverageFactIds: ['fact-vision-hazard-distance']
  },

{
    id: 'q198',
    category: 'Safe Driving',
    questionText: 'At what age are physicians legally required to report patients to the DMV for medical conditions, like lapses of consciousness, that affect driving safety?',
    imageUrl: '',
    options: [

      'At least 14 years old.',
      'At least 16 years old.',
      'Only seniors age 65 and older.',
      'At least 18 years old.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 3): Physicians are legally required to report patients who are at least 14 years old to the DMV for medical conditions (such as lapse of consciousness) that may affect driving safety.',
    testGroup: 35,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Medical condition reporting',
    coverageFactIds: ['fact-physician-report-age']
  },

{
    id: 'q199',
    category: 'Safe Driving',
    questionText: 'When changing lanes on a public road or multi-lane freeway, you are required to signal:',
    imageUrl: '',
    options: [

      'Only if there are other vehicles directly behind you.',
      'Before executing any lane change.',
      'Only when switching lanes within 50 feet of an off-ramp.',
      'Only during night hours or heavy weather conditions.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): You must signal before executing any lane change.',
    testGroup: 36,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Signaling for lane changes',
    coverageFactIds: ['fact-signal-every-lane-change']
  },

{
    id: 'q200',
    category: 'Safe Driving',
    questionText: 'Are turn signals required when parking or moving next to or away from a curb?',
    imageUrl: '',
    options: [

      'No, signals are only required at standard street intersections.',
      'Yes, you must signal before pulling next to or away from the curb.',
      'Only if you are parking in a commercial business district.',
      'Only if a law enforcement officer is visible on the street.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): You must signal before pulling next to or away from the curb.',
    testGroup: 36,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Signaling near curbs',
    coverageFactIds: ['fact-signal-curb-side']
  },

{
    id: 'q201',
    category: 'Safe Driving',
    questionText: 'Should you signal before turning or changing lanes if there are no other vehicles visible around you?',
    imageUrl: '',
    options: [

      'No, signaling is optional if no other vehicles are immediately present.',
      'Yes, you must signal your intentions even when you do not see other vehicles around you.',
      'Only if you are driving in a city center or school zone.',
      'No, signaling on empty roads wastes battery power and is discouraged.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): You must signal your intentions even when you do not see other vehicles around you.',
    testGroup: 36,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Signaling with no vehicles present',
    coverageFactIds: ['fact-signal-empty-road']
  },

{
    id: 'q202',
    category: 'Safe Driving',
    questionText: 'If you plan to turn right shortly after crossing a busy intersection, when should you start signaling?',
    imageUrl: '',
    options: [

      'At least 100 feet before reaching the intersection.',
      'When you are almost through the intersection, to avoid confusing other drivers.',
      'Exactly when you check the intersection stop line.',
      'Only when you begin turning your steering wheel.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3, Turn Signals): If you plan to turn shortly after crossing an intersection, signal when you are almost through the intersection to avoid confusing other drivers.',
    testGroup: 36,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Signaling at intersections',
    coverageFactIds: ['fact-signal-intersection-delayed']
  },

{
    id: 'q203',
    category: 'Safe Driving',
    questionText: 'How may a bicyclist signal a turn on public roads under California law?',
    imageUrl: '',
    options: [

      'By swinging their legs out to the side of the pedals.',
      'With their arm held straight out, pointing in the direction they plan to turn.',
      'By tapping their safety helmet twice with their hand.',
      'Bicyclists are not permitted to use hand signals and must use flashing mechanical indicators.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): Bicyclists may signal a turn with their arm held straight out, pointing in the direction they plan to turn.',
    testGroup: 36,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Bicyclist hand signals',
    coverageFactIds: ['fact-hand-signals-bicyclist']
  },

{
    id: 'q204',
    category: 'Safe Driving',
    questionText: 'When driving on a narrow mountain road where you cannot see at least 200 feet ahead, what should you do to alert oncoming traffic?',
    imageUrl: '',
    options: [

      'Flash your high-beam headlights rapidly.',
      'Use your vehicle\'s horn.',
      'Drive with your double hazard indicators flashing.',
      'Shout loudly out of the open driver\'s window.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): Use your vehicle\'s horn to alert oncoming traffic on narrow mountain roads where you cannot see at least 200 feet ahead.',
    testGroup: 36,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Mountain road warning alerts',
    coverageFactIds: ['fact-horn-mountain-200ft']
  },

{
    id: 'q205',
    category: 'Safe Driving',
    questionText: 'Is it legal to drive on a California roadway using only your parking lights instead of headlights?',
    imageUrl: '',
    options: [

      'Yes, but only in well-lit downtown business areas.',
      'No, it is illegal to drive using only your parking lights.',
      'Yes, but only between sunrise and sunset.',
      'Only when driving at slow speeds below 15 mph.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): It is illegal to drive using only your parking lights.',
    testGroup: 36,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Driving with parking lights on',
    coverageFactIds: ['fact-illegal-parking-lights']
  },

{
    id: 'q206',
    category: 'Safe Driving',
    questionText: 'When are you required to turn on your vehicle\'s headlights even on a bright, sunny day?',
    imageUrl: '',
    options: [

      'Only when operating a commercial hauling truck.',
      'On mountain roads and in tunnels.',
      'When driving in any urban residential neighborhood.',
      'Whenever you are towing a small trailer.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): Headlights must be used on mountain roads and in tunnels even on bright, sunny days.',
    testGroup: 37,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Headlights in tunnels and mountain passes',
    coverageFactIds: ['fact-headlights-mountain-tunnels']
  },

{
    id: 'q207',
    category: 'Safe Driving',
    questionText: 'Why should you turn on your headlights when the sun is low on the horizon?',
    imageUrl: '',
    options: [

      'To prevent your dashboard screen from dimming.',
      'To help other drivers see your vehicle.',
      'To warm up your vehicle\'s generator.',
      'Only because high-beams are forbidden before dusk.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): Turn on headlights to help other drivers see your vehicle when the sun is low on the horizon.',
    testGroup: 37,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 4,
    sourceTopic: 'Headlights when sun is low on horizon',
    coverageFactIds: ['fact-headlights-sun-horizon']
  },

{
    id: 'q208',
    category: 'Safe Driving',
    questionText: 'If you suddenly see an accident or a severe hazard ahead on the road, how should you warn drivers behind you?',
    imageUrl: '',
    options: [

      'Sound your horn continuously.',
      'Turn on your emergency hazard flashers.',
      'Tap your brakes rapidly in an erratic pattern.',
      'Roll down all windows and wave your arms.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3): If you see an accident or hazard ahead, turn on your emergency flashers to warn drivers behind you.',
    testGroup: 37,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 5,
    sourceTopic: 'Using emergency flashers',
    coverageFactIds: ['fact-emergency-flashers-hazard']
  },

{
    id: 'q209',
    category: 'Rules of the Road',
    questionText: 'What does a single solid white line painted between lanes on a road indicate?',
    imageUrl: '',
    options: [

      'It marks opposing lanes of traffic going in opposite directions.',
      'It marks traffic lanes going in the same direction, which includes one-way streets.',
      'It indicates a lane where u-turns are permitted.',
      'It shows where pedestrians have absolute right-of-way.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): A single solid white line marks traffic lanes going in the same direction, which includes one-way streets.',
    testGroup: 37,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 6,
    sourceTopic: 'Single Solid White Line Rules',
    coverageFactIds: ['fact-single-white-line']
  },

{
    id: 'q210',
    category: 'Rules of the Road',
    questionText: 'How are ending freeway or street lanes usually marked to tell you to prepare to exit or merge?',
    imageUrl: '',
    options: [

      'With a row of bright yellow raised buttons.',
      'With large broken lines painted on the pavement.',
      'With a continuous thick solid red line.',
      'With a solid red pavement line.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): Ending freeway and street lanes are usually marked with large broken lines; prepare to exit or merge when you see them.',
    testGroup: 37,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 7,
    sourceTopic: 'End of Lane Markings',
    coverageFactIds: ['fact-end-lane-broken-markings']
  },

{
    id: 'q211',
    category: 'Rules of the Road',
    questionText: 'What does a yield line consisting of a row of solid white triangles (often called "shark\'s teeth") pointing towards you indicate?',
    imageUrl: '',
    options: [

      'Vehicles behind you must speed up to merge.',
      'It shows oncoming vehicles where they must yield or stop.',
      'An approaching crossing where bicycle lanes cross lanes of car traffic.',
      'A lane reserved only for carpool vehicles.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): A yield line consists of a row of solid white triangles (shark teeth) pointing towards oncoming vehicles to show where to yield or stop.',
    testGroup: 37,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 7,
    sourceTopic: 'Yield Line Definition',
    coverageFactIds: ['fact-yield-line-shark-teeth']
  },

{
    id: 'q212',
    category: 'Rules of the Road',
    questionText: 'On a multi-lane highway or road, which lane is the designated passing lane (the fast lane)?',
    imageUrl: '',
    options: [

      'The far-right lane closest to the shoulder or curb.',
      'The far-left lane closest to the center divider.',
      'The middle lane regardless of travel speed.',
      'Any lane that has broken white lane lines.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): On a multilane road, the passing lane (far left lane) is the lane closest to the center divider.',
    testGroup: 37,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 8,
    sourceTopic: 'Left Passing Lane',
    coverageFactIds: ['fact-passing-lane-clostest']
  },

{
    id: 'q213',
    category: 'Rules of the Road',
    questionText: 'What is the correct right-of-way rule when approaching an uncontrolled T-intersection?',
    imageUrl: '',
    options: [

      'The vehicle closest to the left side has right-of-way.',
      'Traffic going straight through on the through road has right-of-way over vehicles turning in.',
      'The vehicle turning in has right-of-way over vehicles on the through road.',
      'The vehicle traveling at the faster speed has priority.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): At T-intersections, traffic going straight through on the through road has the right-of-way over vehicles turning in.',
    testGroup: 38,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 15,
    sourceTopic: 'T-Intersection right-of-way rules',
    coverageFactIds: ['fact-t-intersection-rightofway']
  },

{
    id: 'q214',
    category: 'Rules of the Road',
    questionText: 'When merging your vehicle into highway traffic, how much of a safety buffer space should you provide between you and the vehicle in front?',
    imageUrl: '',
    options: [

      'At least one second.',
      'At least three seconds.',
      'At least six seconds.',
      'At least eight seconds.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): Provide at least three seconds of safety buffer space between you and the vehicle in front when merging.',
    testGroup: 38,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 16,
    sourceTopic: 'Safety buffer during merging',
    coverageFactIds: ['fact-merge-space-3sec']
  },

{
    id: 'q215',
    category: 'Rules of the Road',
    questionText: 'When entering city street traffic from a full stop, how much of a space gap do you need to safely reach city traffic speed?',
    imageUrl: '',
    options: [

      'About 50 feet (two car lengths).',
      'About half a block (150 feet).',
      'About a full block (300 feet).',
      'At least two blocks (600 feet).'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): When entering city street traffic from a full stop, you need a space gap of about half a block (150 feet) to reach traffic speed.',
    testGroup: 38,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 16,
    sourceTopic: 'City street merging gap space',
    coverageFactIds: ['fact-city-merge-halfblock']
  },

{
    id: 'q216',
    category: 'Rules of the Road',
    questionText: 'When entering fast highway traffic from a full stop, how much of a space gap do you need to merge safely?',
    imageUrl: '',
    options: [

      'About half a block (150 feet).',
      'About a full block (300 feet).',
      'About two full blocks (600 feet).',
      'At least a quarter-mile.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): When entering highway traffic from a full stop, you need a space gap of about a full block (300 feet) to merge safely.',
    testGroup: 38,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 16,
    sourceTopic: 'Highway merging gap space',
    coverageFactIds: ['fact-highway-merge-fullblock']
  },

{
    id: 'q217',
    category: 'Rules of the Road',
    questionText: 'A vehicle that is stopped, parked, or left standing on a freeway may be legally removed after:',
    imageUrl: '',
    options: [

      'Type-A vehicles after 30 minutes.',
      'More than four hours.',
      'More than twelve hours.',
      'More than twenty-four hours.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): A vehicle that is stopped, parked, or left standing on a freeway for more than four hours may be legally removed.',
    testGroup: 38,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 21,
    sourceTopic: 'Freeway vehicle storage limits',
    coverageFactIds: ['fact-freeway-stuck-time']
  },

{
    id: 'q218',
    category: 'Rules of the Road',
    questionText: 'Under California law, what must a law enforcement officer do before asking questions about a violation during a traffic or pedestrian stop?',
    imageUrl: '',
    options: [

      'They must administer an immediate breathalyzer test.',
      'They are required to state the reason for the stop before asking criminal questions.',
      'They must provide a written copy of all local traffic bylaws.',
      'They must request consent to search the interior trunk compartment.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): Law enforcement officers are required by state law to state the reason for a traffic or pedestrian stop before asking criminal/violative questions.',
    testGroup: 38,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 21,
    sourceTopic: 'State rules for police stops',
    coverageFactIds: ['fact-le-stop-reason']
  },

{
    id: 'q219',
    category: 'Traffic Signals',
    questionText: 'At a street crosswalk, a pedestrian must not start crossing the street if the DONT WALK or Raised Hand signal is:',
    imageUrl: '',
    options: [

      'Flashing or stable (solid).',
      'Flashing green or solid blue.',
      'Accompanied by an audible walk notification tone.',
      'Accompanied by a countdown timer showing more than 10 seconds.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 5): Do not start crossing the street if the DONT WALK or Raised Hand signal is flashing or stable.',
    testGroup: 39,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 25,
    sourceTopic: 'Pedestrian countdown signals',
    coverageFactIds: ['fact-ped-dont-walk-flashing']
  },

{
    id: 'q220',
    category: 'Rules of the Road',
    questionText: 'Why do large commercial trucks often swing wide when making sharp turns?',
    imageUrl: '',
    options: [

      'Because their trailers have steering helpers on board.',
      'Because their rear wheels follow a shorter path than their front wheels.',
      'They are legally required to occupy two lanes to block light vehicles.',
      'Their front wheels turn at a slower gear ratio than rear axles.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): Large vehicles often swing wide because their rear wheels follow a shorter path than their front wheels.',
    testGroup: 39,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 33,
    sourceTopic: 'Large truck turning behaviors',
    coverageFactIds: ['fact-truck-swing-wide']
  },

{
    id: 'q221',
    category: 'Rules of the Road',
    questionText: 'On a divided highway with 4 or more lanes of traffic traveling in your direction, large trucks and vehicle towing combinations must drive in which lanes?',
    imageUrl: '',
    options: [

      'In any lane they choose as long as they stay at the speed limit.',
      'In the two lanes closest to the right.',
      'In the far-left carpool or fast lanes only.',
      'Strictly in the second lane from the left.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): On a divided highway with 4 or more lanes in one direction, large trucks and vehicle towing combinations must drive in the 2 lanes closest to the right.',
    testGroup: 39,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 33,
    sourceTopic: 'Large truck speed lane bounds',
    coverageFactIds: ['fact-truck-highway-lanes']
  },

{
    id: 'q222',
    category: 'Rules of the Road',
    questionText: 'Under California law, is lane splitting (motorcycles sharing lanes with other vehicles) permitted?',
    imageUrl: '',
    options: [

      'No, lane splitting is strictly illegal in California.',
      'Yes, it is legal for motorcycles to share lanes with other vehicles in California.',
      'It is legal only on rural roads with speeds under 25 mph.',
      'It is only legal for emergency responder motorcycles.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): It is legal in California for motorcycles to share lanes with other vehicles, which is known as lane splitting.',
    testGroup: 39,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 35,
    sourceTopic: 'Motorcycle lane splitting law',
    coverageFactIds: ['fact-motorcycle-lane-splitting']
  },

{
    id: 'q223',
    category: 'Rules of the Road',
    questionText: 'When driving a vehicle towing a trailer or operating a 3-axle truck, in which lane are you required to drive?',
    imageUrl: '',
    options: [

      'In the far-left lane to maintain freeway speeds.',
      'In the far-right lane or designated slower vehicle lane.',
      'In any middle lane to allow vehicles to pass on both sides.',
      'In the carpool lane when driving during off-peak hours.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): When towing a vehicle/trailer or driving a 3-axle truck, you must drive in the far-right lane or designated slower vehicle lane.',
    testGroup: 39,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 38,
    sourceTopic: 'Towing slow vehicle lanes',
    coverageFactIds: ['fact-towing-slower-vehicles-lanes']
  },

{
    id: 'q224',
    category: 'Rules of the Road',
    questionText: 'What is the California rule regarding funeral processions on public roads?',
    imageUrl: '',
    options: [

      'You may break into the procession line to make a turn if you are in a hurry.',
      'Interfering with a funeral procession is ticketable; processions led by a traffic officer have the right-of-way.',
      'Processions must yield right-of-way at all uncontrolled intersections.',
      'You should sound your horn to warn the procession of your presence.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): Interfering with a funeral procession is ticketable; processions led by a traffic officer have the right-of-way.',
    testGroup: 39,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 41,
    sourceTopic: 'Funeral procession bounds',
    coverageFactIds: ['fact-funeral-processor-right-of-way']
  },

{
    id: 'q225',
    category: 'Getting a Driver\'s License',
    questionText: 'How many days do you have to request an administrative hearing with the DMV after being served notice of an action against your driving privilege?',
    imageUrl: '',
    options: [

      'Within 5 days of service.',
      'Within 10 days of service.',
      'Within 30 days of service.',
      'Within 45 days of service.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): An administrative hearing with the DMV must be requested within 10 days of being served of a proposed action against your driving privilege.',
    testGroup: 39,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 43,
    sourceTopic: 'Admin hearing service request times',
    coverageFactIds: ['fact-hearing-timelines-post-service']
  },

{
    id: 'q226',
    category: 'Rules of the Road',
    questionText: 'What rules apply to people riding animals or driving animal-drawn vehicles on public roads in California?',
    imageUrl: '',
    options: [

      'They must ride on highways only and always yield to cars.',
      'People riding animals or driving animal-drawn vehicles have the same rights and duties as motor vehicle drivers.',
      'They are treated as pedestrians and must use crosswalks.',
      'They are prohibited from driving or riding on any public roads.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): People riding animals or driving animal-drawn vehicles on public roads have the same rights and duties as motor vehicle drivers.',
    testGroup: 40,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 32,
    sourceTopic: 'Animal-drawn vehicles and riders on public roads',
    coverageFactIds: ['fact-sharing-road-animal-drawn-vehicles']
  },

{
    id: 'q227',
    category: 'Safe Driving',
    questionText: 'If there are potential hazards on both sides of the road, how should you divide your space?',
    imageUrl: '',
    options: [

      'Maintain your speed and drive exactly down the center divider line.',
      'Handle them one at a time by slowing down and letting one pass before centering space for the other.',
      'Accelerate past both hazards as quickly as possible.',
      'Weave left and right to stay clear of both sides.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6): When hazards are on both sides of the road, handle them one at a time by slowing down and letting one pass before centering space for the other.',
    testGroup: 40,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 52,
    sourceTopic: 'Hazard space splitting rules',
    coverageFactIds: ['fact-hazard-space-split']
  },

{
    id: 'q228',
    category: 'Safe Driving',
    questionText: 'What is the correct protocol under California guidelines if your vehicle becomes disabled on a freeway?',
    imageUrl: '',
    options: [

      'Exit immediately on the left side and walk to the nearest exit ramp.',
      'Pull to the right shoulder, exit from the right side of the vehicle, stay inside with your safety belt on, dial 511, and use emergency flashers.',
      'Leave your vehicle parked in the lane and wait outside on the roadway.',
      'Immediately cross all traffic lanes on foot to find an emergency call box.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6): If disabled on a freeway: pull to the right shoulder, exit from the right side, dial 511, stay inside with safety belt on, and use emergency flashers.',
    testGroup: 40,
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 53,
    sourceTopic: 'Freeway breakdown phone protocols',
    coverageFactIds: ['fact-disabled-freeway-shoulder']
  },

{
    id: 'q229',
    category: 'Alcohol and Drugs',
    questionText: 'Which of the following describes the requirements triggered by a formal DUI conviction under California law?',
    imageUrl: '',
    options: [

      'A driver must attend an evening warning class and pay a standard $50 local fee.',
      'A mandatory 1-year privilege suspension, requirement to complete a certified DUI program, file an SR-22/SR-1P certificate, and potentially install an Ignition Interlock Device (IID).',
      'A driver has their license permanently revoked with no possibility of reinstatement.',
      'A driver must file an insurance waiver and drive only with immediate relatives.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 7): A DUI conviction triggers a mandatory 1-year privilege suspension, requirement to complete a certified DUI program, file an SR-22/SR-1P certificate, and potentially install an Ignition Interlock Device (IID).',
    testGroup: 40,
    sourceSection: 'Section 7: Alcohol and Drugs',
    sourcePage: 57,
    sourceTopic: 'DUI conviction license requirements',
    coverageFactIds: ['fact-dui-conviction-sr22-iid']
  },

{
    id: 'q230',
    category: 'Rules of the Road',
    questionText: 'If you hit a parked vehicle or other property and cannot locate the owner, you are legally required to:',
    imageUrl: '',
    options: [

      'Drive off and seek a mechanic without taking action.',
      'Leave a note with your name, phone number, and address, and report the collision to local police or CHP without delay.',
      'Wait in your car until a city parking enforcement officer notices.',
      'Report the collision only if the estimated property damage exceeds $5,000.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 8): If you hit a parked vehicle or property and cannot find the owner, leave a note with your name, phone number, and address, and report the collision to local police or CHP.',
    testGroup: 40,
    sourceSection: 'Section 8: Financial Responsibility, Insurance Requirements, and Collisions',
    sourcePage: 59,
    sourceTopic: 'Collision with parked vehicle or property',
    coverageFactIds: ['fact-collision-parked-vehicle-note-report']
  },

{
    id: 'q231',
    category: 'Safe Driving',
    questionText: 'What safe driving adjustment is recommended for senior drivers experiencing physical changes in night vision?',
    imageUrl: '',
    options: [

      'Drive significantly faster to minimize the time spent on dark roads.',
      'Consider limiting or avoiding night driving, and select well-lit routes if necessary.',
      'Wear high-definition sunglasses when driving under dark conditions.',
      'Use high-beam headlights continuously when driving in lit residential areas.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 9): Senior drivers often experience physical changes and may consider limiting or avoiding night driving, selecting well-lit routes if necessary.',
    testGroup: 40,
    sourceSection: 'Section 9: Seniors and Driving',
    sourcePage: 61,
    sourceTopic: 'Seniors safe night driving choices',
    coverageFactIds: ['fact-seniors-night-driving-limitation']
  },

{
    id: 'q232',
    category: 'Safe Driving',
    questionText: 'Which of the following is an indicator that an older driver should reassess their driving safety and potentially adjust their habits?',
    imageUrl: '',
    options: [

      'Getting lost in familiar places, having new vehicle dents or scrapes, or experiencing frequent close calls.',
      'Registering for a defensive driving class every five years.',
      'Upgrading their vehicle to a model with standard safety aids.',
      'Tuning their vehicle engine at a certified local dealership.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 9): Senior drivers should reassess driving safety if they get lost in familiar places, have new dents or scrapes, have frequent close calls, or are involved in collisions. Safer adjustments may include limiting night driving, taking shorter trips, avoiding difficult intersections, avoiding freeways, and using additional mirrors.',
    testGroup: 40,
    sourceSection: 'Section 9: Seniors and Driving',
    sourcePage: 61,
    sourceTopic: 'Warning signs and safety adjustments for senior drivers',
    coverageFactIds: ['fact-seniors-warning-signs']
  },

{
    id: 'q233',
    category: 'Traffic Signals',
    questionText: 'What does a solid red traffic light indicate under California law?',
    imageUrl: '',
    options: [

      'Proceed slowly through the intersection without stopping.',
      'Stop completely. You may make a right turn against a red light after stopping unless a sign prohibits it.',
      'Yield right-of-way only if other vehicles are currently in the intersection.',
      'Stop completely and wait until the light turns green before making any turn.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): A solid red traffic light means STOP. You can make a right turn against red after a complete stop unless prohibited.',
    testGroup: 40,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 24,
    sourceTopic: 'Solid Red Light Definition',
    coverageFactIds: ['fact-traffic-light-red']
  },

{
    id: 'q234',
    category: 'Safe Driving',
    questionText: 'Under California law, how close to the curb must a vehicle\'s wheels be when parallel parked?',
    imageUrl: '',
    options: [

      'Within 18 inches.',
      'Within 12 inches.',
      'Within 24 inches.',
      'Within 6 inches.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 4): A parallel parked vehicle must have its wheels parallel to and within 18 inches of the curb.',
    testGroup: 40,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 18,
    sourceTopic: 'Parallel parking distance limit',
    coverageFactIds: ['fact-parking-curb-distance']
  },

{
    id: 'q235',
    category: 'Rules of the Road',
    questionText: 'Double solid white lines painted on the pavement indicate:',
    imageUrl: '',
    options: [

      'A lane barrier between regular and preferential lanes (such as HOV lanes); you must never change lanes over them.',
      'A temporary construction zone where speed is halved.',
      'A designated space where parallel parking is allowed during weekends.',
      'A crosswalk area where pedestrians have immediate right-of-way.'
    ],
    correctOptionIndex: 0,
    explanation: 'California Handbook (Section 4): Double solid white lines indicate a lane barrier between regular and preferential lanes (such as HOV lanes); you must never change lanes over them.',
    testGroup: 40,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 7,
    sourceTopic: 'Double Solid White Lines',
    coverageFactIds: ['fact-double-solid-white-lines']
  },

{
    id: 'q236',
    category: 'Rules of the Road',
    questionText: 'Under California law, is it legal to make a U-turn on a divided highway by crossing a dividing barrier or empty physical strip?',
    imageUrl: '',
    options: [

      'Yes, as long as no police vehicles are in sight.',
      'Yes, but only if you are executing a turn onto a private driveway.',
      'No, you must never make a U-turn on a divided highway by crossing a dividing section, curb, strip of land, or double sets of double yellow lines.',
      'Yes, during night hours when traffic is light.'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4): Never make a U-turn on a divided highway by crossing a dividing section, curb, strip of land, or two sets of double yellow lines.',
    testGroup: 40,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 13,
    sourceTopic: 'Prohibited U-Turns on divided highways',
    coverageFactIds: ['fact-uturn-divided-highway-barrier']
  },

{
    id: 'q237',
    category: 'Rules of the Road',
    questionText: 'When exiting a highway or freeway, how long must you continuously activate your turn signal before reaching the exit?',
    imageUrl: '',
    options: [

      'For at least 3 seconds (approximately 200 feet).',
      'For at least 5 seconds (approximately 400 feet).',
      'Only as you begin turning the steering wheel into the exit lane.',
      'For at least 10 seconds (approximately 800 feet).'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): When exiting a highway, signal for at least five seconds (approximately 400 feet) before you reach the exit.',
    testGroup: 40,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 16,
    sourceTopic: 'Freeway exit signaling time',
    coverageFactIds: ['fact-exit-highway-signal']
  },

{
    id: 'q238',
    category: 'Traffic Signals',
    questionText: 'Under California law, what does a solid red arrow traffic signal indicate?',
    imageUrl: '',
    options: [

      'You must STOP completely, but you can turn after yielding to pedestrians.',
      'You must STOP completely and remain stopped; you cannot turn at a red arrow under any circumstances.',
      'You must slow down and proceed with caution if the intersection is clear.',
      'You may turn right only after coming to a complete stop and ensuring the way is clear.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 5): A red arrow means STOP. Do not turn at a red arrow; remain stopped until a green light or arrow appears.',
    testGroup: 40,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 24,
    sourceTopic: 'Red Arrow Definition',
    coverageFactIds: ['fact-traffic-light-red-arrow']
  },

{
    id: 'q239',
    category: 'Rules of the Road',
    questionText: 'According to the California Driver Handbook, you must never attempt to make a U-turn when you cannot see clearly in each direction for at least:',
    imageUrl: '',
    options: [

      '100 feet',
      '150 feet',
      '200 feet',
      '300 feet'
    ],
    correctOptionIndex: 2,
    explanation: 'California Handbook (Section 4): Never make a U-turn when you cannot see clearly for 200 feet in each direction.',
    testGroup: 40,
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 13,
    sourceTopic: 'U-Turn visibility distance limit',
    coverageFactIds: ['fact-uturn-visibility-distance']
  },

  {
    id: "q240",
    category: "Licensing",
    questionText: "What authorization does a California driver license provide to a resident?",
    imageUrl: "",
    options: [
      "A California driver license allows you to drive on public roads.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year.",
      "A Class C license allows you to operate commercial double-trailer trucks.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 1: The California Driver's License, page 1, License purpose): A California driver license allows you to drive on public roads.",
    testGroup: 90,
    sourceSection: "Section 1: The California Driver's License",
    sourcePage: 1,
    sourceTopic: "License purpose",
    coverageFactIds: ["pdf-fact-s1-license-purpose-a-california-driver-license-allows-you-to-drive-on-pub"]
  },

  {
    id: "q241",
    category: "Licensing",
    questionText: "Why does a driver need to obtain the correct class of driver license?",
    imageUrl: "",
    options: [
      "Drivers must have the correct class of license for the type of vehicle they operate.",
      "A Class C license allows you to operate commercial double-trailer trucks.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 1: The California Driver's License, page 1, Correct license class): Drivers must have the correct class of license for the type of vehicle they operate.",
    testGroup: 90,
    sourceSection: "Section 1: The California Driver's License",
    sourcePage: 1,
    sourceTopic: "Correct license class",
    coverageFactIds: ["pdf-fact-s1-correct-license-class-drivers-must-have-the-correct-class-of-license-f"]
  },

  {
    id: "q242",
    category: "Licensing",
    questionText: "When does operating commercial vehicles or motorcycles require a specific driver license class?",
    imageUrl: "",
    options: [
      "Commercial vehicles, motorcycles, and other vehicle types require different license classes.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 1: The California Driver's License, page 1, Other license classes): Commercial vehicles, motorcycles, and other vehicle types require different license classes.",
    testGroup: 90,
    sourceSection: "Section 1: The California Driver's License",
    sourcePage: 1,
    sourceTopic: "Other license classes",
    coverageFactIds: ["pdf-fact-s1-other-license-classes-commercial-vehicles-motorcycles-and-other-vehicl"]
  },

  {
    id: "q243",
    category: "Licensing",
    questionText: "What is the correct DMV rule or guidance concerning minor provisional license designation?",
    imageUrl: "",
    options: [
      "A driver license for a driver under 18 has the word provisional.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record.",
      "It is acceptable to drive after drinking if you drink strong coffee first."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 2: Getting a Driver's License, page 2, Minor provisional license designation): A driver license for a driver under 18 has the word provisional.",
    testGroup: 90,
    sourceSection: "Section 2: Getting a Driver's License",
    sourcePage: 2,
    sourceTopic: "Minor provisional license designation",
    coverageFactIds: ["pdf-fact-s2-minor-provisional-license-designation-a-driver-license-for-a-driver-un"]
  },

  {
    id: "q244",
    category: "Driving Basics",
    questionText: "How do vision changes, medication, or general health factor into your driving safety?",
    imageUrl: "",
    options: [
      "A driver’s health can affect safe driving.",
      "You are exempt from all DMV medical reporting rules if you have a clean record.",
      "It is acceptable to drive after drinking if you drink strong coffee first.",
      "Prescription medications are always completely safe to use while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 3, Health and driving): A driver’s health can affect safe driving.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 3,
    sourceTopic: "Health and driving",
    coverageFactIds: ["pdf-fact-s3-health-and-driving-a-driver-s-health-can-affect-safe-driving"]
  },

  {
    id: "q245",
    category: "Driving Basics",
    questionText: "What is the primary purpose of turn signals, horns, and headlights?",
    imageUrl: "",
    options: [
      "Signals, horns, and headlights communicate with other drivers, pedestrians, and bicyclists.",
      "To customize the aesthetic appearance of your vehicle.",
      "To increase your vehicle's resale value and safety ratings.",
      "To demonstrate compliant vehicle parts to emission inspection centers."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 3, Signals horn and headlights purpose): Signals, horns, and headlights communicate with other drivers, pedestrians, and bicyclists.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 3,
    sourceTopic: "Signals horn and headlights purpose",
    coverageFactIds: ["pdf-fact-s3-signals-horn-and-headlights-purpose-signals-horns-and-headlights-commu"]
  },

  {
    id: "q246",
    category: "Driving Basics",
    questionText: "What should you do if your turn signals are not working or are hard to see?",
    imageUrl: "",
    options: [
      "If signal lights are not functioning or are hard to see in bright sunlight, drivers should use hand-and-arm signals.",
      "Turn on state-approved passenger cabin light and gesture.",
      "Rely entirely on your brake lights and lane position.",
      "Use approved hand-and-arm signals through your window."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 3, Use hand signals if lights fail): If signal lights are not functioning or are hard to see in bright sunlight, drivers should use hand-and-arm signals.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 3,
    sourceTopic: "Use hand signals if lights fail",
    coverageFactIds: ["pdf-fact-s3-use-hand-signals-if-lights-fail-if-signal-lights-are-not-functioning-o"]
  },

  {
    id: "q247",
    category: "Driving Basics",
    questionText: "Why is it important to turn off (cancel) your turn signal after completing a turn?",
    imageUrl: "",
    options: [
      "Drivers should turn off a signal when it is no longer needed.",
      "Failing to turn off your signal can confuse other drivers and lead to collisions.",
      "Leaving the signal on will quickly drain your car's main battery.",
      "It is illegal to have a signal flashing for more than 10 seconds under any condition."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 4, Cancel signal): Drivers should turn off a signal when it is no longer needed.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 4,
    sourceTopic: "Cancel signal",
    coverageFactIds: ["pdf-fact-s3-cancel-signal-drivers-should-turn-off-a-signal-when-it-is-no-longer-ne"]
  },

  {
    id: "q248",
    category: "Driving Basics",
    questionText: "What is the correct DMV rule or guidance concerning horn use purpose?",
    imageUrl: "",
    options: [
      "Drivers may use the horn to let other drivers know they are present or to warn others of a hazard.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 4, Horn use purpose): Drivers may use the horn to let other drivers know they are present or to warn others of a hazard.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 4,
    sourceTopic: "Horn use purpose",
    coverageFactIds: ["pdf-fact-s3-horn-use-purpose-drivers-may-use-the-horn-to-let-other-drivers-know-th"]
  },

  {
    id: "q249",
    category: "Driving Basics",
    questionText: "Which of the following is correct regarding horn to avoid collisions?",
    imageUrl: "",
    options: [
      "Drivers may use the horn to help avoid collisions.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 4, Horn to avoid collisions): Drivers may use the horn to help avoid collisions.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 4,
    sourceTopic: "Horn to avoid collisions",
    coverageFactIds: ["pdf-fact-s3-horn-to-avoid-collisions-drivers-may-use-the-horn-to-help-avoid-collis"]
  },

  {
    id: "q250",
    category: "Driving Basics",
    questionText: "When or how must you utilize headlights see and be seen according to safety rules?",
    imageUrl: "",
    options: [
      "Headlights help drivers see ahead and help others see the vehicle.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 4, Headlights see and be seen): Headlights help drivers see ahead and help others see the vehicle.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 4,
    sourceTopic: "Headlights see and be seen",
    coverageFactIds: ["pdf-fact-s3-headlights-see-and-be-seen-headlights-help-drivers-see-ahead-and-help"]
  },

  {
    id: "q251",
    category: "Driving Basics",
    questionText: "What is the correct DMV rule or guidance concerning headlights when conditions block view?",
    imageUrl: "",
    options: [
      "Use headlights when clouds, dust, smoke, fog, or similar conditions prevent seeing other vehicles.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 4, Headlights when conditions block view): Use headlights when clouds, dust, smoke, fog, or similar conditions prevent seeing other vehicles.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 4,
    sourceTopic: "Headlights when conditions block view",
    coverageFactIds: ["pdf-fact-s3-headlights-when-conditions-block-view-use-headlights-when-clouds-dust"]
  },

  {
    id: "q252",
    category: "Driving Basics",
    questionText: "When or how must you utilize headlights when sign requires according to safety rules?",
    imageUrl: "",
    options: [
      "Use headlights when a road sign states they must be on.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement.",
      "Sound your horn continuously to warn vehicles that you are about to turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 4, Headlights when sign requires): Use headlights when a road sign states they must be on.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 4,
    sourceTopic: "Headlights when sign requires",
    coverageFactIds: ["pdf-fact-s3-headlights-when-sign-requires-use-headlights-when-a-road-sign-states-t"]
  },

  {
    id: "q253",
    category: "Driving Basics",
    questionText: "What is the correct DMV rule or guidance concerning hand signal when slowing or stopping?",
    imageUrl: "",
    options: [
      "If you see a hazard ahead, you can warn drivers behind you by using a hand signal when slowing or stopping.",
      "Accelerate unconditionally to join the nearest travel lane.",
      "This requirement only applies when driving on high-speed interstate freeways.",
      "The speed limit is suspended during late-night hours when traffic is light."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 5, Hand signal when slowing or stopping): If you see a hazard ahead, you can warn drivers behind you by using a hand signal when slowing or stopping.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 5,
    sourceTopic: "Hand signal when slowing or stopping",
    coverageFactIds: ["pdf-fact-s3-hand-signal-when-slowing-or-stopping-if-you-see-a-hazard-ahead-you-can"]
  },

  {
    id: "q254",
    category: "Driving Basics",
    questionText: "What is the correct DMV guideline or safety rule regarding vehicle trouble flashers?",
    imageUrl: "",
    options: [
      "If you stop because of vehicle trouble, turn on emergency flashers or use turn signals if the vehicle has no flashers.",
      "Sound your horn continuously to warn vehicles that you are about to turn.",
      "Signal for a turn only when changing directions in a designated construction zone.",
      "Keep your high-beam headlights on continuously for maximum visibility."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 5, Vehicle trouble flashers): If you stop because of vehicle trouble, turn on emergency flashers or use turn signals if the vehicle has no flashers.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 5,
    sourceTopic: "Vehicle trouble flashers",
    coverageFactIds: ["pdf-fact-s3-vehicle-trouble-flashers-if-you-stop-because-of-vehicle-trouble-turn-o"]
  },

  {
    id: "q255",
    category: "Driving Basics",
    questionText: "What is the correct DMV guideline or safety rule regarding vehicle trouble pull off road?",
    imageUrl: "",
    options: [
      "If possible, pull off the road away from all traffic when stopped for vehicle trouble.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 5, Vehicle trouble pull off road): If possible, pull off the road away from all traffic when stopped for vehicle trouble.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 5,
    sourceTopic: "Vehicle trouble pull off road",
    coverageFactIds: ["pdf-fact-s3-vehicle-trouble-pull-off-road-if-possible-pull-off-the-road-away-from"]
  },

  {
    id: "q256",
    category: "Driving Basics",
    questionText: "Which of the following is correct regarding vehicle trouble visible stopping place?",
    imageUrl: "",
    options: [
      "If you cannot get completely off the road, stop where people can see you and your vehicle from behind.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 5, Vehicle trouble visible stopping place): If you cannot get completely off the road, stop where people can see you and your vehicle from behind.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 5,
    sourceTopic: "Vehicle trouble visible stopping place",
    coverageFactIds: ["pdf-fact-s3-vehicle-trouble-visible-stopping-place-if-you-cannot-get-completely-of"]
  },

  {
    id: "q257",
    category: "Driving Basics",
    questionText: "What is the correct DMV rule or guidance concerning avoid stopping over hill or curve?",
    imageUrl: "",
    options: [
      "Do not stop just over a hill or just around a curve when your vehicle has trouble.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 5, Avoid stopping over hill or curve): Do not stop just over a hill or just around a curve when your vehicle has trouble.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 5,
    sourceTopic: "Avoid stopping over hill or curve",
    coverageFactIds: ["pdf-fact-s3-avoid-stopping-over-hill-or-curve-do-not-stop-just-over-a-hill-or-just"]
  },

  {
    id: "q258",
    category: "Driving Basics",
    questionText: "How is roadside assistance wait in vehicle properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Call for emergency roadside assistance and stay in your vehicle until help arrives.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 3: An Introduction to Driving, page 5, Roadside assistance wait in vehicle): Call for emergency roadside assistance and stay in your vehicle until help arrives.",
    testGroup: 90,
    sourceSection: "Section 3: An Introduction to Driving",
    sourcePage: 5,
    sourceTopic: "Roadside assistance wait in vehicle",
    coverageFactIds: ["pdf-fact-s3-roadside-assistance-wait-in-vehicle-call-for-emergency-roadside-assist"]
  },

  {
    id: "q259",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding traffic lane definition?",
    imageUrl: "",
    options: [
      "A traffic lane is a section of road for a single line of traffic.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 6, Traffic lane definition): A traffic lane is a section of road for a single line of traffic.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 6,
    sourceTopic: "Traffic lane definition",
    coverageFactIds: ["pdf-fact-s4-traffic-lane-definition-a-traffic-lane-is-a-section-of-road-for-a-sing"]
  },

  {
    id: "q260",
    category: "Rules of the Road",
    questionText: "What is the primary purpose of lane markings?",
    imageUrl: "",
    options: [
      "Lane markings show drivers which part of the road to use and help explain traffic rules.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 6, Lane markings purpose): Lane markings show drivers which part of the road to use and help explain traffic rules.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 6,
    sourceTopic: "Lane markings purpose",
    coverageFactIds: ["pdf-fact-s4-lane-markings-purpose-lane-markings-show-drivers-which-part-of-the-roa"]
  },

  {
    id: "q261",
    category: "Rules of the Road",
    questionText: "How is broken white line properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Broken white lines separate traffic lanes moving in the same direction.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 7, Broken white line): Broken white lines separate traffic lanes moving in the same direction.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 7,
    sourceTopic: "Broken white line",
    coverageFactIds: ["pdf-fact-s4-broken-white-line-broken-white-lines-separate-traffic-lanes-moving-in"]
  },

  {
    id: "q262",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding number 1 lane definition?",
    imageUrl: "",
    options: [
      "The left or fast lane is called the Number 1 lane.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 7, Number 1 lane definition): The left or fast lane is called the Number 1 lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 7,
    sourceTopic: "Number 1 lane definition",
    coverageFactIds: ["pdf-fact-s4-number-1-lane-definition-the-left-or-fast-lane-is-called-the-number-1"]
  },

  {
    id: "q263",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding lane numbers increase rightward?",
    imageUrl: "",
    options: [
      "The lane to the right of the Number 1 lane is Number 2, then Number 3, and so on.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 7, Lane numbers increase rightward): The lane to the right of the Number 1 lane is Number 2, then Number 3, and so on.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 7,
    sourceTopic: "Lane numbers increase rightward",
    coverageFactIds: ["pdf-fact-s4-lane-numbers-increase-rightward-the-lane-to-the-right-of-the-number-1"]
  },

  {
    id: "q264",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding left lane use?",
    imageUrl: "",
    options: [
      "Use the left lane to pass or turn left.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 7, Left lane use): Use the left lane to pass or turn left.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 7,
    sourceTopic: "Left lane use",
    coverageFactIds: ["pdf-fact-s4-left-lane-use-use-the-left-lane-to-pass-or-turn-left"]
  },

  {
    id: "q265",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding right lane use?",
    imageUrl: "",
    options: [
      "Use the right lane to enter or exit traffic or when entering the road from a curb or shoulder.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 7, Right lane use): Use the right lane to enter or exit traffic or when entering the road from a curb or shoulder.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 7,
    sourceTopic: "Right lane use",
    coverageFactIds: ["pdf-fact-s4-right-lane-use-use-the-right-lane-to-enter-or-exit-traffic-or-when-ent"]
  },

  {
    id: "q266",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning lane change signal?",
    imageUrl: "",
    options: [
      "Before changing lanes, signal.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Lane change signal): Before changing lanes, signal.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Lane change signal",
    coverageFactIds: ["pdf-fact-s4-lane-change-signal-before-changing-lanes-signal"]
  },

  {
    id: "q267",
    category: "Rules of the Road",
    questionText: "What should you check in your mirrors and surroundings before commencing a lane change?",
    imageUrl: "",
    options: [
      "Before changing lanes, check your mirrors.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Lane change mirror check): Before changing lanes, check your mirrors.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Lane change mirror check",
    coverageFactIds: ["pdf-fact-s4-lane-change-mirror-check-before-changing-lanes-check-your-mirrors"]
  },

  {
    id: "q268",
    category: "Rules of the Road",
    questionText: "What is the proper way to perform a lane change traffic?",
    imageUrl: "",
    options: [
      "Before changing lanes, check traffic behind and beside you.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Lane change traffic check): Before changing lanes, check traffic behind and beside you.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Lane change traffic check",
    coverageFactIds: ["pdf-fact-s4-lane-change-traffic-check-before-changing-lanes-check-traffic-behind-a"]
  },

  {
    id: "q269",
    category: "Rules of the Road",
    questionText: "Why must you perform a shoulder check over your shoulder before changing lanes?",
    imageUrl: "",
    options: [
      "Before changing lanes, look over your shoulder in the direction you plan to move.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Lane change shoulder check): Before changing lanes, look over your shoulder in the direction you plan to move.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Lane change shoulder check",
    coverageFactIds: ["pdf-fact-s4-lane-change-shoulder-check-before-changing-lanes-look-over-your-should"]
  },

  {
    id: "q270",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning lane change blind spots?",
    imageUrl: "",
    options: [
      "Check blind spots for vehicles, motorcycles, and bicyclists before changing lanes.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Lane change blind spots): Check blind spots for vehicles, motorcycles, and bicyclists before changing lanes.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Lane change blind spots",
    coverageFactIds: ["pdf-fact-s4-lane-change-blind-spots-check-blind-spots-for-vehicles-motorcycles-and"]
  },

  {
    id: "q271",
    category: "Rules of the Road",
    questionText: "Why is keeping your vehicle centered in its travel lane important under California guidelines?",
    imageUrl: "",
    options: [
      "Do not let your vehicle drift into another lane.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Do not drift lanes): Do not let your vehicle drift into another lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Do not drift lanes",
    coverageFactIds: ["pdf-fact-s4-do-not-drift-lanes-do-not-let-your-vehicle-drift-into-another-lane"]
  },

  {
    id: "q272",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning lane change space?",
    imageUrl: "",
    options: [
      "Before changing lanes, make sure there is enough space for your vehicle in the next lane.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Lane change space): Before changing lanes, make sure there is enough space for your vehicle in the next lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Lane change space",
    coverageFactIds: ["pdf-fact-s4-lane-change-space-before-changing-lanes-make-sure-there-is-enough-spac"]
  },

  {
    id: "q273",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning lane change slowing unnecessary?",
    imageUrl: "",
    options: [
      "It is not necessary to slow down before a lane change.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Lane change slowing unnecessary): It is not necessary to slow down before a lane change.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Lane change slowing unnecessary",
    coverageFactIds: ["pdf-fact-s4-lane-change-slowing-unnecessary-it-is-not-necessary-to-slow-down-befor"]
  },

  {
    id: "q274",
    category: "Rules of the Road",
    questionText: "Why is it important to avoid weaving?",
    imageUrl: "",
    options: [
      "Stay in one lane as much as possible and do not weave in and out of traffic.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Avoid weaving): Stay in one lane as much as possible and do not weave in and out of traffic.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Avoid weaving",
    coverageFactIds: ["pdf-fact-s4-avoid-weaving-stay-in-one-lane-as-much-as-possible-and-do-not-weave-in"]
  },

  {
    id: "q275",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning avoid last-minute changes?",
    imageUrl: "",
    options: [
      "Last-minute lane or direction changes may increase collision risk.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Avoid last-minute changes): Last-minute lane or direction changes may increase collision risk.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Avoid last-minute changes",
    coverageFactIds: ["pdf-fact-s4-avoid-last-minute-changes-last-minute-lane-or-direction-changes-may-in"]
  },

  {
    id: "q276",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding continue through intersection?",
    imageUrl: "",
    options: [
      "Once you start moving through an intersection, keep going.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Continue through intersection): Once you start moving through an intersection, keep going.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Continue through intersection",
    coverageFactIds: ["pdf-fact-s4-continue-through-intersection-once-you-start-moving-through-an-interse"]
  },

  {
    id: "q277",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding missed turn procedure?",
    imageUrl: "",
    options: [
      "If you miss a turn, keep driving until you can safely and legally turn around.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 8, Missed turn procedure): If you miss a turn, keep driving until you can safely and legally turn around.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 8,
    sourceTopic: "Missed turn procedure",
    coverageFactIds: ["pdf-fact-s4-missed-turn-procedure-if-you-miss-a-turn-keep-driving-until-you-can-sa"]
  },

  {
    id: "q278",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning center left turn lane location?",
    imageUrl: "",
    options: [
      "A center left turn lane is in the middle of a two-way street and is marked by inner broken and outer solid lines.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 9, Center left turn lane location): A center left turn lane is in the middle of a two-way street and is marked by inner broken and outer solid lines.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 9,
    sourceTopic: "Center left turn lane location",
    coverageFactIds: ["pdf-fact-s4-center-left-turn-lane-location-a-center-left-turn-lane-is-in-the-middl"]
  },

  {
    id: "q279",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning bicycle lane purpose?",
    imageUrl: "",
    options: [
      "Bicycle lanes are for bicyclists only and run alongside vehicle traffic.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 9, Bicycle lane purpose): Bicycle lanes are for bicyclists only and run alongside vehicle traffic.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 9,
    sourceTopic: "Bicycle lane purpose",
    coverageFactIds: ["pdf-fact-s4-bicycle-lane-purpose-bicycle-lanes-are-for-bicyclists-only-and-run-alo"]
  },

  {
    id: "q280",
    category: "Rules of the Road",
    questionText: "How are bicycle lane markings used on California roads?",
    imageUrl: "",
    options: [
      "Bicycle lanes are typically marked by a solid white line and signs and may be painted bright green.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 9, Bicycle lane markings): Bicycle lanes are typically marked by a solid white line and signs and may be painted bright green.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 9,
    sourceTopic: "Bicycle lane markings",
    coverageFactIds: ["pdf-fact-s4-bicycle-lane-markings-bicycle-lanes-are-typically-marked-by-a-solid-wh"]
  },

  {
    id: "q281",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning bike lane types?",
    imageUrl: "",
    options: [
      "Bike lane markings include standard bike lanes, buffered bike lanes, bike routes, bicycle boulevards, separated bikeways, and shared roadway markings.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 10, Bike lane types): Bike lane markings include standard bike lanes, buffered bike lanes, bike routes, bicycle boulevards, separated bikeways, and shared roadway markings.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 10,
    sourceTopic: "Bike lane types",
    coverageFactIds: ["pdf-fact-s4-bike-lane-types-bike-lane-markings-include-standard-bike-lanes-buffere"]
  },

  {
    id: "q282",
    category: "Rules of the Road",
    questionText: "How are shared roadway bicycle markings used on California roads?",
    imageUrl: "",
    options: [
      "Shared roadway bicycle markings alert drivers that bicyclists can occupy the lane and help bicyclists maintain a safe lane position.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 10, Shared roadway bicycle markings): Shared roadway bicycle markings alert drivers that bicyclists can occupy the lane and help bicyclists maintain a safe lane position.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 10,
    sourceTopic: "Shared roadway bicycle markings",
    coverageFactIds: ["pdf-fact-s4-shared-roadway-bicycle-markings-shared-roadway-bicycle-markings-alert"]
  },

  {
    id: "q283",
    category: "Rules of the Road",
    questionText: "How is motorized bicycle caution properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Motorized-bicycle riders should use caution, travel at a reasonable speed, and not endanger bicyclists.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 10, Motorized bicycle caution): Motorized-bicycle riders should use caution, travel at a reasonable speed, and not endanger bicyclists.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 10,
    sourceTopic: "Motorized bicycle caution",
    coverageFactIds: ["pdf-fact-s4-motorized-bicycle-caution-motorized-bicycle-riders-should-use-caution"]
  },

  {
    id: "q284",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a right turn road position?",
    imageUrl: "",
    options: [
      "To make a right turn, drive close to the right edge of the road.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Right turn road position): To make a right turn, drive close to the right edge of the road.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Right turn road position",
    coverageFactIds: ["pdf-fact-s4-right-turn-road-position-to-make-a-right-turn-drive-close-to-the-right"]
  },

  {
    id: "q285",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning right turn lane opening?",
    imageUrl: "",
    options: [
      "If a designated right turn lane is available, enter at the opening.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Right turn lane opening): If a designated right turn lane is available, enter at the opening.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Right turn lane opening",
    coverageFactIds: ["pdf-fact-s4-right-turn-lane-opening-if-a-designated-right-turn-lane-is-available-e"]
  },

  {
    id: "q286",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning right turn bike lane use?",
    imageUrl: "",
    options: [
      "Drivers may drive in a bike lane within 200 feet of a right turn after checking blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Right turn bike lane use): Drivers may drive in a bike lane within 200 feet of a right turn after checking blind spots.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Right turn bike lane use",
    coverageFactIds: ["pdf-fact-s4-right-turn-bike-lane-use-drivers-may-drive-in-a-bike-lane-within-200-f"]
  },

  {
    id: "q287",
    category: "Rules of the Road",
    questionText: "Why must drivers exercise extra caution around vulnerable road users, such as pedestrians and cyclists?",
    imageUrl: "",
    options: [
      "When turning right, watch for pedestrians, bicyclists, or motorcyclists between the vehicle and the curb.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Right turn watch vulnerable users): When turning right, watch for pedestrians, bicyclists, or motorcyclists between the vehicle and the curb.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Right turn watch vulnerable users",
    coverageFactIds: ["pdf-fact-s4-right-turn-watch-vulnerable-users-when-turning-right-watch-for-pedestr"]
  },

  {
    id: "q288",
    category: "Rules of the Road",
    questionText: "What is the required distance under California law for right turn signal?",
    imageUrl: "",
    options: [
      "Start signaling about 100 feet before a right turn.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Right turn signal distance): Start signaling about 100 feet before a right turn.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Right turn signal distance",
    coverageFactIds: ["pdf-fact-s4-right-turn-signal-distance-start-signaling-about-100-feet-before-a-rig"]
  },

  {
    id: "q289",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding right turn shoulder check?",
    imageUrl: "",
    options: [
      "Before a right turn, look over your right shoulder and reduce speed.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Right turn shoulder check): Before a right turn, look over your right shoulder and reduce speed.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Right turn shoulder check",
    coverageFactIds: ["pdf-fact-s4-right-turn-shoulder-check-before-a-right-turn-look-over-your-right-sho"]
  },

  {
    id: "q290",
    category: "Rules of the Road",
    questionText: "How is right turn stopping position properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Stop behind the limit line; if none, before the crosswalk; if no crosswalk, before entering the intersection.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Right turn stopping position): Stop behind the limit line; if none, before the crosswalk; if no crosswalk, before entering the intersection.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Right turn stopping position",
    coverageFactIds: ["pdf-fact-s4-right-turn-stopping-position-stop-behind-the-limit-line-if-none-before"]
  },

  {
    id: "q291",
    category: "Rules of the Road",
    questionText: "How is right turn scan properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Look left-right-left and turn when safe.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Right turn scan): Look left-right-left and turn when safe.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Right turn scan",
    coverageFactIds: ["pdf-fact-s4-right-turn-scan-look-left-right-left-and-turn-when-safe"]
  },

  {
    id: "q292",
    category: "Rules of the Road",
    questionText: "How is complete right turn in right lane properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Complete a right turn in the right lane and do not turn wide into another lane.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 11, Complete right turn in right lane): Complete a right turn in the right lane and do not turn wide into another lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 11,
    sourceTopic: "Complete right turn in right lane",
    coverageFactIds: ["pdf-fact-s4-complete-right-turn-in-right-lane-complete-a-right-turn-in-the-right-l"]
  },

  {
    id: "q293",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning dedicated right turn lane no merge?",
    imageUrl: "",
    options: [
      "A dedicated right turn lane does not merge into another lane and allows a right turn without stopping.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Dedicated right turn lane no merge): A dedicated right turn lane does not merge into another lane and allows a right turn without stopping.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Dedicated right turn lane no merge",
    coverageFactIds: ["pdf-fact-s4-dedicated-right-turn-lane-no-merge-a-dedicated-right-turn-lane-does-no"]
  },

  {
    id: "q294",
    category: "Rules of the Road",
    questionText: "How is dedicated right turn during red through light properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Drivers may use a dedicated right turn lane even if the light for straight-through traffic is red.",
      "Sound your horn continuously to warn vehicles that you are about to turn.",
      "Signal for a turn only when changing directions in a designated construction zone.",
      "Keep your high-beam headlights on continuously for maximum visibility."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Dedicated right turn during red through light): Drivers may use a dedicated right turn lane even if the light for straight-through traffic is red.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Dedicated right turn during red through light",
    coverageFactIds: ["pdf-fact-s4-dedicated-right-turn-during-red-through-light-drivers-may-use-a-dedica"]
  },

  {
    id: "q295",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding dedicated right turn obey curb signal?",
    imageUrl: "",
    options: [
      "If a traffic light or sign is on the right curb of the dedicated right turn lane, obey that light or sign.",
      "Signal for a turn only when changing directions in a designated construction zone.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Dedicated right turn obey curb signal): If a traffic light or sign is on the right curb of the dedicated right turn lane, obey that light or sign.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Dedicated right turn obey curb signal",
    coverageFactIds: ["pdf-fact-s4-dedicated-right-turn-obey-curb-signal-if-a-traffic-light-or-sign-is-on"]
  },

  {
    id: "q296",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a dedicated right turn yield pedestrians?",
    imageUrl: "",
    options: [
      "Always yield to pedestrians in a crosswalk when turning from a dedicated right turn lane.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Dedicated right turn yield pedestrians): Always yield to pedestrians in a crosswalk when turning from a dedicated right turn lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Dedicated right turn yield pedestrians",
    coverageFactIds: ["pdf-fact-s4-dedicated-right-turn-yield-pedestrians-always-yield-to-pedestrians-in"]
  },

  {
    id: "q297",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning left turn lane position?",
    imageUrl: "",
    options: [
      "To turn left, drive close to the center divider or into the left turn lane.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn lane position): To turn left, drive close to the center divider or into the left turn lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn lane position",
    coverageFactIds: ["pdf-fact-s4-left-turn-lane-position-to-turn-left-drive-close-to-the-center-divider"]
  },

  {
    id: "q298",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning left turn lane opening?",
    imageUrl: "",
    options: [
      "Enter a designated left turn lane at the opening and do not cross any solid line.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn lane opening): Enter a designated left turn lane at the opening and do not cross any solid line.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn lane opening",
    coverageFactIds: ["pdf-fact-s4-left-turn-lane-opening-enter-a-designated-left-turn-lane-at-the-openin"]
  },

  {
    id: "q299",
    category: "Rules of the Road",
    questionText: "What is the required distance under California law for left turn center lane?",
    imageUrl: "",
    options: [
      "Enter a two-way center left turn lane within 200 feet of a left turn.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn center lane distance): Enter a two-way center left turn lane within 200 feet of a left turn.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn center lane distance",
    coverageFactIds: ["pdf-fact-s4-left-turn-center-lane-distance-enter-a-two-way-center-left-turn-lane-w"]
  },

  {
    id: "q300",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning left turn yield in center lane?",
    imageUrl: "",
    options: [
      "Respect the right-of-way of vehicles, bicyclists, or motorcyclists already in a center left turn lane and always yield to pedestrians.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn yield in center lane): Respect the right-of-way of vehicles, bicyclists, or motorcyclists already in a center left turn lane and always yield to pedestrians.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn yield in center lane",
    coverageFactIds: ["pdf-fact-s4-left-turn-yield-in-center-lane-respect-the-right-of-way-of-vehicles-bi"]
  },

  {
    id: "q301",
    category: "Rules of the Road",
    questionText: "What is the required distance under California law for left turn signal?",
    imageUrl: "",
    options: [
      "Start signaling 100 feet before a left turn.",
      "Use your turn signals only if requested by passengers or law enforcement.",
      "Sound your horn continuously to warn vehicles that you are about to turn.",
      "Signal for a turn only when changing directions in a designated construction zone."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn signal distance): Start signaling 100 feet before a left turn.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn signal distance",
    coverageFactIds: ["pdf-fact-s4-left-turn-signal-distance-start-signaling-100-feet-before-a-left-turn"]
  },

  {
    id: "q302",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning left turn shoulder and speed?",
    imageUrl: "",
    options: [
      "Before a left turn, look over your left shoulder and reduce speed.",
      "This requirement only applies when driving on high-speed interstate freeways.",
      "The speed limit is suspended during late-night hours when traffic is light.",
      "Speed up to match the highest speed of the surrounding traffic."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn shoulder and speed): Before a left turn, look over your left shoulder and reduce speed.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn shoulder and speed",
    coverageFactIds: ["pdf-fact-s4-left-turn-shoulder-and-speed-before-a-left-turn-look-over-your-left-sh"]
  },

  {
    id: "q303",
    category: "Rules of the Road",
    questionText: "How is left turn stopping position properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "For a left turn, stop behind the limit line, before the crosswalk, or before the intersection as applicable.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn stopping position): For a left turn, stop behind the limit line, before the crosswalk, or before the intersection as applicable.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn stopping position",
    coverageFactIds: ["pdf-fact-s4-left-turn-stopping-position-for-a-left-turn-stop-behind-the-limit-line"]
  },

  {
    id: "q304",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a left turn scanning?",
    imageUrl: "",
    options: [
      "Look left-right-left and begin a left turn when safe.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn scanning): Look left-right-left and begin a left turn when safe.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn scanning",
    coverageFactIds: ["pdf-fact-s4-left-turn-scanning-look-left-right-left-and-begin-a-left-turn-when-saf"]
  },

  {
    id: "q305",
    category: "Rules of the Road",
    questionText: "How is left turn complete in left lane properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Complete a left turn in the left lane.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn complete in left lane): Complete a left turn in the left lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn complete in left lane",
    coverageFactIds: ["pdf-fact-s4-left-turn-complete-in-left-lane-complete-a-left-turn-in-the-left-lane"]
  },

  {
    id: "q306",
    category: "Rules of the Road",
    questionText: "How is left turn smooth acceleration properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Accelerate smoothly during and after a left turn and allow the steering wheel to straighten.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 12, Left turn smooth acceleration): Accelerate smoothly during and after a left turn and allow the steering wheel to straighten.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 12,
    sourceTopic: "Left turn smooth acceleration",
    coverageFactIds: ["pdf-fact-s4-left-turn-smooth-acceleration-accelerate-smoothly-during-and-after-a-l"]
  },

  {
    id: "q307",
    category: "Rules of the Road",
    questionText: "Under California law, what is the definition of a u-turn?",
    imageUrl: "",
    options: [
      "A U-turn turns a vehicle around to go back in the direction it came from.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, U-turn definition): A U-turn turns a vehicle around to go back in the direction it came from.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "U-turn definition",
    coverageFactIds: ["pdf-fact-s4-u-turn-definition-a-u-turn-turns-a-vehicle-around-to-go-back-in-the-di"]
  },

  {
    id: "q308",
    category: "Rules of the Road",
    questionText: "How is u-turn lane position properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "To make a U-turn, signal and use the left turn lane or far-left lane.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, U-turn lane position): To make a U-turn, signal and use the left turn lane or far-left lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "U-turn lane position",
    coverageFactIds: ["pdf-fact-s4-u-turn-lane-position-to-make-a-u-turn-signal-and-use-the-left-turn-lan"]
  },

  {
    id: "q309",
    category: "Rules of the Road",
    questionText: "How is u-turn across double yellow properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Drivers may make a U-turn across a double yellow line when otherwise legal.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, U-turn across double yellow): Drivers may make a U-turn across a double yellow line when otherwise legal.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "U-turn across double yellow",
    coverageFactIds: ["pdf-fact-s4-u-turn-across-double-yellow-drivers-may-make-a-u-turn-across-a-double"]
  },

  {
    id: "q310",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding u-turn at green intersection?",
    imageUrl: "",
    options: [
      "A U-turn is allowed at an intersection on a green light or green arrow unless a NO U-TURN sign is posted.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, U-turn at green intersection): A U-turn is allowed at an intersection on a green light or green arrow unless a NO U-TURN sign is posted.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "U-turn at green intersection",
    coverageFactIds: ["pdf-fact-s4-u-turn-at-green-intersection-a-u-turn-is-allowed-at-an-intersection-on"]
  },

  {
    id: "q311",
    category: "Rules of the Road",
    questionText: "How is u-turn divided highway opening properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "A U-turn is allowed on a divided highway only if a center divider opening is provided.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, U-turn divided highway opening): A U-turn is allowed on a divided highway only if a center divider opening is provided.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "U-turn divided highway opening",
    coverageFactIds: ["pdf-fact-s4-u-turn-divided-highway-opening-a-u-turn-is-allowed-on-a-divided-highwa"]
  },

  {
    id: "q312",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no u-turn sign?",
    imageUrl: "",
    options: [
      "Never make a U-turn where a NO U-TURN sign is posted.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, No U-turn sign): Never make a U-turn where a NO U-TURN sign is posted.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "No U-turn sign",
    coverageFactIds: ["pdf-fact-s4-no-u-turn-sign-never-make-a-u-turn-where-a-no-u-turn-sign-is-posted"]
  },

  {
    id: "q313",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a no u-turn railroad crossing?",
    imageUrl: "",
    options: [
      "Never make a U-turn at or on a railroad crossing.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, No U-turn railroad crossing): Never make a U-turn at or on a railroad crossing.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "No U-turn railroad crossing",
    coverageFactIds: ["pdf-fact-s4-no-u-turn-railroad-crossing-never-make-a-u-turn-at-or-on-a-railroad-cr"]
  },

  {
    id: "q314",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a no u-turn one-way street?",
    imageUrl: "",
    options: [
      "Never make a U-turn on a one-way street.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, No U-turn one-way street): Never make a U-turn on a one-way street.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "No U-turn one-way street",
    coverageFactIds: ["pdf-fact-s4-no-u-turn-one-way-street-never-make-a-u-turn-on-a-one-way-street"]
  },

  {
    id: "q315",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a no u-turn fire station?",
    imageUrl: "",
    options: [
      "Never make a U-turn in front of a fire station and never use a fire station driveway to turn around.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 13, No U-turn fire station): Never make a U-turn in front of a fire station and never use a fire station driveway to turn around.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 13,
    sourceTopic: "No U-turn fire station",
    coverageFactIds: ["pdf-fact-s4-no-u-turn-fire-station-never-make-a-u-turn-in-front-of-a-fire-station"]
  },

  {
    id: "q316",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding left turn two-way to two-way?",
    imageUrl: "",
    options: [
      "A left turn from a two-way street should start in the left lane closest to the middle and end in the left lane closest to the middle in the new direction.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 14, Left turn two-way to two-way): A left turn from a two-way street should start in the left lane closest to the middle and end in the left lane closest to the middle in the new direction.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 14,
    sourceTopic: "Left turn two-way to two-way",
    coverageFactIds: ["pdf-fact-s4-left-turn-two-way-to-two-way-a-left-turn-from-a-two-way-street-should"]
  },

  {
    id: "q317",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding right turn lane path?",
    imageUrl: "",
    options: [
      "A right turn should begin and end in the lane closest to the right edge without swinging wide.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 14, Right turn lane path): A right turn should begin and end in the lane closest to the right edge without swinging wide.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 14,
    sourceTopic: "Right turn lane path",
    coverageFactIds: ["pdf-fact-s4-right-turn-lane-path-a-right-turn-should-begin-and-end-in-the-lane-clo"]
  },

  {
    id: "q318",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a left turn two-way to one-way?",
    imageUrl: "",
    options: [
      "A left turn from a two-way street onto a one-way street starts from the far-left lane and may end in any open lane if there are three or more lanes.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 14, Left turn two-way to one-way): A left turn from a two-way street onto a one-way street starts from the far-left lane and may end in any open lane if there are three or more lanes.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 14,
    sourceTopic: "Left turn two-way to one-way",
    coverageFactIds: ["pdf-fact-s4-left-turn-two-way-to-one-way-a-left-turn-from-a-two-way-street-onto-a"]
  },

  {
    id: "q319",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a left turn one-way to two-way?",
    imageUrl: "",
    options: [
      "A left turn from a one-way street onto a two-way street starts from the far-left lane and ends in the lane closest to the middle in the new direction.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 14, Left turn one-way to two-way): A left turn from a one-way street onto a two-way street starts from the far-left lane and ends in the lane closest to the middle in the new direction.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 14,
    sourceTopic: "Left turn one-way to two-way",
    coverageFactIds: ["pdf-fact-s4-left-turn-one-way-to-two-way-a-left-turn-from-a-one-way-street-onto-a"]
  },

  {
    id: "q320",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a left turn one-way to one-way?",
    imageUrl: "",
    options: [
      "A left turn from one one-way street to another starts from the far-left lane; bicyclists may use the left-turn lane.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 15, Left turn one-way to one-way): A left turn from one one-way street to another starts from the far-left lane; bicyclists may use the left-turn lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 15,
    sourceTopic: "Left turn one-way to one-way",
    coverageFactIds: ["pdf-fact-s4-left-turn-one-way-to-one-way-a-left-turn-from-one-one-way-street-to-an"]
  },

  {
    id: "q321",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a right turn one-way to one-way?",
    imageUrl: "",
    options: [
      "A right turn from one one-way street to another starts in the far-right lane and may end in any lane if safe.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 15, Right turn one-way to one-way): A right turn from one one-way street to another starts in the far-right lane and may end in any lane if safe.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 15,
    sourceTopic: "Right turn one-way to one-way",
    coverageFactIds: ["pdf-fact-s4-right-turn-one-way-to-one-way-a-right-turn-from-one-one-way-street-to"]
  },

  {
    id: "q322",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding braking method?",
    imageUrl: "",
    options: [
      "To brake, remove your foot from the accelerator, let the vehicle slow, and lightly press the brake until stopped.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 15, Braking method): To brake, remove your foot from the accelerator, let the vehicle slow, and lightly press the brake until stopped.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 15,
    sourceTopic: "Braking method",
    coverageFactIds: ["pdf-fact-s4-braking-method-to-brake-remove-your-foot-from-the-accelerator-let-the"]
  },

  {
    id: "q323",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding limit line stopping?",
    imageUrl: "",
    options: [
      "When stopping at a limit line, do not cross over it.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars.",
      "Always maintain 15 mph in any lane regardless of traffic or road conditions.",
      "Accelerate unconditionally to join the nearest travel lane."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 15, Limit line stopping): When stopping at a limit line, do not cross over it.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 15,
    sourceTopic: "Limit line stopping",
    coverageFactIds: ["pdf-fact-s4-limit-line-stopping-when-stopping-at-a-limit-line-do-not-cross-over-it"]
  },

  {
    id: "q324",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding stopped behind vehicle space?",
    imageUrl: "",
    options: [
      "When stopping behind another vehicle, leave enough space to see its rear wheels.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 15, Stopped behind vehicle space): When stopping behind another vehicle, leave enough space to see its rear wheels.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 15,
    sourceTopic: "Stopped behind vehicle space",
    coverageFactIds: ["pdf-fact-s4-stopped-behind-vehicle-space-when-stopping-behind-another-vehicle-leav"]
  },

  {
    id: "q325",
    category: "Rules of the Road",
    questionText: "How is right-of-way determined for highway traffic right-of-way?",
    imageUrl: "",
    options: [
      "Highway traffic has the right-of-way when merging onto a highway.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 15, Highway traffic right-of-way): Highway traffic has the right-of-way when merging onto a highway.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 15,
    sourceTopic: "Highway traffic right-of-way",
    coverageFactIds: ["pdf-fact-s4-highway-traffic-right-of-way-highway-traffic-has-the-right-of-way-when"]
  },

  {
    id: "q326",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning on-ramp proper lane?",
    imageUrl: "",
    options: [
      "When entering a highway, be in the proper lane on the on-ramp.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 15, On-ramp proper lane): When entering a highway, be in the proper lane on the on-ramp.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 15,
    sourceTopic: "On-ramp proper lane",
    coverageFactIds: ["pdf-fact-s4-on-ramp-proper-lane-when-entering-a-highway-be-in-the-proper-lane-on-t"]
  },

  {
    id: "q327",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding merge when safe no stop?",
    imageUrl: "",
    options: [
      "Merge into highway traffic when safe and do not stop unless absolutely necessary.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Merge when safe no stop): Merge into highway traffic when safe and do not stop unless absolutely necessary.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Merge when safe no stop",
    coverageFactIds: ["pdf-fact-s4-merge-when-safe-no-stop-merge-into-highway-traffic-when-safe-and-do-no"]
  },

  {
    id: "q328",
    category: "Rules of the Road",
    questionText: "How is merge space properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Merge into a space large enough for your vehicle to safely join the lane.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Merge space): Merge into a space large enough for your vehicle to safely join the lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Merge space",
    coverageFactIds: ["pdf-fact-s4-merge-space-merge-into-a-space-large-enough-for-your-vehicle-to-safely"]
  },

  {
    id: "q329",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding merge mirrors and signals?",
    imageUrl: "",
    options: [
      "Use mirrors and turn signals when merging.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Merge mirrors and signals): Use mirrors and turn signals when merging.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Merge mirrors and signals",
    coverageFactIds: ["pdf-fact-s4-merge-mirrors-and-signals-use-mirrors-and-turn-signals-when-merging"]
  },

  {
    id: "q330",
    category: "Rules of the Road",
    questionText: "What is the proper way to perform a merge shoulder?",
    imageUrl: "",
    options: [
      "Turn your head quickly to look over your shoulder before changing lanes or merging.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Merge shoulder check): Turn your head quickly to look over your shoulder before changing lanes or merging.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Merge shoulder check",
    coverageFactIds: ["pdf-fact-s4-merge-shoulder-check-turn-your-head-quickly-to-look-over-your-shoulder"]
  },

  {
    id: "q331",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no solid line merging?",
    imageUrl: "",
    options: [
      "Do not cross solid lines when merging or exiting.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, No solid line merging): Do not cross solid lines when merging or exiting.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "No solid line merging",
    coverageFactIds: ["pdf-fact-s4-no-solid-line-merging-do-not-cross-solid-lines-when-merging-or-exiting"]
  },

  {
    id: "q332",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding multiple lane changes?",
    imageUrl: "",
    options: [
      "When crossing several lanes, signal and cross one lane at a time, checking blind spots each time.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Multiple lane changes): When crossing several lanes, signal and cross one lane at a time, checking blind spots each time.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Multiple lane changes",
    coverageFactIds: ["pdf-fact-s4-multiple-lane-changes-when-crossing-several-lanes-signal-and-cross-one"]
  },

  {
    id: "q333",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning exit preparation?",
    imageUrl: "",
    options: [
      "To exit a highway safely, know your exit and be aware when it is approaching.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Exit preparation): To exit a highway safely, know your exit and be aware when it is approaching.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Exit preparation",
    coverageFactIds: ["pdf-fact-s4-exit-preparation-to-exit-a-highway-safely-know-your-exit-and-be-aware"]
  },

  {
    id: "q334",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning exit lane changes?",
    imageUrl: "",
    options: [
      "When exiting, change lanes one at a time and check blind spots.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Exit lane changes): When exiting, change lanes one at a time and check blind spots.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Exit lane changes",
    coverageFactIds: ["pdf-fact-s4-exit-lane-changes-when-exiting-change-lanes-one-at-a-time-and-check-bl"]
  },

  {
    id: "q335",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning exit speed?",
    imageUrl: "",
    options: [
      "Make sure you are at a safe speed to exit.",
      "The speed limit is suspended during late-night hours when traffic is light.",
      "Speed up to match the highest speed of the surrounding traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Exit speed): Make sure you are at a safe speed to exit.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Exit speed",
    coverageFactIds: ["pdf-fact-s4-exit-speed-make-sure-you-are-at-a-safe-speed-to-exit"]
  },

  {
    id: "q336",
    category: "Rules of the Road",
    questionText: "How is blocked intersection with green light properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Even with a green light, do not enter an intersection if pedestrians or vehicles are blocking your path.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Blocked intersection with green light): Even with a green light, do not enter an intersection if pedestrians or vehicles are blocking your path.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Blocked intersection with green light",
    coverageFactIds: ["pdf-fact-s4-blocked-intersection-with-green-light-even-with-a-green-light-do-not-e"]
  },

  {
    id: "q337",
    category: "Rules of the Road",
    questionText: "How is do not trust right signal properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "When turning left, do not assume an oncoming vehicle signaling right will turn before reaching you.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 16, Do not trust right signal): When turning left, do not assume an oncoming vehicle signaling right will turn before reaching you.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 16,
    sourceTopic: "Do not trust right signal",
    coverageFactIds: ["pdf-fact-s4-do-not-trust-right-signal-when-turning-left-do-not-assume-an-oncoming"]
  },

  {
    id: "q338",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding judge passing space?",
    imageUrl: "",
    options: [
      "Before passing, judge whether you have enough space when approaching oncoming traffic, bicyclists, hills, curves, intersections, or obstructions.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, Judge passing space): Before passing, judge whether you have enough space when approaching oncoming traffic, bicyclists, hills, curves, intersections, or obstructions.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "Judge passing space",
    coverageFactIds: ["pdf-fact-s4-judge-passing-space-before-passing-judge-whether-you-have-enough-space"]
  },

  {
    id: "q339",
    category: "Rules of the Road",
    questionText: "What is the required distance under California law for passing hill or curve?",
    imageUrl: "",
    options: [
      "To pass safely near a hill or curve, the hill or curve should be at least one-third of a mile ahead.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, Passing hill or curve distance): To pass safely near a hill or curve, the hill or curve should be at least one-third of a mile ahead.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "Passing hill or curve distance",
    coverageFactIds: ["pdf-fact-s4-passing-hill-or-curve-distance-to-pass-safely-near-a-hill-or-curve-the"]
  },

  {
    id: "q340",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding look ahead before passing?",
    imageUrl: "",
    options: [
      "Before passing, look ahead for road conditions that may cause other vehicles to move into your lane.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, Look ahead before passing): Before passing, look ahead for road conditions that may cause other vehicles to move into your lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "Look ahead before passing",
    coverageFactIds: ["pdf-fact-s4-look-ahead-before-passing-before-passing-look-ahead-for-road-condition"]
  },

  {
    id: "q341",
    category: "Rules of the Road",
    questionText: "How is do not pass blind hill or curve properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Do not pass when approaching a hill or curve if you cannot see whether traffic is approaching.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, Do not pass blind hill or curve): Do not pass when approaching a hill or curve if you cannot see whether traffic is approaching.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "Do not pass blind hill or curve",
    coverageFactIds: ["pdf-fact-s4-do-not-pass-blind-hill-or-curve-do-not-pass-when-approaching-a-hill-or"]
  },

  {
    id: "q342",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no passing crossroads driveways?",
    imageUrl: "",
    options: [
      "Do not pass at crossroads or driveways.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, No passing crossroads driveways): Do not pass at crossroads or driveways.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "No passing crossroads driveways",
    coverageFactIds: ["pdf-fact-s4-no-passing-crossroads-driveways-do-not-pass-at-crossroads-or-driveways"]
  },

  {
    id: "q343",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no passing without return space?",
    imageUrl: "",
    options: [
      "Do not pass unless you have enough space to return to your lane.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, No passing without return space): Do not pass unless you have enough space to return to your lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "No passing without return space",
    coverageFactIds: ["pdf-fact-s4-no-passing-without-return-space-do-not-pass-unless-you-have-enough-spa"]
  },

  {
    id: "q344",
    category: "Rules of the Road",
    questionText: "What is the correct procedure to pass?",
    imageUrl: "",
    options: [
      "To pass on an open highway, signal, check blind spots, enter the passing lane, speed up, then signal and return.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, How to pass): To pass on an open highway, signal, check blind spots, enter the passing lane, speed up, then signal and return.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "How to pass",
    coverageFactIds: ["pdf-fact-s4-how-to-pass-to-pass-on-an-open-highway-signal-check-blind-spots-enter"]
  },

  {
    id: "q345",
    category: "Rules of the Road",
    questionText: "How is no off-road passing properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Never drive off the paved or main-traveled part of the road to pass.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, No off-road passing): Never drive off the paved or main-traveled part of the road to pass.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "No off-road passing",
    coverageFactIds: ["pdf-fact-s4-no-off-road-passing-never-drive-off-the-paved-or-main-traveled-part-of"]
  },

  {
    id: "q346",
    category: "Rules of the Road",
    questionText: "How is being passed properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If another vehicle is passing or signaling to pass, allow it, maintain lane position, and maintain speed.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 17, Being passed): If another vehicle is passing or signaling to pass, allow it, maintain lane position, and maintain speed.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 17,
    sourceTopic: "Being passed",
    coverageFactIds: ["pdf-fact-s4-being-passed-if-another-vehicle-is-passing-or-signaling-to-pass-allow"]
  },

  {
    id: "q347",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding parallel parking space length?",
    imageUrl: "",
    options: [
      "Parallel parking requires a space at least three feet longer than your vehicle.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 18, Parallel parking space length): Parallel parking requires a space at least three feet longer than your vehicle.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 18,
    sourceTopic: "Parallel parking space length",
    coverageFactIds: ["pdf-fact-s4-parallel-parking-space-length-parallel-parking-requires-a-space-at-lea"]
  },

  {
    id: "q348",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding parallel parking signal?",
    imageUrl: "",
    options: [
      "Signal to show you plan to park.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement.",
      "Sound your horn continuously to warn vehicles that you are about to turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 18, Parallel parking signal): Signal to show you plan to park.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 18,
    sourceTopic: "Parallel parking signal",
    coverageFactIds: ["pdf-fact-s4-parallel-parking-signal-signal-to-show-you-plan-to-park"]
  },

  {
    id: "q349",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning parallel parking side distance?",
    imageUrl: "",
    options: [
      "Pull alongside the vehicle in front of the space and leave about two feet between vehicles.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 18, Parallel parking side distance): Pull alongside the vehicle in front of the space and leave about two feet between vehicles.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 18,
    sourceTopic: "Parallel parking side distance",
    coverageFactIds: ["pdf-fact-s4-parallel-parking-side-distance-pull-alongside-the-vehicle-in-front-of"]
  },

  {
    id: "q350",
    category: "Rules of the Road",
    questionText: "How is parallel parking blind spots properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Before backing into a parallel parking space, check mirrors and blind spots for vehicles and pedestrians.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 18, Parallel parking blind spots): Before backing into a parallel parking space, check mirrors and blind spots for vehicles and pedestrians.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 18,
    sourceTopic: "Parallel parking blind spots",
    coverageFactIds: ["pdf-fact-s4-parallel-parking-blind-spots-before-backing-into-a-parallel-parking-sp"]
  },

  {
    id: "q351",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding parallel parking backing angle?",
    imageUrl: "",
    options: [
      "Back into a parallel parking space at about a 45-degree angle.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 18, Parallel parking backing angle): Back into a parallel parking space at about a 45-degree angle.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 18,
    sourceTopic: "Parallel parking backing angle",
    coverageFactIds: ["pdf-fact-s4-parallel-parking-backing-angle-back-into-a-parallel-parking-space-at-a"]
  },

  {
    id: "q352",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding parking brake after parallel parking?",
    imageUrl: "",
    options: [
      "After parallel parking, turn off the vehicle and set the parking brake.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 18, Parking brake after parallel parking): After parallel parking, turn off the vehicle and set the parking brake.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 18,
    sourceTopic: "Parking brake after parallel parking",
    coverageFactIds: ["pdf-fact-s4-parking-brake-after-parallel-parking-after-parallel-parking-turn-off-t"]
  },

  {
    id: "q353",
    category: "Rules of the Road",
    questionText: "How is look before exiting parked vehicle properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Before exiting a parked vehicle, look carefully for passing vehicles, bicycles, and motorcycles.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 18, Look before exiting parked vehicle): Before exiting a parked vehicle, look carefully for passing vehicles, bicycles, and motorcycles.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 18,
    sourceTopic: "Look before exiting parked vehicle",
    coverageFactIds: ["pdf-fact-s4-look-before-exiting-parked-vehicle-before-exiting-a-parked-vehicle-loo"]
  },

  {
    id: "q354",
    category: "Rules of the Road",
    questionText: "How is straight-line backing traffic check properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Before straight-line backing, observe traffic and check blind spots.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 19, Straight-line backing traffic check): Before straight-line backing, observe traffic and check blind spots.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 19,
    sourceTopic: "Straight-line backing traffic check",
    coverageFactIds: ["pdf-fact-s4-straight-line-backing-traffic-check-before-straight-line-backing-obser"]
  },

  {
    id: "q355",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding straight-line backing signal?",
    imageUrl: "",
    options: [
      "Activate the turn signal before pulling up to the curb and cancel it when completed.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 19, Straight-line backing signal): Activate the turn signal before pulling up to the curb and cancel it when completed.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 19,
    sourceTopic: "Straight-line backing signal",
    coverageFactIds: ["pdf-fact-s4-straight-line-backing-signal-activate-the-turn-signal-before-pulling-u"]
  },

  {
    id: "q356",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding straight-line backing distance?",
    imageUrl: "",
    options: [
      "Back in a straight line for three vehicle lengths while remaining within three feet of the curb.",
      "You are exempt from all DMV medical reporting rules if you have a clean record.",
      "It is acceptable to drive after drinking if you drink strong coffee first.",
      "Prescription medications are always completely safe to use while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 19, Straight-line backing distance): Back in a straight line for three vehicle lengths while remaining within three feet of the curb.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 19,
    sourceTopic: "Straight-line backing distance",
    coverageFactIds: ["pdf-fact-s4-straight-line-backing-distance-back-in-a-straight-line-for-three-vehic"]
  },

  {
    id: "q357",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding straight-line backing control?",
    imageUrl: "",
    options: [
      "Back at a smooth, safe speed and adjust the steering wheel as needed.",
      "It is acceptable to drive after drinking if you drink strong coffee first.",
      "Prescription medications are always completely safe to use while driving.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 19, Straight-line backing control): Back at a smooth, safe speed and adjust the steering wheel as needed.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 19,
    sourceTopic: "Straight-line backing control",
    coverageFactIds: ["pdf-fact-s4-straight-line-backing-control-back-at-a-smooth-safe-speed-and-adjust-t"]
  },

  {
    id: "q358",
    category: "Rules of the Road",
    questionText: "How is hill parking brake properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "When parking on a hill, set the parking brake and leave the vehicle in park or in gear for a manual transmission.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 19, Hill parking brake): When parking on a hill, set the parking brake and leave the vehicle in park or in gear for a manual transmission.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 19,
    sourceTopic: "Hill parking brake",
    coverageFactIds: ["pdf-fact-s4-hill-parking-brake-when-parking-on-a-hill-set-the-parking-brake-and-le"]
  },

  {
    id: "q359",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding sloping driveway parking?",
    imageUrl: "",
    options: [
      "On a sloping driveway, turn the wheels so the vehicle will not roll into the street.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 19, Sloping driveway parking): On a sloping driveway, turn the wheels so the vehicle will not roll into the street.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 19,
    sourceTopic: "Sloping driveway parking",
    coverageFactIds: ["pdf-fact-s4-sloping-driveway-parking-on-a-sloping-driveway-turn-the-wheels-so-the"]
  },

  {
    id: "q360",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding no parking sign?",
    imageUrl: "",
    options: [
      "Never park where a NO PARKING sign is posted.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 20, No parking sign): Never park where a NO PARKING sign is posted.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 20,
    sourceTopic: "No parking sign",
    coverageFactIds: ["pdf-fact-s4-no-parking-sign-never-park-where-a-no-parking-sign-is-posted"]
  },

  {
    id: "q361",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding no parking on crosswalk?",
    imageUrl: "",
    options: [
      "Never park on a marked or unmarked crosswalk.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 20, No parking on crosswalk): Never park on a marked or unmarked crosswalk.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 20,
    sourceTopic: "No parking on crosswalk",
    coverageFactIds: ["pdf-fact-s4-no-parking-on-crosswalk-never-park-on-a-marked-or-unmarked-crosswalk"]
  },

  {
    id: "q362",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no parking on sidewalk driveway?",
    imageUrl: "",
    options: [
      "Never park on a sidewalk, partially blocking a sidewalk, or in front of a driveway.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 20, No parking on sidewalk driveway): Never park on a sidewalk, partially blocking a sidewalk, or in front of a driveway.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 20,
    sourceTopic: "No parking on sidewalk driveway",
    coverageFactIds: ["pdf-fact-s4-no-parking-on-sidewalk-driveway-never-park-on-a-sidewalk-partially-blo"]
  },

  {
    id: "q363",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no parking crosshatched disabled area?",
    imageUrl: "",
    options: [
      "Never park in the crosshatched area next to a designated disabled parking space.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 20, No parking crosshatched disabled area): Never park in the crosshatched area next to a designated disabled parking space.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 20,
    sourceTopic: "No parking crosshatched disabled area",
    coverageFactIds: ["pdf-fact-s4-no-parking-crosshatched-disabled-area-never-park-in-the-crosshatched-a"]
  },

  {
    id: "q364",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning no parking zero-emission space?",
    imageUrl: "",
    options: [
      "Never park in a space designated for parking or fueling zero-emission vehicles unless driving a zero-emission vehicle.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 20, No parking zero-emission space): Never park in a space designated for parking or fueling zero-emission vehicles unless driving a zero-emission vehicle.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 20,
    sourceTopic: "No parking zero-emission space",
    coverageFactIds: ["pdf-fact-s4-no-parking-zero-emission-space-never-park-in-a-space-designated-for-pa"]
  },

  {
    id: "q365",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no parking tunnel or bridge?",
    imageUrl: "",
    options: [
      "Never park in a tunnel or on a bridge unless signs permit it.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 20, No parking tunnel or bridge): Never park in a tunnel or on a bridge unless signs permit it.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 20,
    sourceTopic: "No parking tunnel or bridge",
    coverageFactIds: ["pdf-fact-s4-no-parking-tunnel-or-bridge-never-park-in-a-tunnel-or-on-a-bridge-unle"]
  },

  {
    id: "q366",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding no parking safety zone?",
    imageUrl: "",
    options: [
      "Never park between a safety zone and the curb.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 20, No parking safety zone): Never park between a safety zone and the curb.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 20,
    sourceTopic: "No parking safety zone",
    coverageFactIds: ["pdf-fact-s4-no-parking-safety-zone-never-park-between-a-safety-zone-and-the-curb"]
  },

  {
    id: "q367",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding freeway parking exception?",
    imageUrl: "",
    options: [
      "Do not stop or park on a freeway except in emergencies, when directed by law enforcement, or where specifically permitted.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Freeway parking exception): Do not stop or park on a freeway except in emergencies, when directed by law enforcement, or where specifically permitted.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Freeway parking exception",
    coverageFactIds: ["pdf-fact-s4-freeway-parking-exception-do-not-stop-or-park-on-a-freeway-except-in-e"]
  },

  {
    id: "q368",
    category: "Rules of the Road",
    questionText: "How is freeway stopped vehicle position properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If you must stop on a freeway, park completely off the pavement and stay in the vehicle with doors locked until help arrives.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Freeway stopped vehicle position): If you must stop on a freeway, park completely off the pavement and stay in the vehicle with doors locked until help arrives.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Freeway stopped vehicle position",
    coverageFactIds: ["pdf-fact-s4-freeway-stopped-vehicle-position-if-you-must-stop-on-a-freeway-park-co"]
  },

  {
    id: "q369",
    category: "Rules of the Road",
    questionText: "How is officer stop right signal properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "During a law enforcement stop, turn on your right turn signal to acknowledge the officer.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop right signal): During a law enforcement stop, turn on your right turn signal to acknowledge the officer.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop right signal",
    coverageFactIds: ["pdf-fact-s4-officer-stop-right-signal-during-a-law-enforcement-stop-turn-on-your-r"]
  },

  {
    id: "q370",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding officer stop right shoulder?",
    imageUrl: "",
    options: [
      "Move completely onto the right shoulder for a law enforcement stop, even if in the carpool or HOV lane.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop right shoulder): Move completely onto the right shoulder for a law enforcement stop, even if in the carpool or HOV lane.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop right shoulder",
    coverageFactIds: ["pdf-fact-s4-officer-stop-right-shoulder-move-completely-onto-the-right-shoulder-fo"]
  },

  {
    id: "q371",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding officer stop well-lit?",
    imageUrl: "",
    options: [
      "Stop in a well-lit area when possible during a law enforcement stop.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop well-lit): Stop in a well-lit area when possible during a law enforcement stop.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop well-lit",
    coverageFactIds: ["pdf-fact-s4-officer-stop-well-lit-stop-in-a-well-lit-area-when-possible-during-a-l"]
  },

  {
    id: "q372",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding officer stop radio off?",
    imageUrl: "",
    options: [
      "Turn off the radio during a law enforcement stop.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop radio off): Turn off the radio during a law enforcement stop.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop radio off",
    coverageFactIds: ["pdf-fact-s4-officer-stop-radio-off-turn-off-the-radio-during-a-law-enforcement-sto"]
  },

  {
    id: "q373",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding officer stop stay in vehicle?",
    imageUrl: "",
    options: [
      "Remain inside the vehicle unless directed by the officer to get out.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop stay in vehicle): Remain inside the vehicle unless directed by the officer to get out.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop stay in vehicle",
    coverageFactIds: ["pdf-fact-s4-officer-stop-stay-in-vehicle-remain-inside-the-vehicle-unless-directed"]
  },

  {
    id: "q374",
    category: "Rules of the Road",
    questionText: "How is officer stop roll window properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Roll down the window after stopping and before the officer contacts you.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop roll window): Roll down the window after stopping and before the officer contacts you.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop roll window",
    coverageFactIds: ["pdf-fact-s4-officer-stop-roll-window-roll-down-the-window-after-stopping-and-befor"]
  },

  {
    id: "q375",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding officer stop hands visible?",
    imageUrl: "",
    options: [
      "Drivers and passengers should place their hands in clear view before officer contact.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop hands visible): Drivers and passengers should place their hands in clear view before officer contact.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop hands visible",
    coverageFactIds: ["pdf-fact-s4-officer-stop-hands-visible-drivers-and-passengers-should-place-their-h"]
  },

  {
    id: "q376",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding officer stop reason exception?",
    imageUrl: "",
    options: [
      "An officer may delay stating the reason for a stop if doing so is necessary to protect life or property from imminent threat.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop reason exception): An officer may delay stating the reason for a stop if doing so is necessary to protect life or property from imminent threat.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop reason exception",
    coverageFactIds: ["pdf-fact-s4-officer-stop-reason-exception-an-officer-may-delay-stating-the-reason"]
  },

  {
    id: "q377",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding officer stop reason documented?",
    imageUrl: "",
    options: [
      "The reason for the stop must be documented on the citation or enforcement report.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 21, Officer stop reason documented): The reason for the stop must be documented on the citation or enforcement report.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 21,
    sourceTopic: "Officer stop reason documented",
    coverageFactIds: ["pdf-fact-s4-officer-stop-reason-documented-the-reason-for-the-stop-must-be-documen"]
  },

  {
    id: "q378",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding refusing consent to search?",
    imageUrl: "",
    options: [
      "If an officer requests permission to search, you may clearly say that you do not give permission, but you may not resist or obstruct a lawful search.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 22, Refusing consent to search): If an officer requests permission to search, you may clearly say that you do not give permission, but you may not resist or obstruct a lawful search.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 22,
    sourceTopic: "Refusing consent to search",
    coverageFactIds: ["pdf-fact-s4-refusing-consent-to-search-if-an-officer-requests-permission-to-search"]
  },

  {
    id: "q379",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding limited search for documents?",
    imageUrl: "",
    options: [
      "If the driver does not produce required documents, officers may conduct a limited search for them.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars.",
      "Always maintain 15 mph in any lane regardless of traffic or road conditions.",
      "Accelerate unconditionally to join the nearest travel lane."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 22, Limited search for documents): If the driver does not produce required documents, officers may conduct a limited search for them.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 22,
    sourceTopic: "Limited search for documents",
    coverageFactIds: ["pdf-fact-s4-limited-search-for-documents-if-the-driver-does-not-produce-required-d"]
  },

  {
    id: "q380",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding passenger identification request?",
    imageUrl: "",
    options: [
      "Passengers can decline an identification request unless circumstances legally require them to identify themselves.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 22, Passenger identification request): Passengers can decline an identification request unless circumstances legally require them to identify themselves.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 22,
    sourceTopic: "Passenger identification request",
    coverageFactIds: ["pdf-fact-s4-passenger-identification-request-passengers-can-decline-an-identificat"]
  },

  {
    id: "q381",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning officer exit or stay order?",
    imageUrl: "",
    options: [
      "During a traffic stop, an officer may legally require the driver and passengers to exit or stay inside the vehicle.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 22, Officer exit or stay order): During a traffic stop, an officer may legally require the driver and passengers to exit or stay inside the vehicle.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 22,
    sourceTopic: "Officer exit or stay order",
    coverageFactIds: ["pdf-fact-s4-officer-exit-or-stay-order-during-a-traffic-stop-an-officer-may-legall"]
  },

  {
    id: "q382",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning right to record stop?",
    imageUrl: "",
    options: [
      "Drivers and passengers generally have a First Amendment right to record law enforcement interactions in public spaces.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, Right to record stop): Drivers and passengers generally have a First Amendment right to record law enforcement interactions in public spaces.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "Right to record stop",
    coverageFactIds: ["pdf-fact-s4-right-to-record-stop-drivers-and-passengers-generally-have-a-first-ame"]
  },

  {
    id: "q383",
    category: "Rules of the Road",
    questionText: "How is recording disclosure properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If recording a law enforcement stop, you should immediately make that clear.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, Recording disclosure): If recording a law enforcement stop, you should immediately make that clear.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "Recording disclosure",
    coverageFactIds: ["pdf-fact-s4-recording-disclosure-if-recording-a-law-enforcement-stop-you-should-im"]
  },

  {
    id: "q384",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding no concealed reach for device?",
    imageUrl: "",
    options: [
      "Do not reach into concealed areas for a recording device without the officer’s permission.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, No concealed reach for device): Do not reach into concealed areas for a recording device without the officer’s permission.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "No concealed reach for device",
    coverageFactIds: ["pdf-fact-s4-no-concealed-reach-for-device-do-not-reach-into-concealed-areas-for-a"]
  },

  {
    id: "q385",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding recording device protection?",
    imageUrl: "",
    options: [
      "If recording does not interfere with lawful duties, an officer cannot confiscate or delete the recording merely because you are recording.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, Recording device protection): If recording does not interfere with lawful duties, an officer cannot confiscate or delete the recording merely because you are recording.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "Recording device protection",
    coverageFactIds: ["pdf-fact-s4-recording-device-protection-if-recording-does-not-interfere-with-lawfu"]
  },

  {
    id: "q386",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning phone unlock refusal?",
    imageUrl: "",
    options: [
      "In general, you may deny a request to unlock a phone or provide a password, though some circumstances may differ.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, Phone unlock refusal): In general, you may deny a request to unlock a phone or provide a password, though some circumstances may differ.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "Phone unlock refusal",
    coverageFactIds: ["pdf-fact-s4-phone-unlock-refusal-in-general-you-may-deny-a-request-to-unlock-a-pho"]
  },

  {
    id: "q387",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding no retaliation for public recording?",
    imageUrl: "",
    options: [
      "Government employees cannot retaliate just because you recorded something in public.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, No retaliation for public recording): Government employees cannot retaliate just because you recorded something in public.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "No retaliation for public recording",
    coverageFactIds: ["pdf-fact-s4-no-retaliation-for-public-recording-government-employees-cannot-retali"]
  },

  {
    id: "q388",
    category: "Rules of the Road",
    questionText: "How is no physical resistance properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Even if you believe your rights were violated, do not physically resist or use violence against an officer.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, No physical resistance): Even if you believe your rights were violated, do not physically resist or use violence against an officer.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "No physical resistance",
    coverageFactIds: ["pdf-fact-s4-no-physical-resistance-even-if-you-believe-your-rights-were-violated-d"]
  },

  {
    id: "q389",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding complaint right?",
    imageUrl: "",
    options: [
      "The public has a right to file a complaint against a law enforcement agency, and government retaliation for doing so is illegal.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, Complaint right): The public has a right to file a complaint against a law enforcement agency, and government retaliation for doing so is illegal.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "Complaint right",
    coverageFactIds: ["pdf-fact-s4-complaint-right-the-public-has-a-right-to-file-a-complaint-against-a-l"]
  },

  {
    id: "q390",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding protected discrimination categories?",
    imageUrl: "",
    options: [
      "A person has the right to be free from discrimination based on protected characteristics during law enforcement interactions.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 4: Navigating the Roads, page 23, Protected discrimination categories): A person has the right to be free from discrimination based on protected characteristics during law enforcement interactions.",
    testGroup: 90,
    sourceSection: "Section 4: Navigating the Roads",
    sourcePage: 23,
    sourceTopic: "Protected discrimination categories",
    coverageFactIds: ["pdf-fact-s4-protected-discrimination-categories-a-person-has-the-right-to-be-free"]
  },

  {
    id: "q391",
    category: "Rules of the Road",
    questionText: "How is yield at signals and signs properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "At or approaching traffic signals or signs, yield to pedestrians, bicyclists, and other nearby vehicles that may have the right-of-way.",
      "Signal for a turn only when changing directions in a designated construction zone.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 24, Yield at signals and signs): At or approaching traffic signals or signs, yield to pedestrians, bicyclists, and other nearby vehicles that may have the right-of-way.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 24,
    sourceTopic: "Yield at signals and signs",
    coverageFactIds: ["pdf-fact-s5-yield-at-signals-and-signs-at-or-approaching-traffic-signals-or-signs"]
  },

  {
    id: "q392",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a right turn at red light?",
    imageUrl: "",
    options: [
      "A right turn at a red light is allowed only if no NO TURN ON RED sign is posted, after stopping and yielding when safe.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 24, Right turn at red light): A right turn at a red light is allowed only if no NO TURN ON RED sign is posted, after stopping and yielding when safe.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 24,
    sourceTopic: "Right turn at red light",
    coverageFactIds: ["pdf-fact-s5-right-turn-at-red-light-a-right-turn-at-a-red-light-is-allowed-only-if"]
  },

  {
    id: "q393",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding yellow arrow?",
    imageUrl: "",
    options: [
      "A yellow arrow means protected turning time is ending; stop if safe or cautiously complete the turn if already in the intersection.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 25, Yellow arrow): A yellow arrow means protected turning time is ending; stop if safe or cautiously complete the turn if already in the intersection.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 25,
    sourceTopic: "Yellow arrow",
    coverageFactIds: ["pdf-fact-s5-yellow-arrow-a-yellow-arrow-means-protected-turning-time-is-ending-sto"]
  },

  {
    id: "q394",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding flashing yellow arrow?",
    imageUrl: "",
    options: [
      "A flashing yellow arrow allows a turn after yielding to oncoming traffic; the turn is not protected.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 25, Flashing yellow arrow): A flashing yellow arrow allows a turn after yielding to oncoming traffic; the turn is not protected.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 25,
    sourceTopic: "Flashing yellow arrow",
    coverageFactIds: ["pdf-fact-s5-flashing-yellow-arrow-a-flashing-yellow-arrow-allows-a-turn-after-yiel"]
  },

  {
    id: "q395",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding green arrow?",
    imageUrl: "",
    options: [
      "A green arrow means go in the arrow direction as a protected turn while oncoming vehicles are stopped.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 25, Green arrow): A green arrow means go in the arrow direction as a protected turn while oncoming vehicles are stopped.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 25,
    sourceTopic: "Green arrow",
    coverageFactIds: ["pdf-fact-s5-green-arrow-a-green-arrow-means-go-in-the-arrow-direction-as-a-protect"]
  },

  {
    id: "q396",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding walk signal?",
    imageUrl: "",
    options: [
      "A WALK or walking person signal means pedestrians may cross the street.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement.",
      "Sound your horn continuously to warn vehicles that you are about to turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 25, WALK signal): A WALK or walking person signal means pedestrians may cross the street.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 25,
    sourceTopic: "WALK signal",
    coverageFactIds: ["pdf-fact-s5-walk-signal-a-walk-or-walking-person-signal-means-pedestrians-may-cros"]
  },

  {
    id: "q397",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning don’t walk signal?",
    imageUrl: "",
    options: [
      "A DON’T WALK or raised hand signal means pedestrians may not cross the street.",
      "Use your turn signals only if requested by passengers or law enforcement.",
      "Sound your horn continuously to warn vehicles that you are about to turn.",
      "Signal for a turn only when changing directions in a designated construction zone."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 25, DON’T WALK signal): A DON’T WALK or raised hand signal means pedestrians may not cross the street.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 25,
    sourceTopic: "DON’T WALK signal",
    coverageFactIds: ["pdf-fact-s5-don-t-walk-signal-a-don-t-walk-or-raised-hand-signal-means-pedestrians"]
  },

  {
    id: "q398",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding diagonal crossing?",
    imageUrl: "",
    options: [
      "At a diagonal crossing, pedestrians may cross in any direction only when the WALK signal allows it.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 26, Diagonal crossing): At a diagonal crossing, pedestrians may cross in any direction only when the WALK signal allows it.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 26,
    sourceTopic: "Diagonal crossing",
    coverageFactIds: ["pdf-fact-s5-diagonal-crossing-at-a-diagonal-crossing-pedestrians-may-cross-in-any"]
  },

  {
    id: "q399",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding pedestrian sounds?",
    imageUrl: "",
    options: [
      "Sounds such as beeps, chirps, or verbal messages help blind or visually impaired pedestrians cross.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 25, Pedestrian sounds): Sounds such as beeps, chirps, or verbal messages help blind or visually impaired pedestrians cross.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 25,
    sourceTopic: "Pedestrian sounds",
    coverageFactIds: ["pdf-fact-s5-pedestrian-sounds-sounds-such-as-beeps-chirps-or-verbal-messages-help"]
  },

  {
    id: "q400",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding pedestrian push button?",
    imageUrl: "",
    options: [
      "A pedestrian push button activates the WALK or walking person signal.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 26, Pedestrian push button): A pedestrian push button activates the WALK or walking person signal.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 26,
    sourceTopic: "Pedestrian push button",
    coverageFactIds: ["pdf-fact-s5-pedestrian-push-button-a-pedestrian-push-button-activates-the-walk-or"]
  },

  {
    id: "q401",
    category: "Rules of the Road",
    questionText: "How is no pedestrian signals properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If no pedestrian signals are present, pedestrians should obey vehicle traffic signals.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 26, No pedestrian signals): If no pedestrian signals are present, pedestrians should obey vehicle traffic signals.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 26,
    sourceTopic: "No pedestrian signals",
    coverageFactIds: ["pdf-fact-s5-no-pedestrian-signals-if-no-pedestrian-signals-are-present-pedestrians"]
  },

  {
    id: "q402",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding warning signs obey?",
    imageUrl: "",
    options: [
      "Drivers must obey all warning signs regardless of their shape or color.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 26, Warning signs obey): Drivers must obey all warning signs regardless of their shape or color.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 26,
    sourceTopic: "Warning signs obey",
    coverageFactIds: ["pdf-fact-s5-warning-signs-obey-drivers-must-obey-all-warning-signs-regardless-of-t"]
  },

  {
    id: "q403",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding regulatory sign?",
    imageUrl: "",
    options: [
      "Red and white regulatory signs communicate instructions drivers must follow.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 26, Regulatory sign): Red and white regulatory signs communicate instructions drivers must follow.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 26,
    sourceTopic: "Regulatory sign",
    coverageFactIds: ["pdf-fact-s5-regulatory-sign-red-and-white-regulatory-signs-communicate-instruction"]
  },

  {
    id: "q404",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding do not enter sign?",
    imageUrl: "",
    options: [
      "A DO NOT ENTER sign means do not enter the road or ramp where posted.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 26, DO NOT ENTER sign): A DO NOT ENTER sign means do not enter the road or ramp where posted.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 26,
    sourceTopic: "DO NOT ENTER sign",
    coverageFactIds: ["pdf-fact-s5-do-not-enter-sign-a-do-not-enter-sign-means-do-not-enter-the-road-or-r"]
  },

  {
    id: "q405",
    category: "Rules of the Road",
    questionText: "How is red circle slash properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "A red circle with a slash shows something you cannot do.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 26, Red circle slash): A red circle with a slash shows something you cannot do.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 26,
    sourceTopic: "Red circle slash",
    coverageFactIds: ["pdf-fact-s5-red-circle-slash-a-red-circle-with-a-slash-shows-something-you-cannot"]
  },

  {
    id: "q406",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding railroad emergency sign?",
    imageUrl: "",
    options: [
      "Many railroad crossings have a blue-and-white sign explaining what to do for emergencies or a stalled vehicle on the tracks.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 27, Railroad emergency sign): Many railroad crossings have a blue-and-white sign explaining what to do for emergencies or a stalled vehicle on the tracks.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 27,
    sourceTopic: "Railroad emergency sign",
    coverageFactIds: ["pdf-fact-s5-railroad-emergency-sign-many-railroad-crossings-have-a-blue-and-white"]
  },

  {
    id: "q407",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding diamond warning sign?",
    imageUrl: "",
    options: [
      "A diamond-shaped sign warns of specific road conditions and dangers ahead.",
      "Signal for a turn only when changing directions in a designated construction zone.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 27, Diamond warning sign): A diamond-shaped sign warns of specific road conditions and dangers ahead.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 27,
    sourceTopic: "Diamond warning sign",
    coverageFactIds: ["pdf-fact-s5-diamond-warning-sign-a-diamond-shaped-sign-warns-of-specific-road-cond"]
  },

  {
    id: "q408",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning white rectangular sign?",
    imageUrl: "",
    options: [
      "A white rectangular sign communicates important rules drivers must obey.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 27, White rectangular sign): A white rectangular sign communicates important rules drivers must obey.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 27,
    sourceTopic: "White rectangular sign",
    coverageFactIds: ["pdf-fact-s5-white-rectangular-sign-a-white-rectangular-sign-communicates-important"]
  },

  {
    id: "q409",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding road user warning signs?",
    imageUrl: "",
    options: [
      "Warning signs can warn of conditions related to pedestrians, bicyclists, schools, playgrounds, school buses, and loading zones.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 27, Road user warning signs): Warning signs can warn of conditions related to pedestrians, bicyclists, schools, playgrounds, school buses, and loading zones.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 27,
    sourceTopic: "Road user warning signs",
    coverageFactIds: ["pdf-fact-s5-road-user-warning-signs-warning-signs-can-warn-of-conditions-related-t"]
  },

  {
    id: "q410",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning no u-turn sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the No U-Turn sign or placard as a sign drivers should recognize.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, No U-Turn sign chart item): The handbook sign chart includes the No U-Turn sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "No U-Turn sign chart item",
    coverageFactIds: ["pdf-fact-s5-no-u-turn-sign-chart-item-the-handbook-sign-chart-includes-the-no-u-tu"]
  },

  {
    id: "q411",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no left turn sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the No Left Turn sign or placard as a sign drivers should recognize.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, No Left Turn sign chart item): The handbook sign chart includes the No Left Turn sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "No Left Turn sign chart item",
    coverageFactIds: ["pdf-fact-s5-no-left-turn-sign-chart-item-the-handbook-sign-chart-includes-the-no-l"]
  },

  {
    id: "q412",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no right turn sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the No Right Turn sign or placard as a sign drivers should recognize.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, No Right Turn sign chart item): The handbook sign chart includes the No Right Turn sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "No Right Turn sign chart item",
    coverageFactIds: ["pdf-fact-s5-no-right-turn-sign-chart-item-the-handbook-sign-chart-includes-the-no"]
  },

  {
    id: "q413",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning two way traffic sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Two Way Traffic sign or placard as a sign drivers should recognize.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Two Way Traffic sign chart item): The handbook sign chart includes the Two Way Traffic sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Two Way Traffic sign chart item",
    coverageFactIds: ["pdf-fact-s5-two-way-traffic-sign-chart-item-the-handbook-sign-chart-includes-the-t"]
  },

  {
    id: "q414",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning no parking any time sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the No Parking Any Time sign or placard as a sign drivers should recognize.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, No Parking Any Time sign chart item): The handbook sign chart includes the No Parking Any Time sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "No Parking Any Time sign chart item",
    coverageFactIds: ["pdf-fact-s5-no-parking-any-time-sign-chart-item-the-handbook-sign-chart-includes-t"]
  },

  {
    id: "q415",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning yield to uphill traffic sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Yield to Uphill Traffic sign or placard as a sign drivers should recognize.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Yield to Uphill Traffic sign chart item): The handbook sign chart includes the Yield to Uphill Traffic sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Yield to Uphill Traffic sign chart item",
    coverageFactIds: ["pdf-fact-s5-yield-to-uphill-traffic-sign-chart-item-the-handbook-sign-chart-includ"]
  },

  {
    id: "q416",
    category: "Rules of the Road",
    questionText: "How is one way sign chart item properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the One Way sign or placard as a sign drivers should recognize.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, One Way sign chart item): The handbook sign chart includes the One Way sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "One Way sign chart item",
    coverageFactIds: ["pdf-fact-s5-one-way-sign-chart-item-the-handbook-sign-chart-includes-the-one-way-s"]
  },

  {
    id: "q417",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding emergency parking only sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Emergency Parking Only sign or placard as a sign drivers should recognize.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Emergency Parking Only sign chart item): The handbook sign chart includes the Emergency Parking Only sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Emergency Parking Only sign chart item",
    coverageFactIds: ["pdf-fact-s5-emergency-parking-only-sign-chart-item-the-handbook-sign-chart-include"]
  },

  {
    id: "q418",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning no turns sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the No Turns sign or placard as a sign drivers should recognize.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, No Turns sign chart item): The handbook sign chart includes the No Turns sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "No Turns sign chart item",
    coverageFactIds: ["pdf-fact-s5-no-turns-sign-chart-item-the-handbook-sign-chart-includes-the-no-turns"]
  },

  {
    id: "q419",
    category: "Rules of the Road",
    questionText: "Under California law, how should you safely perform a left turn yield on green sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Left Turn Yield on Green sign or placard as a sign drivers should recognize.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Left Turn Yield on Green sign chart item): The handbook sign chart includes the Left Turn Yield on Green sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Left Turn Yield on Green sign chart item",
    coverageFactIds: ["pdf-fact-s5-left-turn-yield-on-green-sign-chart-item-the-handbook-sign-chart-inclu"]
  },

  {
    id: "q420",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding do not pass sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Do Not Pass sign or placard as a sign drivers should recognize.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Do Not Pass sign chart item): The handbook sign chart includes the Do Not Pass sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Do Not Pass sign chart item",
    coverageFactIds: ["pdf-fact-s5-do-not-pass-sign-chart-item-the-handbook-sign-chart-includes-the-do-no"]
  },

  {
    id: "q421",
    category: "Rules of the Road",
    questionText: "How is do not block intersection sign chart item properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Do Not Block Intersection sign or placard as a sign drivers should recognize.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Do Not Block Intersection sign chart item): The handbook sign chart includes the Do Not Block Intersection sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Do Not Block Intersection sign chart item",
    coverageFactIds: ["pdf-fact-s5-do-not-block-intersection-sign-chart-item-the-handbook-sign-chart-incl"]
  },

  {
    id: "q422",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding slower traffic keep right sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Slower Traffic Keep Right sign or placard as a sign drivers should recognize.",
      "This requirement only applies when driving on high-speed interstate freeways.",
      "The speed limit is suspended during late-night hours when traffic is light.",
      "Speed up to match the highest speed of the surrounding traffic."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Slower Traffic Keep Right sign chart item): The handbook sign chart includes the Slower Traffic Keep Right sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Slower Traffic Keep Right sign chart item",
    coverageFactIds: ["pdf-fact-s5-slower-traffic-keep-right-sign-chart-item-the-handbook-sign-chart-incl"]
  },

  {
    id: "q423",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning keep right sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Keep Right sign or placard as a sign drivers should recognize.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Keep Right sign chart item): The handbook sign chart includes the Keep Right sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Keep Right sign chart item",
    coverageFactIds: ["pdf-fact-s5-keep-right-sign-chart-item-the-handbook-sign-chart-includes-the-keep-r"]
  },

  {
    id: "q424",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding 3 tracks sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the 3 Tracks sign or placard as a sign drivers should recognize.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, 3 Tracks sign chart item): The handbook sign chart includes the 3 Tracks sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "3 Tracks sign chart item",
    coverageFactIds: ["pdf-fact-s5-3-tracks-sign-chart-item-the-handbook-sign-chart-includes-the-3-tracks"]
  },

  {
    id: "q425",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding road closed ahead sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Road Closed Ahead sign or placard as a sign drivers should recognize.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Road Closed Ahead sign chart item): The handbook sign chart includes the Road Closed Ahead sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Road Closed Ahead sign chart item",
    coverageFactIds: ["pdf-fact-s5-road-closed-ahead-sign-chart-item-the-handbook-sign-chart-includes-the"]
  },

  {
    id: "q426",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding road machinery ahead sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Road Machinery Ahead sign or placard as a sign drivers should recognize.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Road Machinery Ahead sign chart item): The handbook sign chart includes the Road Machinery Ahead sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Road Machinery Ahead sign chart item",
    coverageFactIds: ["pdf-fact-s5-road-machinery-ahead-sign-chart-item-the-handbook-sign-chart-includes"]
  },

  {
    id: "q427",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding shoulder work ahead sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Shoulder Work Ahead sign or placard as a sign drivers should recognize.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Shoulder Work Ahead sign chart item): The handbook sign chart includes the Shoulder Work Ahead sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Shoulder Work Ahead sign chart item",
    coverageFactIds: ["pdf-fact-s5-shoulder-work-ahead-sign-chart-item-the-handbook-sign-chart-includes-t"]
  },

  {
    id: "q428",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding thru traffic merge left sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Thru Traffic Merge Left sign or placard as a sign drivers should recognize.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Thru Traffic Merge Left sign chart item): The handbook sign chart includes the Thru Traffic Merge Left sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Thru Traffic Merge Left sign chart item",
    coverageFactIds: ["pdf-fact-s5-thru-traffic-merge-left-sign-chart-item-the-handbook-sign-chart-includ"]
  },

  {
    id: "q429",
    category: "Rules of the Road",
    questionText: "How is guide sign sign chart item properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Guide Sign sign or placard as a sign drivers should recognize.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Guide Sign sign chart item): The handbook sign chart includes the Guide Sign sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Guide Sign sign chart item",
    coverageFactIds: ["pdf-fact-s5-guide-sign-sign-chart-item-the-handbook-sign-chart-includes-the-guide"]
  },

  {
    id: "q430",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding hazardous load placard sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Hazardous Load Placard sign or placard as a sign drivers should recognize.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Hazardous Load Placard sign chart item): The handbook sign chart includes the Hazardous Load Placard sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Hazardous Load Placard sign chart item",
    coverageFactIds: ["pdf-fact-s5-hazardous-load-placard-sign-chart-item-the-handbook-sign-chart-include"]
  },

  {
    id: "q431",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding slow moving vehicle sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Slow Moving Vehicle sign or placard as a sign drivers should recognize.",
      "The speed limit is suspended during late-night hours when traffic is light.",
      "Speed up to match the highest speed of the surrounding traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 28, Slow Moving Vehicle sign chart item): The handbook sign chart includes the Slow Moving Vehicle sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 28,
    sourceTopic: "Slow Moving Vehicle sign chart item",
    coverageFactIds: ["pdf-fact-s5-slow-moving-vehicle-sign-chart-item-the-handbook-sign-chart-includes-t"]
  },

  {
    id: "q432",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning slippery when wet sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Slippery When Wet sign or placard as a sign drivers should recognize.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Slippery When Wet sign chart item): The handbook sign chart includes the Slippery When Wet sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Slippery When Wet sign chart item",
    coverageFactIds: ["pdf-fact-s5-slippery-when-wet-sign-chart-item-the-handbook-sign-chart-includes-the"]
  },

  {
    id: "q433",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding merging traffic sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Merging Traffic sign or placard as a sign drivers should recognize.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Merging Traffic sign chart item): The handbook sign chart includes the Merging Traffic sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Merging Traffic sign chart item",
    coverageFactIds: ["pdf-fact-s5-merging-traffic-sign-chart-item-the-handbook-sign-chart-includes-the-m"]
  },

  {
    id: "q434",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding divided highway sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Divided Highway sign or placard as a sign drivers should recognize.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Divided Highway sign chart item): The handbook sign chart includes the Divided Highway sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Divided Highway sign chart item",
    coverageFactIds: ["pdf-fact-s5-divided-highway-sign-chart-item-the-handbook-sign-chart-includes-the-d"]
  },

  {
    id: "q435",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning lane ends sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Lane Ends sign or placard as a sign drivers should recognize.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Lane Ends sign chart item): The handbook sign chart includes the Lane Ends sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Lane Ends sign chart item",
    coverageFactIds: ["pdf-fact-s5-lane-ends-sign-chart-item-the-handbook-sign-chart-includes-the-lane-en"]
  },

  {
    id: "q436",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning end divided highway sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the End Divided Highway sign or placard as a sign drivers should recognize.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, End Divided Highway sign chart item): The handbook sign chart includes the End Divided Highway sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "End Divided Highway sign chart item",
    coverageFactIds: ["pdf-fact-s5-end-divided-highway-sign-chart-item-the-handbook-sign-chart-includes-t"]
  },

  {
    id: "q437",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding traffic signal ahead sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Traffic Signal Ahead sign or placard as a sign drivers should recognize.",
      "Use your turn signals only if requested by passengers or law enforcement.",
      "Sound your horn continuously to warn vehicles that you are about to turn.",
      "Signal for a turn only when changing directions in a designated construction zone."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Traffic Signal Ahead sign chart item): The handbook sign chart includes the Traffic Signal Ahead sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Traffic Signal Ahead sign chart item",
    coverageFactIds: ["pdf-fact-s5-traffic-signal-ahead-sign-chart-item-the-handbook-sign-chart-includes"]
  },

  {
    id: "q438",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning pedestrian crossing sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Pedestrian Crossing sign or placard as a sign drivers should recognize.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Pedestrian Crossing sign chart item): The handbook sign chart includes the Pedestrian Crossing sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Pedestrian Crossing sign chart item",
    coverageFactIds: ["pdf-fact-s5-pedestrian-crossing-sign-chart-item-the-handbook-sign-chart-includes-t"]
  },

  {
    id: "q439",
    category: "Rules of the Road",
    questionText: "How is added lane sign chart item properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Added Lane sign or placard as a sign drivers should recognize.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Added Lane sign chart item): The handbook sign chart includes the Added Lane sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Added Lane sign chart item",
    coverageFactIds: ["pdf-fact-s5-added-lane-sign-chart-item-the-handbook-sign-chart-includes-the-added"]
  },

  {
    id: "q440",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding crossroad sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Crossroad sign or placard as a sign drivers should recognize.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Crossroad sign chart item): The handbook sign chart includes the Crossroad sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Crossroad sign chart item",
    coverageFactIds: ["pdf-fact-s5-crossroad-sign-chart-item-the-handbook-sign-chart-includes-the-crossro"]
  },

  {
    id: "q441",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning stop ahead sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Stop Ahead sign or placard as a sign drivers should recognize.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Stop Ahead sign chart item): The handbook sign chart includes the Stop Ahead sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Stop Ahead sign chart item",
    coverageFactIds: ["pdf-fact-s5-stop-ahead-sign-chart-item-the-handbook-sign-chart-includes-the-stop-a"]
  },

  {
    id: "q442",
    category: "Rules of the Road",
    questionText: "How is yield ahead sign chart item properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Yield Ahead sign or placard as a sign drivers should recognize.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Yield Ahead sign chart item): The handbook sign chart includes the Yield Ahead sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Yield Ahead sign chart item",
    coverageFactIds: ["pdf-fact-s5-yield-ahead-sign-chart-item-the-handbook-sign-chart-includes-the-yield"]
  },

  {
    id: "q443",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding directional arrow sign chart item?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Directional Arrow sign or placard as a sign drivers should recognize.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Directional Arrow sign chart item): The handbook sign chart includes the Directional Arrow sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Directional Arrow sign chart item",
    coverageFactIds: ["pdf-fact-s5-directional-arrow-sign-chart-item-the-handbook-sign-chart-includes-the"]
  },

  {
    id: "q444",
    category: "Rules of the Road",
    questionText: "How is curve sign chart item properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Curve sign or placard as a sign drivers should recognize.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Curve sign chart item): The handbook sign chart includes the Curve sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Curve sign chart item",
    coverageFactIds: ["pdf-fact-s5-curve-sign-chart-item-the-handbook-sign-chart-includes-the-curve-sign"]
  },

  {
    id: "q445",
    category: "Rules of the Road",
    questionText: "How is t intersection sign chart item properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the T Intersection sign or placard as a sign drivers should recognize.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, T Intersection sign chart item): The handbook sign chart includes the T Intersection sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "T Intersection sign chart item",
    coverageFactIds: ["pdf-fact-s5-t-intersection-sign-chart-item-the-handbook-sign-chart-includes-the-t"]
  },

  {
    id: "q446",
    category: "Rules of the Road",
    questionText: "How is winding road sign chart item properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The handbook sign chart includes the Winding Road sign or placard as a sign drivers should recognize.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 29, Winding Road sign chart item): The handbook sign chart includes the Winding Road sign or placard as a sign drivers should recognize.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 29,
    sourceTopic: "Winding Road sign chart item",
    coverageFactIds: ["pdf-fact-s5-winding-road-sign-chart-item-the-handbook-sign-chart-includes-the-wind"]
  },

  {
    id: "q447",
    category: "Rules of the Road",
    questionText: "How is right-of-way determined for right-of-way first arrival?",
    imageUrl: "",
    options: [
      "The first vehicle to arrive at an intersection has the right-of-way, and others must wait.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 27, Right-of-way first arrival): The first vehicle to arrive at an intersection has the right-of-way, and others must wait.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 27,
    sourceTopic: "Right-of-way first arrival",
    coverageFactIds: ["pdf-fact-s5-right-of-way-first-arrival-the-first-vehicle-to-arrive-at-an-intersect"]
  },

  {
    id: "q448",
    category: "Rules of the Road",
    questionText: "How is right-of-way determined for give up right-of-way to avoid collision?",
    imageUrl: "",
    options: [
      "Never assume others will give right-of-way; give up right-of-way when it helps prevent collisions.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 27, Give up right-of-way to avoid collision): Never assume others will give right-of-way; give up right-of-way when it helps prevent collisions.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 27,
    sourceTopic: "Give up right-of-way to avoid collision",
    coverageFactIds: ["pdf-fact-s5-give-up-right-of-way-to-avoid-collision-never-assume-others-will-give"]
  },

  {
    id: "q449",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding intersection definition?",
    imageUrl: "",
    options: [
      "An intersection is any place where one road meets another road.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Intersection definition): An intersection is any place where one road meets another road.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Intersection definition",
    coverageFactIds: ["pdf-fact-s5-intersection-definition-an-intersection-is-any-place-where-one-road-me"]
  },

  {
    id: "q450",
    category: "Rules of the Road",
    questionText: "How is controlled and uncontrolled intersections properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Controlled intersections have signs or signals, while uncontrolled and blind intersections do not.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Controlled and uncontrolled intersections): Controlled intersections have signs or signals, while uncontrolled and blind intersections do not.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Controlled and uncontrolled intersections",
    coverageFactIds: ["pdf-fact-s5-controlled-and-uncontrolled-intersections-controlled-intersections-hav"]
  },

  {
    id: "q451",
    category: "Rules of the Road",
    questionText: "How is intersection approach scan properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Before entering an intersection, look left, right, and ahead for vehicles, bicyclists, and pedestrians.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Intersection approach scan): Before entering an intersection, look left, right, and ahead for vehicles, bicyclists, and pedestrians.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Intersection approach scan",
    coverageFactIds: ["pdf-fact-s5-intersection-approach-scan-before-entering-an-intersection-look-left-r"]
  },

  {
    id: "q452",
    category: "Rules of the Road",
    questionText: "How is right-of-way determined for pedestrians always right-of-way?",
    imageUrl: "",
    options: [
      "Pedestrians always have the right-of-way at intersections.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Pedestrians always right-of-way): Pedestrians always have the right-of-way at intersections.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Pedestrians always right-of-way",
    coverageFactIds: ["pdf-fact-s5-pedestrians-always-right-of-way-pedestrians-always-have-the-right-of-w"]
  },

  {
    id: "q453",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding no sign intersection first arrival?",
    imageUrl: "",
    options: [
      "At an intersection without STOP or YIELD signs, the vehicle that arrives first has right-of-way.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, No sign intersection first arrival): At an intersection without STOP or YIELD signs, the vehicle that arrives first has right-of-way.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "No sign intersection first arrival",
    coverageFactIds: ["pdf-fact-s5-no-sign-intersection-first-arrival-at-an-intersection-without-stop-or"]
  },

  {
    id: "q454",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding same time yield right?",
    imageUrl: "",
    options: [
      "If you arrive at the same time as another vehicle, pedestrian, or bicyclist, yield to the one on your right.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Same time yield right): If you arrive at the same time as another vehicle, pedestrian, or bicyclist, yield to the one on your right.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Same time yield right",
    coverageFactIds: ["pdf-fact-s5-same-time-yield-right-if-you-arrive-at-the-same-time-as-another-vehicl"]
  },

  {
    id: "q455",
    category: "Rules of the Road",
    questionText: "How is four-way stop order properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "At a four-way stop, stop first and proceed using right-of-way rules. ",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Four-way stop order): At a four-way stop, stop first and proceed using right-of-way rules. ",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Four-way stop order",
    coverageFactIds: ["pdf-fact-s5-four-way-stop-order-at-a-four-way-stop-stop-first-and-proceed-using-ri"]
  },

  {
    id: "q456",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding t intersection through road?",
    imageUrl: "",
    options: [
      "At an uncontrolled T intersection, traffic on the through road has the right-of-way.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, T intersection through road): At an uncontrolled T intersection, traffic on the through road has the right-of-way.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "T intersection through road",
    coverageFactIds: ["pdf-fact-s5-t-intersection-through-road-at-an-uncontrolled-t-intersection-traffic"]
  },

  {
    id: "q457",
    category: "Rules of the Road",
    questionText: "How is right-of-way determined for left turn right-of-way?",
    imageUrl: "",
    options: [
      "When turning left, yield to pedestrians and approaching vehicles close enough to be dangerous.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Left turn right-of-way): When turning left, yield to pedestrians and approaching vehicles close enough to be dangerous.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Left turn right-of-way",
    coverageFactIds: ["pdf-fact-s5-left-turn-right-of-way-when-turning-left-yield-to-pedestrians-and-appr"]
  },

  {
    id: "q458",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning right turn vulnerable road users?",
    imageUrl: "",
    options: [
      "When turning right, check for pedestrians, motorcycles, and bicycles next to you.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Right turn vulnerable road users): When turning right, check for pedestrians, motorcycles, and bicycles next to you.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Right turn vulnerable road users",
    coverageFactIds: ["pdf-fact-s5-right-turn-vulnerable-road-users-when-turning-right-check-for-pedestri"]
  },

  {
    id: "q459",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding green signal pedestrians?",
    imageUrl: "",
    options: [
      "At a green light, proceed with caution because pedestrians still have the right-of-way.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Green signal pedestrians): At a green light, proceed with caution because pedestrians still have the right-of-way.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Green signal pedestrians",
    coverageFactIds: ["pdf-fact-s5-green-signal-pedestrians-at-a-green-light-proceed-with-caution-because"]
  },

  {
    id: "q460",
    category: "Rules of the Road",
    questionText: "How is entering traffic yield properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "When entering traffic, proceed with caution and yield to traffic already in the lanes.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Entering traffic yield): When entering traffic, proceed with caution and yield to traffic already in the lanes.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Entering traffic yield",
    coverageFactIds: ["pdf-fact-s5-entering-traffic-yield-when-entering-traffic-proceed-with-caution-and"]
  },

  {
    id: "q461",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding do not block intersection?",
    imageUrl: "",
    options: [
      "It is illegal to stop or block an intersection if there is not enough space to completely cross before the light turns red.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 30, Do not block intersection): It is illegal to stop or block an intersection if there is not enough space to completely cross before the light turns red.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 30,
    sourceTopic: "Do not block intersection",
    coverageFactIds: ["pdf-fact-s5-do-not-block-intersection-it-is-illegal-to-stop-or-block-an-intersecti"]
  },

  {
    id: "q462",
    category: "Rules of the Road",
    questionText: "How is roundabout direction properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "In a roundabout, traffic travels in one direction around a central island.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 31, Roundabout direction): In a roundabout, traffic travels in one direction around a central island.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 31,
    sourceTopic: "Roundabout direction",
    coverageFactIds: ["pdf-fact-s5-roundabout-direction-in-a-roundabout-traffic-travels-in-one-direction"]
  },

  {
    id: "q463",
    category: "Rules of the Road",
    questionText: "How is roundabout slow approach properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Slow down as you approach a roundabout.",
      "The speed limit is suspended during late-night hours when traffic is light.",
      "Speed up to match the highest speed of the surrounding traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 31, Roundabout slow approach): Slow down as you approach a roundabout.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 31,
    sourceTopic: "Roundabout slow approach",
    coverageFactIds: ["pdf-fact-s5-roundabout-slow-approach-slow-down-as-you-approach-a-roundabout"]
  },

  {
    id: "q464",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning roundabout yield?",
    imageUrl: "",
    options: [
      "Yield to all traffic already in the roundabout.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 31, Roundabout yield): Yield to all traffic already in the roundabout.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 31,
    sourceTopic: "Roundabout yield",
    coverageFactIds: ["pdf-fact-s5-roundabout-yield-yield-to-all-traffic-already-in-the-roundabout"]
  },

  {
    id: "q465",
    category: "Rules of the Road",
    questionText: "How is roundabout enter right properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Enter a roundabout heading to the right when there is a safe gap.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 31, Roundabout enter right): Enter a roundabout heading to the right when there is a safe gap.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 31,
    sourceTopic: "Roundabout enter right",
    coverageFactIds: ["pdf-fact-s5-roundabout-enter-right-enter-a-roundabout-heading-to-the-right-when-th"]
  },

  {
    id: "q466",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning roundabout no stop or pass?",
    imageUrl: "",
    options: [
      "Travel counterclockwise in a roundabout and do not stop or pass.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 31, Roundabout no stop or pass): Travel counterclockwise in a roundabout and do not stop or pass.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 31,
    sourceTopic: "Roundabout no stop or pass",
    coverageFactIds: ["pdf-fact-s5-roundabout-no-stop-or-pass-travel-counterclockwise-in-a-roundabout-and"]
  },

  {
    id: "q467",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding roundabout signal?",
    imageUrl: "",
    options: [
      "Signal when changing lanes or exiting a roundabout.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 31, Roundabout signal): Signal when changing lanes or exiting a roundabout.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 31,
    sourceTopic: "Roundabout signal",
    coverageFactIds: ["pdf-fact-s5-roundabout-signal-signal-when-changing-lanes-or-exiting-a-roundabout"]
  },

  {
    id: "q468",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding roundabout missed exit?",
    imageUrl: "",
    options: [
      "If you miss your exit in a roundabout, continue around until you return to it.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 31, Roundabout missed exit): If you miss your exit in a roundabout, continue around until you return to it.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 31,
    sourceTopic: "Roundabout missed exit",
    coverageFactIds: ["pdf-fact-s5-roundabout-missed-exit-if-you-miss-your-exit-in-a-roundabout-continue"]
  },

  {
    id: "q469",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding roundabout lane choice?",
    imageUrl: "",
    options: [
      "In a multi-lane roundabout, choose the entry or exit lane based on your destination.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 31, Roundabout lane choice): In a multi-lane roundabout, choose the entry or exit lane based on your destination.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 31,
    sourceTopic: "Roundabout lane choice",
    coverageFactIds: ["pdf-fact-s5-roundabout-lane-choice-in-a-multi-lane-roundabout-choose-the-entry-or"]
  },

  {
    id: "q470",
    category: "Rules of the Road",
    questionText: "How is right-of-way determined for pedestrians right-of-way and rules?",
    imageUrl: "",
    options: [
      "Pedestrians have the right-of-way, but they must also follow rules of the road.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 32, Pedestrians right-of-way and rules): Pedestrians have the right-of-way, but they must also follow rules of the road.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 32,
    sourceTopic: "Pedestrians right-of-way and rules",
    coverageFactIds: ["pdf-fact-s5-pedestrians-right-of-way-and-rules-pedestrians-have-the-right-of-way-b"]
  },

  {
    id: "q471",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding pedestrian crossing caution?",
    imageUrl: "",
    options: [
      "When a pedestrian is crossing with or without a crosswalk, drivers must use caution, reduce speed, or stop so they can finish crossing safely.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 32, Pedestrian crossing caution): When a pedestrian is crossing with or without a crosswalk, drivers must use caution, reduce speed, or stop so they can finish crossing safely.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 32,
    sourceTopic: "Pedestrian crossing caution",
    coverageFactIds: ["pdf-fact-s5-pedestrian-crossing-caution-when-a-pedestrian-is-crossing-with-or-with"]
  },

  {
    id: "q472",
    category: "Rules of the Road",
    questionText: "How is right-of-way determined for crosswalk right-of-way?",
    imageUrl: "",
    options: [
      "Pedestrians have the right-of-way in marked and unmarked crosswalks.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 32, Crosswalk right-of-way): Pedestrians have the right-of-way in marked and unmarked crosswalks.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 32,
    sourceTopic: "Crosswalk right-of-way",
    coverageFactIds: ["pdf-fact-s5-crosswalk-right-of-way-pedestrians-have-the-right-of-way-in-marked-and"]
  },

  {
    id: "q473",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding limit line before crosswalk?",
    imageUrl: "",
    options: [
      "If a limit line appears before a crosswalk, stop at the limit line and allow pedestrians to cross.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 32, Limit line before crosswalk): If a limit line appears before a crosswalk, stop at the limit line and allow pedestrians to cross.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 32,
    sourceTopic: "Limit line before crosswalk",
    coverageFactIds: ["pdf-fact-s5-limit-line-before-crosswalk-if-a-limit-line-appears-before-a-crosswalk"]
  },

  {
    id: "q474",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning do not change lanes in front of truck?",
    imageUrl: "",
    options: [
      "Do not change lanes directly in front of large vehicles to reach an exit or turn.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 33, Do not change lanes in front of truck): Do not change lanes directly in front of large vehicles to reach an exit or turn.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 33,
    sourceTopic: "Do not change lanes in front of truck",
    coverageFactIds: ["pdf-fact-s5-do-not-change-lanes-in-front-of-truck-do-not-change-lanes-directly-in"]
  },

  {
    id: "q475",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding pass trucks on left?",
    imageUrl: "",
    options: [
      "Pass large vehicles on the left and move ahead after passing.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 33, Pass trucks on left): Pass large vehicles on the left and move ahead after passing.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 33,
    sourceTopic: "Pass trucks on left",
    coverageFactIds: ["pdf-fact-s5-pass-trucks-on-left-pass-large-vehicles-on-the-left-and-move-ahead-aft"]
  },

  {
    id: "q476",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding do not drive alongside truck?",
    imageUrl: "",
    options: [
      "Do not drive next to a large vehicle longer than necessary.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 33, Do not drive alongside truck): Do not drive next to a large vehicle longer than necessary.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 33,
    sourceTopic: "Do not drive alongside truck",
    coverageFactIds: ["pdf-fact-s5-do-not-drive-alongside-truck-do-not-drive-next-to-a-large-vehicle-long"]
  },

  {
    id: "q477",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding do not tailgate truck?",
    imageUrl: "",
    options: [
      "Do not follow large vehicles too closely.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 33, Do not tailgate truck): Do not follow large vehicles too closely.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 33,
    sourceTopic: "Do not tailgate truck",
    coverageFactIds: ["pdf-fact-s5-do-not-tailgate-truck-do-not-follow-large-vehicles-too-closely"]
  },

  {
    id: "q478",
    category: "Rules of the Road",
    questionText: "What is the safe or legal speed rule for truck speed appearance?",
    imageUrl: "",
    options: [
      "Do not underestimate a large vehicle’s size or speed because it may appear to travel slower.",
      "This requirement only applies when driving on high-speed interstate freeways.",
      "The speed limit is suspended during late-night hours when traffic is light.",
      "Speed up to match the highest speed of the surrounding traffic."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 33, Truck speed appearance): Do not underestimate a large vehicle’s size or speed because it may appear to travel slower.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 33,
    sourceTopic: "Truck speed appearance",
    coverageFactIds: ["pdf-fact-s5-truck-speed-appearance-do-not-underestimate-a-large-vehicle-s-size-or"]
  },

  {
    id: "q479",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding safety zone definition?",
    imageUrl: "",
    options: [
      "Safety zones are spaces for pedestrians waiting for buses, streetcars, and trolleys, marked by raised buttons or markers.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 34, Safety zone definition): Safety zones are spaces for pedestrians waiting for buses, streetcars, and trolleys, marked by raised buttons or markers.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 34,
    sourceTopic: "Safety zone definition",
    coverageFactIds: ["pdf-fact-s5-safety-zone-definition-safety-zones-are-spaces-for-pedestrians-waiting"]
  },

  {
    id: "q480",
    category: "Rules of the Road",
    questionText: "How is no driving through safety zone properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Do not drive through a safety zone under any condition.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 34, No driving through safety zone): Do not drive through a safety zone under any condition.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 34,
    sourceTopic: "No driving through safety zone",
    coverageFactIds: ["pdf-fact-s5-no-driving-through-safety-zone-do-not-drive-through-a-safety-zone-unde"]
  },

  {
    id: "q481",
    category: "Rules of the Road",
    questionText: "How is do not pass light rail left properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Do not pass a light rail vehicle or streetcar on the left unless tracks are too close to the right side, you are on a one-way street, or an officer directs it.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 34, Do not pass light rail left): Do not pass a light rail vehicle or streetcar on the left unless tracks are too close to the right side, you are on a one-way street, or an officer directs it.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 34,
    sourceTopic: "Do not pass light rail left",
    coverageFactIds: ["pdf-fact-s5-do-not-pass-light-rail-left-do-not-pass-a-light-rail-vehicle-or-street"]
  },

  {
    id: "q482",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding light rail same rights?",
    imageUrl: "",
    options: [
      "Light rail vehicles on public roads have the same rights and responsibilities as other vehicles.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 34, Light rail same rights): Light rail vehicles on public roads have the same rights and responsibilities as other vehicles.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 34,
    sourceTopic: "Light rail same rights",
    coverageFactIds: ["pdf-fact-s5-light-rail-same-rights-light-rail-vehicles-on-public-roads-have-the-sa"]
  },

  {
    id: "q483",
    category: "Rules of the Road",
    questionText: "How is never turn in front of light rail properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Never turn in front of an approaching light rail vehicle.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 34, Never turn in front of light rail): Never turn in front of an approaching light rail vehicle.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 34,
    sourceTopic: "Never turn in front of light rail",
    coverageFactIds: ["pdf-fact-s5-never-turn-in-front-of-light-rail-never-turn-in-front-of-an-approachin"]
  },

  {
    id: "q484",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning check light rail before tracks?",
    imageUrl: "",
    options: [
      "Check for approaching light rail vehicles before turning across tracks and complete the turn only when the signal allows.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement.",
      "Sound your horn continuously to warn vehicles that you are about to turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 34, Check light rail before tracks): Check for approaching light rail vehicles before turning across tracks and complete the turn only when the signal allows.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 34,
    sourceTopic: "Check light rail before tracks",
    coverageFactIds: ["pdf-fact-s5-check-light-rail-before-tracks-check-for-approaching-light-rail-vehicl"]
  },

  {
    id: "q485",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding motorcycle same rights?",
    imageUrl: "",
    options: [
      "Motorcyclists have the same rights and responsibilities as other drivers.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 34, Motorcycle same rights): Motorcyclists have the same rights and responsibilities as other drivers.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 34,
    sourceTopic: "Motorcycle same rights",
    coverageFactIds: ["pdf-fact-s5-motorcycle-same-rights-motorcyclists-have-the-same-rights-and-responsi"]
  },

  {
    id: "q486",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding check for motorcycles?",
    imageUrl: "",
    options: [
      "Check for motorcycles and use mirrors when changing lanes or entering a road because they are harder to see.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 34, Check for motorcycles): Check for motorcycles and use mirrors when changing lanes or entering a road because they are harder to see.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 34,
    sourceTopic: "Check for motorcycles",
    coverageFactIds: ["pdf-fact-s5-check-for-motorcycles-check-for-motorcycles-and-use-mirrors-when-chang"]
  },

  {
    id: "q487",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning give motorcycle full lane?",
    imageUrl: "",
    options: [
      "Whenever possible, give a motorcycle the full lane.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 35, Give motorcycle full lane): Whenever possible, give a motorcycle the full lane.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 35,
    sourceTopic: "Give motorcycle full lane",
    coverageFactIds: ["pdf-fact-s5-give-motorcycle-full-lane-whenever-possible-give-a-motorcycle-the-full"]
  },

  {
    id: "q488",
    category: "Rules of the Road",
    questionText: "How is do not pass motorcycle same lane properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Never try to pass a motorcycle in the same lane as you.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning.",
      "Overtake another vehicle that has stopped at a pedestrian crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 35, Do not pass motorcycle same lane): Never try to pass a motorcycle in the same lane as you.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 35,
    sourceTopic: "Do not pass motorcycle same lane",
    coverageFactIds: ["pdf-fact-s5-do-not-pass-motorcycle-same-lane-never-try-to-pass-a-motorcycle-in-the"]
  },

  {
    id: "q489",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding check for motorcycles before door?",
    imageUrl: "",
    options: [
      "Check for motorcyclists before opening your door next to traffic.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 35, Check for motorcycles before door): Check for motorcyclists before opening your door next to traffic.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 35,
    sourceTopic: "Check for motorcycles before door",
    coverageFactIds: ["pdf-fact-s5-check-for-motorcycles-before-door-check-for-motorcyclists-before-openi"]
  },

  {
    id: "q490",
    category: "Rules of the Road",
    questionText: "How is move aside for motorcycles properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "When possible, move to one side of your lane to give motorcyclists more room to pass.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 35, Move aside for motorcycles): When possible, move to one side of your lane to give motorcyclists more room to pass.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 35,
    sourceTopic: "Move aside for motorcycles",
    coverageFactIds: ["pdf-fact-s5-move-aside-for-motorcycles-when-possible-move-to-one-side-of-your-lane"]
  },

  {
    id: "q491",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning move over stationary emergency vehicle?",
    imageUrl: "",
    options: [
      "When approaching a stationary emergency vehicle with flashing lights, move over and slow down.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 35, Move over stationary emergency vehicle): When approaching a stationary emergency vehicle with flashing lights, move over and slow down.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 35,
    sourceTopic: "Move over stationary emergency vehicle",
    coverageFactIds: ["pdf-fact-s5-move-over-stationary-emergency-vehicle-when-approaching-a-stationary-e"]
  },

  {
    id: "q492",
    category: "Rules of the Road",
    questionText: "How is emergency vehicle in intersection properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If you are in an intersection when an emergency vehicle approaches, continue through, then move right and stop when safe.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 35, Emergency vehicle in intersection): If you are in an intersection when an emergency vehicle approaches, continue through, then move right and stop when safe.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 35,
    sourceTopic: "Emergency vehicle in intersection",
    coverageFactIds: ["pdf-fact-s5-emergency-vehicle-in-intersection-if-you-are-in-an-intersection-when-a"]
  },

  {
    id: "q493",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding obey officers firefighters?",
    imageUrl: "",
    options: [
      "Obey any direction from a law enforcement officer or firefighter even if it conflicts with signs, signals, or laws.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 35, Obey officers firefighters): Obey any direction from a law enforcement officer or firefighter even if it conflicts with signs, signals, or laws.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 35,
    sourceTopic: "Obey officers firefighters",
    coverageFactIds: ["pdf-fact-s5-obey-officers-firefighters-obey-any-direction-from-a-law-enforcement-o"]
  },

  {
    id: "q494",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning do not drive to emergency scene?",
    imageUrl: "",
    options: [
      "You can be arrested for driving to the scene of a fire, collision, or disaster because it interferes with responders.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 35, Do not drive to emergency scene): You can be arrested for driving to the scene of a fire, collision, or disaster because it interferes with responders.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 35,
    sourceTopic: "Do not drive to emergency scene",
    coverageFactIds: ["pdf-fact-s5-do-not-drive-to-emergency-scene-you-can-be-arrested-for-driving-to-the"]
  },

  {
    id: "q495",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding slow-moving vehicle examples?",
    imageUrl: "",
    options: [
      "Slow-moving motorized vehicles can include scooters, neighborhood electric vehicles, and golf carts.",
      "The speed limit is suspended during late-night hours when traffic is light.",
      "Speed up to match the highest speed of the surrounding traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 36, Slow-moving vehicle examples): Slow-moving motorized vehicles can include scooters, neighborhood electric vehicles, and golf carts.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 36,
    sourceTopic: "Slow-moving vehicle examples",
    coverageFactIds: ["pdf-fact-s5-slow-moving-vehicle-examples-slow-moving-motorized-vehicles-can-includ"]
  },

  {
    id: "q496",
    category: "Rules of the Road",
    questionText: "How is adjust speed for slow vehicles properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Drivers should adjust speed to share the road with slow-moving vehicles.",
      "Speed up to match the highest speed of the surrounding traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 36, Adjust speed for slow vehicles): Drivers should adjust speed to share the road with slow-moving vehicles.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 36,
    sourceTopic: "Adjust speed for slow vehicles",
    coverageFactIds: ["pdf-fact-s5-adjust-speed-for-slow-vehicles-drivers-should-adjust-speed-to-share-th"]
  },

  {
    id: "q497",
    category: "Rules of the Road",
    questionText: "How is bicycles same rights properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Bicyclists have the same rights and responsibilities as other drivers.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 36, Bicycles same rights): Bicyclists have the same rights and responsibilities as other drivers.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 36,
    sourceTopic: "Bicycles same rights",
    coverageFactIds: ["pdf-fact-s5-bicycles-same-rights-bicyclists-have-the-same-rights-and-responsibilit"]
  },

  {
    id: "q498",
    category: "Rules of the Road",
    questionText: "How is bicyclists freeway allowed properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Bicyclists may legally ride on some freeway sections when no alternate route exists and bicycling is not forbidden.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 36, Bicyclists freeway allowed): Bicyclists may legally ride on some freeway sections when no alternate route exists and bicycling is not forbidden.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 36,
    sourceTopic: "Bicyclists freeway allowed",
    coverageFactIds: ["pdf-fact-s5-bicyclists-freeway-allowed-bicyclists-may-legally-ride-on-some-freeway"]
  },

  {
    id: "q499",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding bicyclists move left hazards?",
    imageUrl: "",
    options: [
      "Bicyclists may move left to avoid hazards such as vehicles, animals, or debris.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 36, Bicyclists move left hazards): Bicyclists may move left to avoid hazards such as vehicles, animals, or debris.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 36,
    sourceTopic: "Bicyclists move left hazards",
    coverageFactIds: ["pdf-fact-s5-bicyclists-move-left-hazards-bicyclists-may-move-left-to-avoid-hazards"]
  },

  {
    id: "q500",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding bicyclists one-way left?",
    imageUrl: "",
    options: [
      "Bicyclists may choose to ride near the left curb or edge of a one-way street.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 36, Bicyclists one-way left): Bicyclists may choose to ride near the left curb or edge of a one-way street.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 36,
    sourceTopic: "Bicyclists one-way left",
    coverageFactIds: ["pdf-fact-s5-bicyclists-one-way-left-bicyclists-may-choose-to-ride-near-the-left-cu"]
  },

  {
    id: "q501",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding bicyclists crosswalk pedestrian?",
    imageUrl: "",
    options: [
      "Bicyclists may use crosswalks by stopping and crossing as pedestrians.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 36, Bicyclists crosswalk pedestrian): Bicyclists may use crosswalks by stopping and crossing as pedestrians.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 36,
    sourceTopic: "Bicyclists crosswalk pedestrian",
    coverageFactIds: ["pdf-fact-s5-bicyclists-crosswalk-pedestrian-bicyclists-may-use-crosswalks-by-stopp"]
  },

  {
    id: "q502",
    category: "Rules of the Road",
    questionText: "How is passing bicyclist lane change properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "To pass a bicyclist in the travel lane, drivers may need to change lanes and then return safely.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 36, Passing bicyclist lane change): To pass a bicyclist in the travel lane, drivers may need to change lanes and then return safely.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 36,
    sourceTopic: "Passing bicyclist lane change",
    coverageFactIds: ["pdf-fact-s5-passing-bicyclist-lane-change-to-pass-a-bicyclist-in-the-travel-lane-d"]
  },

  {
    id: "q503",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning bicycle passing three feet if no lane change?",
    imageUrl: "",
    options: [
      "If you cannot change lanes to pass a bicyclist, allow at least three feet of clearance.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 37, Bicycle passing three feet if no lane change): If you cannot change lanes to pass a bicyclist, allow at least three feet of clearance.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 37,
    sourceTopic: "Bicycle passing three feet if no lane change",
    coverageFactIds: ["pdf-fact-s5-bicycle-passing-three-feet-if-no-lane-change-if-you-cannot-change-lane"]
  },

  {
    id: "q504",
    category: "Rules of the Road",
    questionText: "How is do not pass bicyclist without three feet properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If you cannot give three feet of space, do not pass the cyclist until the clearance can be given.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 37, Do not pass bicyclist without three feet): If you cannot give three feet of space, do not pass the cyclist until the clearance can be given.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 37,
    sourceTopic: "Do not pass bicyclist without three feet",
    coverageFactIds: ["pdf-fact-s5-do-not-pass-bicyclist-without-three-feet-if-you-cannot-give-three-feet"]
  },

  {
    id: "q505",
    category: "Rules of the Road",
    questionText: "What is the correct practice or rule concerning bike lane turn entry limit?",
    imageUrl: "",
    options: [
      "Enter a bike lane no more than 200 feet before starting a turn.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 37, Bike lane turn entry limit): Enter a bike lane no more than 200 feet before starting a turn.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 37,
    sourceTopic: "Bike lane turn entry limit",
    coverageFactIds: ["pdf-fact-s5-bike-lane-turn-entry-limit-enter-a-bike-lane-no-more-than-200-feet-bef"]
  },

  {
    id: "q506",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding work zone slow and space?",
    imageUrl: "",
    options: [
      "In work zones, slow down and allow extra space between vehicles.",
      "Slow down to exactly half the posted limit at all times to be safe.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars.",
      "Always maintain 15 mph in any lane regardless of traffic or road conditions."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 37, Work zone slow and space): In work zones, slow down and allow extra space between vehicles.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 37,
    sourceTopic: "Work zone slow and space",
    coverageFactIds: ["pdf-fact-s5-work-zone-slow-and-space-in-work-zones-slow-down-and-allow-extra-space"]
  },

  {
    id: "q507",
    category: "Rules of the Road",
    questionText: "How is work zone expect sudden stops properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "In work zones, expect sudden slowing or stopping and watch for drivers changing lanes.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 37, Work zone expect sudden stops): In work zones, expect sudden slowing or stopping and watch for drivers changing lanes.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 37,
    sourceTopic: "Work zone expect sudden stops",
    coverageFactIds: ["pdf-fact-s5-work-zone-expect-sudden-stops-in-work-zones-expect-sudden-slowing-or-s"]
  },

  {
    id: "q508",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding work zone obey flaggers?",
    imageUrl: "",
    options: [
      "Obey special signs or instructions from workers such as flaggers.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 37, Work zone obey flaggers): Obey special signs or instructions from workers such as flaggers.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 37,
    sourceTopic: "Work zone obey flaggers",
    coverageFactIds: ["pdf-fact-s5-work-zone-obey-flaggers-obey-special-signs-or-instructions-from-worker"]
  },

  {
    id: "q509",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning school bus yellow lights?",
    imageUrl: "",
    options: [
      "School bus flashing yellow lights warn drivers to slow down and prepare to stop.",
      "Use your turn signals only if requested by passengers or law enforcement.",
      "Sound your horn continuously to warn vehicles that you are about to turn.",
      "Signal for a turn only when changing directions in a designated construction zone."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 38, School bus yellow lights): School bus flashing yellow lights warn drivers to slow down and prepare to stop.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 38,
    sourceTopic: "School bus yellow lights",
    coverageFactIds: ["pdf-fact-s5-school-bus-yellow-lights-school-bus-flashing-yellow-lights-warn-driver"]
  },

  {
    id: "q510",
    category: "Rules of the Road",
    questionText: "How is railroad flashing red properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Flashing red railroad warning lights mean you must stop and wait until they stop flashing, even if the gate rises.",
      "Sound your horn continuously to warn vehicles that you are about to turn.",
      "Signal for a turn only when changing directions in a designated construction zone.",
      "Keep your high-beam headlights on continuously for maximum visibility."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 39, Railroad flashing red): Flashing red railroad warning lights mean you must stop and wait until they stop flashing, even if the gate rises.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 39,
    sourceTopic: "Railroad flashing red",
    coverageFactIds: ["pdf-fact-s5-railroad-flashing-red-flashing-red-railroad-warning-lights-mean-you-mu"]
  },

  {
    id: "q511",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding railroad lowered gates?",
    imageUrl: "",
    options: [
      "Do not go under lowering gates or around lowered gates.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 39, Railroad lowered gates): Do not go under lowering gates or around lowered gates.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 39,
    sourceTopic: "Railroad lowered gates",
    coverageFactIds: ["pdf-fact-s5-railroad-lowered-gates-do-not-go-under-lowering-gates-or-around-lowere"]
  },

  {
    id: "q512",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning railroad no train at lowered gate?",
    imageUrl: "",
    options: [
      "If gates are lowered and no train is approaching, call the posted railroad emergency number or 911.",
      "Speed up to match the highest speed of the surrounding traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 39, Railroad no train at lowered gate): If gates are lowered and no train is approaching, call the posted railroad emergency number or 911.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 39,
    sourceTopic: "Railroad no train at lowered gate",
    coverageFactIds: ["pdf-fact-s5-railroad-no-train-at-lowered-gate-if-gates-are-lowered-and-no-train-is"]
  },

  {
    id: "q513",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning railroad stop look listen?",
    imageUrl: "",
    options: [
      "At railroad crossings, stop, look, and listen; only cross when safe.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 39, Railroad stop look listen): At railroad crossings, stop, look, and listen; only cross when safe.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 39,
    sourceTopic: "Railroad stop look listen",
    coverageFactIds: ["pdf-fact-s5-railroad-stop-look-listen-at-railroad-crossings-stop-look-and-listen-o"]
  },

  {
    id: "q514",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding railroad expect any track?",
    imageUrl: "",
    options: [
      "Expect a train on any track, at any time, traveling in either direction.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 39, Railroad expect any track): Expect a train on any track, at any time, traveling in either direction.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 39,
    sourceTopic: "Railroad expect any track",
    coverageFactIds: ["pdf-fact-s5-railroad-expect-any-track-expect-a-train-on-any-track-at-any-time-trav"]
  },

  {
    id: "q515",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding railroad no stopping tracks?",
    imageUrl: "",
    options: [
      "Never stop on railroad tracks or start crossing unless there is room to completely cross.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 39, Railroad no stopping tracks): Never stop on railroad tracks or start crossing unless there is room to completely cross.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 39,
    sourceTopic: "Railroad no stopping tracks",
    coverageFactIds: ["pdf-fact-s5-railroad-no-stopping-tracks-never-stop-on-railroad-tracks-or-start-cro"]
  },

  {
    id: "q516",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding railroad required-stop vehicles?",
    imageUrl: "",
    options: [
      "Watch for vehicles that must stop before tracks, including buses, school buses, and vehicles with hazardous materials placards.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 39, Railroad required-stop vehicles): Watch for vehicles that must stop before tracks, including buses, school buses, and vehicles with hazardous materials placards.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 39,
    sourceTopic: "Railroad required-stop vehicles",
    coverageFactIds: ["pdf-fact-s5-railroad-required-stop-vehicles-watch-for-vehicles-that-must-stop-befo"]
  },

  {
    id: "q517",
    category: "Rules of the Road",
    questionText: "How is overloaded vehicle properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Drivers must not operate a vehicle so overloaded they cannot control it or see ahead or to the sides.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 40, Overloaded vehicle): Drivers must not operate a vehicle so overloaded they cannot control it or see ahead or to the sides.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 40,
    sourceTopic: "Overloaded vehicle",
    coverageFactIds: ["pdf-fact-s5-overloaded-vehicle-drivers-must-not-operate-a-vehicle-so-overloaded-th"]
  },

  {
    id: "q518",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding unsecured load?",
    imageUrl: "",
    options: [
      "Drivers must not operate a vehicle with an unsecured load that is a safety hazard.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 40, Unsecured load): Drivers must not operate a vehicle with an unsecured load that is a safety hazard.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 40,
    sourceTopic: "Unsecured load",
    coverageFactIds: ["pdf-fact-s5-unsecured-load-drivers-must-not-operate-a-vehicle-with-an-unsecured-lo"]
  },

  {
    id: "q519",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding rear cargo night lights?",
    imageUrl: "",
    options: [
      "At night, cargo extending more than four feet from the rear bumper must be marked with two red lights.",
      "Signal for a turn only when changing directions in a designated construction zone.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 40, Rear cargo night lights): At night, cargo extending more than four feet from the rear bumper must be marked with two red lights.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 40,
    sourceTopic: "Rear cargo night lights",
    coverageFactIds: ["pdf-fact-s5-rear-cargo-night-lights-at-night-cargo-extending-more-than-four-feet-f"]
  },

  {
    id: "q520",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding pickup bed animals?",
    imageUrl: "",
    options: [
      "Animals transported in the back of a pickup or truck must be properly secured to prevent falling, jumping, or being thrown.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 40, Pickup bed animals): Animals transported in the back of a pickup or truck must be properly secured to prevent falling, jumping, or being thrown.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 40,
    sourceTopic: "Pickup bed animals",
    coverageFactIds: ["pdf-fact-s5-pickup-bed-animals-animals-transported-in-the-back-of-a-pickup-or-truc"]
  },

  {
    id: "q521",
    category: "Rules of the Road",
    questionText: "How is driver visible video monitor properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Drivers may not operate a vehicle with a video monitor visible to the driver unless it displays vehicle information, navigation, media player, or radio.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 40, Driver visible video monitor): Drivers may not operate a vehicle with a video monitor visible to the driver unless it displays vehicle information, navigation, media player, or radio.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 40,
    sourceTopic: "Driver visible video monitor",
    coverageFactIds: ["pdf-fact-s5-driver-visible-video-monitor-drivers-may-not-operate-a-vehicle-with-a"]
  },

  {
    id: "q522",
    category: "Rules of the Road",
    questionText: "How is no throwing burning substances properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Drivers must not throw cigarettes, cigars, or other flaming or glowing substances from a vehicle.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 40, No throwing burning substances): Drivers must not throw cigarettes, cigars, or other flaming or glowing substances from a vehicle.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 40,
    sourceTopic: "No throwing burning substances",
    coverageFactIds: ["pdf-fact-s5-no-throwing-burning-substances-drivers-must-not-throw-cigarettes-cigar"]
  },

  {
    id: "q523",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning windshield obstruction ban?",
    imageUrl: "",
    options: [
      "Drivers must not put signs or objects on the windshield or side rear windows that block view or hang objects on the mirror.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 41, Windshield obstruction ban): Drivers must not put signs or objects on the windshield or side rear windows that block view or hang objects on the mirror.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 41,
    sourceTopic: "Windshield obstruction ban",
    coverageFactIds: ["pdf-fact-s5-windshield-obstruction-ban-drivers-must-not-put-signs-or-objects-on-th"]
  },

  {
    id: "q524",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding side windows behind driver?",
    imageUrl: "",
    options: [
      "Objects may be placed on side windows behind the driver.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 41, Side windows behind driver): Objects may be placed on side windows behind the driver.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 41,
    sourceTopic: "Side windows behind driver",
    coverageFactIds: ["pdf-fact-s5-side-windows-behind-driver-objects-may-be-placed-on-side-windows-behin"]
  },

  {
    id: "q525",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding license plate legibility?",
    imageUrl: "",
    options: [
      "Drivers must not operate a vehicle with an illegible license plate.",
      "It is acceptable to drive after drinking if you drink strong coffee first.",
      "Prescription medications are always completely safe to use while driving.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 41, License plate legibility): Drivers must not operate a vehicle with an illegible license plate.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 41,
    sourceTopic: "License plate legibility",
    coverageFactIds: ["pdf-fact-s5-license-plate-legibility-drivers-must-not-operate-a-vehicle-with-an-il"]
  },

  {
    id: "q526",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding license plate alteration?",
    imageUrl: "",
    options: [
      "Drivers must not alter a license plate in any way.",
      "Prescription medications are always completely safe to use while driving.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year.",
      "A Class C license allows you to operate commercial double-trailer trucks."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 41, License plate alteration): Drivers must not alter a license plate in any way.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 41,
    sourceTopic: "License plate alteration",
    coverageFactIds: ["pdf-fact-s5-license-plate-alteration-drivers-must-not-alter-a-license-plate-in-any"]
  },

  {
    id: "q527",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding evading serious injury penalty?",
    imageUrl: "",
    options: [
      "Causing serious bodily injury while evading law enforcement can lead to up to seven years in state prison or up to one year in county jail.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 41, Evading serious injury penalty): Causing serious bodily injury while evading law enforcement can lead to up to seven years in state prison or up to one year in county jail.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 41,
    sourceTopic: "Evading serious injury penalty",
    coverageFactIds: ["pdf-fact-s5-evading-serious-injury-penalty-causing-serious-bodily-injury-while-eva"]
  },

  {
    id: "q528",
    category: "Rules of the Road",
    questionText: "How is evading manslaughter penalty properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Manslaughter resulting from evading law enforcement during a pursuit is punishable by 4 to 10 years in state prison.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 41, Evading manslaughter penalty): Manslaughter resulting from evading law enforcement during a pursuit is punishable by 4 to 10 years in state prison.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 41,
    sourceTopic: "Evading manslaughter penalty",
    coverageFactIds: ["pdf-fact-s5-evading-manslaughter-penalty-manslaughter-resulting-from-evading-law-e"]
  },

  {
    id: "q529",
    category: "Rules of the Road",
    questionText: "What is the safe or legal speed rule for reckless speed contest injury?",
    imageUrl: "",
    options: [
      "A conviction for reckless driving or a speed contest that injures another person can lead to imprisonment, a fine, or both.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 41, Reckless speed contest injury): A conviction for reckless driving or a speed contest that injures another person can lead to imprisonment, a fine, or both.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 41,
    sourceTopic: "Reckless speed contest injury",
    coverageFactIds: ["pdf-fact-s5-reckless-speed-contest-injury-a-conviction-for-reckless-driving-or-a-s"]
  },

  {
    id: "q530",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding negligent driver points?",
    imageUrl: "",
    options: [
      "Too many points on a driver record can make a person a negligent driver and lead to probation, suspension, or revocation.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 42, Negligent driver points): Too many points on a driver record can make a person a negligent driver and lead to probation, suspension, or revocation.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 42,
    sourceTopic: "Negligent driver points",
    coverageFactIds: ["pdf-fact-s5-negligent-driver-points-too-many-points-on-a-driver-record-can-make-a"]
  },

  {
    id: "q531",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding suspension hearing right?",
    imageUrl: "",
    options: [
      "If DMV acts against a driving privilege, the driver has the right to a hearing and will be notified in writing.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 42, Suspension hearing right): If DMV acts against a driving privilege, the driver has the right to a hearing and will be notified in writing.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 42,
    sourceTopic: "Suspension hearing right",
    coverageFactIds: ["pdf-fact-s5-suspension-hearing-right-if-dmv-acts-against-a-driving-privilege-the-d"]
  },

  {
    id: "q532",
    category: "Rules of the Road",
    questionText: "How is mandatory revocation hit-and-run injury properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "DMV will revoke driving privilege for a hit-and-run or reckless driving conviction that resulted in injury.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 42, Mandatory revocation hit-and-run injury): DMV will revoke driving privilege for a hit-and-run or reckless driving conviction that resulted in injury.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 42,
    sourceTopic: "Mandatory revocation hit-and-run injury",
    coverageFactIds: ["pdf-fact-s5-mandatory-revocation-hit-and-run-injury-dmv-will-revoke-driving-privil"]
  },

  {
    id: "q533",
    category: "Rules of the Road",
    questionText: "How is replacement license after suspension properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "After suspension or revocation, a driver may apply for a replacement license and must show proof of financial responsibility such as SR 22 or SR 1P.",
      "Prescription medications are always completely safe to use while driving.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year.",
      "A Class C license allows you to operate commercial double-trailer trucks."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 42, Replacement license after suspension): After suspension or revocation, a driver may apply for a replacement license and must show proof of financial responsibility such as SR 22 or SR 1P.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 42,
    sourceTopic: "Replacement license after suspension",
    coverageFactIds: ["pdf-fact-s5-replacement-license-after-suspension-after-suspension-or-revocation-a"]
  },

  {
    id: "q534",
    category: "Rules of the Road",
    questionText: "Which of the following is correct regarding minor first collision violation?",
    imageUrl: "",
    options: [
      "DMV may act against a minor license after one at-fault collision or traffic violation conviction during the first 12 months.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year.",
      "A Class C license allows you to operate commercial double-trailer trucks.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 42, Minor first collision violation): DMV may act against a minor license after one at-fault collision or traffic violation conviction during the first 12 months.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 42,
    sourceTopic: "Minor first collision violation",
    coverageFactIds: ["pdf-fact-s5-minor-first-collision-violation-dmv-may-act-against-a-minor-license-af"]
  },

  {
    id: "q535",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding minor probation repeat violations?",
    imageUrl: "",
    options: [
      "Additional at-fault collisions or convictions while on probation can cause another suspension.",
      "A Class C license allows you to operate commercial double-trailer trucks.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 42, Minor probation repeat violations): Additional at-fault collisions or convictions while on probation can cause another suspension.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 42,
    sourceTopic: "Minor probation repeat violations",
    coverageFactIds: ["pdf-fact-s5-minor-probation-repeat-violations-additional-at-fault-collisions-or-co"]
  },

  {
    id: "q536",
    category: "Rules of the Road",
    questionText: "What is the correct DMV guideline or safety rule regarding minor alcohol controlled substance suspension?",
    imageUrl: "",
    options: [
      "A conviction for alcohol or controlled substance use by a person 15 to 20 causes a one-year license suspension or delayed eligibility.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 42, Minor alcohol controlled substance suspension): A conviction for alcohol or controlled substance use by a person 15 to 20 causes a one-year license suspension or delayed eligibility.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 42,
    sourceTopic: "Minor alcohol controlled substance suspension",
    coverageFactIds: ["pdf-fact-s5-minor-alcohol-controlled-substance-suspension-a-conviction-for-alcohol"]
  },

  {
    id: "q537",
    category: "Rules of the Road",
    questionText: "What is the correct DMV rule or guidance concerning turning 18 no erase restrictions?",
    imageUrl: "",
    options: [
      "Turning 18 does not erase or end existing restrictions, suspensions, or probation sentences.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 5: Laws and Rules of the Road, page 42, Turning 18 no erase restrictions): Turning 18 does not erase or end existing restrictions, suspensions, or probation sentences.",
    testGroup: 90,
    sourceSection: "Section 5: Laws and Rules of the Road",
    sourcePage: 42,
    sourceTopic: "Turning 18 no erase restrictions",
    coverageFactIds: ["pdf-fact-s5-turning-18-no-erase-restrictions-turning-18-does-not-erase-or-end-exis"]
  },

  {
    id: "q538",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding surrounding areas color map?",
    imageUrl: "",
    options: [
      "The handbook identifies areas around a vehicle as green ahead, blue beside, yellow blind spots, and red behind.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 44, Surrounding areas color map): The handbook identifies areas around a vehicle as green ahead, blue beside, yellow blind spots, and red behind.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 44,
    sourceTopic: "Surrounding areas color map",
    coverageFactIds: ["pdf-fact-s6-surrounding-areas-color-map-the-handbook-identifies-areas-around-a-veh"]
  },

  {
    id: "q539",
    category: "Safe Driving",
    questionText: "How is scan 10 seconds ahead properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Drivers should scan the road at least 10 seconds ahead to allow time to react and avoid last-minute moves.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 44, Scan 10 seconds ahead): Drivers should scan the road at least 10 seconds ahead to allow time to react and avoid last-minute moves.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 44,
    sourceTopic: "Scan 10 seconds ahead",
    coverageFactIds: ["pdf-fact-s6-scan-10-seconds-ahead-drivers-should-scan-the-road-at-least-10-seconds"]
  },

  {
    id: "q540",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding close merge response?",
    imageUrl: "",
    options: [
      "If a vehicle merges too closely in front, take your foot off the accelerator to create space.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 44, Close merge response): If a vehicle merges too closely in front, take your foot off the accelerator to create space.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 44,
    sourceTopic: "Close merge response",
    coverageFactIds: ["pdf-fact-s6-close-merge-response-if-a-vehicle-merges-too-closely-in-front-take-you"]
  },

  {
    id: "q541",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning tailgater response?",
    imageUrl: "",
    options: [
      "If a tailgater is behind you, maintain course and speed, then merge right when safe to let them pass.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 44, Tailgater response): If a tailgater is behind you, maintain course and speed, then merge right when safe to let them pass.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 44,
    sourceTopic: "Tailgater response",
    coverageFactIds: ["pdf-fact-s6-tailgater-response-if-a-tailgater-is-behind-you-maintain-course-and-sp"]
  },

  {
    id: "q542",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding more space for motorcyclists on rough surfaces?",
    imageUrl: "",
    options: [
      "Create more space when following motorcyclists on metal surfaces, bridge gratings, railroad tracks, or gravel.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 44, More space for motorcyclists on rough surfaces): Create more space when following motorcyclists on metal surfaces, bridge gratings, railroad tracks, or gravel.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 44,
    sourceTopic: "More space for motorcyclists on rough surfaces",
    coverageFactIds: ["pdf-fact-s6-more-space-for-motorcyclists-on-rough-surfaces-create-more-space-when"]
  },

  {
    id: "q543",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning avoid blind spots of others?",
    imageUrl: "",
    options: [
      "Do not stay in another driver’s blind spot.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Avoid blind spots of others): Do not stay in another driver’s blind spot.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Avoid blind spots of others",
    coverageFactIds: ["pdf-fact-s6-avoid-blind-spots-of-others-do-not-stay-in-another-driver-s-blind-spot"]
  },

  {
    id: "q544",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding avoid driving alongside?",
    imageUrl: "",
    options: [
      "Avoid driving directly alongside other vehicles.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Avoid driving alongside): Avoid driving directly alongside other vehicles.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Avoid driving alongside",
    coverageFactIds: ["pdf-fact-s6-avoid-driving-alongside-avoid-driving-directly-alongside-other-vehicle"]
  },

  {
    id: "q545",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding make space for freeway entrants?",
    imageUrl: "",
    options: [
      "Make space for vehicles entering freeways even if you have the right-of-way.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Make space for freeway entrants): Make space for vehicles entering freeways even if you have the right-of-way.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Make space for freeway entrants",
    coverageFactIds: ["pdf-fact-s6-make-space-for-freeway-entrants-make-space-for-vehicles-entering-freew"]
  },

  {
    id: "q546",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning space from parked vehicles?",
    imageUrl: "",
    options: [
      "Keep space between your vehicle and parked vehicles.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Space from parked vehicles): Keep space between your vehicle and parked vehicles.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Space from parked vehicles",
    coverageFactIds: ["pdf-fact-s6-space-from-parked-vehicles-keep-space-between-your-vehicle-and-parked"]
  },

  {
    id: "q547",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding look both ways at controlled intersections?",
    imageUrl: "",
    options: [
      "Look both ways even at intersections where traffic has a red light or stop sign.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Look both ways at controlled intersections): Look both ways even at intersections where traffic has a red light or stop sign.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Look both ways at controlled intersections",
    coverageFactIds: ["pdf-fact-s6-look-both-ways-at-controlled-intersections-look-both-ways-even-at-inte"]
  },

  {
    id: "q548",
    category: "Safe Driving",
    questionText: "Under California law, what is the definition of a vehicle blind spots?",
    imageUrl: "",
    options: [
      "Blind spots are areas around a vehicle that a driver cannot see by looking ahead or using mirrors.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Vehicle blind spots definition): Blind spots are areas around a vehicle that a driver cannot see by looking ahead or using mirrors.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Vehicle blind spots definition",
    coverageFactIds: ["pdf-fact-s6-vehicle-blind-spots-definition-blind-spots-are-areas-around-a-vehicle"]
  },

  {
    id: "q549",
    category: "Safe Driving",
    questionText: "What is the proper way to perform a blind spot shoulder?",
    imageUrl: "",
    options: [
      "Check blind spots by looking over your right and left shoulders through the side windows.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Blind spot shoulder check): Check blind spots by looking over your right and left shoulders through the side windows.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Blind spot shoulder check",
    coverageFactIds: ["pdf-fact-s6-blind-spot-shoulder-check-check-blind-spots-by-looking-over-your-right"]
  },

  {
    id: "q550",
    category: "Safe Driving",
    questionText: "Under California law, how should you safely perform a only turn head for blind spot?",
    imageUrl: "",
    options: [
      "When checking blind spots, turn only your head, not your body or steering wheel.",
      "Change lanes rapidly and without a signal when you are running late.",
      "Enter an intersection even if there is not enough space to clear the crosswalk.",
      "Drive inside a designated bicycle lane for at least half a mile before turning."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Only turn head for blind spot): When checking blind spots, turn only your head, not your body or steering wheel.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Only turn head for blind spot",
    coverageFactIds: ["pdf-fact-s6-only-turn-head-for-blind-spot-when-checking-blind-spots-turn-only-your"]
  },

  {
    id: "q551",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning blind spot check situations?",
    imageUrl: "",
    options: [
      "Check blind spots before changing lanes, turning, merging, backing up, leaving parking, parallel parking, pulling from curb, or opening a door.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 45, Blind spot check situations): Check blind spots before changing lanes, turning, merging, backing up, leaving parking, parallel parking, pulling from curb, or opening a door.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 45,
    sourceTopic: "Blind spot check situations",
    coverageFactIds: ["pdf-fact-s6-blind-spot-check-situations-check-blind-spots-before-changing-lanes-tu"]
  },

  {
    id: "q552",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding check behind often?",
    imageUrl: "",
    options: [
      "Check behind often using mirrors and turning your head.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Check behind often): Check behind often using mirrors and turning your head.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Check behind often",
    coverageFactIds: ["pdf-fact-s6-check-behind-often-check-behind-often-using-mirrors-and-turning-your-h"]
  },

  {
    id: "q553",
    category: "Safe Driving",
    questionText: "How is check behind before actions properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Check behind when changing lanes, reducing speed, turning, parking, pulling to or from curb, or backing up.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Check behind before actions): Check behind when changing lanes, reducing speed, turning, parking, pulling to or from curb, or backing up.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Check behind before actions",
    coverageFactIds: ["pdf-fact-s6-check-behind-before-actions-check-behind-when-changing-lanes-reducing"]
  },

  {
    id: "q554",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning night high beams open roads?",
    imageUrl: "",
    options: [
      "At night, use high beams on open country roads or dark city streets when legal.",
      "Flash your emergency hazard lights continuously to warn other drivers.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Night high beams open roads): At night, use high beams on open country roads or dark city streets when legal.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Night high beams open roads",
    coverageFactIds: ["pdf-fact-s6-night-high-beams-open-roads-at-night-use-high-beams-on-open-country-ro"]
  },

  {
    id: "q555",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding night stop within headlights?",
    imageUrl: "",
    options: [
      "At night, make sure you can stop within the distance illuminated by headlights.",
      "Keep only your parking lights turned on during heavy rain or dense fog.",
      "Activate your turn signals exactly 10 feet before commencing any turn.",
      "Use your turn signals only if requested by passengers or law enforcement."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Night stop within headlights): At night, make sure you can stop within the distance illuminated by headlights.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Night stop within headlights",
    coverageFactIds: ["pdf-fact-s6-night-stop-within-headlights-at-night-make-sure-you-can-stop-within-th"]
  },

  {
    id: "q556",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning night rain low beams?",
    imageUrl: "",
    options: [
      "When it is raining, use low-beam headlights, not only parking lights.",
      "Always maintain 15 mph in any lane regardless of traffic or road conditions.",
      "Accelerate unconditionally to join the nearest travel lane.",
      "This requirement only applies when driving on high-speed interstate freeways."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Night rain low beams): When it is raining, use low-beam headlights, not only parking lights.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Night rain low beams",
    coverageFactIds: ["pdf-fact-s6-night-rain-low-beams-when-it-is-raining-use-low-beam-headlights-not-on"]
  },

  {
    id: "q557",
    category: "Safe Driving",
    questionText: "Why must drivers exercise extra caution around vulnerable road users, such as pedestrians and cyclists?",
    imageUrl: "",
    options: [
      "At night, motorcycles, pedestrians, and bicyclists are much harder to see.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road.",
      "Change lanes rapidly and without a signal when you are running late."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Night vulnerable users harder to see): At night, motorcycles, pedestrians, and bicyclists are much harder to see.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Night vulnerable users harder to see",
    coverageFactIds: ["pdf-fact-s6-night-vulnerable-users-harder-to-see-at-night-motorcycles-pedestrians"]
  },

  {
    id: "q558",
    category: "Safe Driving",
    questionText: "When or how must you utilize one headlight oncoming according to safety rules?",
    imageUrl: "",
    options: [
      "If a vehicle with one light approaches at night, drive as far right as possible because it may be a bicyclist, motorcyclist, or vehicle missing a headlight.",
      "Sound your horn continuously to warn vehicles that you are about to turn.",
      "Signal for a turn only when changing directions in a designated construction zone.",
      "Keep your high-beam headlights on continuously for maximum visibility."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, One headlight oncoming): If a vehicle with one light approaches at night, drive as far right as possible because it may be a bicyclist, motorcyclist, or vehicle missing a headlight.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "One headlight oncoming",
    coverageFactIds: ["pdf-fact-s6-one-headlight-oncoming-if-a-vehicle-with-one-light-approaches-at-night"]
  },

  {
    id: "q559",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning sun glare clean windshield?",
    imageUrl: "",
    options: [
      "To manage sun glare, keep the inside and outside of the windshield clean.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Sun glare clean windshield): To manage sun glare, keep the inside and outside of the windshield clean.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Sun glare clean windshield",
    coverageFactIds: ["pdf-fact-s6-sun-glare-clean-windshield-to-manage-sun-glare-keep-the-inside-and-out"]
  },

  {
    id: "q560",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding sun glare sunglasses?",
    imageUrl: "",
    options: [
      "Polarized sunglasses can help manage sun glare.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Sun glare sunglasses): Polarized sunglasses can help manage sun glare.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Sun glare sunglasses",
    coverageFactIds: ["pdf-fact-s6-sun-glare-sunglasses-polarized-sunglasses-can-help-manage-sun-glare"]
  },

  {
    id: "q561",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding sun glare following space?",
    imageUrl: "",
    options: [
      "Maintain space around the vehicle when dealing with sun glare.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Sun glare following space): Maintain space around the vehicle when dealing with sun glare.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Sun glare following space",
    coverageFactIds: ["pdf-fact-s6-sun-glare-following-space-maintain-space-around-the-vehicle-when-deali"]
  },

  {
    id: "q562",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding sun glare visor?",
    imageUrl: "",
    options: [
      "Make sure the visor works and is not blocked.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Sun glare visor): Make sure the visor works and is not blocked.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Sun glare visor",
    coverageFactIds: ["pdf-fact-s6-sun-glare-visor-make-sure-the-visor-works-and-is-not-blocked"]
  },

  {
    id: "q563",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding sun glare pedestrians?",
    imageUrl: "",
    options: [
      "Be aware that sun glare may make pedestrians hard to see.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Sun glare pedestrians): Be aware that sun glare may make pedestrians hard to see.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Sun glare pedestrians",
    coverageFactIds: ["pdf-fact-s6-sun-glare-pedestrians-be-aware-that-sun-glare-may-make-pedestrians-har"]
  },

  {
    id: "q564",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding sunrise sunset avoid?",
    imageUrl: "",
    options: [
      "Try to avoid driving during sunrise and sunset when glare is worst.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 46, Sunrise sunset avoid): Try to avoid driving during sunrise and sunset when glare is worst.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 46,
    sourceTopic: "Sunrise sunset avoid",
    coverageFactIds: ["pdf-fact-s6-sunrise-sunset-avoid-try-to-avoid-driving-during-sunrise-and-sunset-wh"]
  },

  {
    id: "q565",
    category: "Safe Driving",
    questionText: "How is skid definition properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "A skid occurs when one or more tires lose traction and the vehicle starts to slip.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 47, Skid definition): A skid occurs when one or more tires lose traction and the vehicle starts to slip.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 47,
    sourceTopic: "Skid definition",
    coverageFactIds: ["pdf-fact-s6-skid-definition-a-skid-occurs-when-one-or-more-tires-lose-traction-and"]
  },

  {
    id: "q566",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding prevent slippery skids?",
    imageUrl: "",
    options: [
      "To prevent slippery-surface skids, drive slowly, leave space, slow before curves and intersections, avoid quick stops, and use low gear before steep hills.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 47, Prevent slippery skids): To prevent slippery-surface skids, drive slowly, leave space, slow before curves and intersections, avoid quick stops, and use low gear before steep hills.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 47,
    sourceTopic: "Prevent slippery skids",
    coverageFactIds: ["pdf-fact-s6-prevent-slippery-skids-to-prevent-slippery-surface-skids-drive-slowly"]
  },

  {
    id: "q567",
    category: "Safe Driving",
    questionText: "Why is it important to avoid slippery patches?",
    imageUrl: "",
    options: [
      "Avoid ice patches, wet leaves, oil, and standing water when possible.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 47, Avoid slippery patches): Avoid ice patches, wet leaves, oil, and standing water when possible.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 47,
    sourceTopic: "Avoid slippery patches",
    coverageFactIds: ["pdf-fact-s6-avoid-slippery-patches-avoid-ice-patches-wet-leaves-oil-and-standing-w"]
  },

  {
    id: "q568",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding locked wheel skid cause?",
    imageUrl: "",
    options: [
      "A locked wheel skid is usually caused by braking too hard while going too fast.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 47, Locked wheel skid cause): A locked wheel skid is usually caused by braking too hard while going too fast.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 47,
    sourceTopic: "Locked wheel skid cause",
    coverageFactIds: ["pdf-fact-s6-locked-wheel-skid-cause-a-locked-wheel-skid-is-usually-caused-by-braki"]
  },

  {
    id: "q569",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding four-wheel abs skid?",
    imageUrl: "",
    options: [
      "With four-wheel ABS, apply firm pressure to the brake pedal during a skid.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 47, Four-wheel ABS skid): With four-wheel ABS, apply firm pressure to the brake pedal during a skid.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 47,
    sourceTopic: "Four-wheel ABS skid",
    coverageFactIds: ["pdf-fact-s6-four-wheel-abs-skid-with-four-wheel-abs-apply-firm-pressure-to-the-bra"]
  },

  {
    id: "q570",
    category: "Safe Driving",
    questionText: "How is rear-wheel abs skid properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "With rear-wheel ABS, ease brake pressure enough for front wheels to roll, then stop braking and steer into the skid.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 47, Rear-wheel ABS skid): With rear-wheel ABS, ease brake pressure enough for front wheels to roll, then stop braking and steer into the skid.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 47,
    sourceTopic: "Rear-wheel ABS skid",
    coverageFactIds: ["pdf-fact-s6-rear-wheel-abs-skid-with-rear-wheel-abs-ease-brake-pressure-enough-for"]
  },

  {
    id: "q571",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding front-wheel abs skid?",
    imageUrl: "",
    options: [
      "With front-wheel ABS, remove your foot from the brake pedal, steer where you want to go, and straighten the front wheels as the vehicle straightens.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 47, Front-wheel ABS skid): With front-wheel ABS, remove your foot from the brake pedal, steer where you want to go, and straighten the front wheels as the vehicle straightens.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 47,
    sourceTopic: "Front-wheel ABS skid",
    coverageFactIds: ["pdf-fact-s6-front-wheel-abs-skid-with-front-wheel-abs-remove-your-foot-from-the-br"]
  },

  {
    id: "q572",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding non-abs skid braking?",
    imageUrl: "",
    options: [
      "Without ABS, quickly pump the brakes until at a safe speed.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 48, Non-ABS skid braking): Without ABS, quickly pump the brakes until at a safe speed.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 48,
    sourceTopic: "Non-ABS skid braking",
    coverageFactIds: ["pdf-fact-s6-non-abs-skid-braking-without-abs-quickly-pump-the-brakes-until-at-a-sa"]
  },

  {
    id: "q573",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding brake failure sinking pedal?",
    imageUrl: "",
    options: [
      "If the brake pedal sinks to the floor, quickly pump the brakes by gently applying and releasing pressure.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 48, Brake failure sinking pedal): If the brake pedal sinks to the floor, quickly pump the brakes by gently applying and releasing pressure.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 48,
    sourceTopic: "Brake failure sinking pedal",
    coverageFactIds: ["pdf-fact-s6-brake-failure-sinking-pedal-if-the-brake-pedal-sinks-to-the-floor-quic"]
  },

  {
    id: "q574",
    category: "Safe Driving",
    questionText: "How is emergency brake after downshift properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If pumping brakes does not work, downshift to lower or neutral and try the emergency brake.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles.",
      "Pass other vehicles on the right-hand paved shoulder of the road."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 48, Emergency brake after downshift): If pumping brakes does not work, downshift to lower or neutral and try the emergency brake.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 48,
    sourceTopic: "Emergency brake after downshift",
    coverageFactIds: ["pdf-fact-s6-emergency-brake-after-downshift-if-pumping-brakes-does-not-work-downsh"]
  },

  {
    id: "q575",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding dry wet brakes?",
    imageUrl: "",
    options: [
      "If brakes get wet, dry them by lightly pressing accelerator and brake pedals at the same time only until dry.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 48, Dry wet brakes): If brakes get wet, dry them by lightly pressing accelerator and brake pedals at the same time only until dry.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 48,
    sourceTopic: "Dry wet brakes",
    coverageFactIds: ["pdf-fact-s6-dry-wet-brakes-if-brakes-get-wet-dry-them-by-lightly-pressing-accelera"]
  },

  {
    id: "q576",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding slippery roads slow?",
    imageUrl: "",
    options: [
      "On slippery roads, drive more slowly than on dry roads and allow more following space.",
      "Speed up to match the highest speed of the surrounding traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 48, Slippery roads slow): On slippery roads, drive more slowly than on dry roads and allow more following space.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 48,
    sourceTopic: "Slippery roads slow",
    coverageFactIds: ["pdf-fact-s6-slippery-roads-slow-on-slippery-roads-drive-more-slowly-than-on-dry-ro"]
  },

  {
    id: "q577",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding first rain slippery?",
    imageUrl: "",
    options: [
      "When rain starts after dry hot weather, pavement can be very slippery due to oil and dust.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 48, First rain slippery): When rain starts after dry hot weather, pavement can be very slippery due to oil and dust.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 48,
    sourceTopic: "First rain slippery",
    coverageFactIds: ["pdf-fact-s6-first-rain-slippery-when-rain-starts-after-dry-hot-weather-pavement-ca"]
  },

  {
    id: "q578",
    category: "Safe Driving",
    questionText: "Under California law, what is the definition of a hydroplaning?",
    imageUrl: "",
    options: [
      "Hydroplaning occurs when tires lose all contact with the road and ride on water.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 49, Hydroplaning definition): Hydroplaning occurs when tires lose all contact with the road and ride on water.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 49,
    sourceTopic: "Hydroplaning definition",
    coverageFactIds: ["pdf-fact-s6-hydroplaning-definition-hydroplaning-occurs-when-tires-lose-all-contac"]
  },

  {
    id: "q579",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning avoid hydroplaning?",
    imageUrl: "",
    options: [
      "To avoid hydroplaning, drive slowly, steer around standing water, and slow for sloshing sounds, lane changes, or direction changes.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 49, Avoid hydroplaning): To avoid hydroplaning, drive slowly, steer around standing water, and slow for sloshing sounds, lane changes, or direction changes.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 49,
    sourceTopic: "Avoid hydroplaning",
    coverageFactIds: ["pdf-fact-s6-avoid-hydroplaning-to-avoid-hydroplaning-drive-slowly-steer-around-sta"]
  },

  {
    id: "q580",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding stuck snow mud procedure?",
    imageUrl: "",
    options: [
      "If stuck in snow or mud, use low gear, keep wheels straight, accelerate gently, rock forward and reverse, and place traction materials only when stopped.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 49, Stuck snow mud procedure): If stuck in snow or mud, use low gear, keep wheels straight, accelerate gently, rock forward and reverse, and place traction materials only when stopped.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 49,
    sourceTopic: "Stuck snow mud procedure",
    coverageFactIds: ["pdf-fact-s6-stuck-snow-mud-procedure-if-stuck-in-snow-or-mud-use-low-gear-keep-whe"]
  },

  {
    id: "q581",
    category: "Safe Driving",
    questionText: "How is flooded road dangers properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Flooded roads can sweep vehicles away, hide debris and hazards, collapse, cause vehicle malfunction, or create electrocution risk.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 49, Flooded road dangers): Flooded roads can sweep vehicles away, hide debris and hazards, collapse, cause vehicle malfunction, or create electrocution risk.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 49,
    sourceTopic: "Flooded road dangers",
    coverageFactIds: ["pdf-fact-s6-flooded-road-dangers-flooded-roads-can-sweep-vehicles-away-hide-debris"]
  },

  {
    id: "q582",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding avoid deep flood water?",
    imageUrl: "",
    options: [
      "If water depth cannot be determined or the road is too dangerous, find another route.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 50, Avoid deep flood water): If water depth cannot be determined or the road is too dangerous, find another route.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 50,
    sourceTopic: "Avoid deep flood water",
    coverageFactIds: ["pdf-fact-s6-avoid-deep-flood-water-if-water-depth-cannot-be-determined-or-the-road"]
  },

  {
    id: "q583",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning high wind procedure?",
    imageUrl: "",
    options: [
      "In high winds, reduce speed, hold the wheel firmly, watch for debris, and do not use cruise control.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 50, High wind procedure): In high winds, reduce speed, hold the wheel firmly, watch for debris, and do not use cruise control.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 50,
    sourceTopic: "High wind procedure",
    coverageFactIds: ["pdf-fact-s6-high-wind-procedure-in-high-winds-reduce-speed-hold-the-wheel-firmly-w"]
  },

  {
    id: "q584",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding heavy fog avoid?",
    imageUrl: "",
    options: [
      "It is best to avoid driving in heavy fog or smoke and postpone travel until it clears.",
      "Speed up to match the highest speed of the surrounding traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 50, Heavy fog avoid): It is best to avoid driving in heavy fog or smoke and postpone travel until it clears.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 50,
    sourceTopic: "Heavy fog avoid",
    coverageFactIds: ["pdf-fact-s6-heavy-fog-avoid-it-is-best-to-avoid-driving-in-heavy-fog-or-smoke-and"]
  },

  {
    id: "q585",
    category: "Safe Driving",
    questionText: "How is fog driving procedure properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If you must drive in heavy fog or smoke, drive slowly, use low beams, increase following distance, use wipers/defroster, avoid passing, and listen for unseen traffic.",
      "Always drive at least 5 mph above the posted limit to prevent congestion.",
      "Slow down to exactly half the posted limit at all times to be safe.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 50, Fog driving procedure): If you must drive in heavy fog or smoke, drive slowly, use low beams, increase following distance, use wipers/defroster, avoid passing, and listen for unseen traffic.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 50,
    sourceTopic: "Fog driving procedure",
    coverageFactIds: ["pdf-fact-s6-fog-driving-procedure-if-you-must-drive-in-heavy-fog-or-smoke-drive-sl"]
  },

  {
    id: "q586",
    category: "Safe Driving",
    questionText: "How is fog no parking lights only properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Never drive in fog using only parking or fog lights.",
      "Slow down to exactly half the posted limit at all times to be safe.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars.",
      "Always maintain 15 mph in any lane regardless of traffic or road conditions."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 50, Fog no parking lights only): Never drive in fog using only parking or fog lights.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 50,
    sourceTopic: "Fog no parking lights only",
    coverageFactIds: ["pdf-fact-s6-fog-no-parking-lights-only-never-drive-in-fog-using-only-parking-or-fo"]
  },

  {
    id: "q587",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning fog too thick pull off?",
    imageUrl: "",
    options: [
      "If fog becomes too thick to drive safely, pull off the road, activate flashers, and wait.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars.",
      "Always maintain 15 mph in any lane regardless of traffic or road conditions.",
      "Accelerate unconditionally to join the nearest travel lane."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 50, Fog too thick pull off): If fog becomes too thick to drive safely, pull off the road, activate flashers, and wait.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 50,
    sourceTopic: "Fog too thick pull off",
    coverageFactIds: ["pdf-fact-s6-fog-too-thick-pull-off-if-fog-becomes-too-thick-to-drive-safely-pull-o"]
  },

  {
    id: "q588",
    category: "Safe Driving",
    questionText: "Under California law, what is the definition of a traffic break?",
    imageUrl: "",
    options: [
      "During a traffic break, an officer turns on emergency lights and slowly weaves across lanes.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 50, Traffic break definition): During a traffic break, an officer turns on emergency lights and slowly weaves across lanes.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 50,
    sourceTopic: "Traffic break definition",
    coverageFactIds: ["pdf-fact-s6-traffic-break-definition-during-a-traffic-break-an-officer-turns-on-em"]
  },

  {
    id: "q589",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning traffic break purposes?",
    imageUrl: "",
    options: [
      "Traffic breaks are used to slow or stop traffic for road hazards, heavy fog, unusual traffic, or collision prevention.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 50, Traffic break purposes): Traffic breaks are used to slow or stop traffic for road hazards, heavy fog, unusual traffic, or collision prevention.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 50,
    sourceTopic: "Traffic break purposes",
    coverageFactIds: ["pdf-fact-s6-traffic-break-purposes-traffic-breaks-are-used-to-slow-or-stop-traffic"]
  },

  {
    id: "q590",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding seat belt requirement?",
    imageUrl: "",
    options: [
      "Drivers and passengers must wear seat belts, and a ticket can be issued for not wearing one.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 51, Seat belt requirement): Drivers and passengers must wear seat belts, and a ticket can be issued for not wearing one.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 51,
    sourceTopic: "Seat belt requirement",
    coverageFactIds: ["pdf-fact-s6-seat-belt-requirement-drivers-and-passengers-must-wear-seat-belts-and"]
  },

  {
    id: "q591",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning seat belt survival?",
    imageUrl: "",
    options: [
      "Seat belts and shoulder harnesses increase survival chances and help keep occupants positioned to control the vehicle.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 51, Seat belt survival): Seat belts and shoulder harnesses increase survival chances and help keep occupants positioned to control the vehicle.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 51,
    sourceTopic: "Seat belt survival",
    coverageFactIds: ["pdf-fact-s6-seat-belt-survival-seat-belts-and-shoulder-harnesses-increase-survival"]
  },

  {
    id: "q592",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding rear-facing airbag front seat prohibition?",
    imageUrl: "",
    options: [
      "A child in a rear-facing child restraint may not ride in the front seat of an airbag-equipped vehicle.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 51, Rear-facing airbag front seat prohibition): A child in a rear-facing child restraint may not ride in the front seat of an airbag-equipped vehicle.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 51,
    sourceTopic: "Rear-facing airbag front seat prohibition",
    coverageFactIds: ["pdf-fact-s6-rear-facing-airbag-front-seat-prohibition-a-child-in-a-rear-facing-chi"]
  },

  {
    id: "q593",
    category: "Safe Driving",
    questionText: "How is driving off pavement recovery properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If wheels drift off pavement, grip the wheel, ease off accelerator, brake gently, check traffic, and carefully steer back.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 53, Driving off pavement recovery): If wheels drift off pavement, grip the wheel, ease off accelerator, brake gently, check traffic, and carefully steer back.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 53,
    sourceTopic: "Driving off pavement recovery",
    coverageFactIds: ["pdf-fact-s6-driving-off-pavement-recovery-if-wheels-drift-off-pavement-grip-the-wh"]
  },

  {
    id: "q594",
    category: "Safe Driving",
    questionText: "How is avoid hard steer after pavement drift properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Do not pull or turn the wheel too forcefully after driving off pavement because it may send you into oncoming traffic.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 53, Avoid hard steer after pavement drift): Do not pull or turn the wheel too forcefully after driving off pavement because it may send you into oncoming traffic.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 53,
    sourceTopic: "Avoid hard steer after pavement drift",
    coverageFactIds: ["pdf-fact-s6-avoid-hard-steer-after-pavement-drift-do-not-pull-or-turn-the-wheel-to"]
  },

  {
    id: "q595",
    category: "Safe Driving",
    questionText: "How is railroad tracks no train approaching properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If stalled on tracks with no approaching train and no flashing lights, exit, call the posted railroad number, provide crossing number if posted, then call 911.",
      "Increase your speed by 10 mph higher than the prevailing flow of surrounding cars.",
      "Always maintain 15 mph in any lane regardless of traffic or road conditions.",
      "Accelerate unconditionally to join the nearest travel lane."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 53, Railroad tracks no train approaching): If stalled on tracks with no approaching train and no flashing lights, exit, call the posted railroad number, provide crossing number if posted, then call 911.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 53,
    sourceTopic: "Railroad tracks no train approaching",
    coverageFactIds: ["pdf-fact-s6-railroad-tracks-no-train-approaching-if-stalled-on-tracks-with-no-appr"]
  },

  {
    id: "q596",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding distracted driving examples?",
    imageUrl: "",
    options: [
      "Distractions include looking at a phone, navigation system, children, pets, changing music, applying makeup, or shaving.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 54, Distracted driving examples): Distractions include looking at a phone, navigation system, children, pets, changing music, applying makeup, or shaving.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 54,
    sourceTopic: "Distracted driving examples",
    coverageFactIds: ["pdf-fact-s6-distracted-driving-examples-distractions-include-looking-at-a-phone-na"]
  },

  {
    id: "q597",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding do not text while driving?",
    imageUrl: "",
    options: [
      "Drivers must not send or read texts or emails while driving.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 54, Do not text while driving): Drivers must not send or read texts or emails while driving.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 54,
    sourceTopic: "Do not text while driving",
    coverageFactIds: ["pdf-fact-s6-do-not-text-while-driving-drivers-must-not-send-or-read-texts-or-email"]
  },

  {
    id: "q598",
    category: "Safe Driving",
    questionText: "What is the correct DMV rule or guidance concerning mounted phone location?",
    imageUrl: "",
    options: [
      "A phone may be mounted on the windshield, dashboard, or center console if it does not block road view.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 54, Mounted phone location): A phone may be mounted on the windshield, dashboard, or center console if it does not block road view.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 54,
    sourceTopic: "Mounted phone location",
    coverageFactIds: ["pdf-fact-s6-mounted-phone-location-a-phone-may-be-mounted-on-the-windshield-dashbo"]
  },

  {
    id: "q599",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding single swipe touch?",
    imageUrl: "",
    options: [
      "Use only a single swipe or touch feature on a mounted phone while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 54, Single swipe touch): Use only a single swipe or touch feature on a mounted phone while driving.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 54,
    sourceTopic: "Single swipe touch",
    coverageFactIds: ["pdf-fact-s6-single-swipe-touch-use-only-a-single-swipe-or-touch-feature-on-a-mount"]
  },

  {
    id: "q600",
    category: "Safe Driving",
    questionText: "What is the correct DMV guideline or safety rule regarding minor emergency phone exception?",
    imageUrl: "",
    options: [
      "A minor may use a cell phone to make a call for emergency assistance.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead.",
      "Use the continuous center turn lane for passing slower-moving vehicles."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 54, Minor emergency phone exception): A minor may use a cell phone to make a call for emergency assistance.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 54,
    sourceTopic: "Minor emergency phone exception",
    coverageFactIds: ["pdf-fact-s6-minor-emergency-phone-exception-a-minor-may-use-a-cell-phone-to-make-a"]
  },

  {
    id: "q601",
    category: "Safe Driving",
    questionText: "Which of the following is correct regarding carbon monoxide danger?",
    imageUrl: "",
    options: [
      "Gas-powered vehicles produce carbon monoxide, a deadly odorless gas from the exhaust pipe.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 54, Carbon monoxide danger): Gas-powered vehicles produce carbon monoxide, a deadly odorless gas from the exhaust pipe.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 54,
    sourceTopic: "Carbon monoxide danger",
    coverageFactIds: ["pdf-fact-s6-carbon-monoxide-danger-gas-powered-vehicles-produce-carbon-monoxide-a"]
  },

  {
    id: "q602",
    category: "Safe Driving",
    questionText: "How is garage carbon monoxide safety properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Never start a vehicle inside a garage with the door closed.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 6: Safe Driving, page 54, Garage carbon monoxide safety): Never start a vehicle inside a garage with the door closed.",
    testGroup: 90,
    sourceSection: "Section 6: Safe Driving",
    sourcePage: 54,
    sourceTopic: "Garage carbon monoxide safety",
    coverageFactIds: ["pdf-fact-s6-garage-carbon-monoxide-safety-never-start-a-vehicle-inside-a-garage-wi"]
  },

  {
    id: "q603",
    category: "Alcohol and Drugs",
    questionText: "How is dui laws alcohol and drugs properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "California DUI laws apply to both alcohol and drugs.",
      "Prescription medications are always completely safe to use while driving.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year.",
      "A Class C license allows you to operate commercial double-trailer trucks."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 55, DUI laws alcohol and drugs): California DUI laws apply to both alcohol and drugs.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 55,
    sourceTopic: "DUI laws alcohol and drugs",
    coverageFactIds: ["pdf-fact-s7-dui-laws-alcohol-and-drugs-california-dui-laws-apply-to-both-alcohol-a"]
  },

  {
    id: "q604",
    category: "Alcohol and Drugs",
    questionText: "How is age reduces alcohol tolerance properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "As people age, alcohol tolerance decreases, increasing alcohol-related driving risk.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year.",
      "A Class C license allows you to operate commercial double-trailer trucks.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 55, Age reduces alcohol tolerance): As people age, alcohol tolerance decreases, increasing alcohol-related driving risk.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 55,
    sourceTopic: "Age reduces alcohol tolerance",
    coverageFactIds: ["pdf-fact-s7-age-reduces-alcohol-tolerance-as-people-age-alcohol-tolerance-decrease"]
  },

  {
    id: "q605",
    category: "Alcohol and Drugs",
    questionText: "How is no excessive alcohol before driving properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "It is illegal to drive after drinking excessive alcohol in any form, including medications such as cough syrup.",
      "A Class C license allows you to operate commercial double-trailer trucks.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 55, No excessive alcohol before driving): It is illegal to drive after drinking excessive alcohol in any form, including medications such as cough syrup.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 55,
    sourceTopic: "No excessive alcohol before driving",
    coverageFactIds: ["pdf-fact-s7-no-excessive-alcohol-before-driving-it-is-illegal-to-drive-after-drink"]
  },

  {
    id: "q606",
    category: "Alcohol and Drugs",
    questionText: "Which of the following is correct regarding no alcohol drug combination?",
    imageUrl: "",
    options: [
      "It is illegal to drive after using any alcohol-drug combination that decreases safe driving ability.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 55, No alcohol drug combination): It is illegal to drive after using any alcohol-drug combination that decreases safe driving ability.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 55,
    sourceTopic: "No alcohol drug combination",
    coverageFactIds: ["pdf-fact-s7-no-alcohol-drug-combination-it-is-illegal-to-drive-after-using-any-alc"]
  },

  {
    id: "q607",
    category: "Alcohol and Drugs",
    questionText: "What is the correct DMV guideline or safety rule regarding read medication labels?",
    imageUrl: "",
    options: [
      "Drivers should read medication labels and know the effects of any drug they use.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record.",
      "It is acceptable to drive after drinking if you drink strong coffee first."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 55, Read medication labels): Drivers should read medication labels and know the effects of any drug they use.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 55,
    sourceTopic: "Read medication labels",
    coverageFactIds: ["pdf-fact-s7-read-medication-labels-drivers-should-read-medication-labels-and-know"]
  },

  {
    id: "q608",
    category: "Alcohol and Drugs",
    questionText: "What is the correct DMV guideline or safety rule regarding open container passenger exception?",
    imageUrl: "",
    options: [
      "Open-container rules do not apply to passengers in a bus, taxi, camper, or motorhome.",
      "Park your vehicle within 5 feet of any active fire hydrant or private driveway.",
      "Merge immediately to the left-most lane without scanning your blind spots.",
      "Park headed downhill with your wheels turned straight ahead."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 55, Open container passenger exception): Open-container rules do not apply to passengers in a bus, taxi, camper, or motorhome.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 55,
    sourceTopic: "Open container passenger exception",
    coverageFactIds: ["pdf-fact-s7-open-container-passenger-exception-open-container-rules-do-not-apply-t"]
  },

  {
    id: "q609",
    category: "Alcohol and Drugs",
    questionText: "How is dui below bac possible properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "A driver can be arrested and convicted of DUI even with BAC below the legal limit if impaired.",
      "It is acceptable to drive after drinking if you drink strong coffee first.",
      "Prescription medications are always completely safe to use while driving.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 56, DUI below BAC possible): A driver can be arrested and convicted of DUI even with BAC below the legal limit if impaired.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 56,
    sourceTopic: "DUI below BAC possible",
    coverageFactIds: ["pdf-fact-s7-dui-below-bac-possible-a-driver-can-be-arrested-and-convicted-of-dui-e"]
  },

  {
    id: "q610",
    category: "Alcohol and Drugs",
    questionText: "What is the correct DMV guideline or safety rule regarding one drink affects driving?",
    imageUrl: "",
    options: [
      "Even one alcoholic drink can affect safe driving ability.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 56, One drink affects driving): Even one alcoholic drink can affect safe driving ability.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 56,
    sourceTopic: "One drink affects driving",
    coverageFactIds: ["pdf-fact-s7-one-drink-affects-driving-even-one-alcoholic-drink-can-affect-safe-dri"]
  },

  {
    id: "q611",
    category: "Alcohol and Drugs",
    questionText: "How is bac decrease over time properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "The BAC table says to subtract 0.01% for each 40 minutes that lapse between drinks.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year.",
      "A Class C license allows you to operate commercial double-trailer trucks.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 56, BAC decrease over time): The BAC table says to subtract 0.01% for each 40 minutes that lapse between drinks.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 56,
    sourceTopic: "BAC decrease over time",
    coverageFactIds: ["pdf-fact-s7-bac-decrease-over-time-the-bac-table-says-to-subtract-0-01pct-for-each"]
  },

  {
    id: "q612",
    category: "Alcohol and Drugs",
    questionText: "How is standard drink definition properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "For the BAC table, one drink equals 1.5 oz 80-proof liquor, 12 oz 5% beer, or 5 oz 12% wine.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 56, Standard drink definition): For the BAC table, one drink equals 1.5 oz 80-proof liquor, 12 oz 5% beer, or 5 oz 12% wine.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 56,
    sourceTopic: "Standard drink definition",
    coverageFactIds: ["pdf-fact-s7-standard-drink-definition-for-the-bac-table-one-drink-equals-1-5-oz-80"]
  },

  {
    id: "q613",
    category: "Alcohol and Drugs",
    questionText: "What is the correct DMV rule or guidance concerning boating dui note?",
    imageUrl: "",
    options: [
      "It is illegal to drink alcohol or take drugs while operating boats, jet skis, water skis, aquaplanes, or similar vessels.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 56, Boating DUI note): It is illegal to drink alcohol or take drugs while operating boats, jet skis, water skis, aquaplanes, or similar vessels.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 56,
    sourceTopic: "Boating DUI note",
    coverageFactIds: ["pdf-fact-s7-boating-dui-note-it-is-illegal-to-drink-alcohol-or-take-drugs-while-op"]
  },

  {
    id: "q614",
    category: "Alcohol and Drugs",
    questionText: "What is the correct DMV guideline or safety rule regarding implied consent dui arrest?",
    imageUrl: "",
    options: [
      "Driving in California means consenting to breath, blood, or urine testing when suspected of DUI.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record.",
      "It is acceptable to drive after drinking if you drink strong coffee first."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 57, Implied consent DUI arrest): Driving in California means consenting to breath, blood, or urine testing when suspected of DUI.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 57,
    sourceTopic: "Implied consent DUI arrest",
    coverageFactIds: ["pdf-fact-s7-implied-consent-dui-arrest-driving-in-california-means-consenting-to-b"]
  },

  {
    id: "q615",
    category: "Alcohol and Drugs",
    questionText: "Which of the following is correct regarding pas breath still blood urine?",
    imageUrl: "",
    options: [
      "Taking a preliminary alcohol screening or breath test does not prevent being required to take a blood or urine test for drugs.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 57, PAS breath still blood urine): Taking a preliminary alcohol screening or breath test does not prevent being required to take a blood or urine test for drugs.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 57,
    sourceTopic: "PAS breath still blood urine",
    coverageFactIds: ["pdf-fact-s7-pas-breath-still-blood-urine-taking-a-preliminary-alcohol-screening-or"]
  },

  {
    id: "q616",
    category: "Alcohol and Drugs",
    questionText: "What is the correct DMV guideline or safety rule regarding admin per se suspension?",
    imageUrl: "",
    options: [
      "California Administrative Per Se law requires DMV to suspend driving privilege after a DUI arrest.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 57, Admin Per Se suspension): California Administrative Per Se law requires DMV to suspend driving privilege after a DUI arrest.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 57,
    sourceTopic: "Admin Per Se suspension",
    coverageFactIds: ["pdf-fact-s7-admin-per-se-suspension-california-administrative-per-se-law-requires"]
  },

  {
    id: "q617",
    category: "Alcohol and Drugs",
    questionText: "How is under 21 off-site liquor exception properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "An under-21 driver working for someone with an off-site liquor sales license may carry closed containers of alcohol.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 57, Under 21 off-site liquor exception): An under-21 driver working for someone with an off-site liquor sales license may carry closed containers of alcohol.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 57,
    sourceTopic: "Under 21 off-site liquor exception",
    coverageFactIds: ["pdf-fact-s7-under-21-off-site-liquor-exception-an-under-21-driver-working-for-some"]
  },

  {
    id: "q618",
    category: "Alcohol and Drugs",
    questionText: "What is the correct DMV guideline or safety rule regarding under 21 alcohol impound penalty?",
    imageUrl: "",
    options: [
      "If an under-21 driver is caught with alcohol in the vehicle, law enforcement can impound the vehicle up to 30 days and the court may fine and suspend or delay licensing for one year.",
      "Minors under 18 may drive unsupervised at any hour during their provisional year.",
      "A Class C license allows you to operate commercial double-trailer trucks.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 7: Alcohol and Drugs, page 57, Under 21 alcohol impound penalty): If an under-21 driver is caught with alcohol in the vehicle, law enforcement can impound the vehicle up to 30 days and the court may fine and suspend or delay licensing for one year.",
    testGroup: 90,
    sourceSection: "Section 7: Alcohol and Drugs",
    sourcePage: 57,
    sourceTopic: "Under 21 alcohol impound penalty",
    coverageFactIds: ["pdf-fact-s7-under-21-alcohol-impound-penalty-if-an-under-21-driver-is-caught-with"]
  },

  {
    id: "q619",
    category: "Financial Responsibility",
    questionText: "What is the correct DMV rule or guidance concerning proof of financial responsibility?",
    imageUrl: "",
    options: [
      "Drivers must carry proof of financial responsibility or insurance when driving and for a drive test.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 58, Proof of financial responsibility): Drivers must carry proof of financial responsibility or insurance when driving and for a drive test.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 58,
    sourceTopic: "Proof of financial responsibility",
    coverageFactIds: ["pdf-fact-s8-proof-of-financial-responsibility-drivers-must-carry-proof-of-financia"]
  },

  {
    id: "q620",
    category: "Financial Responsibility",
    questionText: "How is collision proof of insurance properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "After a collision, drivers must show proof of financial responsibility to other involved drivers.",
      "Only consuming hard liquor, not beer or wine, affects driving coordination.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 58, Collision proof of insurance): After a collision, drivers must show proof of financial responsibility to other involved drivers.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 58,
    sourceTopic: "Collision proof of insurance",
    coverageFactIds: ["pdf-fact-s8-collision-proof-of-insurance-after-a-collision-drivers-must-show-proof"]
  },

  {
    id: "q621",
    category: "Financial Responsibility",
    questionText: "How is parent financial responsibility minor properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "Parents or guardians take financial responsibility for drivers under 18 and pay damages if they are in a collision.",
      "A blood alcohol concentration (BAC) of 0.15% is legal if you do not feel impaired.",
      "You are exempt from all DMV medical reporting rules if you have a clean record.",
      "It is acceptable to drive after drinking if you drink strong coffee first."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 58, Parent financial responsibility minor): Parents or guardians take financial responsibility for drivers under 18 and pay damages if they are in a collision.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 58,
    sourceTopic: "Parent financial responsibility minor",
    coverageFactIds: ["pdf-fact-s8-parent-financial-responsibility-minor-parents-or-guardians-take-financ"]
  },

  {
    id: "q622",
    category: "Financial Responsibility",
    questionText: "What is the correct DMV guideline or safety rule regarding adult financial responsibility?",
    imageUrl: "",
    options: [
      "Drivers 18 or older take on their own financial responsibility.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 58, Adult financial responsibility): Drivers 18 or older take on their own financial responsibility.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 58,
    sourceTopic: "Adult financial responsibility",
    coverageFactIds: ["pdf-fact-s8-adult-financial-responsibility-drivers-18-or-older-take-on-their-own-f"]
  },

  {
    id: "q623",
    category: "Financial Responsibility",
    questionText: "What is the correct DMV rule or guidance concerning collision causes?",
    imageUrl: "",
    options: [
      "Common collision causes include distraction, unsafe speed, improper turns, right-of-way mistakes, ignoring signals/signs, wrong-side driving, and speed outside traffic flow.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 58, Collision causes): Common collision causes include distraction, unsafe speed, improper turns, right-of-way mistakes, ignoring signals/signs, wrong-side driving, and speed outside traffic flow.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 58,
    sourceTopic: "Collision causes",
    coverageFactIds: ["pdf-fact-s8-collision-causes-common-collision-causes-include-distraction-unsafe-sp"]
  },

  {
    id: "q624",
    category: "Financial Responsibility",
    questionText: "What is the correct DMV guideline or safety rule regarding emergency flashers collision ahead?",
    imageUrl: "",
    options: [
      "If you see emergency flashers ahead, slow down and pass carefully.",
      "Keep your high-beam headlights on continuously for maximum visibility.",
      "Only use your turn signals when there are vehicles directly behind you.",
      "Flash your emergency hazard lights continuously to warn other drivers."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 59, Emergency flashers collision ahead): If you see emergency flashers ahead, slow down and pass carefully.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 59,
    sourceTopic: "Emergency flashers collision ahead",
    coverageFactIds: ["pdf-fact-s8-emergency-flashers-collision-ahead-if-you-see-emergency-flashers-ahead"]
  },

  {
    id: "q625",
    category: "Financial Responsibility",
    questionText: "What is the correct DMV rule or guidance concerning avoid collision scene?",
    imageUrl: "",
    options: [
      "Avoid driving near collisions when possible so injured people can get help faster.",
      "Adjusting your seat and steering wheel position while driving is recommended.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 59, Avoid collision scene): Avoid driving near collisions when possible so injured people can get help faster.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 59,
    sourceTopic: "Avoid collision scene",
    coverageFactIds: ["pdf-fact-s8-avoid-collision-scene-avoid-driving-near-collisions-when-possible-so-i"]
  },

  {
    id: "q626",
    category: "Financial Responsibility",
    questionText: "What is the correct DMV rule or guidance concerning collision call 911 injury?",
    imageUrl: "",
    options: [
      "Call 911 immediately if anyone is hurt in a collision.",
      "Keep your hands at the 12 o'clock position for optimal steering wheels comfort.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 59, Collision call 911 injury): Call 911 immediately if anyone is hurt in a collision.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 59,
    sourceTopic: "Collision call 911 injury",
    coverageFactIds: ["pdf-fact-s8-collision-call-911-injury-call-911-immediately-if-anyone-is-hurt-in-a"]
  },

  {
    id: "q627",
    category: "Financial Responsibility",
    questionText: "How is collision move vehicle no injuries properly handled under California traffic guidelines?",
    imageUrl: "",
    options: [
      "If no one is hurt, move the vehicle out of traffic and then call 911.",
      "Only report a minor collision to the DMV if the property damage exceeds $30,000.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 59, Collision move vehicle no injuries): If no one is hurt, move the vehicle out of traffic and then call 911.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 59,
    sourceTopic: "Collision move vehicle no injuries",
    coverageFactIds: ["pdf-fact-s8-collision-move-vehicle-no-injuries-if-no-one-is-hurt-move-the-vehicle"]
  },

  {
    id: "q628",
    category: "Financial Responsibility",
    questionText: "What is the correct DMV guideline or safety rule regarding collision exchange information?",
    imageUrl: "",
    options: [
      "After a collision, show driver license, registration, insurance information, and current address to other drivers, officers, and involved persons.",
      "Maintain a following distance of less than one second at all highway speeds.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 59, Collision exchange information): After a collision, show driver license, registration, insurance information, and current address to other drivers, officers, and involved persons.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 59,
    sourceTopic: "Collision exchange information",
    coverageFactIds: ["pdf-fact-s8-collision-exchange-information-after-a-collision-show-driver-license-r"]
  },

  {
    id: "q629",
    category: "Financial Responsibility",
    questionText: "What is the correct DMV guideline or safety rule regarding collision law enforcement 24 hours?",
    imageUrl: "",
    options: [
      "If anyone is injured or killed in a collision, report it to law enforcement within 24 hours.",
      "You do not need to carry physical proof of insurance if you have a clean record.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 59, Collision law enforcement 24 hours): If anyone is injured or killed in a collision, report it to law enforcement within 24 hours.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 59,
    sourceTopic: "Collision law enforcement 24 hours",
    coverageFactIds: ["pdf-fact-s8-collision-law-enforcement-24-hours-if-anyone-is-injured-or-killed-in-a"]
  },

  {
    id: "q630",
    category: "Financial Responsibility",
    questionText: "What is the recommended procedure if you accidentally hit or injure an animal with your vehicle?",
    imageUrl: "",
    options: [
      "If you kill or injure an animal, call the nearest humane society or law enforcement and do not try to move the injured animal.",
      "Always look straight ahead and avoid scanning left or right while driving.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 59, Animal collision): If you kill or injure an animal, call the nearest humane society or law enforcement and do not try to move the injured animal.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 59,
    sourceTopic: "Animal collision",
    coverageFactIds: ["pdf-fact-s8-animal-collision-if-you-kill-or-injure-an-animal-call-the-nearest-huma"]
  },

  {
    id: "q631",
    category: "Financial Responsibility",
    questionText: "Under what circumstance is a collision recorded on your DMV driver record?",
    imageUrl: "",
    options: [
      "A collision involving over $1,000 damage, injury, or death will be added to the driver record regardless of fault.",
      "Only check your tires' tread and pressure once a level year during inspection.",
      "Checking your mirrors and blind spots is only necessary during your road exam.",
      "Adjusting your seat and steering wheel position while driving is recommended."
    ],
    correctOptionIndex: 0,
    explanation: "California Handbook (Section 8: Financial Responsibility, Insurance Requirements, and Collisions, page 60, Collision driver record): A collision involving over $1,000 damage, injury, or death will be added to the driver record regardless of fault.",
    testGroup: 90,
    sourceSection: "Section 8: Financial Responsibility, Insurance Requirements, and Collisions",
    sourcePage: 60,
    sourceTopic: "Collision driver record",
    coverageFactIds: ["pdf-fact-s8-collision-driver-record-a-collision-involving-over-dollars1-000-damage"]
  }

];
