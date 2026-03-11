export type PackageCategory = "STANDARD" | "SPECIAL" | "REJECTED";

/**
 * Classify a package based on its dimensions (cm) and mass (kg).
 */
export function sort(
  width: number,
  height: number,
  length: number,
  mass: number,
): PackageCategory {
  const volume = width * height * length;
  const isBulky = volume >= 1_000_000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) {
    return "REJECTED";
  }

  if (isBulky || isHeavy) {
    return "SPECIAL";
  }

  return "STANDARD";
}