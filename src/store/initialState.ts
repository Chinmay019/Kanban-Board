import type { task } from "../types/types";
import { Status } from "../types/types";


export const initialData: task[] = [
  {
    taskId: "T001",
    title: "Design login page",
    status: Status.todo,
    description: "Create UI mockups for the login page including mobile responsiveness.",
    createdOn: new Date("2026-03-10")
  },
  {
    taskId: "T002",
    title: "Setup project repository",
    status: Status.done,
    description: "Initialize Git repository and configure project structure.",
    createdOn: new Date("2026-03-08"),
    completedOn: new Date("2026-03-08")
  },
  {
    taskId: "T003",
    title: "Implement authentication",
    status: Status.inProgress,
    description: "Add JWT based authentication and login API.",
    createdOn: new Date("2026-03-09")
  },
  {
    taskId: "T004",
    title: "Create task dashboard",
    status: Status.todo,
    description: "Build the dashboard page to display all tasks with status columns.",
    createdOn: new Date("2026-03-11")
  },
  {
    taskId: "T005",
    title: "Write unit tests",
    status: Status.inProgress,
    description: "Add Jest tests for authentication and task services.",
    createdOn: new Date("2026-03-12")
  },
  {
    taskId: "T006",
    title: "Deploy staging environment",
    status: Status.done,
    description: "Deploy the application to staging for QA testing.",
    createdOn: new Date("2026-03-05"),
    completedOn: new Date("2026-03-07")
  }
];