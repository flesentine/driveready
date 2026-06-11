/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RoadSign } from '../types';

export const FREE_TEST_GROUPS = [12, 13];
export const FREE_SIGN_LIMIT = 12;
export const FREE_FLASHCARD_LIMIT = 12;

export interface PracticeTestData {
  group: number;
  testNumber: number;
  title: string;
  focus: string;
  qCount: number;
  time: string;
}

/**
 * All practice tests in the application.
 */
export const PRACTICE_TESTS: PracticeTestData[] = [
  {
    group: 12,
    testNumber: 1,
    title: "Signals & Right of Way",
    focus: "Flashing yellow warning signals, provisional minor limitations, intersection yields, and liability insurance.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 13,
    testNumber: 2,
    title: "Highway Merging & Lane Laws",
    focus: "Bicyclist clearance boundaries, center turn lane rules, steep mountain prioritization, and freeway entries.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 14,
    testNumber: 3,
    title: "Emergency Actions & DUI Rules",
    focus: "Stopping speeds in adverse wet environments, medical emergency spacing, and standard container/cargo dimensions.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 15,
    testNumber: 4,
    title: "Minor Exemptions & Signaling",
    focus: "Emergency physician curfews, principal schooling notes, 3-second/5-second lane change signaling, and hand-turn shapes.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 16,
    testNumber: 5,
    title: "Colored Curbs & Parking Altitudes",
    focus: "Uphill curbs, downhill curbs, white passenger loading, green limits, blue handicap spaces, and fire station hydrant boundaries.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 17,
    testNumber: 6,
    title: "Seatbelts, Safety & Speed Limits",
    focus: "Rear-seat boosters, under-2 year infant weights, front airbag clearance, blind junctions, alleys, and divided bus stops.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 18,
    testNumber: 7,
    title: "DUI Probation, Chemical Tests & Collisions",
    focus: "Zero tolerance under 21, sealed bottle trunk guidelines, chemical refusal suspensions, and DMV SR-1 collision parameters.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 19,
    testNumber: 8,
    title: "Licensing, Permits & Admin Rules",
    focus: "Minor provisional restrictions, driving curfews, permit supervision ages, address changes, and animal abandonment laws.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 20,
    testNumber: 9,
    title: "Sharing the Road & Special Hazards",
    focus: "3-foot bicycle clearance, school speed limits, multi-lane bus stopping rules, truck blind spots, and evading law enforcement penalties.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 21,
    testNumber: 10,
    title: "Alcohol, BAC & Legal Consequences",
    focus: "DUI chemical refusals, passenger open container laws, under-21 zero tolerance (0.01% BAC), and legal blood-alcohol limits (0.08% / 0.04%).",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 22,
    testNumber: 11,
    title: "Traffic Lanes, Markings & Pavement Lines",
    focus: "Solid yellow lane boundaries, center left turn lanes, turnout rules for queues of 5+ cars, and yield lines/sharks teeth.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 23,
    testNumber: 12,
    title: "Crucial Safety Equipment & Inspection",
    focus: "Headlight sunset/sunrise timings, high-beam dimming distances, tire tread levels, ABS braking methods, and window tint regulations.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 24,
    testNumber: 13,
    title: "Electronic Devices, Littering & Liability",
    focus: "Under-18 cell phone bans, hands-free phone mount placements, earbud regulations, littering fines, and 15/30/5 financial responsibility.",
    qCount: 10,
    time: "Approx 10 min"
  },
  {
    group: 25,
    testNumber: 14,
    title: "Special Roads, Point Systems & Emergency Handling",
    focus: "Mountain road single-lane meetings (uphill right-of-way), hydroplaning recovery, NOTS DMV point milestones, blind intersections, and alley speeds.",
    qCount: 8,
    time: "Approx 8 min"
  },
  {
    group: 26,
    testNumber: 15,
    title: "Hill Parking, Hand Signals & Special Rights",
    focus: "Uphill/downhill curb-restwheel calculations, arm hand gestures, parked vehicle collision duties, and horse/animal-drawn vehicle rights.",
    qCount: 8,
    time: "Approx 8 min"
  }
];

/**
 * Check if a practice test group is unlocked for the user.
 */
export function isPracticeTestUnlocked(testGroup: number, proPassUnlocked: boolean): boolean {
  if (FREE_TEST_GROUPS.includes(testGroup)) {
    return true;
  }
  return proPassUnlocked;
}

/**
 * Filter road signs visible to the user based on Pro Pass unlock status.
 */
export function getVisibleSigns(signs: RoadSign[], proPassUnlocked: boolean): RoadSign[] {
  if (proPassUnlocked) {
    return signs;
  }
  return signs.slice(0, FREE_SIGN_LIMIT);
}

/**
 * Filter flashcard signs visible to the user based on Pro Pass unlock status.
 */
export function getVisibleFlashcardSigns(signs: RoadSign[], proPassUnlocked: boolean): RoadSign[] {
  if (proPassUnlocked) {
    return signs;
  }
  return signs.slice(0, FREE_FLASHCARD_LIMIT);
}
