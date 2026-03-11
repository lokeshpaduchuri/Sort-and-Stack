import { sort } from "./sorter";

type Sample = {
  label: string;
  width: number;
  height: number;
  length: number;
  mass: number;
};

const samples: Sample[] = [
  { label: "Everyday parcel", width: 30, height: 20, length: 15, mass: 2 },
  { label: "Bulky by size", width: 160, height: 20, length: 20, mass: 5 },
  { label: "Heavy only", width: 40, height: 40, length: 40, mass: 25 },
  { label: "Bulky and heavy", width: 200, height: 100, length: 100, mass: 30 },
];

for (const sample of samples) {
  const category = sort(sample.width, sample.height, sample.length, sample.mass);
  console.log(
    `${sample.label}: (${sample.width}cm x ${sample.height}cm x ${sample.length}cm, ${sample.mass}kg) -> ${category}`,
  );
}