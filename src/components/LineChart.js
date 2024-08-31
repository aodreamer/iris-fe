import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Rate Literasi",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Siswa Putus/Mengulang SD",
        data: [30, 28, 40, 45, 26, 25, 20],
        fill: false,
        borderColor: "rgba(200,75,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-iris-dark-grey bg-iris-grey content-center">Line Chart</div>
      <div className="row-span-7 rounded-lg p-2">
        <div className="mx-auto min-w-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default LineChart;
