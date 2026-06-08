import * as fs from 'fs';
import * as path from 'path';

// Load facts and types
import { HANDBOOK_FACTS } from '../src/handbookFacts';

const dataContent = fs.readFileSync(path.resolve(process.cwd(), 'src/data.ts'), 'utf-8');

// Parse PRACTICE_QUESTIONS dynamically
const startIdx = dataContent.indexOf('export const PRACTICE_QUESTIONS');
if (startIdx === -1) {
  throw new Error("Could not find PRACTICE_QUESTIONS definition.");
}

const questionsText = dataContent.substring(startIdx);
const qRegex = /\{\s*id:\s*['"](q\d+)['"][\s\S]*?questionText:\s*['"]([\s\S]*?)['"][\s\S]*?explanation:\s*['"]([\s\S]*?)['"]/g;

interface SimplifiedQ {
  id: string;
  text: string;
  explanation: string;
}

const parsedQs: SimplifiedQ[] = [];
let match: any;
while ((match = qRegex.exec(questionsText)) !== null) {
  parsedQs.push({
    id: match[1],
    text: match[2],
    explanation: match[3]
  });
}

console.log(`Found ${parsedQs.length} questions parsed for matching.`);

// Keyword mappings based on factual contents
const factKeywords: { [factId: string]: string[] } = {
  'fact-provisional-curfew': ['11 p.m.', '11 p.m. and 5 a.m.', 'provisional driver', 'curfew'],
  'fact-provisional-passengers': ['passenger restriction', 'passengers under 20', 'provisional driver'],
  'fact-hearing-headset-dual-earplug': ['earplug', 'earplugs', 'headset', 'both ears'],
  'fact-signal-turn-100ft': ['100 feet before', 'signal at least 100'],
  'fact-signal-freeway-5seconds': ['5 seconds before changing', '5 seconds', 'freeway'],
  'fact-dim-beams-oncoming-500ft': ['500 feet', 'oncoming', 'dim high-beam'],
  'fact-dim-beams-following-300ft': ['300 feet', 'follow', 'following', 'high-beam'],
  'fact-headlights-dark-1000ft': ['1,000 feet', 'cannot see from 1,000 feet', 'too dark to see from 1,000'],
  'fact-headlights-after-sunset': ['30 minutes after sunset', 'after sunset'],
  'fact-headlights-before-sunrise': ['30 minutes before sunrise', 'before sunrise'],
  'fact-headlights-wipers-running': ['windshield wipers', 'wipers', 'rain, fog, or snow', 'low-beam'],
  'fact-double-solid-yellow-passing': ['double solid yellow', 'double yellow lines'],
  'fact-yellow-barrier-lines': ['barrier', 'two sets of solid double yellow', '2 or more feet apart'],
  'fact-center-left-turn-distance': ['center left turn', '200 feet in the center', '200 feet'],
  'fact-turnout-slow-vehicles': ['turnout', 'five or more", "driving slowly'],
  'fact-drive-bike-lane-limit': ['bicycle lane', 'bike lane', '200 feet of an intersection', 'turning'],
  'fact-bike-passing-clearance': ['3 feet', 'clearance', 'cyclist', 'bicyclist'],
  'fact-right-turn-red-light': ['right turn on a red', 'right turn against a red light'],
  'fact-right-turn-red-arrow': ['red arrow', 'right turn against a red arrow'],
  'fact-right-turn-bus-lane': ['bus lane', 'public transit', 'cross a bus lane'],
  'fact-left-turn-wheel-direction': ['wheels pointed', 'straight ahead', 'left turn'],
  'fact-left-turn-red-oneway': ['one-way street onto another one-way', 'one-way onto one-way'],
  'fact-uturn-residential-clearance': ['residential district', 'residential', 'approaching you within 200 feet', 'approaching vehicle'],
  'fact-uturn-divided-highway-barrier': ['divided highway', 'divider section', 'curb, strip of land'],
  'fact-uturn-visibility-distance': ['cannot see clearly for 200 feet', 'see clearly for 200 feet'],
  'fact-uturn-business-districts-rule': ['business districts', 'business district', 'businesses are'],
  'fact-t-intersection-rightofway': ['T-intersection', 'through road', 'intersection has the right-of-way'],
  'fact-merge-space-3sec': ['three seconds of space', '3 seconds of space'],
  'fact-exit-highway-signal': ['signal five seconds', 'signal 5 seconds', 'approximately 400 feet'],
  'fact-city-merge-halfblock': ['half a block', '150 feet'],
  'fact-highway-merge-fullblock': ['full block', '300 feet'],
  'fact-pass-on-right-allowed': ['passing on the right', 'pass on the right'],
  'fact-parking-curb-distance': ['parallel parking', '18 inches'],
  'fact-hill-parking-downhill': ['downhill', 'turn front wheels into public curb', 'wheels into the curb'],
  'fact-hill-parking-uphill': ['uphill', 'away from the curb'],
  'fact-hill-parking-nocurb': ['no curb', 'hill with no curb'],
  'fact-colored-curb-white': ['white curb', 'loading or unloading passengers'],
  'fact-colored-curb-green': ['green curb', 'limited time'],
  'fact-colored-curb-yellow': ['yellow curb', 'loading and unloading', 'freight'],
  'fact-colored-curb-red': ['red curb', 'no stopping, standing, or parking'],
  'fact-colored-curb-blue': ['blue curb', 'disabled'],
  'fact-illegal-parking-hydrant-distance': ['fire hydrant', '15 feet'],
  'fact-illegal-parking-crosswalk-distance': ['crosswalk', '20 feet of a crosswalk'],
  'fact-freeway-stuck-time': ['freeway for more than four hours', 'four hours'],
  'fact-le-stop-immigration': ['immigration', 'local officers from asking'],
  'fact-le-stop-required-docs': ['produce a driver license', 'proof of insurance', 'registration'],
  'fact-traffic-light-red': ['solid red light', 'red traffic signal'],
  'fact-traffic-light-red-arrow': ['red arrow'],
  'fact-traffic-light-flashing-red': ['flashing red'],
  'fact-traffic-light-solid-yellow': ['solid yellow', 'yellow traffic signal'],
  'fact-traffic-light-flashing-yellow': ['flashing yellow'],
  'fact-traffic-light-solid-green': ['solid green', 'yield to vehicles already'],
  'fact-traffic-light-broken': ['not working', 'blacked out'],
  'fact-ped-dont-walk-flashing': ['countdown', 'DONT WALK', 'flashing'],
  'fact-sign-stop': ['STOP sign', 'hexagonal'],
  'fact-sign-yield': ['YIELD sign', 'triangular'],
  'fact-sign-wrong-way-reflectors': ['reflectors', 'wrong way'],
  'fact-cross-railroad-yellow-circular': ['railroad crossing', 'circular'],
  'fact-school-zone-sign-5sided': ['school zone', 'pentagonal', '5-sided'],
  'fact-pedestrian-white-canes': ['white cane', 'guide dogs', 'white canes'],
  'fact-mountain-rightofway': ['mountain road', 'steep narrow road', 'uphill'],
  'fact-truck-no-zone-blind': ['No Zones', 'No Zone', 'truck driver\'s blind spots', 'side mirrors'],
  'fact-truck-stopping-distance-feet': ['loaded commercial truck', '300 feet', '400 feet'],
  'fact-truck-highway-lanes': ['towing', 'two lanes closest to the right', '3+ axles'],
  'fact-streetcar-safety-zone-speed': ['safety zone', '10 mph'],
  'fact-motorcyclist-following-distance': ['motorcycles', 'motorcycle', 'three-second following'],
  'fact-emergency-vehicle-red-sirens': ['emergency vehicle', 'pull to the right edge and stop'],
  'fact-emergency-vehicle-follow-distance': ['300 feet of an active', 'fire engine'],
  'fact-slow-moving-vehicle-speed': ['triangle on their back', 'slow-moving', '25 mph or less'],
  'fact-move-over-law-tows': ['Move Over', 'tow trucks'],
  'fact-hazmat-truck-railroad': ['hazardous', 'placard', 'stop before crossing railroad'],
  'fact-school-zone-speed-children': ['school zone', '25 mph within 500 feet'],
  'fact-school-bus-red-flashing': ['school bus', 'flashes red'],
  'fact-school-bus-divided-highway': ['divided', 'multi-lane highway', 'school bus'],
  'fact-school-bus-stop-violations': ['fine of up to $1,000', 'license suspension for up to one year', 'failing to stop'],
  'fact-blind-intersection-speed': ['blind intersection', '15 mph'],
  'fact-alley-speed-limit': ['alley', '15 mph'],
  'fact-railroad-obscured-speed': ['within 100 feet of a railroad crossing', 'obscured', '15 mph'],
  'fact-railroad-track-stop-distance': ['15 feet from the nearest'],
  'fact-business-residential-speed': ['business or residential', '25 mph'],
  'fact-smoke-minor-present': ['smoke', 'minor is in the vehicle'],
  'fact-passenger-cargo-side-limits': ['Cargo cannot extend', '6-inches'],
  'fact-windshield-electronic-toll-upper': ['toll', 'electronic toll', 'center uppermost'],
  'fact-evade-police-consequences': ['evade law enforcement', 'misdemeanor', 'county jail'],
  'fact-unlicensed-driver-impound': ['unlicensed driver', 'impounded for 30 days'],
  'fact-minor-violation-second-action': ['two at-fault collisions', '30 days unless accompanied'],
  'fact-minor-violation-third-action': ['three at-fault collisions', 'suspended for six months'],
  'fact-slick-roads-wet-speed': ['wet road', 'reduce your speed by 5 to 10'],
  'fact-slick-roads-snow-speed': ['packed snow', 'reduce your speed by half'],
  'fact-slick-roads-ice-speed': ['ice', 'reduce your speed to no more than 5'],
  'fact-bridge-overpass-freeze': ['freeze before the rest of the road', 'bridges', 'overpasses'],
  'fact-hydroplane-slow-gradual': ['hydroplane', 'lose contact with the road'],
  'fact-seatbelt-passenger-under-16': ['passenger under 16', 'seatbelt'],
  'fact-restraint-rear-facing-age2': ['rear-facing', 'under 2 years old'],
  'fact-restraint-under8-backseat': ['under 8', 'less than 4 feet 9 inches tall', 'rear seat'],
  'fact-restraint-height-4ft9-seats': ['at least 4 feet 9 inches tall', 'safety belt'],
  'fact-airbag-chest-clearance': ['10 inches from the airbag', 'airbagcover', 'breastbone'],
  'fact-unattended-child-age6': ['six years old or younger', 'unattended'],
  'fact-unattended-child-hot-vehicle': ['hot vehicle', 'windows, heat'],
  'fact-speed-basic-speed-law': ['Basic Speed Law', 'faster than is safe'],
  'fact-speed-freeway-limit-ideal': ['65 mph on highways', '55 mph on a two-lane'],
  'fact-stalled-tracks-train-approaching': ['tracks with a train approaching', 'diagonally away'],
  'fact-distracted-cell-adults-safety': ['hands-free mode', 'handheld cell phone'],
  'fact-dui-bike-minor-under21': ['13 to 20 years old', 'bicycling', 'delayed for one year'],
  'fact-bac-limit-adult-21': ['0.08% or higher', 'over 21 years old'],
  'fact-bac-limit-dui-probation': ['DUI probation', 'BAC of 0.01% or higher at any age'],
  'fact-bac-limit-commercial': ['0.04% or higher', 'commercial vehicle'],
  'fact-dui-record-retention-years': ['DUI conviction remains', '10 years'],
  'fact-dui-under21-carry-alcohol': ['under 21', 'carry unopened', 'carry alcoholic beverage'],
  'fact-insurance-minimum-liability-limits': ['$30,000', '$60,000', '$15,000', '30/60/15'],
  'fact-insurance-lack-suspension': ['without insurance', 'suspended for up to four years', 'proper insurance coverage'],
  'fact-hit-and-run-punishment': ['hit-and-run', 'Failing to stop immediately after causing'],
};

// Check matches
const qIdToFacts: { [qId: string]: string[] } = {
  q1: ['fact-traffic-light-flashing-yellow'],
  q2: ['fact-provisional-passengers'],
  q3: ['fact-provisional-curfew'],
  q4: ['fact-school-zone-speed-children'],
  q5: ['fact-center-left-turn-distance'],
  q6: ['fact-uturn-residential-clearance'],
  q7: ['fact-uturn-business-districts-rule'],
  q8: ['fact-hill-parking-downhill'],
  q9: ['fact-scan-road-10seconds'],
  q10: ['fact-right-turn-red-arrow'],
  q11: ['fact-turnout-slow-vehicles'],
  q12: ['fact-hov-motorcycle-lane'],
  q13: ['fact-drive-bike-lane-limit'],
  q14: ['fact-traffic-light-red-arrow'],
  q15: ['fact-pass-on-right-allowed'],
  q16: ['fact-exit-highway-signal'],
  q17: ['fact-right-turn-bus-lane'],
  q18: ['fact-pass-on-right-allowed'],
  q19: ['fact-uturn-visibility-distance'],
  q20: ['fact-uturn-divided-highway-barrier'],
  q21: ['fact-traffic-light-red'],
  q22: ['fact-traffic-light-solid-green'],
  q23: ['fact-truck-no-zone-blind'],
  q24: ['fact-emergency-vehicle-follow-distance'],
  q25: ['fact-sign-stop'],
  q26: ['fact-streetcar-safety-zone-speed'],
  q27: ['fact-dim-beams-oncoming-500ft'],
  q28: ['fact-flag-bumper-cargo-4feet'],
  q29: ['fact-traffic-light-flashing-red'],
  q30: ['fact-truck-stopping-distance-feet'],
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
  q41: ['fact-uturn-residential-clearance'],
  q42: ['fact-uturn-residential-clearance'],
  q43: ['fact-uturn-divided-highway-barrier'],
  q44: ['fact-uturn-divided-highway-barrier'],
  q45: ['fact-uturn-divided-highway-barrier'],
  q46: ['fact-uturn-visibility-distance'],
  q47: ['fact-uturn-visibility-distance'],
  q48: ['fact-uturn-visibility-distance'],
  q49: ['fact-uturn-visibility-distance'],
  q50: ['fact-uturn-business-districts-rule'],
  q51: ['fact-traffic-light-broken'],
  q52: ['fact-traffic-light-broken'],
  q53: ['fact-ped-dont-walk-flashing'],
  q54: ['fact-hill-parking-uphill'],
  q55: ['fact-hill-parking-uphill'],
  q56: ['fact-hill-parking-uphill'],
  q57: ['fact-hill-parking-downhill'],
  q58: ['fact-traffic-light-solid-green'],
  q59: ['fact-hill-parking-downhill'],
  q60: ['fact-traffic-light-broken'],
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
  q83: ['fact-hill-parking-downhill'],
  q84: ['fact-hill-parking-downhill'],
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
  q96: ['fact-mountain-rightofway'],
  q97: ['fact-mountain-rightofway'],
  q98: ['fact-bac-limit-under-21'],
  q99: ['fact-pedestrian-white-canes'],
  q100: ['fact-dui-open-container-vehicle'],
  q101: ['fact-single-yellow-line'],
  q102: ['fact-single-yellow-line'],
  q103: ['fact-yellow-barrier-lines'],
  q104: ['fact-center-left-turn-distance'],
  q105: ['fact-turnout-slow-vehicles'],
  q106: ['fact-broken-yellow-line'],
  q107: ['fact-hov-motorcycle-lane'],
  q108: ['fact-hov-motorcycle-lane'],
  q109: ['fact-double-solid-white-lines'],
  q110: ['fact-broken-yellow-line'],
  q111: ['fact-headlights-dark-1000ft'],
  q112: ['fact-headlights-wipers-running'],
  q113: ['fact-headlights-after-sunset'],
  q114: ['fact-headlights-before-sunrise'],
  q115: ['fact-class-c-license'],
  q116: ['fact-class-c-license'],
  q117: ['fact-skid-release-accelerator-no-brakes'],
  q118: ['fact-windshield-lower-corner-passenger'],
  q119: ['fact-windshield-lower-corner-driver'],
  q120: ['fact-class-c-license'],
  q121: ['fact-distracted-cell-minors-rules'],
  q122: ['fact-distracted-cell-minors-rules'],
  q123: ['fact-hearing-headset-dual-earplug'],
  q124: ['fact-animal-abandonment-highway'],
  q125: ['fact-scan-road-10seconds'],
  q126: ['fact-signal-curb-side'],
  q127: ['fact-skid-release-accelerator-no-brakes'],
  q128: ['fact-pickup-cargo-bed-seats'],
  q129: ['fact-uturn-visibility-distance'],
  q130: ['fact-skid-release-accelerator-no-brakes'],
  q131: ['fact-pass-on-right-allowed'],
  q132: ['fact-parking-curb-distance'],
  q134: ['fact-sign-yield'],
  q135: ['fact-sign-yield'],
  q136: ['fact-exit-highway-signal'],
  q137: ['fact-hill-parking-uphill'],
  q138: ['fact-emergency-flashers-hazard'],
  q139: ['fact-uturn-residential-clearance'],
  q140: ['fact-uturn-residential-clearance'],
  q141: ['fact-uturn-residential-clearance'],
  q142: ['fact-signal-turn-100ft'],
  q143: ['fact-signal-empty-road'],
  q144: ['fact-signal-freeway-5seconds'],
  q145: ['fact-mountain-rightofway'],
  q146: ['fact-class-c-license']
};

const highPriorityFacts = HANDBOOK_FACTS.filter(f => f.priority === 'high');

const factToQs: { [factId: string]: string[] } = {};
HANDBOOK_FACTS.forEach(f => {
  factToQs[f.id] = [];
});

parsedQs.forEach(q => {
  // Let's check manual map first
  const manualFacts = qIdToFacts[q.id] || [];
  manualFacts.forEach(factId => {
    if (factToQs[factId] && !factToQs[factId].includes(q.id)) {
      factToQs[factId].push(q.id);
    }
  });

  // Let's check keyword maps as well!
  for (const [factId, keywords] of Object.entries(factKeywords)) {
    const qMatches = keywords.some(k => 
      q.text.toLowerCase().includes(k.toLowerCase()) || 
      q.explanation.toLowerCase().includes(k.toLowerCase())
    );
    if (qMatches && factToQs[factId] && !factToQs[factId].includes(q.id)) {
      factToQs[factId].push(q.id);
    }
  }
});

// Analyze how many high priority facts are uncovered
const highPriorityUncovered = highPriorityFacts.filter(f => factToQs[f.id].length === 0);
console.log(`\nUncovered high-priority count: ${highPriorityUncovered.length}`);
highPriorityUncovered.forEach(f => {
  console.log(`- ${f.id}: "${f.fact}"`);
});
