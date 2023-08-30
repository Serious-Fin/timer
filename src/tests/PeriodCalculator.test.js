import { expect, test } from "vitest";
import PeriodCalculator from "./../helpers/PeriodCalculator";

test("Returns single session when time is less or equal 30 minutes", () => {
  expect(PeriodCalculator(1800)).toEqual([1800]);
});
