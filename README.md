# Sort-and-Stack

A small TypeScript solution for classifying packages into shipping categories based on package dimensions and mass.

## Rules

A package is considered:

- **Bulky** if either:
  - `width * height * length >= 1_000_000` (cubic cm), or
  - any single dimension is `>= 150` cm.
- **Heavy** if:
  - `mass >= 20` kg.

Classification output:

- `"STANDARD"` if neither bulky nor heavy.
- `"SPECIAL"` if bulky or heavy, but not both.
- `"REJECTED"` if both bulky and heavy.

## Approach

The implementation computes volume, evaluates bulky/heavy flags, and then returns the final category using straightforward conditional logic.

## Function signature

```ts
sort(width: number, height: number, length: number, mass: number): "STANDARD" | "SPECIAL" | "REJECTED"
```

## Run instructions

```bash
npx tsc
node dist/index.js
```

## Test instructions

```bash
npx tsc
node dist/sorter.test.js
```

## Edge cases handled

- Exact volume threshold (`1_000_000`) is treated as bulky.
- Exact dimension threshold (`150`) is treated as bulky.
- Exact mass threshold (`20`) is treated as heavy.
- Combined bulky + heavy packages are rejected.

