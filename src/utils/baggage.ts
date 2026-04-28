import type { BagAllowance } from '../types';

export function checkBagExceeds(
  userBag: { length: number; width: number; height: number; weight: number },
  allowance: BagAllowance | null
): boolean {
  if (!allowance) return true; // If no allowance info, assume it might not fit/isn't free

  // If the airline specifically marked it as not free included, flag it
  if (!allowance.freeIncluded) return true;

  const { dimensions, weight } = allowance;

  // Check dimensions if available
  if (dimensions) {
    const userDims = [userBag.length, userBag.width, userBag.height].sort((a, b) => b - a) as [number, number, number];
    const allowDims = [dimensions.length, dimensions.width, dimensions.height].sort((a, b) => b - a) as [number, number, number];

    // If any dimension is larger than allowed, it exceeds
    for (let i = 0; i < 3; i++) {
        const u = userDims[i] ?? 0;
        const a = allowDims[i] ?? 0;
        if (a > 0 && u > a) return true;
    }
  }

  // Check weight if available
  if (weight.value !== null && userBag.weight > weight.value) {
    return true;
  }

  return false;
}
