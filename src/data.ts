/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RoadSign, Question, UserStats } from './types';
import windingRoadImg from './assets/images/windy_road_exact_match_1780632600693.png';
import stopSignImg from './assets/images/regulatory_stop_sign_1780669470619.png';
import yieldSignImg from './assets/images/regulatory_yield_sign_1780671133669.png';
import doNotEnterSignImg from './assets/images/regulatory_do_not_enter_sign_1780671352265.png';
import oneWaySignImg from './assets/images/one_way_directional_sign_1780672461259.png';
import slipperyWhenWetSignImg from './assets/images/slippery_when_wet_sign_1780672624633.png';
import dividedHighwaySignImg from './assets/images/divided_highway_sign_fixed_1780672963442.png';
import endDividedHighwaySignImg from './assets/images/end_divided_highway_sign_fixed_1780686058557.png';
import slowerTrafficImg from './assets/images/slower_traffic_1780679806917.png';
import mergingTrafficSignImg from './assets/images/merging_lane_sign_v2_1780682173395.png';
import noLeftTurnSignImg from './assets/images/no_left_turn_sign_1780854597248.png';
import tIntersectionSignImg from './assets/images/t_intersection_sign_1780854760991.png';
import laneEndsSignImg from './assets/images/lane_ends_merge_left_sign_1780855031785.png';
import pedestrianCrossingSignImg from './assets/images/pedestrian_crossing_sign_1780855771452.png';

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
    description: 'You must come to a complete halt before the limit line, crosswalk, or intersection.',
    imageUrl: stopSignImg,
    status: 'Mandatory',
    statusType: 'Mandatory',
  },
  {
    id: 'yield',
    title: 'Yield Sign',
    category: 'Warning',
    description: 'Slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass first.',
    imageUrl: yieldSignImg,
    status: 'Priority',
    statusType: 'Priority',
  },
  {
    id: 'no-entry',
    title: 'Do Not Enter',
    category: 'Regulatory',
    description: 'Entrance is strictly prohibited for all types of vehicular traffic (Wrong Way / Do Not Enter).',
    imageUrl: doNotEnterSignImg,
    status: 'Prohibitory',
    statusType: 'Prohibitory',
  },
  {
    id: 'one-way',
    title: 'One Way Directional',
    category: 'Information',
    description: 'Traffic must proceed exclusively in the direction of the arrow.',
    imageUrl: oneWaySignImg,
    status: 'Mandatory',
    statusType: 'Mandatory',
  },
  {
    id: 'winding-road',
    title: 'Winding Road',
    category: 'Warning',
    description: 'The road curves continuously ahead. Adjust speed and maintain total lane control for multiple sharp curves (3 or more).',
    imageUrl: windingRoadImg,
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'slippery-when-wet',
    title: 'Slippery When Wet',
    category: 'Warning',
    description: 'Road surface is extremely slick when wet. Slow down, avoid sudden braking or sharp turns, and double your following distance.',
    imageUrl: slipperyWhenWetSignImg,
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'divided-highway',
    title: 'Divided Highway Ahead',
    category: 'Warning',
    description: 'The road ahead is split by a physical barrier or median island. Stay to the right of the divider.',
    imageUrl: dividedHighwaySignImg,
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'merging-traffic',
    title: 'Merging Traffic',
    category: 'Warning',
    description: 'Traffic from another road (such as a freeway on-ramp) is merging into your lane. Adjust speed to facilitate safe merges.',
    imageUrl: mergingTrafficSignImg,
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'two-way-traffic',
    title: 'Two Way Traffic',
    category: 'Warning',
    description: 'The road changes to a two-way street with traffic traveling in both directions. Stay to the right of the dividing line.',
    imageUrl: 'two_way_traffic_simulated_visual',
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'lane-ends',
    title: 'Lane Ends / Merge Left',
    category: 'Warning',
    description: 'The driving lane on your right is ending. Plan to merge safely into the adjacent left lane.',
    imageUrl: laneEndsSignImg,
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'pedestrian-crossing',
    title: 'Pedestrian Crossing',
    category: 'Warning',
    description: 'Yield the right-of-way to pedestrians crossing the street in marked or unmarked crosswalks.',
    imageUrl: pedestrianCrossingSignImg,
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'stop-ahead',
    title: 'Stop Sign Ahead',
    category: 'Warning',
    description: 'A stop sign is ahead. Slow down and prepare to come to a complete halt at the upcoming intersection limit line.',
    imageUrl: 'stop_ahead_simulated_visual',
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'yield-ahead',
    title: 'Yield Sign Ahead',
    category: 'Warning',
    description: 'A yield sign is ahead. Slow down and be prepared to yield the right-of-way to cross vehicles and pedestrians.',
    imageUrl: 'yield_ahead_simulated_visual',
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'no-left-turn',
    title: 'No Left Turn',
    category: 'Regulatory',
    description: 'Left turns are prohibited at this intersection. Do not make a left turn or U-turn here.',
    imageUrl: noLeftTurnSignImg,
    status: 'Prohibitory',
    statusType: 'Prohibitory',
  },
  {
    id: 'reverse-turn',
    title: 'Reverse Turn / Sharp Curves',
    category: 'Warning',
    description: 'A sharp turn to the right followed by a sharp turn to the left. Slow down and proceed with caution.',
    imageUrl: 'reverse_turn_simulated_visual',
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 't-intersection',
    title: 'T-Intersection Ahead',
    category: 'Warning',
    description: 'The road you are traveling on ends ahead at a T-junction. You must yield and prepare to turn left or right.',
    imageUrl: tIntersectionSignImg,
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'added-lane',
    title: 'Added Lane (No Merge)',
    category: 'Warning',
    description: 'A new travel lane is added alongside your road. Merging is not required, but watch for entering vehicles.',
    imageUrl: 'added_lane_simulated_visual',
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'end-divided-highway',
    title: 'End Divided Highway',
    category: 'Warning',
    description: 'The physical divider or median barrier ends ahead. Two-way traffic will share the road. Keep to the right.',
    imageUrl: endDividedHighwaySignImg,
    status: 'Warning',
    statusType: 'Warning',
  },
  {
    id: 'slower-traffic-keep-right',
    title: 'Slower Traffic Keep Right',
    category: 'Regulatory',
    description: 'Slower vehicles must stay in the right-hand lane to allow faster traffic to safely pass on the left.',
    imageUrl: slowerTrafficImg,
    status: 'Mandatory',
    statusType: 'Mandatory',
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
    sourceTopic: 'Slow Driver Turnouts',
    coverageFactIds: ['fact-turnout-slow-vehicles']
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
    sourcePage: 8,
    sourceTopic: 'Motorcycles in HOV Lanes',
    coverageFactIds: ['fact-hov-motorcycle-lane']
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
    sourcePage: 9,
    sourceTopic: 'Driving in Bicycle Lanes',
    coverageFactIds: ['fact-drive-bike-lane-limit']
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
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 17,
    sourceTopic: 'Passing on the right conditions',
    coverageFactIds: ['fact-pass-on-right-allowed']
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
    sourceTopic: 'Freeway exit signaling time',
    coverageFactIds: ['fact-exit-highway-signal']
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
    sourcePage: 10,
    sourceTopic: 'Passing Bicyclist Space Clearance',
    coverageFactIds: ['fact-bike-passing-clearance']
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
    sourcePage: 13,
    sourceTopic: 'U-Turn visibility distance limit',
    coverageFactIds: ['fact-uturn-visibility-distance']
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
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 39,
    sourceTopic: 'Railroad crossing visibility and speed limit factors',
    coverageFactIds: ['fact-railroad-crossing-visibility-speed']
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
    questionText: 'If a provisional minor driver has a medical necessity to drive during curfew hours, what is required?),',
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
    explanation: 'California Handbook (Section 2, Exceptions): School-authorized activities require a dynamic note signed by the school principal, dean, or designee indicating the schooling reason.',
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
    sourcePage: 4,
    sourceTopic: 'Signaling distance before turning',
    coverageFactIds: ['fact-signal-turn-100ft']
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
    sourceTopic: 'Manual hand signal for a Right Turn',
    coverageFactIds: ['fact-hand-signal-right-arm']
  },
  {
    id: 'q36',
    category: 'Rules of the Road',
    questionText: 'How far in advance of making a turn should you continuously activate your electrical turn signals?',
    imageUrl: '',
    options: [
      'At least 50 feet before the turn.',
      'At least 100 feet before the turn.',
      'At least 200 feet before the turn.',
      'Directly as you begin spinning the steering wheel.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 3, Signaling): Always signal your intention to turn at least 100 feet before making a turn at an upcoming intersection.',
    testGroup: 15,
    sourceSection: 'Section 3: An Introduction to Driving',
    sourcePage: 3,
    sourceTopic: 'Manual hand signal to Slow down or Stop',
    coverageFactIds: ['fact-hand-signal-slow-stop-arm']
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
      'From 6:00 p.m. to 6:00 a.m. regardless of true twilight speeds.'
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
    sourceTopic: 'Dimming high beams - Following traffic',
    coverageFactIds: ['fact-dim-beams-following-300ft']
  },
  {
    id: 'q41',
    category: 'Safe Driving',
    questionText: 'When parking Headed UPHILL on a street with a curb, which direction should you turn your front wheels?',
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
    sourcePage: 13,
    sourceTopic: 'U-Turn visibility distance limit',
    coverageFactIds: ['fact-uturn-visibility-distance']
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
    sourcePage: 13,
    sourceTopic: 'U-Turn visibility distance limit',
    coverageFactIds: ['fact-uturn-visibility-distance']
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
    sourcePage: 13,
    sourceTopic: 'U-Turn visibility distance limit',
    coverageFactIds: ['fact-uturn-visibility-distance']
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
    sourcePage: 13,
    sourceTopic: 'U-Turn visibility distance limit',
    coverageFactIds: ['fact-uturn-visibility-distance']
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
    questionText: 'For maximum safety against rapid impact, how many inches of clearance space should you maintain between your chest and the airbag driver cover?',
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
    sourcePage: 51,
    sourceTopic: 'Secure seat child restraint age eight',
    coverageFactIds: ['fact-restraint-under8-backseat']
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
    sourceSection: 'Section 4: Navigating the Roads',
    sourcePage: 19,
    sourceTopic: 'Parking uphill wheels with curb',
    coverageFactIds: ['fact-hill-parking-uphill']
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
    questionText: 'When a blind pedestrian with a white cane (optionally red-tipped) or guide dog is crossing the street, what is the stopping requirement?',
    imageUrl: '',
    options: [
      'Stop within 15 feet of them so they can hear your engine.',
      'Stop within 5 feet of the crosswalk to allow them to hear and guide themselves.',
      'Stop within 15 feet and blink your headlights twice to signal them.',
      'Proceed slowly once the blind pedestrian has cleared your specific lane.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 6, Blind Pedestrians): You must stop within 5 feet of the crosswalk for a blind pedestrian with a cane or guide dog, and do not honk or shout at them.',
    testGroup: 18,
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 32,
    sourceTopic: 'Blind pedestrians right-of-way',
    coverageFactIds: ['fact-pedestrian-white-canes']
  },
  {
    id: 'q69',
    category: 'Rules of the Road',
    questionText: 'What is the speed limit in a designated intersection or railway crossing with active crossing gates?',
    imageUrl: '',
    options: [
      '15 mph if visibility is obstructed.',
      'The speed limit of the matching highway.',
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
    sourceTopic: 'HOV lane usage requirements',
    coverageFactIds: ['fact-hov-lane-usage']
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
      'With multiple checkerboard horizontal speed bumps.'
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
      'A dedicated carpool or HOV assembly zone.'
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
      'Traffic going straight through on the through road has absolute right-of-way over vehicles turning in.',
      'The vehicle turning in has right-of-way over vehicles on the through road.',
      'The vehicle traveling at the faster speed has priority.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 4): At T-intersections, traffic going straight through on the through road has the absolute right-of-way over vehicles turning in.',
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
    coverageFactIds: ['fact-traffic-light-red', 'fact-traffic-light-red-arrow']
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
  }
];
