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
  readinessScore: 65,
  questionsAnsweredToday: 15,
  dailyGoal: 30,
  streakDays: 3,
  practiceTimeMin: 45,
  accuracyPercent: 84,
  rankText: 'Top 35%',
  totalTestsTaken: 11,
  masteredSignsCount: 18,
  userName: 'California Driver',
  hasActualActivity: false,
  categoryScores: {
    rulesOfRoad: 72,
    signsSignals: 68,
    safeDriving: 78,
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
  // ==================== TEST 12: SIGNALS & RIGHT OF WAY (Core Rules) ====================
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
    testGroup: 12
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
    testGroup: 12
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
    testGroup: 12
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
    testGroup: 12
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
    testGroup: 12
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
    testGroup: 12
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
    testGroup: 12
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
    testGroup: 12
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
    testGroup: 12
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
    testGroup: 12
  },

  // ==================== TEST 13: HIGH-SPEED MERGING & FREEWAYS ====================
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
    testGroup: 13
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
    testGroup: 13
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
    testGroup: 13
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
    testGroup: 13
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
    testGroup: 13
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
    testGroup: 13
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
    testGroup: 13
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
    testGroup: 13
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
    testGroup: 13
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
    testGroup: 13
  },

  // ==================== TEST 14: EMERGENCY ACTIONS & INCLEMENT WEATHER ====================
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
    testGroup: 14
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
    testGroup: 14
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
    testGroup: 14
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
    testGroup: 14
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
    testGroup: 14
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
    testGroup: 14
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
    testGroup: 14
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
    explanation: 'California Handbook (Section 5, Cargo Extension): Cargo that extends more than 4 feet from the back-rear bumper must display a 12-inch red or fluorescent orange square flag, or two red headlights at night.',
    testGroup: 14
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
    testGroup: 14
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
    testGroup: 14
  },

  // ==================== TEST 15: MINOR RESTRICTIONS & SIGNALING RULES ====================
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
    testGroup: 15
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
    testGroup: 15
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
    testGroup: 15
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
    testGroup: 15
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
    testGroup: 15
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
    testGroup: 15
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
    testGroup: 15
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
    testGroup: 15
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
    testGroup: 15
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
    testGroup: 15
  },

  // ==================== TEST 16: PARKING LAWS, COLORED CURBS & SPACING ====================
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
    testGroup: 16
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
    testGroup: 16
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
    testGroup: 16
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
    testGroup: 16
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
    testGroup: 16
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
    testGroup: 16
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
    testGroup: 16
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
    testGroup: 16
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
    testGroup: 16
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
    testGroup: 16
  },

  // ==================== TEST 17: SEAT BELTS, CHILD SAFETY & SPEED LIMITS ====================
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
    testGroup: 17
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
    testGroup: 17
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
    testGroup: 17
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
    testGroup: 17
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
    testGroup: 17
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
    testGroup: 17
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
    testGroup: 17
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
    testGroup: 17
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
    testGroup: 17
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
    testGroup: 17
  },

  // ==================== TEST 18: DUI PROBATION, CHEMICAL TESTS & COLLISIONS ====================
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
    testGroup: 18
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
    testGroup: 18
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
    testGroup: 18
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
    testGroup: 18
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
    testGroup: 18
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
    testGroup: 18
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
    testGroup: 18
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
    testGroup: 18
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
    testGroup: 18
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
    testGroup: 18
  },

  // ==================== TEST 19: LICENSING, PERMITS & ADMIN RULES ====================
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
    explanation: 'California Handbook (Section 1, Provisional License Restrictions): During the first 12 months after license issuance, provisional drivers under age 18 cannot drive between 11 PM and 5 AM unless supervised by a licensed parent/guardian, driver age 25+, or certified trainer.',
    testGroup: 19
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
    explanation: 'California Handbook (Section 1, Provisional License Restrictions): During your first 12 months, you cannot transport passengers under 20 years of age unless accompanied by a licensed parent, guardian, or driver age 25+.',
    testGroup: 19
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
    explanation: 'California Handbook (Section 4, Address Changes): You must notify the DMV of a change of residential address within 10 days.',
    testGroup: 19
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
    explanation: 'California Handbook (Section 10, Vehicle Registration): You must notify the DMV within 5 days of selling or transferring ownership of a vehicle by submitting a Notice of Transfer and Release of Liability (NRL).',
    testGroup: 19
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
    testGroup: 19
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
    explanation: 'California Handbook (Section 1, Written Exam Limits): Minor applicants who fail the written driver\'s license exam must wait 1 week (7 days) before they can retake the test.',
    testGroup: 19
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
    explanation: 'California Handbook (Section 1, Driving Exam Retake): If you fail the behind-the-wheel driving test, there is a mandatory 2-week (14 days) waiting period before you can attempt it again, and you must pay a retest fee.',
    testGroup: 19
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
    explanation: 'California Handbook (Section 1, Minors Permit Application): Parents or legal guardians must sign the application assuming joint and several civil liability for any accidents involving the minor provisional driver.',
    testGroup: 19
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
    explanation: 'California Handbook (Section 1, Written Exam): Your application fee allows you up to 3 attempts to pass the written knowledge exam within a 12-month period. If you fail 3 times, you must submit a new application fee.',
    testGroup: 19
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
    explanation: 'California Handbook (Section 10, Safe Driving Rules): Dumping or abandoning an animal on a highway is a misdemeanor punishable by a fine of up to $1,000, 6 months in jail, or both.',
    testGroup: 19
  },

  // ==================== TEST 20: SHARING THE ROAD & SPECIAL HAZARDS ====================
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
    testGroup: 20
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
    testGroup: 20
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
    testGroup: 20
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
    testGroup: 20
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
    testGroup: 20
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
    testGroup: 20
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
    testGroup: 20
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
    testGroup: 20
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
    explanation: 'California Handbook (Section 10, Evading Law Enforcement): Evading a peace officer is a misdemeanor punishable by imprisonment in a county jail for up to 1 year.',
    testGroup: 20
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
    testGroup: 20
  },

  // ==================== TEST 21: ALCOHOL LIMITS, BAC & ADMIN PENALTIES ====================
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
    testGroup: 21
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
    testGroup: 21
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
    testGroup: 21
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
    testGroup: 21
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
    testGroup: 21
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
    testGroup: 21
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
    testGroup: 21
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
    testGroup: 21
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
    testGroup: 21
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
    testGroup: 21
  },

  // ==================== TEST 22: TRAFFIC LANES, LINE MARKINGS & COLORED PAVEMENT ====================
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
    testGroup: 22
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
    testGroup: 22
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
    testGroup: 22
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
    testGroup: 22
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
    testGroup: 22
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
    testGroup: 22
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
    testGroup: 22
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
    testGroup: 22
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
    testGroup: 22
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
    testGroup: 22
  },

  // ==================== TEST 23: CRUCIAL VEHICLE SAFETY EQUIPMENT & MAINTENANCE RULES ====================
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
    testGroup: 23
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
    testGroup: 23
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
    testGroup: 23
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
    testGroup: 23
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
    testGroup: 23
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
    testGroup: 23
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
    testGroup: 23
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
    explanation: 'California Handbook (Section 10, Equipment Rules): A cracked or damaged windshield impairs safe vision and can fail to support the roof during a rollover crash.',
    testGroup: 23
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
    testGroup: 23
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
    testGroup: 23
  },

  // ==================== TEST 24: MISCELLANEOUS LAWS, CELL PHONES & KEY FINANCIAL OBLIGATIONS ====================
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
    testGroup: 24
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
    testGroup: 24
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
    explanation: 'California Handbook (Section 10, Safe Driving): Drivers and bicyclists are legally prohibited from wearing earplugs or headsets in both ears while on public roads.',
    testGroup: 24
  },
  {
    id: 'q124',
    category: 'Safe Driving',
    questionText: 'If you are caught littering or throwing lighted cigarette matches/filters from a vehicle on a California road, what is the penalty?',
    imageUrl: '',
    options: [
      'A verbal warning from a parking enforcement officer.',
      'A fine of up to $1,000, and you may be required to clean up roadside litter.',
      'An automatic suspension of your driver\'s license for 30 days.',
      'Your insurance premium is doubled for 5 years.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 10, Littering): Littering or throwing lit smoking materials is an infraction carrying a fine up to $1,000 and mandatory community litter cleanup.',
    testGroup: 24
  },
  {
    id: 'q125',
    category: 'Rules of the Road',
    questionText: 'In California, every motor vehicle operated on public roadways must meet "Financial Responsibility" insurance requirements. What are the minimum coverage limits?',
    imageUrl: '',
    options: [
      '$5,000/$10,000/$2,000',
      '$15,000 for single bodily injury, $30,000 for multiple injury, and $5,000 for property damage.',
      '$50,000 for single liability, and $100,000 for complete coverage.',
      'Must carry comprehensive and collision coverage, regardless of vehicle value.'
    ],
    correctOptionIndex: 1,
    explanation: 'California Handbook (Section 10, Insurance): Minimum physical liability requirements are $15k per person injured, $30k per accident for all persons injured, and $5k for property damage (often annotated as 15/30/5).',
    testGroup: 24
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
    testGroup: 24
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
    testGroup: 24
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
    testGroup: 24
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
    testGroup: 24
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
    testGroup: 24
  },

  // ==================== TEST 25: SPECIAL ROADS, POINT SYSTEMS & EMERGENCY HANDLING ====================
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
    testGroup: 25
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
    testGroup: 25
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
    testGroup: 25
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
    testGroup: 25
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
    testGroup: 25
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
    testGroup: 25
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
    testGroup: 25
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
    testGroup: 25
  },

  // ==================== TEST 26: HILL PARKING, HAND SIGNALS & SPECIAL RIGHTS ====================
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
    testGroup: 26
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
    testGroup: 26
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
    testGroup: 26
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
    testGroup: 26
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
    testGroup: 26
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
    testGroup: 26
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
    testGroup: 26
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
    testGroup: 26
  }
];
