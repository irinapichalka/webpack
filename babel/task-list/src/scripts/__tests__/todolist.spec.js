/** @jest-environment jsdom */
import { compareTasks } from "../render";
import { createTask } from "../tasksGateway";

it("should compare tasks", () => {
  const a = {
    text: "Task1",
    done: false,
    id: "1",
    createDate: new Date("December 17, 1995 03:24:00"),
  };
  const b = {
    text: "Task1",
    done: false,
    id: "2",
    createDate: new Date("December 17, 1995 04:24:00"),
  };
  expect(compareTasks(a, b)).toEqual(3600000);
});

/*it("create task fetch", async () => {
  const taskData = { text: "Task 1", done: false, id: "1" };
  const response = await createTask(taskData);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://635674979243cf412f8501b0.mockapi.io/api/v1/tasks",
    { method: "POST" }
  );
  expect(response.id).toBe("1");
});*/
