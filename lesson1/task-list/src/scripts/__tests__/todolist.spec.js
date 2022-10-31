import { compareTasks } from "../render";

it("should compare tasks", () => {
  const a = new Date("December 17, 1995 03:24:00");
  const b = new Date("December 17, 1995 04:24:00");
  expect(compareTasks(a, b)).toEqual(a < b);
});
