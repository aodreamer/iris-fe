import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["Kab. Bogor", "Kab. Sukabumi", "Kab. Cianjur", "Kab. Bandung", "Kab. Garut"],
    datasets: [
      {
        label: "Indeks Literasi",
        data: [23.8, 23.5, 20.4, 18.9, 19.3],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Indeks Prestasi",
        data: [99.1, 99.7, 99.7, 99.5, 99.3],
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
