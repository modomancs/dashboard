import dynamic from "next/dynamic";
import { CardTitle } from "../HomePageStyles/StyledDashboard";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function TasksOverviewChart({ tasks }) {
  const todoCount = tasks.filter((task) => task.status === "todo").length;
  const inProgressCount = tasks.filter(
    (task) => task.status === "in_progress"
  ).length;
  const doneCount = tasks.filter((task) => task.status === "done").length;

  const series = [todoCount, inProgressCount, doneCount];

  const options = {
    chart: {
      type: "pie",
    },
    labels: ["To Do", "In Progress", "Done"],
    colors: ["#ef4444", "#f59e0b", "#22c55e"],
    legend: {
      labels: {
        colors: "rgba(255,255,255,0.85)",
      },
      position: "bottom",
      formatter: (seriesName, opts) => {
        return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#ffffff"],
        fontSize: "13px",
        fontWeight: 600,
      },
    },
  };

  return (
    <div>
      <CardTitle>Tasks overview</CardTitle>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={360}
      />
    </div>
  );
}
