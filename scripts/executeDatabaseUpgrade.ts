import * as fs from 'fs';
import * as path from 'path';

// Definition of the original 21 questions we added
const firstAppended = [
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
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 12,
    sourceTopic: 'Right turn on red light rules',
    coverageFactIds: ['fact-right-turn-red-light', 'fact-traffic-light-red']
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
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 13,
    sourceTopic: 'Left turn against red light on one-way streets',
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
    sourceSection: 'Section 5: Laws and Rules of the Road',
    sourcePage: 23,
    sourceTopic: 'Immigration questions on traffic stop',
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
    sourceTopic: 'Wrong way red reflector warn rules',
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
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 39,
    sourceTopic: 'Railroad track stop distance limits',
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
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 40,
    sourceTopic: 'Smoking inside vehicle when minor present',
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
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 40,
    sourceTopic: 'Passenger vehicle side cargo extension limits',
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
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 41,
    sourceTopic: 'Windshield upper electronic toll device location',
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
    sourceSection: 'Section 6: Safe Driving',
    sourcePage: 41,
    sourceTopic: 'Unlicensed driver car impound timeline',
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
    sourceSection: 'Section 2: Getting a Driver’s License',
    sourcePage: 42,
    sourceTopic: 'Minor second violation 30days restriction',
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
    sourceSection: 'Section 2: Getting a Driver’s License',
    sourcePage: 42,
    sourceTopic: 'Minor third violation six months suspension',
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
    sourceTopic: 'Bridges and overpasses freeze early rules',
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
    sourceTopic: 'Unattended children pets in hot vehicle rule',
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
    sourceTopic: 'Basic speed law rules',
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
    sourceTopic: 'Maximum undivided highway speed limits',
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
    sourceTopic: 'Stalled tracks train approaching rules',
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
    sourceTopic: 'Distracted adult cell phone handsfree rules',
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
    sourceSection: 'Section 9: Alcohol and Drugs',
    sourcePage: 55,
    sourceTopic: 'DUI bicycling conviction minor age limit',
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
    sourceSection: 'Section 9: Alcohol and Drugs',
    sourcePage: 57,
    sourceTopic: 'DUI record retention years active record',
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
    sourceSection: 'Section 10: Financial Responsibility',
    sourcePage: 58,
    sourceTopic: 'Lack of insurance collision suspension up to 4years',
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
    sourceSection: 'Section 10: Financial Responsibility',
    sourcePage: 59,
    sourceTopic: 'Hit and run severe penalty',
    coverageFactIds: ['fact-hit-and-run-punishment']
  }
];

// Definitions of the 14 second appended questions
const secondAppended = [
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
    sourceSection: 'Section 5: Laws and Rules of the Road',
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
    sourceSection: 'Section 6: Safe Driving',
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
    sourceSection: 'Section 6: Safe Driving',
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
    sourceSection: 'Section 6: Safe Driving',
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
    sourceSection: 'Section 6: Safe Driving',
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
    sourceSection: 'Section 9: Alcohol and Drugs',
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
    sourceSection: 'Section 10: Financial Responsibility',
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
    sourceSection: 'Section 9: Alcohol and Drugs',
    sourcePage: 56,
    sourceTopic: 'DUI probation blood alcohol limits',
    coverageFactIds: ['fact-bac-limit-dui-probation']
  }
];

// Definitions of the 8 final questions to achieve 100% full atomic coverage of high priority / missing items
const finalAppended = [
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
    sourceSection: 'Section 6: Safe Driving',
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
    optionsRaw: [
      '15 mph.',
      '20 mph.',
      '25 mph.',
      '35 mph.'
    ],
    correctOptionIndexParsed: 2, // '25 mph' is correct index
    explanation: 'California Handbook (Section 6, Speed Limits): The speed limit in any business or residential district in California is 25 mph unless otherwise posted.',
    testGroup: 34,
    sourceSection: 'Section 6: Safe Driving',
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
    sourceSection: 'Section 5: Laws and Rules of the Road',
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
  }
];

// Mappings for existing questions 1 to 146
const fullQMap: { [qId: string]: string[] } = {
  q1: ['fact-traffic-light-flashing-yellow'],
  q2: ['fact-provisional-passengers'],
  q3: ['fact-provisional-curfew'],
  q4: ['fact-school-zone-speed-children'],
  q5: ['fact-turnout-slow-vehicles'],
  q6: ['fact-hill-parking-downhill'],
  q7: ['fact-colored-curb-yellow'],
  q8: ['fact-school-bus-stop-violations'],
  q9: ['fact-insurance-minimum-liability-limits'],
  q10: ['fact-right-turn-red-arrow'],
  q11: ['fact-turnout-slow-vehicles'],
  q12: ['fact-hov-motorcycle-lane'],
  q13: ['fact-drive-bike-lane-limit'],
  q14: ['fact-traffic-light-red-arrow'],
  q15: ['fact-pass-on-right-allowed'],
  q16: ['fact-exit-highway-signal'],
  q17: ['fact-uturn-residential-clearance'],
  q18: ['fact-pass-on-right-allowed'],
  q19: ['fact-uturn-visibility-distance'],
  q20: ['fact-uturn-divided-highway-barrier'],
  q21: ['fact-slick-roads-wet-speed'],
  q22: ['fact-slick-roads-snow-speed'],
  q23: ['fact-bac-limit-adult-21'],
  q24: ['fact-emergency-vehicle-follow-distance'],
  q25: ['fact-unattended-child-age6'],
  q26: ['fact-streetcar-safety-zone-speed'],
  q27: ['fact-dim-beams-oncoming-500ft'],
  q28: ['fact-flag-bumper-cargo-4feet'],
  q29: ['fact-skid-release-accelerator-no-brakes'],
  q30: ['fact-bac-limit-commercial'],
  q31: ['fact-provisional-exception-medical'],
  q32: ['fact-provisional-exception-school'],
  q33: ['fact-signal-turn-100ft'],
  q34: ['fact-hand-signal-left-arm'],
  q35: ['fact-hand-signal-right-arm'],
  q36: ['fact-hand-signal-slow-stop-arm'],
  q37: ['fact-signal-freeway-5seconds'],
  q38: ['fact-headlights-after-sunset'],
  q39: ['fact-headlights-before-sunrise'],
  q40: ['fact-dim-beams-following-300ft'],
  q41: ['fact-hill-parking-uphill'],
  q42: ['fact-hill-parking-nocurb'],
  q43: ['fact-colored-curb-white'],
  q44: ['fact-colored-curb-green'],
  q45: ['fact-colored-curb-red'],
  q46: ['fact-uturn-visibility-distance'],
  q47: ['fact-uturn-visibility-distance'],
  q48: ['fact-uturn-visibility-distance'],
  q49: ['fact-uturn-visibility-distance'],
  q50: ['fact-colored-curb-blue'],
  q51: ['fact-restraint-rear-facing-age2'],
  q52: ['fact-restraint-under8-backseat'],
  q53: ['fact-restraint-under8-backseat'],
  q54: ['fact-blind-intersection-speed'],
  q55: ['fact-hill-parking-uphill'],
  q56: ['fact-hill-parking-uphill'],
  q57: ['fact-school-bus-divided-highway'],
  q58: ['fact-restraint-height-4ft9-seats'],
  q59: ['fact-school-bus-stop-violations'],
  q60: ['fact-restraint-under8-backseat'],
  q61: ['fact-truck-no-zone-blind'],
  q62: ['fact-mountain-rightofway'],
  q63: ['fact-collision-report-sr1-dmv'],
  q64: ['fact-dui-test-refusal'],
  q65: ['fact-skid-release-accelerator-no-brakes'],
  q66: ['fact-truck-no-zone-blind'],
  q67: ['fact-pedestrian-white-canes'],
  q68: ['fact-pedestrian-white-canes'],
  q69: ['fact-hill-parking-uphill'],
  q70: ['fact-tailgate-three-second-rule'],
  q71: ['fact-provisional-curfew'],
  q72: ['fact-provisional-passengers'],
  q73: ['fact-class-c-license'],
  q74: ['fact-class-c-license'],
  q75: ['fact-instruction-permit-btw'],
  q76: ['fact-knowledge-btw-tests'],
  q77: ['fact-knowledge-btw-tests'],
  q78: ['fact-instruction-permit-btw'],
  q79: ['fact-knowledge-btw-tests'],
  q80: ['fact-colored-curb-green'],
  q81: ['fact-drive-bike-lane-limit'],
  q82: ['fact-school-zone-speed-children'],
  q83: ['fact-school-bus-red-flashing'],
  q84: ['fact-school-bus-divided-highway'],
  q85: ['fact-slow-moving-vehicle-speed'],
  q86: ['fact-parking-curb-distance'],
  q87: ['fact-bike-passing-clearance'],
  q88: ['fact-move-over-law-tows'],
  q89: ['fact-colored-curb-white'],
  q90: ['fact-turnout-slow-vehicles'],
  q91: ['fact-truck-no-zone-blind'],
  q92: ['fact-mountain-rightofway'],
  q93: ['fact-dui-test-refusal'],
  q94: ['fact-dui-open-container-vehicle'],
  q95: ['fact-dui-test-refusal'],
  q96: ['fact-dui-open-container-vehicle'],
  q97: ['fact-dui-under21-carry-alcohol'],
  q98: ['fact-bac-limit-under-21'],
  q99: ['fact-dui-test-refusal'],
  q100: ['fact-dui-open-container-vehicle'],
  q101: ['fact-double-solid-yellow-passing'],
  q102: ['fact-single-yellow-line'],
  q103: ['fact-yellow-barrier-lines'],
  q104: ['fact-center-left-turn-distance'],
  q105: ['fact-turnout-slow-vehicles'],
  q106: ['fact-double-solid-white-lines'],
  q107: ['fact-center-left-turn-distance'],
  q108: ['fact-center-left-turn-distance'],
  q109: ['fact-double-solid-white-lines'],
  q110: ['fact-broken-yellow-line'],
  q111: ['fact-headlights-dark-1000ft'],
  q112: ['fact-headlights-wipers-running'],
  q113: ['fact-dim-beams-following-300ft'],
  q114: ['fact-headlights-wipers-running'],
  q115: ['fact-class-c-license'],
  q116: ['fact-class-c-license'],
  q117: ['fact-skid-release-accelerator-no-brakes'],
  q118: ['fact-windshield-lower-corner-passenger'],
  q119: ['fact-windshield-lower-corner-driver'],
  q120: ['fact-class-c-license'],
  q121: ['fact-distracted-cell-minors-rules'],
  q122: ['fact-distracted-cell-adults-safety'],
  q123: ['fact-hearing-headset-dual-earplug'],
  q124: ['fact-animal-abandonment-highway'], // MAPPED DIRECTLY!
  q125: ['fact-insurance-minimum-liability-limits'],
  q126: ['fact-skid-release-accelerator-no-brakes'],
  q127: ['fact-collision-report-sr1-dmv'],
  q128: ['fact-pickup-cargo-bed-seats'],
  q129: ['fact-illegal-parking-hydrant-distance', 'fact-illegal-parking-crosswalk-distance'],
  q130: ['fact-skid-release-accelerator-no-brakes'],
  q131: ['fact-mountain-rightofway'],
  q132: ['fact-hydroplane-slow-gradual'],
  q133: ['fact-class-c-license'],
  q134: ['fact-blind-intersection-speed'],
  q135: ['fact-alley-speed-limit'],
  q136: ['fact-railroad-track-stop-distance'],
  q137: ['fact-railroad-obscured-speed'],
  q138: ['fact-scan-road-10seconds'],
  q139: ['fact-hill-parking-downhill'],
  q140: ['fact-hill-parking-uphill'],
  q141: ['fact-hill-parking-nocurb'],
  q142: ['fact-hand-signal-left-arm'],
  q143: ['fact-hand-signal-right-arm'],
  q144: ['fact-hand-signal-slow-stop-arm'],
  q145: ['fact-dui-open-container-vehicle'],
  q146: ['fact-class-c-license']
};

const dataFilePath = path.resolve(process.cwd(), 'src/data.ts');
let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

// Find the position of PRACTICE_QUESTIONS
const headerTerm = 'export const PRACTICE_QUESTIONS: Question[] = [';
const startIdx = dataContent.indexOf(headerTerm);
if (startIdx === -1) {
  console.error("Could not find start of PRACTICE_QUESTIONS");
  process.exit(1);
}

// Extract everything before export const PRACTICE_QUESTIONS
const filePreamble = dataContent.substring(0, startIdx);

// Parse existing questions text
const questionsPart = dataContent.substring(startIdx + headerTerm.length);
const questionBlocks = questionsPart.split(/id:\s*['"](q\d+)['"]/g);

const rebuiltQuestions: string[] = [];

// Helper function to robustly extract fields with optional escaped single/double quotes
function extractField(body: string, name: string): string {
  const startKey = name + ":";
  const keyIdx = body.indexOf(startKey);
  if (keyIdx === -1) return '';
  
  // Find the opening quote (could be ' or ")
  const quotePairIdx = body.indexOf("'", keyIdx + startKey.length);
  const doubleQuotePairIdx = body.indexOf('"', keyIdx + startKey.length);
  
  let qChar = "'";
  let startQuoteIdx = quotePairIdx;
  if (startQuoteIdx === -1 || (doubleQuotePairIdx !== -1 && doubleQuotePairIdx < startQuoteIdx)) {
    qChar = '"';
    startQuoteIdx = doubleQuotePairIdx;
  }
  if (startQuoteIdx === -1) return '';
  
  // Scan character-by-character for the closing quote and unescape
  let result = '';
  for (let i = startQuoteIdx + 1; i < body.length; i++) {
    const char = body[i];
    if (char === '\\') {
      if (i + 1 < body.length) {
        const nextChar = body[i + 1];
        if (nextChar === qChar || nextChar === '\\') {
          result += nextChar; // Only add the escaped character, skip backslash
        } else {
          result += '\\' + nextChar; // Keep backslash for other escapes (like \n, \t)
        }
        i++;
      } else {
        result += '\\';
      }
    } else if (char === qChar) {
      break; // End of string!
    } else {
      result += char;
    }
  }
  return result;
}

// Parse only original questions q1 to q146 from the string
for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";
  
  const idNum = parseInt(qId.replace('q', ''), 10);
  if (idNum > 146) {
    // Skip old appends to cleanly recreate them below
    continue;
  }

  // Parse fields
  const category = extractField(qBody, 'category');
  let text = extractField(qBody, 'questionText');
  const correctIdx = (qBody.match(/correctOptionIndex:\s*(\d)/) || ['', '0'])[1].trim();
  let explanation = extractField(qBody, 'explanation');
  const testGroup = (qBody.match(/testGroup:\s*(\d+)/) || ['', '12'])[1];
  const section = extractField(qBody, 'sourceSection');
  const page = (qBody.match(/sourcePage:\s*(\d+)/) || ['', '0'])[1];
  const topic = extractField(qBody, 'sourceTopic');

  const optionsBlockM = qBody.match(/options:\s*\[([\s\S]*?)\]/);

  let optionsStr = '';
  if (optionsBlockM) {
    optionsStr = optionsBlockM[1].trim();
  }

  // Handle special revision for q124 about animal abandonment
  if (qId === 'q124') {
    text = 'Is it illegal under California law to dump or abandon any animal on a highway, and what is the maximum penalty?';
    optionsStr = `      'It is only illegal inside city limits, carrying a standard $100 fine.',
      'It is a misdemeanor carrying a fine of up to $1,000, six months in county jail, or both.',
      'It is a minor infraction, carrying a warning letter and a local safety class fee.',
      'It is completely legal on unpaved roadway shoulders or farm roads.'`;
    explanation = 'California Handbook (Section 6, Laws and Rules): Dumping or abandoning an animal on a highway is a misdemeanor punishable by a fine of up to $1,000, six months in county jail, or both.';
  }

  const mappedFacts = fullQMap[qId] || ['fact-class-c-license'];
  const factsString = mappedFacts.map(f => `'${f}'`).join(', ');

  const qStr = `  {
    id: '${qId}',
    category: '${category.replace(/'/g, "\\'")}',
    questionText: '${text.replace(/'/g, "\\'")}',
    imageUrl: '',
    options: [
      ${optionsStr}
    ],
    correctOptionIndex: ${correctIdx},
    explanation: '${explanation.replace(/'/g, "\\'")}',
    testGroup: ${testGroup},
    sourceSection: '${section.replace(/'/g, "\\'")}',
    sourcePage: ${page},
    sourceTopic: '${topic.replace(/'/g, "\\'")}',
    coverageFactIds: [${factsString}]
  }`;

  rebuiltQuestions.push(qStr);
}

// Format the 21 first appends as string objects
firstAppended.forEach(q => {
  const optionsStr = q.options.map(o => `      '${o.replace(/'/g, "\\'")}'`).join(',\n');
  const questStr = `  {
    id: '${q.id}',
    category: '${q.category}',
    questionText: '${q.questionText.replace(/'/g, "\\'")}',
    imageUrl: '',
    options: [
\n${optionsStr}\n    ],
    correctOptionIndex: ${q.correctOptionIndex},
    explanation: '${q.explanation.replace(/'/g, "\\'")}',
    testGroup: ${q.testGroup},
    sourceSection: '${q.sourceSection}',
    sourcePage: ${q.sourcePage},
    sourceTopic: '${q.sourceTopic}',
    coverageFactIds: [${q.coverageFactIds.map(f => `'${f}'`).join(', ')}]
  }`;
  rebuiltQuestions.push(questStr);
});

// Format the 14 second appends as string objects
secondAppended.forEach(q => {
  const optionsStr = q.options.map(o => `      '${o.replace(/'/g, "\\'")}'`).join(',\n');
  const questStr = `  {
    id: '${q.id}',
    category: '${q.category}',
    questionText: '${q.questionText.replace(/'/g, "\\'")}',
    imageUrl: '',
    options: [
\n${optionsStr}\n    ],
    correctOptionIndex: ${q.correctOptionIndex},
    explanation: '${q.explanation.replace(/'/g, "\\'")}',
    testGroup: ${q.testGroup},
    sourceSection: '${q.sourceSection}',
    sourcePage: ${q.sourcePage},
    sourceTopic: '${q.sourceTopic}',
    coverageFactIds: [${q.coverageFactIds.map(f => `'${f}'`).join(', ')}]
  }`;
  rebuiltQuestions.push(questStr);
});

// Format the 8 final appends as string objects to cover remainings
finalAppended.forEach(q => {
  const optionsStr = q.options.map(o => `      '${o.replace(/'/g, "\\'")}'`).join(',\n');
  const questStr = `  {
    id: '${q.id}',
    category: '${q.category}',
    questionText: '${q.questionText.replace(/'/g, "\\'")}',
    imageUrl: '',
    options: [
\n${optionsStr}\n    ],
    correctOptionIndex: ${q.correctOptionIndex},
    explanation: '${q.explanation.replace(/'/g, "\\'")}',
    testGroup: ${q.testGroup},
    sourceSection: '${q.sourceSection}',
    sourcePage: ${q.sourcePage},
    sourceTopic: '${q.sourceTopic}',
    coverageFactIds: [${q.coverageFactIds.map(f => `'${f}'`).join(', ')}]
  }`;
  rebuiltQuestions.push(questStr);
});

console.log(`Rebuilding src/data.ts with ${rebuiltQuestions.length} total questions...`);

// Assemble upgraded src/data.ts
const upgradedDataText = `${filePreamble}${headerTerm}\n${rebuiltQuestions.join(',\n')}\n];\n`;

fs.writeFileSync(dataFilePath, upgradedDataText, 'utf-8');
console.log("Database src/data.ts successfully upgraded!");
