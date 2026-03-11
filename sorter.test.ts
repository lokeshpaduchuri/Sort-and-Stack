declare const process: { exit(code?: number): never };

import { sort, type PackageCategory } from "./sorter";

type Case = {
  name: string;
  input: [number, number, number, number];
  expected: PackageCategory;
};

const cases: Case[] = [
  {
    name: "standard package",
    input: [30, 20, 10, 5],
    expected: "STANDARD",
  },
  {
    name: "bulky by dimension only",
    input: [150, 10, 10, 5],
    expected: "SPECIAL",
  },
  {
    name: "bulky by volume only",
    input: [100, 100, 100, 5],
    expected: "SPECIAL",
  },
  {
    name: "heavy only",
    input: [40, 40, 40, 20],
    expected: "SPECIAL",
  },
  {
    name: "both bulky and heavy",
    input: [200, 100, 100, 25],
    expected: "REJECTED",
  },
  {
    name: "exact threshold for volume",
    input: [100, 100, 100, 10],
    expected: "SPECIAL",
  },
  {
    name: "exact threshold for dimension",
    input: [149, 150, 149, 10],
    expected: "SPECIAL",
  },
  {
    name: "exact threshold for mass",
    input: [10, 10, 10, 20],
    expected: "SPECIAL",
  },
];

function assertEqual(actual: PackageCategory, expected: PackageCategory, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}\nExpected: ${expected}\nReceived: ${actual}`);
  }
}

let passed = 0;

for (const testCase of cases) {
  try {
    const actual = sort(...testCase.input);
    assertEqual(actual, testCase.expected, `Failed: ${testCase.name}`);
    passed += 1;
    console.log(`PASS: ${testCase.name}`);
  } catch (error) {
    console.error(`FAIL: ${testCase.name}`);
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

console.log(`\n${passed}/${cases.length} tests passed.`);