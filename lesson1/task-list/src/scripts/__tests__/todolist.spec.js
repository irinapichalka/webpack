import { compareTasks } from "../render";

it("should compare tasks", () => {
  const a = 1;
  const b = 2;
  expect(compareTasks(a, b)).toEqual(a < b);
});
