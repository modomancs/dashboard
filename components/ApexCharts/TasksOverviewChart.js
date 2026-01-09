const { default: dynamic } = require("next/dynamic");

const reactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function TasksOverviewChart({ tasks }) {
  const todoCount = tasks.filter((task) => task.status === "todo").length;
  const inProgressCount = tasks.filter(
    (task) => task.status === "in_progress"
  ).length;
  const doneCount = task.filter((task) => task.status === "done").length;
}
